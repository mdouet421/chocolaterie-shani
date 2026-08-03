import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

export const Route = createFileRoute("/(prototype)/")({
  component: HomePage,
});

const NAV = [
  { label: "L'histoire", href: "#histoire" },
  { label: "Les créations", href: "#creations" },
  { label: "Le sourcing", href: "#sourcing" },
  { label: "Contact", href: "#contact" },
];

const CREATIONS = [
  {
    name: "Amandettes",
    card: "bg-honey/25 border-honey/50",
    chip: "bg-honey text-cocoa-deep",
    img: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=1000&q=80",
    alt: "Amandes torréfiées enrobées de chocolat noir",
    desc: "Des amandes torréfiées, trempées une à une dans un chocolat tempéré, avec une touche de fleur de sel.",
    note: "amande · fleur de sel",
  },
  {
    name: "Orangettes",
    card: "bg-orange-zest/20 border-orange-zest/50",
    chip: "bg-orange-zest text-cream",
    img: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1000&q=80",
    alt: "Lamelles d'orange confite trempées dans du chocolat noir",
    desc: "Des écorces d'orange confites, plongées dans un chocolat noir tempéré, franches et parfumées.",
    note: "orange confite · chocolat noir",
  },
  {
    name: "Pralinettes",
    card: "bg-leaf/25 border-leaf/50",
    chip: "bg-olive-deep text-cream",
    img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1000&q=80",
    alt: "Bouchées de praliné dans une coque de chocolat au lait",
    desc: "Un praliné maison de noisettes et d'amandes, blotti dans une fine coque de chocolat au lait.",
    note: "praliné maison · chocolat au lait",
  },
];

const SOURCING = [
  {
    title: "Le chocolat",
    from: "Kaoka",
    body: "Un cacao cultivé dans le respect de l'environnement et des producteurs, tracé jusqu'à la fève.",
    card: "bg-chocolate text-cream",
    dot: "bg-honey",
    fromColor: "text-honey",
    bodyColor: "text-cream/80",
  },
  {
    title: "Amandes & noisettes",
    from: "petits producteurs",
    body: "Choisies avec soin auprès de filières bio. La sélection s'affine au fil des rencontres.",
    card: "bg-honey/30 text-cocoa-deep",
    dot: "bg-orange-zest",
    fromColor: "text-orange-zest",
    bodyColor: "text-cocoa/80",
  },
  {
    title: "Les oranges bio",
    from: "au marché",
    body: "Cueillies chez le maraîcher du coin, confites patiemment avant leur bain de chocolat.",
    card: "bg-orange-zest/25 text-cocoa-deep",
    dot: "bg-strawberry",
    fromColor: "text-strawberry",
    bodyColor: "text-cocoa/80",
  },
];

function ImageFrame({
  src,
  alt,
  className,
  tint,
}: {
  src: string;
  alt: string;
  className?: string;
  tint: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden ${tint} ${className ?? ""}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-display text-cocoa/40 text-2xl">Les Pépites</span>
        </div>
      )}
    </div>
  );
}

