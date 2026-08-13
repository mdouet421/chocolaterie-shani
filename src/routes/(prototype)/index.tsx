import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";

export const Route = createFileRoute("/(prototype)/")({
  component: HomePage,
});

const NAV = [
  { label: "Accueil", href: "#top" },
  { label: "L'histoire", href: "#histoire" },
  { label: "Les créations", href: "#creations" },
  { label: "Le sourcing", href: "#sourcing" },
];

const CREATIONS = [
  {
    name: "Amandettes",
    border: "border-[#B6B766]",
    chip: "bg-[#B6B766] text-cream",
    title: "text-[#B6B766]",
    img: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=1000&q=80",
    alt: "Amandes torréfiées enrobées de chocolat noir",
    desc: "Des amandes torréfiées, trempées une à une dans un chocolat tempéré, avec une touche de fleur de sel.",
    note: "amande · fleur de sel",
  },
  {
    name: "Orangettes",
    border: "border-forest",
    chip: "bg-forest text-cream",
    title: "text-forest-ink",
    img: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1000&q=80",
    alt: "Lamelles d'orange confite trempées dans du chocolat noir",
    desc: "Des écorces d'orange confites, plongées dans un chocolat noir tempéré, franches et parfumées.",
    note: "orange confite · chocolat noir",
  },
  {
    name: "Pralinettes",
    border: "border-chocolate",
    chip: "bg-chocolate text-cream",
    title: "text-chocolate",
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
    dot: "bg-[#FFFAD7]",
    fromColor: "text-[#FFFAD7]",
    bodyColor: "text-cream/80",
  },
  {
    title: "Amandes & noisettes",
    from: "La Fourche",
    body: "Choisies avec soin auprès de filières bio. La sélection s'affine au fil des rencontres.",
    card: "bg-[#B6B766] text-cocoa-deep",
    dot: "bg-chocolate",
    fromColor: "text-chocolate",
    bodyColor: "text-cocoa/80",
  },
  {
    title: "Les oranges bio",
    from: "Au marché",
    body: "Cueillies chez un maraîcher local au coeur du Cotentin, confites patiemment avant leur bain de chocolat.",
    card: "bg-[#FFFAD7] text-cocoa-deep",
    dot: "bg-chocolate",
    fromColor: "text-chocolate",
    bodyColor: "text-cocoa/80",
  },
];

