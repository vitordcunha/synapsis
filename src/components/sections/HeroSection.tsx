import { Cover } from "@/components/ui/cover";
import React from "react";
import { motion } from "motion/react";

// Componente para documentos/tarefas manuais flutuantes (Antes)
function ChaoticDocuments() {
  const documents = [
    { id: 1, icon: "📄", label: "Planilhas", delay: 0 },
    { id: 2, icon: "📧", label: "E-mails", delay: 0.2 },
    { id: 3, icon: "📊", label: "Relatórios", delay: 0.4 },
    { id: 4, icon: "📝", label: "Formulários", delay: 0.6 },
    { id: 5, icon: "🗂️", label: "Arquivos", delay: 0.8 },
    { id: 6, icon: "📋", label: "Listas", delay: 1.0 },
  ];

  return (
    <div className="relative">
      {documents.map((doc) => (
        <motion.div
          key={doc.id}
          className="absolute bg-red-500/10 border border-red-500/20 rounded-lg p-3 backdrop-blur-sm"
          style={{
            left: `${Math.random() * 200 - 100}px`,
            top: `${Math.random() * 200 - 100}px`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: Math.random() * 360 }}
          animate={{
            opacity: 0.8,
            scale: 1,
            rotate: Math.random() * 20 - 10,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.8,
            delay: doc.delay,
            y: {
              duration: 2 + Math.random(),
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="text-center">
            <div className="text-2xl mb-1">{doc.icon}</div>
            <div className="text-xs text-red-300 font-medium">{doc.label}</div>
          </div>
        </motion.div>
      ))}

      {/* Texto "Antes" */}
      <motion.div
        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="text-red-400 font-semibold text-sm">ANTES</div>
        <div className="text-neutral-400 text-xs">Caos Manual</div>
      </motion.div>
    </div>
  );
}

// Componente da IA central processando
function AIProcessor() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Núcleo da IA */}
      <motion.div
        className="relative w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {/* Anel externo pulsante */}
        <motion.div
          className="absolute inset-0 border-4 border-blue-400/30 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Anel médio */}
        <motion.div
          className="absolute inset-2 border-2 border-purple-400/40 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Centro com ícone IA */}
        <motion.div
          className="text-4xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          🤖
        </motion.div>

        {/* Partículas de processamento */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: "50%",
              top: "50%",
              transformOrigin: "0 0",
            }}
            animate={{
              rotate: [0, 360],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Linhas de dados entrando */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`input-${i}`}
            className="w-20 h-0.5 bg-gradient-to-r from-red-400 to-transparent mb-2"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 + i * 0.1 }}
          />
        ))}
      </div>

      {/* Linhas de dados saindo */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`output-${i}`}
            className="w-20 h-0.5 bg-gradient-to-l from-green-400 to-transparent mb-2"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3 + i * 0.1 }}
          />
        ))}
      </div>

      {/* Label IA */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.5 }}
      >
        <div className="text-blue-400 font-semibold text-sm">IA SYNAPSIS</div>
        <div className="text-neutral-400 text-xs">Processando</div>
      </motion.div>
    </div>
  );
}

// Componente dos resultados organizados (Depois)
function OrganizedResults() {
  const results = [
    {
      id: 1,
      icon: "📈",
      label: "Crescimento",
      color: "text-green-400",
      delay: 3.5,
    },
    {
      id: 2,
      icon: "⚡",
      label: "Eficiência",
      color: "text-blue-400",
      delay: 3.7,
    },
    {
      id: 3,
      icon: "🎯",
      label: "Precisão",
      color: "text-purple-400",
      delay: 3.9,
    },
    {
      id: 4,
      icon: "💰",
      label: "Economia",
      color: "text-yellow-400",
      delay: 4.1,
    },
    {
      id: 5,
      icon: "🚀",
      label: "Velocidade",
      color: "text-orange-400",
      delay: 4.3,
    },
    {
      id: 6,
      icon: "✨",
      label: "Qualidade",
      color: "text-pink-400",
      delay: 4.5,
    },
  ];

  return (
    <div className="relative">
      {/* Grid organizado de resultados */}
      <div className="grid grid-cols-2 gap-4">
        {results.map((result) => (
          <motion.div
            key={result.id}
            className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 backdrop-blur-sm text-center"
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: result.delay,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className="text-2xl mb-1">{result.icon}</div>
            <div className={`text-xs font-medium ${result.color}`}>
              {result.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fluxo de crescimento */}
      <motion.div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 4.8 }}
      >
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-green-400 rounded-full"
              style={{ height: `${(i + 1) * 4 + 8}px` }}
              initial={{ height: 0 }}
              animate={{ height: `${(i + 1) * 4 + 8}px` }}
              transition={{ duration: 0.5, delay: 5 + i * 0.1 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Texto "Depois" */}
      <motion.div
        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 5.5 }}
      >
        <div className="text-green-400 font-semibold text-sm">DEPOIS</div>
        <div className="text-neutral-400 text-xs">Automação IA</div>
      </motion.div>
    </div>
  );
}

