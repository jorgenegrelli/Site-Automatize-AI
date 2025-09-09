'use client'

import { motion } from 'framer-motion'
import { 
  Check, X, Star, Zap, ArrowRight, Shield, 
  Clock, Users, Headphones, Rocket
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import MotionSection from '@/components/MotionSection'
import Link from 'next/link'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Ideal para pequenos negócios',
    price: 'R$ 1.997',
    period: '/mês',
    originalPrice: 'R$ 2.497',
    discount: '20% OFF',
    description: 'Perfeito para empresas iniciando na automação',
    popular: false,
    features: [
      { name: '1 Chatbot WhatsApp', included: true },
      { name: 'Até 1.000 conversas/mês', included: true },
      { name: '1 Integração simples', included: true },
      { name: 'Dashboard básico', included: true },
      { name: 'Suporte via e-mail', included: true },
      { name: 'Treinamento básico (2h)', included: true },
      { name: 'SLA 48h', included: true },
      { name: 'RPA avançado', included: false },
      { name: 'Múltiplas integrações', included: false },
      { name: 'Suporte prioritário', included: false },
      { name: 'Relatórios customizados', included: false }
    ],
    benefits: [
      'Implementação em 5-7 dias',
      'ROI em 2-4 meses',
      'Suporte durante implantação',
      '30 dias de garantia'
    ],
    cta: 'Começar agora',
    ideal: ['Pequenos negócios', 'Até 50 clientes/dia', 'Processos simples']
  },
  {
    id: 'business',
    name: 'Business',
    subtitle: 'Para empresas em crescimento',
    price: 'R$ 3.497',
    period: '/mês',
    originalPrice: 'R$ 4.497',
    discount: '22% OFF',
    description: 'Solução completa para médias empresas',
    popular: true,
    features: [
      { name: '3 Chatbots multiplataforma', included: true },
      { name: 'Até 5.000 conversas/mês', included: true },
      { name: '5 Integrações avançadas', included: true },
      { name: 'Dashboard completo + relatórios', included: true },
      { name: 'RPA para 3 processos', included: true },
      { name: 'Suporte WhatsApp + telefone', included: true },
      { name: 'Treinamento completo (8h)', included: true },
      { name: 'SLA 24h', included: true },
      { name: 'API customizada', included: true },
      { name: 'Backup automático', included: true },
      { name: 'Relatórios customizados', included: true }
    ],
    benefits: [
      'Implementação em 7-10 dias',
      'ROI em 1-3 meses',
      'Gerente de projeto dedicado',
      '60 dias de garantia'
    ],
    cta: 'Mais popular',
    ideal: ['Médias empresas', 'Até 500 clientes/dia', 'Múltiplos processos']
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'Para grandes operações',
    price: 'R$ 6.997',
    period: '/mês',
    originalPrice: 'R$ 9.497',
    discount: '26% OFF',
    description: 'Solução enterprise com recursos ilimitados',
    popular: false,
    features: [
      { name: 'Chatbots ilimitados', included: true },
      { name: 'Conversas ilimitadas', included: true },
      { name: 'Integrações ilimitadas', included: true },
      { name: 'Dashboard enterprise + BI', included: true },
      { name: 'RPA ilimitado', included: true },
      { name: 'Suporte 24/7 dedicado', included: true },
      { name: 'Treinamento personalizado', included: true },
      { name: 'SLA 4h', included: true },
      { name: 'APIs customizadas', included: true },
      { name: 'Infraestrutura dedicada', included: true },
      { name: 'Consultoria estratégica mensal', included: true }
    ],
    benefits: [
      'Implementação em 10-15 dias',
      'ROI garantido em 1-2 meses',
      'Equipe dedicada',
      '90 dias de garantia'
    ],
    cta: 'Falar com especialista',
    ideal: ['Grandes empresas', 'Operação complexa', 'Alto volume']
  }
]

const addOns = [
  {
    name: 'Chatbot adicional',
    price: 'R$ 497/mês',
    description: 'Chatbot extra para outros canais ou funções'
  },
  {
    name: 'Integração customizada',
    price: 'R$ 897/cada',
    description: 'Integração com sistemas específicos'
  },
  {
    name: 'RPA processo adicional',
    price: 'R$ 697/mês',
    description: 'Automação de processo extra'
  },
  {
    name: 'Horas de desenvolvimento',
    price: 'R$ 150/hora',
    description: 'Desenvolvimento de funcionalidades específicas'
  }
]

