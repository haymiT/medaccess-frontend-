import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import Script from "next/script";

import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";
import "@mantine/notifications/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MedAccess",
  description:
    "MedAccess is a platform that connects patients with doctors and pharmacies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZMMYZDLSZ0"
        />

        <Script id="google-analytics">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', ${"${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"});
  `}
        </Script>
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <MantineProvider>
          <ModalsProvider>{children}</ModalsProvider>
          <Notifications position="bottom-right" />
        </MantineProvider>
      </body>
    </html>
  );
}
