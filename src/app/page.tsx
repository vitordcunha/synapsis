"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ExamplesSection } from "@/components/sections/ExamplesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import {
  FAQStructuredData,
  ServiceStructuredData,
} from "@/components/StructuredData";
import {
  MobileNavMenu,
  MobileNavToggle,
  MobileNavHeader,
  MobileNav,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function Home() {
  const navItems = [
    { name: "Como Funciona", link: "#como-funciona" },
    { name: "Resultados Reais", link: "#exemplos" },
    { name: "Planos", link: "#planos" },
    { name: "FAQ", link: "#faq" },
    { name: "Análise Gratuita", link: "#contato" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background to-[#23262F] p-4 flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Header */}
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton variant="primary">Análise Gratuita</NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Análise Gratuita
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>

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

      {/* Structured Data para SEO */}
      <FAQStructuredData />
      <ServiceStructuredData />
    </div>
  );
}
