import Header from '@/components/Header'
import Hero from '@/components/Hero'
import VSL from '@/components/VSL'
import StreamingLogos from '@/components/StreamingLogos'
import Features from '@/components/Features'
import Recognition from '@/components/Recognition'
import BestMarket from '@/components/BestMarket'
import PricingPlans from '@/components/PricingPlans'
import Devices from '@/components/Devices'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Header />
      <Hero />

      {/* VSL NO MEIO DA PÁGINA */}
      <VSL />

      <StreamingLogos />
      <Features />
      <Recognition />
      <BestMarket />
      <PricingPlans />
      <Devices />
      <FAQ />
      <Footer />
    </main>
  )
}

