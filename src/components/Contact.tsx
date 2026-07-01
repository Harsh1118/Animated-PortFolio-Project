import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'harshdubey1118@gmail.com',
    href: 'mailto:harshdubey1118@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Raipur, India',
    href: '#',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 7566077782',
    href: 'tel:+917566077782',
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiLogs, setApiLogs] = useState<string[]>([]);
  const [showConsole, setShowConsole] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowConsole(true);
    setApiLogs([]);

    const timestamp = () => `[${new Date().toLocaleTimeString()}]`;

    setApiLogs([`${timestamp()} POST /api/v1/contact - Handshake initialized...`]);

    try {
      await new Promise(resolve => setTimeout(resolve, 600));
      setApiLogs(prev => [...prev, `${timestamp()} Packaging contact payload...`]);
      await new Promise(resolve => setTimeout(resolve, 500));
      setApiLogs(prev => [...prev, `${timestamp()} Secure tunnel established. Sending bytes...`]);

      const response = await fetch('https://formspree.io/f/mojylkqv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      await new Promise(resolve => setTimeout(resolve, 600));

      if (response.ok) {
        setApiLogs(prev => [
          ...prev,
          `${timestamp()} Response status: 200 OK`,
          `${timestamp()} Connection closed. Success!`,
        ]);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setApiLogs(prev => [
          ...prev,
          `${timestamp()} Response status: ${response.status} failed`,
          `${timestamp()} Request terminated with errors.`,
        ]);
      }
    } catch (error) {
      setApiLogs(prev => [
        ...prev,
        `${timestamp()} Network error: Host connection refused.`,
      ]);
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden bg-[rgb(var(--background))]"
    >
      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Row Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-premium rounded-3xl p-8 md:p-12 border border-white/5 glow-mixed"
        >
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Branding & Info */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="space-y-3">
                <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase">
                  Let's Work Together
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Have a project in mind?
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                  I'm always open to discussing new opportunities, full-stack systems building, database designs, or real-time feature integrations.
                </p>
              </div>

              {/* Info grid */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-3 rounded-2xl glass hover:bg-white/5 border border-white/5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-white/5 group-hover:border-purple-500/20 group-hover:bg-purple-950/20 transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Planet Graphic Block */}
              <div className="relative pt-6 flex justify-center lg:justify-start items-center w-full h-44">
                {/* Muted Transitioning Planet Sphere */}
                <div className="relative w-32 h-32 rounded-full shadow-inner flex items-center justify-center overflow-hidden border border-white/10 shadow-purple-950/20 animate-planet-color z-10">
                  {/* Internal planet shading */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_subject" value="New Portfolio Contact!" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label htmlFor="name" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Name</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/5 text-white placeholder:text-slate-600 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-sm font-medium"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label htmlFor="email" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/5 text-white placeholder:text-slate-600 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <label htmlFor="subject" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project discussion"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/5 text-white placeholder:text-slate-600 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-sm font-medium"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label htmlFor="message" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/5 text-white placeholder:text-slate-600 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-sm font-medium resize-none"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm transition-all shadow-md cursor-pointer disabled:opacity-75 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    'Get in Touch'
                  )}
                </motion.button>

                {/* API Console Log terminal for submission feedback */}
                {showConsole && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 p-4 rounded-xl bg-slate-950/90 border border-white/5 font-mono text-[10px] md:text-xs text-left leading-relaxed shadow-inner overflow-hidden select-text"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-2.5">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">API Console Logs</span>
                      <button
                        type="button"
                        onClick={() => setShowConsole(false)}
                        className="text-slate-500 hover:text-white transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="space-y-1 text-slate-400">
                      {apiLogs.map((log, idx) => (
                        <div
                          key={idx}
                          className={
                            log.includes('200 OK') || log.includes('Success!')
                              ? 'text-emerald-400 font-semibold'
                              : log.includes('error') || log.includes('refused')
                              ? 'text-red-400 font-semibold'
                              : ''
                          }
                        >
                          {log}
                        </div>
                      ))}
                      {isSubmitting && (
                        <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                          <span>Transmission active</span>
                          <span className="inline-block w-1.5 h-3.5 bg-cyan-400 animate-pulse" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </form>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
