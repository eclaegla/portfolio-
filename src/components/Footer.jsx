import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-4 sm:px-8 lg:px-16 xl:px-24 py-8 md:py-12">
      <div className="relative z-10 mx-auto max-w-7xl w-full flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Signature Branding */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold text-white tracking-tight">
            AB<span className="text-cyan-400">.</span>
          </h3>
          <p className="mt-1 text-xs text-slate-500 font-normal">
            &copy; {currentYear} All rights reserved. 
          </p>
        </div>

        {/* Center/Right Side: Quick Navigation Links */}
        {/* <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
          <a href="#about" className="transition-colors duration-200 hover:text-cyan-400">About</a>
          <a href="#skills" className="transition-colors duration-200 hover:text-cyan-400">Skills</a>
          <a href="#projects" className="transition-colors duration-200 hover:text-cyan-400">Projects</a>
          <a href="#contact" className="transition-colors duration-200 hover:text-cyan-400">Contact</a>
        </div> */}

        {/* Right Side: Quick Static Channels */}
        {/* <div className="flex items-center gap-4">
          {[
            { icon: <FaGithub />, url: "https://github.com", color: "hover:text-white" },
            { icon: <FaLinkedin />, url: "https://linkedin.com", color: "hover:text-[#0A66C2]" },
            { icon: <FaTelegramPlane />, url: "https://t.me", color: "hover:text-[#24A1DE]" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              className={`text-lg text-slate-500 transition-colors duration-200 ${social.color}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div> */}

      </div>
    </footer>
  );
};

export default Footer;