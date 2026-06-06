import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Search, ShoppingBag, X } from "lucide-react";

const signaturePieces = [
  {
    id: "casino-gold",
    name: "Casino Gold",
    line: "Evening presence",
    description:
      "Black stone, tiger-eye warmth and a gold-toned detail. A piece built for dinners, dark shirts and quiet confidence.",
    price: 98,
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "oslo-lapis",
    name: "Oslo Lapis Gold",
    line: "Mineral blue",
    description:
      "Deep blue lapis-inspired stones with gold contrast. A sharper expression of Latin mineral color.",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "pacha-silver",
    name: "Pacha Silver",
    line: "Daily precision",
    description:
      "A cleaner silver piece made for white shirts, watches and everyday elegance without noise.",
    price: 62,
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1400&q=90",
  },
];

const products = [
  {
    id: 1,
    name: "Pacha Blue Plata",
    material: "Blue cord · silver detail",
    category: "Essentials",
    price: 62,
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 2,
    name: "Pacha Plata",
    material: "Clear stone · silver clasp",
    category: "Essentials",
    price: 62,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 3,
    name: "Ku Plata",
    material: "Silver · limited finish",
    category: "Signature",
    price: 62,
    image:
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 4,
    name: "Casino Gold",
    material: "Tiger eye · gold detail",
    category: "Signature",
    price: 98,
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 5,
    name: "Oslo Lapis Gold",
    material: "Lapis tone · gold accent",
    category: "Limited",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 6,
    name: "Jacques Oro",
    material: "Mixed stones · gold detail",
    category: "Limited",
    price: 108,
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=90",
  },
];

const categories = ["All", "Essentials", "Signature", "Limited"];

const materials = [
  {
    number: "01",
    name: "Lapis tone",
    text: "Deep mineral blue with visual weight. Designed to feel elegant, masculine and distinctive.",
  },
  {
    number: "02",
    name: "Tiger eye",
    text: "Warm brown and gold movement. A stone language that works especially well at night.",
  },
  {
    number: "03",
    name: "Silver detail",
    text: "Clean, cold and precise. The element that gives structure to the piece.",
  },
  {
    number: "04",
    name: "Gold contrast",
    text: "Used as accent, never excess. A warmer point of attention inside a sober silhouette.",
  },
];

const packagingItems = [
  "Rigid jewelry box",
  "Soft protective pouch",
  "Care card",
  "Discreet outer shipping box",
];

function SectionLabel({ children }) {
  return <p className="text-[11px] font-bold uppercase tracking-normal text-[#9b7844]">{children}</p>;
}

