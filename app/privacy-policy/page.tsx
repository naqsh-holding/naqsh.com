"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navigation from "../components/layout/Navigation"
import Footer from "../components/sections/Footer"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PrivacyPolicyPage() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.style.backgroundColor = ""
    document.documentElement.style.color = ""
    document.body.style.backgroundColor = ""
    document.body.style.color = ""

    document.documentElement.classList.add("dark-theme")
    document.documentElement.classList.remove("light-theme")

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3,
      })
    })

    return () => {
      ctx.revert()
      document.documentElement.classList.remove("dark-theme")
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto"
      }

      document.documentElement.style.backgroundColor = ""
      document.documentElement.style.color = ""
      document.body.style.backgroundColor = ""
      document.body.style.color = ""
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white/90 flex flex-col" style={{ scrollBehavior: "auto" }}>
      <Navigation forceStyle="transparent" />

      <main className="pt-24 pb-12 flex-1">
        <div className="container mx-auto px-4 py-16">
          <div ref={contentRef}>
            <div className="mb-12">
              <h1 className="text-h1 font-bold text-white mb-2">Privacy Policy</h1>
              <p className="text-body-large text-neutral-400">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none prose-invert">
              <div className="mb-12">
                <h2 className="text-h3 font-semibold text-white mb-2">Introduction</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Naqsh Holding Company ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
                  we collect, use, disclose, and safeguard your information when you visit our website, interact with our
                  portfolio companies, or engage with our investment and business services.
                </p>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                  please do not access our website or engage with our services.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-h3 font-semibold text-white mb-2">Information We Collect</h2>
                <h3 className="text-h4 font-medium text-white mb-2">Personal Information</h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 space-y-2 mb-4">
                  <li>Contact us through our website, email, or phone for investment inquiries</li>
                  <li>Request information about our portfolio companies or investment opportunities</li>
                  <li>Apply for business incubation or co-working spaces</li>
                  <li>Engage with our marketing, real estate, or aviation services</li>
                  <li>Subscribe to our newsletter or business communications</li>
                  <li>Participate in surveys, feedback forms, or business consultations</li>
                </ul>

                <h3 className="text-h4 font-medium text-white mb-2">Automatically Collected Information</h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  When you visit our website, we may automatically collect certain information about your device and
                  usage patterns, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-300 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                  <li>Device information and screen resolution</li>
                  <li>Interaction with our portfolio company pages</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-h3 font-semibold text-white mb-2">How We Use Your Information</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-300 space-y-2">
                  <li>Providing investment information and portfolio company details</li>
                  <li>Responding to business inquiries and investment opportunities</li>
                  <li>Managing business incubation and co-working space applications</li>
                  <li>Processing requests for marketing, real estate, or aviation services</li>
                  <li>Sending business newsletters and investment updates (with your consent)</li>
                  <li>Improving our website and portfolio company presentations</li>
                  <li>Analyzing website usage to enhance user experience</li>
                  <li>Complying with legal and regulatory obligations</li>
                  <li>Facilitating partnerships and business collaborations</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-h3 font-semibold text-white mb-2">Information Sharing and Disclosure</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-300 space-y-2">
                  <li>With our portfolio companies (6 Degrees Technologies, Efficiency Center Business Inc., Promotion Efficiency for Advertising, Burooj, Burooj Air) for business purposes</li>
                  <li>With service providers who assist us in operating our website and conducting our investment activities</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>In connection with investment activities, mergers, acquisitions, or sale of assets</li>
                  <li>With your explicit consent</li>
                  <li>With potential business partners or investors (with your consent)</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-h3 font-semibold text-white mb-2">Data Security</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the internet or electronic storage is 100% secure.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-h3 font-semibold text-white mb-2">Your Rights</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information,
                  including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-300 space-y-2">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict processing</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-h3 font-semibold text-white mb-2">Contact Information</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-neutral-800 p-6 rounded-lg mb-4">
                  <p className="text-neutral-300 mb-2">
                    <strong>Email:</strong> contact@naqsh.com.sa
                  </p>
                  <p className="text-neutral-300 mb-2">
                    <strong>Phone:</strong> 0535558889
                  </p>
                  <p className="text-neutral-300">
                    <strong>Address:</strong> Naqsh Holding Company, Riyadh, Kingdom of Saudi Arabia
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-h3 font-semibold text-white mb-2">Changes to This Privacy Policy</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                  Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
