'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Hungaryrhythmicgymnastics</h3>
            <p className="text-background/70">Az elegancia és mozgás művészetének hazája</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Navigáció</h4>
            <ul className="space-y-2 text-background/70">
              <li><Link href="/training" className="hover:text-background transition">Képzés</Link></li>
              <li><Link href="/disciplines" className="hover:text-background transition">Apparátusok</Link></li>
              <li><Link href="/history" className="hover:text-background transition">Történelem</Link></li>
              <li><Link href="/blog" className="hover:text-background transition">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Erőforrások</h4>
            <ul className="space-y-2 text-background/70">
              <li><Link href="/equipment" className="hover:text-background transition">Felszerelés</Link></li>
              <li><Link href="/rules" className="hover:text-background transition">Szabályok</Link></li>
              <li><Link href="/about" className="hover:text-background transition">Rólunk</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Jogi</h4>
            <ul className="space-y-2 text-background/70">
              <li><Link href="/privacy" className="hover:text-background transition">Adatvédelem</Link></li>
              <li><Link href="/cookies" className="hover:text-background transition">Cookie Szabályzat</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <h4 className="font-serif font-semibold mb-4">Iratkozzon fel híreinkre</h4>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Az Ön e-malje"
              className="flex-1 px-4 py-2 rounded bg-background/10 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition"
            >
              Feliratkozás
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>&copy; {currentYear} Hungaryrhythmicgymnastics.</p>
        </div>
      </div>
    </footer>
  );
}
