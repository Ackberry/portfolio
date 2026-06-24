import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from 'react';
import ClientLayout from './components/ClientLayout';

import "./globals.css";
import "@fontsource/vt323/400.css";
import "@fontsource/press-start-2p/400.css";

export const metadata: Metadata = {
  title: "Deep Akbari - builder, AI engineer, dog person",
  description: "Deep Akbari - CS at USF, AI/ML engineer, hackathon winner, and builder of useful things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
