import Link from 'next/link';

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 92 },
    { name: 'Next.js', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'AWS', level: 75 },
    { name: 'Docker', level: 82 },
  ];

  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-amber-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">JD</Link>
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <Link href="/" className="hover:text-amber-500 transition">Home</Link>
            <Link href="/about" className="hover:text-amber-500 transition">About</Link>
            <Link href="/skills" className="text-amber-500">Skills</Link>
            <Link href="/projects" className="hover:text-amber-500 transition">Projects</Link>
            <Link href="/contact" className="hover:text-amber-500 transition">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-6xl font-bold mb-4 text-white">Skills & Expertise</h1>
            <div className="h-1 w-24 bg-amber-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-800 hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                  <span className="text-sm font-semibold text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
