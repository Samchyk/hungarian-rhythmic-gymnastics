import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const articles: Record<string, any> = {
  'flexibility-techniques': {
    title: 'A Rugalmasság Fejlesztésének Technikái',
    date: '2024',
    image: '/blog-flexibility-techniques.jpg',
    content: `
      A rugalmasság az egyik legfontosabb tulajdonsága a ritmikus gimnasztikának. Ebben a cikkben megmutatjuk a leghatékonyabb módszereket a rugalmasság fejlesztésére.

      ## Miért fontos a rugalmasság?

      A jó rugalmasság lehetővé teszi a mélyebb hajlításokat, a nagyobb mozgási tartományt és az elegánsabb mozgásokat. Ezek mind lényeges tényezők a sikeres teljesítményben.

      ## A megközelítések

      1. **Statikus nyújtások** - 30 másodperc vagy hosszabb ideig tartott nyújtások
      2. **Dinamikus nyújtások** - Mozgásos nyújtások, amelyek fokozatosan növelik az amplitúdót
      3. **PNF Nyújtás** - Proprioceptív neuromuskuláris facilitáció módszer

      ## Napi gyakorlatok

      Végezzen legalább 15-20 percet naponta a rugalmasság fejlesztésén. A rendszeresség a kulcs!
    `,
  },
  'ribbon-skills': {
    title: 'Szalag Kezelés Alapjai',
    date: '2024',
    image: '/blog-ribbon-skills.jpg',
    content: `
      A szalag az egyik legmozgékonyabb apparátus, amely számos lehetőséget kínál az artisztikus kifejezésre.

      ## Alapvető szalag mozgások

      - **Körök** - A szalag körökben forog
      - **Spirálok** - Spirálformákat létrehozva
      - **Szerpentinek** - Hullámszerű mozgások
      - **Dobások** - A szalagot feldobás után visszafogás

      ## Technika tippek

      Fontos, hogy a szalag mozgásai során tartsa meg az ellenőrzést. A szabályos gyakorlás fejleszti az írástudást és a precizitást.

      ## Kezdő gyakorlatok

      Kezdje az egyszerű körökkel és fokozatosan lépjen fel a összetettebb mozgásokra. Ne siessen!
    `,
  },
  'beginner-guide': {
    title: 'Kezdők Útmutatója a Ritmikus Gimnasztikához',
    date: '2024.',
    image: '/blog-beginner-guide.jpg',
    content: `
      Elindult az utazása a ritmikus gimnasztika felé? Ez az útmutató segít az első lépésekben.

      ## Első hét - Alapok

      - Nyújtási gyakorlatok
      - Alapvető egyensúly gyakorlatok
      - Ritmusérzet fejlesztés

      ## Második-harmadik hét - Haladás

      - Alapvető apparátus kezelés
      - Koordinációs gyakorlatok
      - Zenei interpretáció alapok

      ## Fontos tanácsok

      - Legyen türelmes - a fejlődés időt vesz igénybe
      - Hallgasson teste jelzéseire
      - Rendszeres gyakorlás az ígéret a sikerhez
      - Ne hasonlítsa magát másokhoz - mindenkinek saját üteme van
    `,
  },
  'music-rhythm': {
    title: 'Zene és Ritmus a Gimnasztikában',
    date: '2024.',
    image: '/blog-music-rhythm.jpg',
    content: `
      A zene az egyik legfontosabb eleme a ritmikus gimnasztikának. A helyes ritmusértelmezés nagyban javíthatja a teljesítményt.

      ## A zene szerepe

      A zene nem csak kísér a rutinnak, hanem teljes egész lényeges részét képezi. A mozgások a zene ritmusával szinkronban kell lenniük.

      ## Ritmusértelmezés

      - Hallgassa meg a zenét többször
      - Azonosítsa a fő ritmusidőt
      - Szinkronizálja a mozgásait az ütemhez
      - Fejlesszen zenei érzékenységet

      ## Javasolt gyakorlatok

      1. Tánc és mozgás a zenéhez
      2. Ritmusgyakorlatok
      3. Érzelmi kifejezés a zene alapján
    `,
  },
  'modern-trends': {
    title: 'Modern Trendek a Ritmikus Gimnasztikában',
    date: '2024.',
    image: '/blog-modern-trends.jpg',
    content: `
      A ritmikus gimnasztika folyamatosan fejlődik. Íme a legújabb trendek a sporágban.

      ## Technikai Innovációk

      - Újabb apparátus anyagok és dizájnok
      - Fejlett edző módszerek
      - Biomechanikai analízis az optimalizáláshoz

      ## Artisztikus Fejlődés

      - Modern koreográfia stílusok
      - Elektronikus és vegyes zene használata
      - Interdiszciplináris megközelítés más sportokkal

      ## Kompetitív Tendenciák

      - Magasabb szintű akrobatikai elemek
      - Gyorsabb és dinamikusabb rutinok
      - Fokozódó fizikai igények

      ## Jövőbeni Perspektívák

      A ritmikus gimnasztika továbbra is fejlődni fog, és az új generációk még nagyobb kihívásokkal fog szembenézni.
    `,
  },
};

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 max-w-4xl mx-auto px-4 py-16">
          <h1 className="font-serif text-4xl font-bold mb-4">Cikk nem találva</h1>
          <Link href="/blog" className="text-primary hover:underline">
            Vissza a bloghoz
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <article className="max-w-4xl mx-auto px-4 py-16">
          <header className="mb-8">
            <h1 className="font-serif text-5xl font-bold mb-4 text-balance">{article.title}</h1>
            <p className="text-foreground/60">{article.date}</p>
          </header>

          <div className="relative h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            {article.content.split('\n\n').map((paragraph: string, idx: number) => (
              <div key={idx} className="mb-6">
                {paragraph.startsWith('##') ? (
                  <h2 className="font-serif text-2xl font-bold mb-4 mt-8">
                    {paragraph.replace('## ', '')}
                  </h2>
                ) : paragraph.startsWith('-') ? (
                  <ul className="space-y-2 ml-4">
                    {paragraph.split('\n').map((item: string, itemIdx: number) => (
                      item.trim() && (
                        <li key={itemIdx} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{item.replace('- ', '')}</span>
                        </li>
                      )
                    ))}
                  </ul>
                ) : paragraph.match(/^\d\./) ? (
                  <ol className="space-y-2 ml-4 list-decimal">
                    {paragraph.split('\n').map((item: string, itemIdx: number) => (
                      item.trim() && (
                        <li key={itemIdx} className="ml-2">
                          {item.replace(/^\d\. /, '')}
                        </li>
                      )
                    ))}
                  </ol>
                ) : (
                  <p className="text-foreground/70 leading-relaxed">{paragraph}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/blog" className="text-primary hover:underline">
              ← Vissza a bloghoz
            </Link>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}
