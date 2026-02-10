'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTelegram } from '@/components/providers/TelegramProvider';

export default function Home() {
  const router = useRouter();
  const { user, isReady } = useTelegram();

  useEffect(() => {
    const checkAndRedirect = async () => {
      const telegramId = user?.id;
      if (!telegramId || !isReady) return;

      try {
        const res = await fetch(`/api/auth/check?telegramId=${telegramId}`);
        const data = await res.json();
        if (data.registered) {
          router.replace('/tables');
        } else {
          router.replace('/register');
        }
      } catch {
        router.replace('/register');
      }
    };

    checkAndRedirect();
  }, [user?.id, isReady, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
    </div>
  );
}
