import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { engineBuyTable } from '@/lib/matrix-engine';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, tableNumber } = body;

    if (userId == null || tableNumber == null) {
      return NextResponse.json(
        { success: false, error: 'userId and tableNumber are required' },
        { status: 400 }
      );
    }

    const uid = Number(userId);
    const tn = Number(tableNumber);

    if (Number.isNaN(uid) || uid < 1) {
      return NextResponse.json({ success: false, error: 'Invalid userId' }, { status: 400 });
    }
    if (Number.isNaN(tn) || tn < 1 || tn > 12) {
      return NextResponse.json({ success: false, error: 'tableNumber must be 1-12' }, { status: 400 });
    }

    const result = await engineBuyTable(uid, tn, supabase);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error ?? 'Purchase failed' },
        { status: 400 }
      );
    }

    const { data: user } = await supabase
      .from('User')
      .select('walletBalance')
      .eq('id', uid)
      .single();

    const newBalance = user?.walletBalance != null ? Number(user.walletBalance) : undefined;

    return NextResponse.json({
      success: true,
      newBalance,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to buy table';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
