import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { TITLE } from "@/config/site";
import Navbar from "./_sections/navbar";
import { ConfigWebProvider } from "@/context/config/config-web-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: TITLE, template: "%s | " + TITLE },
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
      <ConfigWebProvider
        defaultSettings={{
          themeMode: "light",
          widthNavbar: 200,
        }}
      >
        <html lang="en">
          <body className={inter.className}>
            <div className="flex">
              <Navbar />
              {children}
            </div>
          </body>
        </html>
      </ConfigWebProvider>
    </SessionProvider>
  );
}
