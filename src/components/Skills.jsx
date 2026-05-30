import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTypescript,
  SiFramer,
  SiPostman,
  SiVite,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend Development",
    description:
      "Creating modular, responsive user interfaces and interactive components with precise layout structures.",
    techs: [
      { name: "React", icon: <FaReact />, type: "Library", color: "text-[#61DAFB]" },
      { name: "JavaScript", icon: <SiJavascript />, type: "Language", color: "text-[#F7DF1E]" },
      { name: "TypeScript", icon: <SiTypescript />, type: "Language", color: "text-[#3178C6]" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, type: "Framework", color: "text-[#06B6D4]" },
      //{ name: "Framer Motion", icon: <SiFramer />, type: "Animation", color: "text-[#0055FF]" },
      { name: "HTML5", icon: <FaHtml5 />, type: "Structure", color: "text-[#E34F26]" },
      { name: "CSS3", icon: <FaCss3Alt />, type: "Styling", color: "text-[#1572B6]" },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Building scalable API layers, structured data schemas, authentication controls, and server logic.",
    techs: [
      { name: "Node.js", icon: <FaNodeJs />, type: "Runtime", color: "text-[#339933]" },
      { name: "Express.js", icon: <SiExpress />, type: "Framework", color: "text-[#FFFFFF]" },
      { name: "MongoDB", icon: <SiMongodb />, type: "Database", color: "text-[#47A248]" },
      //{ name: "Firebase", icon: <SiFirebase />, type: "Platform", color: "text-[#FFCA28]" },
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "Leveraging core version management tools, robust API mocking environments, and optimal bundlers.",
    techs: [
      { name: "Git", icon: <FaGitAlt />, type: "VCS", color: "text-[#F05032]" },
      { name: "GitHub", icon: <FaGithub />, type: "Repository", color: "text-[#FFFFFF]" },
      { name: "Postman", icon: <SiPostman />, type: "API Testing", color: "text-[#FF6C37]" },
     // { name: "Vite", icon: <SiVite />, type: "Build Tool", color: "text-[#646CFF]" },
    ],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 140, damping: 20 },
    },
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black sm:bg-slate-950 px-4 sm:px-8 lg:px-16 xl:px-24 py-16 md:py-24"
    >
      {/* Background Ambient Tones */}
      <div className="absolute left-[-100px] top-40 h-[400px] w-[400px] rounded-full sm:bg-cyan-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-100px] h-[400px] w-[400px] rounded-full sm:bg-blue-500/5 blur-[130px] pointer-events-none" />

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
            Technologies & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Tools I Use</span>
          </h2>
        </motion.div>

        {/* Categorized Stack Matrix Blocks */}
        <div className="space-y-8">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: groupIndex * 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative overflow-hidden rounded-2xl sm:border sm:border-white/10 bg-slate-900/30 p-2 sm:p-8 sm:backdrop-blur-xl sm:shadow-xl"
            >
              <div className="relative z-10">
                
                {/* Category Header Layout */}
                <div className="mb-6 text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {group.title}
                  </h3>

                  <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-4xl">
                    {group.description}
                  </p>
                </div>

                {/* Grid Item Layout Mapping */}
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                >
                  {group.techs.map((tech) => (
                    <motion.div
                      key={tech.name}
                      variants={itemVariants}
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-3.5 rounded-xl sm:border sm:border-slate-900 bg-slate-950/50 p-4 select-none"
                    >
                      {/* Always Show Original Brand Color */}
                      <div className={`text-3xl sm:text-4xl ${tech.color}`}>
                        {tech.icon}
                      </div>

                      {/* Technical Descriptions */}
                      <div className="overflow-hidden">
                        <h4 className="font-semibold text-white text-sm sm:text-base tracking-tight truncate">
                          {tech.name}
                        </h4>

                        <p className="text-[10px] font-mono tracking-wider text-slate-500 uppercase mt-0.5">
                          {tech.type}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;