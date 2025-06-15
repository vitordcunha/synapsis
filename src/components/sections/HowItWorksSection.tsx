import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function HowItWorksSection() {
  return (
    <section className="w-full">
      <div className="text-center mb-16 flex items-center flex-col gap-5">
        <HoverBorderGradient
          containerClassName="rounded-full border-border"
          as="div"
          className="bg-background text-foreground flex items-center space-x-2"
        >
          <p className="text-neutral-500 text-sm font-medium tracking-widest uppercase">
            COMO FUNCIONA
          </p>
        </HoverBorderGradient>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Temos 4 passos simples para
          <br />
          automatizar processos
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
        {/* Step 1 - Diagnóstico */}
        <div className="relative group">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-110">
            <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center border border-neutral-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-500">
              <span className="text-white font-semibold">1</span>
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 pt-12 h-[400px] flex flex-col items-center mt-10 transition-all duration-300 hover:bg-neutral-800/70 hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
            <div className="w-32 h-32 bg-neutral-700/50 rounded-2xl border border-neutral-600 flex items-center justify-center mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-neutral-600 border border-neutral-500 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                          [0, 3, 6, 7, 8].includes(i)
                            ? "bg-blue-400 animate-pulse"
                            : "bg-neutral-400"
                        }`}
                        style={{
                          animationDelay: `${i * 100}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex gap-1">
                  <div
                    className="w-2 h-4 bg-blue-500 rounded-sm transition-all duration-700 hover:h-6 animate-pulse"
                    style={{ animationDelay: "200ms" }}
                  ></div>
                  <div className="w-2 h-3 bg-neutral-500 rounded-sm transition-all duration-700 hover:h-5"></div>
                  <div
                    className="w-2 h-5 bg-blue-400 rounded-sm transition-all duration-700 hover:h-7 animate-pulse"
                    style={{ animationDelay: "400ms" }}
                  ></div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Diagnóstico
            </h3>
            <p className="text-neutral-400 text-center text-sm leading-relaxed">
              Analisamos seus processos atuais e identificamos oportunidades de
              melhoria com IA
            </p>
          </div>
        </div>

        {/* Step 2 - Estratégia */}
        <div className="relative group">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-110">
            <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center border border-neutral-600 transition-all duration-300 group-hover:bg-yellow-600 group-hover:border-yellow-500">
              <span className="text-white font-semibold">2</span>
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 pt-12 h-[400px] flex flex-col items-center mt-10 transition-all duration-300 hover:bg-neutral-800/70 hover:border-yellow-600/50 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2">
            <div className="w-32 h-32 bg-neutral-700/50 rounded-2xl border border-neutral-600 flex items-center justify-center mb-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-neutral-600 border border-neutral-500 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div
                      className="w-6 h-6 bg-yellow-500 rounded border border-yellow-400 flex items-center justify-center transition-all duration-500 hover:scale-110 animate-pulse"
                      style={{ animationDelay: "0ms" }}
                    >
                      <div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
                    </div>
                    <div className="w-6 h-6 bg-neutral-600 border border-neutral-500 rounded transition-all duration-500 hover:bg-yellow-400 hover:border-yellow-300"></div>
                    <div className="w-6 h-6 bg-neutral-600 border border-neutral-500 rounded transition-all duration-500 hover:bg-yellow-400 hover:border-yellow-300"></div>
                    <div
                      className="w-6 h-6 bg-yellow-400 rounded border border-yellow-300 flex items-center justify-center transition-all duration-500 hover:scale-110 animate-pulse"
                      style={{ animationDelay: "600ms" }}
                    >
                      <div className="w-2 h-2 bg-yellow-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div
                    className="w-3 h-1 bg-yellow-500 rounded-full animate-pulse"
                    style={{ animationDelay: "200ms" }}
                  ></div>
                  <div
                    className="w-4 h-1 bg-yellow-400 rounded-full animate-pulse"
                    style={{ animationDelay: "400ms" }}
                  ></div>
                  <div
                    className="w-2 h-1 bg-yellow-500 rounded-full animate-pulse"
                    style={{ animationDelay: "600ms" }}
                  ></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Estratégia
            </h3>
            <p className="text-neutral-400 text-center text-sm leading-relaxed">
              Desenvolvemos um plano estratégico personalizado para maximizar os
              benefícios da automação
            </p>
          </div>
        </div>

        {/* Step 3 - Implementação */}
        <div className="relative group">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-110">
            <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center border border-neutral-600 transition-all duration-300 group-hover:bg-green-600 group-hover:border-green-500">
              <span className="text-white font-semibold">3</span>
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 pt-12 h-[400px] flex flex-col items-center mt-10 transition-all duration-300 hover:bg-neutral-800/70 hover:border-green-600/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2">
            <div className="w-32 h-32 bg-neutral-700/50 rounded-2xl border border-neutral-600 flex items-center justify-center mb-8 relative">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-10 bg-neutral-600 border border-neutral-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent"></div>
                  <div className="flex gap-1">
                    <div
                      className="w-1 h-6 bg-green-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-1 h-4 bg-green-400 rounded-full animate-pulse"
                      style={{ animationDelay: "200ms" }}
                    ></div>
                    <div
                      className="w-1 h-5 bg-green-500 rounded-full animate-pulse"
                      style={{ animationDelay: "400ms" }}
                    ></div>
                    <div
                      className="w-1 h-3 bg-green-400 rounded-full animate-pulse"
                      style={{ animationDelay: "600ms" }}
                    ></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-neutral-600 border border-neutral-500 rounded-sm flex items-center justify-center transition-all duration-300 hover:bg-green-600 hover:border-green-500 hover:scale-110">
                    <div
                      className="w-1 h-1 bg-green-500 rounded-full animate-pulse"
                      style={{ animationDelay: "100ms" }}
                    ></div>
                  </div>
                  <div className="w-3 h-3 bg-neutral-600 border border-neutral-500 rounded-sm flex items-center justify-center transition-all duration-300 hover:bg-green-600 hover:border-green-500 hover:scale-110">
                    <div
                      className="w-1 h-1 bg-green-500 rounded-full animate-pulse"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                  <div className="w-3 h-3 bg-neutral-600 border border-neutral-500 rounded-sm flex items-center justify-center transition-all duration-300 hover:bg-green-600 hover:border-green-500 hover:scale-110">
                    <div
                      className="w-1 h-1 bg-green-500 rounded-full animate-pulse"
                      style={{ animationDelay: "500ms" }}
                    ></div>
                  </div>
                </div>
                <div
                  className="w-8 h-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full animate-pulse"
                  style={{ animationDelay: "700ms" }}
                ></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Implementação
            </h3>
            <p className="text-neutral-400 text-center text-sm leading-relaxed">
              Desenvolvemos e implementamos soluções de IA personalizadas para
              sua empresa
            </p>
          </div>
        </div>

        {/* Step 4 - Resultados */}
        <div className="relative group">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-110">
            <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center border border-neutral-600 transition-all duration-300 group-hover:bg-purple-600 group-hover:border-purple-500">
              <span className="text-white font-semibold">4</span>
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 pt-12 h-[400px] flex flex-col items-center mt-10 transition-all duration-300 hover:bg-neutral-800/70 hover:border-purple-600/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
            <div className="w-32 h-32 bg-neutral-700/50 rounded-2xl border border-neutral-600 flex items-center justify-center mb-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-12 bg-neutral-600 border border-neutral-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
                  <div className="flex items-end gap-1">
                    <div
                      className="w-2 h-6 bg-purple-500 rounded-sm transition-all duration-700 hover:h-8 animate-pulse"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-8 bg-purple-400 rounded-sm transition-all duration-700 hover:h-10 animate-pulse"
                      style={{ animationDelay: "200ms" }}
                    ></div>
                    <div
                      className="w-2 h-4 bg-purple-500 rounded-sm transition-all duration-700 hover:h-6 animate-pulse"
                      style={{ animationDelay: "400ms" }}
                    ></div>
                    <div
                      className="w-2 h-7 bg-purple-400 rounded-sm transition-all duration-700 hover:h-9 animate-pulse"
                      style={{ animationDelay: "600ms" }}
                    ></div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div
                    className="w-4 h-1 bg-purple-500 rounded-full animate-pulse"
                    style={{ animationDelay: "100ms" }}
                  ></div>
                  <div
                    className="w-6 h-1 bg-purple-400 rounded-full animate-pulse"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                  <div
                    className="w-3 h-1 bg-purple-500 rounded-full animate-pulse"
                    style={{ animationDelay: "500ms" }}
                  ></div>
                </div>
                <div className="flex items-center gap-1">
                  <div
                    className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                    style={{ animationDelay: "200ms" }}
                  ></div>
                  <div
                    className="text-green-400 text-xs font-bold animate-bounce"
                    style={{ animationDelay: "400ms" }}
                  >
                    ↗
                  </div>
                  <div className="text-xs text-neutral-400 transition-all duration-300 hover:text-green-400">
                    +24%
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Resultados
            </h3>
            <p className="text-neutral-400 text-center text-sm leading-relaxed">
              Acompanhe o aumento da eficiência e os resultados mensuráveis em
              sua empresa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
