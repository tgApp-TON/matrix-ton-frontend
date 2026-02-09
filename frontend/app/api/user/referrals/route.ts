import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Recursive function to count all referrals in the tree
async function countReferralTree(userId: number): Promise<number> {
  const { data: directRefs } = await supabase
    .from('User')
    .select('id')
    .eq('referrerId', userId);
  
  if (!directRefs || directRefs.length === 0) return 0;
  
  let total = directRefs.length;
  
  // Count referrals of each direct referral (recursive)
  for (const ref of directRefs) {
    total += await countReferralTree(ref.id);
  }
  
  return total;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID required' }, { status: 400 });
  }

  try {
    // Get DIRECT referrals (only those who came via this user's ref link)
    const { data: directReferrals, error } = await supabase
      .from('User')
      .select(`
        id,
        nickname,
        telegramUsername,
        accountCreatedDate,
        isVerified
      `)
      .eq('referrerId', parseInt(userId))
      .order('accountCreatedDate', { ascending: false });

    if (error) throw error;

    // Get stats for each direct referral
    const referralsWithStats = await Promise.all(
      (directReferrals || []).map(async (ref) => {
        // Count active tables
        const { data: tables } = await supabase
          .from('Table')
          .select('id')
          .eq('userId', ref.id)
          .eq('status', 'ACTIVE');

        // Count their direct referrals
        const { data: subReferrals } = await supabase
          .from('User')
          .select('id')
          .eq('referrerId', ref.id);

        // Calculate earnings (sum of completed table positions after 10% commission)
        const { data: positions } = await supabase
          .from('TablePosition')
          .select('amountPaid')
          .eq('partnerUserId', ref.id)
          .eq('status', 'PAID_OUT');

        const totalEarnings = (positions || []).reduce((sum, pos) => {
          // Subtract 10% commission
          const afterCommission = parseFloat(pos.amountPaid || '0') * 0.9;
          return sum + afterCommission;
        }, 0);

        return {
          ...ref,
          activeTables: tables?.length || 0,
          referralsCount: subReferrals?.length || 0,
          totalEarnings: Math.round(totalEarnings * 100) / 100 // Round to 2 decimals
        };
      })
    );

    // Count total tree (recursive - all levels)
    const totalTreeCount = await countReferralTree(parseInt(userId));

    // Get user's referrer (upline) info
    let upline = null;
    const { data: currentUser } = await supabase
      .from('User')
      .select('referrerId')
      .eq('id', parseInt(userId))
      .single();

    if (currentUser?.referrerId && currentUser.referrerId !== 1) {
      // Only fetch if referrer is NOT MASTER
      const { data: referrerData } = await supabase
        .from('User')
        .select('id, nickname, telegramUsername')
        .eq('id', currentUser.referrerId)
        .single();
      
      if (referrerData) {
        // Get referrer's stats
        const { data: refTables } = await supabase
          .from('Table')
          .select('id')
          .eq('userId', referrerData.id)
          .eq('status', 'ACTIVE');
        
        const { data: refReferrals } = await supabase
          .from('User')
          .select('id')
          .eq('referrerId', referrerData.id);
        
        upline = {
          ...referrerData,
          activeTables: refTables?.length || 0,
          referralsCount: refReferrals?.length || 0
        };
      }
    }

    return NextResponse.json({ 
      success: true, 
      directReferrals: referralsWithStats, // Only direct workers
      directCount: directReferrals?.length || 0, // Count of direct referrals
      totalTreeCount, // Total in entire tree (including sub-referrals)
      upline, // Add upline info
      stats: {
        direct: directReferrals?.length || 0,
        total: totalTreeCount
      }
    });
  } catch (error) {
    console.error('Referrals fetch error:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch referrals' 
    }, { status: 500 });
  }
}
