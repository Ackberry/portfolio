import type { Metadata } from "next";
import type { ReactNode } from 'react';

import "./globals.css";
import "@fontsource/vt323/400.css";
import "@fontsource/pixelify-sans/600.css";
import "@fontsource/press-start-2p/400.css";

export const metadata: Metadata = {
  title: "Deep Akbari",
  description: "AI engineer and CS student at USF.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
