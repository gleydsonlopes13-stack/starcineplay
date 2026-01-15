import Link from 'next/link'
import Image from 'next/image'
import { Wifi, Users } from 'lucide-react'

export default function Recognition() {
  return (
    <section id="sobre" className="bg-dark-bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Visual (IMAGEM) */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              
              {/* Glow vermelho */}
              <div className="absolute inset-0 bg-primary/25 rounded-2xl blur-3xl" />

              {/* Card com imagem */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src="/bg-recognition.png"
                  alt="Catálogo Starcine Play"
                  fill
                  priority
                  className="object-cover"
                />

                {/* Overlay escuro para contraste */}
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Confiado por milhares de usuários em todo o Brasil
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              O <strong>Starcine Play</strong> nasceu com o objetivo de simplificar
              o entretenimento digital. Nossa plataforma oferece estabilidade,
              variedade de conteúdos e um suporte dedicado para garantir a melhor
              experiência do início ao fim.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-dark-bg-primary p-6 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  +60 mil
                </div>
                <div className="text-gray-400">
                  Conteúdos disponíveis
                </div>
              </div>

              <div className="bg-dark-bg-primary p-6 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  Suporte humano
                </div>
                <div className="text-gray-400">
                  Atendimento e orientação pós-compra
                </div>
              </div>
            </div>

            {/* BOTÃO SUPORTE */}
            <a
              href="https://wa.me/5511970905736?text=Olá,%20quero%20falar%20com%20o%20suporte%20do%20Starcine%20Play"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-2xl hover:shadow-primary/50 hover:scale-105"
            >
              💬 FALE CONOSCO
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

