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
    title: "Environmental and Circular Economy Forum",
    category: "PROMOTION EFFICIENCY",
    image: "/images/Abqaq.png",
    slug: "environmental-circular-economy-forum-2023",
    year: 2023,
    client: "Saudi Aramco",
    description:
      "The 2023 Environmental and Circular Economy Forum at Al-Murjan Hall in Abqaiq brought together professionals from Saudi Aramco and government entities to promote collaboration and share insights on sustainable practices and the circular economy. Hosted by the SA Community Services Department, the forum provided a platform for thought leaders and stakeholders to engage in discussions and highlighted Saudi Aramco's commitment to sustainability and public-private cooperation for a greener future.",
    challenge:
      "Deliver a dynamic, large-scale forum that fosters collaboration and knowledge exchange on environmental sustainability and the circular economy, while showcasing Saudi Aramco's leadership and commitment to a greener future.",
    approach:
      "Promotion Efficiency managed the project end-to-end for over 1,000 visitors across three days, including: developing the full brand identity; designing the event space and booths; producing print materials (certificates, agendas, promotional items); creating a custom web app for registration and navigation; planning and executing marketing, invitations, signage, and livestream support; organizing workshops and hospitality; and coordinating media coverage and crowd management (photography/videography).",
    tags: ["Event Management", "Brand Identity", "Web Development", "Print Design", "Marketing Strategy", "Workshop Organization", "Media Coverage", "Smart Cards"],
    images: {
      hero: "/images/PEARAMCO.jpeg",
      gallery: ["/images/environmental-forum-branding.png", "/images/PEARAMCO1.png", "/images/PEARAMCO2.png", "/images/PEARAMCO3.png"],
    },
    stats: {
      area: "Al-Murjan Hall, Abqaiq",
      duration: "3 days",
    },
  },
  {
    id: 2,
    title: "PWA - AlSharqiya Gets Creative",
    category: "6 DEGREES TECHNOLOGIES",
    image: "/images/6DSGC.png",
    slug: "creative-nexus-digital-platform",
    year: 2024,
    client: "Ithra (King Abdulaziz Center for World Culture)",
    description:
      "A cutting-edge Progressive Web Application that revolutionizes how cultural centers connect with their communities. This innovative platform showcases AlSharqiya's creative capabilities while providing seamless access to cultural events, workshops, and artistic programs through an intuitive digital experience. We developed a comprehensive PWA solution using modern web technologies and design principles. The platform features responsive design, offline capabilities, push notifications, and seamless integration with social media platforms. Our approach focused on creating an immersive user experience that reflects the artistic and cultural essence of AlSharqiya while maintaining high performance and accessibility standards.",
    challenge:
      "Creating a digital platform that not only showcases creative works but also fosters community engagement, facilitates event management, and provides an accessible gateway to cultural experiences for diverse audiences across all devices and platforms.",
    approach: "",
    tags: ["Progressive Web App", "Cultural Platform", "Digital Innovation", "Community Engagement", "Event Management", "Responsive Design", "Offline Capabilities"],
    images: {
      hero: "/images/6DSGC2.png",
      gallery: ["public/images/SGC Design 2.png", "/images/eastern-creative-building.png", "/images/6DSGC3.png", "/images/6DSGC4.png"],
    },
  },
  {
    id: 5,
    title: "Burooj Air — Drone Cleaning of Al-Tamimi Building",
    category: "BUROOJ AIR",
    image: "/images/BuroojAir.png",
    slug: "burooj-air-drone-cleaning-altamimi-building",
    year: 2024,
    client: "Al-Tamimi Group",
    description: "We take pride in delivering real impact with precision and innovation. Through Burooj Air, we successfully completed a specialized drone-cleaning project for Al-Tamimi Building, covering a total area of 1,200 square meters — completed in just 260 minutes.",
    challenge: "Cleaning hard-to-reach glass facades safely and efficiently, with no need for scaffolding or manual access.",
    approach: "Using advanced aerial technology, our team was able to clean hard-to-reach glass facades safely and efficiently, with no need for scaffolding or manual access. The before-and-after transformation speaks for itself — a clear testament to the quality and effectiveness of our solutions.",
    tags: ["Drone Cleaning", "Innovation", "Building Maintenance", "Aerial Technology", "Burooj Air"],
    images: {
      hero: "",
      gallery: [],
    },
    stats: {
      area: "1,200 m²",
      duration: "260 minutes",
    },
  },
  {
    id: 3,
    title: "GDC Middle East - Comprehensive Fit-Out for Riyadh Office",
    category: "BUROOJ",
    image: "/images/Burooj-Design.png",
    slug: "gdc-middle-east-fitout",
    year: 2024,
    client: "GDC Middle East",
    description:
      "Successfully delivered a high-quality fit-out project for GDC Middle East's new offices in Riyadh, covering 2,437 square meters. The project showcases a refined industrial-modern design, seamlessly blending aesthetics with functionality. Completed in just 16 weeks, it highlights efficient execution, innovative approaches, and meticulous attention to detail.",
    challenge:
      "Designing and executing a comprehensive office environment that balances functionality, aesthetics, and employee wellbeing within tight timelines.",
    approach:
      "In addition to the design and finishing, we provided custom-designed furniture, executed its production, and ensured seamless installation. The scope also included the supply and installation of advanced equipment, implementation of a complete IT infrastructure, full building automation, and state-of-the-art access control systems. This comprehensive approach sets a new benchmark in the market and reflects our dedication to delivering end-to-end solutions tailored to our client's vision.",
    tags: ["Office Fit-Out", "Interior Design", "Custom Furniture", "IT Infrastructure", "Building Automation", "Access Control"],
    images: {
      hero: "/images/gdc-reception-lobby.jpeg",
      gallery: [
        "/images/gdc-conference-room.jpeg",
        "/images/gdc-break-room.jpeg",
        "/images/gdc-open-workspace.jpeg",
        "/images/gdc-washroom.jpeg",
        "/images/gdc-executive-office.jpeg",
        "/images/gdc-photography-studio.jpeg",
      ],
    },
    stats: {
      area: "2,437 m²",
      duration: "16 weeks",
    },
  },
  
]
