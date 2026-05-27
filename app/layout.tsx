import type { Metadata } from "next";

import Providers from "@/components/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Chris McClair | Portfolio",
  description:
    "Portfolio website for Chris McClair, a third-year computer science student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
