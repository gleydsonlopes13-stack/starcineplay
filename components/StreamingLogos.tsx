import Image from "next/image"

export default function StreamingLogos() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full max-w-6xl border border-red-600 rounded-2xl p-6 md:p-10 bg-gradient-to-b from-black to-zinc-900 shadow-[0_0_40px_rgba(220,38,38,0.25)]">
          {/* Logos */}
          <Image
            src="/logos/streaming-logos.png"
            alt="Plataformas disponíveis no Starcine Play"
            width={1600}
            height={300}
            className="w-full h-auto object-contain opacity-95"
            priority
          />

          {/* Texto de Oferta */}
          <div className="mt-10 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">
              TUDO ISSO POR APENAS <span className="text-red-500">R$ 30,00</span>
            </h2>

            <p className="mt-3 text-lg md:text-xl text-gray-300">
              Todas essas plataformas liberadas em um único acesso.
            </p>

            <p className="mt-1 text-lg md:text-xl text-gray-300">
              Isso mesmo: <span className="text-white font-semibold">R$ 30 por mês</span>.
            </p>

            {/* CTA WhatsApp */}
            <a
              href="https://wa.me/5511970905736?text=Ol%C3%A1%2C%20quero%20assinar%20o%20Starcine%20Play"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-red-600 hover:bg-red-700 text-white font-extrabold text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:scale-105"
            >
              ASSINE AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}