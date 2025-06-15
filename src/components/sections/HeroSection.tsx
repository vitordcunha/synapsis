import { Cover } from "@/components/ui/cover";
import React from "react";
import { motion } from "motion/react";

// Componente para estrelas animadas
function StarryBackground() {
  const stars = React.useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const animationType = Math.random();
      let animation = "animate-pulse";

      if (animationType < 0.3) {
        animation = "animate-bounce-slow";
      } else if (animationType < 0.6) {
        animation = "animate-twinkle";
      } else if (animationType < 0.8) {
        animation = "animate-float";
      } else {
        animation = "animate-spin-slow";
      }

      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        delay: Math.random() * 5,
        animation,
        duration: 2 + Math.random() * 4,
      };
    });
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-5px);
            opacity: 0.8;
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.3);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        .animate-twinkle {
          animation: twinkle var(--duration) ease-in-out infinite;
        }

        .animate-float {
          animation: float var(--duration) ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow var(--duration) ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow var(--duration) linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute rounded-full bg-white ${star.animation}`}
            style={
              {
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDelay: `${star.delay}s`,
                "--duration": `${star.duration}s`,
              } as React.CSSProperties
            }
          />
        ))}

        {/* Estrelas especiais com brilho */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`special-${i}`}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div className="relative">
              <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
              <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping opacity-30"></div>
              <div className="absolute -inset-1 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-20"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function HeroSection() {
  return (
    <>
      <StarryBackground />

      <section className="relative flex flex-col items-center justify-center text-center h-full w-full mb-20 gap-10 mt-20">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg bg-gradient-to-b from-background to-foreground bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Automação de Processos com IA para sua <br />
          <Cover>Empresa</Cover>
        </motion.h1>

        <motion.h2
          className="text-lg text-neutral-400 mb-8 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Transforme tarefas manuais em processos automatizados inteligentes.
          Aumente a eficiência operacional em até 95% e reduza custos com
          inteligência artificial personalizada para seu negócio.
        </motion.h2>

        <motion.a
          href="#como-funciona"
          className="bg-white/10 text-white font-semibold px-8 py-3 rounded-full shadow-lg backdrop-blur-md border border-white/10 mb-16 hover:bg-white/20 transition"
          aria-label="Começar automação de processos com IA"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Automatizar Meus Processos
        </motion.a>
      </section>
    </>
  );
}
