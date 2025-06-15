import { Cover } from "@/components/ui/cover";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-full w-full mb-20">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg bg-gradient-to-b from-background to-foreground bg-clip-text text-transparent">
        Automação de Processos com IA para sua
        <Cover>Empresa</Cover>
      </h1>

      <h2 className="text-lg text-neutral-400 mb-8 max-w-xl">
        Transforme tarefas manuais em processos automatizados inteligentes.
        Aumente a eficiência operacional em até 95% e reduza custos com
        inteligência artificial personalizada para seu negócio.
      </h2>

      <button
        className="bg-white/10 text-white font-semibold px-8 py-3 rounded-full shadow-lg backdrop-blur-md border border-white/10 mb-16 hover:bg-white/20 transition"
        aria-label="Começar automação de processos com IA"
      >
        Automatizar Meus Processos
      </button>
    </section>
  );
}
