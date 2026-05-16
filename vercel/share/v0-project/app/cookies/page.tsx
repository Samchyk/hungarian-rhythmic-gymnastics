'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function CookiesPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <section className="py-16 px-4 bg-soft-blush">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl font-bold mb-6 text-balance">Cookie Szabályzat</h1>
            <p className="text-lg text-foreground/70">Tudnivaló a cookie-król és a weboldal nyomon követéséről</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <p className="text-foreground/70 mb-6">
              <strong>Utolsó frissítés:</strong> {currentYear}.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">1. Mi a Cookie?</h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              A cookie egy kis szövegfájl, amelyet a weboldal az Ön böngészőjére helyez. Ez segít a weboldal működésében, a felhasználói élmény javításában és az Ön preferenciáinak megjegyzésében.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">2. Cookie-k Típusai</h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              A weboldalon a következő típusú cookie-kat használunk:
            </p>
            
            <h3 className="font-semibold text-lg mb-2 mt-4">Szükséges Cookie-k</h3>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Ezek a cookie-k elengedhetetlenek a weboldal működéséhez. Ezek nélkül a weboldal nem működne megfelelően.
            </p>

            <h3 className="font-semibold text-lg mb-2 mt-4">Preferencia Cookie-k</h3>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Ezek a cookie-k emlékeznek az Ön beállításaira, például a nyelvválasztásra és a megjelenítési beállításokra.
            </p>

            <h3 className="font-semibold text-lg mb-2 mt-4">Analitikai Cookie-k</h3>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Ezek a cookie-k segítik a weboldal javítását az Ön böngészési szokásainak elemzésével. Az információ anonim és összesített formában kerül feldolgozásra.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">3. Cookie-k Kezelése</h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              A böngésző beállításaiban szabályozhatja a cookie-kat. A legtöbb böngésző lehetőséget ad a cookie-k blokkolására vagy törlésére. Azonban ez befolyásolhatja a weboldal működését.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">4. Harmadik Fél Cookie-k</h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              A weboldalon harmadik fél szolgáltatások (például Google Analytics) cookie-jait is használhatunk. Ezeket a harmadik felek saját szabályaiknak megfelelően kezelik.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">5. Jogi Egyenlítés</h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Az EU GDPR szabályozás szerint az Ön hozzájárulása szükséges a nem szükséges cookie-khoz. Az oldal betöltésekor egy Cookie Sávot fog látni, amely lehetőséget ad a cookie-k elfogadására vagy elutasítására.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">6. További Kérdések</h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Ha kérdése van a cookie-król vagy az Adatvédelmi Irányelvekről, kérjük, vegyék fel velünk a kapcsolatot az <strong>info@magyarritmikus.hu</strong> címen.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
