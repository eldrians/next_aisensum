import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

// libs
import { cn } from "@/libs/utils";

// config
import { siteConfig } from "@/constants/config";

//shadcn
import * as UI from "@/components/ui";

// components
import { Providers } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", inter.className)}>
        <Providers>{children}</Providers>
        <UI.Toaster />
      </body>
    </html>
  );
}
