"use client"

import { motion } from "framer-motion"
import { Palette, Code, Zap, Users, Lightbulb, Target, Star, Clock } from "lucide-react"

const skills = [
  { name: "Figma", level: 95, icon: Palette },
  { name: "Adobe XD", level: 90, icon: Palette },
  { name: "Adobe Illustrator", level: 85, icon: Palette },
  { name: "Adobe Photoshop", level: 80, icon: Palette },
  { name: "HTML5", level: 90, icon: Code },
  { name: "CSS3", level: 90, icon: Code },
  { name: "Tailwind CSS", level: 85, icon: Code },
  { name: "JavaScript", level: 80, icon: Code },
  { name: "React", level: 75, icon: Code },
  { name: "Wireframing", level: 90, icon: Zap },
  { name: "Prototyping", level: 88, icon: Zap },
  { name: "User Flows", level: 85, icon: Zap },
  { name: "Usability Testing", level: 80, icon: Users },
  { name: "Problem-solving", level: 95, icon: Lightbulb },
  { name: "Communication", level: 90, icon: Users },
  { name: "Time Management", level: 88, icon: Clock },
  { name: "Team Collaboration", level: 92, icon: Users },
]

const tools = [
  { name: "Figma", category: "Design" },
  { name: "Adobe XD", category: "Design" },
  { name: "Adobe Illustrator", category: "Design" },
  { name: "Adobe Photoshop", category: "Design" },
  { name: "Canva", category: "Design" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
]

const services = [
  {
    icon: Palette,
    title: "UI/UX Design & Prototyping",
    description: "Designing user-centered digital experiences using Figma, Adobe XD, and Illustrator. Creating wireframes, prototypes, and high-fidelity UI designs.",
    features: ["Wireframing", "Prototyping", "User Interface Design", "Visual Consistency"],
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building responsive and interactive web interfaces using HTML5, CSS3, Tailwind CSS, JavaScript, and React.",
    features: ["Responsive Design", "React", "Tailwind CSS", "Performance Optimization"],
  },
  {
    icon: Users,
    title: "User Research & Testing",
    description: "Conducting user research, usability testing, and creating user flows to ensure optimal user experience.",
    features: ["User Research", "User Flows", "Usability Testing", "Feedback Analysis"],
  },
  {
    icon: Lightbulb,
    title: "Soft Skills",
    description: "Strong problem-solving, communication, time management, and team collaboration skills.",
    features: ["Problem-solving", "Communication", "Time Management", "Teamwork"],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Skills & Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My expertise spans across design, development, and strategy. Here's how I can help bring your vision to
            life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-600">
                    <Star className="w-4 h-4 text-blue-500 fill-current" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills & Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-8">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-800 font-semibold text-lg">{skill.name}</span>
                        <span className="text-slate-600 font-medium">{skill.level}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-8">Tools I Use</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer border border-slate-100"
                >
                  <div className="text-lg font-semibold text-slate-800 mb-1">{tool.name}</div>
                  <div className="text-sm text-slate-500">{tool.category}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
