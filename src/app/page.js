"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Titan_One } from "next/font/google"
import Typewriter from "typewriter-effect"

const projects = [
  {
    id: "telegram-bot",
    title: "Telegram Restaurant Finder Bot",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tech: ["Python", "Telegram API", "Google Places API", "Render"],
    github: "https://github.com/dgrabo/telegram-bot",
    image: "/projects/telegram-bot/bot1.jpg"

  }
]

export default function Home(){
  const [selectedProject, setSelectedProject] = useState(null)
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

        {projects.map((project) => (
          <motion.div 
            key={project.id}
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
            <div
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer"
              }}
            >
              <h3 style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                {project.title}
              </h3>
              <motion.span
                animate={{ rotate: selectedProject === project.id ? 180 : 0}}
                transition={{ duration: 0.3 }}
                style={{ fontsize: "1.5rem", color: "#8a7560"}}
              >
                ↓
              </motion.span>
            </div>
            <AnimatePresence>
              {selectedProject === project.id && (
                <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity:0, height: 0 }}
                transition={{ duration: 0.4 }}
                style={{ overflow: "hidden" }}
                >
                  <div style={{ paddingTop: "1.5rem"}}>
                    <p style={{ 
                      fontSize: "1.1rem", 
                      lineHeight: 1.7, 
                      color: "#4a4a4a", 
                      marginBottom: "1.5rem", 
                      maxWidth: "600px"}}>
                      {project.description}
                    </p>
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                      {project.tech.map((tech) => (
                        <span 
                            key={tech}
                            style={{
                              backgroundColor: "#f0e6d3",
                              color: "#8a7560",
                              padding: "0.3rem 0.9rem",
                              borderRadius: "999px",
                              fontSize: "0.9rem",
                              fontWeight: "500"
                            }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <img 
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        borderRadius: "12px",
                        marginBottom: "2rem"
                      }}
                    >
                    </img>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopenet noreferrer"
                      style={{
                        display: "inline-block",
                        backgroundColor: "#f0f0f0",
                        color: "#b4b4b4",
                        padding: "0.7rem 1.5rem",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        fontWeight: "500"
                      }}
                    >
                      GitHub →
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>
    </main>
  )
}