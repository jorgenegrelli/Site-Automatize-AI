'use client'

import { motion } from 'framer-motion'
import { 
  Workflow, Bot, BarChart3, Smartphone, ArrowRight, 
  CheckCircle, Clock, DollarSign, Shield, Zap 
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import MotionSection from '@/components/MotionSection'
import Link from 'next/link'

const solutions = [
  {
    id: 'rpa',
    icon: Workflow,
    title: 'Automação de Processos (RPA)',
    subtitle: 'Robôs que trabalham 24/7 sem erros',
    description: 'Elimine tarefas manuais repetitivas com robôs inteligentes que processam dados, geram relatórios, fazem backup de arquivos e integram sistemas automaticamente.',
    color: 'from-blue-500 to-purple-600',
    benefits: [
      'Redução de 80% no tempo de processo',
      'Zero erros humanos',
      'Trabalha 24/7 sem pausas',
      'ROI em 3-6 meses',
      'Integração com qualquer sistema'
    ],
    useCases: [
      'Processamento de planilhas e relatórios',
      'Backup automático de dados',
      'Integração entre sistemas (ERP, CRM, PDV)',
      'Envio automático de e-mails e mensagens',
      'Monitoramento de estoque e alertas',
      'Geração de relatórios financeiros'
    ],
    price: 'A partir de R$ 2.000',
    implementation: '7-10 dias'
  },
  {
    id: 'chatbots',
    icon: Bot,
    title: 'Chatbots & IA',
    subtitle: 'Atendimento inteligente que vende mais',
    description: 'Chatbots avançados no WhatsApp, site e redes sociais que qualificam leads, agendam reuniões e resolvem 80% dos atendimentos automaticamente.',
    color: 'from-purple-500 to-pink-600',
    benefits: [
      'Atendimento 24 horas por dia',
      'Aumento de 300% em conversões',
      'Qualificação automática de leads',
      'Integração com WhatsApp Business',
      'Respostas instantâneas'
    ],
    useCases: [
      'Qualificação de leads no WhatsApp',
      'Agendamento automático de consultas',
      'Suporte técnico automatizado',
      'Vendas e orçamentos online',
      'FAQ interativo e inteligente',
      'Coleta de feedbacks e pesquisas'
    ],
    price: 'A partir de R$ 1.500',
    implementation: '5-7 dias'
  },
  {
    id: 'integracoes',
    icon: Smartphone,
    title: 'Integrações & APIs',
    subtitle: 'Conecte todos seus sistemas',
    description: 'Sincronize ERP, PDV, planilhas, e-commerce e sistemas diversos. Dados sempre atualizados em tempo real, eliminando retrabalho e erros manuais.',
    color: 'from-orange-500 to-red-600',
    benefits: [
      'Sincronização em tempo real',
      'Fim do retrabalho manual',
      'Dados centralizados e confiáveis',
      'Integração com +200 plataformas',
      'API customizada quando necessário'
    ],
    useCases: [
      'Integração ERP + E-commerce + PDV',
      'Sincronização de estoque multimarca',
      'Conexão com marketplaces',
      'Integração contábil automática',
      'Backup de dados na nuvem',
      'Webhooks para notificações'
    ],
    price: 'A partir de R$ 3.000',
    implementation: '10-15 dias'
  },
  {
    id: 'dashboards',
    icon: BarChart3,
    title: 'Dashboards & Analytics',
    subtitle: 'Visão 360° do seu negócio',
    description: 'Painéis em tempo real com métricas de vendas, estoque, performance e KPIs. Alertas inteligentes e relatórios automáticos para decisões baseadas em dados.',
    color: 'from-pink-500 to-orange-600',
    benefits: [
      'Métricas em tempo real',
      'Alertas automáticos',
      'Relatórios por WhatsApp/E-mail',
      'Acesso mobile e desktop',
      'Histórico completo de dados'
    ],
    useCases: [
      'Dashboard de vendas e metas',
      'Monitoramento de estoque',
      'Controle financeiro em tempo real',
      'Performance de equipes',
      'Análise de clientes e produtos',
      'Previsão de demanda com IA'
    ],
    price: 'A partir de R$ 2.500',
    implementation: '7-12 dias'
  }
]

export default function SolutionsPage() {
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
                <Zap className="h-12 w-12 text-white" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Nossas <span className="text-gradient">Soluções</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Tecnologia de ponta para automatizar processos, aumentar vendas e 
              dar mais eficiência ao seu negócio.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {[
                { icon: Clock, value: '7-15 dias', label: 'Implementação' },
                { icon: DollarSign, value: '3-6 meses', label: 'ROI médio' },
                { icon: Shield, value: '24/7', label: 'Suporte' },
                { icon: CheckCircle, value: '98%', label: 'Sucesso' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand/20 mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </MotionSection>

      {/* Solutions Grid */}
      <section className="section-padding bg-gradient-to-b from-brand-bg to-brand-bg-secondary">
        <div className="container-custom">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center gap-12`}
              >
                {/* Content */}
                <div className="flex-1 space-y-8">
                  <div>
                    <Badge variant="gradient" className="mb-4">
                      {solution.subtitle}
                    </Badge>
                    
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                      {solution.title}
                    </h2>
                    
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Principais benefícios
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {solution.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-brand mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div>
                      <div className="text-3xl font-bold text-white">{solution.price}</div>
                      <div className="text-gray-400">Implementação: {solution.implementation}</div>
                    </div>
                    <Button variant="gradient" size="lg" asChild className="ml-auto">
                      <Link href="/contato">
                        Solicitar diagnóstico
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Use Cases Card */}
                <div className="flex-1">
                  <Card className="relative overflow-hidden group hover:scale-105 transition-all duration-500">
                    <CardHeader>
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${solution.color} mb-4`}>
                        <solution.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-white">
                        Casos de uso
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {solution.useCases.map((useCase, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                            className="flex items-start"
                          >
                            <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{useCase}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Pronto para <span className="text-gradient">automatizar</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Agende um diagnóstico gratuito e descubra como nossa tecnologia 
              pode transformar seu negócio em apenas algumas semanas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" size="xl" asChild className="shadow-glow-lg">
                <Link href="https://wa.me/5541996534730?text=Quero%20um%20diagnóstico%20gratuito">
                  💬 Falar no WhatsApp
                </Link>
              </Button>
              
              <Button variant="outline" size="xl" asChild className="border-white/20 hover:border-brand-primary hover:bg-brand-primary/10">
                <Link href="/contato">
                  📋 Pedir Proposta
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </MotionSection>
    </div>
  )
}