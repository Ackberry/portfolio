import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat, EB_Garamond, JetBrains_Mono } from "next/font/google";
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

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-caveat',
  display: 'swap',
});

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ebGaramond.variable} ${jetBrainsMono.variable} ${bricolageGrotesque.variable} ${caveat.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
