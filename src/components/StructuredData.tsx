export function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto tempo leva para implementar uma automação de processos com IA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O tempo varia conforme a complexidade, mas a maioria das automações básicas fica pronta entre 2-4 semanas. Automações mais complexas podem levar de 1-3 meses. Durante o diagnóstico, fornecemos um cronograma detalhado.",
        },
      },
      {
        "@type": "Question",
        name: "Preciso de conhecimento técnico para usar as automações com IA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não! Nossas automações são projetadas para serem intuitivas. Fornecemos treinamento completo para sua equipe e suporte contínuo. A ideia é que você foque no seu negócio, não na tecnologia.",
        },
      },
      {
        "@type": "Question",
        name: "As automações funcionam com meus sistemas atuais?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, nossas soluções são desenvolvidas para integrar com a maioria dos sistemas existentes (ERPs, CRMs, planilhas, emails, etc.). Durante o diagnóstico, mapeamos todas as integrações necessárias.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês oferecem garantia nos resultados da automação?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Garantimos que você verá melhorias mensuráveis nos primeiros 60 dias ou devolvemos o investimento do setup. Nosso sucesso está diretamente ligado ao seu.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona o suporte técnico para automação de processos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oferecemos suporte via chat, email e telefone. Planos básicos têm suporte em horário comercial, enquanto planos profissionais incluem suporte prioritário com resposta em até 2 horas.",
        },
      },
      {
        "@type": "Question",
        name: "Os dados da minha empresa ficam seguros com a automação IA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Segurança é nossa prioridade. Utilizamos criptografia de ponta, servidores certificados e seguimos as melhores práticas de proteção de dados. Seus dados nunca são compartilhados com terceiros.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

export function ServiceStructuredData() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automação de Processos com Inteligência Artificial",
    description:
      "Serviços de automação empresarial usando IA para contabilidade, RH, vendas e atendimento. Reduza custos e aumente eficiência operacional.",
    provider: {
      "@type": "Organization",
      name: "Synapsis",
      url: "https://synapsis.com.br",
    },
    serviceType: "Automação de Processos Empresariais",
    areaServed: "Brasil",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Empresas",
    },
    category: "Tecnologia",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  );
}
