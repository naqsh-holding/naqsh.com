import { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectPageClient from "./ProjectPageClient"

// Mock project data - in a real app, this would come from a CMS or API
const projectData = {
  "zesty-chat-app": {
    category: "Work",
    title: "Talk with strangers until the chat resets",
    heroImage: "/placeholder.svg?height=800&width=400",
    desktopImage: "/images/desktop-chat-interface.png",
    description: "A mobile chat application that connects strangers for temporary conversations.",
    year: "2024",
    client: "Zesty Inc.",
    services: ["Mobile App Design", "UI/UX", "Prototyping"],
    designRationale:
      "For Zesty, I chose to use a dark UI simply because I thought it looked cool, with no deeper meaning behind it. Since this was a concept project, I had the freedom to do whatever I wanted and the screens were designed with a focus on simplicity and ease of use, keeping the interface clean and the experience fast-paced, with plenty of space for text and emojis.",
    sections: [
      {
        type: "hero",
        content: {
          image: "/placeholder.svg?height=800&width=400",
          alt: "Zesty chat app mobile interface",
        },
      },
    ],
  },
  "keeta-khobar-launch-event": {
    category: "Work",
    title: "Keeta - Khobar Launch Event",
    heroImage: "/images/keeta-billboard.jpeg",
    desktopImage: "/images/keeta-launch-event.jpeg",
    description: "A comprehensive outdoor advertising campaign for Keeta's launch in Khobar city.",
    year: "2024",
    client: "Keeta",
    services: ["Outdoor Advertising", "Brand Campaign", "Visual Design"],
    designRationale:
      "For Keeta's Khobar launch, we created a bold outdoor advertising campaign that captures the energy and community spirit of the delivery service. The vibrant yellow branding and city skyline illustration were designed to create instant brand recognition while celebrating the local Dammam/Khobar community. The 'Keeta together, winners forever' message reinforces the collaborative relationship between the service and its users.",
    sections: [
      {
        type: "hero",
        content: {
          image: "/images/keeta-billboard.jpeg",
          alt: "Keeta billboard advertisement in urban setting",
        },
      },
    ],
  },
  "creative-nexus-digital-platform": {
    category: "Work",
    title: "PWA - AlSharqiya Gets Creative",
    heroImage: "/images/eastern-creative-digital-display.jpeg",
    desktopImage: "/images/alsharqiya-pwa-mockup.jpeg",
    description: "Progressive Web Application development for AlSharqiya Gets Creative cultural center.",
    year: "2024",
    client: "AlSharqiya Gets Creative",
    services: ["Progressive Web App", "Digital Platform", "UI/UX Design"],
    designRationale:
      "For AlSharqiya Gets Creative, we developed a cutting-edge Progressive Web Application that mirrors the innovative spirit of the cultural center itself. The PWA was designed to showcase diverse creative works, facilitate community engagement, and provide seamless access to cultural events and programs. The interface reflects the architectural beauty of the physical space while ensuring optimal performance across all devices. The app features a clean, modern design with intuitive navigation, Arabic language support, and is prominently displayed on digital billboards throughout the cultural district. The purple gradient theme creates a cohesive brand experience that connects the digital platform with the physical space's lighting design.",
    sections: [
      {
        type: "hero",
        content: {
          image: "/images/eastern-creative-digital-display.jpeg",
          alt: "AlSharqiya Gets Creative PWA displayed on modern building billboard showing mobile app interface",
        },
      },
    ],
  },
  "environmental-forum-2023": {
    category: "Work",
    title: "Environmental and Circular Economy Forum 2023",
    heroImage: "/images/environmental-forum-billboard.jpeg",
    desktopImage: "/images/environmental-forum-branding.png",
    description:
      "Comprehensive branding and outdoor advertising campaign for the Environmental and Circular Economy Forum 2023.",
    year: "2023",
    client: "Environmental Forum Organizers",
    services: ["Event Branding", "Outdoor Advertising", "Visual Identity"],
    designRationale:
      "For the Environmental and Circular Economy Forum 2023, we created a comprehensive visual identity that reflects the event's commitment to sustainability and environmental awareness. The design features a clean, modern aesthetic with vibrant green environmental icons including leaves, recycling symbols, wind turbines, and other eco-friendly elements. The brand system was applied across multiple touchpoints including outdoor billboards, digital displays, promotional materials, and wayfinding signage. The consistent use of the green color palette and environmental iconography creates strong brand recognition while reinforcing the forum's sustainability message. The 'Deets' eco-friendly promotional materials demonstrate our commitment to sustainable design practices, while the digital kiosks and entrance signage ensure seamless event navigation and brand visibility.",
    sections: [
      {
        type: "hero",
        content: {
          image: "/images/environmental-forum-billboard.jpeg",
          alt: "Environmental and Circular Economy Forum 2023 billboard advertisement with green environmental icons",
        },
      },
    ],
  },
  "gdc-middle-east-fitout": {
    category: "Work",
    title: "GDC Middle East - Comprehensive Fit-Out for Riyadh Office",
    heroImage: "/images/gdc-middle-east-fitout.jpeg",
    imageGroups: [
      {
        images: [
          {
            src: "/images/gdc-reception-lobby.jpeg",
            alt: "GDC Middle East reception lobby with marble desk, library wall, and tree installation",
          },
          {
            src: "/images/gdc-conference-room.jpeg",
            alt: "Modern circular conference room with curved ceiling and integrated lighting",
          },
          {
            src: "/images/gdc-break-room.jpeg",
            alt: "Employee break room with pool table, bar seating, and motivational wall graphics",
          },
        ],
        description:
          "The reception area creates an impressive first impression with its striking marble reception desk and extensive library wall featuring thousands of books. The space seamlessly integrates natural elements through large tree installations, while the exposed industrial ceiling maintains the modern aesthetic. The circular conference room showcases advanced AV integration with its curved ceiling design and sophisticated lighting system, providing an ideal environment for high-level meetings and presentations.",
      },
      {
        images: [
          {
            src: "/images/gdc-open-workspace.jpeg",
            alt: "Open office workspace with modern workstations and central tree installations",
          },
          {
            src: "/images/gdc-washroom.jpeg",
            alt: "High-end washroom with concrete finishes and branded cylindrical sinks",
          },
          {
            src: "/images/gdc-executive-office.jpeg",
            alt: "Executive office with angular black desk and contemporary design elements",
          },
        ],
        description:
          "The open workspace promotes collaboration while maintaining individual productivity through thoughtfully designed workstations and central greenery installations. The executive washroom demonstrates attention to detail with its concrete finishes, branded cylindrical sinks, and sophisticated lighting design. Executive offices feature custom angular furniture and glass partitions that maintain privacy while preserving the open, modern aesthetic throughout the space.",
      },
      {
        images: [
          {
            src: "/images/gdc-photography-studio.jpeg",
            alt: "Professional photography studio with lighting equipment and white backdrop",
          },
        ],
        description:
          "The professional photography studio represents the company's commitment to creative capabilities, featuring state-of-the-art lighting equipment, professional-grade backdrops, and specialized flooring. This dedicated space enables in-house content creation and demonstrates the comprehensive nature of the fit-out project, extending beyond traditional office functions to support diverse business needs.",
      },
    ],
    description:
      "High-quality comprehensive fit-out project for GDC Middle East's new offices in Riyadh, covering 2,437 square meters.",
    year: "2024",
    client: "GDC Middle East",
    services: ["Commercial Fit-Out", "Interior Design", "Custom Furniture", "IT Infrastructure"],
    designRationale: "",
    sections: [
      {
        type: "hero",
        content: {
          image: "/images/gdc-middle-east-fitout.jpeg",
          alt: "GDC Middle East office building exterior showing industrial-modern design with brick facade and large windows",
        },
      },
    ],
  },
  "altamimi-group-building-cleaning": {
    category: "Work",
    title: "Altamimi Group Building Cleaning",
    heroImage: "/images/burooj-air-cover.jpeg",
    imageGroups: [
      {
        images: [
          {
            src: "/images/altamimi-building-exterior.jpeg",
            alt: "Altamimi Group building exterior showing modern geometric facade design with bronze framework and blue glass panels",
          },
          {
            src: "/images/drone-cleaning-operation.jpeg",
            alt: "Professional drone cleaning operation on Altamimi Group building facade showing 1200m² project area",
          },
        ],
        description:
          "The Altamimi Group headquarters features a striking modern design with distinctive geometric bronze framework and blue glass panels. Burooj Air executed a comprehensive building cleaning operation using advanced drone technology, covering 1,200 square meters of this complex facade design. The project utilized 2 specialized cleaning drones to ensure thorough and efficient coverage, completing the operation in just 260 minutes.",
      },
      {
        images: [
          {
            src: "/images/drone-cleaning-duration.jpeg",
            alt: "Drone cleaning operation completed in 260 minutes with city view background",
          },
        ],
        description:
          "This innovative approach demonstrates the effectiveness and speed of our drone-based cleaning solutions, allowing for safe, precise cleaning of high-rise buildings while minimizing disruption to daily operations and eliminating the need for traditional scaffolding or rope access methods. The operation showcases Burooj Air's commitment to advanced aerial technology and efficient building maintenance services.",
      },
    ],
    description:
      "Advanced drone-based building cleaning service for Altamimi Group's modern commercial headquarters, covering 1,200 square meters.",
    year: "2024",
    client: "Altamimi Group",
    services: ["Drone Cleaning Services", "Building Maintenance", "Facade Cleaning", "Aerial Operations"],
    designRationale: "",
    sections: [
      {
        type: "hero",
        content: {
          image: "/images/burooj-air-cover.jpeg",
          alt: "BUROOJ AIR branding displayed on modern building facade with geometric bronze framework and blue glass panels",
        },
      },
    ],
  },
}

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
