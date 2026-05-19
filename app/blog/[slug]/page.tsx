import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const articles: Record<string, any> = {
  'flexibility-techniques': {
    title: 'A Rugalmasság Fejlesztésének Technikái',
    date: '2026. március 12.',
    image: '/blog-flexibility-techniques.jpg',
    content: `
      A rugalmasság a ritmikus gimnasztika egyik alappillére. Egy versenyző teljesítményét nagyban meghatározza, hogy milyen mély hajlításokra, magas rúgásokra és tág mozgásamplitúdóra képes. Ebben a cikkben részletesen bemutatjuk azokat a módszereket, amelyekkel biztonságosan és hatékonyan fejlesztheti rugalmasságát — akár kezdő, akár haladó szinten gimnasztikázik.

      ## Miért meghatározó a rugalmasság?

      A rugalmasság nemcsak esztétikai szempontból fontos: a megfelelő mozgástartomány csökkenti a sérülések kockázatát, javítja a koordinációt, és lehetővé teszi a nehéz elemek — például a spárgaugrások, hátrahajlások vagy magas rúgások — pontos kivitelezését. Egy rugalmas test gyorsabban regenerálódik az edzések után, és kevésbé hajlamos az izomhúzódásokra.

      ## A három legfontosabb nyújtási módszer

      1. **Statikus nyújtások** - A megnyújtott pozíciót 30-60 másodpercig tartjuk, és lassan, kontrollált lélegzéssel ereszkedünk mélyebbre. Ideális edzés után, a regeneráció során.
      2. **Dinamikus nyújtások** - Lendületes, kontrollált mozgásokkal melegítjük be az izmokat. Például lábemelések, karkörzések, csípőrotációk. Edzés előtt ajánlott.
      3. **PNF nyújtás (proprioceptív neuromuszkuláris facilitáció)** - Feszítés-relaxáció kombinációja, amely a leggyorsabb eredményeket hozza. Edzővel vagy partnerrel ajánlott végezni.

      ## Heti edzésterv kezdőknek

      - Hétfő, szerda, péntek: 20 perc statikus nyújtás edzés után
      - Kedd, csütörtök: 10 perc dinamikus nyújtás bemelegítésként
      - Szombat: hosszabb, 40 perces mélynyújtó szessz
      - Vasárnap: pihenőnap vagy könnyű mobilizáció

      ## Gyakori hibák, amelyeket érdemes elkerülni

      - Hideg izmokon való erőltetett nyújtás — mindig melegítsen be előtte
      - Légzés visszatartása — a kilégzés segíti az ellazulást
      - Türelmetlenség — a tartós rugalmasság hónapok, nem napok kérdése
      - Fájdalomig nyújtás — a kellemes feszülés a cél, nem a kínzás

      ## A regeneráció szerepe

      A rugalmasság fejlesztése során az izmok mikrosérüléseket szenvednek, amelyek pihenés alatt épülnek újjá. Aludjon napi 8 órát, fogyasszon elegendő fehérjét, és iktasson be heti egy teljes pihenőnapot. A rendszeresség mindig fontosabb, mint az intenzitás.
    `,
  },
  'ribbon-skills': {
    title: 'Szalag Kezelés Alapjai',
    date: '2026. március 18.',
    image: '/blog-ribbon-skills.jpg',
    content: `
      A szalag a ritmikus gimnasztika legkifejezőbb és legtechnikásabb eszköze. A hat méter hosszú szatén szalag és a könnyű pálca együttese végtelen kreatív lehetőséget kínál — ugyanakkor pontos technikát és sok-sok gyakorlást igényel. Ebben az útmutatóban végigvesszük az alapokat.

      ## A szalag felépítése és kiválasztása

      A versenyszalag általában 6 méter hosszú (junioroknál 5 méter), és egy 50-60 cm-es pálcához rögzítik. Az anyaga szatén vagy hasonló könnyű textil. Kezdőknek érdemes egyszínű, közepesen súlyozott szalaggal indulni — a fényes, mintás versenyszalagokat hagyja későbbre.

      ## Az öt alapmozgás

      - **Körök (circles)** - A szalag teljes körívben rajzol formákat a test előtt, mellett vagy felett
      - **Spirálok (spirals)** - Szoros, csigaszerű mintázat, amelyet csuklómozgással hozunk létre
      - **Szerpentinek (snakes)** - Vízszintes hullámvonalak, amelyek a szalag teljes hosszán végighaladnak
      - **Dobások (throws)** - A szalagot feldobjuk, közben elemet hajtunk végre, majd elkapjuk
      - **Echappés** - A pálca és a szalag rövid elengedése és újra megragadása

      ## Technikai alapelvek

      A jó szalagkezelés titka a folyamatos csuklómozgás. A szalagnak soha nem szabad „leesnie", mindig formát kell tartania a levegőben. Ez azt jelenti, hogy a csuklónak állandóan dolgoznia kell — szinte sosem nyugszik. A karunk nyújtott, de nem feszült, és a mozdulatok a vállból indulnak.

      ## Gyakorlási sorrend kezdőknek

      1. Helyben állva tanulja meg a köröket — előbb nagy, lassú köröket, majd kisebbeket
      2. Egészítse ki járásra, majd futásra
      3. Adjon hozzá ugrásokat — kis ugrásokkal kezdje
      4. Tanulja meg az egyszerű dobásokat alacsony magasságból
      5. Kombinálja az elemeket rövid, 30 másodperces sorozatokká

      ## Tipikus kezdő hibák

      A leggyakoribb probléma, hogy a szalag csomókat köt, vagy elveszti formáját. Ez majdnem mindig a túl lassú vagy túl nagy karmozgás miatt történik. A megoldás: kisebb, gyorsabb csuklómozgás. Ha a szalag mégis összegabalyodik — ne pánikoljon, fonja ki nyugodtan, és kezdje újra.

      ## A művészi kifejezés

      A szalag azért is különleges, mert minden mozdulat látható: a szalag mintha meghosszabbítaná a karját. Próbálja a szalagot a teste „kiterjesztésének" érezni, ne pedig külön eszköznek. A zenét hallgatva engedje, hogy a szalag mintázatai a dallamot kövessék.
    `,
  },
  'beginner-guide': {
    title: 'Kezdők Útmutatója a Ritmikus Gimnasztikához',
    date: '2026. március 25.',
    image: '/blog-beginner-guide.jpg',
    content: `
      Érdekli a ritmikus gimnasztika, de nem tudja, hol kezdje? Ez az útmutató lépésről lépésre bemutatja, mire számíthat az első hetekben és hónapokban. Akár öt-, akár huszonöt évesen kezd, a folyamat hasonló — csak a tempó más.

      ## Mire van szüksége az induláshoz?

      - Kényelmes, testhez álló tornaruha (trikó vagy leotárd)
      - Csúszásmentes torna félcipő vagy zokni
      - Hajgumi és tűk (a hajat mindig kontyba kell fogni)
      - Vizes palack és törölköző
      - Türelem és nyitott hozzáállás

      ## Az első hét — Az alapok lerakása

      Az első héten ne várjon látványos eredményeket. A cél az, hogy a teste megismerkedjen az új mozdulatokkal. Az edzések során főleg ezeken dolgozunk:

      - Helyes testtartás és gerincmunka
      - Alapvető balletpozíciók (lábak és karok elhelyezése)
      - Egyszerű nyújtások és hajlékonysági tesztek
      - Ritmusérzék-fejlesztő tapsgyakorlatok

      ## Második és harmadik hét — Apparátusok megismerése

      Ekkor jönnek képbe az első eszközök. Általában a karikával vagy a labdával kezdünk, mert ezek a legkönnyebben kezelhetők. Megtanulja:

      - Az eszköz alaphelyzeteit és fogásait
      - Egyszerű gurításokat és átadásokat
      - Az eszköz és a testmozgás összehangolását
      - Rövid, 15-20 másodperces gyakorlatkombinációkat

      ## Első hónap utáni célok

      Egy hónap rendszeres edzés után már képesnek kell lennie egy 30-40 másodperces, egyszerű koreográfia bemutatására zenével. Nem versenyszinten — de már felismerhetően ritmikus gimnasztikaként.

      ## Hét leggyakoribb kezdő kérdés

      1. **Túl idős vagyok?** Hobby szinten szinte minden korban el lehet kezdeni — a felnőtt csoportok egyre népszerűbbek.
      2. **Rugalmasnak kell lennem már most?** Nem. A rugalmasság fejleszthető, nem előfeltétel.
      3. **Mennyi edzés kell?** Kezdőknek heti 2-3 alkalom, alkalmanként 60-90 perc.
      4. **Saját eszközöket kell vennem?** Eleinte nem — a klub általában biztosítja.
      5. **Fáj az edzés?** Nem szabad, hogy fájjon. Kellemes feszülést érez, de éles fájdalmat soha.
      6. **Mikor versenyezhetek?** Általában 6-12 hónap rendszeres edzés után, ha versenyezni szeretne.
      7. **Magántanár vagy klub?** Kezdőknek a klub csoportos formája jobb — közösség és motiváció szempontjából is.

      ## A legfontosabb tanács

      Ne hasonlítsa magát másokhoz. A ritmikus gimnasztika fejlődése nem lineáris — lesznek hetek, amikor robbanásszerűen halad, és olyanok is, amikor megáll. Ez normális. A kitartás többet ér, mint a tehetség.
    `,
  },
  'music-rhythm': {
    title: 'Zene és Ritmus a Gimnasztikában',
    date: '2026. április 2.',
    image: '/blog-music-rhythm.jpg',
    content: `
      A ritmikus gimnasztika nevében benne van a lényeg: a ritmus. A zene nem háttér, nem dekoráció — szerves része a teljesítménynek. Egy gyakorlat zenei értelmezése pontosan annyi pontot érhet egy bíró szemében, mint maga a technika. Lássuk, hogyan lehet a zenét és a mozgást igazán egységgé tenni.

      ## A zene szerepe a gyakorlatban

      A FIG (Nemzetközi Tornaszövetség) szabályai szerint a gyakorlatok 1 perc 15 másodperctől 1 perc 30 másodpercig tarthatnak. Ez nem sok idő — de egy jól választott és pontosan értelmezett zene varázslatosan ki tudja használni minden másodpercét. A zene határozza meg:

      - Az érzelmi karaktert (drámai, vidám, melankolikus)
      - A mozgás tempóját és energiáját
      - A koreográfia szerkezetét és csúcspontjait
      - A bemutató összhatását a közönségre

      ## A megfelelő zene kiválasztása

      A jó versenyzene általában világos szerkezetű, határozott ritmusú, és van benne legalább egy érzelmi csúcspont. Kerülendők a túl sűrű, kaotikus darabok és a túl egyhangú aláfestések. Klasszikus választások:

      - Filmzenék (érzelmi ívvel, drámai csúcspontokkal)
      - Tangó- és flamenco-feldolgozások (erős ritmus)
      - Modern instrumentális darabok
      - Hagyományos népzenei átiratok

      2022 óta már énekes zene is használható, ami sok új lehetőséget nyitott a koreográfusok számára.

      ## A ritmusértelmezés négy szintje

      1. **Tempókövetés** — A mozdulatok a zene tempójában történnek (alapszint)
      2. **Hangsúlyok megjelenítése** — A nagy elemek a zenei csúcspontokra esnek
      3. **Belső dinamika** — A mozgás minősége (lágy, éles, folyamatos) tükrözi a zene karakterét
      4. **Érzelmi átélés** — A versenyző arcjátéka és testbeszéde is a zenét közvetíti (mesteri szint)

      ## Gyakorlatok a zenei érzékenység fejlesztésére

      - Hallgassa meg a választott zenét legalább 50-szer, mielőtt koreográfiát készít rá
      - Tapsolja le a zenét — érezze meg a hangsúlyokat
      - Táncoljon szabadon a zenére, kötöttségek nélkül
      - Próbálja megfogalmazni szavakkal, mit „mond" a zene
      - Filmezze le magát, és nézze vissza hangtalanul — látszik-e a zene a mozgásán?

      ## A zenei vágás művészete

      A versenyzenéket szinte mindig vágni kell, hogy beleférjenek a megadott időkeretbe. Egy jó vágás:

      - Megőrzi a zene szerkezetét és érzelmi ívét
      - Nem hagy kínos, hirtelen átmeneteket
      - Pontosan ér véget egy markáns hangra
      - Hagy egy rövid „lélegzetvételnyi" szünetet a végén

      Érdemes profi zenei vágóhoz fordulni, ha lehetséges — egy rossz vágás akár fél ponttal is csökkentheti az értékelést.

      ## Záró gondolat

      Egy nagy gimnaszta nemcsak a zenére mozog — hanem zenévé válik. Ezt a szintet csak hosszú évek munkájával lehet elérni, de már most elkezdheti: hallgassa a zenét, érezze át, és engedje, hogy átjárja a mozdulatait.
    `,
  },
  'modern-trends': {
    title: 'Modern Trendek a Ritmikus Gimnasztikában',
    date: '2026. április 10.',
    image: '/blog-modern-trends.jpg',
    content: `
      A ritmikus gimnasztika nem statikus sport — az elmúlt évtizedben drámai fejlődésen ment keresztül. A pontozási szabályok átalakultak, új technikák jelentek meg, és a versenyzők szintje folyamatosan emelkedik. Lássuk, milyen tendenciák alakítják ma a sportágat.

      ## Az új pontozási rendszer hatásai

      A FIG 2022-es szabálymódosítása óta nagyobb hangsúly került a nehézségi elemekre és a kockázatvállalásra. Ez azt jelenti, hogy a sportolóknak több, technikailag bonyolult elemet kell egy gyakorlatba zsúfolniuk — ami fokozza a fizikai követelményeket. Egyúttal felértékelődött az „R" (risk) elemek szerepe: a dobás-elkapás kombinációk, ahol a sportoló a levegőben végez akrobatikus elemet, miközben az eszköz repül.

      ## Technikai újítások

      - **Eszközfejlesztés**: Az új generációs labdák és karikák könnyebbek, ugyanakkor strapabíróbbak. A szalagok speciális szatén anyagból készülnek, amely jobban tartja a formáját a levegőben.
      - **Videoelemzés**: A topcsapatok 4K-s, lassított felvételekkel elemzik az edzéseket. A hibák másodpercre pontosan azonosíthatók.
      - **Biomechanikai mérések**: Erőmérő platformok és mozgásérzékelők segítenek optimalizálni az ugrásokat és forgásokat.
      - **Mentális edzés**: A pszichológiai felkészítés ma már alapeleme a csúcsedzésnek — vizualizáció, légzéstechnikák, stresszkezelés.

      ## Művészi és koreográfiai trendek

      A modern koreográfiák egyre inkább elszakadnak a klasszikus balettos hagyománytól. Megjelennek a kortárs tánc, a kortárs jazz és a hip-hop elemek is. Az énekes zene engedélyezése (2022) teljesen új korszakot nyitott: ma már latin slágerekre, popdalokra, sőt akár filmes monológokra is készülnek gyakorlatok.

      Egyre több koreográfia mesél történetet — egy karaktert, egy érzést, egy hangulatot mutat be. A versenyzők színészi képességei is fontossá váltak.

      ## Versenytendenciák a topszinten

      - Hihetetlen mértékű rugalmasság (180 fok feletti spárgaugrások)
      - Több forgásból álló piruettkombinációk
      - Magas, kontrollált dobások — 8-10 méter magasságig
      - Folyamatos, „szünet nélküli" gyakorlatszerkesztés
      - A teljes terület kihasználása (a 13×13 méteres szőnyeg minden négyzetcentiméterén történik valami)

      ## Új nemzetek a térképen

      A hagyományos kelet-európai dominancia (Oroszország, Ukrajna, Belarusz, Bulgária) mellett egyre erősebbek az ázsiai csapatok — különösen Japán, Dél-Korea és Kína. Izrael az elmúlt években rendszeresen dobogós helyezéseket szerez, és Olaszország is visszatért az élvonalba. Magyarország is fejlődő pályán van: az utánpótlás-eredmények biztatóak.

      ## A jövő irányai

      - **Inkluzivitás**: Egyre több ország nyit a férfi ritmikus gimnasztika felé, és a felnőtt amatőr szcéna is bővül.
      - **Digitális közvetítések**: Az élő streaming és a közösségi média révén a sportág sokkal szélesebb közönséget ér el.
      - **Egészségvédelem**: A korábbi „bármi áron" hozzáállás helyett egyre nagyobb hangsúly kerül a sportolók fizikai és mentális egészségére, az étkezési zavarok megelőzésére.
      - **Fenntarthatóság**: A versenyek és edzőtáborok ökológiai lábnyomának csökkentése is napirendre kerül.

      ## Mit jelent ez a kezdő sportolóknak?

      A jó hír: soha nem volt ilyen sok információ és erőforrás elérhető. YouTube-on követheti a világ legjobbjainak edzéseit, online kurzusokon tanulhat, és a hazai klubok színvonala is gyorsan emelkedik. A követelmények ugyan magasak, de a fejlődés útja világosabb, mint valaha.
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
