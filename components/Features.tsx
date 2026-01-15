import { Monitor, Film, Trophy } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Monitor,
      title: 'Qualidade SD, HD, FHD e 4K',
      description:
        'Desfrute de uma experiência completa, com transmissão estável e alta qualidade de imagem em todos os seus dispositivos.',
    },
    {
      icon: Film,
      title: 'Filmes e Séries Atualizados',
      description:
        'Tenha acesso a um catálogo completo de filmes e séries, sempre atualizado, com qualidade premium de som e imagem.',
    },
    {
      icon: Trophy,
      title: 'Esportes Ao Vivo',
      description:
        'Não perca nenhum lance. Assista aos principais eventos esportivos ao vivo, com transmissão fluida e sem interrupções.',
    },
  ]

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-dark-bg-secondary p-8 rounded-xl border border-gray-800 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



