'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <section className="py-16 px-4 bg-soft-blush">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl font-bold mb-6 text-balance">Adatvédelmi Irányelvek</h1>
            <p className="text-lg text-foreground/70">Az Ön adatainak védelme számunkra fontos</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <p className="text-foreground/70 mb-6">
              <strong>Utolsó frissítés:</strong> {currentYear}. 
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">1. Bevezetés</h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              A Magyar Ritmikus Gimnasztika Szövetsége (a továbbiakban: "szervezet", "mi", "ránk") elkötelezett az Ön személyes adatainak védelme iránt. Ez az Adatvédelmi Irányelvek felkészít, hogy megértse, hogyan gyűjtjük, használjuk és védjük személyes adatait.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">2. Az Adatok Gyűjtése</h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Az alábbi típusú személyes adatokat gyűjthetjük:
            </p>
            <ul className="space-y-2 ml-4 mb-4">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Név, email cím, telefonszám</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Cím és egyéb kapcsolattartási információ</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Az Ön által megosztott üzenetek és megjegyzések</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Az Ön böngészési adatai és technikai információi</span>
              </li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">3. Az Adatok Felhasználása</h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Az Ön személyes adatait az alábbi célokra használjuk:
            </p>
            <ul className="space-y-2 ml-4 mb-4">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Ön kommunikációjának válaszadása</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Szolgáltatások nyújtása</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Webhely fejlesztése és javítása</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Biztonsági és csalás elleni védelmi céllal</span>
              </li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">4. Az Adatok Védelme</h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Megfelelő technikai és szervezeti intézkedéseket fogadunk el az Ön személyes adatainak védelme érdekében az illetéktelen hozzáféréssel, megváltoztatással, megsemmisítéssel vagy nyilvánosságra hozatalával szemben.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">5. Az Ön Jogai</h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Az Ön az alábbi jogokkal rendelkezik az Ön személyes adatai tekintetében:
            </p>
            <ul className="space-y-2 ml-4 mb-4">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Hozzáférési jog - Megismerkezhet az Ön tárolt adatokkal</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Helyesbítési jog - Javíthatja az Ön helytelen adatait</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Törlési jog - Kérheti az Ön adatainak törlését</span>
              </li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">6. Kapcsolatfelvétel</h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Ha bármilyen kérdése van az Adatvédelmi Irányelvek tekintetében, kérjük, vegyék fel velünk a kapcsolatot az <strong>info@magyarritmikus.hu</strong> címen.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
