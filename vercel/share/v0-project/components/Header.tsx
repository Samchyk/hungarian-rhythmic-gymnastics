'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-primary">
          Hungaryrhythmicgymnastics
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="/training" className="hover:text-primary transition">Képzés</Link>
          <Link href="/disciplines" className="hover:text-primary transition">Apparátusok</Link>
          <Link href="/history" className="hover:text-primary transition">Történelem</Link>
          <Link href="/equipment" className="hover:text-primary transition">Felszerelés</Link>
          <Link href="/rules" className="hover:text-primary transition">Szabályok</Link>
          <Link href="/blog" className="hover:text-primary transition">Blog</Link>
          <Link href="/about" className="hover:text-primary transition">Rólunk</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
        >
          <span className="block h-0.5 w-full bg-foreground"></span>
          <span className="block h-0.5 w-full bg-foreground"></span>
          <span className="block h-0.5 w-full bg-foreground"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-soft-blush border-t border-border">
          <div className="flex flex-col gap-4 p-4">
            <Link href="/training" className="hover:text-primary transition">Képzés</Link>
            <Link href="/disciplines" className="hover:text-primary transition">Apparátusok</Link>
            <Link href="/history" className="hover:text-primary transition">Történelem</Link>
            <Link href="/equipment" className="hover:text-primary transition">Felszerelés</Link>
            <Link href="/rules" className="hover:text-primary transition">Szabályok</Link>
            <Link href="/blog" className="hover:text-primary transition">Blog</Link>
            <Link href="/about" className="hover:text-primary transition">Rólunk</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
