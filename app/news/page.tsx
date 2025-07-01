import { Metadata } from "next"
import { getAllNews } from "../lib/data/news"
import NewsPageClient from "./NewsPageClient"

export const metadata: Metadata = {
  title: "Latest News & Updates | Naqsh Holding Company",
  description: "Stay updated with the latest news, announcements, and insights from Naqsh Holding Company and our subsidiaries. Discover our latest projects, achievements, and industry developments across technology, business incubation, marketing, real estate, and aviation sectors.",
  keywords: [
    "Naqsh Holding news",
    "Saudi Arabia business news",
    "investment company updates",
    "technology sector news",
    "business incubation updates",
    "marketing industry news",
    "real estate development news",
    "aviation services updates",
    "6 Degrees Technologies news",
    "Efficiency Center updates",
    "Promotion Efficiency news",
    "Burooj real estate news",
    "Burooj Air aviation news",
    "Saudi investment updates",
    "corporate news Riyadh",
    "business announcements Saudi Arabia"
  ],
  openGraph: {
    title: "Latest News & Updates | Naqsh Holding Company",
    description: "Stay updated with the latest news, announcements, and insights from Naqsh Holding Company and our subsidiaries across technology, business incubation, marketing, real estate, and aviation sectors.",
    url: "https://naqsh.com.sa/news",
    siteName: "Naqsh Holding Company",
    images: [
      {
        url: "/images/news-og.png",
        width: 1200,
        height: 630,
        alt: "Naqsh Holding Company - Latest News and Updates from Our Diverse Portfolio of Companies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest News & Updates | Naqsh Holding Company",
    description: "Stay updated with the latest news, announcements, and insights from Naqsh Holding Company and our subsidiaries.",
    images: ["/images/news-og.png"],
    creator: "@naqsh_holding",
    site: "@naqsh_holding",
  },
  alternates: {
    canonical: "https://naqsh.com.sa/news",
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
    },
  },
}

export default function NewsPage() {
  const allNews = getAllNews()
  
  return <NewsPageClient allNews={allNews} />
}
