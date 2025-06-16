import { useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion, AnimatePresence } from "motion/react";

interface ProcessExample {
  id: string;
  title: string;
  icon: string;
  pain: string;
  currentTime: string;
  automatedTime: string;
  savings: string;
  activeClassName: string;
}

export function ExamplesSection() {
  const [activeExample, setActiveExample] = useState(0);

  const examples: ProcessExample[] = [
    {
      id: "rh",
      title: "Triagem de Currículos",
      icon: "👥",
      pain: "Horas perdidas analisando currículos manualmente, perdendo bons candidatos por sobrecarga",
      currentTime: "20min/currículo",
      automatedTime: "30s/currículo",
      savings: "R$ 8.400/mês",
      activeClassName:
        "bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/25",
    },
    {
      id: "vendas",
      title: "Qualificação de Leads",
      icon: "📈",
      pain: "Vendedores gastam tempo com leads frios enquanto oportunidades quentes escapam",
      currentTime: "25min/lead",
      automatedTime: "2min/lead",
      savings: "R$ 12.000/mês",
      activeClassName:
        "bg-green-600/20 border-green-500 text-white shadow-lg shadow-green-500/25",
    },
    {
      id: "financeiro",
      title: "Conciliação Bancária",
      icon: "💰",
      pain: "Erros frequentes na conciliação causam retrabalho e decisões financeiras equivocadas",
      currentTime: "4h/dia",
      automatedTime: "15min/dia",
      savings: "R$ 6.500/mês",
      activeClassName:
        "bg-purple-600/20 border-purple-500 text-white shadow-lg shadow-purple-500/25",
    },
    {
      id: "atendimento",
      title: "Suporte ao Cliente",
      icon: "💬",
      pain: "Clientes insatisfeitos com demora no atendimento, equipe sobrecarregada com tarefas repetitivas",
      currentTime: "8min/ticket",
      automatedTime: "1min/ticket",
      savings: "R$ 9.800/mês",
      activeClassName:
        "bg-orange-600/20 border-orange-500 text-white shadow-lg shadow-orange-500/25",
    },
  ];

  return (
    <section id="exemplos" className="w-full mt-32">
      {/* Header padrão do site */}
      <motion.div
        className="text-center mb-8 flex items-center flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <HoverBorderGradient
          containerClassName="rounded-full border-border mb-6"
          as="div"
          className="bg-background text-foreground flex items-center space-x-2"
        >
          <p className="text-neutral-500 text-sm font-medium tracking-widest uppercase">
            CASOS DE SUCESSO
          </p>
        </HoverBorderGradient>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Processos que Você Pode Automatizar Hoje
        </h2>
        <p className="text-xl text-neutral-300 max-w-3xl">
          Identifique qual dessas <strong>dores do seu negócio</strong> nossa IA
          pode resolver. Veja o{" "}
          <strong className="text-purple-400">tempo e dinheiro</strong> que você
          pode economizar automatizando processos manuais.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Tabs de seleção */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {examples.map((example, index) => (
            <motion.button
              key={example.id}
              onClick={() => setActiveExample(index)}
              className={`px-6 py-4 rounded-xl border transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                activeExample === index
                  ? example.activeClassName
                  : "bg-neutral-800/50 border-neutral-600 text-neutral-300 hover:border-neutral-500 hover:bg-neutral-700/50"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl">{example.icon}</span>
              <div className="text-left">
                <div className="font-semibold text-sm">{example.title}</div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Conteúdo principal */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExample}
            className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Problema atual */}
              <motion.div
                className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 flex flex-col"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4 text-left">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl border border-red-500/30 flex items-center justify-center text-xl">
                    {examples[activeExample].icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {examples[activeExample].title}
                    </h3>
                    <p className="text-red-400 text-sm">Situação Atual</p>
                  </div>
                </div>

                <p className="text-neutral-300 mb-6 leading-relaxed">
                  {examples[activeExample].pain}
                </p>

                <div className="bg-red-500/10 rounded-lg p-4 mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300 text-sm">
                      Tempo gasto:
                    </span>
                    <span className="text-red-400 font-bold text-lg">
                      {examples[activeExample].currentTime}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Solução automatizada */}
              <motion.div
                className="bg-green-500/10 border border-green-500/20 rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4 text-left">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl border border-green-500/30 flex items-center justify-center">
                    <span className="text-green-400 text-xl">✨</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Com Automação
                    </h3>
                    <p className="text-green-400 text-sm">IA Trabalhando</p>
                  </div>
                </div>

                <p className="text-neutral-300 mb-6 leading-relaxed">
                  Nossa IA executa o processo automaticamente, com mais precisão
                  e velocidade que qualquer humano conseguiria.
                </p>

                <div className="bg-green-500/10 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300 text-sm">
                      Novo tempo:
                    </span>
                    <span className="text-green-400 font-bold text-lg">
                      {examples[activeExample].automatedTime}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Resultado/Economia */}
              <motion.div
                className={`bg-purple-500/10 border border-purple-500/20 rounded-xl p-6`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4 text-left">
                  <div
                    className={`w-12 h-12 bg-purple-500/20 rounded-xl border border-purple-500/30 flex items-center justify-center`}
                  >
                    <span className={`text-purple-400 text-xl`}>🚀</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Resultado Final
                    </h3>
                    <p className={`text-purple-400 text-sm`}>Economia Mensal</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className={`bg-purple-500/10 rounded-lg p-4`}>
                    <div className="text-center">
                      <div
                        className={`text-3xl font-bold text-purple-400 mb-2`}
                      >
                        {examples[activeExample].savings}
                      </div>
                      <div className="text-neutral-300 text-sm">
                        Economia mensal estimada
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-purple-500/10 rounded-lg p-3">
                      <div className="text-white font-bold text-lg">95%</div>
                      <div className="text-neutral-400 text-xs">
                        Menos tempo
                      </div>
                    </div>
                    <div className="bg-purple-500/10 rounded-lg p-3">
                      <div className="text-white font-bold text-lg">99%</div>
                      <div className="text-neutral-400 text-xs">Precisão</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              className="mt-8 pt-6 border-t border-neutral-600 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <p className="text-neutral-300 mb-4">
                Sua empresa tem esse mesmo processo? Vamos automatizá-lo!
              </p>
              <motion.a
                href="#contato"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Automatizar Meu Processo</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
