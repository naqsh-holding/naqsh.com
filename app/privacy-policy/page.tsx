import { Metadata } from "next"
import PrivacyPolicyClient from "./PrivacyPolicyClient"

export const metadata: Metadata = {
  title: "Privacy Policy | Naqsh Holding Company",
  description: "Learn about how Naqsh Holding Company collects, uses, and protects your personal information. Our privacy policy outlines your rights and our commitment to data protection and privacy.",
  keywords: [
    "Naqsh Holding privacy policy",
    "data protection Saudi Arabia",
    "privacy rights",
    "personal information protection",
    "GDPR compliance",
    "data collection policy",
    "privacy statement",
    "Naqsh Holding Company privacy",
    "Saudi Arabia privacy law",
    "data security policy"
  ],
  openGraph: {
    title: "Privacy Policy | Naqsh Holding Company",
    description: "Learn about how Naqsh Holding Company collects, uses, and protects your personal information. Our privacy policy outlines your rights and our commitment to data protection.",
    url: "https://naqsh.com.sa/privacy-policy",
    siteName: "Naqsh Holding Company",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Naqsh Holding Company",
    description: "Learn about how Naqsh Holding Company collects, uses, and protects your personal information.",
    creator: "@naqsh_holding",
    site: "@naqsh_holding",
  },
  alternates: {
    canonical: "https://naqsh.com.sa/privacy-policy",
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

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />
}
