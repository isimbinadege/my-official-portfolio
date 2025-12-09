import Link from 'next/link';

function About() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-amber-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">JD</Link>
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <Link href="/" className="hover:text-amber-500 transition">Home</Link>
            <Link href="/about" className="text-amber-500">About</Link>
            <Link href="/skills" className="hover:text-amber-500 transition">Skills</Link>
            <Link href="/projects" className="hover:text-amber-500 transition">Projects</Link>
            <Link href="/contact" className="hover:text-amber-500 transition">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-6xl font-bold mb-4 text-white">About Me</h1>
            <div className="h-1 w-24 bg-amber-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800">
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  I'm a passionate developer with expertise in building modern web applications. 
                  I love creating elegant solutions to complex problems and continuously learning new technologies.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With years of experience in software development, I specialize in creating scalable and efficient solutions 
                  that make a real impact. I'm always excited to take on new challenges and collaborate with talented teams.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-white">Quick Facts</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500">•</span>
                    <span>5+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500">•</span>
                    <span>50+ Projects Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500">•</span>
                    <span>Remote Work Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
