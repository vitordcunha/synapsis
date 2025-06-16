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

// Componente para gráfico de barras animado
function BarChart({
  value,
  color,
  delay = 0,
}: {
  value: string;
  color: string;
  delay?: number;
}) {
  const percentage = parseInt(value.replace("%", ""));

  return (
    <div className="relative">
      <motion.div
        className={`h-20 w-8 bg-gradient-to-t ${color} rounded-t-lg`}
        initial={{ height: 0 }}
        animate={{ height: `${Math.min(percentage, 100)}%` }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
      <motion.div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
      >
        {value}
      </motion.div>
    </div>
  );
}

// Componente para ícone de seta para baixo (custos)
function DownArrow({ value, delay = 0 }: { value: string; delay?: number }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="text-4xl text-red-400"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay }}
      >
        📉
      </motion.div>
      <motion.div
        className="text-2xl font-bold text-red-400 mt-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.3 }}
      >
        {value}
      </motion.div>
    </motion.div>
  );
}

// Componente para ícone de foguete (crescimento)
function RocketIcon({ value, delay = 0 }: { value: string; delay?: number }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="text-4xl"
        initial={{ y: 0 }}
        animate={{ y: [-5, 0, -5] }}
        transition={{ duration: 2, repeat: Infinity, delay }}
      >
        🚀
      </motion.div>
      <motion.div
        className="text-2xl font-bold text-blue-400 mt-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.3 }}
      >
        +{value}
      </motion.div>
    </motion.div>
  );
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

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO",
      company: "TechCorp Solutions",
      text: "Em 3 meses, nossa eficiência operacional aumentou 250%. A IA automatizou processos que antes tomavam horas da nossa equipe.",
      avatar: "👨‍💼",
    },
    {
      name: "Ana Beatriz",
      role: "Diretora de RH",
      company: "Inovação & Talentos",
      text: "Reduzimos o tempo de contratação de 45 para 12 dias. A qualidade dos candidatos selecionados melhorou drasticamente.",
      avatar: "👩‍💼",
    },
    {
      name: "Roberto Santos",
      role: "Sócio-Diretor",
      company: "Santos & Associados Contabilidade",
      text: "ROI de 400% no primeiro ano. Nossa equipe agora foca em consultoria estratégica ao invés de tarefas manuais.",
      avatar: "👨‍💻",
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
        <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
          Veja casos reais de empresas que{" "}
          <strong>revolucionaram seus processos</strong> com nossa IA. Descubra
          quanto <strong className="text-green-400">tempo e dinheiro</strong>{" "}
          você pode economizar automatizando seus processos manuais.
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
                  <p className="text-neutral-300 mb-4 text-base">
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
                  <p className="text-neutral-300 mb-4 text-base">
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

              {/* Center Column - Enhanced Metrics Visualization */}
              <motion.div
                className="lg:col-span-3 flex flex-col justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-center space-y-8">
                  <h4 className="text-xl font-bold text-white mb-6">
                    Impacto Visualizado
                  </h4>

                  {/* Gráfico de eficiência operacional */}
                  <motion.div
                    className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-sm text-blue-400 mb-4 font-medium">
                      🚀 EFICIÊNCIA OPERACIONAL
                    </div>
                    <div className="flex justify-center mb-4">
                      <RocketIcon value="250%" delay={0.6} />
                    </div>
                    <div className="text-xs text-neutral-400">
                      Aumento médio de produtividade
                    </div>
                  </motion.div>

                  {/* Redução de tempo */}
                  <motion.div
                    className="bg-green-500/10 border border-green-500/20 rounded-xl p-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-sm text-green-400 mb-4 font-medium">
                      ⏱️ REDUÇÃO DE TEMPO
                    </div>
                    <div className="flex justify-center items-end space-x-2 h-24 mb-4">
                      <BarChart
                        value={examples[activeExample].metrics.timeReduction}
                        color="from-green-600 to-green-400"
                        delay={0.7}
                      />
                    </div>
                    <div className="text-xs text-neutral-400">
                      Menos tempo em tarefas manuais
                    </div>
                  </motion.div>

                  {/* Redução de custos */}
                  <motion.div
                    className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-sm text-purple-400 mb-4 font-medium">
                      💰 ECONOMIA MENSAL
                    </div>
                    <div className="flex justify-center mb-4">
                      <DownArrow
                        value={examples[activeExample].metrics.costSaving}
                        delay={0.8}
                      />
                    </div>
                    <div className="text-xs text-neutral-400">
                      Redução de custos operacionais
                    </div>
                  </motion.div>

                  {/* ROI Highlight */}
                  <motion.div
                    className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-xl p-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-sm text-orange-400 font-medium mb-2">
                      📈 ROI MÉDIO
                    </div>
                    <motion.div
                      className="text-2xl font-bold text-white mb-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.0 }}
                    >
                      +45%
                    </motion.div>
                    <div className="text-xs text-neutral-400">
                      Retorno no primeiro ano
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - Benefits */}
              <motion.div
                className="lg:col-span-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold text-white mb-6">
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
                      <span className="text-neutral-300 text-base">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="mt-12 pt-8 border-t border-neutral-600 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <p className="text-neutral-300 mb-6 text-lg">
                Transforme seu negócio como essas empresas fizeram
              </p>
              <motion.a
                href="#contato"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Ver Meu Potencial de Automação</span>
                <svg
                  className="w-5 h-5"
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

      {/* Seção de Depoimentos */}
      <motion.div
        className="mt-32 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-white mb-4">
          O Que Nossos Clientes Dizem
        </h3>
        <p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
          Resultados reais de empresas que confiaram na nossa expertise para
          transformar seus processos
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-blue-400 text-sm">
                    {testimonial.role}
                  </div>
                  <div className="text-neutral-400 text-xs">
                    {testimonial.company}
                  </div>
                </div>
              </div>
              <p className="text-neutral-300 text-sm italic leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Logos de clientes fictícios */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-neutral-500 text-sm mb-8 uppercase tracking-widest">
            Empresas que confiam em nossa tecnologia
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "🏢 TechCorp",
              "🏦 InnovaBank",
              "🏥 MedTech Solutions",
              "🏪 RetailPro",
              "🏛️ LegalTech",
              "🏗️ BuildSmart",
            ].map((logo, index) => (
              <motion.div
                key={index}
                className="text-neutral-400 font-semibold text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.6, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ opacity: 1, scale: 1.1 }}
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