const INSTAGRAM_URL = "https://instagram.com/lespepitesdeshani";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ email: "", objet: "", contenu: "" });
  const [errors, setErrors] = useState({ email: "", objet: "", contenu: "" });

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    const next = {
      email: !form.email.trim()
        ? "J'ai besoin de votre e-mail pour vous répondre."
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
          ? "Cet e-mail semble incomplet, pouvez-vous le vérifier ?"
          : "",
      objet: !form.objet.trim()
        ? "Donnez un petit objet à votre message."
        : "",
      contenu: !form.contenu.trim()
        ? "Dites-moi quelques mots avant d'envoyer."
        : "",
    };
    setErrors(next);
    if (next.email || next.objet || next.contenu) return;
    console.log("Nouveau message à envoyer :", {
      to: "bonjour@lespepitesdeshani.fr",
      replyTo: form.email,
      objet: form.objet,
      contenu: form.contenu,
    });
    setSent(true);
  };
  return (
    <div className="bg-background text-foreground min-h-dvh">
      {/* Click-outside overlay */}
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 cursor-default md:hidden ${menuOpen ? "block" : "hidden"}`}
      />

      {/* Header */}
      <header className="border-cocoa/10 bg-white/70 sticky top-0 z-50 border-b backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span
              className="inline-flex h-14 w-14 items-center justify-center rounded-full"
              style={{ border: "2px solid #B6B766" }}
            >
              <img
                src="/logo-shani.jpeg"
                alt="Les Pépites de Shani, atelier chocolaté"
                className="border-cocoa/10 h-11 w-11 rounded-full border object-cover"
              />
            </span>
            <span className="font-display text-forest-ink hidden text-lg leading-none sm:block">
              Les Pépites de Shani
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-cocoa/70 hover:text-forest-ink text-sm font-medium transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="bg-[#69681E] hover:bg-[#54541a] hidden rounded-full px-5 py-2 text-sm font-semibold text-cream transition-colors md:inline-flex"
          >
            Me contacter
          </a>
          <div className="relative md:hidden">
            <button
              type="button"
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="border-cocoa/15 text-forest-ink hover:bg-forest/5 relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
            >
              <span className="relative block h-4 w-5" aria-hidden>
                <span
                  className={`bg-forest absolute left-0 block h-0.5 w-5 rounded-full transition-all duration-300 ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span
                  className={`bg-forest absolute top-1.5 left-0 block h-0.5 w-5 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`bg-forest absolute left-0 block h-0.5 w-5 rounded-full transition-all duration-300 ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>

            {/* Floating menu */}
            <div
              className={`border-cocoa/10 bg-white/95 absolute -right-6 top-full z-10 mt-3 w-60 origin-top-right rounded-l-3xl border border-r-0 p-3 shadow-[0_30px_60px_-25px_rgba(60,40,20,0.4)] backdrop-blur-xl transition-all duration-300 ease-out sm:-right-8 ${menuOpen ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`}
            >
              <nav className="flex flex-col gap-1">
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-cocoa/80 hover:bg-forest/5 hover:text-forest-ink rounded-2xl px-4 py-2.5 text-base font-medium transition-colors"
                  >
                    {n.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#69681E] hover:bg-[#54541a] mt-2 rounded-full px-5 py-2.5 text-center text-sm font-semibold text-cream transition-colors"
                >
                  Me contacter
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div id="top" className="relative overflow-hidden bg-[#FFFAD7]">
        <Section className="relative grid items-center gap-12 pt-16 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24 lg:pb-28">
          <div className="max-w-xl">
            <span className="bg-[#69681E] border-[#989A35] text-[#FFFAD7] inline-flex w-min flex-wrap items-center gap-x-1.5 gap-y-0.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase sm:w-max">
              <span className="bg-[#FFFAD7] h-2 w-2 shrink-0 rounded-full" aria-hidden />
              <span className="whitespace-nowrap">Atelier chocolaté</span>
              <span className="hidden sm:inline" aria-hidden>·</span>
              <span className="whitespace-nowrap">Bio · Éthique · fait main</span>
            </span>
            <h1 className="font-display text-forest-ink mt-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              De petits chocolats,
              <br />
              faits avec le{" "}
              <span className="relative inline-block text-chocolate">
                cœur
                <span
                  className="bg-chocolate absolute -bottom-1 left-0 h-3 w-full -rotate-1 rounded-full"
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
                className="bg-[#69681E] hover:bg-[#54541a] rounded-full px-7 py-3 font-semibold text-cream transition-colors"
              >
                Découvrir les créations
              </a>
              <a
                href="#histoire"
                className="border-forest text-forest-ink hover:bg-forest/10 rounded-full border px-7 py-3 font-semibold transition-colors"
              >
                Rencontrer Shani
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="text-cocoa/70 hover:text-[#FFFAD7] inline-flex items-center gap-2 font-semibold transition-colors"
              >
                <InstagramIcon className="h-5 w-5" />
                Suivre sur Instagram
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md order-first lg:order-none">
            <div className="relative aspect-square w-full">
              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 z-20 aspect-square w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ border: "8px solid #B6B766" }}
              />
              <img
                src="/logo-shani-transparent.png"
                alt="Le portrait illustré de Shani, cheveux verts et béret de chef"
                className="relative h-full w-full object-contain"
              />
              <span className="bg-[#FFFAD7] text-cocoa-deep animate-gentle-float absolute top-[8%] right-[8%] flex h-16 w-16 rotate-6 items-center justify-center rounded-full text-center text-xs font-bold leading-tight shadow-lg">
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
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="bg-leaf/25 text-forest-ink inline-block rounded-full px-3 py-1 text-sm font-semibold tracking-widest uppercase">
              L'histoire
            </p>
            <h2 className="font-display text-forest-ink mt-4 text-4xl leading-tight sm:text-5xl">
              Je m'appelle Shani, et j'aime faire{" "}
              <span className="text-chocolate">plaisir</span>.
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
            <blockquote className="bg-chocolate text-[#FFFAD7] my-8 rounded-3xl px-7 py-6 font-display text-2xl leading-snug italic">
              « Je préfère le bouche à oreille aux grandes stratégies commerciales :
              commencer sans pression, et garder ce côté passion. »
            </blockquote>
            <p>
              Je suis toujours employée à plein temps en parallèle, ainsi cet
              atelier avance à son rythme, porté par l'envie et la gourmandise.
            </p>
            <p>Merci d'en faire partie.</p>
          </div>
        </div>
      </Section>
      </div>

      {/* Creations */}
      <div className="bg-[#FFFAD7]">
        <Section id="creations" className="py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="bg-[#B6B766]/25 text-[#69681E] inline-block rounded-full px-3 py-1 text-sm font-semibold tracking-widest uppercase">
              Les créations
            </p>
            <h2 className="font-display text-forest-ink mt-4 text-4xl leading-tight sm:text-5xl">
              J'ouvre avec{" "}
              <span className="text-chocolate">trois recettes</span>.
            </h2>
            <p className="text-cocoa/75 mt-4 text-lg">
              Juste trois, mais réfléchies et préparées avec amour et passion.
              Chaque bouchée est trempée et tempérée à la main.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {CREATIONS.map((c, i) => (
              <article
                key={c.name}
                className={`group flex flex-col overflow-hidden rounded-3xl border-2 bg-white transition-transform duration-500 ease-out hover:-translate-y-2 ${c.border}`}
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
                  <h3 className={`font-display text-2xl ${c.title}`}>{c.name}</h3>
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
            <p className="bg-leaf/25 text-forest-ink inline-block rounded-full px-3 py-1 text-sm font-semibold tracking-widest uppercase">
              Le sourcing
            </p>
            <h2 className="font-display text-forest-ink mt-4 text-4xl leading-tight sm:text-5xl">
              Des produits bio, choisis avec le{" "}
              <span className="text-chocolate">cœur</span>.
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
      <div id="contact" className="bg-[#FFFAD7] text-cocoa-deep relative overflow-hidden">
        <Section className="relative py-20 text-center lg:py-28">
          <img
            src="/logo-shani-transparent.png"
            alt="Les Pépites de Shani"
            className="mx-auto h-44 w-44 object-contain"
          />
          <h2 className="font-display text-forest-ink mt-8 text-4xl leading-tight sm:text-5xl">
            J'espère que mes chocolats
            <br className="hidden sm:block" /> vous{" "}
            <span className="text-chocolate">plairont</span>.
          </h2>
          <p className="text-cocoa/80 mx-auto mt-5 max-w-xl text-lg leading-relaxed">
            Une envie, une question, une commande pour une occasion ? Je suis
            ouverte à toute discussion. Écrivez-moi, on en parle.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="text-cocoa/70 hover:text-[#FFFAD7] inline-flex items-center gap-2 font-semibold transition-colors"
            >
              <InstagramIcon className="h-5 w-5" />
              Me suivre sur Instagram
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setFormOpen((v) => !v)}
              aria-expanded={formOpen}
              className="bg-[#69681E] text-cream hover:bg-[#54541a] rounded-full px-8 py-3 font-semibold transition-colors"
            >
              Écrire à Shani
            </button>
            <a
              href="#creations"
              className="border-forest text-forest-ink hover:bg-forest/10 rounded-full border px-8 py-3 font-semibold transition-colors"
            >
              Revoir les recettes
            </a>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${formOpen ? "max-h-[40rem] opacity-100" : "max-h-0 opacity-0"}`}
          >
            {sent ? (
              <div className="border-cocoa/10 mx-auto mt-8 max-w-xl rounded-3xl border bg-white p-8 text-center shadow-[0_30px_60px_-30px_rgba(60,40,20,0.35)]">
                <p className="font-display text-forest-ink text-2xl">
                  Merci, votre message est bien noté !
                </p>
                <p className="text-cocoa/70 mt-3">
                  Je vous répondrai avec plaisir dès que possible.
                </p>
              </div>
            ) : (
            <form
              noValidate
              onSubmit={handleSend}
              className="border-cocoa/10 mx-auto mt-8 max-w-xl space-y-4 rounded-3xl border bg-white p-6 text-left shadow-[0_30px_60px_-30px_rgba(60,40,20,0.35)] sm:p-8"
            >
              <div>
                <label
                  htmlFor="email"
                  className="text-cocoa/70 mb-1.5 block text-sm font-semibold"
                >
                  Votre e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, email: e.target.value }));
                    setErrors((x) => ({ ...x, email: "" }));
                  }}
                  placeholder="prenom@exemple.fr"
                  className={`w-full rounded-2xl border bg-white px-4 py-3 outline-none transition focus:ring-4 ${errors.email ? "border-strawberry focus:border-strawberry focus:ring-strawberry/20" : "border-cocoa/15 focus:border-forest focus:ring-forest/20"}`}
                />
                {errors.email && (
                  <p className="text-strawberry mt-1.5 text-sm">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="objet"
                  className="text-cocoa/70 mb-1.5 block text-sm font-semibold"
                >
                  Objet
                </label>
                <input
                  id="objet"
                  type="text"
                  value={form.objet}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, objet: e.target.value }));
                    setErrors((x) => ({ ...x, objet: "" }));
                  }}
                  placeholder="Une commande pour Noël…"
                  className={`w-full rounded-2xl border bg-white px-4 py-3 outline-none transition focus:ring-4 ${errors.objet ? "border-strawberry focus:border-strawberry focus:ring-strawberry/20" : "border-cocoa/15 focus:border-forest focus:ring-forest/20"}`}
                />
                {errors.objet && (
                  <p className="text-strawberry mt-1.5 text-sm">
                    {errors.objet}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="contenu"
                  className="text-cocoa/70 mb-1.5 block text-sm font-semibold"
                >
                  Votre message
                </label>
                <textarea
                  id="contenu"
                  rows={4}
                  value={form.contenu}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, contenu: e.target.value }));
                    setErrors((x) => ({ ...x, contenu: "" }));
                  }}
                  placeholder="Dites-moi tout…"
                  className={`w-full resize-none rounded-2xl border bg-white px-4 py-3 outline-none transition focus:ring-4 ${errors.contenu ? "border-strawberry focus:border-strawberry focus:ring-strawberry/20" : "border-cocoa/15 focus:border-forest focus:ring-forest/20"}`}
                />
                {errors.contenu && (
                  <p className="text-strawberry mt-1.5 text-sm">
                    {errors.contenu}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#69681E] text-cream hover:bg-[#54541a] w-full rounded-full px-8 py-3 font-semibold transition-colors"
              >
                Envoyer le message
              </button>
            </form>
            )}
          </div>

          <p className="font-display text-chocolate mt-12 text-2xl italic">
            Amicalement, Shani.
          </p>
        </Section>
      </div>

      {/* Footer */}
      <footer className="border-cocoa/10 bg-white border-t">
        <div className="text-cocoa/60 mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm sm:flex-row sm:px-8">
          <span className="font-display text-forest-ink text-base">
            Les Pépites de Shani — Atelier chocolaté
          </span>
          <span>Bio · Éthique · Fait main avec amour</span>
        </div>
      </footer>
    </div>
  );
}
