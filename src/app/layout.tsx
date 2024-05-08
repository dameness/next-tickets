import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import AuthProvider from "@/providers/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Tickets",
  description: "Tickets app created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main className="flex w-[96%] mx-auto min-h-screen flex-col items-center ">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
