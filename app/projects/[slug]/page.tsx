import { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectPageClient from "./ProjectPageClient"
import { allProjects } from "../../lib/data/projects"

// Generate static params for all projects
export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

// Get all projects and create a lookup object
const projectData = allProjects.reduce((acc, project) => {
  acc[project.slug] = {
    category: project.category,
    title: project.title,
    heroImage: project.images.hero,
    desktopImage: project.images.gallery[0] || project.images.hero,
    description: project.description,
    year: project.year.toString(),
    client: project.client,
    services: project.tags,
    designRationale: project.approach,
    sections: [
      {
        type: "hero",
        content: {
          image: project.images.hero,
          alt: project.title,
        },
      },
    ],
    ...(project.images.gallery.length > 1 && {
    imageGroups: [
      {
          images: project.images.gallery.slice(1).map(img => ({
            src: img,
            alt: project.title,
          })),
          description: project.description,
        }
      ]
    })
  }
  return acc
}, {} as Record<string, any>)

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectData[params.slug as keyof typeof projectData]

  if (!project) {
    return {
      title: "Project Not Found | Naqsh Holding Company",
      description: "The requested project could not be found.",
    }
  }

  const projectUrl = `https://naqsh.com.sa/projects/${params.slug}`
  const projectImage = project.heroImage.startsWith('http') ? project.heroImage : `https://naqsh.com.sa${project.heroImage}`

  return {
    title: `${project.title} | Naqsh Holding Company`,
    description: project.description || `Explore ${project.title} - A showcase of innovative work by Naqsh Holding Company.`,
    keywords: [
      project.title,
      "Naqsh Holding projects",
      project.category.toLowerCase(),
      "Saudi Arabia business projects",
      "investment company projects",
      "corporate projects Riyadh",
      "business solutions Saudi Arabia",
      project.client,
      "Naqsh Holding Company",
      ...project.services
    ],
    openGraph: {
      title: project.title,
      description: project.description || `Explore ${project.title} - A showcase of innovative work by Naqsh Holding Company.`,
      url: projectUrl,
      siteName: "Naqsh Holding Company",
      images: [
        {
          url: projectImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description || `Explore ${project.title} - A showcase of innovative work by Naqsh Holding Company.`,
      images: [projectImage],
      creator: "@naqsh_holding",
      site: "@naqsh_holding",
    },
    alternates: {
      canonical: projectUrl,
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
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectData[params.slug as keyof typeof projectData]

  if (!project) {
    notFound()
  }

  return <ProjectPageClient project={project} slug={params.slug} />
}
