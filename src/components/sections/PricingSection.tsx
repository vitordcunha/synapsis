import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function PricingSection() {
  return (
    <section className="w-full mt-32">
      <div className="text-center mb-16 flex items-center flex-col gap-5">
        <HoverBorderGradient
          containerClassName="rounded-full border-border"
          as="div"
          className="bg-background text-foreground flex items-center space-x-2"
        >
          <p className="text-neutral-500 text-sm font-medium tracking-widest uppercase">
            PLANOS
          </p>
        </HoverBorderGradient>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Escolha o plano ideal
          <br />
          para sua empresa
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Estrutura de preços transparente que cresce com seu negócio
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Setup & Diagnóstico */}
        <div className="relative group">
          <div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-neutral-800/70 hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Setup & Diagnóstico
              </h3>
              <p className="text-neutral-400 text-sm">
                Cobrança única para implementação
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="text-3xl font-bold text-white mb-2">
                R$ 1.000 - R$ 20.000
              </div>
              <p className="text-neutral-400 text-sm">
                Dependendo da complexidade
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-neutral-300 text-sm">
                  Workshop para mapear processos
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-neutral-300 text-sm">
                  Desenvolvimento do agente de IA
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-neutral-300 text-sm">
                  Integração e testes completos
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-neutral-300 text-sm">
                  Customização especializada
                </span>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 transition-colors">
              Solicitar Orçamento
            </button>
          </div>
        </div>

        {/* Plano Básico */}
        <div className="relative group">
          <div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-neutral-800/70 hover:border-green-600/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Plano Básico
              </h3>
              <p className="text-neutral-400 text-sm">Ideal para começar</p>
            </div>

            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-white mb-2">
                R$ 990
                <span className="text-lg text-neutral-400 font-normal">
                  /mês
                </span>
              </div>
              <p className="text-neutral-400 text-sm">Assinatura mensal</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-neutral-300 text-sm">
                  1 processo automatizado
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-neutral-300 text-sm">
                  Até 1.000 transações/mês
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-neutral-300 text-sm">
                  Suporte técnico padrão
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-neutral-300 text-sm">
                  Atualizações incluídas
                </span>
              </div>
            </div>

            <button className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-500 transition-colors">
              Começar Agora
            </button>
          </div>
        </div>

        {/* Plano Profissional */}
        <div className="relative group">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Mais Popular
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-md border border-purple-600/50 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-neutral-800/70 hover:border-purple-600/70 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl border border-purple-500/30 flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Plano Profissional
              </h3>
              <p className="text-neutral-400 text-sm">
                Para empresas em crescimento
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-white mb-2">
                R$ 2.490
                <span className="text-lg text-neutral-400 font-normal">
                  /mês
                </span>
              </div>
              <p className="text-neutral-400 text-sm">Assinatura mensal</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-neutral-300 text-sm">
                  Até 3 processos automatizados
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-neutral-300 text-sm">
                  Até 5.000 transações/mês
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-neutral-300 text-sm">
                  Suporte prioritário
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-neutral-300 text-sm">
                  Relatórios avançados
                </span>
              </div>
            </div>

            <button className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-500 transition-colors">
              Escolher Profissional
            </button>
          </div>
        </div>
      </div>

      {/* Usage Fee Info */}
      <div className="mt-8 max-w-lg mx-auto">
        <div className="bg-neutral-800/30 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 text-center">
          <h3 className="text-lg font-semibold text-white mb-4">
            Taxa por Uso Excedente
          </h3>

          <p className="text-neutral-300 mb-4 text-sm">
            Quando você exceder o limite de transações do seu plano, cobramos
            apenas:
          </p>
          <div className="text-2xl font-bold text-white mb-2">
            R$ 0,20{" "}
            <span className="text-base text-neutral-400 font-normal">
              por transação extra
            </span>
          </div>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Pague apenas pelo que usar além do seu plano. Sem surpresas, sem
            necessidade de upgrade imediato.
          </p>
        </div>
      </div>
    </section>
  );
}
