import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white">
            S
          </span>
          Starcine Play
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="#inicio" className="hover:text-white">Início</Link>
          <Link href="#sobre" className="hover:text-white">Sobre Nós</Link>
          <Link href="#planos" className="hover:text-white">Planos</Link>
          <Link href="#faq" className="hover:text-white">Dúvidas</Link>
        </nav>

        {/* CTA */}
        <Link
          href="#planos"
          className="bg-primary hover:bg-primaryHover text-white px-4 py-2 rounded-lg font-semibold transition"
        >
          Adquirir agora
        </Link>
      </div>
    </header>
  )
}

