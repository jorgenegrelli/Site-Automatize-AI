'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Filter, TrendingUp, Clock, DollarSign, Users, 
  ArrowRight, CheckCircle, Star, BarChart3,
  ShoppingCart, Building2, Heart, Car
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import MotionSection from '@/components/MotionSection'
import Image from 'next/image'
import Link from 'next/link'

const cases = [
  {
    id: 1,
    title: 'SuperMercado Plus',
    category: 'varejo',
    industry: 'Supermercado',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    problem: 'Controle manual de estoque resultava em rupturas frequentes e perda de vendas de R$ 50mil/mês.',
    solution: 'RPA para sincronização automática do estoque entre PDV, sistema principal e fornecedores + Dashboard em tempo real.',
    results: [
      { metric: '95%', label: 'Redução em rupturas', icon: TrendingUp },
      { metric: 'R$ 120k', label: 'Aumento mensal em vendas', icon: DollarSign },
      { metric: '8h', label: 'Economizadas por dia', icon: Clock },
      { metric: '3 meses', label: 'ROI alcançado', icon: CheckCircle }
    ],
    testimonial: 'A automação transformou nossa operação. Nunca mais perdemos vendas por falta de produtos.',
    client: 'Carlos Silva, CEO',
    tags: ['RPA', 'Dashboard', 'Integração PDV'],
    featured: true
  },
  {
    id: 2,
    title: 'Clínica Saúde Total',
    category: 'atendimento',
    industry: 'Saúde',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop',
    problem: 'Agendamento manual de consultas causava filas de espera e perda de 40% dos pacientes.',
    solution: 'Chatbot inteligente no WhatsApp para agendamento 24h + Integração com sistema médico.',
    results: [
      { metric: '300%', label: 'Aumento em agendamentos', icon: TrendingUp },
      { metric: '87%', label: 'Redução no tempo', icon: Clock },
      { metric: '24/7', label: 'Atendimento disponível', icon: Users },
      { metric: '2 min', label: 'Tempo médio de agendamento', icon: CheckCircle }
    ],
    testimonial: 'Nossos pacientes adoram a praticidade. Agendamentos aumentaram 300% no primeiro mês.',
    client: 'Dr. Ana Pereira, Diretora',
    tags: ['Chatbot', 'WhatsApp', 'Agendamento'],
    featured: true
  },
  {
    id: 3,
    title: 'AutoPeças Pro',
    category: 'ecommerce',
    industry: 'Automotivo',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
    problem: 'Gestão manual de múltiplos marketplaces (ML, Shopee, etc) consumia 12h/dia da equipe.',
    solution: 'Integração automatizada de estoque e preços entre loja física, e-commerce e marketplaces.',
    results: [
      { metric: '12h', label: 'Economizadas por dia', icon: Clock },
      { metric: '180%', label: 'Aumento nas vendas online', icon: TrendingUp },
      { metric: '0', label: 'Erros de estoque', icon: CheckCircle },
      { metric: '25%', label: 'Aumento na margem', icon: DollarSign }
    ],
    testimonial: 'Vendas online triplicaram. A equipe agora foca em atendimento, não em planilhas.',
    client: 'Roberto Costa, Proprietário',
    tags: ['E-commerce', 'Marketplaces', 'Sincronização'],
    featured: false
  },
  {
    id: 4,
    title: 'FashionStore',
    category: 'varejo',
    industry: 'Moda',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
    problem: 'Controle manual de coleções entre lojas físicas e online gerava inconsistências.',
    solution: 'RPA para sincronização de produtos + Chatbot para atendimento personalizado.',
    results: [
      { metric: '250%', label: 'Aumento em conversões', icon: TrendingUp },
      { metric: '5h', label: 'Economizadas diariamente', icon: Clock },
      { metric: '95%', label: 'Precisão no estoque', icon: CheckCircle },
      { metric: '4.8/5', label: 'Satisfação do cliente', icon: Star }
    ],
    testimonial: 'O chatbot qualifica melhor que nossos vendedores. Conversões subiram 250%.',
    client: 'Marina Silva, Gerente',
    tags: ['RPA', 'Chatbot', 'Moda'],
    featured: false
  },
  {
    id: 5,
    title: 'TechHub',
    category: 'rpa',
    industry: 'Tecnologia',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
    problem: 'Geração manual de relatórios financeiros consumia 20h/semana da equipe contábil.',
    solution: 'RPA para coleta automática de dados + Dashboard financeiro em tempo real.',
    results: [
      { metric: '20h', label: 'Economizadas por semana', icon: Clock },
      { metric: '100%', label: 'Precisão nos relatórios', icon: CheckCircle },
      { metric: '5 min', label: 'Geração de relatórios', icon: TrendingUp },
      { metric: 'R$ 50k', label: 'Economia anual em mão de obra', icon: DollarSign }
    ],
    testimonial: 'Relatórios que levavam 20h agora ficam prontos em 5 minutos, sem erros.',
    client: 'João Santos, CFO',
    tags: ['RPA', 'Financeiro', 'Relatórios'],
    featured: false
  },
  {
    id: 6,
    title: 'Restaurante Gourmet',
    category: 'atendimento',
    industry: 'Alimentação',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    problem: 'Pedidos por telefone geravam erros e demora no atendimento, perdendo 30% dos clientes.',
    solution: 'Chatbot para pedidos via WhatsApp + Integração com sistema de cozinha.',
    results: [
      { metric: '300%', label: 'Aumento em pedidos', icon: TrendingUp },
      { metric: '85%', label: 'Redução em erros', icon: CheckCircle },
      { metric: '2 min', label: 'Tempo médio do pedido', icon: Clock },
      { metric: '4.9/5', label: 'Satisfação dos clientes', icon: Star }
    ],
    testimonial: 'Pedidos pelo WhatsApp revolucionaram nosso delivery. Sem erros, sem demora.',
    client: 'Chef Patricia Lima, Proprietária',
    tags: ['Chatbot', 'Delivery', 'WhatsApp'],
    featured: false
  }
]

