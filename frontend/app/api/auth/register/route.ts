import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { telegramId, telegramUsername, isPremium, nickname, tonWallet, referralCode } = body;

    if (!telegramId || !nickname || !tonWallet) {
      return NextResponse.json(
        { error: 'telegramId, nickname, and tonWallet are required' },
        { status: 400 }
      );
    }

    let referrerId = 1;
    if (referralCode && referralCode !== 'MASTER') {
      const { data: referrer } = await supabase
        .from('User')
        .select('id')
        .eq('referralCode', String(referralCode).toUpperCase())
        .single();

      if (referrer) {
        referrerId = referrer.id;
      }
    }

    const referralCodeValue = String(nickname).toUpperCase().slice(0, 10);

    const { data: user, error } = await supabase
      .from('User')
      .insert({
        telegramId: String(telegramId),
        telegramUsername: telegramUsername || null,
        nickname,
        referrerId,
        referralCode: referralCodeValue,
        isPremium: Boolean(isPremium),
        accountCreatedDate: new Date().toISOString(),
        tonWallet: String(tonWallet),
        role: 'USER',
        isVerified: true,
      })
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        console.log('23505 error, looking up telegramId:', telegramId, 'type:', typeof telegramId);
        // Try find by telegramId first (string and number formats)
        const { data: byTelegram } = await supabase
          .from('User')
          .select()
          .or(`telegramId.eq.${String(telegramId)},telegramId.eq.${Number(telegramId)}`)
          .single();

        if (byTelegram) {
          return NextResponse.json({ success: true, user: byTelegram });
        }

        // Try find by nickname
        const { data: byNickname } = await supabase
          .from('User')
          .select()
          .eq('nickname', nickname)
          .single();

        if (byNickname) {
          return NextResponse.json({ success: false, error: 'Nickname already taken' }, { status: 400 });
        }

        return NextResponse.json({ error: 'User already exists' }, { status: 400 });
      }
      console.error('Registration error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}
