import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { title } from "@/config/site";
import Navbar from "./_sections/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: title, template: "%s | " + title },
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png",
    },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex">
            <Navbar />
            {children}
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
