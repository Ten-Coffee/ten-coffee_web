import '../styles/global.styles.scss';
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
        <ThemeProvider attribute={'class'}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
