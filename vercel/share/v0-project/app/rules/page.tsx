'use client';

import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function RulesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <section className="py-16 px-4 bg-soft-blush">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl font-bold mb-6 text-balance">Verseny Szabályok</h1>
            <p className="text-lg text-foreground/70">A ritmikus gimnasztika nemzetközi verseny szabályainak összefoglalása</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
              <Image
                src="/scoring-system.jpg"
                alt="Scoring system"
                width={500}
                height={400}
                className="rounded-lg"
              />
              <div>
                <h2 className="font-serif text-3xl font-bold mb-4">Pontozási Rendszer</h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  A ritmikus gimnasztikában a pontozás két részből áll: művészi érték és technikai érték. Az összes pontok kombinációja adja az utolsó pontszámot.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Technikai Érték (D-pontok)</h3>
                    <p className="text-sm text-foreground/70">Az akrobatikus elemek, szerzett mozgások és teljesítmény minősége</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Művészi Érték (A-pontok)</h3>
                    <p className="text-sm text-foreground/70">A koreográfia, zenei interpretáció és általános benyomás</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Végrehajtási Pontok (E-pontok)</h3>
                    <p className="text-sm text-foreground/70">Hibák és pontosság levonások</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="font-serif text-3xl font-bold mb-4">Technikai Követelmények</h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Minden rutinnak tartalmaznia kell egy bizonyos típusú elemeket és követnie kell a szövetség által meghatározott követelményeket.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Legalább 4 apparátus mozgása</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Akrobatikus elemek</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Dinamikus és statikus elemek</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Minimális rutin hossz: 1 perc 15 másodperc</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Maximális rutin hossz: 1 perc 30 másodperc</span>
                  </li>
                </ul>
              </div>
              <Image
                src="/competition-rules.jpg"
                alt="Competition rules"
                width={500}
                height={400}
                className="order-1 md:order-2 rounded-lg"
              />
            </div>

            <div className="bg-soft-blush p-8 rounded-lg">
              <h2 className="font-serif text-3xl font-bold mb-6">Verseny Formátumok</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Egyéni Verseny</h3>
                  <p className="text-foreground/70 mb-4">
                    Egy tornász egy apparátuson versenyez. Az egyén pontszámai rangsort határoznak meg.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2"><span className="text-primary">•</span> Döntővel/Kvali</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> 2 elérkezés</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Végső rangsor</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Csapat Verseny</h3>
                  <p className="text-foreground/70 mb-4">
                    5 tornász csapatai versenyeznek. Az összes pontok összesítése adja a csapat pontszámot.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2"><span className="text-primary">•</span> 5 tornász/csapat</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Összes apparátus</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Kombinált rangsor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
