import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { sitePath } from "@/src/lib/site-path";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "SaaSGrowth360 | Premium Growth Systems for US SaaS",
    template: "%s | SaaSGrowth360",
  },
  description:
    "SaaSGrowth360 helps US SaaS companies accelerate acquisition, conversion, activation, retention and RevOps with connected growth systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="stylesheet" href={sitePath("/assets/css/style.css")} />
      </head>
      <body>{children}</body>
    </html>
  );
}
