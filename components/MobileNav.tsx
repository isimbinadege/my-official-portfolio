'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MobileNavProps {
  currentPage: string;
}

export default function MobileNav({ currentPage }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1 z-[110] relative p-2 -m-2"
      >
        <div className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5 bg-amber-500' : 'bg-stone-300'}`}></div>
        <div className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? 'opacity-0 bg-amber-500' : 'bg-stone-300'}`}></div>
        <div className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5 bg-amber-500' : 'bg-stone-300'}`}></div>
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/98 backdrop-blur-2xl z-[100] md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="flex flex-col items-center justify-center h-full space-y-12 px-8"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className={`text-3xl sm:text-4xl font-light tracking-[0.3em] uppercase transition-all duration-500 hover:scale-110 ${
                  currentPage === item.href 
                    ? 'text-amber-500 border-b-2 border-amber-500 pb-2' 
                    : 'text-stone-200 hover:text-amber-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="absolute bottom-8 text-center">
              <p className="text-stone-500 text-sm tracking-wider">Tap anywhere to close</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}