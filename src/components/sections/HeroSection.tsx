import { Cover } from "@/components/ui/cover";
import React from "react";
import { motion } from "motion/react";

// Componente da animação de automação interativa
function AutomationFlowAnimation() {
  const [selectedPath, setSelectedPath] = React.useState<"sim" | "nao" | null>(
    "sim"
  );
  const [showResult, setShowResult] = React.useState(true);

  const handlePathSelection = (path: "sim" | "nao") => {
    setSelectedPath(path);
    setShowResult(true);
  };

  return (
    <div className="relative w-full h-full max-w-lg mx-auto">
      <div className="relative bg-gray-900/80 rounded-2xl p-6 border border-gray-700/60 backdrop-blur-xl shadow-2xl">
        {/* Cabeçalho da automação */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-white font-bold text-lg">Fluxo de Automação</h3>
          <p className="text-gray-400 text-sm">
            Exemplo: Reativação de Clientes
          </p>
        </motion.div>

        {/* Gatilho inicial */}
        <div className="border-2 border-dashed border-purple-400/40 rounded-xl p-4 mb-6 relative bg-purple-500/5">
          <div className="absolute -top-3 left-6 bg-gray-900 px-3 py-1 rounded-full border border-purple-400/50">
            <span className="text-xs text-purple-400 font-semibold">
              🚀 Gatilho Inicial
            </span>
          </div>
          <div className="absolute -top-3 right-6 bg-gray-900 px-3 py-1 rounded-full border border-gray-600">
            <span className="text-xs text-gray-400">3 ações</span>
          </div>

          {/* Execução diária */}
          <motion.div
            className="bg-gray-800/90 rounded-xl p-4 border border-gray-600/50 hover:border-purple-400/60 transition-all duration-500 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">
                  Todos os Dias
                </h4>
                <p className="text-gray-400 text-xs">
                  Execução automática às 9h
                </p>
              </div>
            </div>
          </motion.div>

          {/* Conexão */}
          <motion.div
            className="flex justify-center my-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg border border-purple-400/50"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(168, 85, 247, 0.4)",
                  "0 0 0 6px rgba(168, 85, 247, 0)",
                  "0 0 0 0 rgba(168, 85, 247, 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              +
            </motion.div>
          </motion.div>

          {/* Buscar clientes */}
          <motion.div
            className="bg-gray-800/90 rounded-xl p-4 border border-gray-600/50 hover:border-blue-400/60 transition-all duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">
                  Buscar Clientes
                </h4>
                <p className="text-gray-400 text-xs">Filtrar base de dados</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Conexão externa */}
        <motion.div
          className="flex justify-center my-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg border border-blue-400/50"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(59, 130, 246, 0.4)",
                "0 0 0 6px rgba(59, 130, 246, 0)",
                "0 0 0 0 rgba(59, 130, 246, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 3.0 }}
          >
            +
          </motion.div>
        </motion.div>

        {/* Verificação de atividade */}
        <motion.div
          className="bg-gray-800/90 rounded-xl p-4 border border-gray-600/50 hover:border-cyan-400/60 transition-all duration-500 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">
                Verificar Atividade
              </h4>
              <p className="text-gray-400 text-xs">
                Cliente ativo nos últimos 6 meses?
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decisão SIM/NÃO - Interativa */}
        <motion.div
          className="flex justify-between items-center my-6 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            onClick={() => handlePathSelection("sim")}
            className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
              selectedPath === "sim"
                ? "scale-110"
                : selectedPath === "nao"
                ? "opacity-50 scale-95"
                : "hover:scale-105"
            }`}
            whileHover={{ scale: selectedPath ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`border px-3 py-2 rounded-lg text-xs font-bold mb-2 shadow-lg transition-all duration-300 ${
                selectedPath === "sim"
                  ? "bg-green-600 border-green-500 text-white"
                  : "bg-green-600/20 border-green-500/60 text-green-400 hover:bg-green-600/30"
              }`}
            >
              SIM
            </div>
            <motion.div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg border transition-all duration-300 ${
                selectedPath === "sim"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 border-green-400/50"
                  : "bg-gradient-to-r from-green-500 to-emerald-500 border-green-400/50"
              }`}
              animate={
                selectedPath === "sim"
                  ? {
                      boxShadow: [
                        "0 0 0 0 rgba(34, 197, 94, 0.6)",
                        "0 0 0 8px rgba(34, 197, 94, 0)",
                        "0 0 0 0 rgba(34, 197, 94, 0.6)",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                repeat: selectedPath === "sim" ? Infinity : 0,
              }}
            >
              ✓
            </motion.div>
          </motion.button>

          <motion.button
            onClick={() => handlePathSelection("nao")}
            className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
              selectedPath === "nao"
                ? "scale-110"
                : selectedPath === "sim"
                ? "opacity-50 scale-95"
                : "hover:scale-105"
            }`}
            whileHover={{ scale: selectedPath ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`border px-3 py-2 rounded-lg text-xs font-bold mb-2 shadow-lg transition-all duration-300 ${
                selectedPath === "nao"
                  ? "bg-red-600 border-red-500 text-white"
                  : "bg-gray-700/50 border-gray-600/50 text-gray-400 hover:bg-red-600/20 hover:border-red-500/50 hover:text-red-400"
              }`}
            >
              NÃO
            </div>
            <motion.div
              className={`w-6 h-6 rounded-full flex items-center justify-center font-bold border transition-all duration-300 ${
                selectedPath === "nao"
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white border-red-400/50"
                  : "bg-gray-600 text-gray-400 border-gray-500/50"
              }`}
              animate={
                selectedPath === "nao"
                  ? {
                      boxShadow: [
                        "0 0 0 0 rgba(239, 68, 68, 0.6)",
                        "0 0 0 8px rgba(239, 68, 68, 0)",
                        "0 0 0 0 rgba(239, 68, 68, 0.6)",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                repeat: selectedPath === "nao" ? Infinity : 0,
              }}
            >
              ✗
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Resultado baseado na escolha */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {selectedPath === "sim" ? (
              <motion.div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-5 border-2 border-purple-400/60 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                  animate={{ opacity: [0.1, 0.4, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Email Enviado!</h4>
                      <p className="text-gray-300 text-sm">
                        Oferta de reativação personalizada
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg border-2 border-green-400">
                      🎉
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-5 border-2 border-blue-400/60 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-xl">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Cliente Mantido!</h4>
                      <p className="text-gray-300 text-sm">
                        Nenhuma ação necessária
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg border-2 border-blue-400">
                      ✅
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

// Componente para estrelas animadas no fundo
function StarryBackground() {
  const stars = React.useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => {
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <>
      <StarryBackground />

      <section className="relative w-full min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Conteúdo principal à esquerda */}
            <div className="flex flex-col justify-center space-y-12">
              {/* Título principal */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight text-left">
                  <span className="bg-gradient-to-b from-white via-gray-100 to-gray-500 bg-clip-text text-transparent">
                    Automação de Processos com IA para sua{" "}
                  </span>
                  <Cover>Empresa</Cover>
                </h1>
              </motion.div>

              {/* Descrição */}
              <motion.div
                className="space-y-6"
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

              {/* Botões de ação */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.a
                  href="#como-funciona"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 text-lg border border-purple-500/20"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-3 text-xl">🚀</span>
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

              {/* Métricas */}
              <motion.div
                className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-800/50"
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
                    100%
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    Precisão
                  </div>
                </div>
              </motion.div>
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
