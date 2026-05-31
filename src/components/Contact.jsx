import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTelegramPlane, FaEnvelope, FaSpinner } from "react-icons/fa";

const Contact = () => {
  // Form and UI State Tracking
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  // Input value bindings
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form Submission and Telegram API integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Pull configurations directly from Vite environment wrappers (.env)
    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID; 

    

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("Missing environmental credentials. Check your .env configuration.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    // Construct clean structural markdown text payload for Telegram
    const textMessage = `
📬 *New Contact Form Submission*
───────────────────────
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
🏷️ *Subject:* ${formData.subject}

💬 *Message Payload:*
${formData.message}
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: textMessage,
          parse_mode: "Markdown"
        })
      });

      if (response.ok) {
        setStatus("success");
        // Flush form inputs completely on safe transmission
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      console.error("Telegram Transmission Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-4 sm:px-8 lg:px-16 xl:px-24 py-16 md:py-24"
    >
      {/* Background Ambient Tones */}
      <div className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500 blur-[140px] pointer-events-none" />

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
            Get In <span className="bg-gradient-to-r from-cyan-400 -blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Have an open role, a project idea, or a technical architecture question? Drop a message or connect directly.
          </p>
        </motion.div>

        {/* Dual Column Layout Grid */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Left Column: Direct Inquiries & Tech Channels */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            <motion.div 
              variants={itemVariants}
              className="rounded-2xl border border-gray-900/10 bg-slate-900/30 p-6 backdrop-blur-xl"
            >
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
                Direct Communication
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                If you prefer bypass forms altogether, reach out straight to the central inbox.
              </p>
              
              <a 
                href="mailto:abdigemechu83@gmail.com"
                className="inline-flex items-center gap-3 text-xs sm:text-sm text-cyan-400 nt-mono hover:underline truncate max-w-full"
              >
                <FaEnvelope className="text-sm flex-shrink-0" />
                abdigemechu83@gmail.com
              </a>
            </motion.div>

           
          </motion.div>

          {/* Right Column: Premium Interactive Form */}
        {/* Right Column: High-Density Mobile-First Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-2xl sm:border sm:border-gray-900/10 sm:bg-slate-900/30 p-2 sm:p-8 backdrop-blur-xl shadow-xl w-full mx-0"
          >
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div className="grid gap-3.5 sm:grid-cols-2 w-full">
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-[10px] font-mono tracking-wider text-white uppercase px-0.5">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-900 bg-slate-950/50 px-4 py-3.5 text-base sm:text-sm text-white outline-none transition-colors duration-200 focus:border-cyan-400  appearance-none box-border"
                  />
                </div>

                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-[10px] font-mono tracking-wider text-white uppercase px-0.5">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-900 bg-slate-950/50 px-4 py-3.5 text-base sm:text-sm text-white outline-none transition-colors duration-200 focus:border-cyan-400  appearance-none box-border"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-[10px] font-mono tracking-wider text-white uppercase px-0.5">
                  Subject
                </label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-900 bg-slate-950/50 px-4 py-3.5 text-base sm:text-sm text-white outline-none transition-colors duration-200 focus:border-cyan-400  appearance-none box-border"
                />
              </div>

              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-[10px] font-mono tracking-wider text-white uppercase px-0.5">
                  Message Payload
                </label>
                <textarea 
                  rows={4}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-gray-900 bg-slate-950/50 px-4 py-5 text-base sm:text-sm text-white outline-none transition-colors duration-200 focus:border-cyan-400  appearance-none box-border"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full flex items-center justify-center gap-2 rounded-xl py-4 text-sm font-semibold transition-all duration-200 active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed ${
                  status === "success" 
                    ? "bg-emerald-500 text-white" 
                    : status === "error" 
                    ? "bg-rose-500 text-white" 
                    : "bg-cyan-500 xt-slate-950 hover:bg-cyan-400 ver:shadow-lg hover:shadow-cyan-500  disabled:opacity-50"
                }`}
              >
                {status === "loading" && <FaSpinner className="animate-spin text-base" />}
                {status === "success" && "Transmission Complete ✓"}
                {status === "error" && "Transmission Failed ✗"}
                {status === "idle" && "Transmit Message"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;