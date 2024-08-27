import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Skeleton from "./components/skeleton";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Douglas Junior",
  description: "Douglas Junior Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

const locales = ["en", "pt"];

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
          <Skeleton locale={locale}>{children}</Skeleton>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
