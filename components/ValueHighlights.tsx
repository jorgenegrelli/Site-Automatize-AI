'use client'

import { motion } from 'framer-motion'
import { Bot, Workflow, BarChart3, Smartphone, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import MotionSection from './MotionSection'
import Link from 'next/link'

const services = [
  {
    icon: Workflow,
    title: 'Automação de Processos (RPA)',
    description: 'Elimine tarefas manuais repetitivas. Robôs inteligentes que trabalham 24/7 sem erros, processando dados, enviando relatórios e integrando sistemas.',
    benefits: ['Redução de 80% no tempo de processo', 'Zero erros humanos', 'ROI em 3-6 meses'],
    color: 'from-blue-500 to-purple-600',
    href: '/solucoes#rpa'
  },
  {
    icon: Bot,
    title: 'Chatbots & IA',
    description: 'Atendimento inteligente 24/7 no WhatsApp, site e redes sociais. IA que qualifica leads, agenda reuniões e resolve 80% dos atendimentos automaticamente.',
    benefits: ['Atendimento 24/7', 'Aumento de 300% em conversões', 'Qualificação automática de leads'],
    color: 'from-purple-500 to-pink-600',
    href: '/solucoes#chatbots'
  },
  {
    icon: BarChart3,
    title: 'Dashboards & RPA para Varejo',
    description: 'Painéis em tempo real com dados de vendas, estoque e performance. Automação específica para supermercados, lojas e e-commerce.',
    benefits: ['Visão 360° do negócio', 'Alertas inteligentes', 'Decisões baseadas em dados'],
    color: 'from-pink-500 to-orange-600',
    href: '/solucoes#dashboards'
  },
  {
    icon: Smartphone,
    title: 'Integrações & APIs',
    description: 'Conecte ERP, PDV, planilhas e sistemas diversos. Sincronização automática de dados entre plataformas, eliminando retrabalho.',
    benefits: ['Sincronização em tempo real', 'Fim do retrabalho', 'Dados centralizados'],
    color: 'from-orange-500 to-red-600',
    href: '/solucoes#integracoes'
  }
]

export default function ValueHighlights() {
  return (
    <MotionSection className="section-padding bg-gradient-to-b from-brand-bg to-brand-bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Soluções que <span className="text-gradient">transformam negócios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Especializados em automação para pequenas e médias empresas. 
            Tecnologia de ponta com implementação rápida e suporte completo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full group hover:scale-105 transition-all duration-500">
                <CardContent className="p-8">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:shadow-glow transition-all duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-brand mr-3" />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    asChild
                    className="w-full group-hover:border-brand-primary group-hover:bg-brand-primary/10 transition-all duration-300"
                  >
                    <Link href={service.href}>
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-brand/20 border border-brand-primary/30 backdrop-blur-sm mb-8">
            <span className="text-white font-semibold">
              🚀 Implementação em 7-15 dias
            </span>
          </div>
          
          <Button
            variant="gradient"
            size="xl"
            asChild
            className="shadow-glow-lg"
          >
            <Link href="/contato">
              Solicitar diagnóstico gratuito
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </MotionSection>
  )
}