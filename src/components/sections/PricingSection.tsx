import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "motion/react";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      icon: "🚀",
      subtitle: "Para pequenas empresas",
      price: "R$ 2.997",
      period: "/mês",
      description: "Automação essencial para começar",
      features: [
        "Até 5 processos automatizados",
        "5 integrações de sistemas",
        "Suporte via email (24h)",
        "Dashboard básico",
        "Treinamento de 4 horas",
      ],
      color: "blue",
      popular: false,
    },
    {
      name: "Professional",
      icon: "⭐",
      subtitle: "Para médias empresas",
      price: "R$ 5.997",
      period: "/mês",
      description: "Automação completa + IA personalizada",
      features: [
        "Até 20 processos automatizados",
        "IA treinada com seus dados",
        "Suporte chat + gerente dedicado",
        "Relatórios em tempo real",
        "Treinamento completo 12h",
      ],
      color: "purple",
      popular: true,
    },
    {
      name: "Enterprise",
      icon: "👑",
      subtitle: "Para grandes empresas",
      price: "Sob Consulta",
      period: "",
      description: "Automação ilimitada + consultoria",
      features: [
        "Processos ilimitados",
        "Machine Learning avançado",
        "Equipe técnica 24/7",
        "Integração com BI",
        "Consultoria estratégica",
      ],
      color: "yellow",
      popular: false,
    },
  ];

  return (
    <section id="planos" className="w-full mt-32">
      {/* Header padrão do site */}
      <motion.div
        className="text-center mb-12 flex items-center flex-col"
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
            PLANOS E PREÇOS
          </p>
        </HoverBorderGradient>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Planos Flexíveis para Automação com IA
        </h2>
        <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
          Escolha o plano ideal para{" "}
          <strong>transformar seus processos manuais</strong> em automação
          inteligente. Todos incluem{" "}
          <strong className="text-blue-400">suporte especializado</strong> e{" "}
          <strong className="text-green-400">integração personalizada</strong>.
        </p>
      </motion.div>

      {/* Cards dos planos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className={`relative bg-neutral-800/50 backdrop-blur-md border rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
              plan.popular
                ? "border-purple-500/50 bg-gradient-to-b from-purple-900/30 to-purple-800/20 shadow-purple-500/20"
                : "border-neutral-700 hover:border-neutral-600"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Badge popular */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  MAIS POPULAR
                </div>
              </div>
            )}

            {/* Header do plano */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-10 h-10 bg-${plan.color}-500/20 rounded-xl border border-${plan.color}-500/30 flex items-center justify-center`}
              >
                <span className={`text-${plan.color}-400 text-lg`}>
                  {plan.icon}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <p className={`text-${plan.color}-400 text-xs`}>
                  {plan.subtitle}
                </p>
              </div>
            </div>

            {/* Preço */}
            <div className="mb-4">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-neutral-400 text-sm">{plan.period}</span>
              </div>
              <p className="text-neutral-500 text-sm mt-1">
                {plan.description}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2">
                  <div
                    className={`w-4 h-4 bg-${plan.color}-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                  >
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-neutral-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                plan.name === "Enterprise"
                  ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                  : `bg-${plan.color}-600 hover:bg-${plan.color}-700 text-white`
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {plan.name === "Enterprise"
                ? "Falar com Consultor"
                : `Escolher ${plan.name}`}
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Comparação rápida */}
      <motion.div
        className="mt-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Comparação Rápida
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">Starter</div>
              <div className="text-sm text-neutral-300">5 processos</div>
              <div className="text-sm text-neutral-300">Email 24h</div>
              <div className="text-sm text-neutral-300">Dashboard básico</div>
            </div>
            <div className="space-y-2">
              <div className="text-purple-400 font-semibold">Professional</div>
              <div className="text-sm text-neutral-300">20 processos</div>
              <div className="text-sm text-neutral-300">Chat + gerente</div>
              <div className="text-sm text-neutral-300">IA personalizada</div>
            </div>
            <div className="space-y-2">
              <div className="text-yellow-400 font-semibold">Enterprise</div>
              <div className="text-sm text-neutral-300">Ilimitado</div>
              <div className="text-sm text-neutral-300">Equipe 24/7</div>
              <div className="text-sm text-neutral-300">ML avançado</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Final */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold text-white mb-2">
            Não sabe qual plano escolher?
          </h3>
          <p className="text-neutral-300 mb-4">
            Nossa{" "}
            <strong className="text-blue-400">consultoria gratuita</strong>{" "}
            identifica o plano ideal para sua empresa.
          </p>
          <motion.a
            href="#contato"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Falar com Especialista</span>
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.414L3 21l1.414-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"
              />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
