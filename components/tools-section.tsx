import Image from "next/image"

const tools = [
  { name: "Figma", icon: "/figma.png" },
  { name: "Canva", icon: "/canva.jpg" },
  { name: "React", icon: "/react.png" },
  { name: "JavaScript", icon: "/js.png" },
  { name: "Tailwind CSS", icon: "/tailwind.png" },
  { name: "HTML5", icon: "/html.jpg" },
  { name: "CSS3", icon: "/css.jpg" },
  { name: "Adobe XD", icon: "/xd.png" },
  { name: "Photoshop", icon: "/ps.png" },
  { name: "Illustrator", icon: "/illustrator.png" },
]

export default function ToolsSection() {
  return (
    <section className="py-20 px-6 relative bg-funky-pink overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 funky-heading">
          Tools I Love
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Here are some of my favorite tools for design, code, and creativity. Hover to see the magic!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/80 shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-funkyTeal"
          >
            <div className="w-20 h-20 flex items-center justify-center mb-3">
              <Image src={tool.icon} alt={tool.name} width={80} height={80} className="object-contain drop-shadow-md" />
            </div>
            <span className="text-base font-semibold text-slate-700 group-hover:text-funkyTeal transition-colors">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
      {/* Wavy divider for extra fun */}
      <svg className="absolute left-0 right-0 bottom-0 w-full" height="48" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFD1E3" fillOpacity=".5" d="M0,32L60,26.7C120,21,240,11,360,10.7C480,11,600,21,720,32C840,43,960,53,1080,53.3C1200,53,1320,43,1380,37.3L1440,32V48H1380C1320,48,1200,48,1080,48C960,48,840,48,720,48C600,48,480,48,360,48C240,48,120,48,60,48H0V32Z" />
      </svg>
    </section>
  )
} 