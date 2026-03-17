import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ParallaxHero from "@/components/ParallaxHero";
import SeoSchema from "@/components/SeoSchema";
import { seo, toMetadata } from "@/lib/seo";

export const metadata: Metadata = toMetadata(seo.home);

const advantages = [
  {
    title: "Nezávislosť od verejného vodovodu",
    description:
      "S vlastnou studňou máte istotu stáleho prístupu k vode bez ohľadu na výpadky, obmedzenia či zvyšujúce sa ceny vodného a stočného. Je to ideálne riešenie pre domácnosti aj podniky, ktoré chcú byť samostatné.",
  },
  {
    title: "Nízke prevádzkové náklady",
    description:
      "Po zrealizovaní studne platíte už len minimálne náklady na chod čerpadla. V porovnaní s verejným vodovodom ide o výraznú dlhodobú úsporu, často s návratnosťou investície v priebehu niekoľkých rokov.",
  },
  {
    title: "Stabilná a kvalitná podzemná voda",
    description:
      "Voda z hlbších vrtov je prirodzene filtrovaná vrstvami hornín. Vo väčšine lokalít dosahuje výbornú kvalitu, často vhodnú aj na pitie po minimálnej úprave. Oproti povrchovým zdrojom je stabilná, chránená a menej náchylná na znečistenie.",
  },
  {
    title: "Spoľahlivosť aj počas sucha",
    description:
      "Vŕtané studne čerpajú vodu z hlbších podzemných vrstiev, ktoré nie sú tak citlivé na zrážky. Vďaka tomu poskytujú konštantný prietok aj v období extrémnych horúčav a dlhodobého sucha, keď kopané studne často vysychajú.",
  },
  {
    title: "Minimálny nárok na priestor",
    description:
      "Vrtná technika umožňuje realizovať studňu prakticky kdekoľvek, aj na menších pozemkoch. Viditeľná časť studne môže byť elegantne skrytá pod poklopom alebo v technickej šachte, takže nenarušuje vzhľad pozemku.",
  },
  {
    title: "Dlhá životnosť a nízka údržba",
    description:
      "Kvalitne prevedená vŕtaná studňa vydrží desiatky rokov. Pri správnej montáži, testovaní a vhodných materiáloch ide o investíciu, ktorú využívajú aj ďalšie generácie.",
  },
];

const advantageCardImages = [
  "gallery/external-new/vrtanie-studni01.jpg",
  "gallery/external-new/vrtanie-studni03.jpg",
  "gallery/external-new/vrtanie-studni04.jpg",
  "gallery/external-new/vrtanie-studni06.jpg",
  "gallery/external-new/vrtanie-studni10.jpg",
  "gallery/external-new/vrtanie-studni12.jpg",
];

const processSteps = [
  {
    step: 1,
    title: "Obhliadka a posúdenie lokality",
    description:
      "Odborník posúdi podmienky pozemku, dostupnosť techniky a možnosti umiestnenia vrtu. V prípade potreby sa vykoná hydrogeologický prieskum, ktorý určí predpokladanú hĺbku a výdatnosť vody.",
  },
  {
    step: 2,
    title: "Výber vhodného miesta pre vrt",
    description:
      "Miesto sa volí tak, aby bola studňa chránená pred zdrojmi znečistenia (septiky, hnojiská, žumpy) a aby bol prístupný terén pre vrtnú súpravu.",
  },
  {
    step: 3,
    title: "Samotné vŕtanie",
    description:
      "Pomocou vrtného stroja sa vyvŕta otvor do určenej hĺbky. Postupne sa odstraňujú vrstvy zeminy a hornín, až kým sa nedosiahne vodonosná vrstva.",
  },
  {
    step: 4,
    title: "Osadenie rúr",
    description:
      "Do vrtu sa osadia odolné PVC alebo oceľové rúry, ktoré zabezpečujú stabilitu a čistotu studne. Spodná časť obsahuje perforácie alebo filtre, ktoré umožňujú prítok vody.",
  },
  {
    step: 5,
    title: "Obsyp a cementácia",
    description:
      "Priestor medzi stenou vrtu a výstrojom sa zasype špeciálnym materiálom (štrkový obsyp), ktorý zlepšuje filtráciu. Následne sa vykoná cementácia horných úsekov vrtu na ochranu proti povrchovej vode.",
  },
  {
    step: 6,
    title: "Čerpanie a čistenie studne",
    description:
      "Po osadení sa studňa prečerpáva, aby sa prečistila a stabilizovala výdatnosť. Tento krok ukáže reálny prietok a celkovú kvalitu vrtu.",
  },
  {
    step: 7,
    title: "Montáž čerpadla a kompletáž",
    description:
      "Do studne sa osadí ponorné čerpadlo, elektrické vedenie a potrubie na rozvod vody.",
  },
  {
    step: 8,
    title: "Odovzdanie a skúška",
    description:
      "Zákazník dostane všetky dokumenty vrátane protokolu o čerpacej skúške. Po finálnom testovaní je studňa pripravená na plnohodnotnú prevádzku.",
  },
];

