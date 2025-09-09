import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import { jsonLd } from '@/lib/seo'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta'
})

export const metadata: Metadata = {
  title: 'AutomatizeAI - Automação, IA e integrações para o seu negócio vender mais',
  description: 'RPA, chatbots e integrações que economizam horas por semana e aumentam sua taxa de conversão. Especialistas em automação para pequenas e médias empresas.',
  keywords: 'automação, RPA, chatbot, IA, integrações, dashboard, desenvolvimento, Curitiba',
  authors: [{ name: 'AutomatizeAI' }],
  creator: 'AutomatizeAI',
  publisher: 'AutomatizeAI',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://automatizeai.com.br',
    siteName: 'AutomatizeAI',
    title: 'AutomatizeAI - Automação & Soluções Digitais',
    description: 'RPA, chatbots e integrações que economizam horas por semana e aumentam sua taxa de conversão.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AutomatizeAI - Automação & Soluções Digitais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutomatizeAI - Automação & Soluções Digitais',
    description: 'RPA, chatbots e integrações que economizam horas por semana e aumentam sua taxa de conversão.',
    images: ['/og-image.jpg'],
    creator: '@AutomatizeAI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
        {children}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Analytics />
      </body>
    </html>
  )
}