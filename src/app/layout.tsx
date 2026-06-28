import type { Metadata } from "next";
import type { ReactNode } from 'react';

import "./globals.css";

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
