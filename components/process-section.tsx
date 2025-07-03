import React from "react"

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "DISCOVERY",
      description: "UNDERSTAND USER NEEDS AND MARKET INSIGHTS.",
    },
    {
      number: "02",
      title: "STRATEGY",
      description: "DEFINE DIGITAL PRODUCT GOALS AND VISION.",
    },
    {
      number: "03",
      title: "WIREFRAME",
      description: "DEFINE PRODUCT AND CREATE A BASIC LAYOUT PLAN.",
    },
    {
      number: "04",
      title: "DESIGN",
      description: "CRAFT VISUAL AND INTERACTIVE ELEMENTS.",
    },
    {
      number: "05",
      title: "BUILD",
      description: "DEVELOP THE FUNCTIONAL PRODUCT OR PROTOTYPE.",
    },
    {
      number: "06",
      title: "DELIVER",
      description: "LAUNCH THE FINAL PRODUCT TO USERS AND MARKETING.",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[2.8rem] md:text-[4rem] leading-none font-black text-left text-teal-500 mb-16 tracking-tight funky-heading">Process.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
          {steps.map((step, i) => (
            <div key={step.number} className="mb-8">
              <div className="text-base font-bold text-teal-500 mb-2">{step.number}</div>
              <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-2 tracking-tight font-sans">{step.title}</div>
              <div className="text-base md:text-lg text-slate-600 tracking-wide font-sans uppercase">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 