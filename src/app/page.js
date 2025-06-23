"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 px-6 py-12 font-sans">
      <section className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-indigo-800 mb-4">Nirav Munjani</h1>
          <p className="text-xl text-gray-700">Engineering Management Graduate | Process & Quality Specialist | Lean Manufacturing</p>
          <button className="mt-6 px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 transition rounded-xl shadow-lg">Download Resume</button>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b pb-2">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am a recent graduate in Engineering Management with a background in mechanical engineering,
            project leadership, and process optimization. I bring hands-on experience in Lean Six Sigma,
            quality control, and supply chain enhancement through internships and full-time roles.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b pb-2">Projects & Experience</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl shadow-md border border-indigo-200 p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">QuickDoc App</h3>
              <p className="text-gray-700">
                Developed an AI-powered healthcare app providing real-time data on hospital and
                doctor availability. Oversaw UI/UX planning and project scope for launch.
              </p>
            </div>

            <div className="rounded-2xl shadow-md border border-indigo-200 p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">Lean Six Sigma at Arvind Composites</h3>
              <p className="text-gray-700">
                Led quality improvement and SAP inventory integration for FRP division. Achieved
                efficiency and defect reduction on pultrusion line using DMAIC.
              </p>
            </div>

            <div className="rounded-2xl shadow-md border border-indigo-200 p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">Supply Chain Intern – Mazda Limited</h3>
              <p className="text-gray-700">
                Improved lead time and managed real-time inventory dashboards using Excel and SAP.
                Implemented ABC analysis and reduced procurement bottlenecks.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b pb-2">Skills</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg list-disc pl-6 text-gray-700">
            <li>Software: SolidWorks, AutoCAD, SAP, MiniTab, MS Project</li>
            <li>Certifications: Lean Six Sigma, Quality Tools, Project Management</li>
            <li>Soft Skills: Cross-functional collaboration, Data-driven decision making</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b pb-2">Contact</h2>
          <div className="space-y-2 text-lg text-gray-700">
            <p>Email: <a href="mailto:nirav@example.com" className="text-indigo-600 hover:underline">nirav@example.com</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/niravmunjani" className="text-indigo-600 hover:underline">linkedin.com/in/niravmunjani</a></p>
            <p>GitHub: <a href="https://github.com/niravmunjani" className="text-indigo-600 hover:underline">github.com/niravmunjani</a></p>
          </div>
        </section>
      </section>
    </main>
  );
}
