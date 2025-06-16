import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "motion/react";

export function PricingSection() {
  return (
    <section id="planos" className="w-full mt-32">
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
        <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
          Escolha o plano ideal para{" "}
          <strong>transformar seus processos manuais</strong> em automação
          inteligente. Todos os planos incluem{" "}
          <strong className="text-blue-400">
            suporte técnico especializado
          </strong>{" "}
          e <strong className="text-green-400">integração personalizada</strong>
          .
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
              Automação de até 3 processos departamentais
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>Automação de até 5 processos</strong> departamentais
                simples
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>Integração com até 5 sistemas</strong> existentes (CRM,
                ERP básico)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>Suporte via email</strong> com resposta garantida em 24h
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>Dashboard básico</strong> com relatórios mensais e
                métricas essenciais
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>Treinamento inicial de 4 horas</strong> para até 3
                colaboradores
              </span>
            </li>
          </ul>

          <motion.button
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Escolher Starter
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
              Automação de até 10 processos interdepartamentais
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>Automação de até 20 processos</strong>{" "}
                interdepartamentais complexos
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>IA personalizada</strong> treinada com histórico dos
                seus dados
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>Suporte via chat dedicado</strong> + gerente de conta
                exclusivo
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>Relatórios customizáveis</strong> em tempo real com
                alertas automáticos
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>Treinamento completo de 12 horas</strong> + certificação
                da equipe
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>Integrações ilimitadas</strong> incluindo APIs
                customizadas
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
              <span className="text-yellow-400 font-bold text-lg">👑</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Enterprise</h3>
              <p className="text-yellow-400 text-sm">Para grandes empresas</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">Sob</span>
              <span className="text-2xl font-bold text-white">Consulta</span>
            </div>
            <p className="text-neutral-500 text-sm mt-2">
              Automação ilimitada de processos complexos
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>Automação ilimitada</strong> de processos de alta
                complexidade
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>Machine Learning avançado</strong> com modelos
                proprietários
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>Equipe técnica dedicada 24/7</strong> + arquiteto de
                soluções
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>Integração com BI</strong> (Power BI, Tableau, Qlik) e
                dados em tempo real
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>Consultoria estratégica mensal</strong> + roadmap de
                inovação
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-neutral-300 text-sm">
                <strong>SLA Premium</strong> com 99.9% de uptime garantido
              </span>
            </li>
          </ul>

          <motion.button
            className="w-full bg-yellow-600 text-white py-3 rounded-xl hover:bg-yellow-700 transition-colors font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Falar com Consultor
          </motion.button>
        </motion.div>
      </div>

      {/* Tabela Comparativa Detalhada */}
      <motion.div
        className="mt-20 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Comparação Detalhada dos Planos
          </h3>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Veja todos os recursos incluídos em cada plano para tomar a melhor
            decisão para sua empresa
          </p>
        </div>

        <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-700/50">
                <tr>
                  <th className="text-left p-4 text-white font-semibold">
                    Recursos
                  </th>
                  <th className="text-center p-4 text-blue-400 font-semibold">
                    Starter
                  </th>
                  <th className="text-center p-4 text-purple-400 font-semibold">
                    Professional
                  </th>
                  <th className="text-center p-4 text-yellow-400 font-semibold">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="text-neutral-300">
                <tr className="border-t border-neutral-600">
                  <td className="p-4 font-medium">Processos Automatizados</td>
                  <td className="text-center p-4">Até 5</td>
                  <td className="text-center p-4">Até 20</td>
                  <td className="text-center p-4">Ilimitado</td>
                </tr>
                <tr className="border-t border-neutral-600 bg-neutral-800/20">
                  <td className="p-4 font-medium">Integrações de Sistemas</td>
                  <td className="text-center p-4">Até 5 sistemas básicos</td>
                  <td className="text-center p-4">Ilimitadas + APIs</td>
                  <td className="text-center p-4">
                    Ilimitadas + BI + APIs customizadas
                  </td>
                </tr>
                <tr className="border-t border-neutral-600">
                  <td className="p-4 font-medium">Suporte Técnico</td>
                  <td className="text-center p-4">Email (resposta 24h)</td>
                  <td className="text-center p-4">
                    Chat dedicado + Gerente de conta
                  </td>
                  <td className="text-center p-4">Equipe dedicada 24/7</td>
                </tr>
                <tr className="border-t border-neutral-600 bg-neutral-800/20">
                  <td className="p-4 font-medium">Dashboard e Relatórios</td>
                  <td className="text-center p-4">
                    Básico (relatórios mensais)
                  </td>
                  <td className="text-center p-4">Customizável (tempo real)</td>
                  <td className="text-center p-4">
                    Executivo com BI integrado
                  </td>
                </tr>
                <tr className="border-t border-neutral-600">
                  <td className="p-4 font-medium">Treinamento Incluído</td>
                  <td className="text-center p-4">4 horas (até 3 pessoas)</td>
                  <td className="text-center p-4">12 horas + certificação</td>
                  <td className="text-center p-4">
                    Consultoria estratégica ilimitada
                  </td>
                </tr>
                <tr className="border-t border-neutral-600 bg-neutral-800/20">
                  <td className="p-4 font-medium">Personalização da IA</td>
                  <td className="text-center p-4">Modelos padrão</td>
                  <td className="text-center p-4">Treinada com seus dados</td>
                  <td className="text-center p-4">
                    Machine Learning proprietário
                  </td>
                </tr>
                <tr className="border-t border-neutral-600">
                  <td className="p-4 font-medium">SLA de Uptime</td>
                  <td className="text-center p-4">99%</td>
                  <td className="text-center p-4">99.5%</td>
                  <td className="text-center p-4">99.9%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Não sabe qual plano escolher?
          </h3>
          <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
            Agende uma{" "}
            <strong className="text-blue-400">consultoria gratuita</strong> e
            nossos especialistas ajudarão você a identificar o plano ideal para
            suas necessidades específicas.
          </p>
          <motion.a
            href="#contato"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Falar com Especialista</span>
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.414L3 21l1.414-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"
              />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
