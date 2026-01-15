'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'COMO FUNCIONA O STARCINE PLAY?',
      answer:
        'O Starcine Play é uma plataforma de streaming que reúne filmes, séries, esportes e canais ao vivo em um só lugar. Você assiste pela internet em diversos dispositivos, com qualidade, estabilidade e praticidade.',
    },
    {
      question: 'QUANTOS DISPOSITIVOS POSSO USAR AO MESMO TEMPO?',
      answer:
        'O acesso permite assistir em mais de um dispositivo, conforme o plano escolhido. Na maioria dos casos, são 2 telas simultâneas. Caso precise de mais telas, nosso suporte pode orientar sobre as opções disponíveis.',
    },
    {
      question: 'COMO FUNCIONA O TESTE GRÁTIS?',
      answer:
        'Durante o teste grátis, você tem acesso completo à plataforma, com todos os conteúdos liberados. Nossa equipe oferece suporte total para ajudar na instalação e configuração.',
    },
    {
      question: 'E SE EU NÃO GOSTAR DO SERVIÇO?',
      answer:
        'Caso você não se adapte ao serviço, oferecemos a possibilidade de solicitação de devolução em até 7 dias após a compra.',
    },
    {
      question: 'APÓS A COMPRA, VOCÊS OFERECEM SUPORTE?',
      answer:
        'Sim! Após a compra, você conta com suporte completo para instalação, configuração e dúvidas.',
    },
    {
      question: 'EM QUAIS DISPOSITIVOS POSSO ASSISTIR?',
      answer:
        'Você pode assistir no celular, tablet, Smart TV, TV Box/Chromecast e também no computador ou notebook.',
    },
    {
      question: 'COMO FAÇO PARA ASSINAR?',
      answer:
        'Escolha um dos planos disponíveis nesta página, clique em “Quero este plano” e siga as instruções de pagamento.',
    },
  ]

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-white dark:bg-dark-bg-primary py-20"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Tudo o que você precisa saber antes de assinar
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-dark-bg-secondary rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 dark:hover:bg-dark-bg-primary transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

