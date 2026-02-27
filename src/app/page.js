"use client"

import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"

export default function Home(){
  return (
    <main>
      <section id="hero"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '20%'
      }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.7}}
          style={{ fontSize: "5rem", fontWeight: "bold", lineHeight: 1.1}}          
          >
            David
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.7, delay: 0.2}}
          style={{ fontSize: "1.5rem", marginTop:"1rem", color: "#8a7560"}}  
        >
        <Typewriter
          options={{
            strings: [
              "IT student",
              "Building things.",
              "Based in Zagreb."
            ],
            autoStart: true,
            loop: true,
          }}
          />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 30}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.7, delay: 0.4}}
          style={{ fontSize: "1rem", marginTop: "0.5rem", color: "#b0a090"}}          
          >
            Zagreb, Croatia
        </motion.p>
      </section>
      
    </main>
  )
}