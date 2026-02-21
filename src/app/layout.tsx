import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Omah Bude Daycare | Rumah Kedua untuk Tumbuh Kembang Si Kecil",
  description: "Omah Bude Daycare menyediakan layanan pengasuhan dan pendidikan anak usia 0-5 tahun dengan pendekatan holistik, lingkungan aman, dan pengasuh berpengalaman. Mengasuh sepenuh hati.",
  keywords: ["daycare", "nursery", "pengasuhan anak", "pendidikan anak", "Omah Bude", "Jakarta daycare", "taman kanak-kanak"],
  authors: [{ name: "Omah Bude Daycare" }],
  icons: {
    icon: "/webomahbude/images/logo.png",
    apple: "/webomahbude/images/logo.png",
  },
  openGraph: {
    title: "Omah Bude Daycare",
    description: "Rumah Kedua untuk Tumbuh Kembang Si Kecil. Mengasuh sepenuh hati.",
    url: "https://omahbude.com",
    siteName: "Omah Bude Daycare",
    type: "website",
    images: [
      {
        url: "/webomahbude/images/hero/hero-main.png",
        width: 1344,
        height: 768,
        alt: "Omah Bude Daycare Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omah Bude Daycare",
    description: "Rumah Kedua untuk Tumbuh Kembang Si Kecil",
    images: ["/webomahbude/images/hero/hero-main.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${manrope.variable} ${ibmPlexMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
