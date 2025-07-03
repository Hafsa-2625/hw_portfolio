"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Job Finding Application UI",
    category: "UI/UX Design",
    description:
      "Designed and developed a complete job finding application user interface using Figma. Focused on creating a responsive and interactive user experience with a balance between creativity and elegance. Delivered a fully functional UI prototype with engaging user flows and design consistency.",
    image: "/jobhunt.png",
    tags: ["Figma", "UI/UX", "Prototyping", "User Flows"],
    year: "2024",
    featured: true,
  },
  {
    id: 2,
    title: "TravelFAST Website Design",
    category: "UX Research",
    description:
      "TravelFAST Website Design",
    image: "/iict.png",
    tags: ["Figma", "UI/UX", "User Research", "UI Design"],
    year: "2023",
    featured: true,
  },
  {
    id: 3,
    title: "UNO Card Game UI Project",
    category: "UI/UX Design",
    description:
      "Designed a digital UNO card game interface with playful visuals and intuitive user experience. Created in Figma with a focus on game flow and card interactions.",
    image: "/uno.png",
    tags: ["Figma", "Game UI", "Cards", "Prototyping"],
    year: "2023",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Project Design",
    category: "UI/UX Design",
    description: "Designed a vibrant social media platform interface with a focus on engagement and modern branding. Created in Figma with custom illustrations and playful layouts.",
    image: "/crumble.png",
    tags: ["Canva", "Social Media", "UI Design", "Branding"],
    year: "2024",
    featured: false,
  },
]

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Mobile Design", "Web Design", "Dashboard Design"]
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="pt-8 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 funky-heading">Featured Work</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest projects where creativity meets functionality. Each project tells a unique story of
            problem-solving through design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`group cursor-pointer ${project.featured ? "md:col-span-1" : ""}`}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/80 glass rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 funky-hover"
              >
                {/* Project Image */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-slate-100 to-teal-100">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-t-3xl"
                      style={{ zIndex: 1 }}
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-400 to-teal-500 rounded-t-3xl opacity-80" style={{ zIndex: 1 }} />
                  )}

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </motion.div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-teal-600 font-semibold bg-teal-100 px-2 py-0.5 rounded-full">
                      {project.category}
                    </span>
                    <motion.div animate={{ x: hoveredProject === project.id ? 5 : 0 }} className="text-slate-400">
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors truncate">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-slate-100 rounded-full text-slate-600 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
