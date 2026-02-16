import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'userId required' }, { status: 400 });
  }

  const id = parseInt(userId, 10);
  if (Number.isNaN(id) || id < 1) {
    return NextResponse.json({ error: 'Invalid userId' }, { status: 400 });
  }

  try {
    const { data: tables, error } = await supabase
      .from('MatrixTable')
      .select('tableNumber, slot1, slot2, slot3, slot4, frozen2Amount, cycleCount')
      .eq('userId', id)
      .order('tableNumber', { ascending: true });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      tables: (tables ?? []).map((t: any) => ({
        tableNumber: t.tableNumber,
        slot1: t.slot1,
        slot2: t.slot2,
        slot3: t.slot3,
        slot4: t.slot4,
        frozen2Amount: t.frozen2Amount != null ? Number(t.frozen2Amount) : null,
        cycleCount: t.cycleCount ?? 0,
      })),
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to fetch table status';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
