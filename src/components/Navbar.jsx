import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from '../assets/logo.png'
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
 // { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Simple active link tracking using IntersectionObserver
  useEffect(() => {
    const observers = navLinks.map((link) => {
      const el = document.querySelector(link.href);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(link.href);
          }
        },
        { rootMargin: "-30% 0px -60% 0px" } // Triggers when section occupies prime viewport real estate
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => obs?.observer.unobserve(obs.el));
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10" aria-label="Main Navigation">
        <div className="mt-2 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md px-6 py-4 shadow-xl">
          
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold tracking-wide text-white group"
            aria-label="Abdi Home"
          >
            <img src={logo} class="h-12"/>
            {/* <span className="text-cyan-400 inline-block transition-transform group-hover:translate-x-1">.</span> */}
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                      isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {/* Modern pill/dot indicator for active page section */}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 h-[2px] w-full bg-cyan-400"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Hire Button */}
          <motion.a
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="hidden md:block rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-cyan-400/10 transition-all hover:shadow-cyan-400/20"
          >
            Hire Me
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white md:hidden p-1 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-lg"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-2 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl p-6 md:hidden shadow-2xl"
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-lg py-1 transition-colors ${
                        activeSection === link.href ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 block rounded-xl bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-400/10"
              >
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;