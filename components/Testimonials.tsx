'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import MotionSection from './MotionSection'

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'CEO',
    company: 'SuperMercado Plus',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
    content: 'A AutomatizeAI transformou nossa operação. Nosso chatbot no WhatsApp qualifica leads automaticamente e agendou mais de 200 reuniões no primeiro mês. O ROI foi de 400%.',
    rating: 5,
    metric: '400% ROI',
    industry: 'Varejo'
  },
  {
    name: 'Ana Pereira',
    role: 'Diretora de Operações',
    company: 'Clínica Saúde',
    image: 'https://images.unsplash.com/photo-1594824411048-ed2e75a8b1bf?w=100&h=100&fit=crop&crop=face',
    content: 'Automatizamos todo o processo de agendamento de consultas. Reduzimos de 15 para 2 minutos o tempo de marcação, e os pacientes adoram a praticidade do WhatsApp.',
    rating: 5,
    metric: '87% redução no tempo',
    industry: 'Saúde'
  },
  {
    name: 'Roberto Costa',
    role: 'Proprietário',
    company: 'AutoPeças Pro',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    content: 'O dashboard em tempo real nos dá visão completa do estoque e vendas. Evitamos rupturas e aumentamos a margem de lucro em 25%. Indispensável para nosso crescimento.',
    rating: 5,
    metric: '25% aumento na margem',
    industry: 'Automotivo'
  },
  {
    name: 'Mariana Santos',
    role: 'E-commerce Manager',
    company: 'EcommerceMax',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5cb?w=100&h=100&fit=crop&crop=face',
    content: 'As integrações entre nosso marketplace, estoque e contabilidade eliminaram 90% do trabalho manual. Nossa equipe agora foca em estratégia, não em planilhas.',
    rating: 5,
    metric: '90% menos trabalho manual',
    industry: 'E-commerce'
  }
]

export default function Testimonials() {
  return (
    <MotionSection className="section-padding bg-brand-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Histórias reais de empresas que transformaram seus resultados com nossas soluções de automação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full group hover:scale-105 transition-all duration-500 relative overflow-hidden">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="h-16 w-16 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Metric Highlight */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-brand/20 border border-brand-primary/30 backdrop-blur-sm mb-6">
                    <span className="text-white font-bold text-sm">
                      🚀 {testimonial.metric}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-brand-bg" />
                    </div>
                    <div className="ml-4">
                      <div className="text-white font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.role} • {testimonial.company}
                      </div>
                      <div className="text-brand-accent-2 text-xs font-medium">
                        {testimonial.industry}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
              <p className="text-gray-400">Avaliação média</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <p className="text-gray-400">Clientes satisfeitos</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <p className="text-gray-400">Taxa de retenção</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <p className="text-gray-400">Suporte técnico</p>
            </div>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}