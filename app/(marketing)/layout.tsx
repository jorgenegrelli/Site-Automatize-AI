import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTAWhatsApp from '@/components/CTAWhatsApp'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <CTAWhatsApp />
    </div>
  )
}