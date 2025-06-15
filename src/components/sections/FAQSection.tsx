import { useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion, AnimatePresence } from "motion/react";

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona a implementação da automação?",
      answer:
        "Nosso processo inicia com uma análise detalhada dos seus processos atuais. Em seguida, desenvolvemos uma estratégia personalizada e implementamos as soluções de IA de forma gradual, garantindo que sua equipe esteja preparada para as mudanças. Todo o processo é acompanhado por nossos especialistas.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "Os primeiros resultados geralmente são visíveis em 2-4 semanas após a implementação. A automação completa e otimização dos processos pode levar de 1 a 3 meses, dependendo da complexidade e do número de processos sendo automatizados.",
    },
    {
      question: "É necessário ter conhecimento técnico para usar?",
      answer:
        "Não! Nossas soluções são desenvolvidas para serem intuitivas e fáceis de usar. Fornecemos treinamento completo para sua equipe e suporte contínuo. A IA trabalha em segundo plano, simplificando os processos para os usuários finais.",
    },
    {
      question: "Como vocês garantem a segurança dos dados?",
      answer:
        "Utilizamos as mais altas normas de segurança da indústria, incluindo criptografia end-to-end, conformidade com LGPD/GDPR, e infraestrutura em nuvem certificada. Todos os dados são processados em servidores seguros e nunca compartilhados com terceiros.",
    },
    {
      question: "Posso integrar com meus sistemas existentes?",
      answer:
        "Sim! Nossas soluções são desenvolvidas para integrar perfeitamente com seus sistemas existentes, como ERPs, CRMs, sistemas de contabilidade, e outras ferramentas que sua empresa já utiliza. Trabalhamos com as principais plataformas do mercado.",
    },
    {
      question: "Qual é o ROI esperado da automação?",
      answer:
        "Nossos clientes tipicamente veem uma redução de 70-90% no tempo gasto em processos manuais, resultando em um ROI de 300-500% no primeiro ano. Além da economia de tempo, há redução significativa de erros e melhoria na produtividade geral da equipe.",
    },
  ];

  return (
    <section id="faq" className="w-full mt-32">
      <motion.div
        className="text-center mb-16 flex items-center flex-col gap-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
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
          Dúvidas Comuns sobre
          <br />
          Automação de Processos com IA
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Tire suas dúvidas sobre nossa solução de automação empresarial e
          entenda como podemos transformar seus processos manuais em operações
          inteligentes e eficientes.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-neutral-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-neutral-800/70 transition-colors"
                whileHover={{ backgroundColor: "rgba(38, 38, 38, 0.7)" }}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
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
                </motion.div>
              </motion.button>

              <AnimatePresence initial={false}>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6">
                      <motion.div
                        className="w-full h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent mb-6"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      />
                      <motion.p
                        className="text-neutral-300 leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-white mb-4">
          Ainda tem dúvidas?
        </h3>
        <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
          Nossa equipe de especialistas está pronta para esclarecer qualquer
          questão sobre automação de processos com IA para sua empresa.
        </p>
        <motion.button
          className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Falar com um Especialista
        </motion.button>
      </motion.div>
    </section>
  );
}
