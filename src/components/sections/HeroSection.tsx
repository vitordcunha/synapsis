import { Cover } from "@/components/ui/cover";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-full w-full mb-20">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg bg-gradient-to-b from-background  to-foreground bg-clip-text text-transparent">
        Faça sua empresa mais
        <Cover>eficiente</Cover>
      </h1>

      <p className="text-lg text-neutral-400 mb-8 max-w-xl">
        Automatize processos com IA, e aumente a eficiência da sua empresa
      </p>

      <button className="bg-white/10 text-white font-semibold px-8 py-3 rounded-full shadow-lg backdrop-blur-md border border-white/10 mb-16 hover:bg-white/20 transition">
        Comece agora
      </button>
    </section>
  );
}
