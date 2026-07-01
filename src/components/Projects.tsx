import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Krumos PM',
    subtitle: 'Multi-Tenant Project Management Platform',
    description: 'Production-grade project management platform with workspace isolation, authentication, authorization, and real-time collaboration.',
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'Socket.io', 'Redis'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/Harsh1118/Krumos_PM_Client',
    liveUrl: '#',
    mockupType: 'kanban',
  },
  {
    id: 2,
    title: 'Production Ready Todo API',
    subtitle: 'RESTful Backend System',
    description: 'Clean architecture API built with comprehensive DTO validation, secure authentication, and robust error handling.',
    tags: ['NestJS', 'PostgreSQL', 'TypeORM', 'JWT'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/Harsh1118/Task-Management-API',
    liveUrl: '#',
    mockupType: 'terminal',
  },
  {
    id: 3,
    title: 'IronLog',
    subtitle: 'Fitness Tracking Application',
    description: 'Track daily workouts, log weight exercises, and calculate body mass index (BMI) with high-performance UI components.',
    tags: ['React', 'TypeScript', 'CSS3'],
    category: 'Frontend',
    githubUrl: 'https://github.com/Harsh1118/Iron_log_gym_tracker',
    liveUrl: '#',
    mockupType: 'fitness',
  },
  {
    id: 4,
    title: 'Employee Management System',
    subtitle: 'Management Dashboard Interface',
    description: 'Admin interface featuring REST API integration, state management, search/filter functionality, and role assignments.',
    tags: ['React', 'TypeScript', 'REST API'],
    category: 'Frontend',
    githubUrl: 'https://github.com/Harsh1118/Employment_management_system',
    liveUrl: '#',
    mockupType: 'dashboard',
  },
  {
    id: 5,
    title: 'Bike Price Prediction',
    subtitle: 'Machine Learning Model',
    description: 'Regression model designed in Python to predict secondary market bike valuations based on mechanical parameters and wear-and-tear history.',
    tags: ['Python', 'Machine Learning', 'Streamlit'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Harsh1118/Bike-Price-Prediction-Model',
    liveUrl: '#',
    mockupType: 'ml',
  },
  {
    id: 6,
    title: 'Bhagwad Geeta Chatbot',
    subtitle: 'AI Spiritual Assistant',
    description: 'A spiritual AI chatbot inspired by the Bhagavad Gita, providing meaningful guidance, real-time responses, and insightful answers to life’s questions.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Google Documentation'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Harsh1118/Bhagwad-Geeta-Chat-Bot',
    liveUrl: '#',
    mockupType: 'chatbot',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML'];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const renderMockup = (type: string) => {
    switch (type) {
      case 'chatbot':
        return (
          <div className="w-full h-full bg-slate-950 p-3.5 flex flex-col justify-between text-[9px] font-sans select-none border-b border-white/5">
            <div className="flex justify-between items-center border-b border-white/5 pb-1.5 mb-2">
              <span className="text-[10px] font-bold text-slate-400">Gita Chatbot</span>
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            </div>
            <div className="space-y-2 flex-1 overflow-y-auto flex flex-col justify-end">
              <div className="flex flex-col items-end">
                <span className="bg-purple-600/20 text-purple-300 px-2.5 py-1 rounded-xl rounded-tr-none text-[8px] max-w-[80%] border border-purple-500/10">
                  How do I find peace?
                </span>
              </div>
              <div className="flex flex-col items-start mt-1">
                <span className="bg-slate-900 text-slate-300 px-2.5 py-1.5 rounded-xl rounded-tl-none text-[8px] max-w-[85%] border border-white/5 leading-relaxed">
                  "Perform your prescribed duty without attachment..."
                </span>
              </div>
            </div>
          </div>
        );
      case 'kanban':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-slate-950/90 font-sans select-none">
            <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
              <span className="text-[10px] font-bold text-slate-400">Workspace: Krumos</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="flex gap-2 flex-1 text-[9px]">
              <div className="flex-1 bg-slate-900/60 rounded p-1.5 border border-white/5 flex flex-col gap-1">
                <div className="font-bold text-slate-500 text-[8px] uppercase tracking-wider">Backlog</div>
                <div className="bg-slate-800/80 rounded p-1 text-slate-300 border border-white/5 shadow-sm">Workspace Iso</div>
              </div>
              <div className="flex-1 bg-slate-900/60 rounded p-1.5 border border-white/5 flex flex-col gap-1">
                <div className="font-bold text-purple-400 text-[8px] uppercase tracking-wider">In Progress</div>
                <div className="bg-purple-950/40 rounded p-1 text-purple-300 border border-purple-500/20 shadow-sm">Real-time sync</div>
              </div>
              <div className="flex-1 bg-slate-900/60 rounded p-1.5 border border-white/5 flex flex-col gap-1">
                <div className="font-bold text-cyan-400 text-[8px] uppercase tracking-wider">Done</div>
                <div className="bg-slate-800/40 rounded p-1 text-slate-500 line-through border border-white/5">RBAC Authorization</div>
              </div>
            </div>
          </div>
        );
      case 'terminal':
        return (
          <div className="w-full h-full bg-slate-950 p-4 font-mono text-[9px] text-left text-slate-300 leading-normal border-b border-white/5 flex flex-col justify-between select-none">
            <div>
              <span className="text-slate-500">{"$ curl -X POST /api/v1/auth/login"}</span>
              <div className="text-emerald-400 mt-1">{"HTTP/1.1 200 OK"}</div>
              <div className="text-purple-400 mt-1">{"{"}</div>
              <div className="pl-3"><span className="text-cyan-400">"status"</span>: <span className="text-green-300">"success"</span>,</div>
              <div className="pl-3"><span className="text-cyan-400">"token"</span>: <span className="text-amber-300">"eyJhbGciOiJIUzI1NiIsIn..."</span></div>
              <div className="text-purple-400">{"}"}</div>
            </div>
            <div className="text-[8px] text-slate-600 self-end">{"Response Time: 42ms"}</div>
          </div>
        );
      case 'fitness':
        return (
          <div className="w-full h-full flex items-center justify-around p-4 bg-slate-950/80 select-none">
            <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
              <div className="absolute inset-0 rounded-full border-4 border-white/5" />
              <div className="absolute inset-0 rounded-full border-4 border-purple-500 border-t-transparent animate-spin" style={{ animationDuration: '6s' }} />
              <div className="text-center z-10">
                <span className="text-[10px] font-bold text-white">82%</span>
                <p className="text-[7px] text-slate-500 font-semibold uppercase">Daily</p>
              </div>
            </div>
            <div className="text-left text-[9px] space-y-2">
              <div className="glass px-3 py-1 rounded-lg border border-white/5 flex justify-between gap-4">
                <span className="text-slate-400">BMI:</span>
                <span className="text-emerald-400 font-bold">22.4</span>
              </div>
              <div className="glass px-3 py-1 rounded-lg border border-white/5 flex justify-between gap-4">
                <span className="text-slate-400">Log:</span>
                <span className="text-purple-400 font-bold">75 kg Lift</span>
              </div>
            </div>
          </div>
        );
      case 'dashboard':
        return (
          <div className="w-full h-full bg-slate-950/90 p-4 flex flex-col justify-between text-[9px] select-none">
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="font-bold text-slate-300">Search: "Harsh"</span>
              <span className="px-1.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[8px] font-medium border border-cyan-500/10">1 Result Found</span>
            </div>
            <div className="space-y-1.5 flex-1 pt-3">
              <div className="flex justify-between items-center px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/5 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center text-[7px] text-purple-400 font-bold">H</div>
                  <span className="font-medium text-white">Harsh Dubey</span>
                </div>
                <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-400 rounded-lg text-[8px] border border-purple-500/10">Software Intern</span>
              </div>
            </div>
          </div>
        );
      case 'ml':
        return (
          <div className="w-full h-full bg-slate-950 p-4 text-left font-mono text-[9px] text-slate-400 border-b border-white/5 flex flex-col justify-between select-none">
            <div className="text-slate-600">{"# Streamlit ML Predictor"}</div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>{"Age: 2 years"}</span>
                <span className="text-cyan-400">{"w = -0.15"}</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-cyan-500 h-full w-[35%]" />
              </div>
            </div>
            <div className="text-emerald-400 font-bold pt-2 border-t border-white/5 flex justify-between items-center">
              <span>{"Predicted Value:"}</span>
              <span className="text-[10px] text-emerald-300">{"$1,420.00"}</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="py-20 md:py-28 relative overflow-hidden bg-[rgb(var(--background))]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Things I've Built
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
            A selective list of full-stack services, system designs, and data applications built with industry-standard patterns.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 border-white/10 text-white shadow-lg shadow-purple-950/20'
                  : 'glass text-slate-400 hover:text-white border-white/5 hover:bg-white/5'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative rounded-2xl overflow-hidden glass-premium border border-white/5 flex flex-col justify-between h-[390px] glow-purple transition-all duration-300"
            >
              {/* Graphic Mockup Container */}
              <div className="relative aspect-video w-full border-b border-white/5 overflow-hidden">
                {renderMockup(project.mockupType)}
                
                {/* Overlay Links on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-slate-950/70 flex items-center justify-center gap-4 backdrop-blur-sm"
                >
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-md"
                    aria-label="GitHub Repository"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                  
                  {project.liveUrl !== '#' && (
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-md"
                      aria-label="Live Demo"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  )}
                </motion.div>
              </div>

              {/* Project Metadata */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-semibold border border-purple-500/10">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-[9px] font-mono text-slate-500 group-hover:text-slate-400 group-hover:border-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Harsh1118"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl glass border border-white/5 hover:border-white/10 text-slate-300 hover:text-white font-semibold text-xs transition-all shadow-md"
          >
            View All On GitHub
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
