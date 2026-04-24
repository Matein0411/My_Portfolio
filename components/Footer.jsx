// components/Footer.jsx
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2a2a2a] py-8 text-[#888] text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo & Copyright */}
        <div className="flex items-center gap-4">
          <Image 
            src="/img/logo.png" 
            alt="Logo Mateo"
            width={32} 
            height={32} 
            className="object-contain"
          />
          <p>
            © {currentYear} Mateo Yunga. All rights reserved.
          </p>
        </div>

        {/* Links Rápidos */}
        <div className="flex gap-6 font-medium">
          <a 
            href="https://github.com/Matein0411" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/mateo-yunga-b64085186" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:yungamateoand05@gmail.com" 
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
        
      </div>
    </footer>
  );
}