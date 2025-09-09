import { NextSeoProps } from 'next-seo'

const baseUrl = 'https://automatizeai.com.br'

export const defaultSEO: NextSeoProps = {
  title: 'AutomatizeAI - Automação, IA e integrações para o seu negócio vender mais',
  description: 'RPA, chatbots e integrações que economizam horas por semana e aumentam sua taxa de conversão. Especialistas em automação para pequenas e médias empresas.',
  canonical: baseUrl,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: baseUrl,
    siteName: 'AutomatizeAI',
    title: 'AutomatizeAI - Automação & Soluções Digitais',
    description: 'RPA, chatbots e integrações que economizam horas por semana e aumentam sua taxa de conversão.',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'AutomatizeAI - Automação & Soluções Digitais',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@AutomatizeAI',
    site: '@AutomatizeAI',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#6D28D9',
    },
    {
      name: 'robots',
      content: 'index,follow',
    },
    {
      name: 'author',
      content: 'AutomatizeAI',
    },
    {
      name: 'keywords',
      content: 'automação, RPA, chatbot, IA, integrações, dashboard, desenvolvimento, Curitiba',
    },
  ],
}

export function generatePageSEO(page: {
  title: string
  description: string
  path: string
  image?: string
}): NextSeoProps {
  return {
    ...defaultSEO,
    title: `${page.title} | AutomatizeAI`,
    description: page.description,
    canonical: `${baseUrl}${page.path}`,
    openGraph: {
      ...defaultSEO.openGraph,
      title: page.title,
      description: page.description,
      url: `${baseUrl}${page.path}`,
      images: page.image ? [
        {
          url: page.image,
          width: 1200,
          height: 630,
          alt: page.title,
          type: 'image/jpeg',
        },
      ] : defaultSEO.openGraph?.images,
    },
  }
}

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AutomatizeAI',
  alternateName: 'AutomatizeAI - Automação & Soluções Digitais',
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-41-99653-4730',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua das Flores, 123',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    postalCode: '80000-000',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://www.linkedin.com/company/automatizeai',
    'https://www.instagram.com/automatizeai',
    'https://wa.me/5541996534730',
  ],
  description: 'RPA, chatbots e integrações que economizam horas por semana e aumentam sua taxa de conversão.',
  foundingDate: '2023',
  areaServed: 'Brazil',
  serviceType: ['RPA', 'Chatbots', 'Integrações', 'Dashboards', 'Desenvolvimento Web'],
}