'use client';

import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { ReactNode } from 'react';

const manifestUrl = 'https://xionton-app.vercel.app/tonconnect-manifest.json';

export function TonConnectProvider({ children }: { children: ReactNode }) {
  return (
    <TonConnectUIProvider
      manifestUrl={manifestUrl}
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/XionTonTON_Bot',
      }}
    >
      {children}
    </TonConnectUIProvider>
  );
}
