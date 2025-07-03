"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Target } from "lucide-react"

const stats = [
  { icon: Award, number: "2022-2026", label: "BS Software Engineering", color: "text-blue-600" },
  { icon: Users, number: "2024-2025", label: "SES Design Team", color: "text-indigo-600" },
  { icon: Clock, number: "2025-Present", label: "IEEE WIC Head", color: "text-slate-600" },
  { icon: Target, number: "10+", label: "Major Projects", color: "text-sky-600" },
]

const journey = [
  {
    year: "2025-Present",
    role: "Head of Design Team",
    company: "IEEE Women in Computing, FAST NUCES Islamabad",
    description: "Led the Design Team, overseeing and executing multiple design projects for university-wide events and campaigns. Set design guidelines, coordinated with event organizers, and mentored junior designers.",
  },
  {
    year: "2024-2025",
    role: "Design Team Member",
    company: "Software Engineering Society (SES), FAST NUCES Islamabad",
    description: "Created visual content including event posters, standees, tickets, social media graphics, and promotional videos. Helped shape the visual identity of society events and initiatives.",
  },
  {
    year: "2024",
    role: "Web Development & Design Workshop",
    company: "10-Day Intensive Program",
    description: "Gained hands-on experience in UI design principles, responsive layouts, and frontend frameworks. Worked on small design projects using Figma and Adobe XD.",
  },
  {
    year: "2022-2026",
    role: "BS Software Engineering",
    company: "FAST-NUCES, Islamabad",
    description: "Pursuing a degree with a focus on software engineering, UI/UX, and web development.",
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      {/* About Me section temporarily removed as requested */}
    </section>
  )
}
