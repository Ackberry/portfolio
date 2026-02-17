import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Flex } from "next/font/google";
import { Oxygen_Mono } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import type { ReactNode } from 'react';
import ClientLayout from './components/ClientLayout';

import "./globals.css";
import "@fontsource/dm-mono/400.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oxygenMono = Oxygen_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-oxygen-mono',
  display: 'swap',
});

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "portfolio",
  description: "created by deep ackberry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${geistSans.variable} ${geistMono.variable} ${oxygenMono.variable} ${robotoFlex.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <body className="antialiased bg-black text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
