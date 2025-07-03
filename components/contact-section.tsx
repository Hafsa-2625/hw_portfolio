"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Linkedin, Github, Twitter, Send, Phone, MapPin } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/hafsa-waqar-77ab33230", label: "LinkedIn", color: "from-teal-400 to-teal-500" },
  { icon: Mail, href: "mailto:hafsawaqar197@gmail.com", label: "Email", color: "from-teal-400 to-teal-500" },
]

const contactInfo = [
  { icon: Mail, label: "Email", value: "hafsawaqar197@gmail.com", href: "mailto:hafsawaqar197@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92-301-8771117", href: "tel:+923018771117" },
  { icon: MapPin, label: "Location", value: "Rawalpindi", href: "#" },
]

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isHovered, setIsHovered] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 px-6 bg-funky-pink">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
            Let's <span className="text-teal-500">Connect</span> There
          </h2>
          <a
            href="mailto:hafsawaqar197@gmail.com"
            className="mt-6 md:mt-0 px-8 py-4 bg-gradient-to-r from-teal-400 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
          >
            Hire Me Now
          </a>
        </div>
        <hr className="border-t-2 border-teal-100 mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left: Profile & Social */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-4">
              <Image src="/hafsa1.jpg" alt="Hafsa Waqar" width={56} height={56} className="rounded-full w-14 h-14 object-cover" />
              <span className="text-2xl font-bold text-teal-600">Hafsa Waqar</span>
            </div>
            <p className="text-slate-700 max-w-xs">
              Feel free to connect with me and explore more of my work on <a href="https://linkedin.com/in/hafsa-waqar-77ab33230" className="underline text-teal-500" target="_blank">LinkedIn</a> – let's create something amazing together!
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://linkedin.com/in/hafsa-waqar-77ab33230" target="_blank" className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="mailto:hafsawaqar197@gmail.com" className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          {/* Center: Navigation */}
          <div>
            <h4 className="text-lg font-bold text-teal-600 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-slate-700 hover:text-teal-500 font-medium transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-700 hover:text-teal-500 font-medium transition-colors">About</a></li>
              <li><a href="#projects" className="text-slate-700 hover:text-teal-500 font-medium transition-colors">Work</a></li>
              <li><a href="#contact" className="text-slate-700 hover:text-teal-500 font-medium transition-colors">Contact</a></li>
            </ul>
          </div>
          {/* Right: Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-teal-600 mb-4">Contact</h4>
            <div className="mb-2 text-slate-700">+92-301-8771117</div>
            <div className="text-slate-700">hafsawaqar197@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-slate-200">
        <p className="text-slate-500">© 2024 Hafsa Waqar. Designed & Built with ❤️</p>
      </div>
    </section>
  )
}
