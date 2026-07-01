import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const experiences = [
  {
    company: 'Krumos Tech LLP',
    role: 'Software Engineer Intern',
    period: 'March 2026 - Present',
    description: 'Designed and built full-stack backend systems and multi-tenant real-time capabilities for enterprise SaaS products.',
    highlights: [
      'Built a multi-tenant, real-time project management application with workspace isolation.',
      'Developed modular backend microservices using NestJS, TypeScript, and clean architecture principles.',
      'Implemented secure authentication flow utilizing JWT and Google OAuth integration.',
      'Designed granular authorization policies using Role-Based Access Control (RBAC).',
      'Modeled optimized relational PostgreSQL databases using TypeORM schemas and migrations.',
      'Developed real-time syncing and online indicators using Socket.io and Redis caching.',
      'Containerized development and production services utilizing Docker configurations.',
    ],
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'Socket.io', 'Redis', 'Docker'],
  }
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      ref={ref}
      id="experience"
      className="py-20 md:py-28 relative overflow-hidden bg-[rgb(var(--background))]"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase">
            Professional Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Where I've Worked
          </h2>
        </motion.div>

        {/* Timeline List */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.6)] group-hover:scale-110 transition-transform duration-300 z-10" />

              <div className="glass-premium rounded-2xl p-6 sm:p-8 border border-white/5 glow-purple">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-slate-300 font-semibold text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-400 font-medium sm:self-start">
                    {exp.period}
                  </span>
                </div>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-3 mb-4 text-sm text-slate-300">
                  {exp.highlights.slice(0, 3).map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <svg
                        className="w-4 h-4 text-purple-400 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}

                  {isExpanded && exp.highlights.slice(3).map((highlight, hIdx) => (
                    <motion.li
                      key={hIdx + 3}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start gap-2.5 overflow-hidden"
                    >
                      <svg
                        className="w-4 h-4 text-purple-400 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="leading-relaxed">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Toggle Button */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mb-6 flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors clickable focus:outline-none"
                >
                  <span>{isExpanded ? 'Collapse Details' : 'Expand Details'}</span>
                  <svg
                    className={`w-3.5 h-3.5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-slate-900/50 border border-white/5 text-xs font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
