import { Metadata } from "next"
import { allProjects } from "../lib/data/projects"
import ProjectsPageClient from "./ProjectsPageClient"

export const metadata: Metadata = {
  title: "Our Projects Portfolio | Naqsh Holding Company",
  description: "Explore our diverse portfolio of successful projects across technology, business incubation, marketing, real estate, and aviation sectors. Discover how Naqsh Holding Company delivers innovative solutions and creates lasting impact across multiple industries.",
  keywords: [
    "Naqsh Holding projects",
    "Saudi Arabia business projects",
    "technology projects Riyadh",
    "business incubation projects",
    "marketing campaigns Saudi Arabia",
    "real estate development projects",
    "aviation services projects",
    "6 Degrees Technologies projects",
    "Efficiency Center projects",
    "Promotion Efficiency projects",
    "Burooj real estate projects",
    "Burooj Air projects",
    "investment portfolio Saudi Arabia",
    "corporate projects Riyadh",
    "business solutions Saudi Arabia",
    "innovative projects Middle East"
  ],
  openGraph: {
    title: "Our Projects Portfolio | Naqsh Holding Company",
    description: "Explore our diverse portfolio of successful projects across technology, business incubation, marketing, real estate, and aviation sectors. Discover innovative solutions and lasting impact.",
    url: "https://naqsh.com.sa/projects",
    siteName: "Naqsh Holding Company",
    images: [
      {
        url: "https://hel1.your-objectstorage.com/naqsh-pord/images/projects-og.png",
        width: 1200,
        height: 630,
        alt: "Naqsh Holding Company - Diverse Portfolio of Successful Projects Across Multiple Industries",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects Portfolio | Naqsh Holding Company",
    description: "Explore our diverse portfolio of successful projects across technology, business incubation, marketing, real estate, and aviation sectors.",
    images: ["/images/projects-og.png"],
    creator: "@naqsh_holding",
    site: "@naqsh_holding",
  },
  alternates: {
    canonical: "https://naqsh.com.sa/projects",
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

export default function ProjectsPage() {
  return <ProjectsPageClient allProjects={allProjects} />
}
