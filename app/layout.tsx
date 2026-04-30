import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

const iosevkaCharon = localFont({
  src: [
    {
      path: "./fonts/IosevkaCharon-Regular.woff2",

      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IosevkaCharon-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/IosevkaCharon-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iosevka-charon", // optional: exposes as CSS var
});

export const metadata: Metadata = {
  title: "Adamu Nasiru Zakari",
  description: "Frontend and Web3 Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${iosevkaCharon.className} bg-slate-950 `}>
        {children}
      </body>
    </html>
  );
}
