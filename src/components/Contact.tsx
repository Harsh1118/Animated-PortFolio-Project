import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'harshdubey1118@gmail.com',
    href: 'mailto:harshdubey1118@gmail.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Raipur, Chhattisgarh, India',
    href: '#',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 7566077782',
    href: 'tel:+917566077782',
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Harsh1118',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/harshdubey1118/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  }
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mojylkqv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  return (
  <section
    ref={ref}
    id="contact"
    className="py-16 md:py-24 relative overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-indigo-500 font-medium">Get in touch</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          Let's Work Together
        </h2>
        <p className="text-[rgb(var(--muted-foreground))] mt-3 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        
        {/* LEFT: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-5">
            Contact Information
          </h3>

          <div className="space-y-4 mb-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 p-3 rounded-xl glass hover:bg-[rgb(var(--muted))] transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-[rgb(var(--muted-foreground))]">
                    {info.label}
                  </p>
                  <p className="text-sm font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social */}
          <h4 className="text-md font-medium mb-3">Follow Me</h4>
          <div className="flex gap-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))]"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <input type="hidden" name="_subject" value="New Portfolio Contact!" />

          {/* Inputs */}
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="w-full px-4 py-2.5 rounded-lg 
            bg-white/10 dark:bg-white/5 
            border border-white/20 
            text-white placeholder:text-gray-400 
            focus:ring-2 focus:ring-indigo-500 
            outline-none transition-all"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full px-4 py-2.5 rounded-lg 
            bg-white/10 dark:bg-white/5 
            border border-white/20 
            text-white placeholder:text-gray-400 
            focus:ring-2 focus:ring-indigo-500 
            outline-none transition-all"
          />

          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
            className="w-full px-4 py-2.5 rounded-lg 
            bg-white/10 dark:bg-white/5 
            border border-white/20 
            text-white placeholder:text-gray-400 
            focus:ring-2 focus:ring-indigo-500 
            outline-none transition-all"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Message"
            className="w-full px-4 py-2.5 rounded-lg 
            bg-white/10 dark:bg-white/5 
            border border-white/20 
            text-white placeholder:text-gray-400 
            focus:ring-2 focus:ring-indigo-500 
            outline-none transition-all resize-none"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-lg 
            bg-gradient-to-r from-indigo-500 to-purple-500 
            text-white font-medium 
            shadow-md hover:shadow-lg 
            transition-all disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Success */}
          {isSubmitted && (
            <div className="text-green-500 text-center text-sm">
              ✓ Message sent successfully!
            </div>
          )}
        </motion.form>
      </div>
    </div>
  </section>
);
}
