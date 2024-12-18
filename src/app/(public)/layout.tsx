import '../../styles/global.styles.scss';
import { WrapperAtom } from '@/components/UI/atoms/wrapper/wrapper.atom';
import { ReactQueryProvider } from '@/providers/react-query.provider';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={'en'} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute={'class'}>
          <ReactQueryProvider>
            <WrapperAtom>{children}</WrapperAtom>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
