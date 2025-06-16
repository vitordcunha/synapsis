import React from "react";
import { motion } from "motion/react";

// Componente da animação de automação interativa com fluxo contínuo
export function AutomationFlowAnimation() {
  const [selectedPath, setSelectedPath] = React.useState<"sim" | "nao" | null>(
    "sim"
  );
  const [currentStep, setCurrentStep] = React.useState(0);

  // Ciclo automático dos passos do fluxo
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5); // 5 passos no total
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Função para determinar se um elemento está ativo no fluxo
  const isStepActive = (step: number) => currentStep === step;
  const isStepCompleted = (step: number) => currentStep > step;

  // Função para lidar com a seleção do path
  const handlePathSelection = (path: "sim" | "nao") => {
    setSelectedPath(path);
  };

  return (
    <motion.div
      className="relative w-full h-full max-w-lg mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    >
      {/* Linha de fluxo contínua de fundo */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 400 600"
        style={{ filter: "blur(0.5px)" }}
      >
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#a855f7", stopOpacity: 0.8 }}
            />
            <stop
              offset="25%"
              style={{ stopColor: "#3b82f6", stopOpacity: 0.8 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#06b6d4", stopOpacity: 0.8 }}
            />
            <stop
              offset="75%"
              style={{
                stopColor: selectedPath === "sim" ? "#10b981" : "#ef4444",
                stopOpacity: 0.8,
              }}
            />
            <stop
              offset="100%"
              style={{
                stopColor: selectedPath === "sim" ? "#f59e0b" : "#6b7280",
                stopOpacity: 0.8,
              }}
            />
          </linearGradient>
          <linearGradient id="flowAnimation" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#ffffff", stopOpacity: 0 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#ffffff", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ffffff", stopOpacity: 0 }}
            />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="0,-200;0,800;0,-200"
              dur="4s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>

        {/* Linha principal do fluxo - muda baseado na seleção */}
        <path
          d={
            selectedPath === "sim"
              ? "M 200 60 L 200 140 L 200 200 L 200 280 L 170 320 L 230 320 L 200 360 L 200 440 L 200 520"
              : "M 200 60 L 200 140 L 200 200 L 200 280 L 170 320 L 120 360 L 120 440 L 120 520"
          }
          stroke="url(#flowGradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
          opacity="0.6"
        />

        {/* Linha animada que percorre o caminho */}
        <path
          d={
            selectedPath === "sim"
              ? "M 200 60 L 200 140 L 200 200 L 200 280 L 170 320 L 230 320 L 200 360 L 200 440 L 200 520"
              : "M 200 60 L 200 140 L 200 200 L 200 280 L 170 320 L 120 360 L 120 440 L 120 520"
          }
          stroke="url(#flowAnimation)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative rounded-2xl p-6 z-10">
        {/* Passo 1: Execução diária */}
        <motion.div
          className={`relative bg-neutral-800 rounded-xl p-4 border transition-all duration-500 mb-4 ${
            isStepActive(0) || isStepActive(4)
              ? "border-purple-400/80 shadow-lg shadow-purple-500/20 scale-105"
              : isStepCompleted(0)
              ? "border-neutral-700"
              : "border-gray-600/50"
          }`}
          animate={{
            scale: isStepActive(0) || isStepActive(4) ? 1.02 : 1,
          }}
        >
          {/* Indicador de atividade */}
          <motion.div
            className={`absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full ${
              isStepActive(0) || isStepActive(4)
                ? "bg-purple-400"
                : "bg-gray-600"
            }`}
            animate={{
              scale: isStepActive(0) || isStepActive(4) ? [1, 1.3, 1] : 1,
              boxShadow:
                isStepActive(0) || isStepActive(4)
                  ? [
                      "0 0 0 0 rgba(168, 85, 247, 0.6)",
                      "0 0 0 8px rgba(168, 85, 247, 0)",
                    ]
                  : "none",
            }}
            transition={{
              duration: 1,
              repeat: isStepActive(0) || isStepActive(4) ? Infinity : 0,
            }}
          />

          <div className="flex items-center space-x-3">
            <div
              className={`w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 ${
                isStepActive(0) || isStepActive(4) ? "shadow-purple-500/40" : ""
              }`}
            >
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
              <p className="text-gray-400 text-xs">Execução automática às 9h</p>
            </div>
          </div>
        </motion.div>

        {/* Passo 2: Buscar clientes */}
        <motion.div
          className={`relative bg-neutral-800 rounded-xl p-4 border transition-all duration-500 mb-6 ${
            isStepActive(1)
              ? "border-blue-400/80 shadow-lg shadow-blue-500/20 scale-105"
              : isStepCompleted(1)
              ? "border-neutral-700"
              : "border-neutral-600"
          }`}
          animate={{
            scale: isStepActive(1) ? 1.02 : 1,
          }}
        >
          {/* Indicador de atividade */}
          <motion.div
            className={`absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full ${
              isStepActive(1) ? "bg-blue-400" : "bg-gray-600"
            }`}
            animate={{
              scale: isStepActive(1) ? [1, 1.3, 1] : 1,
              boxShadow: isStepActive(1)
                ? [
                    "0 0 0 0 rgba(59, 130, 246, 0.6)",
                    "0 0 0 8px rgba(59, 130, 246, 0)",
                  ]
                : "none",
            }}
            transition={{ duration: 1, repeat: isStepActive(1) ? Infinity : 0 }}
          />

          <div className="flex items-center space-x-3">
            <div
              className={`w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 ${
                isStepActive(1) ? "shadow-blue-500/40" : ""
              }`}
            >
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

        {/* Passo 3: Verificação de atividade */}
        <motion.div
          className={`relative bg-neutral-800 rounded-xl p-4 border transition-all duration-500 mb-6 ${
            isStepActive(2)
              ? "border-cyan-400/80 shadow-lg shadow-cyan-500/20 scale-105"
              : isStepCompleted(2)
              ? "border-neutral-700"
              : "border-neutral-600"
          }`}
          animate={{
            scale: isStepActive(2) ? 1.02 : 1,
          }}
        >
          {/* Indicador de atividade */}
          <motion.div
            className={`absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full ${
              isStepActive(2) ? "bg-cyan-400" : "bg-gray-600"
            }`}
            animate={{
              scale: isStepActive(2) ? [1, 1.3, 1] : 1,
              boxShadow: isStepActive(2)
                ? [
                    "0 0 0 0 rgba(6, 182, 212, 0.6)",
                    "0 0 0 8px rgba(6, 182, 212, 0)",
                  ]
                : "none",
            }}
            transition={{ duration: 1, repeat: isStepActive(2) ? Infinity : 0 }}
          />

          <div className="flex items-center space-x-3">
            <div
              className={`w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 ${
                isStepActive(2) ? "shadow-cyan-500/40" : ""
              }`}
            >
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

        {/* Decisão - Animada baseada no fluxo e interativa */}
        <motion.div
          className="flex justify-between items-center my-6 px-2"
          animate={{
            scale: isStepActive(3) ? 1.05 : 1,
          }}
        >
          <motion.button
            onClick={() => handlePathSelection("sim")}
            className={`flex flex-col items-center transition-all duration-300 cursor-pointer ${
              selectedPath === "sim"
                ? "scale-110"
                : "opacity-70 hover:opacity-90"
            }`}
            animate={{
              y: isStepActive(3) && selectedPath === "sim" ? [-2, 2, -2] : 0,
            }}
            transition={{
              duration: 1,
              repeat: isStepActive(3) && selectedPath === "sim" ? Infinity : 0,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`border px-3 py-2 rounded-lg text-xs font-bold mb-2 shadow-lg transition-all duration-300 ${
                selectedPath === "sim" && isStepActive(3)
                  ? "bg-green-600 border-green-400 text-white shadow-green-500/40"
                  : selectedPath === "sim"
                  ? "bg-green-600/60 border-green-400 text-white"
                  : "bg-green-600/20 border-green-500/60 text-green-400 hover:bg-green-600/40"
              }`}
            >
              SIM
            </div>
            <motion.div
              className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg border border-green-400/50"
              animate={
                isStepActive(3) && selectedPath === "sim"
                  ? {
                      boxShadow: [
                        "0 0 0 0 rgba(34, 197, 94, 0.6)",
                        "0 0 0 8px rgba(34, 197, 94, 0)",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 1,
                repeat:
                  isStepActive(3) && selectedPath === "sim" ? Infinity : 0,
              }}
            >
              ✓
            </motion.div>
          </motion.button>

          <motion.button
            onClick={() => handlePathSelection("nao")}
            className={`flex flex-col items-center transition-all duration-300 cursor-pointer ${
              selectedPath === "nao"
                ? "scale-110"
                : "opacity-70 hover:opacity-90"
            }`}
            animate={{
              y: isStepActive(3) && selectedPath === "nao" ? [-2, 2, -2] : 0,
            }}
            transition={{
              duration: 1,
              repeat: isStepActive(3) && selectedPath === "nao" ? Infinity : 0,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`border px-3 py-2 rounded-lg text-xs font-bold mb-2 shadow-lg transition-all duration-300 ${
                selectedPath === "nao" && isStepActive(3)
                  ? "bg-red-600 border-red-400 text-white shadow-red-500/40"
                  : selectedPath === "nao"
                  ? "bg-red-600/60 border-red-400 text-white"
                  : "bg-gray-700/50 border-gray-600/50 text-gray-400 hover:bg-gray-600/60"
              }`}
            >
              NÃO
            </div>
            <motion.div
              className={`w-6 h-6 rounded-full flex items-center justify-center font-bold border shadow-lg ${
                selectedPath === "nao"
                  ? "bg-gradient-to-r from-red-500 to-red-600 border-red-400/50 text-white"
                  : "bg-gray-600 border-gray-500/50 text-gray-400"
              }`}
              animate={
                isStepActive(3) && selectedPath === "nao"
                  ? {
                      boxShadow: [
                        "0 0 0 0 rgba(239, 68, 68, 0.6)",
                        "0 0 0 8px rgba(239, 68, 68, 0)",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 1,
                repeat:
                  isStepActive(3) && selectedPath === "nao" ? Infinity : 0,
              }}
            >
              ✗
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Resultado final - muda baseado na seleção */}
        <motion.div
          className={`relative overflow-hidden rounded-xl p-5 border-2 transition-all duration-500 ${
            isStepActive(3)
              ? selectedPath === "sim"
                ? "bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-purple-400/80 shadow-lg shadow-purple-500/20 scale-105"
                : "bg-gradient-to-r from-gray-600/30 to-gray-700/30 border-gray-400/80 shadow-lg shadow-gray-500/20 scale-105"
              : selectedPath === "sim"
              ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-400/60"
              : "bg-gradient-to-r from-gray-600/20 to-gray-700/20 border-gray-400/60"
          }`}
          animate={{
            scale: isStepActive(3) ? 1.02 : 1,
          }}
        >
          {/* Indicador de atividade */}
          <motion.div
            className={`absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full ${
              isStepActive(3)
                ? selectedPath === "sim"
                  ? "bg-purple-400"
                  : "bg-gray-400"
                : "bg-gray-600"
            }`}
            animate={{
              scale: isStepActive(3) ? [1, 1.3, 1] : 1,
              boxShadow: isStepActive(3)
                ? selectedPath === "sim"
                  ? [
                      "0 0 0 0 rgba(168, 85, 247, 0.6)",
                      "0 0 0 8px rgba(168, 85, 247, 0)",
                    ]
                  : [
                      "0 0 0 0 rgba(107, 114, 128, 0.6)",
                      "0 0 0 8px rgba(107, 114, 128, 0)",
                    ]
                : "none",
            }}
            transition={{ duration: 1, repeat: isStepActive(3) ? Infinity : 0 }}
          />

          <motion.div
            className={`absolute inset-0 ${
              selectedPath === "sim"
                ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                : "bg-gradient-to-r from-gray-500/10 to-gray-600/10"
            }`}
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-xl ${
                  selectedPath === "sim"
                    ? "bg-gradient-to-br from-purple-500 to-pink-500"
                    : "bg-gradient-to-br from-gray-500 to-gray-600"
                }`}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {selectedPath === "sim" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  )}
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold">
                  {selectedPath === "sim"
                    ? "Email Enviado!"
                    : "Registrado no CRM"}
                </h4>
                <p className="text-gray-300 text-sm">
                  {selectedPath === "sim"
                    ? "Oferta de reativação personalizada"
                    : "Cliente inativo adicionado à lista"}
                </p>
              </div>
            </div>
            <motion.div
              animate={
                isStepActive(3)
                  ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }
                  : { scale: [1, 1.1, 1] }
              }
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-lg border-2 ${
                  selectedPath === "sim"
                    ? "bg-green-500 border-green-400"
                    : "bg-gray-500 border-gray-400"
                }`}
              >
                {selectedPath === "sim" ? "🎉" : "📝"}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
