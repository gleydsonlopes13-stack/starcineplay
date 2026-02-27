import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/bg-filmes.png"
          alt="Fundo com filmes"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
      </div>

      {/* Overlay neutro (sem azul) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

      {/* Glows vermelhos */}
      <div className="absolute -top-40 -left-40 z-20 w-[420px] h-[420px] rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 z-20 w-[520px] h-[520px] rounded-full bg-primary/20 blur-3xl" />

      <div className="container mx-auto px-4 py-20 relative z-30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-sm text-gray-200">
              🔥 Streaming premium • Acesso imediato
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-white">Entretenimento de</span>{' '}
              <span className="text-primary">qualidade</span>{' '}
              <span className="text-white">é aqui!</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              Transforme sua forma de assistir com o <b>Starcine Play</b>.
              Conteúdo completo, qualidade de imagem top e <b>suporte dedicado</b> para você assistir sem dor de cabeça.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href="https://wa.me/5511970905736?text=Olá,%20tenho%20dúvidas%20sobre%20o%20Starcine%20Play" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-xl font-extrabold text-lg transition-all shadow-2xl hover:shadow-primary/40 hover:scale-[1.03] active:scale-[0.99]"
              >
                TIRE SUAS DÚVIDAS
                <MessageCircle className="w-5 h-5" />
              </a>

              <div className="text-sm text-gray-300">
                ✅ Ativação rápida • ✅ Suporte na instalação
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="absolute -inset-8 bg-primary/30 rounded-[28px] blur-2xl animate-pulse" />
              <div className="absolute -inset-2 bg-primary/20 rounded-[26px] blur-xl animate-pulse" />

              <div className="relative bg-black/60 backdrop-blur-sm rounded-[24px] p-10 border border-white/20 shadow-2xl">
                <div className="relative flex items-center justify-center">
                  <img
                    src="/logo-starcine.png"
                    alt="Starcine Play"
                    className="
                      max-w-full h-auto
                      w-[520px] md:w-[600px] lg:w-[680px]
                      drop-shadow-[0_18px_50px_rgba(0,0,0,0.65)]
                      animate-logo motion-reduce:animate-none
                    "
                  />
                </div>

                <div className="absolute left-8 right-8 -bottom-6 h-12 bg-primary/25 blur-2xl rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}