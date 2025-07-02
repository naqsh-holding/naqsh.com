import { Metadata } from "next"
import { notFound } from "next/navigation"
import NewsArticleClient from "./NewsArticleClient"
import { getAllNews } from "../../lib/data/news"

// Generate static params for all news articles
export async function generateStaticParams() {
  const allNewsItems = getAllNews()
  return allNewsItems.map((item) => ({
    slug: item.slug,
  }))
}

// Get all news items and create a lookup object
const allNewsItems = getAllNews()
const newsData = allNewsItems.reduce((acc, item) => {
  acc[item.slug] = {
    id: item.id,
    title: item.title,
    subtitle: item.excerpt || "",
    category: item.categories[0]?.name || "GENERAL",
    author: item.author || "Naqsh Communications",
    date: `${item.month} ${item.day}, 2024`,
    readTime: item.readTime || "3 min read",
    heroImage: item.image,
    content: [
      ...(item.content1 ? [{
        type: "paragraph",
        text: item.content1
      }] : []),
      ...(item.content2 ? [{
        type: "paragraph",
        text: item.content2
      }] : []),
      ...(item.content3 ? [{
        type: "paragraph",
        text: item.content3
      }] : []),
      ...((!item.content1 && !item.content2 && !item.content3) ? [{
        type: "paragraph",
        text: item.excerpt || "Content coming soon..."
      }] : [])
    ]
  }
  return acc
}, {} as Record<string, any>)

interface NewsArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const article = newsData[params.slug as keyof typeof newsData]

    if (!article) {
    return {
      title: "Article Not Found | Naqsh Holding Company",
      description: "The requested news article could not be found.",
    }
  }

  const articleUrl = `https://naqsh.com.sa/news/${params.slug}`
  const articleImage = article.heroImage.startsWith('http') ? article.heroImage : `https://naqsh.com.sa${article.heroImage}`
  
  // Ensure the image URL is absolute and accessible
  const whatsappImage = articleImage.startsWith('https://hel1.your-objectstorage.com') 
    ? articleImage 
    : `https://hel1.your-objectstorage.com/naqsh-pord${article.heroImage}`

  return {
    title: `${article.title} | Naqsh Holding Company`,
    description: article.subtitle || `Read about ${article.title} - Latest news and updates from Naqsh Holding Company.`,
    keywords: [
      article.title,
      "Naqsh Holding news",
      article.category.toLowerCase(),
      "Saudi Arabia business news",
      "investment company updates",
      "corporate news Riyadh",
      "business announcements Saudi Arabia",
      article.author,
      "Naqsh Holding Company"
    ],
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.subtitle || `Read about ${article.title} - Latest news and updates from Naqsh Holding Company.`,
      url: articleUrl,
      siteName: "Naqsh Holding Company",
      images: [
        {
          url: whatsappImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      section: article.category,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.subtitle || `Read about ${article.title} - Latest news and updates from Naqsh Holding Company.`,
      images: [whatsappImage],
      creator: "@naqsh_holding",
      site: "@naqsh_holding",
    },
    alternates: {
      canonical: articleUrl,
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
    other: {
      "article:published_time": article.date,
      "article:author": article.author,
      "article:section": article.category,
      "article:tag": article.category,
      // WhatsApp specific meta tags
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:image:type": "image/png",
      "og:image:secure_url": whatsappImage,
      // LinkedIn specific meta tags
      "og:image:alt": article.title,
      "og:description": article.subtitle || `Read about ${article.title} - Latest news and updates from Naqsh Holding Company.`,
      "og:title": article.title,
      "og:url": articleUrl,
      "og:site_name": "Naqsh Holding Company",
      "og:type": "article",
      "og:locale": "en_US",
      // Additional LinkedIn optimizations
      "linkedin:owner": "naqsh-holding",
      "linkedin:card": "summary_large_image",
    },
  }
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = newsData[params.slug as keyof typeof newsData]

  if (!article) {
    notFound()
  }

  return <NewsArticleClient article={article} slug={params.slug} />
}
