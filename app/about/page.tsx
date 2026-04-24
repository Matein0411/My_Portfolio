import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen text-white">
      {/* NAV */}
      <Navbar />

      {/* ABOUT CONTENT */}
      <div className="pt-24 pb-20 px-6 md:px-12 flex flex-col items-center">
        <div className="max-w-4xl mx-auto w-full mt-12 space-y-16">
          
          {/* ABOUT SECTION */}
          <section>
            <h1 className="text-4xl md:text-5xl font-black mb-10 text-center">About Me</h1>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                <div className="w-48 h-48 relative rounded-full overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] shrink-0 border-2 border-[#2a2a2a] shadow-lg">
                    <Image src="/img/mateo_animated.png" alt="Profile" fill sizes="192px" className="object-contain p-2" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 text-[#4a90d9]">Hi, I'm Mateo</h2>
                  <p className="text-[#aaa] leading-relaxed mb-4">
                    I am a Software Engineering student at Escuela Politécnica Nacional (EPN) 
                    with practical experience in data analysis, Machine Learning models development, 
                    and software architecture design.
                  </p>
                  <p className="text-[#aaa] leading-relaxed mb-4">
                    Agile problem-solver with a minimalist, high-impact approach.
                    Proven ability to thrive in intensive sprints, integrate ETL pipelines, and build versatile solutions—from cloud deployments to cross-platform apps.
                  </p>
                  {/* <div className="flex flex-wrap gap-2 mt-6">
                    <span className="bg-[#2a2a2a] text-[#ccc] text-xs font-bold px-3 py-1.5 rounded-full border border-[#333]">
                      Education: Software Engineering - EPN
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section>
            <h2 className="text-3xl font-black mb-8 text-center md:text-left flex items-center gap-3 justify-center md:justify-start">
              <span className="text-[#4a90d9]">&lt;/&gt;</span> Experience
            </h2>
            
            <div className="space-y-6">
              {/* Experience Item 1 */}
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 md:p-8 hover:border-[#3a3a3a] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#4a90d9] opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Artificial Intelligence Instructor</h3>
                    <p className="text-[#888] font-medium mt-1">Escuela Politécnica Nacional (EPN) - Vacacional_AEIS</p>
                  </div>
                  <span className="text-sm font-mono text-[#4a90d9] bg-[#4a90d9]/10 px-3 py-1 rounded-full whitespace-nowrap w-fit">
                    2025
                  </span>
                </div>
                <p className="text-[#aaa] leading-relaxed text-sm md:text-base mb-4">
                  Developed and structured the curriculum for the inter-semester Artificial Intelligence course. 
                  Guided students through the resolution of case studies and the implementation of practical mini-projects to strengthen fundamental AI concepts and programming skills.
                </p>
              </div>

              {/* Experience Item 2 */}
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 md:p-8 hover:border-[#3a3a3a] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#555] opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Software Engineering Student</h3>
                    <p className="text-[#888] font-medium mt-1">Escuela Politécnica Nacional (EPN)</p>
                  </div>
                  <span className="text-sm font-mono text-[#888] bg-[#333] px-3 py-1 rounded-full whitespace-nowrap w-fit">
                    2021 - Present
                  </span>
                </div>
                <p className="text-[#aaa] leading-relaxed text-sm md:text-base">
                  Student of the Software Engineering program. Acquiring strong foundations in algorithms,
                  data structures, agile methodologies, and software architecture.
                </p>
              </div>
            </div>
          </section>

          {/* SKILLS & TECH STACK SECTION */}
          <section>
            <h2 className="text-3xl font-black mb-8 text-center md:text-left flex items-center gap-3 justify-center md:justify-start">
              <span className="text-[#4a90d9]">&lt;/&gt;</span> Skills & Tech Stack
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tech Stack */}
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 md:p-8 hover:border-[#3a3a3a] transition-colors">
                <h3 className="text-xl font-bold text-white mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-4 pb-2">
                  {[
                    { i: 'py', title: 'Python (Machine Learning, ETL, Data Analysis)' },
                    { i: 'java', title: 'Java (Desktop & Mobile Apps)' },
                    { i: 'c', title: 'C Programming' },
                    { i: 'cpp', title: 'C++' },
                    { i: 'react', title: 'React (Web)' },
                    { i: 'nextjs', title: 'Next.js' },
                    { i: 'tailwind', title: 'Tailwind CSS' },
                    { i: 'azure', title: 'Azure DevOps' },
                    { i: 'aws', title: 'AWS Cloud' },
                    { i: 'docker', title: 'Docker' },
                    { i: 'firebase', title: 'Firebase' },
                    { i: 'github', title: 'GitHub / Version Control' },
                    { i: 'vercel', title: 'Vercel' },
                    { i: 'postgres', title: 'PostgreSQL' },
                    { i: 'fastapi', title: 'FastAPI' },
                  ].map((tech) => (
                    <div key={tech.i} className="relative group flex justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={`https://skillicons.dev/icons?i=${tech.i}`} 
                        alt={tech.title} 
                        className="w-12 h-12 md:w-14 md:h-14 hover:-translate-y-2 transition-transform duration-300 cursor-pointer" 
                      />
                      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#2a2a2a] text-[#ccc] font-bold text-xs px-3 py-1.5 rounded-md whitespace-nowrap pointer-events-none z-10 shadow-xl border border-[#444]">
                        {tech.title}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#2a2a2a] border-b border-r border-[#444] rotate-45 transform"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages & Soft Skills */}
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 md:p-8 hover:border-[#3a3a3a] transition-colors">
                <h3 className="text-xl font-bold text-white mb-6">Languages & Soft Skills</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#ccc] font-medium">Spanish</span>
                      <span className="text-[#888] text-sm">Native</span>
                    </div>
                    <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                      <div className="bg-[#4a90d9] h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#ccc] font-medium">English</span>
                      <span className="text-[#888] text-sm">Intermediate (B2)</span>
                    </div>
                    <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                      <div className="bg-[#4a90d9] h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-2">
                    <span className="bg-[#2a2a2a] text-[#ccc] text-sm px-3 py-1.5 rounded-md border border-[#333]">Teamwork</span>
                    <span className="bg-[#2a2a2a] text-[#ccc] text-sm px-3 py-1.5 rounded-md border border-[#333]">Problem Solving</span>
                    <span className="bg-[#2a2a2a] text-[#ccc] text-sm px-3 py-1.5 rounded-md border border-[#333]">Agile Methodologies</span>
                    <span className="bg-[#2a2a2a] text-[#ccc] text-sm px-3 py-1.5 rounded-md border border-[#333]">Communication</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
