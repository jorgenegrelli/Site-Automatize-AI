'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Rocket, CheckCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import MotionSection from './MotionSection'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Diagnóstico Gratuito',
    description: 'Analisamos seus processos atuais e identificamos oportunidades de automação com maior impacto no seu negócio.',
    duration: '1-2 dias',
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: Lightbulb,
    number: '02', 
    title: 'Estratégia Personalizada',
    description: 'Desenvolvemos uma solução sob medida com cronograma detalhado, ROI projetado e marcos de entrega definidos.',
    duration: '2-3 dias',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Implementação Rápida',
    description: 'Colocamos a solução em produção com testes completos, treinamento da equipe e monitoramento 24/7.',
    duration: '7-15 dias',
    color: 'from-pink-500 to-orange-600'
  }
]

export default function HowItWorks() {
  return (
    <MotionSection className="section-padding bg-gradient-to-b from-brand-bg-secondary to-brand-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4">
            Processo Simples
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Como <span className="text-gradient">transformamos</span> seu negócio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Metodologia comprovada com mais de 500 projetos entregues. 
            Do diagnóstico à implementação em apenas 3 semanas.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-brand/30 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white/5 hover:bg-white/10 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group hover:scale-105 backdrop-blur-sm">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} text-white font-bold text-lg shadow-glow-sm group-hover:shadow-glow transition-all duration-300`}>
                      {step.number}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {step.duration}
                    </Badge>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.color}/20 mb-6`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step Connection (for mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8">
                      <div className="w-0.5 h-8 bg-gradient-brand/50" />
                    </div>
                  )}
                </div>

                {/* Step Number Circle (for desktop) */}
                <div className="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold shadow-glow z-10">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">7 dias</div>
              <p className="text-gray-400">Tempo médio de implementação</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <p className="text-gray-400">Suporte e monitoramento</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <p className="text-gray-400">Garantia de satisfação</p>
            </div>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}