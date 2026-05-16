'use client';

import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <section className="py-16 px-4 bg-soft-blush">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl font-bold mb-6 text-balance">Képzés és Rugalmasság</h1>
            <p className="text-lg text-foreground/70 mb-8">Megtudja az alapvető nyújtási, egyensúly és koordinációs gyakorlatokat</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
              <div>
                <Image
                  src="/training-flexibility.jpg"
                  alt="Flexibility training"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold mb-4">Rugalmasság Fejlesztése</h2>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  A rugalmasság az alapja a ritmikus gimnasztikának. Rendszeres nyújtási gyakorlatok segítik az izomzat meghosszabbítását és a mozgási tartomány kiterjesztését.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2"><span className="text-primary">•</span> Dinamikus nyújtások</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Statikus nyújtási gyakorlatok</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> PNF nyújtás módszer</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Yoga és Pilates gyakorlatok</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="font-serif text-3xl font-bold mb-4">Egyensúly Gyakorlatok</h2>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Az egyensúly a testirányítás alapja. A stabil test- és gondolategyensúly nélkül lehetetlen a bonyolult mozgásokat végezni.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2"><span className="text-primary">•</span> Statikus egyensúly gyakorlatok</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Dinamikus mozgások egyensúlyban</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Propriocepció fejlesztése</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Vestibuláris rendszer edukációja</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/balance-training.jpg"
                  alt="Balance training"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/coordination-training.jpg"
                  alt="Coordination training"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold mb-4">Koordináció Fejlesztése</h2>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  A koordináció az elemek és az apparátus közötti harmonikus kapcsolat. A jó koordináció elengedhetetlen a technikai tökéletesség eléréshez.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2"><span className="text-primary">•</span> Finom motoros koordináció</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Kéz-szem koordináció</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Kétoldali koordináció</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Apparátussal való koordináció</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-soft-blush">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Képzési Programok</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-bold mb-4">Kezdő Program</h3>
                <p className="text-foreground/70 mb-4">8-12 hét alatt fejlesztheti az alapvető képességeket</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Alapvető nyújtási gyakorlatok</li>
                  <li>✓ Egyensúly alapok</li>
                  <li>✓ Testüdomat fejlesztés</li>
                  <li>✓ Ritmus és zene érzékelése</li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-bold mb-4">Haladó Program</h3>
                <p className="text-foreground/70 mb-4">További 12-16 hét a speciális technikák fejlesztésére</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Fejlett nyújtási technikák</li>
                  <li>✓ Bonyolult egyensúly gyakorlatok</li>
                  <li>✓ Apparátus kezelés alapjai</li>
                  <li>✓ Koreográfiai alapok</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
