import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

import profile from '../assets/profile.png'
import pro from '../assets/pro.png'
const Hero = () => {
  // Animation configurations for staggered, deliberate presentation layout
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 130, damping: 22 },
    },
  };

  return (
    <section 
      id="about" 
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 sm:px-8 lg:px-16 xl:px-24 pt-28 pb-16 md:py-32"
    >
      {/* Background Ambient Tones */}
      <div className="absolute top-1/4 left-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[80px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-5 h-[250px] w-[250px] rounded-full bg-indigo-600/5 blur-[90px] pointer-events-none hidden md:block" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-16 w-full">
        
        {/* Left Side: Professional Profile Introduction */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center text-center lg:text-left items-center lg:items-start"
        >
          {/* Engineering Role Identifier */}
          {/* <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4 sm:mb-5">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400" />
            <p className="text-cyan-400 text-xs sm:text-sm font-bold tracking-[3px] sm:tracking-[4px] uppercase font-mono">
              Full-Stack Developer
            </p>
          </motion.div> */}

          {/* Core Service Statement */}
          <motion.h1 
            variants={itemVariants} 
            className="mb-4 sm:mb-6 text-2xl sm:text-4xl font-black text-white tracking-tight leading-[1.1] sm:leading-none"
          >
            {/* Building Modern Web Experiences */}
            Hey, I'm Abdi
        
          </motion.h1>

          {/* Pragmatic Dev Bio */}
          <motion.p 
            variants={itemVariants} 
            className="max-w-xl text-xs sm:text-lg leading-relaxed text-slate-400 font-normal px-2 sm:px-0"
          >
            I specialize in the MERN stack, developing maintainable web applications, clean data architectures, and efficient backend services. Focused on robust integration code and responsive component structure.
          </motion.p>

          {/* Developer Channels */}
          <motion.div variants={itemVariants} className="mt-8 sm:mt-10 flex items-center gap-6">
            {[
              //{ icon: <FaGithub />, url: "https://github.com" },
           //   { icon: <FaLinkedin />, url: "https://linkedin.com" },
              { icon: <FaTelegramPlane />, url: "https://t.me" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl text-cyan-600 transition-colors hover:text-cyan-400 focus:outline-none"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Geometric Visual Layout Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="order-1 lg:order-2 lg:col-span-5 relative mx-auto flex h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] xl:h-[460px] xl:w-[460px] items-center justify-center select-none"
        >
          {/* Subtle Rotating Track Lines */}
          
          {/* Integrated Profile Image Card - Expanded Relative Dimensions */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="relative flex w-full aspect-square max-w-[320px] sm:max-w-[340px] xl:max-w-[380px] items-center justify-center rounded-2xl sm:rounded-3xl  shadow-2xl overflow-hidden group"
          >
            {/* Ambient inner card tint gradient */}
            <div className="absolute -inset-px bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10 pointer-events-none" />
            
            {/* Profile Image Asset Container */}
            <img 
              src={profile} 
              alt="Developer Profile"
              className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;