function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className ?? ""}`}
    >
      {children}
    </section>
  );
}

function HomePage() {
  return (
    <div className="bg-background text-foreground min-h-dvh">
      {/* Header */}
      <header className="border-cocoa/10 bg-white/90 sticky top-0 z-50 border-b backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/logo-shani.jpeg"
              alt="Les Pépites de Shani, atelier chocolaté"
              className="border-cocoa/10 h-11 w-11 rounded-full border object-cover"
            />
            <span className="font-display text-forest hidden text-lg leading-none sm:block">
              Les Pépites de Shani
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-cocoa/70 hover:text-forest text-sm font-medium transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="bg-forest hover:bg-olive-deep rounded-full px-5 py-2 text-sm font-semibold text-cream transition-colors"
          >
            Commander
          </a>
        </div>
      </header>

      {/* Hero */}
      <div id="top" className="relative overflow-hidden">
        {/* Confetti pépites */}
        <span className="bg-leaf animate-gentle-float pointer-events-none absolute top-[45%] left-[3%] hidden h-6 w-6 rounded-full lg:block [animation-delay:1.5s]" aria-hidden />
        <span className="bg-honey animate-gentle-float pointer-events-none absolute bottom-24 left-[15%] hidden h-3 w-3 rounded-full md:block [animation-delay:2.2s]" aria-hidden />
        <Section className="relative grid items-center gap-12 pt-16 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24 lg:pb-28">
          <div className="max-w-xl">
            <span className="bg-leaf/30 border-olive/40 text-olive-deep inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase">
              <span className="bg-orange-zest h-2 w-2 rounded-full" aria-hidden />
              Atelier chocolaté · Bio · Éthique · fait main
            </span>
            <h1 className="font-display text-forest mt-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              De petits chocolats,
              <br />
              faits avec le{" "}
              <span className="relative inline-block text-orange-zest">
                cœur
                <span
                  className="bg-honey/60 absolute -bottom-1 left-0 h-3 w-full -rotate-1 rounded-full"
                  aria-hidden
                />
              </span>
              .
            </h1>
            <p className="text-cocoa/80 mt-6 text-lg leading-relaxed">
              Trois recettes, choisies avec soin. Du cacao éthique, des fruits
              bio et beaucoup de patience. Des cadeaux gourmands qui régalent
              tout le monde.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#creations"
                className="bg-forest hover:bg-olive-deep rounded-full px-7 py-3 font-semibold text-cream transition-colors"
              >
                Découvrir les créations
              </a>
              <a
                href="#histoire"
                className="border-forest text-forest hover:bg-forest/10 rounded-full border px-7 py-3 font-semibold transition-colors"
              >
                Rencontrer Shani
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="bg-leaf/40 absolute inset-0 -rotate-6 rounded-[2.5rem]" aria-hidden />
            <div className="bg-blush/70 absolute inset-0 rotate-3 rounded-[2.5rem]" aria-hidden />
            <div className="border-cocoa/10 bg-white relative rounded-[2.5rem] border p-6 shadow-[0_30px_60px_-30px_rgba(60,40,20,0.35)]">
              <img
                src="/logo-shani.jpeg"
                alt="Le portrait illustré de Shani, cheveux verts et béret de chef"
                className="w-full rounded-[2rem] object-cover"
              />
              <span className="bg-orange-zest text-cream animate-gentle-float absolute -top-4 -right-4 flex h-16 w-16 rotate-6 items-center justify-center rounded-full text-center text-xs font-bold leading-tight shadow-lg">
                100%
                <br />
                maison
              </span>
            </div>
          </div>
        </Section>
      </div>

      {/* Story */}
      <div className="bg-white">
      <Section id="histoire" className="relative py-20 lg:py-28">
        <div className="relative flex flex-col gap-12 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="sticky top-24 lg:self-start">
            <p className="bg-leaf/25 text-forest inline-block rounded-full px-3 py-1 text-sm font-semibold tracking-widest uppercase">
              L'histoire
            </p>
            <h2 className="font-display text-forest mt-4 text-4xl leading-tight sm:text-5xl">
              Je m'appelle Shani, et j'aime faire{" "}
              <span className="text-strawberry">plaisir</span>.
            </h2>
          </div>
          <div className="text-cocoa/85 space-y-5 text-lg leading-relaxed">
            <p>
              J'ai 25 ans, je suis ingénieure, et je suis curieuse de tout. En
              décembre 2024, je me suis mise à faire de petits chocolats pour les
              fêtes de Noël. Offrir des cadeaux faits maison qui régalaient tout
              le monde m'a rendue si heureuse que je n'ai plus voulu m'arrêter.
            </p>
            <p>
              Alors je me lance dans cette aventure de chocolaterie : apprendre
              l'auto-entrepreneuriat, gérer les achats, les ventes… tout ce
              nouveau monde, doucement mais sûrement.
            </p>
            <blockquote className="bg-honey/35 text-forest my-8 rounded-3xl px-7 py-6 font-display text-2xl leading-snug italic">
              « Je préfère le bouche à oreille aux grandes stratégies :
              commencer sans pression, et garder ce côté passion. »
            </blockquote>
            <p>
              Je travaille encore en parallèle, et c'est très bien ainsi : cet
              atelier avance à son rythme, porté par l'envie et la gourmandise.
              Merci d'en faire partie.
            </p>
          </div>
        </div>
      </Section>
      </div>

      {/* Creations */}
      <div className="bg-sage/40">
        <Section id="creations" className="py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="bg-orange-zest/20 text-orange-zest inline-block rounded-full px-3 py-1 text-sm font-semibold tracking-widest uppercase">
              Les créations
            </p>
            <h2 className="font-display text-forest mt-4 text-4xl leading-tight sm:text-5xl">
              J'ouvre avec{" "}
              <span className="text-orange-zest">trois recettes</span>.
            </h2>
            <p className="text-cocoa/75 mt-4 text-lg">
              Juste trois, mais faites avec attention. Chaque bouchée est
              trempée et tempérée à la main.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {CREATIONS.map((c, i) => (
              <article
                key={c.name}
                className={`group flex flex-col overflow-hidden rounded-3xl border transition-transform duration-500 ease-out hover:-translate-y-2 ${c.card}`}
              >
                <div className="relative">
                  <ImageFrame
                    src={c.img}
                    alt={c.alt}
                    tint="bg-cream-deep"
                    className="aspect-[4/5]"
                  />
                  <span
                    className={`absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold shadow ${c.chip}`}
                  >
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-forest text-2xl">{c.name}</h3>
                  <p className="text-cocoa/80 mt-3 flex-1 leading-relaxed">
                    {c.desc}
                  </p>
                  <p className="text-cocoa/60 mt-5 text-xs font-semibold tracking-wide uppercase">
                    {c.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </div>

      {/* Sourcing */}
      <div className="bg-white">
      <Section id="sourcing" className="py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="bg-honey/40 text-cocoa-deep inline-block rounded-full px-3 py-1 text-sm font-semibold tracking-widest uppercase">
              Le sourcing
            </p>
            <h2 className="font-display text-forest mt-4 text-4xl leading-tight sm:text-5xl">
              Des produits bio, choisis avec le{" "}
              <span className="text-strawberry">cœur</span>.
            </h2>
            <p className="text-cocoa/80 mt-5 text-lg leading-relaxed">
              Je crois qu'un bon chocolat commence par de bons ingrédients, et
              par le respect de celles et ceux qui les font pousser. Tout est
              choisi dans cette idée simple.
            </p>
          </div>
          <div className="space-y-4">
            {SOURCING.map((s) => (
              <div
                key={s.title}
                className={`flex items-start gap-5 rounded-3xl p-6 ${s.card}`}
              >
                <span className={`mt-2 h-3.5 w-3.5 shrink-0 rounded-full ${s.dot}`} aria-hidden />
                <div>
                  <h3 className="font-display text-xl">
                    {s.title}{" "}
                    <span className={s.fromColor}>· {s.from}</span>
                  </h3>
                  <p className={`mt-2 leading-relaxed ${s.bodyColor}`}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      </div>

      {/* Contact */}
      <div id="contact" className="bg-blush/50 text-cocoa-deep relative overflow-hidden">
        <span className="bg-strawberry/20 pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full blur-3xl" aria-hidden />
        <span className="bg-strawberry animate-gentle-float pointer-events-none absolute top-16 left-[12%] hidden h-4 w-4 rounded-full sm:block" aria-hidden />
        <span className="bg-forest animate-gentle-float pointer-events-none absolute top-24 right-[14%] hidden h-5 w-5 rounded-full sm:block [animation-delay:1.4s]" aria-hidden />
        <span className="bg-strawberry animate-gentle-float pointer-events-none absolute bottom-24 left-[20%] hidden h-3 w-3 rounded-full md:block [animation-delay:0.7s]" aria-hidden />
        <Section className="relative py-20 text-center lg:py-28">
          <img
            src="/logo-shani.jpeg"
            alt="Les Pépites de Shani"
            className="ring-strawberry/40 mx-auto h-24 w-24 rounded-full object-cover ring-4"
          />
          <h2 className="font-display text-forest mt-8 text-4xl leading-tight sm:text-5xl">
            J'espère que mes chocolats
            <br className="hidden sm:block" /> vous{" "}
            <span className="text-strawberry">plairont</span>.
          </h2>
          <p className="text-cocoa/80 mx-auto mt-5 max-w-xl text-lg leading-relaxed">
            Une envie, une question, une commande pour une occasion ? Je suis
            ouverte à toute discussion. Écrivez-moi, on en parle.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:bonjour@lespepitesdeshani.fr"
              className="bg-forest text-cream hover:bg-olive-deep rounded-full px-8 py-3 font-semibold transition-colors"
            >
              Écrire à Shani
            </a>
            <a
              href="#creations"
              className="border-cocoa/25 text-cocoa hover:border-cocoa/50 rounded-full border px-8 py-3 font-semibold transition-colors"
            >
              Revoir les recettes
            </a>
          </div>
          <p className="font-display text-cocoa/60 mt-12 text-2xl italic">
            Amicalement, Shani.
          </p>
        </Section>
      </div>

      {/* Footer */}
      <footer className="border-cocoa/10 bg-white border-t">
        <div className="text-cocoa/60 mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm sm:flex-row sm:px-8">
          <span className="font-display text-forest text-base">
            Les Pépites de Shani — Atelier chocolaté
          </span>
          <span>Bio · Éthique · Fait main avec amour</span>
        </div>
      </footer>
    </div>
  );
}
