import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function EquipmentPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <section className="py-16 px-4 bg-soft-blush">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl font-bold mb-6 text-balance">Felszerelés és Eszközök</h1>
            <p className="text-lg text-foreground/70">Teljes útmutató a ritmikus gimnasztika felszereléshez</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
              <Image
                src="/equipment-collection.jpg"
                alt="Equipment collection"
                width={500}
                height={400}
                className="rounded-lg"
              />
              <div>
                <h2 className="font-serif text-3xl font-bold mb-4">Főbb Apparátusok</h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  A ritmikus gimnasztikában öt apparátust használnak nemzetközi versenyeken. Mindegyik speciális tulajdonságokkal rendelkezik és különböző technikai megközelítéseket igényel.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <div>
                      <strong>Szalag (Ribbon)</strong> - 4-6 méteres selyem szalag
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <div>
                      <strong>Karika (Hoop)</strong> - 80-90 cm átmérőjű fém karika
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <div>
                      <strong>Labda (Ball)</strong> - 400 g-os gumi labda
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">4.</span>
                    <div>
                      <strong>Buzók (Clubs)</strong> - 150-200 g-os fű buzók
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">5.</span>
                    <div>
                      <strong>Kötél (Rope)</strong> - 2-3 méteres nylon kötél
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Training Equipment */}
            <div className="bg-soft-blush p-8 rounded-lg mb-16">
              <h2 className="font-serif text-3xl font-bold mb-6">Edzőfelszerelés</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Tornacsarnokok szükséges felszerelése</h3>
                  <ul className="space-y-2">
                    <li>• Tornamatr (14m x 14m)</li>
                    <li>• Segédeszközök (szőnyeg, kockák)</li>
                    <li>• Tükrök (testtudat fejlesztéshez)</li>
                    <li>• Hangrendszer (zenelejátszáshoz)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Személyes edzőfelszerelés</h3>
                  <ul className="space-y-2">
                    <li>• Tornadressz</li>
                    <li>• Tornacipő</li>
                    <li>• Hajlékony szalag</li>
                    <li>• Rugó eszközök</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8">Apparátuselőírások</h2>
              <div className="space-y-6">
                <div className="border border-border p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Szalag (Ribbon)</h3>
                  <p className="text-sm text-foreground/70">
                    <strong>Hossz:</strong> 4-6 méter | <strong>Szél:</strong> 4-6 cm | <strong>Anyag:</strong> 100% selyem | <strong>Tömeg:</strong> 35 g
                  </p>
                </div>
                <div className="border border-border p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Karika (Hoop)</h3>
                  <p className="text-sm text-foreground/70">
                    <strong>Átmérő:</strong> 80-90 cm | <strong>Anyag:</strong> fa vagy műanyag | <strong>Tömeg:</strong> 300-400 g | <strong>Vastagsag:</strong> 2 cm
                  </p>
                </div>
                <div className="border border-border p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Labda (Ball)</h3>
                  <p className="text-sm text-foreground/70">
                    <strong>Átmérő:</strong> 18-20 cm | <strong>Tömeg:</strong> 400 g | <strong>Anyag:</strong> gumi | <strong>Szín:</strong> egyszínű
                  </p>
                </div>
                <div className="border border-border p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Buzók (Clubs)</h3>
                  <p className="text-sm text-foreground/70">
                    <strong>Hossz:</strong> 40-50 cm | <strong>Tömeg (pár):</strong> 150-200 g | <strong>Anyag:</strong> fa | <strong>Forma:</strong> csonka kúp
                  </p>
                </div>
                <div className="border border-border p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Kötél (Rope)</h3>
                  <p className="text-sm text-foreground/70">
                    <strong>Hossz:</strong> 2-3 méter | <strong>Anyag:</strong> nylon vagy szintetikus | <strong>Tömeg:</strong> 150 g | <strong>Vastagság:</strong> 9 mm
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
