import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Synapsis - Automação de Processos com IA para Empresas",
  description:
    "Transforme sua empresa com automação inteligente. Automatize processos de contabilidade, RH, vendas e atendimento com IA. Aumente eficiência em até 95% e reduza custos operacionais.",
  keywords: [
    "automação de processos",
    "inteligência artificial para empresas",
    "IA para negócios",
    "automação contábil",
    "automação RH",
    "chatbot empresarial",
    "gestão automatizada",
    "eficiência operacional",
    "transformação digital",
    "robotic process automation",
    "RPA",
    "automação de tarefas",
    "otimização de processos",
    "tecnologia empresarial",
    "inovação digital",
  ],
  authors: [{ name: "Synapsis" }],
  creator: "Synapsis",
  publisher: "Synapsis",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://synapsis.com.br",
    title: "Synapsis - Automação de Processos com IA para Empresas",
    description:
      "Automatize processos empresariais com IA. Soluções para contabilidade, RH, vendas e atendimento. Aumente eficiência em até 95%.",
    siteName: "Synapsis",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Synapsis - Automação de Processos com IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synapsis - Automação de Processos com IA",
    description:
      "Transforme sua empresa com automação inteligente. Aumente eficiência e reduza custos operacionais.",
    images: ["/twitter-image.jpg"],
    creator: "@synapsis",
  },
  alternates: {
    canonical: "https://synapsis.com.br",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://synapsis.com.br" />
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Synapsis",
              description:
                "Automação de processos empresariais com inteligência artificial",
              url: "https://synapsis.com.br",
              logo: "https://synapsis.com.br/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-99999-9999",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
              sameAs: [
                "https://www.linkedin.com/company/synapsis",
                "https://www.instagram.com/synapsis",
                "https://twitter.com/synapsis",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
                addressLocality: "São Paulo",
                addressRegion: "SP",
              },
            }),
          }}
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
