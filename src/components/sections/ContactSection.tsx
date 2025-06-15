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
          Comece sua Jornada de
          <br />
          Automação Hoje Mesmo
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Agende uma consulta gratuita e descubra como nossa IA pode
          revolucionar seus processos empresariais. Nossa equipe está pronta
          para criar a solução perfeita para sua empresa.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <motion.div
            className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Solicite uma Demonstração Gratuita
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-neutral-400 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Corporativo
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-neutral-400 transition-colors"
                    placeholder="seuemail@empresa.com"
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-neutral-400 transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-neutral-400 transition-colors"
                    placeholder="Nome da sua empresa"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Setor da Empresa
                </label>
                <select className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg focus:border-blue-500 focus:outline-none text-white transition-colors">
                  <option value="">Selecione o setor</option>
                  <option value="contabilidade">Contabilidade</option>
                  <option value="rh">Recursos Humanos</option>
                  <option value="vendas">Vendas e Marketing</option>
                  <option value="imobiliario">Imobiliário</option>
                  <option value="saude">Saúde</option>
                  <option value="juridico">Jurídico</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="educacao">Educação</option>
                  <option value="financeiro">Financeiro</option>
                  <option value="outro">Outro</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Descreva o processo que gostaria de automatizar
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-neutral-400 transition-colors resize-none"
                  placeholder="Ex: Automação de análise de currículos, classificação de documentos, atendimento ao cliente..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Solicitar Demonstração Gratuita</span>
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
              </motion.button>
            </form>

            <motion.div
              className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 text-sm">✓</span>
                </div>
                <div>
                  <p className="text-green-400 font-medium text-sm">
                    Resposta em até 2 horas
                  </p>
                  <p className="text-neutral-400 text-xs">
                    Demonstração personalizada gratuita
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Canais de Contato */}
            <div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-6">
                Outros Canais de Contato
              </h4>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-4 p-4 bg-neutral-700/30 rounded-lg hover:bg-neutral-700/50 transition-colors cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">WhatsApp</p>
                    <p className="text-neutral-400 text-sm">(11) 99999-9999</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-neutral-700/30 rounded-lg hover:bg-neutral-700/50 transition-colors cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-neutral-400 text-sm">
                      contato@synapsis.ai
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-neutral-700/30 rounded-lg hover:bg-neutral-700/50 transition-colors cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400 text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Telefone</p>
                    <p className="text-neutral-400 text-sm">(11) 3000-0000</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Horário de Atendimento */}
            <motion.div
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Horário de Atendimento
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-neutral-300">
                  <span>Segunda - Sexta:</span>
                  <span>9h às 18h</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Sábado:</span>
                  <span>9h às 13h</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-600">
                <p className="text-neutral-400 text-xs">
                  Respondemos emails e WhatsApp em até 2 horas durante o horário
                  comercial
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
