export interface Project {
  id: number
  title: string
  category: string
  image: string
  slug: string
  year: number
  client: string
  description: string
  challenge: string
  approach: string
  tags: string[]
  images: {
    hero: string
    gallery: string[]
  }
  stats?: {
    area?: string
    duration?: string
    drones?: number
  }
}

export const allProjects: Project[] = [
  {
    id: 1,
    title: "Keeta - Khobar Launch Event",
    category: "EFFICIENCY CENTER",
    image: "/images/keeta-billboard.jpeg",
    slug: "keeta-khobar-launch-event",
    year: 2024,
    client: "Keeta",
    description:
      "A comprehensive launch event for Keeta's expansion into the Khobar market, featuring strategic branding and promotional campaigns.",
    challenge:
      "Establishing brand presence in a competitive market while creating memorable launch experiences that resonate with local audiences.",
    approach:
      "We developed a multi-channel approach combining outdoor advertising, digital campaigns, and experiential marketing to maximize brand visibility and engagement.",
    tags: ["Event Marketing", "Brand Launch", "Outdoor Advertising", "Digital Campaigns"],
    images: {
      hero: "/images/keeta-billboard.jpeg",
      gallery: ["/images/keeta-launch-event.jpeg"],
    },
  },
  {
    id: 2,
    title: "PWA - AlSharqiya Gets Creative",
    category: "6 DEGREES TECHNOLOGIES",
    image: "/images/eastern-creative-digital-display.jpeg",
    slug: "creative-nexus-digital-platform",
    year: 2024,
    client: "AlSharqiya Creative",
    description:
      "A progressive web application designed to showcase AlSharqiya's creative capabilities and connect with their target audience through innovative digital experiences.",
    challenge:
      "Creating a platform that effectively communicates creative services while providing an engaging user experience across all devices.",
    approach:
      "We built a responsive PWA with modern design principles, focusing on performance, accessibility, and user engagement through interactive elements.",
    tags: ["Progressive Web App", "Creative Platform", "Digital Experience", "Responsive Design"],
    images: {
      hero: "/images/eastern-creative-hero.png",
      gallery: ["/images/eastern-creative-digital-display.jpeg", "/images/eastern-creative-building.png"],
    },
  },
  {
    id: 3,
    title: "Environmental and Circular Economy Forum 2023",
    category: "PROMOTION EFFICIENCY",
    image: "/images/environmental-forum-billboard.jpeg",
    slug: "environmental-forum-2023",
    year: 2023,
    client: "Environmental Forum",
    description:
      "Comprehensive branding and promotional campaign for the Environmental and Circular Economy Forum, focusing on sustainability messaging and stakeholder engagement.",
    challenge:
      "Communicating complex environmental concepts while engaging diverse stakeholders and promoting sustainable practices.",
    approach:
      "We created a cohesive visual identity and multi-platform campaign that simplified environmental messaging while maintaining scientific accuracy and impact.",
    tags: ["Environmental Branding", "Forum Promotion", "Sustainability", "Stakeholder Engagement"],
    images: {
      hero: "/images/environmental-forum-billboard.jpeg",
      gallery: ["/images/environmental-forum-branding.png"],
    },
  },
  {
    id: 4,
    title: "GDC Middle East - Comprehensive Fit-Out for Riyadh Office",
    category: "BUROOJ",
    image: "/images/gdc-middle-east-fitout.jpeg",
    slug: "gdc-middle-east-fitout",
    year: 2024,
    client: "GDC Middle East",
    description:
      "Complete office fit-out project for GDC Middle East's new Riyadh headquarters, creating modern workspaces that reflect the company's innovative culture.",
    challenge:
      "Designing and executing a comprehensive office environment that balances functionality, aesthetics, and employee wellbeing within tight timelines.",
    approach:
      "We implemented a phased approach covering space planning, interior design, and project management to deliver a world-class office environment.",
    tags: ["Office Fit-Out", "Interior Design", "Space Planning", "Project Management"],
    images: {
      hero: "/images/gdc-middle-east-fitout.jpeg",
      gallery: [
        "/images/gdc-reception-lobby.jpeg",
        "/images/gdc-conference-room.jpeg",
        "/images/gdc-break-room.jpeg",
        "/images/gdc-open-workspace.jpeg",
        "/images/gdc-washroom.jpeg",
        "/images/gdc-executive-office.jpeg",
        "/images/gdc-photography-studio.jpeg",
      ],
    },
  },
  {
    id: 5,
    title: "Altamimi Group Building Cleaning",
    category: "BUROOJ AIR",
    image: "/images/burooj-air-cover.jpeg",
    slug: "altamimi-group-building-cleaning",
    year: 2024,
    client: "Altamimi Group",
    description:
      "Advanced drone-powered facade cleaning service for the Altamimi Group building, utilizing cutting-edge technology for efficient and safe building maintenance.",
    challenge:
      "Cleaning a complex geometric facade safely and efficiently while maintaining the building's architectural integrity and minimizing disruption to operations.",
    approach:
      "We deployed specialized cleaning drones with 3D mapping technology and optimized flight paths to deliver comprehensive facade cleaning with precision and safety.",
    tags: [
      "Advanced Drone Operations",
      "Facade Cleaning Technology",
      "3D Building Mapping",
      "Flight Path Optimization",
      "Quality Control Systems",
      "Safety Management",
    ],
    images: {
      hero: "/images/burooj-air-cover.jpeg",
      gallery: [
        "/images/altamimi-building-exterior.jpeg",
        "/images/drone-cleaning-operation.jpeg",
        "/images/drone-cleaning-duration.jpeg",
      ],
    },
    stats: {
      area: "1,200 m²",
      duration: "260 minutes",
      drones: 2,
    },
  },
]
