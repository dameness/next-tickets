import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import Providers from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Next Tickets",
    template: "%s | Next Tickets",
  },
  description: "Tickets app created with Next.js",
  keywords: ["tickets", "issues", "manage"],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="flex w-[96%] max-w-7xl mx-auto h-[calc(100vh - 64px)] flex-col items-center ">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
