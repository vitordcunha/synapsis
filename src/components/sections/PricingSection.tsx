import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "motion/react";

export function PricingSection() {
  return (
    <section id="precos" className="w-full mt-32">
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
            PLANOS E PREÇOS
          </p>
        </HoverBorderGradient>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Planos Flexíveis para Automação Empresarial com IA
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Escolha o plano ideal para transformar seus processos manuais em
          automação inteligente. Todos os planos incluem suporte técnico
          especializado e integração personalizada.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Plano Starter */}
        <motion.div
          className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 hover:border-blue-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl border border-blue-500/30 flex items-center justify-center">
              <span className="text-blue-400 font-bold text-lg">🚀</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Starter</h3>
              <p className="text-blue-400 text-sm">Para pequenas empresas</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">R$ 2.997</span>
              <span className="text-neutral-400">/mês</span>
            </div>
            <p className="text-neutral-500 text-sm mt-2">
              Automação de até 3 processos
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300">
                Automação de até 3 processos
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300">
                Integração com sistemas existentes
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300">Suporte técnico básico</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300">
                Relatórios mensais de performance
              </span>
            </li>
          </ul>

          <motion.button
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Começar Agora
          </motion.button>
        </motion.div>

        {/* Plano Professional - Destaque */}
        <motion.div
          className="bg-gradient-to-b from-purple-900/50 to-purple-800/30 backdrop-blur-md border-2 border-purple-500/50 rounded-2xl p-8 relative hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -10 }}
        >
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              MAIS POPULAR
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl border border-purple-500/30 flex items-center justify-center">
              <span className="text-purple-400 font-bold text-lg">⭐</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Professional</h3>
              <p className="text-purple-400 text-sm">Para médias empresas</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">R$ 5.997</span>
              <span className="text-neutral-400">/mês</span>
            </div>
            <p className="text-neutral-500 text-sm mt-2">
              Automação de até 10 processos
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300">
                Automação de até 10 processos
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300">
                IA personalizada para seu negócio
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300">
                Suporte técnico prioritário
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300">Dashboard em tempo real</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300">
                Treinamento personalizado
              </span>
            </li>
          </ul>

          <motion.button
            className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition-colors font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Escolher Professional
          </motion.button>
        </motion.div>

        {/* Plano Enterprise */}
        <motion.div
          className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 hover:border-yellow-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl border border-yellow-500/30 flex items-center justify-center">
              <span className="text-yellow-400 font-bold text-lg">🏢</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Enterprise</h3>
              <p className="text-yellow-400 text-sm">Para grandes empresas</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">Sob</span>
              <span className="text-neutral-400">consulta</span>
            </div>
            <p className="text-neutral-500 text-sm mt-2">
              Automação ilimitada e personalizada
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300">
                Automação ilimitada de processos
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300">
                IA exclusiva e proprietária
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300">Suporte 24/7 dedicado</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300">Infraestrutura dedicada</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300">
                Consultoria estratégica contínua
              </span>
            </li>
          </ul>

          <motion.button
            className="w-full bg-yellow-600 text-white py-3 rounded-xl hover:bg-yellow-700 transition-colors font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Falar com Especialista
          </motion.button>
        </motion.div>
      </div>

      {/* Guarantee Section */}
      <motion.div
        className="mt-16 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
            <span className="text-green-400 text-xl">🛡️</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Garantia de 30 Dias</h3>
        </div>
        <p className="text-neutral-300 max-w-2xl mx-auto">
          Experimente nossa plataforma sem riscos. Se não ficar satisfeito com
          os resultados da automação em 30 dias, devolvemos 100% do seu
          investimento.
        </p>
      </motion.div>
    </section>
  );
}
