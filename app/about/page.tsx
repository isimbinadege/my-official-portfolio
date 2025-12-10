'use client';

import Link from 'next/link';
import MobileNav from '../../components/MobileNav';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-neutral-950 to-stone-950 relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30 mix-blend-overlay bg-noise"></div>
      
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-2xl z-50 border-b border-stone-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl sm:text-3xl font-serif tracking-widest text-stone-300 hover:text-amber-600 transition-all duration-500">
            IN
          </Link>
          <div className="hidden sm:flex gap-3 md:gap-6 lg:gap-12 text-xs font-light tracking-[0.2em] uppercase">
            <Link href="/" className="text-stone-400 hover:text-amber-600 transition-all duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 transform group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-amber-600 hover:text-amber-500 transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-full h-px bg-amber-600 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
            </Link>
            <Link href="/skills" className="text-stone-400 hover:text-amber-600 transition-all duration-300 relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 transform group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/projects" className="text-stone-400 hover:text-amber-600 transition-all duration-300 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 transform group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-stone-400 hover:text-amber-600 transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 transform group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          <div className="sm:hidden">
            <div className="flex gap-2 text-xs uppercase tracking-wider mb-2">
              <Link href="/" className="text-stone-400 hover:text-amber-600 transition-colors duration-300">H</Link>
              <Link href="/about" className="text-amber-600">A</Link>
              <Link href="/skills" className="text-stone-400 hover:text-amber-600 transition-colors duration-300">S</Link>
              <Link href="/projects" className="text-stone-400 hover:text-amber-600 transition-colors duration-300">P</Link>
              <Link href="/contact" className="text-stone-400 hover:text-amber-600 transition-colors duration-300">C</Link>
            </div>
          </div>

        </div>
      </nav>

      <section className="pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-20 px-4 sm:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 sm:mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif tracking-tight text-stone-200 mb-4 sm:mb-6">About Me</h1>
            <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-amber-600 to-transparent"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="md:col-span-2 space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-800/30 p-10">
                <p className="text-lg font-light text-stone-400 leading-loose mb-6">
                  I’m a passionate developer who builds modern, user-focused web applications. I enjoy transforming complex challenges into elegant, intuitive solutions and continuously expanding my knowledge with new technologies.
                </p>
                <p className="text-lg font-light text-stone-400 leading-loose">
                 With hands-on experience across the software development lifecycle, I specialize in creating scalable and efficient systems that deliver real value. I’m highly adaptable, quick to learn, and thrive in collaborative environments where creativity, communication, and problem-solving come together. I bring curiosity, resilience, and a strong drive to grow with every project I take on.
                </p>
              </div>
              
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-serif text-stone-200 mb-8 sm:mb-12 tracking-wide text-center">Professional Journey</h3>
                <div className="relative">
                  <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-amber-600/50 via-amber-600/30 to-transparent"></div>
                  
                  <div className="space-y-8 sm:space-y-16">
                    <div className="relative sm:flex sm:items-center">
                      <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rotate-45 z-10"></div>
                      <div className="w-full bg-gradient-to-r from-transparent via-stone-800/20 to-amber-950/20 p-4 sm:p-8 sm:ml-8 border-l-4 border-amber-600/50 backdrop-blur-sm">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                          <h4 className="text-lg sm:text-xl font-serif text-amber-400">Software Developer</h4>
                          <div className="px-3 py-1 bg-amber-600/20 text-amber-300 text-xs tracking-wider border border-amber-600/30 self-start">Sep.2025 - Present</div>
                        </div>
                        <p className="text-stone-300 text-sm mb-3 sm:mb-4 italic">IGIRE Rwanda</p>
                        <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed">
                        I develop responsive full-stack web features that combine intuitive, user-focused interfaces with reliable backend functionality. I work collaboratively with peers across testing, optimization, and deployment workflows to deliver stable, high-quality releases. I also follow secure coding standards and continuously strengthen my database management and API integration skills to build scalable and efficient digital solutions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative sm:flex sm:items-center">
                      <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600/70 rotate-45 z-10"></div>
                      <div className="w-full bg-gradient-to-l from-transparent via-stone-800/20 to-amber-950/20 p-4 sm:p-8 sm:mr-8 border-r-4 sm:border-r-4 sm:border-l-0 border-l-4 border-amber-600/50 backdrop-blur-sm">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                          <h4 className="text-lg sm:text-xl font-serif text-amber-400">Software Developer</h4>
                          <div className="px-3 py-1 bg-amber-600/20 text-amber-300 text-xs tracking-wider border border-amber-600/30 self-start">Feb-August 2025</div>
                        </div>
                        <p className="text-stone-300 text-sm mb-3 sm:mb-4 italic">Comprehensive Staffing Resources</p>
                        <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed">
                          I completed an intensive training program that enhanced both my technical abilities and soft skills, including communication, leadership, and teamwork. During my internship, I developed front-end interfaces and supported backend development while contributing to real, production-level projects. Through these experiences, I strengthened my problem-solving skills and collaborated effectively with cross-functional teams to deliver solutions efficiently and on time.
                        </p>
                      </div>
                    </div>
                     <div className="relative sm:flex sm:items-center">
                      <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rotate-45 z-10"></div>
                      <div className="w-full bg-gradient-to-r from-transparent via-stone-800/20 to-amber-950/20 p-4 sm:p-8 sm:ml-8 border-l-4 border-amber-600/50 backdrop-blur-sm">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                          <h4 className="text-lg sm:text-xl font-serif text-amber-400">Software Developer</h4>
                          <div className="px-3 py-1 bg-amber-600/20 text-amber-300 text-xs tracking-wider border border-amber-600/30 self-start">2024</div>
                        </div>
                        <p className="text-stone-300 text-sm mb-3 sm:mb-4 italic">IDA Technology</p>
                        <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed">
                     I received structured, hands-on training in full-stack development through a program supported by the Ministry of Education. During this experience, I contributed to building and improving internal software systems while applying clean code principles and proper version control practices. I also tested new features, resolved issues, and refined solutions based on user and team feedback, strengthening my technical skills and attention to detail.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-800/30 p-8">
                <h3 className="text-xl font-serif text-stone-200 mb-6 tracking-wide">Quick Facts</h3>
                <div className="space-y-4 text-stone-400 font-light">
                  <div className="flex items-center gap-3">
                    <span className="text-amber-600">•</span>
                    <span>3+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber-600">•</span>
                    <span>40+ Projects Completed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber-600">•</span>
                    <span>Remote,Hybrid and on site Work Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-stone-800/30 py-8">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <p className="text-xs font-light text-stone-500 tracking-wider">© Isimbi Nadege. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/isimbinadege" className="text-stone-600 hover:text-amber-600 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/isimbi-nadege-6479252ba/" className="text-stone-600 hover:text-amber-600 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
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

export default About;
