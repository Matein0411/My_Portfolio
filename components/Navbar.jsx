'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-[#1a1a1a] z-50">
      <div className="flex items-center justify-between px-8 md:px-12 py-5">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <span className="text-[#4a90d9] font-bold font-mono text-xl">&lt;/&gt;</span>
          <span className="text-base md:text-lg font-bold text-white">Mateo Yunga</span>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex gap-10 list-none">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-base font-medium transition no-underline ${
                  pathname === href ? 'text-white' : 'text-[#999] hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* HAMBURGER BUTTON */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`w-5 h-0.5 bg-white block transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white block transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white block transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden absolute top-full right-0 w-64 h-screen bg-[#0a0a0a]/95 backdrop-blur-md border-l border-[#1a1a1a] transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col list-none px-8 py-8 gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium transition no-underline ${
                  pathname === href ? 'text-white' : 'text-[#999] hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}