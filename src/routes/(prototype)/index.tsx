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

const VALUES = ["Bio", "Éthique", "Fait main", "Édition de Noël", "Tempéré maison"];

const CREATIONS = [
  {
    name: "Amandettes",
    tint: "bg-praline/15",
    accent: "text-praline",
    img: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=1000&q=80",
    alt: "Amandes torréfiées enrobées de chocolat noir",
    desc: "Des amandes torréfiées, trempées une à une dans un chocolat tempéré, avec une touche de fleur de sel.",
    note: "amande · fleur de sel",
  },
  {
    name: "Orangettes",
    tint: "bg-orange-zest/15",
    accent: "text-orange-zest",
    img: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1000&q=80",
    alt: "Lamelles d'orange confite trempées dans du chocolat noir",
    desc: "Des écorces d'orange confites, plongées dans un chocolat noir tempéré, franches et parfumées.",
    note: "orange confite · chocolat noir",
  },
  {
    name: "Pralinettes",
    tint: "bg-olive/15",
    accent: "text-olive-deep",
    img: "https://images.unsplash.com/photo-1526081347589-7fa3cb680983?auto=format&fit=crop&w=1000&q=80",
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
  },
  {
    title: "Amandes & noisettes",
    from: "petits producteurs",
    body: "Choisies avec soin auprès de filières bio. La sélection s'affine au fil des rencontres.",
  },
  {
    title: "Les oranges bio",
    from: "au marché",
    body: "Cueillies chez le maraîcher du coin, confites patiemment avant leur bain de chocolat.",
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
      <header className="border-cocoa/10 bg-cream/85 sticky top-0 z-50 border-b backdrop-blur">
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
        <div
          className="bg-sage/30 pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full blur-3xl"
          aria-hidden
        />
        <div
          className="bg-blush/40 pointer-events-none absolute top-40 -left-24 h-72 w-72 rounded-full blur-3xl"
          aria-hidden
        />
        <Section className="relative grid items-center gap-12 pt-16 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24 lg:pb-28">
          <div className="max-w-xl">
            <span className="border-olive/40 text-olive-deep inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase">
              Atelier chocolaté · fait à la main
            </span>
            <h1 className="font-display text-forest mt-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              De petits chocolats,
              <br />
              faits avec le cœur.
            </h1>
            <p className="text-cocoa/80 mt-6 text-lg leading-relaxed">
              Trois recettes, choisies avec soin. Du cacao éthique, des fruits
              bio et beaucoup de patience. Des cadeaux gourmands qui régalent
              tout le monde.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#creations"
                className="bg-cocoa-deep hover:bg-cocoa rounded-full px-7 py-3 font-semibold text-cream transition-colors"
              >
                Découvrir les créations
              </a>
              <a
                href="#histoire"
                className="border-cocoa/25 text-cocoa hover:border-cocoa/50 rounded-full border px-7 py-3 font-semibold transition-colors"
              >
                Rencontrer Shani
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="bg-sage/25 absolute inset-0 -rotate-6 rounded-[2.5rem]" aria-hidden />
            <div className="border-cocoa/10 bg-cream relative rounded-[2.5rem] border p-6 shadow-[0_30px_60px_-30px_rgba(60,40,20,0.35)]">
              <img
                src="/logo-shani.jpeg"
                alt="Le portrait illustré de Shani, cheveux verts et béret de chef"
                className="w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Values marquee */}
        <div className="border-cocoa/10 border-y bg-olive-deep">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-4 sm:px-8">
            {VALUES.map((v) => (
              <span
                key={v}
                className="text-cream/90 text-sm font-medium tracking-wide"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <Section id="histoire" className="py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-olive-deep text-sm font-semibold tracking-widest uppercase">
              L'histoire
            </p>
            <h2 className="font-display text-forest mt-3 text-4xl leading-tight sm:text-5xl">
              Je m'appelle Shani, et j'aime faire plaisir.
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
            <blockquote className="border-olive/50 text-forest my-8 border-l-2 pl-5 font-display text-2xl leading-snug italic">
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

      {/* Creations */}
      <div className="bg-cream-deep">
        <Section id="creations" className="py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-olive-deep text-sm font-semibold tracking-widest uppercase">
              Les créations
            </p>
            <h2 className="font-display text-forest mt-3 text-4xl leading-tight sm:text-5xl">
              J'ouvre avec trois recettes.
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
                className="border-cocoa/10 bg-cream group flex flex-col overflow-hidden rounded-3xl border"
              >
                <ImageFrame
                  src={c.img}
                  alt={c.alt}
                  tint={c.tint}
                  className="aspect-[4/5]"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-forest text-2xl">
                      {c.name}
                    </h3>
                    <span className={`text-sm font-semibold ${c.accent}`}>
                      0{i + 1}
                    </span>
                  </div>
                  <p className="text-cocoa/80 mt-3 flex-1 leading-relaxed">
                    {c.desc}
                  </p>
                  <p className="text-cocoa/50 mt-5 text-xs font-medium tracking-wide uppercase">
                    {c.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </div>

      {/* Sourcing */}
      <Section id="sourcing" className="py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-olive-deep text-sm font-semibold tracking-widest uppercase">
              Le sourcing
            </p>
            <h2 className="font-display text-forest mt-3 text-4xl leading-tight sm:text-5xl">
              Des produits bio, choisis avec le cœur.
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
                className="border-cocoa/10 bg-cream flex items-start gap-5 rounded-2xl border p-6"
              >
                <span className="bg-sage/40 mt-1 h-3 w-3 shrink-0 rounded-full" aria-hidden />
                <div>
                  <h3 className="font-display text-forest text-xl">
                    {s.title}{" "}
                    <span className="text-olive-deep">· {s.from}</span>
                  </h3>
                  <p className="text-cocoa/75 mt-2 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <div id="contact" className="bg-forest text-cream">
        <Section className="py-20 text-center lg:py-28">
          <img
            src="/logo-shani.jpeg"
            alt="Les Pépites de Shani"
            className="border-cream/20 mx-auto h-24 w-24 rounded-full border-2 object-cover"
          />
          <h2 className="font-display mt-8 text-4xl leading-tight sm:text-5xl">
            J'espère que mes chocolats
            <br className="hidden sm:block" /> vous plairont.
          </h2>
          <p className="text-cream/85 mx-auto mt-5 max-w-xl text-lg leading-relaxed">
            Une envie, une question, une commande pour une occasion ? Je suis
            ouverte à toute discussion. Écrivez-moi, on en parle.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:bonjour@lespepitesdeshani.fr"
              className="bg-cream text-forest hover:bg-cream-deep rounded-full px-8 py-3 font-semibold transition-colors"
            >
              Écrire à Shani
            </a>
            <a
              href="#creations"
              className="border-cream/40 hover:bg-cream/10 rounded-full border px-8 py-3 font-semibold transition-colors"
            >
              Revoir les recettes
            </a>
          </div>
          <p className="font-display text-cream/70 mt-12 text-2xl italic">
            Amicalement, Shani.
          </p>
        </Section>
      </div>

      {/* Footer */}
      <footer className="border-cocoa/10 bg-cream border-t">
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