export default function HomePage() {
  return (
    <>
      <SeoSchema schema={seo.home.schema} />

      {/* Hero Section */}
      <ParallaxHero
        imageSrc="/images/gallery/external-new/vrtanie-studni05.jpg"
        imageAlt="Vŕtanie studní"
      >
        <div className="relative max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pb-20">
          <div>
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.04] mb-8">
                Vŕtanie studní LACNO. Dopravu neúčtujeme! Garancia nájdenia vody.
              </h1>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+421907872591"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-md text-lg transition-colors shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  0907 872 591
                </a>
                <a
                  href="mailto:kralik.mato@gmail.com"
                  className="inline-flex items-center justify-center gap-2 border border-white/35 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-md text-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  kralik.mato@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </ParallaxHero>

      {/* O nás */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">
                Vŕtanie studní nám prináša dobrý pocit, pretože našim produktom je vŕtaná studňa s ktorou:
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Radi by ste si našli vodu na svojom pozemku, zbavili ručného zavlažovania alebo neboli závislí na verejnom vodovode ste na správnej adrese. Verejné vodovody sú neekonomické a práve preto Vám ponúkame vŕtané studne.
                </p>
                <p>
                  Každý dom potrebuje vodu. Či starý, nový alebo zrekonštruovaný. Ak vo svojej lokalite nemáme verejný vodovod situáciu musíte riešiť vlastnou studňou. A presne tu ste na správnej adrese.
                </p>
                <p>
                  Vŕtanie studní realizujeme na celom Slovensku ale hlavne v mestách Banská Bystrica, Zvolen, Detva a Brezno. Samozrejme aj v okolitých mestách a obciach stredného Slovenska.
                </p>
                <p>
                  Studne tiež vŕtame v{" "}
                  <Link href="/mesta1" className="text-primary hover:text-primary-dark underline">
                    Banskej Štiavnici, Žarnovici a Žiari nad Hronom
                  </Link>.{" "}
                  Naše realizácie studní môžete vidieť tiež v mestách{" "}
                  <Link href="/mesta2" className="text-primary hover:text-primary-dark underline">
                    Lučenec a Rimavská Sobota
                  </Link>.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-md p-5 shadow-[0_1px_10px_-2px_rgba(0,0,0,0.06)]">
                  <div className="mb-2">
                    <Image src="/images/1.svg" alt="" width={40} height={40} className="h-10 w-10" />
                  </div>
                  <p className="text-dark font-medium">Už doživotne nebudete musieť platiť žiadne náklady za spotrebovanú vodu!</p>
                </div>
                <div className="bg-white rounded-md p-5 shadow-[0_1px_10px_-2px_rgba(0,0,0,0.06)]">
                  <div className="mb-2">
                    <Image src="/images/2.svg" alt="" width={40} height={40} className="h-10 w-10" />
                  </div>
                  <p className="text-dark font-medium">Máte dostatok vody aj v suchých letných mesiacoch</p>
                </div>
                <div className="bg-white rounded-md p-5 shadow-[0_1px_10px_-2px_rgba(0,0,0,0.06)]">
                  <div className="mb-2">
                    <Image src="/images/3-1.svg" alt="" width={40} height={40} className="h-10 w-10" />
                  </div>
                  <p className="text-dark font-medium">Získate kvalitný zdroj pitnej a úžitkovej vody</p>
                </div>
                <div className="bg-white rounded-md p-5 shadow-[0_1px_10px_-2px_rgba(0,0,0,0.06)]">
                  <div className="mb-2">
                    <Image src="/images/4.svg" alt="" width={40} height={40} className="h-10 w-10" />
                  </div>
                  <p className="text-dark font-medium">Ste nezávislý od lokálneho vodovodného systému</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/gallery/external-new/vrtanie-studni05.jpg"
                alt="Vŕtanie studní"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vŕtanie studní zahŕňa */}
      <section className="py-16 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/gallery/external-new/vrtanie-studni01.jpg"
                alt="Vŕtanie studní - realizácia"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="bg-gray-light rounded-md p-6 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] mb-6">
                <h3 className="text-xl font-bold text-dark mb-4 border-l-2 border-primary pl-4">
                  Vŕtanie studní zahŕňa
                </h3>
                <ul className="space-y-3">
                  {[
                    "vŕtanie studní",
                    "hľadanie vody, hydrogeologické prieskumy",
                    "kopanie studní",
                    "zemné a výkopové práce",
                    "vŕtanie pilotáží + ploty",
                    "úpravy terénu",
                    "demolačné a búracie práce",
                    "náklad a odvoz odpadu zo staveniska",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-light rounded-md p-6 border-l-4 border-primary mb-6">
                <h3 className="font-bold text-dark mb-2">Dopravu neúčtujeme v rámci celej SR</h3>
                <p className="text-gray-700 text-sm">
                  V rámci celej Slovenskej republiky neúčtujeme dopravu vrtnej súpravy na miesto realizácie vŕtanej studne.
                </p>
              </div>

              <div className="bg-gray-light rounded-md p-6 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)]">
                <h3 className="font-bold text-dark mb-2">Garancia nájdenia vody!</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Vŕtanie studní vykonávame takpovediac na kľúč. Používame kvalitnú vrtnú súpravu s pásovým pohonom, takže pre nás nie je problémom žiadny obtiažny terén. Vŕtanie studní vykonávame do všetkých druhov hornín s garanciou nájdenia vody. Ak Vám vodu nenájdeme, neplatíte ani euro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-dark mb-4">
            Výhody vŕtanej studne
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Vŕtaná studňa je moderný a spoľahlivý spôsob ako získať vlastný
            zdroj kvalitnej vody
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-md p-6 min-h-[210px] shadow-[0_2px_20px_-4px_rgba(0,0,0,0.22)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.35)] transition-shadow"
              >
                <Image
                  src={`/images/${advantageCardImages[index % advantageCardImages.length]}`}
                  alt={`Výhoda vŕtanej studne ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(170deg,rgba(0,0,0,0.28),rgba(0,0,0,0.72))]" />

                <div className="relative z-10 flex items-start gap-3">
                  <span className="rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold text-sm border border-white/65 bg-white/15 text-white">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-dark mb-4">
            Postup vŕtania studne
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Od prvej obhliadky až po odovzdanie hotovej studne
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "gallery/external-new/vrtanie-studni04.jpg",
              "gallery/external-new/vrtanie-studni12.jpg",
            ].map((img, index) => (
              <div
                key={index}
                className="relative h-52 rounded-md overflow-hidden"
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Vŕtanie studní - postup ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-md p-6 text-center shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow"
              >
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