function EditorialButton({ children, href = "#collection", dark = false }) {
  return (
    <a
      href={href}
      className={`group inline-flex h-[52px] w-full items-center justify-between gap-5 border px-5 text-[11px] font-bold uppercase tracking-normal transition sm:w-auto sm:px-6 ${
        dark
          ? "border-[#15120f] bg-[#15120f] text-[#efe7d8] hover:bg-transparent hover:text-[#15120f]"
          : "border-[#15120f]/35 text-[#15120f] hover:border-[#15120f] hover:bg-[#15120f] hover:text-[#efe7d8]"
      }`}
    >
      {children}
      <ArrowRight size={16} className="transition group-hover:translate-x-1" />
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#efe7d8] text-[#15120f] selection:bg-[#15120f] selection:text-[#efe7d8]">
      <div className="fixed left-0 top-0 z-[70] h-[5px] w-full bg-[#15120f]" />

      <header className="sticky top-[5px] z-50 border-b border-[#15120f]/15 bg-[#efe7d8]/95 backdrop-blur-xl">
        <div className="mx-auto grid max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-4 py-4 sm:px-5 lg:px-10 lg:py-5">
          <a href="#" className="min-w-0 justify-self-start">
            <p className="font-serif text-2xl uppercase leading-none tracking-normal">Auralia</p>
            <p className="mt-1 text-[10px] uppercase tracking-normal text-[#15120f]/50">Santiago · Berlin</p>
          </a>

          <nav className="hidden items-center gap-10 text-[11px] font-bold uppercase tracking-normal text-[#15120f]/68 lg:flex">
            <a href="#manifesto" className="transition hover:text-[#15120f]">Manifesto</a>
            <a href="#signature" className="transition hover:text-[#15120f]">Signature</a>
            <a href="#materials" className="transition hover:text-[#15120f]">Materials</a>
            <a href="#shipping" className="transition hover:text-[#15120f]">Delivery</a>
          </nav>

          <div className="hidden justify-self-end lg:flex">
            <button className="grid h-12 w-12 place-items-center border border-[#15120f]/25 transition hover:border-[#15120f] hover:bg-[#15120f] hover:text-[#efe7d8]">
              <Search size={17} />
            </button>
            <button className="ml-3 flex h-12 items-center gap-3 border border-[#15120f] bg-[#15120f] px-6 text-[11px] font-bold uppercase tracking-normal text-[#efe7d8] transition hover:bg-transparent hover:text-[#15120f]">
              <ShoppingBag size={16} />
              Collection
            </button>
          </div>

          <button
            className="justify-self-end border border-[#15120f]/30 p-3 lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Open menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#15120f]/15 px-5 py-6 lg:hidden">
            <nav className="grid gap-5 text-[12px] font-bold uppercase tracking-normal text-[#15120f]/70">
              <a href="#manifesto" onClick={() => setMenuOpen(false)}>Manifesto</a>
              <a href="#signature" onClick={() => setMenuOpen(false)}>Signature</a>
              <a href="#materials" onClick={() => setMenuOpen(false)}>Materials</a>
              <a href="#shipping" onClick={() => setMenuOpen(false)}>Delivery</a>
            </nav>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-[1600px] px-4 py-6 sm:px-5 sm:py-8 lg:px-10 lg:py-12">
        <div className="grid min-h-0 border border-[#15120f]/18 lg:min-h-[790px] lg:grid-cols-[1.04fr_0.96fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="min-w-0 border-b border-[#15120f]/18 p-5 sm:flex sm:flex-col sm:justify-between sm:p-6 md:p-10 lg:border-b-0 lg:border-r lg:p-14"
          >
            <div className="grid gap-3 border-b border-[#15120f]/15 pb-6 text-[10px] font-bold uppercase tracking-normal text-[#15120f]/48 sm:grid-cols-2 sm:gap-4 sm:pb-8">
              <p>Men’s jewelry atelier</p>
              <p className="sm:text-right">Limited European release</p>
            </div>

            <div className="py-10 sm:py-14 md:py-20 lg:py-24">
              <p className="mb-7 inline-flex max-w-full border border-[#15120f]/25 px-3 py-2 text-[10px] font-bold uppercase leading-5 tracking-normal text-[#15120f]/62 sm:mb-8 sm:px-4">
                Small-batch pieces · stocked in Germany
              </p>
              <h1 className="max-w-5xl font-serif text-[2.65rem] font-normal uppercase leading-[0.9] tracking-normal min-[360px]:text-[3rem] sm:text-[4.5rem] sm:leading-[0.82] md:text-[6.6rem] lg:text-[4.8rem] xl:text-[5.8rem] min-[1400px]:text-[6.8rem] 2xl:text-[7.2rem]">
                No es
                <br />
                adorno.
                <br />
                Es<span className="hidden sm:inline"> </span>
                <br className="sm:hidden" />
                presencia.
              </h1>

              <div className="mt-8 grid max-w-4xl gap-6 sm:mt-10 md:grid-cols-[0.38fr_1fr] md:gap-8">
                <p className="border-l border-[#15120f] pl-4 text-[11px] font-bold uppercase leading-5 tracking-normal text-[#15120f]/56">
                  Latin character
                  <br />
                  European finish
                </p>
                <p className="max-w-2xl text-base leading-7 text-[#15120f]/66 sm:text-lg sm:leading-8">
                  Pulseras de edición limitada para hombres. Piedras naturales, plata y detalles dorados. Diseñadas con carácter latino y enviadas desde Alemania.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-[auto_auto_1fr] sm:items-center">
              <EditorialButton dark href="#signature">Ver piezas</EditorialButton>
              <EditorialButton href="#manifesto">La historia</EditorialButton>
              <p className="text-left text-[10px] font-bold uppercase tracking-normal text-[#15120f]/42 sm:text-right">
                Luxury packaging · tracked EU delivery
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="relative min-h-[520px] min-w-0 bg-[#15120f] p-4 sm:min-h-[580px] sm:p-6 md:p-10 lg:min-h-[660px]"
          >
            <div className="absolute left-4 top-4 z-20 bg-[#efe7d8] px-4 py-3 text-[10px] font-bold uppercase tracking-normal text-[#15120f] sm:left-6 sm:top-6 md:left-10 md:top-10">
              Signature piece
            </div>
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1600&q=90"
              alt="Luxury bracelet on dark editorial background"
              className="h-full min-h-[500px] w-full object-cover opacity-92 grayscale-[8%] sm:min-h-[540px] lg:min-h-[610px]"
            />
            <div className="absolute bottom-4 left-4 right-4 z-20 grid border border-[#efe7d8]/25 bg-[#15120f]/86 text-[#efe7d8] backdrop-blur sm:bottom-6 sm:left-6 sm:right-6 md:bottom-10 md:left-10 md:right-10 md:grid-cols-[1fr_auto]">
              <div className="p-4 sm:p-5 md:p-7">
                <p className="text-[10px] font-bold uppercase tracking-normal text-[#d7b46a]">Casino Gold</p>
                <h2 className="mt-2 font-serif text-3xl uppercase tracking-normal sm:text-4xl md:text-5xl">Evening presence</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#efe7d8]/66">
                  Black stone, tiger-eye contrast and a warm gold-toned center detail.
                </p>
              </div>
              <div className="flex items-center border-t border-[#efe7d8]/20 p-4 sm:p-5 md:border-l md:border-t-0 md:p-7">
                <p className="font-serif text-4xl sm:text-5xl">€98</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="manifesto" className="mx-auto max-w-[1600px] px-5 py-14 lg:px-10 lg:py-24">
        <div className="grid border-y border-[#15120f]/18 py-14 lg:grid-cols-[0.4fr_1fr] lg:py-20">
          <div>
            <SectionLabel>Manifesto</SectionLabel>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl font-serif text-4xl uppercase leading-[1] tracking-normal sm:text-5xl md:text-7xl lg:text-8xl"
            >
              Para hombres que no necesitan llamar la atención, pero siempre la tienen.
            </motion.p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <p className="text-base leading-7 text-[#15120f]/64 sm:text-lg sm:leading-8">
                Cada pieza está hecha para acompañar presencia: una camisa abierta, una cena tarde, una reunión importante, un viaje, una noche que se recuerda.
              </p>
              <p className="text-base leading-7 text-[#15120f]/64 sm:text-lg sm:leading-8">
                No hacemos accesorios masivos. Hacemos piezas de carácter: sobrias, minerales, táctiles y pensadas para vender identidad antes que decoración.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="signature" className="mx-auto max-w-[1600px] px-5 py-14 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr]">
          <aside className="min-w-0 lg:sticky lg:top-28 lg:h-fit">
            <SectionLabel>The signature three</SectionLabel>
            <h2 className="mt-5 max-w-md font-serif text-4xl uppercase leading-[0.98] tracking-normal min-[360px]:text-5xl sm:text-6xl md:text-7xl">
              Start with desire. Not inventory.
            </h2>
            <p className="mt-7 max-w-sm text-base leading-7 text-[#15120f]/62">
              Primero se muestran las tres piezas que definen la marca. Después el catálogo completo. Eso crea jerarquía, escasez y percepción de lujo.
            </p>
          </aside>

          <div className="grid min-w-0 gap-px border border-[#15120f]/18 bg-[#15120f]/18 lg:grid-cols-3">
            {signaturePieces.map((piece, index) => (
              <motion.article
                key={piece.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group min-w-0 bg-[#efe7d8]"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#15120f]">
                  <img
                    src={piece.image}
                    alt={piece.name}
                    className="h-full w-full object-cover opacity-94 transition duration-700 group-hover:scale-[1.04] group-hover:grayscale"
                  />
                  <div className="absolute left-0 top-0 bg-[#efe7d8] px-4 py-3 text-[10px] font-bold uppercase tracking-normal text-[#15120f]">
                    {piece.line}
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                    <div className="min-w-0">
                      <h3 className="font-serif text-3xl uppercase leading-none tracking-normal">{piece.name}</h3>
                      <p className="mt-4 text-sm leading-6 text-[#15120f]/58">{piece.description}</p>
                    </div>
                    <p className="font-serif text-4xl">€{piece.price}</p>
                  </div>
                  <button className="mt-7 flex h-12 w-full items-center justify-between border border-[#15120f] px-4 text-[11px] font-bold uppercase tracking-normal transition hover:bg-[#15120f] hover:text-[#efe7d8]">
                    Reserve piece
                    <ArrowRight size={15} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#15120f] text-[#efe7d8]">
        <div className="mx-auto grid max-w-[1600px] border-y border-[#efe7d8]/15 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="min-h-[420px] min-w-0 p-4 sm:min-h-[520px] sm:p-6 md:p-10 lg:min-h-[620px]">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1600&q=90"
              alt="Jewelry editorial texture"
              className="h-full w-full object-cover opacity-88 grayscale-[10%]"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center border-t border-[#efe7d8]/15 p-5 sm:p-7 md:p-12 lg:border-l lg:border-t-0 lg:p-16">
            <p className="text-[11px] font-bold uppercase tracking-normal text-[#d7b46a]">Origin</p>
            <h2 className="mt-5 max-w-4xl font-serif text-4xl uppercase leading-[0.98] tracking-normal min-[360px]:text-5xl sm:text-6xl md:text-8xl">
              Born from Latin contrast. Finished for Europe.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-7 text-[#efe7d8]/62 sm:text-lg sm:leading-8">
              Auralia nace de una idea simple: la joyería masculina no tiene por qué ser ruidosa para ser poderosa. Tomamos color mineral, calidez metálica y una silueta sobria pensada para el ojo europeo.
            </p>
          </div>
        </div>
      </section>

      <section id="materials" className="mx-auto max-w-[1600px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[0.4fr_1fr]">
          <div className="min-w-0">
            <SectionLabel>Materials with weight</SectionLabel>
            <h2 className="mt-5 max-w-md font-serif text-4xl uppercase leading-[0.98] tracking-normal min-[360px]:text-5xl sm:text-6xl md:text-7xl">
              Raw luxury, controlled.
            </h2>
          </div>

          <div className="grid min-w-0 gap-px border border-[#15120f]/18 bg-[#15120f]/18 md:grid-cols-2">
            {materials.map((material) => (
              <div key={material.number} className="min-w-0 bg-[#efe7d8] p-6 md:p-9">
                <p className="font-serif text-5xl text-[#9b7844] sm:text-6xl">{material.number}</p>
                <h3 className="mt-7 font-serif text-3xl uppercase tracking-normal sm:mt-8 sm:text-4xl">{material.name}</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-[#15120f]/58">{material.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-20 lg:px-10 lg:pb-28">
        <div className="grid min-w-0 border border-[#15120f]/18 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex min-w-0 flex-col justify-center p-5 sm:p-7 md:p-12 lg:p-16">
            <SectionLabel>The gift ritual</SectionLabel>
            <h2 className="mt-5 max-w-4xl font-serif text-4xl uppercase leading-[0.98] tracking-normal min-[360px]:text-5xl sm:text-6xl md:text-8xl">
              Por fuera, discreto. Por dentro, memorable.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-7 text-[#15120f]/64 sm:text-lg sm:leading-8">
              Cada pieza debe sentirse lista para regalar: caja rígida, pouch protector, tarjeta de cuidado y empaque exterior sobrio para seguridad durante el envío.
            </p>
            <div className="mt-10 grid gap-px border border-[#15120f]/18 bg-[#15120f]/18 md:grid-cols-2">
              {packagingItems.map((item) => (
                <div key={item} className="bg-[#efe7d8] p-5 text-[11px] font-bold uppercase tracking-normal text-[#15120f]/62">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-[420px] min-w-0 bg-[#15120f] p-4 sm:min-h-[520px] sm:p-6 md:p-10 lg:min-h-[620px]">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1600&q=90"
              alt="Luxury jewelry packaging concept"
              className="h-full w-full object-cover opacity-92"
            />
          </div>
        </div>
      </section>

      <section id="shipping" className="border-y border-[#15120f]/18 bg-[#e4dac8]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 lg:px-10 lg:py-28">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="min-w-0">
              <SectionLabel>European distribution</SectionLabel>
              <h2 className="mt-5 max-w-5xl font-serif text-4xl uppercase leading-[0.98] tracking-normal min-[360px]:text-5xl sm:text-6xl md:text-8xl">
                Stock in Germany. Delivery across Europe.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-[#15120f]/62 sm:text-lg sm:leading-8">
                La colección europea se distribuye desde Alemania para ofrecer tracking, tiempos más rápidos y una experiencia de compra más confiable dentro de la Unión Europea.
              </p>
            </div>
            <EditorialButton dark href="#collection">See full collection</EditorialButton>
          </div>

          <div className="mt-14 grid min-w-0 gap-px border border-[#15120f]/18 bg-[#15120f]/18 md:grid-cols-4">
            {["Shipped from Germany", "Tracked delivery", "EU returns", "Secure checkout"].map((item) => (
              <div key={item} className="bg-[#e4dac8] p-6 text-[11px] font-bold uppercase tracking-normal text-[#15120f]/62">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="collection" className="mx-auto max-w-[1600px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr]">
          <aside className="min-w-0 lg:sticky lg:top-28 lg:h-fit">
            <SectionLabel>Full collection</SectionLabel>
            <h2 className="mt-5 max-w-md font-serif text-4xl uppercase leading-[0.98] tracking-normal min-[360px]:text-5xl sm:text-6xl md:text-7xl">
              Choose the piece that speaks before you do.
            </h2>
            <p className="mt-7 max-w-sm text-base leading-7 text-[#15120f]/62">
              Categorías simples, precio claro y CTA menos agresivo. La sensación debe ser “reservar una pieza”, no “meter producto al carrito”.
            </p>

            <div className="mt-9 grid gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex h-[52px] items-center justify-between border px-5 text-left text-[11px] font-bold uppercase tracking-normal transition ${
                    activeCategory === category
                      ? "border-[#15120f] bg-[#15120f] text-[#efe7d8]"
                      : "border-[#15120f]/25 text-[#15120f]/65 hover:border-[#15120f]"
                  }`}
                >
                  {category}
                  <ArrowRight size={15} />
                </button>
              ))}
            </div>

            <button className="mt-8 flex h-[52px] w-full items-center justify-between border border-[#15120f]/25 px-5 text-[11px] font-bold uppercase tracking-normal text-[#15120f]/62 hover:border-[#15120f]">
              Sort by collection
              <ChevronDown size={16} />
            </button>
          </aside>

          <div className="grid min-w-0 gap-px border border-[#15120f]/18 bg-[#15120f]/18 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: index * 0.045 }}
                className="group min-w-0 bg-[#efe7d8]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#15120f]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045] group-hover:grayscale"
                  />
                  <div className="absolute left-0 top-0 bg-[#efe7d8] px-4 py-3 text-[10px] font-bold uppercase tracking-normal text-[#15120f]">
                    {product.category}
                  </div>
                </div>
                <div className="border-t border-[#15120f]/18 p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                    <div className="min-w-0">
                      <h3 className="font-serif text-2xl uppercase leading-none tracking-normal">{product.name}</h3>
                      <p className="mt-3 text-sm text-[#15120f]/52">{product.material}</p>
                    </div>
                    <p className="font-serif text-3xl">€{product.price}</p>
                  </div>
                  <button className="mt-6 flex h-12 w-full items-center justify-between border border-[#15120f] px-4 text-[11px] font-bold uppercase tracking-normal transition hover:bg-[#15120f] hover:text-[#efe7d8]">
                    View piece
                    <ArrowRight size={15} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#15120f] text-[#efe7d8]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 text-center lg:px-10 lg:py-28">
          <p className="text-[11px] font-bold uppercase tracking-normal text-[#d7b46a]">Final invitation</p>
          <h2 className="mx-auto mt-6 max-w-5xl font-serif text-4xl uppercase leading-[0.98] tracking-normal min-[360px]:text-5xl sm:text-6xl md:text-8xl">
            Elige la pieza que habla antes que tú.
          </h2>
          <div className="mt-10 flex justify-center">
            <a
              href="#signature"
              className="inline-flex h-[56px] w-full max-w-sm items-center justify-between gap-6 border border-[#efe7d8] px-6 text-[11px] font-bold uppercase tracking-normal transition hover:bg-[#efe7d8] hover:text-[#15120f] sm:w-auto sm:px-8"
            >
              Explore signature pieces
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#15120f]/18 px-5 py-8 lg:px-10">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-5 text-[10px] font-bold uppercase tracking-normal text-[#15120f]/48 md:flex-row md:items-center">
          <p>© 2026 Auralia Jewelry Studio</p>
          <div className="flex flex-wrap gap-6">
            <a href="#">Instagram</a>
            <a href="#">Contact</a>
            <a href="#">Shipping</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
