/** @format */

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Env } from "./env";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: Env.TITLE,
  description: Env.SHORT_DESC,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>

        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="icon" href="/logo.png" type="image/x-icon" sizes="16x16" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
