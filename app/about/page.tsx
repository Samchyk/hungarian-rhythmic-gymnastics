import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <section className="py-16 px-4 bg-soft-blush">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl font-bold mb-6 text-balance">Rólunk</h1>
            <p className="text-lg text-foreground/70">A magyar ritmikus gimnasztika misszió: elegancia, művészet és eredmény</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <Image
                src="/about-team.jpg"
                alt="Our team"
                width={500}
                height={400}
                className="rounded-lg"
              />
              <div>
                <h2 className="font-serif text-3xl font-bold mb-4">Ki Vagyunk Mi?</h2>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  A Magyar Ritmikus Gimnasztika Szövetsége egy nonprofit szervezet, amely a ritmikus gimnasztika fejlesztésében és a tehetségek gondozásában dolgozik.
                </p>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Megalakulásunk óta több mint 50 évvel ezelőtt, híresek vagyunk a magas szintű edzetésről és nemzetközi sikerekről.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Célunk, hogy minden generáció számára elérhető legyen a ritmikus gimnasztika, és közvetítsük az elegancia, művészet és kitartás értékeit.
                </p>
              </div>
            </div>

            <div className="bg-soft-blush p-8 rounded-lg mb-16">
              <h2 className="font-serif text-3xl font-bold mb-6 text-center">Értékeink</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-primary">Elegancia</h3>
                  <p className="text-foreground/70">
                    Minden mozgásban az elegancia és grác visszatükrözése
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-primary">Kutatás</h3>
                  <p className="text-foreground/70">
                    Folyamatos fejlődés a technika és módszerek terén
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-primary">Közösség</h3>
                  <p className="text-foreground/70">
                    A támogató és befogadó közösség építése
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Vegyük fel a kapcsolatot</h2>
            
            <form className="bg-soft-blush p-8 rounded-lg">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block font-semibold mb-2">Név</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Téma</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Üzenet</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold"
              >
                Üzenet Küldése
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
