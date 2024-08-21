import type { Metadata } from "next";
import "./globals.css";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata = {
  title: "Yudha & Wulan - Wedding Invitation",
  description: "Undangan Pernikahan Yudha & Wulan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="You have always been a big part of our lives. You are cordially invited!"
        />
        <meta name="google" content="notranslate" />

        {/* Open Graph Meta Tags */}
        <meta property="og:site_name" content="Yudha and Wulan Wedding" />
        <meta property="og:title" content="Yudha and Wulan Wedding" />
        <meta
          property="og:description"
          content="You have always been a big part of our lives. You are cordially invited!"
        />
        <meta property="og:url" content="https://yudha-wulan.my.id/" />
        <meta
          property="og:image"
          content="https://yudha-wulan.my.id/images/cover.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yudha and Wulan Wedding" />
        <meta
          name="twitter:description"
          content="You have always been a big part of our lives. You are cordially invited!"
        />
        <meta
          name="twitter:image"
          content="https://yudha-wulan.my.id/images/cover.webp"
        />

        {/* Preload the image */}
        <link rel="preload" as="image" href="/images/cover.webp" />
        <link rel="preload" as="image" href="/images/countdown.webp" />
      <body className={`${merriweather.className} bg-black overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
