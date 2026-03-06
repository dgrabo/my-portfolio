"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
  })

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        backgroundColor: "#8a7560",
        transformOrigin: "0%",
        zIndex: 9999,
      }}
    />
  )
}