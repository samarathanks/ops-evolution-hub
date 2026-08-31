import { createFileRoute, Link } from "@tanstack/react-router";
import logoColor from "../assets/thanksup-logo-oficial.png.asset.json";
import logoWhite from "../assets/thanksup-logo-branco.png.asset.json";
import brandSymbol from "../assets/thanksup-simbolo.png.asset.json";
import crmLogo from "../assets/zoho-crm.svg.asset.json";
import crmPlusLogo from "../assets/zoho-crm-plus.svg.asset.json";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  CONTACT_EMAIL,
  SOLUTION_EVENT,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  selectSolution,
  whatsappLink,
} from "../lib/contact";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Check,
  CheckCircle2,
  ChevronDown,
  Compass,
  Database,
  Filter,
  Gauge,
  Layers,
  LineChart,
  Mail,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  Repeat,
  Settings2,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thanks Up | Inteligência Operacional Corporativa" },
      {
        name: "description",
        content:
          "Processos, tecnologia e indicadores para empresas que querem crescer com mais organização, produtividade e controle. Conheça a Thanks Up.",
      },
      {
        property: "og:title",
        content: "Thanks Up | Inteligência Operacional Corporativa",
      },
      {
        property: "og:description",
        content:
          "Diagnóstico, estruturação de processos, implantação tecnológica e acompanhamento da evolução operacional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Método DNA", href: "#metodo-dna" },
  { label: "Zoho", href: "#zoho" },
  { label: "Por que a Thanks Up", href: "#por-que" },
  { label: "Contato", href: "#contato" },
];


function Logo({
  variant = "color",
  className = "",
  sizeClass = "h-[50px] w-auto sm:h-[55px]",
}: {
  variant?: "color" | "white";
  className?: string;
  sizeClass?: string;
}) {
  const white = variant === "white";
  return (
    <a
      href="#inicio"
      className={`inline-flex items-center ${className}`}
      aria-label="Thanks Up Gestão de Negócios"
    >
      <img
        src={white ? logoWhite.url : logoColor.url}
        alt="Thanks Up Gestão de Negócios"
        className={sizeClass}
      />
    </a>
  );
}

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={brandSymbol.url}
      alt=""
      aria-hidden="true"
      className={className}
      width={209}
      height={186}
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-[88px] max-w-6xl items-center justify-between px-5">
        <Logo className="shrink-0" />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] text-muted-foreground transition-colors hover:text-violet"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a href="#contato" className="btn-violet">
            Solicitar diagnóstico
          </a>
        </div>
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base text-foreground hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="btn-violet mt-2 justify-center"
            >
              Solicitar diagnóstico
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Eyebrow({
  children,
  tone = "default",
}: {
  children: string;
  tone?: "default" | "inverse";
}) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] ${
        tone === "inverse" ? "text-accent" : "text-violet"
      }`}
    >
      <span className="brand-rule" aria-hidden="true" />
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-[28px] font-bold leading-[1.15] sm:text-[38px] ${className}`}
    >
      {children}
    </h2>
  );
}