const faqs = [
  {
    question: 'Posso mudar de plano a qualquer momento?',
    answer: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento sem multas.'
  },
  {
    question: 'O que está incluído no período de implementação?',
    answer: 'Configuração completa, integração com seus sistemas, treinamento da equipe e 30 dias de suporte integral.'
  },
  {
    question: 'Vocês oferecem teste gratuito?',
    answer: 'Oferecemos diagnóstico gratuito e demonstração personalizada. Entre em contato para agendar.'
  },
  {
    question: 'Como funciona o suporte técnico?',
    answer: 'Oferecemos suporte via WhatsApp, e-mail e telefone conforme seu plano, com SLAs garantidos.'
  }
]

export default function PlansPage() {
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <MotionSection className="section-padding bg-gradient-to-br from-brand-bg via-brand-bg-secondary to-brand-bg">
        <div className="container-custom">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-8"
            >
              <div className="p-4 rounded-2xl bg-gradient-brand shadow-glow-lg">
                <Rocket className="h-12 w-12 text-white" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Planos & <span className="text-gradient">Preços</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
            >
              Escolha o plano ideal para seu negócio. Sem surpresas, sem taxas ocultas. 
              Cancelamento livre a qualquer momento.
            </motion.p>

            {/* Special Offer Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-brand/20 border border-brand-primary/30 backdrop-blur-sm mb-8"
            >
              <Star className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-white font-semibold">
                🎯 Oferta especial: até 26% de desconto no primeiro ano
              </span>
            </motion.div>
          </div>
        </div>
      </MotionSection>

      {/* Pricing Plans */}
      <MotionSection className="section-padding bg-brand-bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative ${plan.popular ? 'lg:scale-105 lg:-mt-4' : ''}`}
              >
                <Card className={`h-full relative overflow-hidden ${
                  plan.popular 
                    ? 'border-2 border-brand-primary shadow-glow-lg' 
                    : 'hover:scale-105 transition-transform duration-300'
                }`}>
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 left-0">
                      <div className="bg-gradient-brand text-white text-center py-2 text-sm font-semibold">
                        MAIS POPULAR
                      </div>
                    </div>
                  )}

                  <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                    <div className="mb-4">
                      <Badge variant={plan.popular ? 'gradient' : 'outline'} className="mb-2">
                        {plan.discount}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-3xl font-bold text-white mb-2">
                      {plan.name}
                    </CardTitle>
                    
                    <p className="text-gray-400 mb-6">
                      {plan.subtitle}
                    </p>

                    <div className="mb-6">
                      <div className="flex items-center justify-center">
                        <span className="text-4xl md:text-5xl font-bold text-white">
                          {plan.price}
                        </span>
                        <span className="text-gray-400 ml-2">{plan.period}</span>
                      </div>
                      <div className="flex items-center justify-center mt-2">
                        <span className="text-gray-500 line-through text-sm">
                          {plan.originalPrice}
                        </span>
                      </div>
                    </div>

                    <Button 
                      variant={plan.popular ? 'gradient' : 'outline'} 
                      size="lg" 
                      className="w-full mb-6"
                      asChild
                    >
                      <Link href="/contato">
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardHeader>

                  <CardContent className="px-8 pb-8">
                    {/* Ideal for */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Ideal para:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {plan.ideal.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-brand-primary mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-4">Recursos inclusos:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            {feature.included ? (
                              <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            ) : (
                              <X className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                            )}
                            <span className={`text-sm ${
                              feature.included ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-white mb-4">Benefícios:</h4>
                      <ul className="space-y-2">
                        {plan.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <Shield className="h-4 w-4 text-brand-accent-2 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Serviços <span className="text-gradient">Adicionais</span>
              </h2>
              <p className="text-xl text-gray-300">
                Expanda sua automação com nossos add-ons especializados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-bold text-white mb-3">
                        {addon.name}
                      </h3>
                      <div className="text-2xl font-bold text-brand-accent-2 mb-4">
                        {addon.price}
                      </div>
                      <p className="text-gray-300 text-sm">
                        {addon.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* FAQ Section */}
      <MotionSection className="section-padding bg-brand-bg">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:bg-white/10 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* CTA Section */}
      <MotionSection className="section-padding bg-gradient-brand/10">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pronto para <span className="text-gradient">transformar</span> seu negócio?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Agende um diagnóstico gratuito e descubra qual plano é ideal para sua empresa. 
              Implementação garantida em até 15 dias.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" size="xl" asChild className="shadow-glow-lg">
                <Link href="/contato">
                  🚀 Começar agora
                </Link>
              </Button>
              
              <Button variant="outline" size="xl" asChild className="border-white/20 hover:border-brand-primary hover:bg-brand-primary/10">
                <Link href="https://wa.me/5541996534730?text=Quero%20saber%20mais%20sobre%20os%20planos">
                  💬 Falar no WhatsApp
                </Link>
              </Button>
            </div>

            {/* Guarantee */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/20 border border-green-500/30">
                <Shield className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-white font-semibold">
                  ✅ Garantia de 30-90 dias ou seu dinheiro de volta
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </MotionSection>
    </div>
  )
}