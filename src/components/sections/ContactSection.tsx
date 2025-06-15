import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    sector: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full mt-32" id="contato">
      <div className="text-center mb-16 flex items-center flex-col gap-5">
        <HoverBorderGradient
          containerClassName="rounded-full border-border"
          as="div"
          className="bg-background text-foreground flex items-center space-x-2"
        >
          <p className="text-neutral-500 text-sm font-medium tracking-widest uppercase">
            CONTATO
          </p>
        </HoverBorderGradient>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Pronto para automatizar
          <br />
          sua empresa?
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Fale conosco e descubra como podemos transformar seus processos
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Solicite uma Consultoria Gratuita
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    Setor
                  </label>
                  <select
                    name="sector"
                    value={formData.sector}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Selecione o setor</option>
                    <option value="contabilidade">Contabilidade</option>
                    <option value="imobiliaria">Imobiliária</option>
                    <option value="rh">Recursos Humanos</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="saude">Saúde</option>
                    <option value="advocacia">Advocacia</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Conte-nos sobre seus processos que gostariam de automatizar..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 transition-colors"
              >
                Solicitar Consultoria Gratuita
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl border border-blue-500/30 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-neutral-400">contato@synapsis.ai</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl border border-green-500/30 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      WhatsApp
                    </h4>
                    <p className="text-neutral-400">(11) 99999-9999</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl border border-purple-500/30 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Localização
                    </h4>
                    <p className="text-neutral-400">São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Horário de Atendimento
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-neutral-300">
                  <span>Segunda - Sexta:</span>
                  <span>9h às 18h</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Sábado:</span>
                  <span>9h às 13h</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-600">
                <p className="text-neutral-400 text-xs">
                  Respondemos emails e WhatsApp em até 2 horas durante o horário
                  comercial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
