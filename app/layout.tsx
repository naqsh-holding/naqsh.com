import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { montserrat } from "./lib/fonts"
import Cursor from "./components/ui/Cursor"
import { criticalCSS } from "./lib/critical-css"

export const metadata: Metadata = {
  title: "Naqsh Holding Company | Investment Leader | To Leave a Trace",
  description:
    "Naqsh Holding Company is a leading investment firm in Saudi Arabia with 5 diverse subsidiaries: 6 Degrees Technologies, Efficiency Center Business Inc., Promotion Efficiency for Advertising, Burooj, and Burooj Air. Discover our innovative projects and strategic investments across technology, business incubation, marketing, real estate, and aviation sectors.",
  generator: "Next.js",
  applicationName: "Naqsh Holding Company",
  keywords: [
    "Naqsh Holding Company",
    "investment company Saudi Arabia",
    "Saudi investment firm",
    "technology investment",
    "business incubation Saudi Arabia",
    "marketing services Riyadh",
    "real estate development Saudi Arabia",
    "aviation services Saudi Arabia",
    "6 Degrees Technologies",
    "Efficiency Center Business Inc",
    "Promotion Efficiency for Advertising",
    "Burooj real estate",
    "Burooj Air aviation",
    "investment opportunities Saudi Arabia",
    "business services Riyadh",
    "corporate investment",
    "portfolio companies",
    "strategic investments"
  ],
  authors: [{ name: "Naqsh Holding Company" }],
  creator: "Naqsh Holding Company",
  publisher: "Naqsh Holding Company",
  metadataBase: new URL("https://naqsh.com.sa"), 
  openGraph: {
    title: "Naqsh Holding Company | Investment Leader | To Leave a Trace",
    description:
      "Naqsh Holding Company is a leading investment firm in Saudi Arabia with 5 diverse subsidiaries across technology, business incubation, marketing, real estate, and aviation sectors. Discover our innovative projects and strategic investments.",
    url: "https://naqsh.com.sa", 
    siteName: "Naqsh Holding Company",
    images: [
      {
        url: "/naqsh-og.png", 
        width: 1200,
        height: 630,
        alt: "Naqsh Holding Company - Leading Investment Firm in Saudi Arabia with Diverse Portfolio of Technology, Business Incubation, Marketing, Real Estate, and Aviation Companies",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Saudi Arabia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naqsh Holding Company | Investment Leader | To Leave a Trace",
    description:
      "Naqsh Holding Company is a leading investment firm in Saudi Arabia with 5 diverse subsidiaries across technology, business incubation, marketing, real estate, and aviation sectors.",
    images: ["/naqsh-og.png"], 
    creator: "@naqsh_holding",
    site: "@naqsh_holding",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      "noimageindex": false,
      "notranslate": false,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://naqsh.com.sa",
    languages: {
      'en-US': '/en-US',
      'ar-SA': '/ar-SA',
    },
  },
  category: "Business",
  classification: "Investment Company",
  other: {
    "geo.region": "SA",
    "geo.placename": "Khobar",
    "geo.position": "26.2791;50.2080",
    "ICBM": "26.2791, 50.2080",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and icon references for all devices and browsers */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Critical resource preloading for LCP optimization */}
        <link rel="preload" as="image" href="https://hel1.your-objectstorage.com/naqsh-pord/images/hero-background.png" fetchPriority="high" />
        
        {/* Preload critical company images */}
        <link rel="preload" as="image" href="https://hel1.your-objectstorage.com/naqsh-pord/Naqsh%20Website-01.png" fetchPriority="high" />
        <link rel="preload" as="image" href="https://hel1.your-objectstorage.com/naqsh-pord/Naqsh%20Website-02.png" fetchPriority="high" />
        
        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/montserrat-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        

        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//hel1.your-objectstorage.com" />
        <link rel="dns-prefetch" href="//app.pipedrive.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        
        {/* Preconnect to critical domains with higher priority */}
        <link rel="preconnect" href="https://hel1.your-objectstorage.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://app.pipedrive.com" crossOrigin="anonymous" />
        
        {/* Resource hints for better performance */}
        <link rel="modulepreload" href="/_next/static/chunks/pages/_app.js" />
        
        {/* Additional performance optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        
        {/* Critical CSS inline to eliminate render-blocking */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Register service worker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Naqsh Holding Company",
              "url": "https://naqsh.com.sa",
              "logo": "https://naqsh.com.sa/naqsh-white.png",
              "description": "Naqsh Holding Company is an investment leader with 5 diverse subsidiaries across technology, business incubation, marketing, real estate, and aviation sectors.",
              "foundingDate": "2020",
              "slogan": "To Leave a Trace",
              "numberOfEmployees": "500+",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Khobar",
                "addressCountry": "SA",
                "addressRegion": "Eastern Province",
                "addressLocality": "Khobar"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@naqsh.com.sa",
                "telephone": "0535558889",
                "availableLanguage": ["English", "Arabic"]
              },
              "sameAs": [
                "https://linkedin.com/company/naqsh-holding-company",
                "https://instagram.com/naqsh_holding"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Investment Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Technology Investment",
                      "description": "Investment in technology and smart solutions through 6 Degrees Technologies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Business Incubation",
                      "description": "Business incubation and co-working services through Efficiency Center Business Inc."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Marketing Services",
                      "description": "Marketing and creative production services through Promotion Efficiency for Advertising"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Real Estate Development",
                      "description": "Real estate development and construction through Burooj"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Aviation Services",
                      "description": "Aviation services and solutions through Burooj Air"
                    }
                  }
                ]
              },
              "subOrganization": [
                {
                  "@type": "Organization",
                  "name": "6 Degrees Technologies",
                  "description": "Technology & Smart Solutions",
                  "url": "https://naqsh.com.sa/#companies"
                },
                {
                  "@type": "Organization", 
                  "name": "Efficiency Center Business Inc.",
                  "description": "Business Incubation & Co-working",
                  "url": "https://naqsh.com.sa/#companies"
                },
                {
                  "@type": "Organization",
                  "name": "Promotion Efficiency for Advertising", 
                  "description": "Marketing & Creative Production",
                  "url": "https://naqsh.com.sa/#companies"
                },
                {
                  "@type": "Organization",
                  "name": "Burooj",
                  "description": "Real Estate Development & Construction",
                  "url": "https://naqsh.com.sa/#companies"
                },
                {
                  "@type": "Organization",
                  "name": "Burooj Air",
                  "description": "Aviation Services & Solutions",
                  "url": "https://naqsh.com.sa/#companies"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${montserrat.className} cursor-none`}>
        {children}
        <Cursor />
      </body>
    </html>
  )
}
