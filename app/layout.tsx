import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdLink from "@/components/AdLink";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kook - Bulletin Board",
    template: "%s | Kook",
  },
  description:
    "A simple bulletin board site sharing reactions and discussions.",
  openGraph: {
    title: "Kook",
    description:
      "A simple bulletin board site sharing reactions and discussions.",
    url: "https://kook.example.com",
    siteName: "Kook",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kook",
    description:
      "A simple bulletin board site sharing reactions and discussions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="application/ld+json" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Kook",
            url: "https://kook-one.vercel.app/",
          })}
        </Script>
        <Script
          type="text/javascript"
          src="//pl28019608.effectivegatecpm.com/24/10/9c/24109c40f48069ccaa8d6493732cca89.js"
        />
      </head>
      <body
        className={`${inter.className} bg-background text-text antialiased dark`}
      >
        <Header />
        <div className="my-12">
          <AdLink />
          <div className="my-8">{children}</div>
          <AdLink />
        </div>
        <Footer />
        <Script
          async={true}
          data-cfasync={false}
          src="//pl28019662.effectivegatecpm.com/a5514b123fb0574fbffdc79e24a78b5f/invoke.js"
        ></Script>
      </body>
    </html>
  );
}
