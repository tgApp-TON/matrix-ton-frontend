import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get('userId');
  if (!userId) return NextResponse.json({ success: false });

  const { data: tables } = await supabase
    .from('MatrixTable')
    .select('*')
    .eq('userId', userId);

  return NextResponse.json({ success: true, tables: tables || [] });
}
