import { useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion, AnimatePresence } from "motion/react";

interface Example {
  sector: string;
  icon: string;
  problem: string;
  timeManual: string;
  timeAuto: string;
  solution: string;
  benefits: string[];
  metrics: {
    timeReduction: string;
    errorReduction: string;
    costSaving: string;
  };
}

export function ExamplesSection() {
  const [activeExample, setActiveExample] = useState(0);

  const examples: Example[] = [
    {
      sector: "Contabilidade",
      icon: "📊",
      problem: "Conciliação bancária manual",
      timeManual: "4h por dia",
      timeAuto: "15min por dia",
      solution: "IA classifica e concilia transações automaticamente",
      benefits: [
        "Elimina erros de classificação",
        "Identifica discrepâncias automaticamente",
        "Gera relatórios em tempo real",
        "Integra com sistemas contábeis",
      ],
      metrics: {
        timeReduction: "94%",
        errorReduction: "99%",
        costSaving: "R$ 8.400/mês",
      },
    },
    {
      sector: "Recursos Humanos",
      icon: "👥",
      problem: "Triagem de currículos",
      timeManual: "20min por currículo",
      timeAuto: "30s por currículo",
      solution: "IA analisa competências e adequação à vaga",
      benefits: [
        "Ranking automático de candidatos",
        "Análise de soft skills por IA",
        "Eliminação de viés inconsciente",
        "Resposta automática aos candidatos",
      ],
      metrics: {
        timeReduction: "97%",
        errorReduction: "85%",
        costSaving: "R$ 12.000/mês",
      },
    },
    {
      sector: "E-commerce",
      icon: "🛒",
      problem: "Atendimento ao cliente",
      timeManual: "10min por ticket",
      timeAuto: "1min por ticket",
      solution: "IA resolve dúvidas comuns e escalona casos complexos",
      benefits: [
        "Atendimento 24/7 sem pausas",
        "Respostas personalizadas",
        "Escalação inteligente para humanos",
        "Aprendizado contínuo",
      ],
      metrics: {
        timeReduction: "90%",
        errorReduction: "70%",
        costSaving: "R$ 15.000/mês",
      },
    },
    {
      sector: "Imobiliárias",
      icon: "🏠",
      problem: "Qualificação de leads",
      timeManual: "30min por lead",
      timeAuto: "2min por lead",
      solution: "IA analisa perfil e interesse do cliente automaticamente",
      benefits: [
        "Pontuação automática de leads",
        "Segmentação por perfil de compra",
        "Agendamento automático",
        "Follow-up personalizado",
      ],
      metrics: {
        timeReduction: "93%",
        errorReduction: "80%",
        costSaving: "R$ 6.500/mês",
      },
    },
  ];

  return (
    <section id="exemplos" className="w-full mt-32">
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
            EXEMPLOS PRÁTICOS
          </p>
        </HoverBorderGradient>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Resultados Reais de Automação
          <br />
          por Setor Empresarial
        </h2>
        <p className="text-lg text-neutral-400 max-w-3xl">
          Veja casos reais de empresas que revolucionaram seus processos com
          nossa IA. Descubra quanto tempo e dinheiro você pode economizar
          automatizando seus processos manuais.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Sector Selection Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {examples.map((example, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveExample(index)}
              className={`px-6 py-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 ${
                activeExample === index
                  ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/25"
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
                <div className="font-semibold">{example.sector}</div>
                <div className="text-xs opacity-80">
                  {activeExample === index ? "Visualizando" : "Ver exemplo"}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExample}
            className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700 rounded-3xl p-8 lg:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column - Problem & Solution */}
              <motion.div
                className="lg:col-span-5 space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Sector Header */}
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-2xl border border-blue-500/30"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {examples[activeExample].icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {examples[activeExample].sector}
                    </h3>
                    <p className="text-blue-400">Automação Inteligente</p>
                  </div>
                </div>

                {/* Problem */}
                <motion.div
                  className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-red-400">⚠️</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      Processo Manual Atual
                    </h4>
                  </div>
                  <p className="text-neutral-300 mb-4">
                    {examples[activeExample].problem}
                  </p>
                  <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                    <span className="text-neutral-300 text-sm">
                      Tempo gasto:
                    </span>
                    <span className="text-red-400 font-bold">
                      {examples[activeExample].timeManual}
                    </span>
                  </div>
                </motion.div>

                {/* Solution */}
                <motion.div
                  className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-400">✨</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      Solução com IA
                    </h4>
                  </div>
                  <p className="text-neutral-300 mb-4">
                    {examples[activeExample].solution}
                  </p>
                  <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                    <span className="text-neutral-300 text-sm">
                      Novo tempo:
                    </span>
                    <span className="text-green-400 font-bold">
                      {examples[activeExample].timeAuto}
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Center Column - Metrics */}
              <motion.div
                className="lg:col-span-3 flex flex-col justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-center space-y-6">
                  <h4 className="text-xl font-bold text-white mb-6">
                    Resultados Comprovados
                  </h4>

                  <div className="space-y-4">
                    <motion.div
                      className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="text-3xl font-bold text-blue-400 mb-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                      >
                        {examples[activeExample].metrics.timeReduction}
                      </motion.div>
                      <div className="text-sm text-neutral-400">
                        Redução de Tempo
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-green-500/10 border border-green-500/20 rounded-xl p-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="text-3xl font-bold text-green-400 mb-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                      >
                        {examples[activeExample].metrics.errorReduction}
                      </motion.div>
                      <div className="text-sm text-neutral-400">
                        Menos Erros
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="text-2xl font-bold text-purple-400 mb-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                      >
                        {examples[activeExample].metrics.costSaving}
                      </motion.div>
                      <div className="text-sm text-neutral-400">
                        Economia Mensal
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Benefits */}
              <motion.div
                className="lg:col-span-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold text-white mb-6 w-fit">
                  Benefícios da Automação
                </h4>

                <div className="space-y-4 mb-8">
                  {examples[activeExample].benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-neutral-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* ROI Highlight */}
                <motion.div
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center">
                    <div className="text-sm text-blue-400 font-medium mb-2">
                      ROI ESPERADO
                    </div>
                    <motion.div
                      className="text-3xl font-bold text-white mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                    >
                      300-500%
                    </motion.div>
                    <div className="text-sm text-neutral-400">
                      no primeiro ano
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="mt-12 pt-8 border-t border-neutral-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h5 className="text-lg font-semibold text-white mb-2 w-fit">
                    Pronto para automatizar{" "}
                    {examples[activeExample].sector.toLowerCase()}?
                  </h5>
                  <p className="text-neutral-400 text-sm">
                    Agende uma demonstração gratuita e veja como podemos
                    transformar seus processos
                  </p>
                </div>
                <motion.button
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Demonstração
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              value: "50+",
              label: "Empresas Automatizadas",
              color: "text-blue-400",
            },
            {
              value: "85%",
              label: "Redução Média de Tempo",
              color: "text-green-400",
            },
            {
              value: "R$ 2M+",
              label: "Economia Total dos Clientes",
              color: "text-purple-400",
            },
            {
              value: "24/7",
              label: "Funcionamento Contínuo",
              color: "text-yellow-400",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
