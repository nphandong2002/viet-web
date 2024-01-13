import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { TITLE } from "@/config/site";
import { ConfigWebProvider } from "@/context/config/config-web-provider";
import Navbar from "@/sections/navbar/navbar";
import { ThemeProvider } from "@/context/theme";

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
    <html lang="en">
      <SessionProvider session={session}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <ConfigWebProvider
            defaultSettings={{
              widthNavbar: 200,
              theme: {
                mode: "light",
              },
            }}
          >
            <body className={inter.className}>
              <div className="flex">
                <Navbar />
                {children}
              </div>
            </body>
          </ConfigWebProvider>
        </ThemeProvider>
      </SessionProvider>
    </html>
  );
}
