'use client';

import Link from 'next/link';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const mailtoLink = `mailto:isimbi0123@gmail.com?subject=New message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-neutral-950 to-stone-950 relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30 mix-blend-overlay bg-noise"></div>
      
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-2xl z-50 border-b border-stone-800/20">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-serif tracking-widest text-stone-300 hover:text-amber-600 transition-all duration-500">
            IN
          </Link>
          <div className="flex gap-12 text-xs font-light tracking-[0.2em] uppercase">
            <Link href="/" className="text-stone-400 hover:text-amber-600 transition-all duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 transform group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-stone-400 hover:text-amber-600 transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 transform group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/skills" className="text-stone-400 hover:text-amber-600 transition-all duration-300 relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 transform group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/projects" className="text-stone-400 hover:text-amber-600 transition-all duration-300 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 transform group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-amber-600 hover:text-amber-500 transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-full h-px bg-amber-600 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center animate-fade-in-up">
            <h1 className="text-7xl font-serif tracking-tight text-stone-200 mb-6">Let's Connect</h1>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
            <p className="text-xl font-light text-stone-400 max-w-2xl mx-auto leading-relaxed">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-800/30 p-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-serif text-stone-200 mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-light mb-3 text-stone-400 tracking-wide">Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-4 bg-stone-950/50 border border-stone-800/50 text-stone-300 focus:border-amber-700/50 outline-none transition-all duration-300" 
                    placeholder="Your name" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-light mb-3 text-stone-400 tracking-wide">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 bg-stone-950/50 border border-stone-800/50 text-stone-300 focus:border-amber-700/50 outline-none transition-all duration-300" 
                    placeholder="your.email@example.com" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-light mb-3 text-stone-400 tracking-wide">Message</label>
                  <textarea 
                    rows={5} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-6 py-4 bg-stone-950/50 border border-stone-800/50 text-stone-300 focus:border-amber-700/50 outline-none transition-all duration-300 resize-none" 
                    placeholder="Your message..." 
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-10 py-5 bg-transparent border border-amber-700/50 text-amber-600 font-light tracking-[0.2em] uppercase text-xs hover:border-amber-600 transition-all duration-500 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-800/30 p-10">
                <h2 className="text-2xl font-serif text-stone-200 mb-8">Contact Info</h2>
                <div className="space-y-6">
                  <a href="mailto:isimbi0123@gmail.com" className="flex items-center gap-5 text-stone-400 hover:text-amber-600 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-amber-950/20 border border-amber-900/30 flex items-center justify-center group-hover:border-amber-700/50 transition-all duration-300">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-light text-stone-500 mb-1">Email</p>
                      <p className="font-light">isimbi0123@gmail.com</p>
                    </div>
                  </a>
                  <a href="tel:+1234567890" className="flex items-center gap-5 text-stone-400 hover:text-amber-600 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-amber-950/20 border border-amber-900/30 flex items-center justify-center group-hover:border-amber-700/50 transition-all duration-300">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-light text-stone-500 mb-1">Phone</p>
                      <p className="font-light">+250 784800280</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-800/30 p-10">
                <h2 className="text-2xl font-serif text-stone-200 mb-8">Social Links</h2>
                <div className="flex gap-4">
                  <a href="https://github.com/isimbinadege" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center border border-stone-800/40 hover:border-amber-700 transition-all duration-500">
                    <svg className="w-6 h-6 text-stone-600 hover:text-amber-600 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/isimbi-nadege-6479252ba/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center border border-stone-800/40 hover:border-amber-700 transition-all duration-500">
                    <svg className="w-6 h-6 text-stone-600 hover:text-amber-600 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-stone-800/30 py-8">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <p className="text-xs font-light text-stone-500 tracking-wider">© 2025 Isimbi Nadege. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com" className="text-stone-600 hover:text-amber-600 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com" className="text-stone-600 hover:text-amber-600 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://twitter.com" className="text-stone-600 hover:text-amber-600 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out forwards;
          opacity: 0;
        }
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}

export default Contact;
