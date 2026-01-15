import Link from 'next/link'
import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-bg-primary border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Starcine Play
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              Plataforma de streaming completa para filmes, séries, esportes e
              canais ao vivo — com acesso rápido, qualidade e suporte dedicado.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold mb-4">Contato e Redes</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-dark-bg-secondary rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-dark-bg-secondary rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="WhatsApp"
              >
                <span className="text-white text-xl">💬</span>
              </a>
            </div>

            <p className="text-gray-500 text-sm mt-4">
              Precisa de ajuda? Nosso suporte orienta a instalação e o acesso.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#duvidas"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Dúvidas Frequentes
                </Link>
              </li>
              <li>
                <Link
                  href="#planos"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Planos
                </Link>
              </li>
              <li>
                <Link
                  href="#teste"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Teste Grátis
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Starcine Play. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <span className="text-gray-500 text-sm">Powered by</span>
            <span className="text-primary font-bold ml-2">STARCINE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}



