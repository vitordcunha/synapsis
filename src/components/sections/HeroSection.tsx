import React from "react";
import { motion } from "motion/react";
import { Highlight } from "../ui/hero-highlight";
import { AutomationFlowAnimation } from "./AutomationFlowAnimation";
import { StarryBackground } from "./StarryBackground";

export function HeroSection() {
  return (
    <>
      <StarryBackground />

      <section className="relative w-full min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-30 items-center">
            {/* Conteúdo principal à esquerda */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Título principal */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-left">
                  <span className="bg-gradient-to-b from-white via-gray-100 to-gray-500 bg-clip-text text-transparent leading-10">
                    Automação de Processos com{" "}
                  </span>
                  <span className="text-nowrap">
                    <Highlight>IA para sua empresa</Highlight>
                  </span>
                </h1>
              </motion.div>

              {/* Descrição */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl text-left">
                  Transforme tarefas manuais em processos automatizados
                  inteligentes.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl text-left">
                  <span className="text-purple-400 font-bold text-xl">
                    Aumente a eficiência em até 95%
                  </span>{" "}
                  e reduza custos operacionais com inteligência artificial
                  personalizada para seu negócio.
                </p>
              </motion.div>

              <div className="flex flex-col gap-8 w-fit">
                {/* Botões de ação */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <motion.a
                    href="#como-funciona"
                    className="group inline-flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 text-white font-bold px-4 py-2 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Automatizar Meus Processos
                    <motion.span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </motion.span>
                  </motion.a>

                  <motion.a
                    href="#exemplos"
                    className="inline-flex items-center justify-center bg-gray-800/50 border-2 border-gray-600 text-gray-300 font-semibold px-10 py-5 rounded-2xl hover:border-purple-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300 text-lg backdrop-blur-sm"
                  >
                    Ver Exemplos Práticos
                  </motion.a>
                </motion.div>

                <div>
                  {/* Métricas */}
                  <motion.div
                    className="flex w-full justify-between"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  >
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        95%
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        Menos tempo gasto
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        24/7
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        Funcionamento
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        Zero
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        Erros humanos*
                      </div>
                    </div>
                  </motion.div>

                  {/* Nota de rodapé para a métrica */}
                  <motion.p
                    className="text-xs text-gray-500 mt-2 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                  >
                    *Em tarefas de dados estruturados e processos definidos
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Animação à direita */}
            <motion.div className="relative flex items-center justify-center min-h-[600px]">
              <AutomationFlowAnimation />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
