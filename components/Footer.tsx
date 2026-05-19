'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:justify-between py-5">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Hungaryrhythmicgymnastics</h3>
            <p className="text-background/70">Az elegancia és mozgás művészetének hazája</p>  
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif font-semibold my-4">Navigáció</h4>
            <ul className="space-y-2 text-background/70">
              <li><Link href="/training" className="hover:text-background transition">Képzés</Link></li>
              <li><Link href="/disciplines" className="hover:text-background transition">Apparátusok</Link></li>
              <li><Link href="/history" className="hover:text-background transition">Történelem</Link></li>
              <li><Link href="/blog" className="hover:text-background transition">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-semibold my-4">Erőforrások</h4>
            <ul className="space-y-2 text-background/70">
              <li><Link href="/equipment" className="hover:text-background transition">Felszerelés</Link></li>
              <li><Link href="/rules" className="hover:text-background transition">Szabályok</Link></li>
              <li><Link href="/about" className="hover:text-background transition">Rólunk</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-semibold my-4">Jogi</h4>
            <ul className="space-y-2 text-background/70">
              <li><Link href="/privacy" className="hover:text-background transition">Adatvédelem</Link></li>
              <li><Link href="/cookies" className="hover:text-background transition">Cookie Szabályzat</Link></li>
            </ul>
          </div>
        </div>
        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>&copy; {currentYear} Hungaryrhythmicgymnastics Gimnasztika. Minden jog fenntartva.</p>
          <p>contact@hungaryrhythmicgymnastics.com</p>
        </div>
      </div>
    </footer>
  );
}
