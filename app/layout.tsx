import type { Metadata, Viewport } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";
import Footer from "./components/Footer";
// import ChatWidget from "./components/ChatWidget";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: {
    default: "Kaif Shaikh - Full Stack Developer | Portfolio",
    template: "%s | Kaif Shaikh"
  },
  description: "Full-stack developer focused on production-ready systems, performance, and long-term maintainability. Specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js", "Node.js", "JavaScript", "TypeScript", "Web Development", "Portfolio", "Kaif Shaikh"],
  authors: [{ name: "Kaif Shaikh", url: "https://theKaifshaikh.com" }],
  creator: "Kaif Shaikh",
  publisher: "Kaif Shaikh",
  metadataBase: new URL('https://theKaifshaikh.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://theKaifshaikh.com',
    title: 'Kaif Shaikh - Full Stack Developer | Portfolio',
    description: 'Full-stack developer focused on production-ready systems, performance, and long-term maintainability.',
    siteName: 'Kaif Shaikh Portfolio',
    images: [
      {
        url: '/Kaifdev.png',
        width: 1200,
        height: 630,
        alt: 'Kaif Shaikh - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaif Shaikh - Full Stack Developer | Portfolio',
    description: 'Full-stack developer focused on production-ready systems, performance, and long-term maintainability.',
    creator: '@Kaifcodes',
    images: ['/Kaifdev.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kaif Shaikh",
    "jobTitle": "Full Stack Developer",
    "description": "Full-stack developer focused on production-ready systems, performance, and long-term maintainability.",
    "url": "https://theKaifshaikh.com",
    "sameAs": [
      "https://github.com/sk-kaif",
      "https://www.linkedin.com/in/shaikh-kaif-62ba3725b/",
      "https://x.com/shaikhkaif_?s=11&t=IiJuhe8cESBqfifsYfgtZw",
      "https://x.com/theKaifshaikh"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "Kaifcodes@gmail.com",
      "contactType": "professional"
    },
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Full Stack Development",
      "Web Development"
    ]
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${interTight.variable} ${jetbrainsMono.variable} antialiased`} style={{ fontFamily: 'var(--font-inter-tight)' }}>
        <Navbar />
        {children}
        {/* <ChatWidget /> */}
        <Footer />
      </body>
    </html>
  );
}
