'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-soft-blush overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/hero-gymnastics.jpg"
            alt="Rhythmic gymnastics hero"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-balance">
            A Ritmikus Gimnasztika Szepsége
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 text-balance">
            Elegancia, művészet és technikai virtuozitás egy sportban
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/about"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-serif font-semibold"
            >
              Ismerkedj Meg Velünk
            </Link>
            <Link 
              href="/history"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-soft-blush transition font-serif font-semibold"
            >
              Történetünk
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Link href="/disciplines" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/apparatus-ribbon.jpg"
                  alt="Ribbon apparatus"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-primary transition">Az 5 Apparátus</h3>
              <p className="text-foreground/70">Szalag, karika, labda, buzók és kötél - ismerd meg az összes apparátust</p>
            </Link>

            <Link href="/rules" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/scoring-system.jpg"
                  alt="Scoring system"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-primary transition">Szabályok & Pontozás</h3>
              <p className="text-foreground/70">Tanuld meg a versenyzés szabályait és a pontozási rendszert</p>
            </Link>

            <Link href="/blog" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/blog-flexibility-techniques.jpg"
                  alt="Blog"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-primary transition">Blog & Tippek</h3>
              <p className="text-foreground/70">Olvass cikkeket, tippeket és inspirációt a gimnasztikáról</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-20 px-4 bg-soft-blush">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Az Edzés Kezdeménye</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Az edzés a szépség és teljesítmény kulcsa. Minden nap száz versenyzőnk dolgozik az ötletek megvalósítására és saját céljaik elérésére.
              </p>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Az akaraterő, türelem és kitartás - ezek az eszmények, amelyeket a magyar ritmikus gimnasztika képvisel.
              </p>
              <Link 
                href="/about"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-serif font-semibold"
              >
                Más Tudni Rólunk
              </Link>
            </div>
            <Image
              src="/training-flexibility.jpg"
              alt="Training flexibility"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">Felszerelés & Apparátusok</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <Image
              src="/equipment-collection.jpg"
              alt="Equipment collection"
              width={500}
              height={400}
              className="rounded-lg"
            />
            <div>
              <h3 className="font-serif text-3xl font-bold mb-4">Mi Szükséges?</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                A ritmikus gimnasztikához szükség van speciális apparátusokra és felszerelésekre. Minden eszköz szigorú nemzetközi szabályok szerint készül.
              </p>
              <Link 
                href="/equipment"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-serif font-semibold"
              >
                Felszerelés Útmutató
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-soft-blush">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Csatlakozz a Közösségünkhez</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Akár kezdő vagy, akár tapasztalt - van helye számodra a magyar ritmikus gimnasztika világában
          </p>
          <Link 
            href="/about"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-serif font-semibold"
          >
            Vegyük fel a Kapcsolatot
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
