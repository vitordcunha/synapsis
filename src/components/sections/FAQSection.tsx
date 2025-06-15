import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useState } from "react";

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto tempo leva para implementar uma automação?",
      answer:
        "O tempo varia conforme a complexidade, mas a maioria das automações básicas fica pronta entre 2-4 semanas. Automações mais complexas podem levar de 1-3 meses. Durante o diagnóstico, fornecemos um cronograma detalhado.",
    },
    {
      question: "Preciso de conhecimento técnico para usar as automações?",
      answer:
        "Não! Nossas automações são projetadas para serem intuitivas. Fornecemos treinamento completo para sua equipe e suporte contínuo. A ideia é que você foque no seu negócio, não na tecnologia.",
    },
    {
      question: "As automações funcionam com meus sistemas atuais?",
      answer:
        "Sim, nossas soluções são desenvolvidas para integrar com a maioria dos sistemas existentes (ERPs, CRMs, planilhas, emails, etc.). Durante o diagnóstico, mapeamos todas as integrações necessárias.",
    },
    {
      question: "E se eu quiser cancelar o serviço?",
      answer:
        "Você pode cancelar a qualquer momento com 30 dias de antecedência. As automações desenvolvidas durante o setup continuam funcionando, mas você perde o suporte e atualizações da plataforma.",
    },
    {
      question: "Vocês oferecem garantia nos resultados?",
      answer:
        "Sim! Garantimos que você verá melhorias mensuráveis nos primeiros 60 dias ou devolvemos o investimento do setup. Nosso sucesso está diretamente ligado ao seu.",
    },
    {
      question: "Como funciona o suporte técnico?",
      answer:
        "Oferecemos suporte via chat, email e telefone. Planos básicos têm suporte em horário comercial, enquanto planos profissionais incluem suporte prioritário com resposta em até 2 horas.",
    },
    {
      question: "Posso começar com um processo e expandir depois?",
      answer:
        "Absolutamente! Recomendamos começar com o processo mais crítico e expandir gradualmente. Isso permite que sua equipe se adapte e você veja resultados rapidamente antes de investir em mais automações.",
    },
    {
      question: "Os dados da minha empresa ficam seguros?",
      answer:
        "Segurança é nossa prioridade. Utilizamos criptografia de ponta, servidores certificados e seguimos as melhores práticas de proteção de dados. Seus dados nunca são compartilhados com terceiros.",
    },
  ];

  return (
    <section className="w-full mt-32">
      <div className="text-center mb-16 flex items-center flex-col gap-5">
        <HoverBorderGradient
          containerClassName="rounded-full border-border"
          as="div"
          className="bg-background text-foreground flex items-center space-x-2"
        >
          <p className="text-neutral-500 text-sm font-medium tracking-widest uppercase">
            PERGUNTAS FREQUENTES
          </p>
        </HoverBorderGradient>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          FAQ: Automação de Processos
          <br />
          com Inteligência Artificial
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Perguntas frequentes sobre implementação de IA empresarial, custos,
          integração de sistemas e resultados da automação de processos
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-neutral-600"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-neutral-800/70 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div
                  className={`transform transition-transform duration-300 ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-neutral-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent mb-6"></div>
                  <p className="text-neutral-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA no final do FAQ */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-neutral-400 mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão
              específica do seu negócio
            </p>
            <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
