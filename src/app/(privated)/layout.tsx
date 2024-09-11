import '../../styles/global.styles.scss';
import { WrapperAtom } from '@/components/UI/atoms/wrapper/wrapper.atom';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute={'class'}>
          <WrapperAtom>{children}</WrapperAtom>
        </ThemeProvider>
      </body>
    </html>
  );
}
