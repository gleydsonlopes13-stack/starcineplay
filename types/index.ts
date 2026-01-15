export type Theme = 'light' | 'dark'

export interface Plan {
  name: string
  price: string
  period: string
  popular: boolean
  features: string[]
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}







