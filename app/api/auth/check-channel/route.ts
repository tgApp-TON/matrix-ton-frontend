import { NextRequest, NextResponse } from 'next/server';

const CHANNEL_USERNAME = 'MatrixTON_Official';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const telegramId = searchParams.get('telegramId');

  if (!telegramId) {
    return NextResponse.json({ subscribed: false, error: 'telegramId required' }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN || process.env.NOTIFY_BOT_TOKEN;
  if (!token) {
    return NextResponse.json({ subscribed: false, error: 'Bot not configured' }, { status: 500 });
  }

  try {
    const url = `https://api.telegram.org/bot${token}/getChatMember?chat_id=@${CHANNEL_USERNAME}&user_id=${telegramId}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data.ok) {
      if (data.description?.includes('user not found') || data.description?.includes('not found')) {
        return NextResponse.json({ subscribed: false });
      }
      return NextResponse.json({ subscribed: false, error: data.description });
    }

    const status = data.result?.status;
    const subscribed = ['member', 'administrator', 'creator'].includes(status);
    return NextResponse.json({ subscribed });
  } catch (error) {
    console.error('Channel check error:', error);
    return NextResponse.json({ subscribed: false }, { status: 500 });
  }
}
