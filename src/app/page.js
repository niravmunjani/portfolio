"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 px-6 py-12 font-sans transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <section className="max-w-6xl mx-auto">
        <header className={`text-center mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
            Nirav Munjani
          </h1>
          <p className="text-xl text-gray-300 mb-6">Engineering Management Graduate | Process & Quality Specialist | Lean Manufacturing</p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 rounded-xl shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transform">
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </header>

        <section className={`mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-cyan-500/30 pb-2 flex items-center">
            <span className="mr-3">👨‍💼</span>
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I am a recent graduate in Engineering Management with a background in mechanical engineering,
            project leadership, and process optimization. I bring hands-on experience in Lean Six Sigma,
            quality control, and supply chain enhancement through internships and full-time roles.
          </p>
        </section>

        <section className={`mb-16 transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-cyan-500/30 pb-2 flex items-center">
            <span className="mr-3">🚀</span>
            Projects & Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group rounded-2xl shadow-lg border border-cyan-500/20 p-6 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25 hover:border-cyan-500/40 transform">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-xl font-semibold text-cyan-400">QuickDoc App</h3>
              </div>
              <p className="text-gray-300">
                Developed an AI-powered healthcare app providing real-time data on hospital and
                doctor availability. Oversaw UI/UX planning and project scope for launch.
              </p>
            </div>

            <div className="group rounded-2xl shadow-lg border border-cyan-500/20 p-6 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25 hover:border-cyan-500/40 transform">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-xl font-semibold text-blue-400">Lean Six Sigma at Arvind Composites</h3>
              </div>
              <p className="text-gray-300">
                Led quality improvement and SAP inventory integration for FRP division. Achieved
                efficiency and defect reduction on pultrusion line using DMAIC.
              </p>
            </div>

            <div className="group rounded-2xl shadow-lg border border-cyan-500/20 p-6 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25 hover:border-cyan-500/40 transform">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-xl font-semibold text-purple-400">Supply Chain Intern – Mazda Limited</h3>
              </div>
              <p className="text-gray-300">
                Improved lead time and managed real-time inventory dashboards using Excel and SAP.
                Implemented ABC analysis and reduced procurement bottlenecks.
              </p>
            </div>
          </div>
        </section>

        <section className={`mb-16 transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-cyan-500/30 pb-2 flex items-center">
            <span className="mr-3">⚡</span>
            Skills
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg list-none text-gray-300">
            <li className="flex items-center p-3 rounded-lg bg-gray-800/30 border border-cyan-500/20 hover:bg-gray-800/50 transition-all duration-300 hover:border-cyan-500/40">
              <span className="mr-3 text-cyan-400">💻</span>
              Software: SolidWorks, AutoCAD, SAP, MiniTab, MS Project
            </li>
            <li className="flex items-center p-3 rounded-lg bg-gray-800/30 border border-cyan-500/20 hover:bg-gray-800/50 transition-all duration-300 hover:border-cyan-500/40">
              <span className="mr-3 text-blue-400">🏆</span>
              Certifications: Lean Six Sigma, Quality Tools, Project Management
            </li>
            <li className="flex items-center p-3 rounded-lg bg-gray-800/30 border border-cyan-500/20 hover:bg-gray-800/50 transition-all duration-300 hover:border-cyan-500/40">
              <span className="mr-3 text-purple-400">🤝</span>
              Soft Skills: Cross-functional collaboration, Data-driven decision making
            </li>
          </ul>
        </section>

        <section className={`mb-10 transition-all duration-1000 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-cyan-500/30 pb-2 flex items-center">
            <span className="mr-3">📧</span>
            Contact
          </h2>
          <div className="space-y-4 text-lg text-gray-300">
            <a href="mailto:nirav@example.com" className="flex items-center p-3 rounded-lg bg-gray-800/30 border border-cyan-500/20 hover:bg-gray-800/50 transition-all duration-300 hover:border-cyan-500/40 hover:scale-105 transform group">
              <span className="mr-3 text-cyan-400">📧</span>
              <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">nirav@example.com</span>
            </a>
            <a href="https://linkedin.com/in/niravmunjani" className="flex items-center p-3 rounded-lg bg-gray-800/30 border border-cyan-500/20 hover:bg-gray-800/50 transition-all duration-300 hover:border-cyan-500/40 hover:scale-105 transform group">
              <span className="mr-3 text-blue-400">💼</span>
              <span className="text-blue-400 group-hover:text-blue-300 transition-colors">linkedin.com/in/niravmunjani</span>
            </a>
            <a href="https://github.com/niravmunjani" className="flex items-center p-3 rounded-lg bg-gray-800/30 border border-cyan-500/20 hover:bg-gray-800/50 transition-all duration-300 hover:border-cyan-500/40 hover:scale-105 transform group">
              <span className="mr-3 text-purple-400">🐙</span>
              <span className="text-purple-400 group-hover:text-purple-300 transition-colors">github.com/niravmunjani</span>
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
