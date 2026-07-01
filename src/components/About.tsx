import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import photo from "../assets/New_Resume_Photo.jpeg";

const techStack = [
  {
    name: 'React',
    tooltip: 'Advanced SPAs, Hooks & State Management',
    icon: (
      <svg className="w-8 h-8 text-cyan-400 group-hover:animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 8.75a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"/>
        <path fillRule="evenodd" d="M12 2C6.98 2 3.12 4.41 3.03 6.9c-.11 2.92 4.09 5.86 8.97 6.09-4.88.23-9.08 3.17-8.97 6.09.09 2.49 3.95 4.9 8.97 4.9 5.02 0 8.88-2.41 8.97-4.9.11-2.92-4.09-5.86-8.97-6.09 4.88-.23 9.08-3.17 8.97-6.09C20.88 4.41 17.02 2 12 2zm-6.93 4.9c0-1.25 2.5-3 6.93-3s6.93 1.75 6.93 3c0 1.07-1.84 2.6-5.26 2.95a12.83 12.83 0 01-3.34 0C7 9.5 5.07 7.97 5.07 6.9zm13.86 10.2c0 1.25-2.5 3-6.93 3s-6.93-1.75-6.93-3c0-1.07 1.84-2.6 5.26-2.95.55-.06 1.1-.09 1.67-.09s1.12.03 1.67.09c3.42.35 5.26 1.88 5.26 2.95z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    name: 'Nest.js',
    tooltip: 'REST/GraphQL APIs, Websockets & DI',
    icon: (
      <svg className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm8 14.3l-8 4-8-4v-7.5l8-4 8 4v7.5z"/>
        <path d="M12 6.5l-5 2.5v5l5 2.5 5-2.5v-5l-5-2.5z"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    tooltip: 'High-Performance Asynchronous Runtime',
    icon: (
      <svg className="w-8 h-8 text-green-500 group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a1 1 0 00-.51.14l-8.5 4.9a1 1 0 00-.49.86v9.8a1 1 0 00.49.86l8.5 4.9a1 1 0 001.02 0l8.5-4.9a1 1 0 00.49-.86v-9.8a1 1 0 00-.49-.86l-8.5-4.9A1 1 0 0012 2zm-1 4.15l6.5 3.75-6.5 3.75v-7.5zm2 11.7l-6.5-3.75 6.5-3.75v7.5z"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    tooltip: 'Strict Static Typing & Modern TSX',
    icon: (
      <svg className="w-8 h-8 text-blue-500 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM10.75 16.5c0 .8-.4 1.3-1.15 1.3-.65 0-1-.35-1.15-.9l-1.3.5c.3 1.1 1.2 1.7 2.45 1.7 1.65 0 2.65-.9 2.65-2.35v-6h-1.5v5.75zm7.25-3.25c-.75-.45-1.65-.75-2.45-.75-.85 0-1.4.35-1.4.95 0 .5.35.75 1.25 1.1l1 .4c1.55.55 2.15 1.35 2.15 2.5 0 1.75-1.4 2.8-3.4 2.8-1.55 0-2.8-.55-3.45-1.55l1.2-.75c.45.7 1.25 1.05 2.25 1.05 1 0 1.5-.4 1.5-1 0-.55-.35-.85-1.3-1.2l-1.05-.4c-1.35-.5-2.05-1.25-2.05-2.45 0-1.6 1.35-2.6 3.15-2.6.95 0 1.9.25 2.6.7l-.95 1.2z"/>
      </svg>
    ),
  },
  {
    name: 'C++',
    tooltip: 'Low-Level Optimizations & DSA Core',
    icon: (
      <svg className="w-8 h-8 text-blue-500 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/>
        <text x="6" y="15" fill="currentColor" fontSize="8" fontWeight="bold" fontFamily="monospace">C++</text>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    tooltip: 'Relational Schema Design & Transactions',
    icon: (
      <svg className="w-8 h-8 text-sky-500 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-3.7l-3.2 3.2v-1.4l2.5-2.5L7.8 10.6v-1.4l3.2 3.2V8.7L7.8 5.5h1.4l2.8 2.8V4.8h1.5v3.5l2.8-2.8h1.4l-3.2 3.2v3.7l3.2-3.2v1.4l-2.5 2.5 2.5 2.5v1.4l-3.2-3.2v3.7h-1.5z"/>
      </svg>
    ),
  },
  {
    name: 'NeonDB',
    tooltip: 'Serverless Server-Isolated PostgreSQL Cloud',
    icon: (
      <svg className="w-8 h-8 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 22 22 22"/>
        <circle cx="12" cy="13" r="3"/>
      </svg>
    ),
  },
  {
    name: 'Cloudflare',
    tooltip: 'Serverless Workers & CDN Deployments',
    icon: (
      <svg className="w-8 h-8 text-orange-400 group-hover:animate-pulse-slow" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04A7.49 7.49 0 0012 4c-3.48 0-6.4 2.38-7.17 5.58A5.993 5.993 0 000 15c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 19H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.467 5.467 0 0112 6c2.63 0 4.85 1.9 5.4 4.47l.32 1.5 1.54.11a3.003 3.003 0 012.74 2.92c0 1.65-1.35 3-3 3z"/>
      </svg>
    ),
  },
  {
    name: 'Docker',
    tooltip: 'Multi-Stage Containerized Environments',
    icon: (
      <svg className="w-8 h-8 text-sky-400 group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.95 10.63a.22.22 0 00-.2-.1h-3.3a.22.22 0 00-.22.22v1.94a.22.22 0 00.22.22h3.3a.22.22 0 00.2-.1.22.22 0 00.02-.22v-1.94a.22.22 0 00-.02-.22zM19.16 8.37a.22.22 0 00-.2-.1H15.6a.22.22 0 00-.22.22v1.94a.22.22 0 00.22.22h3.35a.22.22 0 00.2-.1.22.22 0 00.02-.22V8.59a.22.22 0 00-.02-.22zM14.36 6.1a.22.22 0 00-.2-.1h-3.35a.22.22 0 00-.22.22v1.94a.22.22 0 00.22.22h3.35a.22.22 0 00.2-.1.22.22 0 00.02-.22V6.32a.22.22 0 00-.02-.22zM9.56 3.84A.22.22 0 009.36 3.7H6a.22.22 0 00-.22.22v1.94a.22.22 0 00.22.22h3.36a.22.22 0 00.2-.1.22.22 0 00.02-.22V4.06a.22.22 0 00-.02-.22zM19.16 11.12a.22.22 0 00-.2-.1H15.6a.22.22 0 00-.22.22v1.94a.22.22 0 00.22.22h3.35a.22.22 0 00.2-.1.22.22 0 00.02-.22v-1.94a.22.22 0 00-.02-.22zM14.36 8.85a.22.22 0 00-.2-.1h-3.35a.22.22 0 00-.22.22v1.94a.22.22 0 00.22.22h3.35a.22.22 0 00.2-.1.22.22 0 00.02-.22V9.07a.22.22 0 00-.02-.22zM9.56 6.58a.22.22 0 00-.2-.1H6a.22.22 0 00-.22.22v1.94a.22.22 0 00.22.22h3.36a.22.22 0 00.2-.1.22.22 0 00.02-.22V6.8a.22.22 0 00-.02-.22zM14.36 11.6a.22.22 0 00-.2-.1h-3.35a.22.22 0 00-.22.22v1.94a.22.22 0 00.22.22h3.35a.22.22 0 00.2-.1.22.22 0 00.02-.22v-1.94a.22.22 0 00-.02-.22zM9.56 9.33a.22.22 0 00-.2-.1H6a.22.22 0 00-.22.22V11.4a.22.22 0 00.22.22h3.36a.22.22 0 00.2-.1.22.22 0 00.02-.22V9.55a.22.22 0 00-.02-.22zM1.72 13a7.35 7.35 0 00.86 3.42c1 1.74 2.87 3.32 6.07 3.51a.22.22 0 00.22-.16c.4-.95 1.57-2.6 3.54-3.13a.22.22 0 00.16-.21v-4.14a.22.22 0 00-.22-.22H1.94a.22.22 0 00-.22.22c0 .24 0 .48.02.72z"/>
      </svg>
    ),
  },
  {
    name: 'Git',
    tooltip: 'Distributed Version Control & Workflow Management',
    icon: (
      <svg className="w-8 h-8 text-orange-600 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.3 10.56L10.56 2.3a1.98 1.98 0 012.83 0l8.3 8.3a1.98 1.98 0 010 2.83l-8.3 8.3a1.98 1.98 0 01-2.83 0L2.3 13.39a1.98 1.98 0 010-2.83zm12.33 3.86a2 2 0 00-1.84-1.22V9.56a2 2 0 001.07-.94 2 2 0 10-1.5 0c.03.35.15.68.35.94v3.63a2 2 0 00-1.07.94 2 2 0 102.5.65c.34-.34.52-.8.5-1.26z"/>
      </svg>
    ),
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 md:py-28 relative overflow-hidden bg-[rgb(var(--background))]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Row Dashboard layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: About Me */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-premium rounded-3xl p-8 flex flex-col justify-between border border-white/5 relative overflow-hidden glow-purple"
          >
            {/* Glowing spot */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl" />

            <div className="relative space-y-6">
              <div className="flex items-center gap-4">
                {/* Photo container */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/10 shrink-0 shadow-lg">
                  <img
                    src={photo}
                    alt="Harsh Dubey"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase">
                    About Me
                  </span>
                  <h3 className="text-xl font-bold text-white">Harsh Dubey</h3>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  I'm a full-stack developer who loves turning ideas into real-world products. I enjoy working with modern technologies and solving complex backend and architectural problems.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Focusing on writing scalable code, designing efficient schemas, and building real-time collaboration engines, I aim to design systems that are secure, production-ready, and optimized.
                </p>
              </div>
            </div>

            <div className="pt-6 relative">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group"
              >
                More about me
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right Panel: Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass-premium rounded-3xl p-8 border border-white/5 relative overflow-hidden glow-cyan flex flex-col justify-between"
          >
            {/* Glowing spot */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl" />

            <div className="relative space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                  My Toolkit
                </span>
                <h3 className="text-xl font-bold text-white">Tech Stack</h3>
              </div>

              {/* Grid of tools */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/20 hover:bg-slate-900/60 transition-all duration-300 group relative clickable"
                  >
                    <div className="mb-3 transform">
                      {tech.icon}
                    </div>
                    <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                      {tech.name}
                    </span>

                    {/* Tooltip Overlay */}
                    <div className="tooltip-box">
                      {tech.tooltip}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