// Componente principal do Hero Visual
function HeroVisual() {
  return (
    <div className="relative w-full max-w-6xl mx-auto h-80 mb-16">
      {/* Background com padrão de rede neural sutil */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 400">
          {/* Linhas de conexão */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 800}
              y1={Math.random() * 400}
              x2={Math.random() * 800}
              y2={Math.random() * 400}
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          ))}
        </svg>
      </div>

      {/* Layout principal: Antes -> IA -> Depois */}
      <div className="flex items-center justify-between h-full px-8">
        {/* Seção "Antes" - Caos */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64">
            <ChaoticDocuments />
          </div>
        </div>

        {/* Seção Central - IA */}
        <div className="flex-1 flex justify-center">
          <AIProcessor />
        </div>

        {/* Seção "Depois" - Organização */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 flex items-center justify-center">
            <OrganizedResults />
          </div>
        </div>
      </div>

      {/* Setas de fluxo */}
      <motion.div
        className="absolute left-1/4 top-1/2 transform -translate-y-1/2 text-4xl text-blue-400"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2.8 }}
      >
        →
      </motion.div>

      <motion.div
        className="absolute right-1/4 top-1/2 transform -translate-y-1/2 text-4xl text-green-400"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 4.2 }}
      >
        →
      </motion.div>
    </div>
  );
}

// Versão mobile simplificada
function HeroVisualMobile() {
  return (
    <div className="relative w-full max-w-sm mx-auto h-64 mb-12">
      {/* Versão simplificada para mobile - apenas o processador IA central */}
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <motion.div
            className="relative w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl mx-auto mb-4"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 border-4 border-blue-400/30 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🤖
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="text-blue-400 font-semibold text-sm mb-2">
              IA SYNAPSIS
            </div>
            <div className="grid grid-cols-3 gap-2 max-w-48 mx-auto">
              {[
                { icon: "📄", label: "Docs" },
                { icon: "⚡", label: "Auto" },
                { icon: "📈", label: "Result" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-2 text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }}
                >
                  <div className="text-lg">{item.icon}</div>
                  <div className="text-xs text-neutral-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center text-center h-full w-full mb-20 gap-10 mt-20">
        {/* Hero Visual - Desktop */}
        <div className="hidden lg:block w-full">
          <HeroVisual />
        </div>

        {/* Hero Visual - Mobile */}
        <div className="lg:hidden w-full">
          <HeroVisualMobile />
        </div>

        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Sua Empresa no Piloto Automático:
          <br />
          <Cover>Aumente a Eficiência e Reduza Custos com IA</Cover>
        </motion.h1>

        <motion.h2
          className="text-xl text-neutral-300 mb-8 max-w-2xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <strong>Liberte sua equipe de tarefas manuais repetitivas.</strong>{" "}
          Nossa IA personalizada automatiza processos complexos, reduz erros em
          até <strong className="text-green-400">95%</strong> e gera economia de{" "}
          <strong className="text-blue-400">R$ 50.000+</strong> por mês.
        </motion.h2>

        <motion.a
          href="#contato"
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-10 py-4 rounded-full shadow-2xl border-2 border-orange-400 mb-16 hover:from-orange-400 hover:to-orange-500 transition-all duration-300 text-lg"
          aria-label="Agendar demonstração gratuita de automação com IA"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Agende uma Demonstração Gratuita
        </motion.a>
      </section>
    </>
  );
}
