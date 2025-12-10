'use client';

import Link from 'next/link';
import MobileNav from '../../components/MobileNav';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', level: 85, icon: '⚡' },
        { name: 'TypeScript', level: 82, icon: '🔷' },
        { name: 'React', level: 92, icon: '⚛️' },
        { name: 'Next.js', level: 95, icon: '▲' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Supabase', level: 85, icon: '🟩⚡' },
        { name: 'PostgreSQL', level: 80, icon: '🐘💾' },
        { name: 'Firebase', level: 90, icon: '🔥📦' },
        { name: 'MySQL', level: 85, icon: '🐬💾' }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'GitHub', level: 95, icon: '🐙' },
        { name: 'Postman', level: 90, icon: '📮' },
         { name: 'Jira', level: 90, icon: '🗂️' },
        { name: 'Docker', level: 82, icon: '🐳' },
        { name: 'Git', level: 80, icon: '📝' },
        { name: 'Figma', level: 90, icon: '🎨' }
      ]
    }
  ];

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
            <Link href="/about" className="text-stone-400 hover:text-amber-600 transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 transform group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/skills" className="text-amber-600 hover:text-amber-500 transition-all duration-300 relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-full h-px bg-amber-600 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
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
            <div className="flex gap-2 text-xs uppercase tracking-wider">
              <Link href="/" className="text-stone-400 hover:text-amber-600 transition-colors duration-300 px-1 py-1">H</Link>
              <Link href="/about" className="text-stone-400 hover:text-amber-600 transition-colors duration-300 px-1 py-1">A</Link>
              <Link href="/skills" className="text-amber-600 px-1 py-1 bg-amber-600/10 border border-amber-600/30">S</Link>
              <Link href="/projects" className="text-stone-400 hover:text-amber-600 transition-colors duration-300 px-1 py-1">P</Link>
              <Link href="/contact" className="text-stone-400 hover:text-amber-600 transition-colors duration-300 px-1 py-1">C</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-20 px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-20 text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif tracking-tight text-stone-200 mb-4 sm:mb-6">Skills & Expertise</h1>
            <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl font-light text-stone-400 max-w-2xl mx-auto leading-relaxed px-4">
              Crafting digital experiences with cutting-edge technologies and creative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-800/30 p-6 sm:p-8 h-full hover:border-amber-800/50 transition-all duration-500">
                  <h3 className="text-xl sm:text-2xl font-serif text-amber-600 mb-6 sm:mb-8 text-center tracking-wide">{category.title}</h3>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <h4 className="text-lg font-light text-stone-200">{skill.name}</h4>
                          </div>
                          <span className="text-sm font-light text-amber-600">{skill.level}%</span>
                        </div>
                        
                        <div className="relative">
                          <div className="h-2 bg-stone-800/50 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-amber-600 to-amber-500 transition-all duration-1000 ease-out"
                              style={{ 
                                width: `${skill.level}%`,
                                animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                              }}
                            ></div>
                          </div>
                          
                          {/* Animated dots */}
                          <div className="absolute top-0 left-0 w-full h-2 flex items-center justify-between px-1">
                            {[...Array(10)].map((_, i) => (
                              <div 
                                key={i}
                                className={`w-1 h-1 rounded-full transition-all duration-300 ${
                                  i < (skill.level / 10) ? 'bg-amber-400 shadow-amber-400/50 shadow-sm' : 'bg-stone-700'
                                }`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Category decoration */}
                  <div className="mt-8 pt-6 border-t border-stone-800/30">
                    <div className="flex justify-center">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience summary */}
          <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="bg-stone-900/40 backdrop-blur-sm border border-stone-800/30 p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-serif text-stone-200 mb-6">Professional Journey</h3>
              <p className="text-lg font-light text-stone-400 leading-relaxed mb-8">
             My journey as a software developer has been fueled by curiosity and problem-solving. I started by exploring coding fundamentals, gradually building my skills in designing efficient, scalable solutions. Every project—whether writing clean code, debugging complex problems, or learning new technologies—has sharpened my expertise and passion. Today, I focus on creating impactful software while staying adaptable, eager to learn, and excited to collaborate with teams to bring ideas to life. 
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-serif text-amber-600 mb-2">40+</div>
                  <div className="text-sm font-light text-stone-500 tracking-wider uppercase">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif text-amber-600 mb-2">3+</div>
                  <div className="text-sm font-light text-stone-500 tracking-wider uppercase">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif text-amber-600 mb-2">15+</div>
                  <div className="text-sm font-light text-stone-500 tracking-wider uppercase">Technologies</div>
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

export default Skills;