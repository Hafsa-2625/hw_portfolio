import React from "react"
import { Trophy, Users, Palette, Laptop } from "lucide-react"

const journey = [
  {
    bg: "bg-gradient-to-br from-teal-50 to-purple-100",
    iconBg: "bg-gradient-to-r from-teal-400 to-teal-500",
    icon: <Trophy className="w-8 h-8 text-white" />,
    year: "2023",
    role: "UNO Project-Team Lead",
    description: "Led the UI design for a digital UNO card game.",
  },
  {
    bg: "bg-gradient-to-br from-slate-100 to-teal-100",
    iconBg: "bg-gradient-to-r from-teal-400 to-teal-500",
    icon: <Users className="w-8 h-8 text-white" />,
    year: "2025-Present",
    role: "Head of Design Team",
    description: "Led and mentored a university design team.",
  },
  {
    bg: "bg-gradient-to-br from-teal-100 to-purple-100",
    iconBg: "bg-gradient-to-r from-teal-400 to-teal-500",
    icon: <Palette className="w-8 h-8 text-white" />,
    year: "2024-2025",
    role: "Design Team Member",
    description: "Created visual content for university events.",
  },
  {
    bg: "bg-gradient-to-br from-teal-50 to-purple-100",
    iconBg: "bg-gradient-to-r from-teal-400 to-teal-500",
    icon: <Laptop className="w-8 h-8 text-white" />,
    year: "2024",
    role: "Web Dev & Design Workshop",
    description: "Hands-on experience in UI design tools.",
  }
]

export default function JourneySection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center text-slate-800 mb-16 tracking-tight flex items-center justify-center gap-4 funky-heading">
          DESIGN JOURNEY
          <img src="/image-removebg-preview.png" alt="Journey Arrow" className="w-24 h-14 object-contain ml-2 inline-block align-middle" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.10))'}} />
        </h2>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-300 z-0" style={{transform: 'translateY(-50%)'}} />
          {journey.map((step, i) => (
            <div
              key={i}
              className={`relative z-10 flex-1 min-w-[260px] max-w-xs min-h-[240px] h-[240px] rounded-2xl shadow-lg ${step.bg} p-6 flex flex-col items-start justify-between funky-hover`}
              style={{ marginTop: i % 2 === 1 ? 40 : 0, marginBottom: i % 2 === 0 ? 40 : 0 }}
            >
              <div>
                <div className={`mb-4 w-12 h-12 rounded-xl flex items-center justify-center ${step.iconBg}`}>{step.icon}</div>
                <div className="font-bold text-lg md:text-xl mb-1 leading-snug text-slate-800">{step.year}</div>
                <div className="font-semibold text-base md:text-lg mb-2 leading-snug text-slate-800">{step.role}</div>
                <div className="text-base md:text-[1.05rem] font-normal leading-relaxed text-slate-600">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}