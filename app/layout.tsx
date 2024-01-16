import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { TITLE } from "@/config/site";
import { ConfigWebProvider } from "@/context/config/config-web-provider";
import { ThemeProvider } from "@/context/theme";
import MainLayout from "@/sections/layouts/main/layout";
import { MinMaxWidthNavbar } from "@/context/config/type";

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
      <ConfigWebProvider
        defaultSettings={{
          widthNavbar: MinMaxWidthNavbar.MIN,
          theme: {
            mode: "light",
          },
        }}
      >
        <body className={inter.className}>
          <SessionProvider session={session}>
            <MainLayout>{children}</MainLayout>
          </SessionProvider>
        </body>
      </ConfigWebProvider>
    </html>
  );
}
