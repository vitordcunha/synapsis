import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Highlight } from "@/components/ui/hero-highlight";
import { motion } from "motion/react";

export function HowItWorksSection() {
  const items = [
    {
      step: 1,
      title: "Mapeamento Detalhado",
      description: (
        <>
          Analisamos seus processos de ponta a ponta para identificar os{" "}
          <strong>maiores gargalos operacionais</strong> e as{" "}
          <strong>melhores oportunidades de automação</strong>, garantindo o
          máximo retorno sobre o investimento.
        </>
      ),
      color: "blue",
      hoverColor: "blue-600",
      borderColor: "blue-600/50",
      shadowColor: "blue-500/10",
      delay: 0.1,
      icon: (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded border border-blue-400 flex items-center justify-center transition-all duration-500 hover:scale-125">
            <div className="w-2 h-2 bg-blue-200 rounded-full animate-pulse"></div>
          </div>
          <div className="w-4 h-4 bg-blue-400 rounded border border-blue-300 flex items-center justify-center transition-all duration-500 hover:scale-125">
            <div className="w-2 h-2 bg-blue-100 rounded-full animate-pulse"></div>
          </div>
        </div>
      ),
      gradient: "from-blue-500/20 to-transparent",
      progressBar: "from-blue-500 to-blue-400",
    },
    {
      step: 2,
      title: "Desenvolvimento Ágil",
      description: (
        <>
          Desenvolvemos a <strong>IA personalizada</strong> para suas
          necessidades específicas usando <strong>metodologia ágil</strong>, com
          entregas incrementais e testes contínuos para garantir qualidade e
          rapidez.
        </>
      ),
      color: "yellow",
      hoverColor: "yellow-600",
      borderColor: "yellow-600/50",
      shadowColor: "yellow-500/10",
      delay: 0.2,
      icon: (
        <div className="grid grid-cols-2 gap-2">
          <div
            className="w-5 h-5 bg-yellow-500 rounded border border-yellow-400 flex items-center justify-center transition-all duration-500 hover:scale-110 animate-pulse"
            style={{ animationDelay: "0ms" }}
          >
            <div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
          </div>

          <div className="w-5 h-5 bg-neutral-600 border border-neutral-500 rounded transition-all duration-500 hover:bg-yellow-400 hover:border-yellow-300"></div>
          <div className="w-5 h-5 bg-neutral-600 border border-neutral-500 rounded transition-all duration-500 hover:bg-yellow-400 hover:border-yellow-300"></div>
          <div
            className="w-5 h-5 bg-yellow-400 rounded border border-yellow-300 flex items-center justify-center transition-all duration-500 hover:scale-110 animate-pulse"
            style={{ animationDelay: "600ms" }}
          >
            <div className="w-2 h-2 bg-yellow-100 rounded-full"></div>
          </div>
        </div>
      ),
      gradient: "from-yellow-500/20 to-transparent",
      progressBar: "from-yellow-500 to-yellow-400",
    },
    {
      step: 3,
      title: "Validação Rigorosa",
      description: (
        <>
          Testamos intensivamente cada solução em{" "}
          <strong>ambiente controlado</strong>, validando{" "}
          <strong>precisão, velocidade e confiabilidade</strong> antes da
          implementação final em produção.
        </>
      ),
      color: "green",
      hoverColor: "green-600",
      borderColor: "green-600/50",
      shadowColor: "green-500/10",
      delay: 0.3,
      icon: (
        <div className="flex gap-1">
          <div
            className="w-2 h-6 bg-green-500 rounded-full animate-pulse"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-4 bg-green-400 rounded-full animate-pulse"
            style={{ animationDelay: "200ms" }}
          ></div>
          <div
            className="w-2 h-5 bg-green-500 rounded-full animate-pulse"
            style={{ animationDelay: "400ms" }}
          ></div>
          <div
            className="w-2 h-3 bg-green-400 rounded-full animate-pulse"
            style={{ animationDelay: "600ms" }}
          ></div>
        </div>
      ),
      gradient: "from-green-500/20 to-transparent",
      progressBar: "from-green-500 to-green-400",
    },
    {
      step: 4,
      title: "Implementação Completa",
      description: (
        <>
          Implementamos com <strong>acompanhamento 24/7</strong> e monitoramento
          contínuo de performance, garantindo{" "}
          <strong>ROI positivo desde o primeiro mês</strong> e melhoria contínua
          dos resultados.
        </>
      ),
      color: "purple",
      hoverColor: "purple-600",
      borderColor: "purple-600/50",
      shadowColor: "purple-500/10",
      delay: 0.4,
      icon: (
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
      ),
      gradient: "from-purple-500/20 to-transparent",
      progressBar: "from-purple-500 to-purple-400",
    },
  ];

  return (
    <section id="como-funciona" className="w-full">
      <motion.div
        className="text-center mb-16 flex items-center flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <HoverBorderGradient
          containerClassName="rounded-full border-border mb-6"
          as="div"
          className="bg-background text-foreground flex items-center space-x-2"
        >
          <p className="text-neutral-500 text-sm font-medium tracking-widest uppercase">
            COMO FUNCIONA
          </p>
        </HoverBorderGradient>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Nossa Metodologia de Automação
        </h2>

        <p className="text-xl text-white max-w-3xl leading-relaxed">
          Processo estruturado de análise, desenvolvimento e implementação de{" "}
          <br />
          <Highlight className="rounded-sm">
            soluções de automação personalizadas para seu negócio
          </Highlight>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {items.map((item) => (
          <motion.div
            key={item.step}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: item.delay }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 transition-transform duration-300 group hover:scale-110">
              <div
                className={`w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center border border-neutral-600 transition-all duration-300 group-hover:bg-${item.hoverColor} group-hover:border-${item.color}-500`}
              >
                <span className="text-white font-semibold">{item.step}</span>
              </div>
            </div>

            <div
              className={`bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 pt-6 h-[430px] flex flex-col gap-3 items-center mt-10 transition-all duration-300 hover:bg-neutral-800/70 hover:border-${item.borderColor} hover:shadow-2xl hover:shadow-${item.shadowColor} hover:-translate-y-2`}
            >
              <div className="w-28 h-28 bg-neutral-700/50 rounded-2xl border border-neutral-600 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-17 h-17 bg-neutral-600 border border-neutral-500 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                    ></div>
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <div
                      className={`w-12 h-1 bg-gradient-to-r ${item.progressBar} rounded-full mx-auto animate-pulse`}
                    ></div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white text-center text-nowrap">
                {item.title}
              </h3>

              <p className="text-neutral-300 text-center text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
