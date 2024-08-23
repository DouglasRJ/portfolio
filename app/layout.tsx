import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Skeleton from "./components/skeleton";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Douglas Junior",
  description: "Douglas Junior Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Skeleton>{children}</Skeleton>
      </body>
    </html>
  );
}
