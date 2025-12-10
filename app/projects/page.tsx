'use client';

import Link from 'next/link';

function Projects() {
  const projects = [
    { 
      title: 'StorySphere', 
      desc: 'A comprehensive storytelling platform where users can create, share, and discover engaging stories with interactive features.', 
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/images/storysphere.png',
      demo: 'https://storysphere-bo7p.vercel.app/',
      github: 'https://github.com/isimbinadege/storysphere'
    },
    { 
      title: 'Echoes of Rwanda', 
      desc: 'An immersive cultural tourism platform showcasing Rwanda\'s rich heritage, traditions, and beautiful destinations.', 
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      image: '/images/etour.png',
      demo: 'https://e-tour.vercel.app',
      github: 'https://github.com/isimbinadege/E_Tour'
    },
    { 
      title: 'Movix', 
      desc: 'A modern movie discovery application with advanced search, ratings, and personalized recommendations.', 
      tags: ['React', 'API', 'CSS3'],
      image: '/images/movix.png',
      demo: 'https://react-movie-explorer-steel.vercel.app/',
      github: 'https://github.com/isimbinadege/react-movie-explorer'
    },
    { 
      title: 'Freelance Dashboard', 
      desc: 'A comprehensive project management dashboard for freelancers to track projects, clients, and earnings.', 
      tags: ['React', 'Dashboard', 'Charts'],
      image: '/images/freelance.png',
      demo: 'https://freelance-dashboard-peach.vercel.app',
      github: 'https://github.com/isimbinadege/freelance-dashboard'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-neutral-950 to-stone-950 relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30 mix-blend-overlay bg-noise"></div>
      
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-2xl z-50 border-b border-stone-800/20">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-serif tracking-widest text-stone-300 hover:text-amber-600 transition-all duration-500">
            JD
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
            <Link href="/projects" className="text-amber-600 hover:text-amber-500 transition-all duration-300 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-full h-px bg-amber-600 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
            </Link>
            <Link href="/contact" className="text-stone-400 hover:text-amber-600 transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 transform group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h1 className="text-7xl font-serif tracking-tight text-stone-200 mb-6">Featured Projects</h1>
            <div className="h-px w-32 bg-gradient-to-r from-amber-600 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="group bg-stone-900/40 backdrop-blur-sm border border-stone-800/30 overflow-hidden hover:border-amber-800/50 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-stone-200 mb-3">{project.title}</h3>
                  <p className="text-stone-400 font-light mb-6 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1 bg-amber-950/30 text-amber-600 text-xs font-light tracking-wider border border-amber-900/30">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-500 text-sm font-light tracking-wider transition-all duration-300 flex items-center gap-2"
                    >
                      Live Demo <span>↗</span>
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-amber-600 text-sm font-light tracking-wider transition-all duration-300 flex items-center gap-2"
                    >
                      GitHub <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-stone-800/30 py-8">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <p className="text-xs font-light text-stone-500 tracking-wider">© 2024 Your Name. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/isimbinadege" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-amber-600 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/isimbinadege" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-amber-600 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://twitter.com/isimbinadege" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-amber-600 transition-colors duration-300">
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

export default Projects;