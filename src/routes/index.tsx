import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Wrench, Zap, Cog, Layers, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";
import autoImg from "@/assets/service-auto.jpg";
import laserImg from "@/assets/service-laser.jpg";
import cncImg from "@/assets/service-cnc.jpg";
import fibraImg from "@/assets/service-fibra.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Viashapes — Fibra de Vidro, Laser, CNC e Auto" },
      { name: "description", content: "Oficina especializada em fibra de vidro, corte laser, maquinação CNC e reparação automóvel. Peças à medida, acabamento premium." },
      { property: "og:title", content: "Viashapes — Engenharia em Fibra de Vidro" },
      { property: "og:description", content: "Peças à medida, reparações invisíveis e produção de precisão." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Viashapes",
          description: "Oficina de fibra de vidro, corte laser, maquinação CNC e reparação automóvel.",
          telephone: "+351 912 345 678",
          email: "geral@viashapes.pt",
          address: { "@type": "PostalAddress", addressLocality: "Leiria", addressCountry: "PT" },
          areaServed: "PT",
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparação Automóvel em Fibra" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corte Laser" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maquinação CNC" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fibra de Vidro — Laminação e Infusão" } },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Wrench,
    title: "Reparação Automóvel",
    desc: "Devolvemos a forma original a para-choques, spoilers, capôs e carroçarias em fibra. Acabamento invisível, pintura à cor.",
    img: autoImg,
    tag: "01",
  },
  {
    icon: Zap,
    title: "Corte Laser",
    desc: "Cortes de precisão em chapa, acrílico e madeira. Geometrias complexas, repetibilidade industrial, prazos curtos.",
    img: laserImg,
    tag: "02",
  },
  {
    icon: Cog,
    title: "Maquinação CNC",
    desc: "Fresagem 3 e 5 eixos para protótipos e séries. Tolerâncias apertadas em alumínio, aço, plásticos técnicos e moldes.",
    img: cncImg,
    tag: "03",
  },
  {
    icon: Layers,
    title: "Fibra de Vidro",
    desc: "Laminação manual e infusão a vácuo. Moldes, peças estruturais, coberturas, depósitos e componentes à medida.",
    img: fibraImg,
    tag: "04",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-ember-glow grid place-items-center text-primary-foreground">F</span>
            Viashapes
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
            <a href="#processo" className="hover:text-foreground transition">Processo</a>
            <a href="#portfolio" className="hover:text-foreground transition">Portfólio</a>
            <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
            <a href="#contacto" className="hover:text-foreground transition">Contacto</a>
          </nav>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-ember-glow">
            <a href="#contacto">Pedir orçamento</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-32 pb-24 overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs uppercase tracking-wider text-muted-foreground mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Oficina &amp; Produção
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
              Onde a <span className="text-gradient-ember">fibra</span> ganha forma e a precisão se mede em milésimos.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Reparamos, cortamos e fabricamos. Da chapa ao carbono, do molde à peça final — entregamos engenharia que se vê e se sente.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-ember-glow shadow-[0_20px_60px_-20px_oklch(0.62_0.20_250_/_0.6)]">
                <a href="#contacto">Começar projeto <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border bg-transparent hover:bg-accent">
                <a href="#servicos">Ver serviços</a>
              </Button>
            </div>
            <dl className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border max-w-md">
              {[
                ["+15", "Anos de oficina"],
                ["+800", "Peças entregues"],
                ["±0.05", "mm de tolerância"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="text-2xl font-display font-bold text-foreground">{n}</dt>
                  <dd className="text-xs text-muted-foreground mt-1">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl" />
            <img
              src={heroImg}
              alt="Oficina de fibra de vidro e carbono"
              width={1920}
              height={1080}
              className="relative rounded-2xl border border-border shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary mb-3">O que fazemos</p>
              <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">Quatro disciplinas, uma só oficina.</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Integramos processos manuais e máquina-ferramenta no mesmo teto. Resultado: prazos curtos e qualidade controlada do início ao fim.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <article key={s.title} className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-xl font-display font-semibold">{s.title}</h3>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{s.tag}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="processo" className="py-24 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Processo</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-2xl">Do briefing à entrega, sem desvios.</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["Diagnóstico", "Avaliamos a peça ou o desenho. Discutimos materiais, prazos e orçamento."],
              ["Engenharia", "CAD, escolha do processo (laser, CNC, laminação) e definição de tolerâncias."],
              ["Produção", "Execução em oficina com controlo de qualidade em cada etapa."],
              ["Entrega", "Acabamento, ensaio e entrega na morada combinada."],
            ].map(([t, d], i) => (
              <div key={t} className="relative">
                <div className="text-5xl font-display font-bold text-gradient-ember mb-4">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-semibold text-lg mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary mb-3">Portfólio</p>
              <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">Peças que saíram da nossa oficina.</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Uma seleção de trabalhos recentes — do protótipo único à pequena série, com clientes em Portugal, Espanha e França.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { img: portfolio1, title: "Capô em fibra de carbono", cat: "Automóvel", span: "md:row-span-2 md:col-span-2 aspect-square md:aspect-auto" },
              { img: portfolio2, title: "Molde de casco náutico", cat: "Fibra de Vidro", span: "aspect-square" },
              { img: portfolio3, title: "Painel decorativo laser", cat: "Corte Laser", span: "aspect-square" },
              { img: portfolio4, title: "Suporte CNC em alumínio", cat: "Maquinação CNC", span: "aspect-square" },
              { img: portfolio5, title: "Para-choques clássico", cat: "Reparação Auto", span: "aspect-square" },
              { img: portfolio6, title: "Spoiler personalizado", cat: "Fibra de Vidro", span: "aspect-square md:col-span-2" },
            ].map((p) => (
              <figure key={p.title} className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${p.span}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition">
                  <span className="text-xs uppercase tracking-widest text-primary">{p.cat}</span>
                  <h3 className="font-display font-semibold text-lg mt-1">{p.title}</h3>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Sobre</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Mãos de oficina, cabeça de engenharia.</h2>
            <p className="text-muted-foreground mb-4">
              A Viashapes nasceu da paixão pelo automóvel e cresceu como parceira de fabricantes, restauradores e estúdios de design. Trabalhamos pequenas séries e peças únicas com o mesmo rigor.
            </p>
            <ul className="space-y-3 mt-6">
              {[
                "Materiais certificados — fibra E/S, carbono, kevlar, resinas epóxi.",
                "Equipamento próprio de laser fibra e CNC 3 eixos.",
                "Suporte técnico do desenho ao pós-venda.",
              ].map((l) => (
                <li key={l} className="flex gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={fibraImg} alt="" loading="lazy" width={1024} height={1024} className="rounded-xl border border-border aspect-square object-cover" />
            <img src={cncImg} alt="" loading="lazy" width={1024} height={1024} className="rounded-xl border border-border aspect-square object-cover mt-8" />
            <img src={laserImg} alt="" loading="lazy" width={1024} height={1024} className="rounded-xl border border-border aspect-square object-cover" />
            <img src={autoImg} alt="" loading="lazy" width={1024} height={1024} className="rounded-xl border border-border aspect-square object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-24 border-t border-border bg-card/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Contacto</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Tem uma peça em mente?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Envie-nos o desenho, foto ou descrição. Respondemos com proposta em 24 horas úteis.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            {[
              [Mail, "geral@viashapes.pt"],
              [Phone, "+351 912 345 678"],
              [MapPin, "Leiria, Portugal"],
            ].map(([Icon, v]: any) => (
              <div key={v} className="rounded-xl border border-border bg-card p-5 flex items-center gap-3 justify-center">
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-sm">{v}</span>
              </div>
            ))}
          </div>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-ember-glow">
            <a href="mailto:geral@viashapes.pt">Pedir orçamento <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Viashapes. Todos os direitos reservados.</span>
          <span>Engenharia em compósitos · Portugal</span>
        </div>
      </footer>
    </div>
  );
}
