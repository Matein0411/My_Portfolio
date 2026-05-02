import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Projects() {

  const projects = [
    {
      title: 'Merchant Churn Predictor',
      description: 'Developed a Machine Learning model to predict merchant attrition for the "De Una" fintech platform. Created for the Interack2hack (USFQ Hackathon).',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/FernandoHuilca/Interact2hack_DeUna_Reto',
      image: '/img/DeUna.png'
    },
    {
      title: 'Byte_Click',
      description: 'Comprehensive and scalable E-Commerce platform with real-time search, secure payment processing, user authentication, and admin panel.',
      tech: ['Next.js 14', 'Tailwind', 'Firebase', 'Algolia', 'Stripe'],
      demoLink: 'https://byte-click-ecommerce.vercel.app',
      github: 'https://github.com/Matein0411/Byte_Click',
      image: '/img/byte_click.png'
    },
    {
      title: 'TennAI',
      description: 'AI-powered predictive platform for the ATP tennis circuit. Analyzes historical data to generate forecasts, integrating subscriptions and a Telegram bot.',
      tech: ['React 18', 'TypeScript', 'FastAPI', 'XGBoost', 'PostgreSQL', 'Firebase'],
      github: 'https://github.com/Matein0411/TennAI',
      image: '/img/TennAI.jpg'
    },
    {
      title: 'BAD_ICE_CREAM',
      description: 'Recreation of the classic PC arcade video game. Implements collision mechanics, map generation, save game system, and control customization.',
      tech: ['Java (Swing)'],
      github: 'https://github.com/Matein0411/BAD_ICE_CREAM',
      image: '/img/badCream.gif'
    },
    {
      title: 'DarkBit Interactive',
      description: 'Immersive 3D interactive horror experience. Developed from scratch with real-time rendering, dynamic lighting, custom shaders, and spatial sound.',
      tech: ['C++', 'OpenGL', 'OpenAL Soft'],
      github: 'https://github.com/Matein0411/2025A_PARALELO_GR1',
      image: '/img/darkbit.gif' 
    },
    {
      title: 'EconoMe | Financial Systems',
      description: 'Robust personal finance management platform built with a modern SDLC. Features automated CI/CD pipelines via Azure DevOps, Agile management, and secure transaction metrics.',
      tech: ['Java 21', 'Jakarta EE', 'Hibernate', 'PostgreSQL', 'Azure'],
      github: '#',
      image: '/img/econome.png'
    }
  ];

  return (
    <div className="min-h-screen text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
    
      {/* NAV */}
      <Navbar />
      {/* PROJECTS CONTENT */}
      <div className="flex-grow pt-24 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto mt-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-center">My Projects</h1>
          <p className="text-[#888] text-center mb-12 max-w-2xl mx-auto">
            Here you can see some of the latest projects I have been working on. 
            I focus on performance, accessibility and good clean code practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#666] transition group flex flex-col h-full">
                {/* PREVIEW IMAGE - MORE PROMINENT */}
                <div className="relative w-full h-60 md:h-72 overflow-hidden bg-[#111] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80 pointer-events-none" />
                  
                  {/* GITHUB HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-[2px]">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] text-white border border-[#333] hover:border-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 flex items-center gap-3 shadow-2xl">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition">{project.title}</h3>
                  <p className="text-[#999] text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="bg-[#2a2a2a] text-[#ccc] text-xs px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-sm font-bold tracking-wider text-[#ccc] uppercase inline-flex items-center gap-2 mt-auto hover:text-white transition-colors">
                      View Demo <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* MORE PROJECTS OVERLAY */}
          <div className="mt-16 text-center">
            <a href="https://github.com/Matein0411" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-white text-sm font-semibold tracking-widest uppercase transition-colors inline-flex items-center gap-2 border-b border-transparent hover:border-white pb-1">
              For more projects, check my GitHub <span className="text-[1rem] leading-none">↗</span>
            </a>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
