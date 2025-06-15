import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useState } from "react";

type ColorKey = "blue" | "green" | "purple" | "yellow" | "red" | "indigo";

interface Example {
  sector: string;
  icon: string;
  color: ColorKey;
  problem: string;
  timeManual: string;
  timeAuto: string;
  solution: string;
  steps: string[];
}

export function ExamplesSection() {
  const [activeExample, setActiveExample] = useState(0);

  const examples: Example[] = [
    {
      sector: "Contabilidade",
      icon: "📊",
      color: "blue",
      problem: "Conciliação bancária manual",
      timeManual: "4h por dia",
      timeAuto: "15min por dia",
      solution: "IA classifica e concilia transações automaticamente",
      steps: [
        "📄 Recebe extratos bancários",
        "🔍 Analisa cada transação",
        "📋 Classifica automaticamente",
        "✅ Concilia com o sistema",
      ],
    },
    {
      sector: "Imobiliárias",
      icon: "🏠",
      color: "green",
      problem: "Qualificação de leads",
      timeManual: "30min por lead",
      timeAuto: "2min por lead",
      solution: "IA analisa perfil e interesse do cliente automaticamente",
      steps: [
        "📧 Recebe lead do site",
        "🔍 Analisa dados e preferências",
        "🎯 Qualifica automaticamente",
        "📱 Agenda visita se qualificado",
      ],
    },
    {
      sector: "Recursos Humanos",
      icon: "👥",
      color: "purple",
      problem: "Triagem de currículos",
      timeManual: "20min por currículo",
      timeAuto: "30s por currículo",
      solution: "IA analisa competências e adequação à vaga",
      steps: [
        "📄 Recebe currículo por email",
        "🔍 Extrai competências e experiência",
        "📊 Pontua adequação à vaga",
        "📧 Responde automaticamente",
      ],
    },
    {
      sector: "E-commerce",
      icon: "🛒",
      color: "yellow",
      problem: "Atendimento ao cliente",
      timeManual: "10min por ticket",
      timeAuto: "1min por ticket",
      solution: "IA resolve dúvidas comuns e escalona casos complexos",
      steps: [
        "💬 Cliente faz pergunta",
        "🤖 IA analisa contexto",
        "💡 Fornece resposta personalizada",
        "📈 Aprende com feedbacks",
      ],
    },
    {
      sector: "Saúde",
      icon: "🏥",
      color: "red",
      problem: "Agendamento de consultas",
      timeManual: "5min por agendamento",
      timeAuto: "30s por agendamento",
      solution: "IA gerencia agenda e confirma automaticamente",
      steps: [
        "📞 Paciente solicita consulta",
        "📅 IA verifica disponibilidade",
        "✅ Confirma e bloqueia horário",
        "📲 Envia lembretes automáticos",
      ],
    },
    {
      sector: "Advocacia",
      icon: "⚖️",
      color: "indigo",
      problem: "Controle de prazos processuais",
      timeManual: "1h por processo",
      timeAuto: "5min por processo",
      solution: "IA monitora prazos e gera alertas automáticos",
      steps: [
        "📋 Cadastra novo processo",
        "📅 IA calcula todos os prazos",
        "🔔 Envia alertas preventivos",
        "📊 Gera relatórios de status",
      ],
    },
  ];

  const currentExample = examples[activeExample];
  const colorMap: Record<
    ColorKey,
    {
      bg: string;
      border: string;
      accent: string;
      text: string;
    }
  > = {
    blue: {
      bg: "bg-blue-500/20",
      border: "border-blue-500/30",
      accent: "bg-blue-500",
      text: "text-blue-400",
    },
    green: {
      bg: "bg-green-500/20",
      border: "border-green-500/30",
      accent: "bg-green-500",
      text: "text-green-400",
    },
    purple: {
      bg: "bg-purple-500/20",
      border: "border-purple-500/30",
      accent: "bg-purple-500",
      text: "text-purple-400",
    },
    yellow: {
      bg: "bg-yellow-500/20",
      border: "border-yellow-500/30",
      accent: "bg-yellow-500",
      text: "text-yellow-400",
    },
    red: {
      bg: "bg-red-500/20",
      border: "border-red-500/30",
      accent: "bg-red-500",
      text: "text-red-400",
    },
    indigo: {
      bg: "bg-indigo-500/20",
      border: "border-indigo-500/30",
      accent: "bg-indigo-500",
      text: "text-indigo-400",
    },
  };

  return (
    <section className="w-full mt-32">
      <div className="text-center mb-16 flex items-center flex-col gap-5">
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
          Automação de Processos por Setor:
          <br />
          Contabilidade, RH, Vendas e Mais
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Casos de sucesso de automação empresarial com IA. Veja como reduzimos
          tempo de execução e aumentamos a precisão em processos de
          contabilidade, recursos humanos, vendas, saúde e advocacia.
        </p>
      </div>

      {/* Sector Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => setActiveExample(index)}
            className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-2 ${
              activeExample === index
                ? `${
                    colorMap[example.color].accent
                  } border-transparent text-white shadow-lg`
                : "bg-neutral-800 border-neutral-600 text-neutral-300 hover:border-neutral-500"
            }`}
          >
            <span className="text-lg">{example.icon}</span>
            <span className="font-medium">{example.sector}</span>
          </button>
        ))}
      </div>

      {/* Main Demo Area */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before - Manual Process */}
          <div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl border border-red-500/30 flex items-center justify-center">
                <span className="text-red-400 font-bold">❌</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Processo Manual
                </h3>
                <p className="text-red-400 text-sm">{currentExample.problem}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <span className="text-neutral-300">Tempo gasto:</span>
                <span className="text-red-400 font-bold">
                  {currentExample.timeManual}
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-neutral-400 text-sm mb-3">Passos manuais:</p>
                {[
                  "📄 Recebe documentos/solicitações",
                  "👀 Analisa manualmente cada item",
                  "✏️ Processa e organiza informações",
                  "📧 Responde ou encaminha manualmente",
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-neutral-400 text-sm"
                  >
                    <div className="w-6 h-6 border border-neutral-600 rounded-full flex items-center justify-center text-xs">
                      {index + 1}
                    </div>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-red-400">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-sm">Processo lento e propenso a erros</span>
            </div>
          </div>

          {/* After - Automated Process */}
          <div
            className={`bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 ${
              colorMap[currentExample.color].bg
            } border-opacity-50`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-12 h-12 ${
                  colorMap[currentExample.color].bg
                } rounded-xl ${
                  colorMap[currentExample.color].border
                } border flex items-center justify-center`}
              >
                <span className="text-2xl">{currentExample.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Processo Automatizado
                </h3>
                <p className={`${colorMap[currentExample.color].text} text-sm`}>
                  {currentExample.solution}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div
                className={`flex items-center justify-between p-3 ${
                  colorMap[currentExample.color].bg
                } ${colorMap[currentExample.color].border} border rounded-lg`}
              >
                <span className="text-neutral-300">Tempo gasto:</span>
                <span
                  className={`${colorMap[currentExample.color].text} font-bold`}
                >
                  {currentExample.timeAuto}
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-neutral-400 text-sm mb-3">
                  Passos automatizados:
                </p>
                {currentExample.steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-neutral-300 text-sm"
                  >
                    <div
                      className={`w-6 h-6 ${
                        colorMap[currentExample.color].accent
                      } rounded-full flex items-center justify-center text-white text-xs font-bold`}
                    >
                      ✓
                    </div>
                    <span
                      className="animate-pulse"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`flex items-center gap-2 ${
                colorMap[currentExample.color].text
              }`}
            >
              <span
                className={`w-2 h-2 ${
                  colorMap[currentExample.color].accent
                } rounded-full animate-pulse`}
              ></span>
              <span className="text-sm">
                Processo rápido, preciso e escalável
              </span>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mt-8 bg-neutral-800/30 backdrop-blur-md border border-neutral-700 rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div
                className={`text-3xl font-bold ${
                  colorMap[currentExample.color].text
                } mb-2`}
              >
                {Math.round(
                  (parseInt(currentExample.timeManual) /
                    parseInt(currentExample.timeAuto)) *
                    100
                ) / 100}
                x
              </div>
              <p className="text-neutral-400 text-sm">Mais rápido</p>
            </div>
            <div>
              <div
                className={`text-3xl font-bold ${
                  colorMap[currentExample.color].text
                } mb-2`}
              >
                95%
              </div>
              <p className="text-neutral-400 text-sm">Redução de erros</p>
            </div>
            <div>
              <div
                className={`text-3xl font-bold ${
                  colorMap[currentExample.color].text
                } mb-2`}
              >
                24/7
              </div>
              <p className="text-neutral-400 text-sm">Funcionamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
