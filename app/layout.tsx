import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kook - Bulletin Board",
    template: "%s | Kook",
  },
  description: "A simple bulletin board site sharing reactions and discussions.",
  openGraph: {
    title: "Kook",
    description: "A simple bulletin board site sharing reactions and discussions.",
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
    description: "A simple bulletin board site sharing reactions and discussions.",
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
    <html lang="ko">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "게시판 사이트",
            "url": "https://example.com",
          })}
        </script>
      </head>
      <body className={`${inter.className} bg-background text-text antialiased dark`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
