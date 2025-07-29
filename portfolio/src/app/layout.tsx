import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Oxygen_Mono } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import type { ReactNode } from 'react';

import "./globals.css";
import "@fontsource/dm-mono/400.css";

const inter = Inter({ subsets: ['latin'] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oxygenMono = Oxygen_Mono({
  subsets: ['latin'],
  weight: '400', // Oxygen Mono only has 400 weight
  variable: '--font-oxygen-mono',
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
      className={`${geistSans.variable} ${geistMono.variable} ${oxygenMono.variable}`}
    >
      <body className="antialiased bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}