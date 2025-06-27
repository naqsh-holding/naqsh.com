export interface NewsItem {
  id: number
  day: string
  month: string
  image: string
  title: string
  categories: { name: string; link: string }[]
  slug: string
  excerpt?: string
  content?: string
  author?: string
  readTime?: string
}

export const allNewsItems: NewsItem[] = [
  {
    id: 1,
    day: "15",
    month: "DEC",
    image: "/images/keeta-billboard.jpeg",
    title: "Naqsh Holding Expands Portfolio with New Tech Acquisition",
    categories: [
      { name: "BUSINESS", link: "#business" },
      { name: "TECHNOLOGY", link: "#technology" },
    ],
    slug: "naqsh-holding-expands-portfolio-tech-acquisition",
    excerpt:
      "Strategic acquisition strengthens our technology capabilities and market position in the digital transformation sector.",
    author: "Naqsh Communications",
    readTime: "3 min read",
  },
  {
    id: 2,
    day: "12",
    month: "DEC",
    image: "/images/news/beautiful-places.png",
    title: "Innovative Coworking Spaces Redefine Modern Workplace",
    categories: [
      { name: "WORKSPACE", link: "#workspace" },
      { name: "INNOVATION", link: "#innovation" },
    ],
    slug: "innovative-coworking-spaces-redefine-workplace",
    excerpt: "Our latest workspace solutions are transforming how businesses operate in the post-pandemic era.",
    author: "Efficiency Center",
    readTime: "4 min read",
  },
  {
    id: 3,
    day: "08",
    month: "DEC",
    image: "/images/news/visual-design-branding.jpeg",
    title: "Sustainable Construction Practices Lead Industry Change",
    categories: [
      { name: "CONSTRUCTION", link: "#construction" },
      { name: "SUSTAINABILITY", link: "#sustainability" },
    ],
    slug: "sustainable-construction-practices-industry-change",
    excerpt:
      "Leading the way in eco-friendly construction methods that reduce environmental impact while maintaining quality.",
    author: "Naqsh Construction",
    readTime: "5 min read",
  },
  {
    id: 4,
    day: "05",
    month: "DEC",
    image: "/images/news/inspirational-exterior-designs.png",
    title: "Digital Transformation Accelerates Across All Sectors",
    categories: [
      { name: "DIGITAL", link: "#digital" },
      { name: "TRANSFORMATION", link: "#transformation" },
    ],
    slug: "digital-transformation-accelerates-across-sectors",
    excerpt: "How our digital solutions are helping businesses adapt to the rapidly changing technological landscape.",
    author: "Naqsh Digital",
    readTime: "6 min read",
  },
  {
    id: 5,
    day: "02",
    month: "DEC",
    image: "/images/environmental-forum-branding.png",
    title: "Partnership Announcement: Expanding Regional Presence",
    categories: [
      { name: "PARTNERSHIP", link: "#partnership" },
      { name: "EXPANSION", link: "#expansion" },
    ],
    slug: "partnership-announcement-expanding-regional-presence",
    excerpt: "Strategic partnerships enable us to extend our reach and deliver exceptional value across new markets.",
    author: "Naqsh Holdings",
    readTime: "4 min read",
  },
]

// Get featured news items for homepage (first 3)
export const getFeaturedNews = () => allNewsItems.slice(0, 3)

// Get all news items
export const getAllNews = () => allNewsItems
