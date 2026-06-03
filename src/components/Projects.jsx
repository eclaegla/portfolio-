import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { projects } from "../data/projects";

const Projects = () => {
  const [toastMessage, setToastMessage] = useState(null);

  // Safely intercept and show professional deployment notification
  const handlePrivateRepoClick = (e) => {
    e.preventDefault();
    setToastMessage("Repository parameters are currently restricted to private deployment.");
    
    // Automatically dismiss the message clear window
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-4 sm:px-8 lg:px-16 xl:px-24 py-16 md:py-24"
    >
      {/* Background Ambient Tones */}
      <div className="absolute top-40 left-[-100px] h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[130px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        
        {/* Balanced Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-12 md:mb-16 max-w-3xl text-center"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            A curated selection of applications built with modern engineering systems, clean architecture, and intuitive user design layers.
          </p>
        </motion.div>

        {/* Projects Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-900/30 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-slate-800"
            >
              <div>
                {/* Ultra-Wide Media Wrapper (Cinematic 21:9 Aspect Ratio) */}
                <div className="relative aspect-[21/10] sm:aspect-[21/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                </div>

                {/* Content Core */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-slate-800 bg-slate-950/60 px-2.5 py-1 text-[10px] sm:text-xs font-mono text-cyan-400 tracking-wide"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Controls Footer */}
              <div className="p-5 sm:p-6 pt-0 mt-auto flex items-center gap-3">
                <a
                  href="#private-repository"
                  onClick={handlePrivateRepoClick}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950/40 py-2.5 text-xs sm:text-sm font-medium text-slate-300 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900 hover:text-white"
                >
                  <FaGithub className="text-base" />
                  Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Premium Toast Layout Component */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none w-full max-w-sm px-4 sm:px-0">
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="pointer-events-auto flex items-center gap-3 w-full rounded-xl border border-cyan-500/20 bg-slate-900/90 p-4 shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] backdrop-blur-xl"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 flex-shrink-0">
                <FaLock className="text-xs" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-200 leading-normal">
                {toastMessage}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;