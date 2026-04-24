'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* NAV */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-[#1a1a1a] z-50">
        <div className="flex items-center justify-between px-8 md:px-12 py-4">
          <div className="flex items-center gap-2">
            <span className="text-[#4a90d9] font-bold font-mono text-lg">&lt;/&gt;</span>
            <span className="text-sm md:text-base font-semibold">Developer X</span>
          </div>
          <ul className="hidden lg:flex gap-8 list-none">
            <li><a href="#" className="text-sm text-[#999] hover:text-white transition no-underline">Home</a></li>
            <li><a href="#" className="text-sm text-[#999] hover:text-white transition no-underline">About</a></li>
            <li><a href="#" className="text-sm text-[#999] hover:text-white transition no-underline">Blog</a></li>
            <li><a href="#" className="text-sm text-[#999] hover:text-white transition no-underline">Portfolio</a></li>
            <li>
              <a href="#" className="text-sm text-[#999] hover:text-white transition no-underline flex items-center gap-1">
                Pages <span className="text-[10px]">∨</span>
              </a>
            </li>
          </ul>
          <button className="lg:hidden flex flex-col gap-1.5">
            <span className="w-5 h-0.5 bg-white block" />
            <span className="w-5 h-0.5 bg-white block" />
            <span className="w-5 h-0.5 bg-white block" />
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="pt-16 min-h-screen flex items-center">
        <div className="w-full px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* LEFT SECTION */}
              <div className="flex flex-col justify-center">
                <div className="w-12 md:w-14 h-1 bg-white mb-8 md:mb-10" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 md:mb-8">
                  I'm John,<br />a Web<br />Developer
                </h1>
                <p className="text-[#888] text-sm md:text-base leading-relaxed max-w-md mb-10 md:mb-14">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit leo quis
                  ullamcorper quis id elementum convallis lacus gravida.
                </p>
                <div>
                  <button className="w-14 h-14 md:w-16 md:h-16 bg-[#3b6fd4] hover:bg-[#4a7fe0] rounded-full flex items-center justify-center transition shadow-lg">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* RIGHT SECTION - IMAGE + INFO */}
              <div className="flex flex-col gap-8">
                {/* CENTER IMAGE */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
                  <Image
                    src="/img/mateo_animated.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                </div>

                {/* INFO PANELS */}
                <div className="space-y-4">

                  {/* ABOUT ME */}
                  <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-5 md:p-6 hover:border-[#3a3a3a] transition">
                    <p className="text-sm md:text-lg font-bold tracking-widest text-white uppercase mb-3">About Me</p>
                    <p className="text-[#999] text-sm md:text-[.85rem] leading-relaxed mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit leo quis
                      ullamcorper quis id elementum convallis lacus gravida.
                    </p>
                    <a href="#" className="text-xs md:text-[.75rem] font-bold tracking-wider text-[#bbb] uppercase inline-flex items-center gap-1 border-b border-[#444] pb-1 hover:text-white hover:border-white transition no-underline">
                      Learn More →
                    </a>
                  </div>

                  {/* MY WORK */}
                  <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-5 md:p-6 hover:border-[#3a3a3a] transition">
                    <p className="text-sm md:text-lg font-bold tracking-widest text-white uppercase mb-3">My Work</p>
                    <p className="text-[#999] text-sm md:text-[.85rem] leading-relaxed mb-4">
                      Purus ut faucibus pulvinar elementum integer enim neque fermentum
                      iaculis eu non diam phasellus dolor consectetur.
                    </p>
                    <a href="#" className="text-xs md:text-[.75rem] font-bold tracking-wider text-[#bbb] uppercase inline-flex items-center gap-1 border-b border-[#444] pb-1 hover:text-white hover:border-white transition no-underline">
                      Browse Portfolio →
                    </a>
                  </div>

                  {/* FOLLOW ME */}
                  <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-5 md:p-6 hover:border-[#3a3a3a] transition">
                    <p className="text-sm md:text-lg font-bold tracking-widest text-white uppercase mb-4">Follow Me</p>
                    <div className="flex gap-4 flex-wrap">
                      {/* Facebook */}
                      <a href="#" className="text-white hover:text-[#4a90d9] transition hover:bg-[#1a2a3a] rounded-full w-12 h-12 flex items-center justify-center border border-[#333] hover:border-[#4a90d9]">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                        </svg>
                      </a>
                      {/* X / Twitter */}
                      <a href="#" className="text-white hover:text-[#4a90d9] transition hover:bg-[#1a2a3a] rounded-full w-12 h-12 flex items-center justify-center border border-[#333] hover:border-[#4a90d9]">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                      {/* Instagram */}
                      <a href="#" className="text-white hover:text-[#4a90d9] transition hover:bg-[#1a2a3a] rounded-full w-12 h-12 flex items-center justify-center border border-[#333] hover:border-[#4a90d9]">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="2" y="2" width="20" height="20" rx="5"/>
                          <circle cx="12" cy="12" r="4"/>
                          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                        </svg>
                      </a>
                      {/* LinkedIn */}
                      <a href="#" className="text-white hover:text-[#4a90d9] transition hover:bg-[#1a2a3a] rounded-full w-12 h-12 flex items-center justify-center border border-[#333] hover:border-[#4a90d9]">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                          <circle cx="4" cy="4" r="2"/>
                        </svg>
                      </a>
                      {/* YouTube */}
                      <a href="#" className="text-white hover:text-[#4a90d9] transition hover:bg-[#1a2a3a] rounded-full w-12 h-12 flex items-center justify-center border border-[#333] hover:border-[#4a90d9]">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                        </svg>
                      </a>
                      {/* GitHub */}
                      <a href="#" className="text-white hover:text-[#4a90d9] transition hover:bg-[#1a2a3a] rounded-full w-12 h-12 flex items-center justify-center border border-[#333] hover:border-[#4a90d9]">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}