"use client"

import { motion } from "framer-motion"
import { ArrowDown, MapPin, Calendar } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-medium"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for work
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-black text-slate-800 leading-tight"
              >
                Hi, I'm
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent">
                  Hafsa Waqar
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-slate-600 leading-relaxed max-w-lg"
              >
                Designing playful, intuitive digital experiences that users actually enjoy.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => {
                  const el = document.querySelector('#projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </motion.button>

              <a
                href="/HafsaWaqar_CV.pdf"
                download
                className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-all flex items-center justify-center"
                style={{ textDecoration: 'none' }}
              >
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-6 text-black text-sm"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-black" />
                <span className="text-black">Rawalpindi</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-black" />
                <span className="text-black">FAST-NUCES Student</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 rounded-3xl transform rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-teal-500 rounded-3xl transform -rotate-3 opacity-15" />

              {/* Profile Image Container */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-teal-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src="/hafsa1.jpg"
                    alt="Hafsa Waqar profile"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Floating Stats */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg"
                >
                  <div className="text-2xl font-bold text-teal-600">10+</div>
                  <div className="text-xs text-slate-500">Projects</div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg"
                >
                  <div className="text-2xl font-bold text-teal-400">3+ yrs</div>
                  <div className="text-xs text-slate-500">experience</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2 text-slate-400"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
