export interface Project {
  category: string
  title: string
  heroImage: string
  description: string
  year: string
  client: string
  services: string[]
  sections: ProjectSection[]
}

export interface ProjectSection {
  type: "hero" | "text" | "image" | "gallery" | "video"
  content: {
    image?: string
    alt?: string
    title?: string
    description?: string
    images?: string[]
  }
}
