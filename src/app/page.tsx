"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ExamplesSection } from "@/components/sections/ExamplesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background to-[#23262F] p-4 flex flex-col">
      <FloatingNav navItems={navItems} />

      {/* Header */}
      <header className="flex items-center justify-between w-full mb-16">
        <div className="flex items-center gap-2">
          <span className="text-white text-xl font-semibold tracking-wide">
            Synapsis
          </span>
        </div>

        <button
          className="bg-neutral-800 text-neutral-200 px-6 py-2 rounded-full shadow-inner hover:bg-neutral-700 transition-colors cursor-pointer"
          style={{ boxShadow: "inset 0 2px 8px 0 rgba(255,255,255,0.10)" }}
        >
          Contato
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center h-full w-full">
        <HeroSection />
        <HowItWorksSection />
        <ExamplesSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
