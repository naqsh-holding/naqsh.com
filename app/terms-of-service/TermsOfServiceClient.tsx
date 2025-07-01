"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navigation from "../components/layout/Navigation"
import Footer from "../components/sections/Footer"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function TermsOfServiceClient() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Clear persistent inline styles
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

      // Clear inline styles on unmount
      document.documentElement.style.backgroundColor = ""
      document.documentElement.style.color = ""
      document.body.style.backgroundColor = ""
      document.body.style.color = ""

      // Allow ThemeController on other pages to re-apply the correct theme
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto"
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white/90 flex flex-col" style={{ scrollBehavior: "auto" }}>
      <Navigation forceStyle="transparent" />
      <main className="pt-24 pb-12 flex-1">
        <div className="container mx-auto px-4 py-16">
          <div ref={contentRef}>
            <div className="mb-12">
              <h1 className="text-h1 font-bold text-white mb-2">Terms of Service</h1>
              <p className="text-body-large text-neutral-400">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none prose-invert">
              {/* Prose content uses prose-invert for dark mode compatibility */}
              {/* Specific text color overrides if prose-invert is not enough */}
              <div className="mb-12">
                <h2 className="text-h3 font-semibold text-white mb-2">Agreement to Terms</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  These Terms of Service ("Terms") govern your use of Naqsh Holding Company's website and services. By accessing or
                  using our website, you agree to be bound by these Terms. If you disagree with any part of these Terms,
                  then you may not access our website or use our services.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-h3 font-semibold text-white mb-2">Description of Services</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Naqsh Holding Company is an investment leader that owns and operates five diverse companies across multiple sectors:
                  6 Degrees Technologies (Technology & Smart Solutions), Efficiency Center Business Inc. (Business Incubation & Co-working),
                  Promotion Efficiency for Advertising (Marketing & Creative Production), Burooj (Real Estate Development & Construction),
                  and Burooj Air (Aviation Services & Solutions). We provide information about our portfolio companies,
                  investment opportunities, and business services through our website and direct communications.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-h3 font-semibold text-white mb-2">Acceptable Use</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  You agree to use our website and services only for lawful purposes and in accordance with these Terms.
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-300 space-y-2">
                  <li>Use our services for any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>
                    Violate any international, federal, provincial, or state regulations, rules, laws, or local
                    ordinances
                  </li>
                  <li>
                    Infringe upon or violate our intellectual property rights or the intellectual property rights of
                    others
                  </li>
                  <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>Submit false or misleading information</li>
                  <li>Upload or transmit viruses or any other type of malicious code</li>
                  <li>Spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-h3 font-semibold text-white mb-2">Intellectual Property Rights</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  The content on our website, including but not limited to text, graphics, logos, images, and software,
                  is the property of Naqsh or its content suppliers and is protected by copyright and other intellectual
                  property laws. You may not reproduce, distribute, modify, or create derivative works of our content
                  without our express written permission.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-h3 font-semibold text-white mb-2">Investment Disclaimers</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Any information provided on our website regarding investments, portfolio companies, or financial matters is for
                  informational purposes only and should not be construed as investment advice. Past performance of our
                  portfolio companies does not guarantee future results. All investments carry risk, and you should consult
                  with qualified financial advisors before making investment decisions. Information about our subsidiaries
                  and their services is provided for general business purposes only.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-h3 font-semibold text-white mb-2">Limitation of Liability</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  To the fullest extent permitted by applicable law, Naqsh shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
                  incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-h3 font-semibold text-white mb-2">Indemnification</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  You agree to defend, indemnify, and hold harmless Naqsh and its officers, directors, employees, and
                  agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising
                  from your use of our website or services.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-h3 font-semibold text-white mb-2">Governing Law</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia,
                  without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of
                  our services shall be subject to the exclusive jurisdiction of the courts in Saudi Arabia.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-h3 font-semibold text-white mb-2">Changes to Terms</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                  provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change
                  will be determined at our sole discretion.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-h3 font-semibold text-white mb-2">Contact Information</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-neutral-800 p-6 rounded-lg">
                  <p className="text-neutral-300 mb-2">
                    <strong>Email:</strong> contact@naqsh.com.sa
                  </p>
                  <p className="text-neutral-300 mb-2">
                    <strong>Phone:</strong> 0535558889
                  </p>
                  <p className="text-neutral-300">
                    <strong>Address:</strong> Khobar, Eastern Province, Saudi Arabia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 