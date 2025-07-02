export interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export interface Brand {
  id: number
  name: string
  logo: string
  row: number
}

export interface Company {
  id: number
  name: string
  description: string
  image: string
  website: string
}

export interface NewsArticle {
  id: number
  title: string
  subtitle: string
  category: string
  author: string
  date: string
  readTime: string
  heroImage: string
  content: ContentBlock[]
  slug: string
}

export interface ContentBlock {
  type: "paragraph" | "heading" | "list" | "image"
  text?: string
  items?: string[]
  src?: string
  alt?: string
}

export interface RelatedArticle {
  id: number
  title: string
  category: string
  image: string
  slug: string
}
