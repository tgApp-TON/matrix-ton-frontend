'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
}

interface TelegramContextType {
  user: TelegramUser | null;
  webApp: any;
  isReady: boolean;
  isPremium: boolean;
  referralCode: string | null;
}

const TelegramContext = createContext<TelegramContextType>({
  user: null,
  webApp: null,
  isReady: false,
  isPremium: false,
  referralCode: null
});

export function TelegramProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [referralCode, setReferralCode] = useState<string | null>(null);

  useEffect(() => {
    let retryTimeout: ReturnType<typeof setTimeout> | undefined;

    const initTelegram = () => {
      const tg = typeof window !== 'undefined' ? window.Telegram?.WebApp : null;
      const initDataUnsafe = tg?.initDataUnsafe;
      const userFromUnsafe = initDataUnsafe?.user;

      console.log('userFromUnsafe:', JSON.stringify(userFromUnsafe));
      console.log('initDataUnsafe full:', JSON.stringify(initDataUnsafe));

      if (typeof window !== 'undefined' && tg && userFromUnsafe) {
        tg.ready();
        tg.expand();
        tg.setHeaderColor('#000000');
        tg.setBackgroundColor('#000000');
        setUser({
          id: userFromUnsafe.id,
          first_name: userFromUnsafe.first_name,
          last_name: userFromUnsafe.last_name,
          username: userFromUnsafe.username,
          language_code: userFromUnsafe.language_code,
          is_premium: userFromUnsafe.is_premium
        });
        const startParam = initDataUnsafe?.start_param ?? null;
        if (startParam) setReferralCode(startParam);
        setIsReady(true);
      } else if (typeof window !== 'undefined' && tg) {
        tg.ready();
        tg.expand();
        tg.setHeaderColor('#000000');
        tg.setBackgroundColor('#000000');
        retryTimeout = setTimeout(initTelegram, 500);
        return;
      } else {
        setUser(null);
        const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
        const refParam = urlParams?.get('ref');
        if (refParam) setReferralCode(refParam);
        setIsReady(true);
      }
    };

    initTelegram();

    const tg = typeof window !== 'undefined' ? window.Telegram?.WebApp : null;
    if (tg?.onEvent) {
      tg.onEvent('viewport_changed', initTelegram);
    }

    return () => {
      if (retryTimeout) clearTimeout(retryTimeout);
      if (tg?.offEvent) tg.offEvent('viewport_changed', initTelegram);
    };
  }, []);

  const value = {
    user,
    webApp: typeof window !== 'undefined' ? window.Telegram?.WebApp : null,
    isReady,
    isPremium: user?.is_premium || false,
    referralCode
  };

  return (
    <TelegramContext.Provider value={value}>
      {children}
    </TelegramContext.Provider>
  );
}

export const useTelegram = () => useContext(TelegramContext);