const categoryIcons = {
  'rpa': BarChart3,
  'varejo': ShoppingCart,
  'atendimento': Users,
  'ecommerce': Building2
}

export default function CasesPage() {
  const [activeCategory, setActiveCategory] = useState('todos')

  const filteredCases = activeCategory === 'todos' 
    ? cases 
    : cases.filter(case_ => case_.category === activeCategory)

  const featuredCases = cases.filter(case_ => case_.featured)

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <MotionSection className="section-padding bg-gradient-to-br from-brand-bg via-brand-bg-secondary to-brand-bg">
        <div className="container-custom">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Casos de <span className="text-gradient">Sucesso</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
            >
              Histórias reais de empresas que transformaram seus resultados com nossas 
              soluções de automação. ROI comprovado, resultados mensuráveis.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { value: '500+', label: 'Projetos entregues' },
                { value: '300%', label: 'ROI médio' },
                { value: '98%', label: 'Taxa de satisfação' },
                { value: '24h', label: 'Suporte contínuo' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </MotionSection>

      {/* Featured Cases */}
      {featuredCases.length > 0 && (
        <MotionSection className="section-padding bg-brand-bg-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge variant="gradient" className="mb-4">
                Casos em Destaque
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Resultados <span className="text-gradient">Extraordinários</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCases.map((case_, index) => (
                <motion.div
                  key={case_.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="h-full group hover:scale-105 transition-all duration-500 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={case_.image}
                        alt={case_.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-brand/20" />
                      <Badge className="absolute top-4 left-4" variant="glow">
                        {case_.industry}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {case_.title}
                      </h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-brand-accent-2 font-semibold mb-2">Problema:</h4>
                          <p className="text-gray-300 text-sm">{case_.problem}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-green-400 font-semibold mb-2">Solução:</h4>
                          <p className="text-gray-300 text-sm">{case_.solution}</p>
                        </div>

                        {/* Results Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          {case_.results.map((result, idx) => (
                            <div key={idx} className="text-center p-3 rounded-xl bg-white/5">
                              <result.icon className="h-5 w-5 mx-auto mb-2 text-brand-accent-2" />
                              <div className="text-lg font-bold text-white">{result.metric}</div>
                              <div className="text-xs text-gray-400">{result.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Testimonial */}
                        <blockquote className="border-l-2 border-brand-primary pl-4 italic text-gray-300">
                          "{case_.testimonial}"
                          <footer className="text-sm text-gray-400 mt-2">
                            — {case_.client}
                          </footer>
                        </blockquote>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {case_.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </MotionSection>
      )}

      {/* All Cases with Filters */}
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
              Todos os <span className="text-gradient">Cases</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore nosso portfólio completo organizado por categoria
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Tabs defaultValue="todos" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 max-w-2xl mx-auto">
                <TabsTrigger 
                  value="todos" 
                  onClick={() => setActiveCategory('todos')}
                  className="text-sm"
                >
                  Todos
                </TabsTrigger>
                <TabsTrigger 
                  value="rpa" 
                  onClick={() => setActiveCategory('rpa')}
                  className="text-sm"
                >
                  RPA
                </TabsTrigger>
                <TabsTrigger 
                  value="varejo" 
                  onClick={() => setActiveCategory('varejo')}
                  className="text-sm"
                >
                  Varejo
                </TabsTrigger>
                <TabsTrigger 
                  value="atendimento" 
                  onClick={() => setActiveCategory('atendimento')}
                  className="text-sm"
                >
                  Atendimento
                </TabsTrigger>
                <TabsTrigger 
                  value="ecommerce" 
                  onClick={() => setActiveCategory('ecommerce')}
                  className="text-sm"
                >
                  E-commerce
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((case_, index) => (
              <motion.div
                key={case_.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={case_.image}
                      alt={case_.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-brand/20" />
                    <Badge className="absolute top-3 left-3 text-xs">
                      {case_.industry}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {case_.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {case_.problem}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {case_.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="text-center p-2 rounded-lg bg-white/5">
                          <div className="text-lg font-bold text-white">{result.metric}</div>
                          <div className="text-xs text-gray-400">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {case_.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
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
              Seu negócio pode ser o <span className="text-gradient">próximo case</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Agende um diagnóstico gratuito e descubra como podemos transformar 
              seus processos e multiplicar seus resultados.
            </p>
            
            <Button variant="gradient" size="xl" asChild className="shadow-glow-lg">
              <Link href="/contato">
                Solicitar diagnóstico gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </MotionSection>
    </div>
  )
}