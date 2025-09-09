'use client'

import { motion } from 'framer-motion'
import { 
  Target, Users, Lightbulb, Award, 
  TrendingUp, Shield, Heart, Zap,
  CheckCircle, ArrowRight
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import MotionSection from '@/components/MotionSection'
import Image from 'next/image'
import Link from 'next/link'

const values = [
  {
    icon: Target,
    title: 'Foco no Resultado',
    description: 'Cada projeto é desenvolvido pensando no ROI e impacto real no seu negócio.',
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description: 'Tecnologia avançada com toque humano. Cuidamos de cada cliente como se fosse único.',
    color: 'from-pink-500 to-red-500'
  },
  {
    icon: Lightbulb,
    title: 'Inovação Constante',
    description: 'Sempre atualizados com as últimas tendências em IA e automação.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Transparência Total',
    description: 'Preços claros, cronogramas definidos, sem surpresas ou taxas ocultas.',
    color: 'from-green-500 to-teal-500'
  }
]

const team = [
  {
    name: 'João Silva',
    role: 'CEO & Fundador',
    bio: 'Especialista em automação com 10+ anos de experiência em transformação digital.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    skills: ['Estratégia', 'Liderança', 'RPA']
  },
  {
    name: 'Maria Santos',
    role: 'CTO',
    bio: 'Desenvolvedora full-stack especializada em IA e integração de sistemas.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5cb?w=300&h=300&fit=crop&crop=face',
    skills: ['IA', 'APIs', 'Desenvolvimento']
  },
  {
    name: 'Carlos Lima',
    role: 'Head de RPA',
    bio: 'Expert em automação robótica de processos e otimização de fluxos empresariais.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
    skills: ['RPA', 'Processos', 'Consultoria']
  },
  {
    name: 'Ana Pereira',
    role: 'UX/UI Designer',
    bio: 'Designer especializada em experiência do usuário para sistemas de automação.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    skills: ['UX/UI', 'Design', 'Usabilidade']
  }
]

const timeline = [
  {
    year: '2020',
    title: 'Fundação',
    description: 'AutomatizeAI é fundada com a missão de democratizar a automação para PMEs brasileiras.'
  },
  {
    year: '2021',
    title: 'Primeiros Clientes',
    description: 'Conquistamos nossos primeiros 50 clientes e desenvolvemos nossa metodologia própria.'
  },
  {
    year: '2022',
    title: 'Expansão',
    description: 'Expandimos para todo o território nacional e lançamos nossa plataforma de IA.'
  },
  {
    year: '2023',
    title: 'Reconhecimento',
    description: 'Eleitos como uma das 100 startups mais promissoras do Brasil pela ABStartups.'
  },
  {
    year: '2024',
    title: 'Crescimento',
    description: 'Mais de 500 clientes ativos e parceria estratégica com grandes players do mercado.'
  }
]

const stats = [
  { number: '500+', label: 'Clientes Ativos' },
  { number: '1.2M+', label: 'Horas Automatizadas' },
  { number: '98%', label: 'Taxa de Satisfação' },
  { number: '300%', label: 'ROI Médio dos Clientes' }
]

export default function AboutPage() {
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
                <Heart className="h-12 w-12 text-white" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Sobre a <span className="text-gradient">AutomatizeAI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
            >
              Somos especialistas em transformar processos manuais em soluções inteligentes. 
              Nossa missão é democratizar a automação para empresas de todos os tamanhos.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </MotionSection>

      {/* Mission & Vision */}
      <MotionSection className="section-padding bg-brand-bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="gradient" className="mb-6">
                Nossa Missão
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transformar <span className="text-gradient">negócios</span> através da automação
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Acreditamos que toda empresa, independente do tamanho, merece ter acesso 
                às melhores tecnologias de automação. Por isso, desenvolvemos soluções 
                acessíveis, rápidas de implementar e com resultados garantidos.
              </p>
              
              <div className="space-y-4">
                {[
                  'Democratizar o acesso à automação',
                  'Entregar ROI comprovado em até 3 meses',
                  'Simplicidade na implementação',
                  'Suporte humano especializado'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="Equipe AutomatizeAI"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-brand/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </MotionSection>

      {/* Values */}
      <MotionSection className="section-padding bg-brand-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nossos <span className="text-gradient">Valores</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e projeto que desenvolvemos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} mb-6`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Team */}
      <MotionSection className="section-padding bg-brand-bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nossa <span className="text-gradient">Equipe</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Especialistas apaixonados por tecnologia e comprometidos com seu sucesso
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <Badge variant="gradient" className="mb-4">
                      {member.role}
                    </Badge>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
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

      {/* Timeline */}
      <MotionSection className="section-padding bg-brand-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nossa <span className="text-gradient">Jornada</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A evolução da AutomatizeAI ao longo dos anos
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-brand" />
              
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="hover:scale-105 transition-transform duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Badge variant="gradient">{event.year}</Badge>
                          <CardTitle className="text-white">{event.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-brand border-4 border-brand-bg" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* CTA */}
      <MotionSection className="section-padding bg-gradient-brand/10">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para <span className="text-gradient">fazer parte</span> dessa história?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Junte-se a mais de 500 empresas que já transformaram seus processos 
              e multiplicaram seus resultados com a AutomatizeAI.
            </p>
            
            <Button variant="gradient" size="xl" asChild className="shadow-glow-lg">
              <Link href="/contato">
                Começar minha transformação
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </MotionSection>
    </div>
  )
}