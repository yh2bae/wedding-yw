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
      <meta name="google" content="notranslate" />
      <link rel="preload" as="image" href="/images/cover.jpeg"></link>
      <meta property="og:site_name" content="Yudha and Wulan Wedding" />
      <meta property="og:title" content="Yudha and Wulan Wedding" />
      <meta
        name="description"
        content="You have always been a big part of our lives. You are cordially invited!"
      />
      <meta
        property="og:description"
        content="You have always been a big part of our lives. You are cordially invited!"
      />
      <meta property="og:url" content="https://yudha-wulan.vercel.app/" />
      <meta
        property="og:image"
        content="/images/cover.jpeg"
      />
       <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <body className={`${merriweather.className} bg-black overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
