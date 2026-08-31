import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import logoColor from "../assets/thanksup-logo.png.asset.json";
import { CONTACT_EMAIL } from "../lib/contact";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Thanks Up" },
      {
        name: "description",
        content:
          "Como a Thanks Up coleta, utiliza, armazena e protege os dados informados no formulário de contato.",
      },
      { property: "og:title", content: "Política de Privacidade | Thanks Up" },
      {
        property: "og:description",
        content:
          "Dados coletados, finalidade, compartilhamento, armazenamento e direitos do titular.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-[22px] font-bold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-[16px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <div className="bg-background">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-[88px] max-w-3xl items-center justify-between px-5">
          <Link to="/" className="inline-flex items-center">
            <img
              src={logoColor.url}
              alt="Thanks Up Gestão de Negócios"
              className="h-11 w-auto"
            />
          </Link>
          <Link to="/" className="btn-ghost text-violet">
            <ArrowLeft size={16} /> Voltar ao site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-violet">
          <span className="brand-rule" aria-hidden="true" />
          Thanks Up
        </p>
        <h1 className="text-[32px] font-extrabold leading-tight text-foreground sm:text-[42px]">
          Política de Privacidade
        </h1>

        <Block title="Dados coletados">
          <p>
            A Thanks Up pode coletar nome, empresa, cargo, e-mail, telefone, quantidade
            aproximada de colaboradores, solução de interesse e informações fornecidas
            voluntariamente no formulário.
          </p>
        </Block>

        <Block title="Finalidade">
          <p>Os dados são utilizados exclusivamente para:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>responder à solicitação;</li>
            <li>compreender o cenário da empresa;</li>
            <li>entrar em contato;</li>
            <li>apresentar soluções relacionadas ao interesse informado.</li>
          </ul>
        </Block>

        <Block title="Compartilhamento">
          <p>
            A Thanks Up não comercializa os dados pessoais fornecidos. Os dados poderão ser
            processados por ferramentas necessárias para comunicação e operação do
            atendimento.
          </p>
        </Block>

        <Block title="Armazenamento">
          <p>
            As informações serão mantidas apenas pelo período necessário para atendimento,
            relacionamento comercial e cumprimento de obrigações legais.
          </p>
        </Block>

        <Block title="Direitos do titular">
          <p>
            O titular poderá solicitar acesso, correção ou exclusão dos dados pelo e-mail{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-violet underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Block>

        <Block title="Atualização">
          <p>
            A política poderá ser atualizada para acompanhar alterações legais, operacionais
            ou tecnológicas.
          </p>
        </Block>
      </main>

      <footer className="border-t border-border py-8">
        <p className="mx-auto max-w-3xl px-5 text-sm text-muted-foreground">
          Thanks Up Gestão de Negócios. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
