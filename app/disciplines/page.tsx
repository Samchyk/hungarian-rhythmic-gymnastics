import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function DisciplinesPage() {
  const disciplines = [
    {
      name: 'Szalag (Ribbon)',
      image: '/apparatus-ribbon.jpg',
      description: 'A szalag az egyik leggyönyörűbb apparátus. 4-6 méteres selyem szalag, amely hullámos és spirális mozgásokat végez a levegőben.',
      elements: ['Dobások', 'Spirálok', 'Körkörös mozgások', 'Kanyarok'],
    },
    {
      name: 'Karika (Hoop)',
      image: '/apparatus-hoop.jpg',
      description: 'Az 80-90 cm átmérőjű karika átlendítés, csavarás és forgási mozgásokat igényel. Elegáns és dinamikus apparátus.',
      elements: ['Átlendítés', 'Csavarok', 'Forgások', 'Guruló mozgások'],
    },
    {
      name: 'Labda (Ball)',
      image: '/apparatus-ball.jpg',
      description: 'A 400 g-os labda finomabb kezelésre hív meg. Gördítés, dobások és rugalmas mozgások jellemzik.',
      elements: ['Gördítés', 'Rugó mozgások', 'Dobások', 'Csapatosítás'],
    },
    {
      name: 'Buzók (Clubs)',
      image: '/apparatus-clubs.jpg',
      description: 'A fából készült buzók dinamikus és energikus mozgásokat követelnek meg. Körző mozgások és egyensúly szükséges.',
      elements: ['Körző mozgások', 'Szinkronizált mozgások', 'Dobások', 'Figura mozgások'],
    },
    {
      name: 'Kötél (Rope)',
      image: '/apparatus-rope.jpg',
      description: 'A 2-3 méteres kötél ugró és lengő mozgásokat igényel. Elsősorban függőleges mozgások jellemzik.',
      elements: ['Ugrás', 'Lengés', 'Lengetés', 'Akrobatikus elemek'],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <section className="py-16 px-4 bg-soft-blush">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl font-bold mb-6 text-balance">Az Öt Apparátus</h1>
            <p className="text-lg text-foreground/70">Fedezze fel az egyes apparátusokat és azok sajátosságait</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {disciplines.map((discipline, index) => (
              <div key={index} className="mb-16 last:mb-0">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div className={index % 2 === 1 ? 'order-2' : ''}>
                    <h2 className="font-serif text-3xl font-bold mb-4">{discipline.name}</h2>
                    <p className="text-foreground/70 mb-6 leading-relaxed">{discipline.description}</p>
                    <div>
                      <h3 className="font-semibold mb-3">Fő mozgási elemek:</h3>
                      <ul className="space-y-2">
                        {discipline.elements.map((element, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>{element}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'order-1' : ''}>
                    <Image
                      src={discipline.image}
                      alt={discipline.name}
                      width={500}
                      height={400}
                      className="rounded-lg object-cover w-full h-96"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-soft-blush">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Szeretne többet tudni az apparátusokról?</h2>
            <p className="text-foreground/70 mb-8">Nézze meg részletes felszerelés útmutatónkat</p>
            <Link 
              href="/equipment"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            >
              Felszerelés Útmutató
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
