"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/6 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-40"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-gradient-to-r from-rose-400 to-pink-500 transform rotate-45 opacity-30"
      />

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full opacity-50"
      />

      <motion.div
        animate={{
          y: [0, 35, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/6 w-5 h-5 bg-gradient-to-r from-pink-400 to-rose-500 transform rotate-45 opacity-25"
      />

      {/* Larger floating elements */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/12 w-12 h-12 bg-gradient-to-r from-amber-300/20 to-orange-400/20 rounded-2xl backdrop-blur-sm border border-amber-200/30"
      />

      <motion.div
        animate={{
          y: [0, 60, 0],
          x: [0, -40, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-3/4 right-1/12 w-8 h-8 bg-gradient-to-r from-rose-300/30 to-pink-400/30 rounded-full backdrop-blur-sm"
      />
    </div>
  )
}
