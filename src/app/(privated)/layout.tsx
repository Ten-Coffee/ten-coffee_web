import '../../styles/global.styles.scss';
import { WrapperAtom } from '@/components/UI/atoms/wrapper/wrapper.atom';
import { ReactQueryProvider } from '@/providers/react-query.provider';
import { ToastProvider } from '@/providers/toast.provider';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ReactNode } from 'react';
import '@radix-ui/themes/styles.css';

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NuqsAdapter>
          <ThemeProvider attribute={'class'}>
            <ReactQueryProvider>
              <Theme>
                <ToastProvider>
                  <WrapperAtom>{children}</WrapperAtom>
                </ToastProvider>
              </Theme>
            </ReactQueryProvider>
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
