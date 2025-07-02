export interface NewsItem {
  id: number
  day: string
  month: string
  image: string
  title: string
  categories: { name: string; link: string }[]
  slug: string
  excerpt?: string
  content1?: string
  content2?: string
  content3?: string
  author?: string
  readTime?: string
}

export const allNewsItems: NewsItem[] = [
  {
    id: 6,
    day: "30",
    month: "JUN",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/images/news/Investmaent.png",
    title: "Burooj Air Officially Launches Autonomous Drone-Based Cleaning Services",
    categories: [
      { name: "LAUNCH", link: "#launch" },
      { name: "INNOVATION", link: "#innovation" },
      { name: "BUROOJ AIR", link: "#buroojair" },
    ],
    slug: "burooj-air-launches-autonomous-drone-cleaning-services",
    excerpt: "Burooj Air, a new service under Burooj Company, launches the region's first drone-based exterior cleaning solution, led by a 100% Saudi team.",
    author: "Naqsh Holding Company",
    readTime: "3 min read",
    content1: "Naqsh Holding is proud to announce the official launch of Burooj Air, a groundbreaking new service under Burooj Company that offers exterior building and asset cleaning using unmanned aerial vehicles (drones) — a first-of-its-kind initiative in the region.\n\nLed by a 100% Saudi engineering and administrative team, the development of this service has been a result of extensive research, testing, and innovation over the past two years. The team successfully sourced and customized advanced drone cleaning technologies to fit regional needs and elevate service quality.",
    content2: "This milestone marks the successful resolution of all legal, technical, and operational challenges associated with the service, establishing Burooj as the first Arab company to commercially launch drone-based exterior cleaning services.\n\nBurooj Air's drone cleaning solution stands out as a safer, faster, and more cost-effective alternative to traditional methods, offering greater efficiency while reducing operational risks and costs.",
    content3: "We extend our sincere thanks to the Burooj team for their unwavering dedication and investment of time and effort, which played a vital role in achieving this major step forward.",
  },
  {
    id: 1,
    day: "15",
    month: "DEC",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/images/news/HR.png",
    title: "Promotion Efficiency Signs Strategic CSR Partnership with the Ministry of Human Resources – Eastern Province",
    categories: [
      { name: "CSR", link: "#csr" },
      { name: "PARTNERSHIP", link: "#partnership" },
    ],
    slug: "promotion-efficiency-csr-partnership-ministry-human-resources",
    excerpt:
      "Strategic partnership with the Ministry of Human Resources and Social Development to support the 'Social Responsibility 2025' campaign.",
    author: "Naqsh Communications",
    readTime: "3 min read",
    content1: "As part of our ongoing commitment to social responsibility and community development, we are proud to announce a new strategic partnership with the Ministry of Human Resources and Social Development – Eastern Province Branch. This landmark collaboration represents a significant milestone in our journey to create meaningful social impact and contribute to the Kingdom's Vision 2030 objectives.\n\nThis partnership marks a crucial step in supporting the second edition of the 'Social Responsibility 2025' campaign, led by the Ministry's Social Responsibility Administration. Through this comprehensive agreement, Naqsh will provide extensive media support services that contribute to amplifying the campaign's developmental impact across the Eastern Province and beyond.",
    content2: "Our role encompasses strategic communication planning, digital content creation, and multimedia campaign execution to ensure maximum reach and engagement. We will leverage our expertise in media and communications to help the Ministry effectively communicate important messages to diverse audiences, including businesses, organizations, and the general public.\n\nThe 'Social Responsibility 2025' campaign focuses on fostering sustainable community development, promoting social welfare initiatives, and encouraging corporate participation in social responsibility programs. The partnership will involve multiple phases of collaboration, including awareness campaigns, educational initiatives, and community engagement programs.",
    content3: "This collaboration reflects our deep commitment to purposeful partnerships that align with our mission to invest in initiatives that create lasting social impact. We believe that true success extends beyond business achievements to include meaningful contributions to society and community development.\n\nWe are excited about the potential of this partnership to create positive change and look forward to working with the Ministry of Human Resources and Social Development to make a meaningful difference in our communities. This initiative represents another step forward in our commitment to being a responsible corporate citizen and contributing to the social and economic development of Saudi Arabia.",
  },
  {
    id: 2,
    day: "12",
    month: "DEC",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/images/news/Tarahum.jpeg",
    title: "A Recognition We Are Proud Of from His Royal Highness the Prince of the Eastern Province",
    categories: [
      { name: "RECOGNITION", link: "#recognition" },
      { name: "COMMUNITY", link: "#community" },
    ],
    slug: "recognition-his-royal-highness-prince-eastern-province",
    excerpt: "Naqsh was honored at the Tarahum annual ceremony, receiving recognition from His Royal Highness Prince Saud bin Nayef for supporting humanitarian programs.",
    author: "Naqsh Communications",
    readTime: "4 min read",
    content1: "Naqsh had the honor of attending the annual ceremony of the Eastern Province Committee for the Welfare of Prisoners (Tarahum) on Tuesday, May 20, 2025, where the CEO of Naqsh received a gracious recognition on behalf of Promotion Efficiency Advertising Company, in appreciation of our support for the committee's humanitarian programs.\n\nThis recognition reflects the keenness of His Royal Highness Prince Saud bin Nayef bin Abdulaziz to promote the values of solidarity and compassion, continuing the legacy of his father, the late Prince Nayef bin Abdulaziz Al Saud, the founder of the committee. May Allah reward him for the lasting good he planted in this noble cause.",
    content2: "Among the timeless words of His Royal Highness in one of his speeches:\n\"A society can only thrive through the unity of its people and institutions.\"\n\nA phrase that captures profound meaning and reflects the philosophy of giving and community service we believe in and strive to embody.",
    content3: "This recognition serves as a testament to our commitment to social responsibility and community engagement. We are honored to be recognized for our contributions to humanitarian causes and will continue to support initiatives that make a positive impact on our society.",
  },
  {
    id: 3,
    day: "08",
    month: "DEC",
    image: "https://hel1.your-objectstorage.com/naqsh-pord/images/news/keeta.png",
    title: "Lunching Keeta Application - Efficiency Center Celebrates the Launch of Keeta Application in Al-Khobar",
    categories: [
      { name: "TECHNOLOGY", link: "#technology" },
      { name: "LAUNCH", link: "#launch" },
    ],
    slug: "launching-keeta-application-efficiency-center-al-khobar",
    excerpt:
      "Efficiency Center hosts the launch event of the global app Keeta in Al Khobar, supporting its entry into the Saudi market.",
    author: "Efficiency Center",
    readTime: "3 min read",
    content1: "Efficiency Center believes in empowering businesses and supporting them on their journey to success. In line with this vision, we were delighted to host and organize the launch event of the global app Keeta in Al Khobar, celebrating its entry into the Saudi market and its promising growth in the region.\n\nKeeta is a unique and innovative addition to the app market in Saudi Arabia, and we are proud to be part of its journey by providing the space and resources needed for a strong start.",
    content2: "At Efficiency Center, we are committed to fostering a dynamic work environment, offering inspiring coworking spaces, and supporting events that contribute to business growth and expansion.\n\nOur state-of-the-art facilities provide the perfect platform for startups and established businesses alike to thrive and innovate in the heart of Al Khobar.",
    content3: "We wish Keeta continued success and expansion, and we look forward to supporting entrepreneurs at every step of their journey, ensuring that in Khobar, our businesses echo.\n\nThis launch event represents our commitment to being a catalyst for business growth and innovation in the Eastern Province.",
  },


]

// Get featured news items for homepage (first 3)
export const getFeaturedNews = () => allNewsItems.slice(0, 3)

// Get all news items
export const getAllNews = () => allNewsItems
