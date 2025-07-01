import { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Naqsh Holding Company",
  description: "Get in touch with Naqsh Holding Company. Visit our office in Khobar, Eastern Province, Saudi Arabia or contact us via phone, email, or our contact form.",
  keywords: "contact, Naqsh Holding Company, Khobar, Saudi Arabia, business inquiry, partnership",
  openGraph: {
    title: "Contact Us - Naqsh Holding Company",
    description: "Get in touch with Naqsh Holding Company. Visit our office in Khobar, Eastern Province, Saudi Arabia or contact us via phone, email, or our contact form.",
    type: "website",
    url: "https://naqsh.com.sa/contact",
    siteName: "Naqsh Holding Company",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Naqsh Holding Company",
    description: "Get in touch with Naqsh Holding Company. Visit our office in Khobar, Eastern Province, Saudi Arabia or contact us via phone, email, or our contact form.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return <ContactPageClient />
} 