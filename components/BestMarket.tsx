import Link from 'next/link'
import { Lock, Wifi, Monitor, Gem, Play } from 'lucide-react'

export default function BestMarket() {
  const features = [
    {
      icon: Lock,
      title: 'Conteúdo Completo e Seguro',
      description:
        'Tenha acesso a uma biblioteca completa de filmes, séries, esportes e canais ao vivo, com estabilidade e segurança.',
    },
    {
      icon: Wifi,
      title: '+60 Mil Conteúdos Disponíveis',
      description:
        'Milhares de opções para assistir quando quiser, sem limitações e com atualização constante.',
    },
    {
      icon: Monitor,
      title: 'Compatível com Todos os Dispositivos',
      description:
        'Assista no celular, tablet, Smart TV, TV Box, computador ou notebook com a mesma qualidade.',
    },
    {
      icon: Gem,
      title: 'Conteúdos Premium Liberados',
      description:
        'Tenha liberdade total para assistir conteúdos abertos e premium em um único aplicativo.',
    },
  ]

  return (
    <section className="bg-gradient-hero py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Conteúdo à esquerda */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              O Melhor do Entretenimento Digital
            </h2>

            <h3 className="text-2xl md:text-3xl font-semibold text-primary">
              Assista quando quiser, onde estiver
            </h3>

            <p className="text-lg text-gray-200 leading-relaxed">
              O <strong>Starcine Play</strong> é uma plataforma de streaming
              completa que reúne filmes, séries, esportes e canais ao vivo em um
              só lugar. Compatível com todos os dispositivos e com acesso rápido
              e estável para você assistir sem complicações.
            </p>

            {/* BOTÃO TESTE (APONTANDO PARA WHATSAPP) */}
            <a
              href="https://wa.me/5511970905736?text=Olá,%20quero%20fazer%20um%20teste%20do%20Starcine%20Play"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-2xl hover:shadow-primary/50 hover:scale-105"
            >
              FAÇA UM TESTE GRÁTIS
              <Play className="w-5 h-5" />
            </a>
          </div>

          {/* Cards à direita */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

