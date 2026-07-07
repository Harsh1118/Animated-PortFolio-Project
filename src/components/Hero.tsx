import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const techPills = [
  'React.js',
  'TypeScript',
  'NestJS',
  'PostgreSQL',
  'TypeORM',
  'Real-Time Systems',
];

const tabContents = {
  'developer.ts': `const harsh = {
  name: 'Harsh Dubey',
  role: 'Full Stack Developer',
  passion: 'Building scalable solutions',
  skills: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Docker'],
  currently: 'Building something awesome 🚀'
};
console.log(harsh);
// > Always learning. Always building.`,

  'infra.yaml': `services:
  api-gateway:
    image: nestjs-api:latest
    ports:
      - "3000:3000"
    environment:
      DB_HOST: neondb-postgres
      CACHE_HOST: redis-cache
    depends_on:
      - neondb-postgres
      - redis-cache
  neondb-postgres:
    image: postgres:15-alpine
  redis-cache:
    image: redis:alpine`,

  'interests.json': `{
  "focus": "Backend Engineering & Systems Design",
  "interests": [
    "Real-time Systems",
    "Database Optimization",
    "Containerized Architectures"
  ],
  "mindset": "SOLID principles, clean architecture, and type safety."
}`
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabContents>('developer.ts');
  const [copied, setCopied] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const fullText = tabContents[activeTab];
    setDisplayedText('');

    const interval = setInterval(() => {
      setDisplayedText(fullText.substring(0, index + 3));
      index += 3;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 12);

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleCopy = () => {
    navigator.clipboard.writeText(tabContents[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-[rgb(var(--background))]"
    >
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] animate-pulse delay-1000" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Intro */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <span className="px-4 py-2 rounded-full glass border border-white/5 text-xs font-semibold tracking-wider text-purple-400 uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                👋 Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none"
            >
              Harsh <span className="text-gradient">Dubey</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                Software Engineer Intern
              </h2>
              <p className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">
                Full Stack Developer
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed"
            >
              Building scalable full-stack applications with clean architecture and modern technologies. Specializing in backend systems, database design, and real-time collaboration.
            </motion.p>

            {/* Tech Stack Highlights */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-2">
              {techPills.map((pill) => (
                <span
                  key={pill}
                  className="px-3.5 py-1.5 rounded-lg glass border border-white/5 text-xs font-medium text-slate-300 hover:border-cyan-500/30 hover:text-white transition-all cursor-default"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-purple-950/20 flex items-center gap-2 border border-white/10 group"
              >
                View Projects
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="/Harsh_Dubey_Resume_8.pdf"
                download="Harsh_Dubey_Resume_8.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3.5 rounded-xl glass border border-white/5 hover:border-white/10 text-slate-200 hover:text-white font-semibold text-sm flex items-center gap-2"
              >
                Download Resume
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3.5 rounded-xl glass border border-white/5 hover:border-white/10 text-slate-200 hover:text-white font-semibold text-sm"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4 text-slate-400">
              <a
                href="https://github.com/Harsh1118"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/harshdubey1118/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Code Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' as const }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 rounded-2xl blur-2xl -z-10" />

            <div className="w-full glass-premium rounded-2xl overflow-hidden shadow-2xl border border-white/10 glow-mixed">
              {/* Terminal Title Bar & Tabs */}
              <div className="bg-slate-950/80 px-4 py-2 flex items-center justify-between border-b border-white/5 select-none">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto mx-4 scrollbar-none">
                  {(Object.keys(tabContents) as Array<keyof typeof tabContents>).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-[10px] md:text-xs transition-all flex items-center gap-1.5 clickable ${activeTab === tab
                          ? 'bg-[#0F1117]/90 text-cyan-300 font-semibold border border-white/5'
                          : 'text-slate-500 border border-transparent hover:text-slate-300 hover:bg-white/5'
                        }`}
                    >
                      {/* Visual indicator dot matching file type */}
                      <span className={`w-1.5 h-1.5 rounded-full ${tab.endsWith('.ts') ? 'bg-blue-400' :
                          tab.endsWith('.yaml') ? 'bg-amber-400' : 'bg-green-400'
                        }`} />
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all clickable"
                  title="Copy Code"
                >
                  {copied ? (
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Terminal Content */}
              <div className="p-5 text-left font-mono text-[11px] md:text-xs leading-relaxed overflow-x-auto min-h-[220px]">
                <pre className="text-slate-300 font-mono whitespace-pre select-text">
                  {displayedText}
                  <span className="inline-block w-1.5 h-3.5 bg-cyan-400/80 ml-0.5 animate-pulse" />
                </pre>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
