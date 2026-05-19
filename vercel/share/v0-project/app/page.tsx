'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-gymnastics.jpg"
            alt="Rhythmic gymnastics hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Hungaryrhythmicgymnastics Gimnasztika
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-light">
            Fedezze fel az elegancia és mozgás művészetét
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/training"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-serif text-lg"
            >
              Kezdje el a tanulást
            </Link>
            <Link 
              href="/disciplines"
              className="px-8 py-3 bg-soft-blush text-foreground rounded-lg hover:bg-soft-blush/80 transition font-serif text-lg"
            >
              Fedezze fel az apparátusokat
            </Link>
          </div>
        </div>
      </section>

      {/* Preview Sections */}
      <section className="py-20 px-4 bg-soft-blush">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-16 text-balance">Fedezze fel a Ritmikus Gimnasztikát</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Training Preview */}
            <Link href="/training" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/training-flexibility.jpg"
                  alt="Training"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-2 group-hover:text-primary transition">Képzés és Rugalmasság</h3>
              <p className="text-foreground/70">Megtudja az alapvető nyújtási és egyensúly gyakorlatokat</p>
            </Link>

            {/* Disciplines Preview */}
            <Link href="/disciplines" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/discipline-performance.jpg"
                  alt="Disciplines"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-2 group-hover:text-primary transition">Az 5 Apparátus</h3>
              <p className="text-foreground/70">Ismerje meg a szalagot, karikát, labdát, buzókat és kötelet</p>
            </Link>

            {/* History Preview */}
            <Link href="/history" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/history-era.jpg"
                  alt="History"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-2 group-hover:text-primary transition">Történelem</h3>
              <p className="text-foreground/70">Magyarország út a ritmikus gimnasztika világában</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-16 text-balance">Miért a Ritmikus Gimnasztika?</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">✓</div>
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Elegancia és Grác</h3>
                <p className="text-foreground/70">Fejlesszen artisztikus mozgási stílust és testületi tudatosságot</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">✓</div>
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Fizikai Fejlődés</h3>
                <p className="text-foreground/70">Javítsa a rugalmasságot, erőt és koordinációt</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">✓</div>
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Zenei Kifejezés</h3>
                <p className="text-foreground/70">Tánc és zene harmonikus kombinációja mozgással</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">✓</div>
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Közösség</h3>
                <p className="text-foreground/70">Csatlakozzon egy kreatív és támogató közösséghez</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6 text-balance">Kész elkezdeni az utazást?</h2>
          <p className="text-xl mb-8 font-light">Fedezze fel a ritmikus gimnasztika világát, és fedezze fel saját lehetőségeit</p>
          <Link 
            href="/about"
            className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-soft-blush transition font-serif text-lg font-semibold"
          >
            Vegyük fel a kapcsolatot
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
