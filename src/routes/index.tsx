import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  CheckCircle2,
  Compass,
  Database,
  Gauge,
  Handshake,
  Image as ImageIcon,
  Layers,
  Menu,
  Repeat,
  Settings2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  X,
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
  { label: "Início", href: "#inicio" },
  { label: "Desafios", href: "#desafios" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Método DNA", href: "#metodo-dna" },
  { label: "Zoho", href: "#zoho" },
  { label: "Por que a Thanks Up", href: "#por-que" },
  { label: "Contato", href: "#contato" },
];

function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-extrabold">
        TU
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold text-foreground">Thanks Up</span>
        <span className="block text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Gestão de Negócios
        </span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a href="#contato" className="btn-primary">
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
              className="btn-primary mt-2 justify-center"
            >
              Solicitar diagnóstico
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
      {children}
    </p>
  );
}

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-primary/25 bg-primary-soft/60 p-8 text-center ${className}`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-background text-primary shadow-sm">
        <ImageIcon size={20} />
      </span>
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{label}</p>
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="pt-[72px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div>
          <Eyebrow>Inteligência Operacional Corporativa</Eyebrow>
          <h1 className="text-[34px] font-extrabold leading-[1.12] text-foreground sm:text-5xl">
            Organizamos a gestão da sua empresa para que ela cresça com{" "}
            <span className="text-primary">eficiência</span>.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            Estruturamos processos, implantamos tecnologia e transformamos informações em
            indicadores para construir operações mais organizadas, integradas e preparadas
            para crescer.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contato" className="btn-primary justify-center">
              Solicitar diagnóstico
            </a>
            <a href="#metodo-dna" className="btn-outline justify-center">
              Conheça o Método DNA
            </a>
          </div>
          <p className="mt-7 border-l-2 border-accent pl-4 text-sm font-medium leading-relaxed text-muted-foreground">
            Eficiência corporativa com inteligência estratégica.
          </p>
        </div>
        <Placeholder
          className="min-h-[340px] lg:min-h-[420px]"
          label="Espaço reservado para foto ou vídeo real da equipe em reunião, diagnóstico ou apresentação de projeto."
        />
      </div>
    </section>
  );
}

const CHALLENGES = [
  {
    icon: Workflow,
    title: "Processos diferentes em cada área",
    text: "Cada equipe executa as atividades de uma forma, dificultando o controle e a padronização.",
  },
  {
    icon: Database,
    title: "Informações espalhadas",
    text: "Dados importantes estão distribuídos entre planilhas, mensagens, e-mails e sistemas que não se comunicam.",
  },
  {
    icon: BarChart3,
    title: "Falta de indicadores confiáveis",
    text: "A liderança não consegue acompanhar resultados em tempo real ou depende da consolidação manual das informações.",
  },
  {
    icon: Repeat,
    title: "Retrabalho e baixa produtividade",
    text: "Atividades repetitivas, aprovações demoradas e tarefas manuais consomem tempo da equipe.",
  },
  {
    icon: Settings2,
    title: "Tecnologia mal aproveitada",
    text: "A empresa possui ferramentas, mas elas não estão configuradas de acordo com os processos reais da operação.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento sem previsibilidade",
    text: "A empresa cresce, mas não possui estrutura, processos e indicadores suficientes para sustentar a expansão.",
  },
];

function Challenges() {
  return (
    <section id="desafios" className="bg-muted/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <Eyebrow>Desafios</Eyebrow>
          <h2 className="text-[28px] font-bold leading-tight text-foreground sm:text-[38px]">
            Sua empresa cresceu. A gestão conseguiu acompanhar?
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
            O crescimento costuma revelar problemas que antes permaneciam escondidos.
            Processos deixam de acompanhar o ritmo da operação, informações ficam
            espalhadas, decisões dependem de planilhas e as equipes passam a trabalhar mais
            sem necessariamente produzir melhor.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-xl border border-border bg-card p-7 transition-shadow hover:shadow-[0_12px_40px_-24px_oklch(0.42_0.17_295/0.6)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold text-foreground">{title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-12 rounded-xl border-l-4 border-accent bg-card px-7 py-6 text-[18px] font-medium leading-relaxed text-foreground sm:text-[20px]">
          Tecnologia sem processo não organiza uma empresa. Apenas acelera o que já está
          desorganizado.
        </p>
      </div>
    </section>
  );
}

const VALUE_STEPS = [
  {
    icon: Compass,
    title: "Diagnóstico",
    text: "Compreendemos o cenário atual, os gargalos, os objetivos e as prioridades da empresa.",
  },
  {
    icon: Layers,
    title: "Estruturação",
    text: "Desenhamos processos, responsabilidades, fluxos, indicadores e o plano de evolução da operação.",
  },
  {
    icon: Settings2,
    title: "Implantação",
    text: "Colocamos processos, tecnologia, automações e indicadores em funcionamento, capacitando as equipes envolvidas.",
  },
  {
    icon: Gauge,
    title: "Acompanhamento",
    text: "Monitoramos a adoção, os resultados e as oportunidades de melhoria contínua.",
  },
];

function ValueProposition() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <Eyebrow>Como atuamos</Eyebrow>
          <h2 className="text-[28px] font-bold leading-tight text-foreground sm:text-[38px]">
            Não entregamos apenas recomendações. Desenvolvemos e implantamos soluções para
            transformar a operação.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
            A Thanks Up atua desde a compreensão do cenário até a implantação e o
            acompanhamento das melhorias. Estruturamos processos, conectamos tecnologia,
            organizamos indicadores e apoiamos a evolução da gestão.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_STEPS.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="relative rounded-xl bg-muted/70 p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon size={20} />
                </span>
                <span className="text-sm font-semibold text-primary">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center text-[17px] leading-relaxed text-foreground">
          O diagnóstico revela as prioridades. A estruturação define o caminho. A
          implantação transforma a operação. O acompanhamento sustenta a evolução.
        </p>
      </div>
    </section>
  );
}

const SOLUTIONS = [
  {
    code: "TU001",
    name: "Diagnóstico Estratégico Empresarial",
    benefit: "Descubra onde sua empresa pode evoluir.",
    text: "Analisamos a operação, identificamos gargalos, riscos e oportunidades e construímos uma visão clara das prioridades do negócio.",
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
    code: "TU002",
    name: "Estruturação de Processos e Governança",
    benefit: "Organize a operação para crescer com mais controle.",
    text: "Mapeamos e estruturamos processos, responsabilidades, fluxos de decisão e formas de acompanhamento para construir uma gestão mais organizada e previsível.",
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
    code: "TU003",
    name: "Transformação Digital Empresarial",
    benefit: "Integre pessoas, processos e tecnologia em uma única operação.",
    text: "Implantamos tecnologia a partir da realidade da empresa, conectando processos, áreas e informações para reduzir atividades manuais e aumentar o controle da gestão.",
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
    code: "TU004",
    name: "Assessoria Estratégica em Gestão",
    benefit: "Tenha indicadores em tempo real para tomar decisões com segurança.",
    text: "Acompanhamos a evolução da operação, analisamos resultados e apoiamos a liderança na priorização e implantação de novas melhorias.",
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
    cta: "Conhecer assessoria",
    icon: Gauge,
  },
];

function Solutions() {
  return (
    <section id="solucoes" className="bg-muted/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <Eyebrow>Portfólio</Eyebrow>
          <h2 className="text-[28px] font-bold leading-tight text-foreground sm:text-[38px]">
            Soluções para cada etapa da transformação
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
            Um portfólio enxuto, conectado e orientado pelos desafios reais da empresa.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SOLUTIONS.map(({ icon: Icon, ...s }) => (
            <article
              key={s.code}
              className="flex flex-col rounded-xl border border-border bg-card p-7 lg:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <Icon size={20} />
                </span>
                <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold tracking-wider text-muted-foreground">
                  {s.code}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{s.name}</h3>
              <p className="mt-2 text-[15px] font-semibold text-primary">{s.benefit}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {s.text}
              </p>
              <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Principais entregas
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2 text-[14px] text-foreground/85">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contato" className="btn-ghost mt-7 self-start">
                {s.cta} <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const DNA_STEPS = [
  {
    title: "Diagnóstico",
    text: "Compreendemos o cenário atual, os objetivos, os gargalos e as prioridades da empresa.",
  },
  {
    title: "Mapeamento",
    text: "Analisamos processos, responsabilidades, informações, sistemas e indicadores.",
  },
  {
    title: "Direcionamento",
    text: "Construímos o plano de transformação, definindo prioridades, escopo, responsáveis e etapas.",
  },
  {
    title: "Implantação",
    text: "Colocamos as melhorias em prática por meio de processos, tecnologia, capacitação e acompanhamento.",
  },
  {
    title: "Evolução",
    text: "Monitoramos os resultados, corrigimos desvios e identificamos novas oportunidades de melhoria.",
  },
];

function MethodDNA() {
  return (
    <section id="metodo-dna" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <Eyebrow>Metodologia proprietária</Eyebrow>
            <h2 className="text-[30px] font-extrabold leading-tight text-foreground sm:text-[42px]">
              Método DNA
            </h2>
            <p className="mt-2 text-[17px] font-semibold text-primary">
              Desenvolvimento de Negócios e Ativos
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
              Cada empresa possui uma realidade própria. Por isso, nossos projetos não
              começam pela ferramenta ou por uma solução pronta. Começam pela compreensão do
              negócio.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
              O Método DNA é a metodologia proprietária da Thanks Up para diagnosticar a
              operação, estruturar prioridades, implantar melhorias e acompanhar os
              resultados da transformação.
            </p>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {DNA_STEPS.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-xl border border-border bg-background p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-[13px] font-bold text-accent-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-[16px] font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-12 max-w-3xl border-l-4 border-primary pl-5 text-[18px] leading-relaxed text-foreground">
            A transformação não termina quando o sistema entra no ar. Ela acontece quando a
            nova forma de trabalhar passa a fazer parte da rotina da empresa.
          </p>
          <a href="#contato" className="btn-primary mt-8">
            Solicitar diagnóstico pelo Método DNA
          </a>
        </div>
      </div>
    </section>
  );
}

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

function Zoho() {
  return (
    <section id="zoho" className="bg-muted/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Eyebrow>Tecnologia aplicada à realidade do negócio</Eyebrow>
          <h2 className="text-[28px] font-bold leading-tight text-foreground sm:text-[38px]">
            Mais do que implantar um CRM, estruturamos a operação que será gerenciada por
            ele.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
            Como Parceiros Consultores Oficiais Zoho, apoiamos empresas na implantação e
            evolução do Zoho CRM e do Zoho CRM Plus.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
            Nosso trabalho começa antes da configuração da plataforma. Primeiro analisamos o
            processo comercial, os dados, os responsáveis, as etapas do funil e os
            indicadores necessários. Depois configuramos a tecnologia para sustentar a
            operação desenhada.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {ZOHO_LIST.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-lg bg-card px-4 py-3 text-[15px] text-foreground/90"
              >
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-xl border-l-4 border-accent bg-card px-6 py-5 text-[17px] leading-relaxed text-foreground">
            O CRM não deve obrigar a empresa a se adaptar a uma ferramenta mal configurada. A
            tecnologia deve refletir o processo que a empresa precisa executar.
          </p>
          <a href="#contato" className="btn-primary mt-8">
            Falar sobre Zoho CRM
          </a>
        </div>
        <div className="flex flex-col gap-5">
          <Placeholder
            className="min-h-[240px] bg-card"
            label="Reservar local para aplicação futura do selo oficial de parceiro autorizado, respeitando integralmente as diretrizes de marca da Zoho."
          />
          <Placeholder
            className="min-h-[220px] bg-card"
            label="Espaço reservado para foto real de sessão de implantação ou tela de painéis do projeto."
          />
        </div>
      </div>
    </section>
  );
}

const DIFFS = [
  {
    icon: Compass,
    title: "Visão de negócio antes da tecnologia",
    text: "Não começamos pela ferramenta. Começamos entendendo o problema, o processo e o resultado esperado.",
  },
  {
    icon: Layers,
    title: "Consultoria e execução",
    text: "Não entregamos apenas um relatório. Participamos da implantação das melhorias definidas.",
  },
  {
    icon: Gauge,
    title: "Acompanhamento após o projeto",
    text: "Apoiamos a adoção, analisamos indicadores e conduzimos a evolução da operação.",
  },
  {
    icon: Settings2,
    title: "Soluções desenhadas para cada realidade",
    text: "O projeto respeita o porte, a maturidade, as prioridades e a capacidade de execução da empresa.",
  },
  {
    icon: Users,
    title: "Comunicação próxima da liderança",
    text: "Trabalhamos em conjunto com os responsáveis pelas decisões e com as equipes que executarão os novos processos.",
  },
];

function WhyUs() {
  return (
    <section id="por-que" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <Eyebrow>Diferenciais</Eyebrow>
          <h2 className="text-[28px] font-bold leading-tight text-foreground sm:text-[38px]">
            Por que conduzir essa transformação com a Thanks Up?
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            {DIFFS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border border-border bg-card p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-foreground">{title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Placeholder
              className="min-h-[320px] flex-1"
              label="Espaço reservado para uma foto real da equipe Thanks Up."
            />
            <p className="text-center text-sm text-muted-foreground">
              Pessoas reais, próximas da operação e comprometidas com a execução.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const PROFILE = [
  "empresas que cresceram mais rápido do que seus processos",
  "operações dependentes de planilhas e controles manuais",
  "empresas sem indicadores confiáveis",
  "organizações que desejam implantar ou reorganizar o CRM",
  "lideranças que precisam integrar áreas e informações",
  "empresas que querem aumentar produtividade e previsibilidade",
  "organizações dispostas a rever processos e envolver suas equipes na mudança",
];

function ClientProfile() {
  return (
    <section className="bg-muted/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <Eyebrow>Perfil de cliente</Eyebrow>
          <h2 className="text-[28px] font-bold leading-tight text-foreground sm:text-[38px]">
            A Thanks Up é para empresas que querem crescer sem perder o controle da operação.
          </h2>
        </div>
        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {PROFILE.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-lg bg-card px-5 py-4 text-[15px] text-foreground/90"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 rounded-xl border-l-4 border-primary bg-card px-7 py-6 text-[18px] font-medium leading-relaxed text-foreground">
          Não existe transformação consistente sem participação da liderança e compromisso
          com a execução.
        </p>
      </div>
    </section>
  );
}

const POSTS = [
  "Como saber se a gestão da sua empresa acompanhou o crescimento do negócio",
  "Por que implantações de CRM falham — e como evitar",
  "Indicadores que todo gestor deveria acompanhar em tempo real",
];

function Content() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <Eyebrow>Conteúdos</Eyebrow>
          <h2 className="text-[28px] font-bold leading-tight text-foreground sm:text-[38px]">
            Conteúdos para uma gestão mais organizada e inteligente
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {POSTS.map((title) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="flex h-36 items-center justify-center border-b border-dashed border-primary/20 bg-primary-soft/60 text-primary">
                <ImageIcon size={22} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Em breve
                </span>
                <h3 className="mt-3 text-[17px] font-semibold leading-snug text-foreground">
                  {title}
                </h3>
                <p className="mt-auto pt-4 text-sm text-muted-foreground">
                  Conteúdo que será publicado futuramente.
                </p>
              </div>
            </article>
          ))}
        </div>
        <a href="#contato" className="btn-outline mt-10">
          Ver conteúdos
        </a>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-primary py-20 text-primary-foreground lg:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <h2 className="text-[28px] font-bold leading-tight sm:text-[38px]">
          Sua empresa está preparada para crescer com mais organização, integração e
          segurança?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-primary-foreground/85">
          O primeiro passo não é contratar uma plataforma ou iniciar um projeto extenso. É
          entender onde estão os gargalos, quais mudanças devem ser priorizadas e qual
          caminho faz sentido para a realidade da sua empresa.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#contato" className="btn-accent justify-center">
            Solicitar diagnóstico estratégico
          </a>
          <a href="#contato" className="btn-inverse justify-center">
            Falar com a Thanks Up
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

const SOLUTION_OPTIONS = [
  "Diagnóstico Estratégico Empresarial",
  "Estruturação de Processos e Governança",
  "Transformação Digital Empresarial",
  "Zoho CRM",
  "Assessoria Estratégica em Gestão",
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

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contato" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <Eyebrow>Contato</Eyebrow>
          <h2 className="text-[28px] font-bold leading-tight text-foreground sm:text-[36px]">
            Solicite um diagnóstico estratégico
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
            Conte brevemente o cenário atual da sua empresa. A partir das informações
            enviadas, iniciamos uma conversa para entender prioridades e próximos passos.
          </p>
          <Placeholder
            className="mt-8 min-h-[180px]"
            label="Espaço reservado para dados de contato oficiais da empresa (endereço, telefone, e-mail e redes sociais)."
          />
        </div>

        <div className="rounded-2xl border border-border bg-card p-7 sm:p-9">
          {sent ? (
            <div className="flex min-h-[380px] flex-col items-center justify-center gap-4 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft text-primary">
                <CheckCircle2 size={26} />
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                Solicitação enviada
              </h3>
              <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Recebemos suas informações. Nossa equipe entrará em contato para compreender
                melhor o cenário da sua empresa.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="btn-ghost mt-2"
              >
                Enviar nova solicitação
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              {FIELDS.map((f) => (
                <div key={f.id} className="flex flex-col gap-1.5">
                  <label htmlFor={f.id} className="form-label">
                    {f.label}
                  </label>
                  <input id={f.id} name={f.id} type={f.type} required className="form-input" />
                </div>
              ))}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="solucao" className="form-label">
                  Solução de interesse
                </label>
                <select id="solucao" name="solucao" required className="form-input">
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
                  Principal desafio da empresa
                </label>
                <textarea id="desafio" name="desafio" rows={4} required className="form-input" />
              </div>
              <button type="submit" className="btn-primary sm:col-span-2 justify-center">
                Enviar solicitação
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const FOOTER_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Método DNA", href: "#metodo-dna" },
  { label: "Zoho CRM", href: "#zoho" },
  { label: "Por que a Thanks Up", href: "#por-que" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Contato", href: "#contato" },
  { label: "Política de Privacidade", href: "#contato" },
];

function Footer() {
  return (
    <footer className="border-t border-border bg-muted/60 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            Boutique de transformação empresarial especializada em estratégia, processos,
            tecnologia e inteligência de gestão.
          </p>
          <p className="mt-5 text-sm font-medium text-foreground">
            Uma empresa do Ecossistema Thanks.
          </p>
        </div>
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-foreground">
            Navegação
          </p>
          <ul className="mt-4 grid gap-2.5">
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[15px] text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-foreground">
            Contato
          </p>
          <div className="mt-4 rounded-xl border border-dashed border-primary/25 bg-background p-5 text-sm leading-relaxed text-muted-foreground">
            Espaço reservado para endereço, telefone, e-mail, CNPJ e redes sociais oficiais.
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-border px-5 pt-6">
        <p className="text-sm text-muted-foreground">
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
        <ClientProfile />
        <div id="conteudos">
          <Content />
        </div>
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
