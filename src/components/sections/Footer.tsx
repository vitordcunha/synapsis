export function Footer() {
  return (
    <footer className="w-full mt-32 bg-[#1a1a1a] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-white text-2xl font-bold tracking-wide">
                Synapsis
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-md">
              Transformamos empresas através da automação inteligente com IA.
              Nossa missão é eliminar tarefas repetitivas para que você foque no
              que realmente importa: fazer seu negócio crescer.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-neutral-400 text-sm">Siga-nos:</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-neutral-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <svg
                    className="w-4 h-4 text-neutral-400 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-neutral-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <svg
                    className="w-4 h-4 text-neutral-400 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-neutral-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <svg
                    className="w-4 h-4 text-neutral-400 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.097.118.112.222.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.013C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#exemplos"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Exemplos
                </a>
              </li>
              <li>
                <a
                  href="#precos"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Preços
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Automação de Processos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Integração de Sistemas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Análise de Dados
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Consultoria em IA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Suporte Técnico
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-neutral-400 text-sm">
              <p>&copy; 2024 Synapsis. Todos os direitos reservados.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
