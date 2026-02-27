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
        paddingLeft: '20%',
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
      <section 
        id="about"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "20%",
          paddingRight: "20%",
        }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 30}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.7 }}
          viewport={{ once:true }}
          style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}
        >
          About
        </motion.h2> 
        <motion.p 
          initial={{ opacity: 0, y: 30}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once:true }}
          style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "#4a4a4a", maxWidth: "600px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </motion.p> 
      </section>
      <section
        id="projects"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "20%",
          paddingRight: "20%"
        }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 30}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true}}
          style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "3rem" }}
        >
          Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true}}
          style={{ 
            backgroundColor: "fff8f0",
            borderRadius: "16px",
            padding: "2.5rem",
            boxShadow: "0 4px 20px rgba(0,0,0,0.6)"
          }}
        >
          <h3 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "1rem"}}>
            Telegram Restaurant Finder Bot
          </h3>
          <p style={{ 
            fontSize: "1.1rem", 
            lineHeight: 1.7, 
            color: "#4a4a4a", 
            marginBottom: "1.5rem", 
            maxWidth: "600px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Bot koji pronalazi restorane u blizini koristeći Google Places API.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            {["Python", "Telegram API", "Google Places API", "Render"].map((tech) => (
              <span 
                  key={tech}
                  style={{
                    backgroundColor: "#f0e6d3",
                    color: "#8a7560",
                    padding: "0.3rem 0.9rem",
                    borderRadius: "999px",
                    fontSize: "0.9rem",
                    fontWeight: "4000"
                  }}
              >
                {tech}
              </span>
            ))}
          </div>


        </motion.div>

      </section>
    </main>
  )
}