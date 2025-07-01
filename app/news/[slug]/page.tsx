import { Metadata } from "next"
import { notFound } from "next/navigation"
import NewsArticleClient from "./NewsArticleClient"

// Sample news data - in a real app, this would come from a CMS or API
const newsData = {
  "naqsh-holding-expands-portfolio-tech-acquisition": {
    id: 1,
    title: "Naqsh Holding Expands Portfolio with New Tech Acquisition",
    subtitle:
      "Strategic investment in emerging technology sector strengthens our commitment to innovation and digital transformation across the region.",
    category: "BUSINESS",
    author: "Mohammed Bin Faihan",
    date: "December 15, 2024",
    readTime: "4 min read",
    heroImage: "/images/keeta-billboard.jpeg",
    content: [
      {
        type: "paragraph",
        text: "Naqsh Holding continues to expand its diversified portfolio with a strategic acquisition in the technology sector, reinforcing our position as a forward-thinking investment group committed to driving innovation across multiple industries.",
      },
      {
        type: "heading",
        text: "Strategic Vision for Technology Integration",
      },
      {
        type: "paragraph",
        text: "This acquisition aligns perfectly with our long-term strategy of building a comprehensive ecosystem of companies that complement and strengthen each other. The technology sector represents a crucial pillar in our diversified approach to sustainable growth.",
      },
      {
        type: "paragraph",
        text: "Our investment philosophy centers on identifying companies with strong fundamentals, innovative solutions, and the potential to redefine industry standards. This latest addition to our portfolio exemplifies these principles.",
      },
      {
        type: "heading",
        text: "Synergies Across Our Portfolio",
      },
      {
        type: "paragraph",
        text: "The integration of advanced technology capabilities will create significant synergies across our existing subsidiaries, from construction and advertising to coworking spaces and drone services.",
      },
      {
        type: "list",
        items: [
          "Enhanced digital solutions for our construction projects",
          "Advanced analytics for our advertising campaigns",
          "Smart building technologies for our coworking spaces",
          "Integrated platforms for our drone service operations",
        ],
      },
      {
        type: "paragraph",
        text: "These synergies represent more than operational efficiencies; they embody our vision of creating an interconnected network of companies that drive innovation and deliver exceptional value to our clients.",
      },
      {
        type: "heading",
        text: "Looking Forward",
      },
      {
        type: "paragraph",
        text: "As we continue to grow and evolve, our commitment to excellence remains unwavering. This acquisition marks another milestone in our journey to build a lasting legacy of innovation and sustainable growth in the region.",
      },
    ],
  },
  "innovative-coworking-spaces-redefine-workplace": {
    id: 2,
    title: "Innovative Coworking Spaces Redefine Modern Workplace",
    subtitle:
      "Our latest coworking facility showcases the future of collaborative work environments, blending technology, design, and community to create inspiring spaces.",
    category: "WORKSPACE",
    author: "Sarah Al-Rashid",
    date: "December 12, 2024",
    readTime: "5 min read",
    heroImage: "/images/news/beautiful-places.png",
    content: [
      {
        type: "paragraph",
        text: "The modern workplace is evolving rapidly, and our innovative coworking spaces are at the forefront of this transformation. We're not just providing desks and meeting rooms; we're creating ecosystems that foster creativity, collaboration, and growth.",
      },
      {
        type: "heading",
        text: "Design Philosophy",
      },
      {
        type: "paragraph",
        text: "Our approach to coworking space design is rooted in understanding how people work best. Every element, from lighting and acoustics to furniture and technology integration, is carefully considered to enhance productivity and well-being.",
      },
      {
        type: "paragraph",
        text: "We believe that great design should be invisible – it should support and enhance the work experience without drawing attention to itself. This philosophy guides every decision we make in creating our spaces.",
      },
      {
        type: "heading",
        text: "Technology Integration",
      },
      {
        type: "paragraph",
        text: "Smart building technologies are seamlessly integrated throughout our facilities, providing members with intuitive control over their environment while optimizing energy efficiency and operational performance.",
      },
      {
        type: "list",
        items: [
          "IoT-enabled booking systems for meeting rooms and workstations",
          "Automated climate control based on occupancy patterns",
          "High-speed connectivity with redundant internet infrastructure",
          "Mobile app integration for seamless facility management",
        ],
      },
      {
        type: "paragraph",
        text: "These technological innovations create a frictionless experience for our members while providing valuable insights that help us continuously improve our services.",
      },
    ],
  },
  "sustainable-construction-practices-industry-change": {
    id: 3,
    title: "Sustainable Construction Practices Lead Industry Change",
    subtitle:
      "Our construction division pioneers environmentally responsible building practices that set new standards for sustainability in the region's development sector.",
    category: "CONSTRUCTION",
    author: "Ahmed Al-Mansouri",
    date: "December 8, 2024",
    readTime: "6 min read",
    heroImage: "/images/news/visual-design-branding.jpeg",
    content: [
      {
        type: "paragraph",
        text: "Sustainable construction is no longer just an option – it's an imperative. Our construction division has embraced this challenge, developing innovative practices that minimize environmental impact while delivering exceptional quality and value.",
      },
      {
        type: "heading",
        text: "Environmental Responsibility",
      },
      {
        type: "paragraph",
        text: "Our commitment to sustainability extends beyond compliance with environmental regulations. We actively seek opportunities to reduce our carbon footprint, minimize waste, and promote the use of renewable resources in all our projects.",
      },
      {
        type: "paragraph",
        text: "This approach requires careful planning, innovative thinking, and collaboration with suppliers and partners who share our commitment to environmental stewardship.",
      },
      {
        type: "heading",
        text: "Innovative Materials and Methods",
      },
      {
        type: "paragraph",
        text: "We continuously research and implement new materials and construction methods that offer superior performance while reducing environmental impact.",
      },
      {
        type: "list",
        items: [
          "Recycled and locally sourced building materials",
          "Energy-efficient building systems and insulation",
          "Water conservation and rainwater harvesting systems",
          "Solar panel integration and renewable energy solutions",
        ],
      },
      {
        type: "paragraph",
        text: "These innovations not only benefit the environment but also provide long-term cost savings and improved performance for our clients.",
      },
      {
        type: "heading",
        text: "Industry Leadership",
      },
      {
        type: "paragraph",
        text: "By demonstrating that sustainable construction practices can deliver superior results, we're helping to drive industry-wide change and establish new standards for responsible development in the region.",
      },
    ],
  },
}

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
          url: articleImage,
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
      images: [articleImage],
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
