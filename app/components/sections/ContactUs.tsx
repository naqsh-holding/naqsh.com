"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ContactUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  /* ------------------------------------------------------------------ */
  /* Animations ------------------------------------------------------- */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
        },
      })

      gsap.from(formRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
        },
      })
    })

    return () => ctx.revert()
  }, [])

  /* ------------------------------------------------------------------ */
  /* Handlers ---------------------------------------------------------- */
  /* ------------------------------------------------------------------ */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // simulate async submit
    await new Promise((r) => setTimeout(r, 1000))

    setFormData({
      name: "",
      email: "",
      organization: "",
      phone: "",
      message: "",
    })
    setIsSubmitting(false)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  /* ------------------------------------------------------------------ */
  /* JSX ---------------------------------------------------------------- */
  /* ------------------------------------------------------------------ */
  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-[#f5f5f5]" data-bg="gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact information */}
          <div ref={textRef} className="space-y-8 flex flex-col justify-center min-h-[600px]">
            <div>
              <h3 className="theme-text text-h3 mb-6">Let's Connect and Collaborate</h3>
              <p className="theme-text text-body opacity-70 leading-relaxed mb-8">
                Whether you're looking to partner, invest, or simply learn more about our group of companies, we'd love
                to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <InfoRow
                icon={<MapPin className="w-5 h-5 theme-text" />}
                title="Visit Our Office"
                lines={["6919 Prince Turki Bin Abdulaziz Street", "Alkhobar, Eastern Province", "Saudi Arabia"]}
                link="https://maps.google.com/?q=6919+Prince+Turki+Bin+Abdulaziz+Street+Alkhobar+Eastern+Province+Saudi+Arabia"
                isAddress={true}
              />
              <InfoRow 
                icon={<Phone className="w-5 h-5 theme-text" />} 
                title="Call Us" 
                lines={["0535558889"]}
                link="tel:0535558889"
                isPhone={true}
              />
              <InfoRow
                icon={<Mail className="w-5 h-5 theme-text" />}
                title="Email Us"
                lines={["contact@naqsh.com.sa"]}
                link="mailto:contact@naqsh.com.sa"
                isEmail={true}
              />
            </div>
          </div>

          {/* Contact form */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-black p-8 rounded-lg shadow-sm">
              <TextInput id="name" label="Name / الاسم" value={formData.name} onChange={handleInputChange} />
              <TextInput
                id="email"
                type="email"
                label="Email Address / البريد الإلكتروني"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <TextInput
                id="organization"
                label="Organization Name / اسم الجهة"
                value={formData.organization}
                onChange={handleInputChange}
              />
              <TextInput
                id="phone"
                type="tel"
                label="Phone Number / رقم الهاتف"
                value={formData.phone}
                onChange={handleInputChange}
              />

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>

              {/* Submit CTA styled like other pill buttons */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full flex items-center justify-center gap-2
                           border border-gray-300 bg-white text-black
                           hover:bg-gray-100 hover:border-gray-400
                           px-6 py-3 text-sm font-light h-auto"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
                <ArrowUpRight className="w-4 h-4" />
              </Button>

              <p className="text-xs text-gray-400 mt-4">
                Never share sensitive information (credit card numbers, social security numbers, passwords) through this
                form.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Helpers ----------------------------------------------------------- */
/* ------------------------------------------------------------------ */

function InfoRow({
  icon,
  title,
  lines,
  link,
  isAddress,
  isPhone,
  isEmail,
}: {
  icon: React.ReactNode
  title: string
  lines: string[]
  link?: string
  isAddress?: boolean
  isPhone?: boolean
  isEmail?: boolean
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center flex-shrink-0">{icon}</div>
      <div>
        <h4 className="theme-text text-label mb-1">{title}</h4>
        {link ? (
          <a 
            href={link} 
            className="block"
            target={link.startsWith('http') ? '_blank' : undefined}
            rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {lines.map((l) => (
              <p key={l} className="theme-text text-body-small opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
                {l}
              </p>
            ))}
          </a>
        ) : (
          lines.map((l) => (
            <p key={l} className="theme-text text-body-small opacity-70">
              {l}
            </p>
          ))
        )}
      </div>
    </div>
  )
}

function TextInput({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  id: string
  label: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white mb-2">
        {label}
      </label>
      <Input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
      />
    </div>
  )
}
