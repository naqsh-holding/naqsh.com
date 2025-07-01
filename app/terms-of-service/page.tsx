import { Metadata } from "next"
import TermsOfServiceClient from "./TermsOfServiceClient"

export const metadata: Metadata = {
  title: "Terms of Service | Naqsh Holding Company",
  description: "Read the terms and conditions governing your use of Naqsh Holding Company's website and services. Our terms outline your rights, responsibilities, and our business relationship.",
  keywords: [
    "Naqsh Holding terms of service",
    "terms and conditions Saudi Arabia",
    "website terms of use",
    "legal terms",
    "business terms",
    "service agreement",
    "Naqsh Holding Company terms",
    "Saudi Arabia business terms",
    "investment company terms",
    "portfolio company terms"
  ],
  openGraph: {
    title: "Terms of Service | Naqsh Holding Company",
    description: "Read the terms and conditions governing your use of Naqsh Holding Company's website and services. Our terms outline your rights, responsibilities, and our business relationship.",
    url: "https://naqsh.com.sa/terms-of-service",
    siteName: "Naqsh Holding Company",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Naqsh Holding Company",
    description: "Read the terms and conditions governing your use of Naqsh Holding Company's website and services.",
    creator: "@naqsh_holding",
    site: "@naqsh_holding",
  },
  alternates: {
    canonical: "https://naqsh.com.sa/terms-of-service",
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

export default function TermsOfServicePage() {
  return <TermsOfServiceClient />
}