function Accordion({
  title,
  children,
  tone = "light",
}: {
  title: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const dark = tone === "dark";
  return (
    <div
      className={`rounded-xl border ${
        dark ? "border-primary-foreground/20" : "border-border bg-card"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold ${
          dark ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        <span>{title}</span>
        {open ? (
          <Minus size={18} className="shrink-0 text-accent" />
        ) : (
          <Plus size={18} className="shrink-0 text-accent" />
        )}
      </button>
      {open && (
        <div
          className={`px-5 pb-5 text-[15px] leading-relaxed ${
            dark ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

/** Composição gráfica da marca usada no lugar de fotografias. */
function BrandComposition() {
  return (
    <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-border bg-violet-soft p-7">
      <BrandMark className="pointer-events-none absolute -right-8 -top-8 h-40 w-auto opacity-[0.10]" />
      <div
        className="grid-dots pointer-events-none absolute bottom-4 left-4 h-24 w-24 opacity-50"
        aria-hidden="true"
      />
      <div className="relative grid gap-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Workflow, label: "Processos" },
            { icon: Settings2, label: "Tecnologia" },
            { icon: LineChart, label: "Indicadores" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-background p-3 text-center"
            >
              <Icon size={18} className="mx-auto text-violet" />
              <p className="mt-2 text-[11px] font-semibold text-foreground">{label}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-violet" />
          <span className="h-px flex-1 bg-violet/40" />
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="h-px flex-1 bg-violet/40" />
          <span className="h-2 w-2 rounded-full bg-violet" />
        </div>
        <div className="rounded-xl border border-border bg-background p-4">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-semibold text-foreground">Operação conectada</p>
            <Share2 size={15} className="text-accent" />
          </div>
          <div className="mt-3 flex h-16 items-end gap-2" aria-hidden="true">
            {[40, 58, 50, 72, 86].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={`flex-1 rounded-t-md ${i === 4 ? "bg-accent" : "bg-violet/70"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- HERO ---------------- */

const HERO_KPIS = [
  { label: "Processos", value: "Padronizados", icon: Workflow },
  { label: "Dados", value: "Integrados", icon: Database },
  { label: "Indicadores", value: "Em tempo real", icon: LineChart },
];

const HERO_BARS = [38, 52, 46, 68, 74, 88];

function DashboardMock() {
  return (
    <div className="relative">
      <div
        className="grid-dots pointer-events-none absolute -right-4 -top-6 h-32 w-32 rounded-xl opacity-60"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[0_30px_70px_-45px_oklch(0.42_0.17_295/0.7)] sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-violet/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
<span className="rounded-full border border-accent/50 bg-accent-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-deep">
            Painel gerencial
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {HERO_KPIS.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-xl bg-muted p-3">
              <Icon size={16} className="text-violet" />
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {label}
              </p>
              <p className="text-[12px] font-semibold leading-tight text-foreground">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-border p-4">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-semibold text-foreground">
              Evolução operacional
            </p>
            <TrendingUp size={15} className="text-accent" />
          </div>
          <div className="mt-4 flex h-24 items-end gap-2">
            {HERO_BARS.map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={`flex-1 rounded-t-md ${
                  i === HERO_BARS.length - 1
                    ? "bg-accent"
                    : i > 2
                      ? "bg-violet"
                      : "bg-violet/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-violet p-4 text-primary-foreground">
            <Share2 size={16} />
            <p className="mt-2 text-[12px] leading-snug opacity-90">
              Áreas conectadas em uma única operação
            </p>
          </div>
          <div className="rounded-xl bg-brand-mist p-4">
            <Gauge size={16} className="text-primary-deep" />
            <p className="mt-2 text-[12px] leading-snug text-primary-deep">
              Decisões apoiadas por indicadores
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 hidden w-52 rounded-xl border border-border bg-card p-4 shadow-[0_20px_45px_-30px_oklch(0.31_0.015_252/0.8)] sm:block">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Zap size={15} />
          </span>
          <p className="text-[12px] font-semibold text-foreground">Automações ativas</p>
        </div>
        <div className="mt-3 h-1.5 w-full rounded-full bg-muted">
          <div className="h-1.5 w-4/5 rounded-full bg-violet" />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-[88px]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-violet-soft"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-12 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-16 lg:pt-20">
        <div>
          <Eyebrow>Inteligência Operacional Corporativa</Eyebrow>
          <h1 className="max-w-[20ch] text-[34px] font-extrabold leading-[1.08] text-foreground sm:text-[50px]">
            Organizamos a gestão da sua empresa para que ela cresça com{" "}
            <span className="text-violet">eficiência</span>.
          </h1>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted-foreground">
            Estruturamos processos, implantamos tecnologia e transformamos informações em
            indicadores.
          </p>
<div className="mt-6 flex flex-wrap gap-2">
            {["Processos", "Tecnologia", "Indicadores", "Governança"].map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contato" className="btn-violet justify-center">
              Solicitar diagnóstico <ArrowRight size={16} />
            </a>
            <a href="#metodo-dna" className="btn-outline justify-center">
              Conheça o Método DNA
            </a>
          </div>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-accent/60 bg-accent-soft px-5 py-2.5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-primary-deep">
              Eficiência corporativa com inteligência estratégica.
            </p>
          </div>
        </div>
        <DashboardMock />
      </div>
    </section>
  );
}

/* ---------------- DESAFIOS ---------------- */

const CHALLENGES = [
  {
    icon: Workflow,
    title: "Processos diferentes em cada área",
    text: "Cada equipe executa de um jeito. O controle e a padronização ficam difíceis.",
    tone: "violet",
  },
  {
    icon: Database,
    title: "Informações espalhadas",
    text: "Planilhas, mensagens, e-mails e sistemas que não conversam entre si.",
    tone: "plain",
  },
  {
    icon: BarChart3,
    title: "Indicadores pouco confiáveis",
    text: "A liderança depende de consolidação manual para enxergar resultados.",
    tone: "mist",
  },
  {
    icon: Repeat,
    title: "Retrabalho e baixa produtividade",
    text: "Tarefas repetitivas e aprovações lentas consomem o tempo da equipe.",
    tone: "plain",
  },
  {
    icon: Settings2,
    title: "Tecnologia mal aproveitada",
    text: "As ferramentas existem, mas não refletem os processos reais da operação.",
    tone: "accent",
  },
  {
    icon: TrendingUp,
    title: "Crescimento sem previsibilidade",
    text: "A empresa cresce sem estrutura e sem indicadores para sustentar a expansão.",
    tone: "plain",
  },
];

const TONES: Record<string, string> = {
  violet: "bg-violet text-primary-foreground border-transparent",
  mist: "bg-brand-mist text-primary-deep border-transparent",
  accent: "bg-accent-soft text-foreground border-transparent",
  plain: "bg-card text-foreground border-border",
};

const ICON_TONES: Record<string, string> = {
  violet: "bg-primary-foreground/15 text-primary-foreground",
  mist: "bg-background text-violet",
  accent: "bg-accent text-accent-foreground",
  plain: "bg-violet-soft text-violet",
};

function Challenges() {
  return (
    <section id="desafios" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <Eyebrow>Desafios</Eyebrow>
            <SectionTitle className="text-foreground">
              Sua empresa cresceu.
              <br />
              <span className="text-violet">A gestão conseguiu acompanhar?</span>
            </SectionTitle>
          </div>
          <p className="text-[16px] leading-relaxed text-muted-foreground lg:pb-2">
            O crescimento revela o que estava escondido: processos fora de ritmo,
            informações dispersas e decisões dependentes de planilhas.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.map(({ icon: Icon, title, text, tone }, i) => (
            <article
              key={title}
              className={`card-lift relative overflow-hidden rounded-2xl border p-7 ${TONES[tone]}`}
            >
              <span className="absolute right-5 top-5 text-[12px] font-bold tracking-widest opacity-40">
                0{i + 1}
              </span>
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${ICON_TONES[tone]}`}
              >
                <Icon size={20} />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold leading-snug">{title}</h3>
              <p
                className={`mt-2.5 text-[15px] leading-relaxed ${
                  tone === "violet" ? "opacity-85" : "text-muted-foreground"
                }`}
              >
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-primary-deep px-7 py-8 text-primary-foreground sm:flex-row sm:items-center sm:gap-8">
          <Sparkles size={28} className="shrink-0 text-accent" />
          <p className="text-[19px] font-semibold leading-snug sm:text-[22px]">
            Tecnologia sem processo não organiza uma empresa.
            <span className="text-accent"> Apenas acelera a desorganização.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MODELO DE ATUAÇÃO ---------------- */

const VALUE_STEPS = [
  {
    icon: Compass,
    title: "Diagnóstico",
    short: "Entender o cenário",
    text: "Cenário atual, gargalos, objetivos e prioridades da empresa.",
  },
  {
    icon: Layers,
    title: "Estruturação",
    short: "Definir o caminho",
    text: "Processos, responsabilidades, fluxos, indicadores e plano de evolução.",
  },
  {
    icon: Settings2,
    title: "Implantação",
    short: "Transformar a operação",
    text: "Processos, tecnologia e automações em funcionamento, com equipes capacitadas.",
  },
  {
    icon: Gauge,
    title: "Acompanhamento",
    short: "Sustentar a evolução",
    text: "Monitoramento da adoção, dos resultados e da melhoria contínua.",
  },
];

function ValueProposition() {
  return (
    <section className="border-y border-border bg-muted/60 py-10">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-violet">
          Modelo de atuação
        </p>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:flex lg:items-stretch lg:gap-2">
          {VALUE_STEPS.map(({ icon: Icon, title, short }, i) => (
            <li key={title} className="flex flex-1 items-center gap-2">
              <div className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet text-primary-foreground">
                  <Icon size={17} />
                </span>
                <div className="min-w-0">
                  <p className="text-[14px] font-bold leading-tight text-foreground">
                    {title}
                  </p>
                  <p className="text-[12px] leading-tight text-muted-foreground">
                    {short}
                  </p>
                </div>
              </div>
              {i < VALUE_STEPS.length - 1 && (
                <ArrowRight
                  size={18}
                  className="hidden shrink-0 text-accent lg:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- SOLUÇÕES ---------------- */

const SOLUTIONS = [
  {
    name: "Diagnóstico Operacional Empresarial",
    benefit: "Descubra onde sua empresa pode evoluir.",
    text: "Analisamos a operação, identificamos gargalos e organizamos as prioridades do negócio.",
    items: [
      "levantamento do cenário atual",
      "análise dos processos",
      "identificação de gargalos",
      "avaliação de tecnologia e indicadores",
      "recomendações priorizadas",
      "plano inicial de evolução",
    ],
    cta: "Conhecer diagnóstico",
    icon: Target,
  },
  {
    name: "Estruturação de Processos e Governança",
    benefit: "Organize sua operação para crescer com mais controle.",
    text: "Mapeamos processos, responsabilidades e formas de acompanhamento para uma gestão previsível.",
    items: [
      "mapeamento de processos",
      "definição de responsabilidades",
      "padronização de rotinas",
      "fluxos de aprovação",
      "organização de documentos",
      "definição de indicadores",
      "estrutura de governança",
    ],
    cta: "Conhecer estruturação",
    icon: Boxes,
  },
  {
    name: "Implantação e Transformação Digital",
    benefit: "Integre pessoas, processos e tecnologia em uma única operação.",
    text: "Implantamos soluções alinhadas à realidade da empresa, conectando áreas e informações.",
    items: [
      "desenho da solução",
      "implantação e configuração",
      "Zoho CRM e Zoho CRM Plus",
      "automações",
      "integrações",
      "migração e organização de dados",
      "capacitação dos usuários",
      "acompanhamento da adoção",
    ],
    cta: "Conhecer transformação digital",
    icon: Sparkles,
  },
  {
    name: "Gestão da Evolução Operacional",
    benefit: "Tenha indicadores em tempo real para decidir com segurança.",
    text: "Acompanhamos indicadores, adoção e oportunidades de melhoria para apoiar a liderança.",
    items: [
      "reuniões periódicas",
      "acompanhamento de indicadores",
      "análise de performance",
      "identificação de desvios",
      "priorização de melhorias",
      "evolução dos processos",
      "apoio à tomada de decisão",
      "expansão das soluções implantadas",
    ],
    cta: "Conhecer gestão da evolução",
    icon: Gauge,
  },
];

function SolutionCard({
  solution,
}: {
  solution: (typeof SOLUTIONS)[number];
}) {
  const [open, setOpen] = useState(false);
  const { icon: Icon } = solution;
  const visible = open ? solution.items : solution.items.slice(0, 3);
  const rest = solution.items.length - 3;

  return (
    <article className="card-lift flex flex-col rounded-2xl border border-border bg-card p-7 lg:p-8">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet text-primary-foreground">
        <Icon size={22} />
      </span>
      <h3 className="mt-6 text-xl font-bold leading-snug text-foreground">
        {solution.name}
      </h3>
      <p className="mt-2 text-[15px] font-semibold text-violet">{solution.benefit}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        {solution.text}
      </p>

      <ul className="mt-6 grid gap-2">
        {visible.map((item) => (
          <li key={item} className="flex gap-2 text-[14px] text-foreground/85">
            <Check size={16} className="mt-0.5 shrink-0 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {rest > 0 && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="btn-ghost mt-4 self-start text-violet"
        >
          {open ? "Ver menos" : `Ver detalhes (+${rest})`}
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      )}

      <a
        href="#contato"
        onClick={() => selectSolution(solution.name)}
        className="btn-outline mt-7 self-start"
      >
        {solution.cta} <ArrowUpRight size={16} />
      </a>
    </article>
  );
}

function Solutions() {
  return (
    <section id="solucoes" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <Eyebrow>Portfólio</Eyebrow>
          <SectionTitle className="text-foreground">
            Soluções para cada etapa da transformação
          </SectionTitle>
          <p className="mt-5 text-[16px] leading-relaxed text-muted-foreground">
            Um portfólio enxuto, conectado e orientado pelos desafios reais da empresa.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SOLUTIONS.map((s) => (
            <SolutionCard key={s.name} solution={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MÉTODO DNA ---------------- */

const DNA_STEPS = [
  {
    title: "Diagnóstico",
    short: "Compreender",
    text: "Cenário atual, objetivos, gargalos e prioridades.",
  },
  {
    title: "Mapeamento",
    short: "Analisar",
    text: "Processos, responsabilidades, informações, sistemas e indicadores.",
  },
  {
    title: "Direcionamento",
    short: "Planejar",
    text: "Plano de transformação com prioridades, escopo, responsáveis e etapas.",
  },
  {
    title: "Implantação",
    short: "Executar",
    text: "Melhorias em prática: processos, tecnologia e capacitação.",
  },
  {
    title: "Evolução",
    short: "Sustentar",
    text: "Resultados monitorados, desvios corrigidos e novas oportunidades.",
  },
];

function MethodDNA() {
  return (
    <section
      id="metodo-dna"
      className="relative overflow-hidden bg-violet-deep py-20 text-primary-foreground lg:py-28"
    >
      <BrandMark className="pointer-events-none absolute -right-12 -top-12 h-64 w-auto opacity-[0.07]" />
      <div
        className="grid-dots pointer-events-none absolute bottom-8 left-6 h-40 w-40 opacity-20"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Eyebrow tone="inverse">Metodologia proprietária</Eyebrow>
            <h2 className="text-[36px] font-extrabold leading-[1.05] sm:text-[52px]">
              Método DNA
            </h2>
            <p className="mt-2 text-[17px] font-semibold text-accent">
              Desenvolvimento de Negócios e Ativos
            </p>
          </div>
          <p className="text-[16px] leading-relaxed text-primary-foreground/80">
            A metodologia da Thanks Up para compreender a realidade da empresa, organizar
            prioridades, estruturar soluções, implantar melhorias e acompanhar a evolução.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div
            className="absolute left-6 top-0 hidden h-full w-px bg-primary-foreground/20 md:block lg:left-0 lg:top-6 lg:h-px lg:w-full"
            aria-hidden="true"
          />
          {DNA_STEPS.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-violet-deep text-[15px] font-bold text-accent">
                {i + 1}
              </span>
              <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-accent/80">
                {step.short}
              </p>
              <h3 className="mt-1 text-[19px] font-bold">{step.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-primary-foreground/75">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-6 rounded-2xl bg-primary-foreground/10 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <p className="text-[18px] font-semibold leading-snug sm:text-[21px]">
            A transformação não termina quando o sistema entra no ar. Ela acontece quando a
            nova forma de trabalhar vira rotina.
          </p>
          <a href="#contato" className="btn-accent justify-center lg:justify-self-end">
            Solicitar diagnóstico pelo Método DNA
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ZOHO ---------------- */

const FUNNEL = [
  { label: "Leads", w: "w-full" },
  { label: "Qualificação", w: "w-4/5" },
  { label: "Proposta", w: "w-3/5" },
  { label: "Negociação", w: "w-2/5" },
  { label: "Fechamento", w: "w-1/4" },
];

const ZOHO_BLOCKS = [
  { icon: Filter, label: "Funil comercial" },
  { icon: Users, label: "Usuários capacitados" },
  { icon: Zap, label: "Automações" },
  { icon: Activity, label: "Indicadores" },
];

const ZOHO_LIST = [
  "diagnóstico do processo comercial",
  "desenho do funil e das etapas",
  "configuração do CRM",
  "organização e migração de dados",
  "automações e regras",
  "painéis e indicadores",
  "capacitação dos usuários",
  "acompanhamento da adoção",
  "suporte à evolução da solução",
];

function CrmMock() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-semibold text-foreground">Funil comercial</p>
        <span className="rounded-full bg-violet-soft px-3 py-1 text-[11px] font-semibold text-violet">
          CRM
        </span>
      </div>
      <div className="mt-5 grid gap-2.5">
        {FUNNEL.map(({ label, w }, i) => (
          <div key={label} className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-[12px] text-muted-foreground">
              {label}
            </span>
            <div className="h-7 flex-1 rounded-md bg-muted">
              <div
                className={`h-7 rounded-md ${w} ${
                  i === FUNNEL.length - 1 ? "bg-accent" : "bg-violet"
                }`}
                style={{ opacity: 1 - i * 0.13 }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {ZOHO_BLOCKS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2.5 rounded-xl bg-muted px-3 py-3"
          >
            <Icon size={16} className="shrink-0 text-violet" />
            <span className="text-[12px] font-medium leading-tight text-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ZohoProductCard({
  logo,
  alt,
  name,
  text,
}: {
  logo: string;
  alt: string;
  name: string;
  text: string;
}) {
  return (
    <div className="card-lift flex flex-col rounded-2xl border border-border bg-card p-7 sm:p-9">
      <div className="flex items-center justify-center rounded-xl border border-border bg-muted/40 px-6 py-9 sm:py-11">
        <img src={logo} alt={alt} loading="lazy" className="h-11 w-auto sm:h-14" />
      </div>
      <h3 className="mt-6 text-[20px] font-bold text-foreground">{name}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

function Zoho() {
  return (
    <section id="zoho" className="bg-muted/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <Eyebrow>Tecnologia aplicada ao negócio</Eyebrow>
          <SectionTitle className="text-foreground">
            Implantação e evolução do Zoho CRM e Zoho CRM Plus
          </SectionTitle>
          <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
            Como Parceiros Consultores Oficiais Zoho, apoiamos empresas no diagnóstico do
            processo comercial, na configuração da plataforma e na evolução da operação.
          </p>

          <div className="mt-6 grid gap-3">
            <Accordion title="Como conduzimos a implantação">
              Primeiro analisamos o processo comercial, os dados, os responsáveis, as etapas
              do funil e os indicadores necessários. Depois configuramos a tecnologia para
              sustentar a operação desenhada.
            </Accordion>
            <Accordion title="O que está incluído no trabalho">
              <ul className="grid gap-2 sm:grid-cols-2">
                {ZOHO_LIST.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>

          <p className="mt-8 rounded-xl border-l-4 border-accent bg-card px-6 py-5 text-[17px] font-medium leading-snug text-foreground">
            Mais do que configurar uma plataforma, estruturamos a operação que será
            gerenciada por ela.
          </p>
          <a
            href="#contato"
            onClick={() => selectSolution("Zoho CRM e Zoho CRM Plus")}
            className="btn-violet mt-8"
          >
            Falar sobre Zoho CRM <ArrowRight size={16} />
          </a>
        </div>

        <div className="flex flex-col gap-5">
          <CrmMock />
{/* Espaço estrutural reservado para o badge oficial de Parceiro Zoho (arquivo oficial a ser inserido). */}
        </div>
      </div>

      {/* Produtos Zoho — logotipos oficiais */}
      <div className="mx-auto mt-14 grid max-w-6xl gap-5 px-5 md:grid-cols-2">
        <ZohoProductCard
          logo={crmLogo.url}
          alt="Zoho CRM"
          name="Zoho CRM"
          text="Estruturação e gestão do processo comercial, com organização do funil, automações, dados e indicadores."
        />
        <ZohoProductCard
          logo={crmPlusLogo.url}
          alt="Zoho CRM Plus"
          name="Zoho CRM Plus"
          text="Integração entre vendas, marketing e atendimento para uma visão mais completa da jornada do cliente."
        />
      </div>
    </section>
  );
}

/* ---------------- POR QUE A THANKS UP ---------------- */

const DIFFS = [
  {
    icon: Compass,
    title: "Visão de negócio antes da tecnologia",
    text: "Entendemos o processo, o problema e o resultado esperado antes da solução.",
  },
  {
    icon: Layers,
    title: "Estruturação e execução",
    text: "Participamos da implantação das melhorias, não apenas da recomendação.",
  },
  {
    icon: Gauge,
    title: "Acompanhamento da evolução",
    text: "Monitoramos adoção, indicadores, resultados e novas oportunidades.",
  },
  {
    icon: Settings2,
    title: "Soluções adaptadas à realidade",
    text: "Cada projeto respeita a maturidade e a capacidade de execução da empresa.",
  },
  {
    icon: Users,
    title: "Proximidade com liderança e equipes",
    text: "Trabalhamos com quem decide e com quem executa no dia a dia.",
  },
];

function WhyUs() {
  return (
    <section id="por-que" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Eyebrow>Diferenciais</Eyebrow>
          <SectionTitle className="text-foreground">
            Por que conduzir essa transformação com a{" "}
            <span className="text-violet">Thanks Up</span>?
          </SectionTitle>

          <ul className="mt-10 space-y-1">
            {DIFFS.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 border-l-2 border-border py-5 pl-6 transition-colors hover:border-accent"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-soft text-violet">
                  <Icon size={19} />
                </span>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[12px] font-bold tracking-widest text-violet/40">
                      0{i + 1}
                    </span>
                    <h3 className="text-[17px] font-semibold leading-snug text-foreground">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
          <BrandComposition />
          <div className="rounded-2xl border border-border bg-brand-mist p-7">
            <h3 className="text-[18px] font-bold leading-snug text-primary-deep">
              A Thanks Up faz sentido para empresas que…
            </h3>
            <ul className="mt-4 grid gap-2.5">
              {PROFILE.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] text-foreground/90"
                >
                  <Check size={16} className="mt-1 shrink-0 text-violet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-primary-deep p-7 text-primary-foreground">
            <Sparkles size={22} className="text-accent" />
            <p className="mt-4 text-[18px] font-semibold leading-snug">
              Pessoas próximas da operação e comprometidas com a execução.
            </p>
            <a
              href={whatsappLink(
                "Olá, equipe Thanks Up. Gostaria de falar com a equipe sobre a operação da minha empresa.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent mt-6"
            >
              Falar com a equipe <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const PROFILE = [
  "cresceram mais rápido do que seus processos",
  "dependem de planilhas e controles manuais",
  "não possuem indicadores confiáveis",
  "precisam integrar áreas, tecnologia e informações",
];


/* ---------------- CONTEÚDOS (desativado) ----------------
   Seção mantida no código para reativação quando existirem artigos reais.

const POSTS = [
  {
    title: "Como saber se a gestão acompanhou o crescimento do negócio",
    icon: TrendingUp,
  },
  { title: "Por que implantações de CRM falham — e como evitar", icon: Settings2 },
  { title: "Indicadores que todo gestor deveria acompanhar", icon: LineChart },
];

function Content() {
  return (
    <section id="conteudos" className="bg-violet-soft py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <Eyebrow>Conteúdos</Eyebrow>
          <SectionTitle className="text-foreground">
            Conteúdos para uma gestão mais organizada
          </SectionTitle>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {POSTS.map(({ title, icon: Icon }, i) => (
            <article
              key={title}
              className="card-lift flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div
                className={`grid-dots flex h-32 items-center justify-center ${
                  i === 1 ? "bg-violet-soft" : i === 2 ? "bg-accent-soft" : "bg-muted"
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-background text-violet shadow-sm">
                  <Icon size={20} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mt-3 text-[17px] font-semibold leading-snug text-foreground">
                  {title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
------------------------------------------------------- */

/* ---------------- CTA FINAL ---------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-violet py-20 text-primary-foreground lg:py-24">
      <BrandMark className="pointer-events-none absolute -left-10 top-6 h-40 w-auto opacity-[0.08]" />
      <BrandMark className="pointer-events-none absolute -right-8 bottom-4 h-56 w-auto opacity-[0.06]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <h2 className="text-[28px] font-bold leading-tight sm:text-[40px]">
          Sua empresa está preparada para crescer com mais organização, integração e
          segurança?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-primary-foreground/85">
          O primeiro passo é compreender onde estão os gargalos e quais mudanças devem ser
          priorizadas.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#contato" className="btn-accent justify-center">
            Solicitar diagnóstico operacional
          </a>
          <a
            href={whatsappLink(
              "Olá, equipe Thanks Up. Gostaria de conversar sobre um diagnóstico operacional.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-inverse justify-center"
          >
            Falar com a Thanks Up <MessageCircle size={16} />
          </a>
        </div>
        <p className="mt-6 text-sm text-primary-foreground/70">
          Conversa inicial para compreender o cenário da empresa. Sem compromisso de
          contratação.
        </p>
      </div>
    </section>
  );
}

/* ---------------- CONTATO ---------------- */

const SOLUTION_OPTIONS = [
  "Diagnóstico Operacional Empresarial",
  "Estruturação de Processos e Governança",
  "Implantação e Transformação Digital",
  "Zoho CRM e Zoho CRM Plus",
  "Gestão da Evolução Operacional",
  "Ainda não sei qual solução preciso",
];

const FIELDS = [
  { id: "nome", label: "Nome", type: "text" },
  { id: "empresa", label: "Empresa", type: "text" },
  { id: "cargo", label: "Cargo", type: "text" },
  { id: "email", label: "E-mail corporativo", type: "email" },
  { id: "telefone", label: "Telefone", type: "tel" },
  { id: "colaboradores", label: "Número aproximado de colaboradores", type: "text" },
];

function ContactChannels() {
  return (
    <div className="mt-8 grid gap-3">
      <a
        href={whatsappLink(
          "Olá, equipe Thanks Up. Gostaria de conversar sobre um diagnóstico operacional.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-violet"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-soft text-violet">
          <MessageCircle size={18} />
        </span>
        <span>
          <span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            WhatsApp
          </span>
          <span className="block text-[15px] font-semibold text-foreground">
            {WHATSAPP_DISPLAY}
          </span>
        </span>
      </a>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-violet"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-primary-deep">
          <Mail size={18} />
        </span>
        <span>
          <span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            E-mail
          </span>
          <span className="block text-[15px] font-semibold text-foreground">
            {CONTACT_EMAIL}
          </span>
        </span>
      </a>
    </div>
  );
}

function Contact() {
  const [solucao, setSolucao] = useState("");
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    function onSelect(e: Event) {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setSolucao(detail);
    }
    window.addEventListener(SOLUTION_EVENT, onSelect);
    return () => window.removeEventListener(SOLUTION_EVENT, onSelect);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const message = [
      "Olá, equipe Thanks Up. Gostaria de conversar sobre um diagnóstico operacional.",
      "",
      `Nome: ${get("nome")}`,
      `Empresa: ${get("empresa")}`,
      `Cargo: ${get("cargo")}`,
      `E-mail: ${get("email")}`,
      `Telefone: ${get("telefone")}`,
      `Número de colaboradores: ${get("colaboradores")}`,
      `Solução de interesse: ${get("solucao")}`,
      `Principal desafio: ${get("desafio")}`,
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="bg-muted/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <Eyebrow>Contato</Eyebrow>
          <SectionTitle className="text-foreground">
            Solicite um diagnóstico operacional
          </SectionTitle>
          <p className="mt-5 text-[16px] leading-relaxed text-muted-foreground">
            Conte brevemente o cenário atual da sua empresa. A partir daí, iniciamos a
            conversa sobre prioridades e próximos passos.
          </p>
          <ContactChannels />
        </div>

        <div className="rounded-2xl border border-border bg-card p-7 sm:p-9">
          <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
            {FIELDS.map((f) => (
              <div key={f.id} className="flex flex-col gap-1.5">
                <label htmlFor={f.id} className="form-label">
                  {f.label} <span className="text-violet">*</span>
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required
                  maxLength={120}
                  className="form-input"
                />
              </div>
            ))}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="solucao" className="form-label">
                Solução de interesse <span className="text-violet">*</span>
              </label>
              <select
                id="solucao"
                name="solucao"
                required
                className="form-input"
                value={solucao}
                onChange={(e) => setSolucao(e.target.value)}
              >
                <option value="">Selecione uma opção</option>
                {SOLUTION_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="desafio" className="form-label">
                Principal desafio da empresa <span className="text-violet">*</span>
              </label>
              <textarea
                id="desafio"
                name="desafio"
                rows={4}
                required
                maxLength={1000}
                className="form-input"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="consentimento"
                className="flex items-start gap-3 text-[14px] leading-relaxed text-muted-foreground"
              >
                <input
                  id="consentimento"
                  name="consentimento"
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-[var(--violet)]"
                />
                <span>
                  Concordo com o{" "}
                  <Link
                    to="/privacidade"
                    className="font-semibold text-violet underline underline-offset-4"
                  >
                    uso dos meus dados
                  </Link>{" "}
                  para que a Thanks Up entre em contato sobre esta solicitação.
                </span>
              </label>
            </div>

            <button type="submit" className="btn-violet justify-center sm:col-span-2">
              Enviar pelo WhatsApp <MessageCircle size={16} />
            </button>
            <p className="text-[13px] leading-relaxed text-muted-foreground sm:col-span-2">
              Você será direcionado ao WhatsApp da Thanks Up com as informações preenchidas.
            </p>
            <p className="text-[13px] leading-relaxed text-muted-foreground sm:col-span-2">
              Prefere enviar por e-mail? Escreva para{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-violet underline underline-offset-4"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------------- RODAPÉ ---------------- */

const FOOTER_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Método DNA", href: "#metodo-dna" },
  { label: "Zoho CRM", href: "#zoho" },
  { label: "Por que a Thanks Up", href: "#por-que" },
  { label: "Contato", href: "#contato" },
  { label: "Política de Privacidade", href: "/privacidade", internal: true },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-deep py-14 text-primary-foreground">
      <BrandMark className="pointer-events-none absolute -bottom-10 right-4 h-52 w-auto opacity-[0.06]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Logo variant="white" sizeClass="h-9 w-auto" />
          <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
            Inteligência Operacional Corporativa
          </p>
          <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-primary-foreground/75">
            Eficiência corporativa com inteligência estratégica.
          </p>
          <p className="mt-3 text-[14px] font-medium text-primary-foreground/60">
            Uma empresa do Ecossistema Thanks.
          </p>
        </div>
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
            Navegação
          </p>
          <ul className="mt-4 grid gap-2.5">
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}>
                {l.internal ? (
                  <Link
                    to={l.href}
                    className="text-[15px] text-primary-foreground/75 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    className="text-[15px] text-primary-foreground/75 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
            Contato
          </p>
          <ul className="mt-4 grid gap-3 text-[15px]">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-accent"
              >
                <MessageCircle size={16} className="shrink-0" />
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-accent"
              >
                <Mail size={16} className="shrink-0" />
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative mx-auto mt-12 max-w-6xl border-t border-primary-foreground/15 px-5 pt-6">
        <p className="text-sm text-primary-foreground/70">
          Thanks Up Gestão de Negócios. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <Challenges />
        <ValueProposition />
        <Solutions />
        <MethodDNA />
        <Zoho />
        <WhyUs />
        
        {/* Seção "Conteúdos" desativada até existirem artigos reais (ver componente Content). */}
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
