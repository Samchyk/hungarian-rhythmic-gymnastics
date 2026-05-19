import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function BlogPage() {
  const articles = [
    {
      slug: 'flexibility-techniques',
      title: 'A Rugalmasság Fejlesztésének Technikái',
      excerpt: 'Megtudja a legjobb módszereket a rugalmasság és mozgástartomány fejlesztésére',
      image: '/blog-flexibility-techniques.jpg',
    },
    {
      slug: 'ribbon-skills',
      title: 'Szalag Kezelés Alapjai',
      excerpt: 'Tanuljon meg alapvető szalag mozgásokat és technikákat',
      image: '/blog-ribbon-skills.jpg',
    },
    {
      slug: 'beginner-guide',
      title: 'Kezdők Útmutatója a Ritmikus Gimnasztikához',
      excerpt: 'Az ideális kiindulópont azoknak, akik szeretnének elkezdeni',
      image: '/blog-beginner-guide.jpg',
    },
    {
      slug: 'music-rhythm',
      title: 'Zene és Ritmus a Gimnasztikában',
      excerpt: 'Fedezze fel a zenei interpretáció fontosságát a teljesítményben',
      image: '/blog-music-rhythm.jpg',
    },
    {
      slug: 'modern-trends',
      title: 'Modern Trendek a Ritmikus Gimnasztikában',
      excerpt: 'Az aktuális versenyzési trendek és innovációk',
      image: '/blog-modern-trends.jpg',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <section className="py-16 px-4 bg-soft-blush">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl font-bold mb-6 text-balance">Blog</h1>
            <p className="text-lg text-foreground/70">Tippek, trükkök és insights a ritmikus gimnasztika világából</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <article className="group cursor-pointer h-full">
                    <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <h2 className="font-serif text-2xl font-bold mb-3 group-hover:text-primary transition">
                      {article.title}
                    </h2>
                    <p className="text-foreground/70">
                      {article.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-soft-blush">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Szeretne több tartalmat?</h2>
            <p className="text-foreground/70 mb-8">Iratkozzon fel híreinkre, hogy kapjon új cikkeket</p>
            <form className="flex gap-2 justify-center">
              <input
                type="email"
                placeholder="Az Ön e-malje"
                className="flex-1 max-w-xs px-4 py-2 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition"
              >
                Feliratkozás
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
