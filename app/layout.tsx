import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Zorgbewaking.nl — Zorgbeveiliging met zorginzicht | Praesidion Security",
    template: "%s | Zorgbewaking.nl",
  },
  description:
    "Professionele zorgbeveiliging in Limburg. De-escalatie getrainde beveiligers voor ziekenhuizen, verpleeghuizen, GGZ en AZC. Praesidion Security — vergunning ND 8968.",
  metadataBase: new URL("https://zorgbewaking.nl"),
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Zorgbewaking.nl",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col bg-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
