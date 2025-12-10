'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import MobileNav from '../components/MobileNav';

function Home() {
  const canvasRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['Innovator', 'Creator', 'Front-End Specialist', 'Designer', 'Problem Solver'];

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bubbles = [];
    const bubbleCount = 40;

    class Bubble {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 100 + 40;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.15 + 0.05;
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const colors = [
          'rgba(139, 116, 95, ',   // Warm brown
          'rgba(180, 142, 100, ',  // Golden brown
          'rgba(80, 80, 80, ',     // Dark gray
          'rgba(120, 100, 80, ',   // Muted brown
          'rgba(100, 85, 70, ',    // Deep brown
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.speedX *= -1;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.speedY *= -1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          this.x - this.radius / 3,
          this.y - this.radius / 3,
          0,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, this.color + (this.opacity + 0.1) + ')');
        gradient.addColorStop(1, this.color + '0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(new Bubble());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach(bubble => {
        bubble.update();
        bubble.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Typewriter effect for rotating words
  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeWriter = () => {
      const currentWord = words[wordIndex];
      
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === currentWord.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeWriter, 2000);
          return;
        }
      } else {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          setWordIndex((prev) => (prev + 1) % words.length);
          timeoutId = setTimeout(typeWriter, 500);
          return;
        }
      }
      
      timeoutId = setTimeout(typeWriter, isDeleting ? 50 : 100);
    };

    typeWriter();
    return () => clearTimeout(timeoutId);
  }, [wordIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-neutral-950 to-stone-950 relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />
      
      {/* Elegant grain texture overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30 mix-blend-overlay bg-noise"></div>
      
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-2xl z-50 border-b border-stone-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center">
          <div className="text-2xl sm:text-3xl font-serif tracking-widest text-stone-300 hover:text-amber-600 transition-all duration-500">
            IN
          </div>
          <div className="hidden sm:flex gap-3 md:gap-6 lg:gap-12 text-xs font-light tracking-[0.2em] uppercase">
            <Link href="/" className="text-amber-600 hover:text-amber-500 transition-all duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-full h-px bg-amber-600 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
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
            <Link href="/contact" className="text-stone-400 hover:text-amber-600 transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 transform group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          <div className="sm:hidden">
            <div className="flex gap-2 text-xs uppercase tracking-wider">
              <Link href="/" className="text-amber-600 px-1 py-1 bg-amber-600/10 border border-amber-600/30">H</Link>
              <Link href="/about" className="text-stone-400 hover:text-amber-600 transition-colors duration-300 px-1 py-1">A</Link>
              <Link href="/skills" className="text-stone-400 hover:text-amber-600 transition-colors duration-300 px-1 py-1">S</Link>
              <Link href="/projects" className="text-stone-400 hover:text-amber-600 transition-colors duration-300 px-1 py-1">P</Link>
              <Link href="/contact" className="text-stone-400 hover:text-amber-600 transition-colors duration-300 px-1 py-1">C</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 pt-16 sm:pt-20 relative z-10">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6 sm:space-y-10 order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-stone-900/40 backdrop-blur-sm rounded-none text-stone-400 text-xs font-light tracking-[0.15em] uppercase mb-4 sm:mb-6 border border-stone-800/30 animate-fade-in-up">
                <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse-soft"></span>
                <span className="text-xs sm:text-sm">Welcome to my portfolio</span>
              </div>
              
              <div className="space-y-4 sm:space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-lg sm:text-xl font-light tracking-[0.3em] uppercase text-stone-500 mb-2 sm:mb-4">
                  Hi, I'm
                </h2>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif tracking-tight text-stone-200 leading-none">
                  Nadege
                </h1>
              </div>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-stone-400 leading-relaxed animate-fade-in-up space-y-2" style={{ animationDelay: '0.4s' }}>
                <div className="font-serif italic text-stone-300">
                  Software Developer <span className="text-amber-600">{displayText}</span>
                  <span className="animate-blink text-amber-600">|</span>
                </div>
              </div>
              
              <p className="text-base sm:text-lg font-light text-stone-500 leading-loose max-w-xl animate-fade-in-up tracking-wide" style={{ animationDelay: '0.6s' }}>
               Designing digital worlds where beauty meets logic.
I turn concepts into meaningful experiences, blending creativity, precision, and purpose in every interaction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <Link href="/contact" className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-transparent border border-amber-700/50 text-amber-600 rounded-none font-light tracking-[0.2em] uppercase text-xs overflow-hidden transition-all duration-700 hover:border-amber-600 hover:shadow-2xl hover:shadow-amber-900/30 text-center">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Let's Connect
                    <span className="inline-block group-hover:translate-x-2 transition-transform duration-500">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-amber-800/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </Link>
                
                <a href="/resume.pdf" download className="group px-6 sm:px-10 py-4 sm:py-5 bg-stone-900/30 backdrop-blur-sm border border-stone-800/30 text-stone-400 rounded-none font-light tracking-[0.2em] uppercase text-xs hover:border-stone-700 hover:text-stone-300 transition-all duration-700 hover:shadow-xl hover:shadow-stone-900/50 text-center">
                  <span>Download CV</span>
                </a>
              </div>
              
              <div className="flex gap-6 sm:gap-8 pt-8 sm:pt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <a href="https://github.com/isimbinadege" className="group w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-stone-800/40 hover:border-amber-700 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/20">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-stone-600 group-hover:text-amber-600 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a href="https://www.linkedin.com/in/isimbi-nadege-6479252ba/" className="group w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-stone-800/40 hover:border-amber-700 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/20">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-stone-600 group-hover:text-amber-600 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

              {/* Stats section */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16 border-t border-stone-800/30 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                <div className="space-y-2">
                  <div className="text-4xl font-serif text-amber-600">3+</div>
                  <div className="text-xs font-light tracking-[0.2em] uppercase text-stone-500">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-serif text-amber-600">40+</div>
                  <div className="text-xs font-light tracking-[0.2em] uppercase text-stone-500">Projects Done</div>
                </div>
                
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative order-1 lg:order-2 animate-fade-in-scale">
              <div className="relative group">
                {/* Elegant border frame */}
                <div className="absolute -inset-4 border border-amber-800/30 pointer-events-none"></div>
                <div className="absolute -inset-8 border border-stone-800/20 pointer-events-none"></div>
                
                {/* Subtle glow effect */}
                <div className="absolute -inset-6 bg-gradient-to-br from-amber-900/10 via-transparent to-stone-900/10 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000"></div>
                
                {/* Image container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800/50">
                  <img 
                    src="/images/moi.png" 
                    alt="Profile" 
                    className="w-full h-auto object-cover grayscale-[30%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-700/60 -translate-x-2 -translate-y-2"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-700/60 translate-x-2 -translate-y-2"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-700/60 -translate-x-2 translate-y-2"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-700/60 translate-x-2 translate-y-2"></div>

                {/* Status badge */}
                <div className="absolute -top-4 -right-4 bg-stone-950 border border-amber-700/50 px-6 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse-soft"></span>
                    <span className="text-xs font-light tracking-[0.15em] uppercase text-stone-400">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <footer className="relative z-10 border-t border-stone-800/30 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-xs font-light text-stone-500 tracking-wider text-center sm:text-left">© 2025 Isimbi Nadege. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
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
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-15px); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 1.5s ease-out forwards;
          opacity: 0;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}

export default Home;