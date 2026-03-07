import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import { siteConfig } from "../app.config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-romantic" });

export const metadata: Metadata = {
  title: `Happy ${siteConfig.occasion}`,
  description: `${siteConfig.occasion} wishes page`
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${greatVibes.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
