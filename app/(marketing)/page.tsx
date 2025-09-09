import Hero from '@/components/Hero'
import ValueHighlights from '@/components/ValueHighlights'
import ClientLogos from '@/components/ClientLogos'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'

export const metadata = {
  title: 'AutomatizeAI - Automação, IA e integrações para o seu negócio vender mais',
  description: 'RPA, chatbots e integrações que economizam horas por semana e aumentam sua taxa de conversão. Especialistas em automação para pequenas e médias empresas.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueHighlights />
      <ClientLogos />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </>
  )
}