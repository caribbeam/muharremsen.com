"use client";

import Link from "next/link";
import { useState } from "react";
import TopBar from "./TopBar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "/blog", label: "Blog" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden max-w-full">
      <TopBar />
      <div className="glass-strong overflow-hidden">
      <nav className="container mx-auto px-4 py-3 md:py-4 max-w-full overflow-hidden">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg md:text-2xl font-bold text-accent-green hover:text-accent-turquoise transition-colors touch-manipulation"
            aria-label="Ana Sayfa"
          >
            muharremsen
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-accent-green transition-colors font-medium text-sm lg:text-base touch-manipulation"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-accent-green transition-colors p-2 -mr-2 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-1 border-t border-gray-700 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-300 hover:text-accent-green transition-colors py-3 px-2 rounded-lg hover:bg-dark-tertiary touch-manipulation min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
      </div>
    </header>
  );
}

