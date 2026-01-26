'use client'

import { Check } from 'lucide-react'

function brl(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

function discountPercent(original: number, current: number) {
  if (original <= 0 || current >= original) return 0
  return Math.round(((original - current) / original) * 100)
}

export default function PricingPlans() {
  const commonFeatures = [
    '2 Telas',
    '+60.000 Conteúdos (Canais, Filmes e Séries)',
    'Qualidade SD / HD / FHD / 4K',
    'Guia de Programação (EPG)',
    'Assista no Smartphone/Tablet',
    'Assista na Smart TV',
    'Assista no TV Box/Chromecast',
    'Assista no PC e Notebook',
    'Programação Adultos (Opcional)',
    'Rádios Online',
    'Desenhos 24h',
    'Compatível com todos os dispositivos',
  ]

  // ✅ No DIAMANTE vai aparecer só: "Inclui tudo..." + extras premium
  const diamondFeatures = [
    'INCLUI TUDO DOS PLANOS ANTERIORES +',
    '🚀 Suporte 24 horas, 7 dias por semana',
    '⚡ Prioridade máxima na fila de atendimento',
    '🎬 Conteúdos novos liberados antes dos outros planos',
    '🔒 Estabilidade premium (menos quedas, mais fluidez)',
    '🧠 Atendimento especializado para instalação e ajustes',
    '🎁 Vantagens exclusivas ao longo do ano (bônus e liberações especiais)',
  ]

  const monthlyPrice = 30

  const plans = [
    {
      name: 'PLANO BRONZE',
      months: 1,
      currentPrice: 30,
      originalPrice: null,
      period: 'Assinatura Mensal',
      popular: false,
      features: commonFeatures,
      checkout: 'https://pay.cakto.com.br/dip6ewt_702412',
    },
    {
      name: 'PLANO PRATA',
      months: 3,
      currentPrice: 85,
      originalPrice: monthlyPrice * 3, // 90
      period: 'Assinatura Trimestral',
      popular: false,
      features: commonFeatures,
      checkout: 'https://pay.cakto.com.br/tibvrdo_703526',
    },
    {
      name: 'PLANO OURO',
      months: 6,
      currentPrice: 149.9,
      originalPrice: monthlyPrice * 6, // 180
      period: 'Assinatura Semestral',
      popular: false,
      features: commonFeatures,
      checkout: 'https://pay.cakto.com.br/h96xoim_703582',
    },
    {
      name: 'PLANO DIAMANTE',
      months: 12,
      currentPrice: 169.9,
      originalPrice: monthlyPrice * 12, // 360
      period: 'Assinatura Anual',
      popular: true,
      features: diamondFeatures, // ✅ agora não repete os itens comuns
      checkout: 'https://pay.cakto.com.br/32zo49q_703592',
    },
  ]

  return (
    <section id="planos" className="bg-white dark:bg-dark-bg-primary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Nossos Planos
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto items-center">
          {plans.map((plan, index) => {
            const off =
              plan.originalPrice != null
                ? discountPercent(plan.originalPrice, plan.currentPrice)
                : 0

            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${
                  plan.popular
                    ? 'from-primary to-secondary scale-110 shadow-2xl z-10 ring-4 ring-primary/40'
                    : 'from-gray-100 to-gray-200 dark:from-dark-bg-secondary dark:to-dark-bg-primary'
                } p-8 rounded-2xl border ${
                  plan.popular
                    ? 'border-primary'
                    : 'border-gray-300 dark:border-gray-700'
                } transition-transform`}
              >
                {(plan.popular || off > 0) && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                    {off > 0 && (
                      <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        {off}% OFF
                      </span>
                    )}
                    {plan.popular && (
                      <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                        MAIS POPULAR
                      </span>
                    )}
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <div
                    className={`text-4xl font-bold mb-2 ${
                      plan.popular ? 'text-white' : 'text-primary'
                    }`}
                  >
                    {brl(plan.currentPrice)}
                  </div>

                  {plan.originalPrice && plan.originalPrice > plan.currentPrice && (
                    <div
                      className={`mb-2 flex items-center justify-center gap-2 text-sm ${
                        plan.popular ? 'text-white/85' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <span className="line-through opacity-80">
                        {brl(plan.originalPrice)}
                      </span>
                      <span
                        className={`font-bold ${
                          plan.popular ? 'text-white' : 'text-primary'
                        }`}
                      >
                        em oferta
                      </span>
                    </div>
                  )}

                  <p
                    className={`text-sm ${
                      plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {plan.period}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-white' : 'text-primary'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular
                            ? 'text-white/90'
                            : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.checkout}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-lg font-bold transition-all ${
                    plan.popular
                      ? 'bg-white text-primary hover:bg-gray-100'
                      : 'bg-primary text-white hover:bg-primaryHover'
                  }`}
                >
                  QUERO ESTE PLANO
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
