import Link from 'next/link';

function Projects() {
  const projects = [
    { title: 'E-Commerce Platform', desc: 'Full-stack e-commerce solution with payment integration', tags: ['React', 'Node.js', 'MongoDB'] },
    { title: 'AI Dashboard', desc: 'Analytics dashboard with machine learning insights', tags: ['Next.js', 'Python', 'TensorFlow'] },
    { title: 'Social Media App', desc: 'Real-time social networking platform', tags: ['React Native', 'Firebase', 'Redux'] },
    { title: 'Task Management', desc: 'Collaborative project management tool', tags: ['Vue.js', 'Express', 'PostgreSQL'] },
  ];

  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-amber-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">JD</Link>
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <Link href="/" className="hover:text-amber-500 transition">Home</Link>
            <Link href="/about" className="hover:text-amber-500 transition">About</Link>
            <Link href="/skills" className="hover:text-amber-500 transition">Skills</Link>
            <Link href="/projects" className="text-amber-500">Projects</Link>
            <Link href="/contact" className="hover:text-amber-500 transition">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-6xl font-bold mb-4 text-white">Featured Projects</h1>
            <div className="h-1 w-24 bg-amber-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-800 hover:scale-105 transition-all duration-300">
                <div className="h-48 bg-amber-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-amber-950/30 text-amber-400 rounded-full text-sm font-medium">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="flex items-center gap-2 text-amber-500 hover:gap-3 transition-all font-semibold">
                      Live Demo <span>↗</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors font-semibold">
                      GitHub <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
