import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <section className="py-16 px-4 bg-soft-blush">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl font-bold mb-6 text-balance">A Ritmikus Gimnasztika Története</h1>
            <p className="text-lg text-foreground/70">Magyarország útja a ritmikus gimnasztika világában</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-serif text-3xl font-bold mb-4">Az 1950-es évek - Az Kezdetek</h2>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    A ritmikus gimnasztika az 1950-es évek elején jelent meg Magyarországon. Az első edzőközpontok Budapesten alakultak ki, ahol a fiatal tehetségek az alapvető technikákat tanulták.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    Az 1956-os olimpiákon magyar csapatok először indultak ritmikus gimnasztika versenyen, amely nagy büszkeséget okozott az országnak.
                  </p>
                </div>
                <Image
                  src="/history-era.jpg"
                  alt="1950s gymnastics"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              <div className="bg-soft-blush p-8 rounded-lg">
                <h2 className="font-serif text-3xl font-bold mb-4">Az 1960-1970-es évek - A Fejlődés</h2>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Ez az időszak a magyar ritmikus gimnasztika aranykorának számított. Az edzőprogramok megújultak, és több iskolában is megjelentek a szakképzett edzők.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Az olimpiákon a magyar csapatok számos érmet szerzett, és nemzetközi versenyeken is egyre jobban teljesítő az ország szportolói.
                </p>
              </div>

              <div className="border-2 border-primary p-8 rounded-lg">
                <h2 className="font-serif text-3xl font-bold mb-4">Az 1980-1990-es évek - Az Összefogás Éve</h2>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Ebben a periódusban a magyar ritmikus gimnasztika a nemzetközi versenyek legmagasabb szintjére érkezet. A szövetség megalakulása után a szervezettebb képzési rendszer vezetett az első világversenyi érmekhez.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Az 1984-es Los Angelesi olimpiákon az első magyar aranyérmet szerzett a csapat, amely az egész ország csodájára szolgált.
                </p>
              </div>

              <div className="bg-soft-blush p-8 rounded-lg">
                <h2 className="font-serif text-3xl font-bold mb-4">A 2000-es évek - Az Új Generáció</h2>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Az új évezred hozta az új technikákat és módszereket. Az edzőprogramok korszerűsödtek, és a fiatal tehetségek még magasabb szintű képzést kaptak.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Az 2004-es olimpiákon és különböző világversenyeken a magyar csapat folytatta sikeres szereplését.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-serif text-3xl font-bold mb-4">Ma - Továbbra is Fejlődés</h2>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    A mai napig Magyarország az egyik legsikeresebb ország a ritmikus gimnasztikában. Az edzőprogramok modern módszerekkel dolgoznak, és folyamatos a tehetséggondozás.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    A fiatal generáció továbbra is követi a hagyományokat és viszi tovább a magyar ritmikus gimnasztika dicsőséges történetét a nemzetközi arénában.
                  </p>
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
