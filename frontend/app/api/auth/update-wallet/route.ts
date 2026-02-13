import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, tonWallet } = body;

    if (!userId) {
      return NextResponse.json({ error: 'userId required' }, { status: 400 });
    }

    const id = typeof userId === 'string' ? parseInt(userId, 10) : userId;
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: 'Invalid userId' }, { status: 400 });
    }

    const { error } = await supabase
      .from('User')
      .update({ tonWallet: tonWallet != null ? String(tonWallet) : '' })
      .eq('id', id);

    if (error) {
      console.error('update-wallet error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('update-wallet error:', error);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
