import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "motion/react";

export function ContactSection() {
  return (
    <section id="contato" className="w-full mt-32">
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
            FALE CONOSCO
          </p>
        </HoverBorderGradient>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Fale com um Especialista em Automação
          <br />
          <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Receba um Diagnóstico Gratuito
          </span>
        </h2>
        <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
          <strong>Descubra o potencial de economia para sua empresa.</strong>{" "}
          Nossa equipe especializada analisará seus processos e apresentará{" "}
          <strong className="text-green-400">
            oportunidades concretas de automação
          </strong>{" "}
          sem qualquer compromisso.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de Contato Simplificado */}
          <motion.div
            className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Receba Seu Diagnóstico de Automação Gratuito
            </h3>

            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-neutral-400 transition-colors"
                  placeholder="Seu nome completo"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Email Corporativo *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-neutral-400 transition-colors"
                  placeholder="seuemail@empresa.com"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-neutral-400 transition-colors"
                  placeholder="(11) 99999-9999"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-lg hover:from-orange-400 hover:to-orange-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(251, 146, 60, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>🚀 Quero Minha Análise Gratuita</span>
              </motion.button>
            </form>

            <motion.div
              className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 text-sm">✓</span>
                </div>
                <div>
                  <p className="text-green-400 font-medium text-sm">
                    ⚡ Um especialista entrará em contato em até 24 horas
                  </p>
                  <p className="text-green-300 text-xs mt-1">
                    Análise 100% personalizada e sem compromisso
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Benefícios da Análise Gratuita */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                O que você receberá na análise:
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: "📊",
                    title: "Diagnóstico Detalhado",
                    description:
                      "Mapeamento completo dos seus processos atuais e identificação de gargalos operacionais",
                    color: "text-blue-400",
                  },
                  {
                    icon: "💰",
                    title: "Projeção de Economia",
                    description:
                      "Cálculo preciso de quanto você pode economizar mensalmente com automação",
                    color: "text-green-400",
                  },
                  {
                    icon: "⚡",
                    title: "Plano de Implementação",
                    description:
                      "Roadmap personalizado com prioridades e cronograma de automação",
                    color: "text-purple-400",
                  },
                  {
                    icon: "🎯",
                    title: "ROI Estimado",
                    description:
                      "Projeção do retorno sobre investimento e tempo de payback",
                    color: "text-orange-400",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-neutral-700/50 rounded-xl border border-neutral-600 flex items-center justify-center">
                        <span className="text-xl">{benefit.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h4
                        className={`text-lg font-semibold ${benefit.color} mb-2`}
                      >
                        {benefit.title}
                      </h4>
                      <p className="text-neutral-300 text-base leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Estatísticas de Credibilidade */}
            <motion.div
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 text-center">
                Resultados que Entregamos
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">95%</div>
                  <div className="text-xs text-neutral-400">
                    Redução de Erros
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">250%</div>
                  <div className="text-xs text-neutral-400">
                    Aumento de Eficiência
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">
                    ROI 45%
                  </div>
                  <div className="text-xs text-neutral-400">Primeiro Ano</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA com Urgência */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-neutral-800/50 to-neutral-700/50 border border-neutral-600 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            ⏰ Vagas Limitadas para Análise Gratuita
          </h3>
          <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
            Oferecemos apenas{" "}
            <strong className="text-orange-400">
              10 análises gratuitas por mês
            </strong>{" "}
            para garantir a qualidade do atendimento. Não perca esta
            oportunidade de descobrir o potencial de automação da sua empresa.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>100% gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Resultado em 24h</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
