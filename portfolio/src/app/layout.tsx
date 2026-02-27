import type { Metadata } from "next";
import { EB_Garamond, Oxygen_Mono, Red_Hat_Text, Roboto_Flex } from "next/font/google";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from 'react';
import ClientLayout from './components/ClientLayout';

import "./globals.css";
import "@fontsource/dm-mono/400.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
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

const redHatText = Red_Hat_Text({
  subsets: ['latin'],
  variable: '--font-red-hat-text',
  display: 'swap',
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
      className={`${ebGaramond.variable} ${oxygenMono.variable} ${robotoFlex.variable} ${redHatText.variable}`}
    >
      <body className="antialiased bg-[#F2EDE4] text-[#1A1A1A]">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
