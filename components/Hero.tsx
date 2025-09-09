'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, TrendingUp, Users, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  const stats = [
    { icon: TrendingUp, value: '200%', label: 'Aumento médio em conversões' },
    { icon: Clock, value: '15h', label: 'Economizadas por semana' },
    { icon: Users, value: '500+', label: 'Clientes satisfeitos' },
    { icon: Zap, value: '98%', label: 'Taxa de sucesso' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-bg-secondary to-brand-bg" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent-2/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-brand opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="p-4 rounded-2xl bg-gradient-brand shadow-glow-lg animate-float">
              <Zap className="h-12 w-12 text-white" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Automatize tarefas repetitivas e{' '}
            <span className="text-gradient animate-gradient-x">
              escale seu atendimento
            </span>{' '}
            com IA
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            RPA, chatbots e integrações que economizam horas por semana e aumentam sua taxa de conversão
          </motion.p>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-brand/20 border border-brand-primary/30 backdrop-blur-sm"
          >
            <span className="text-white font-semibold">
              Automação, IA e integrações para o seu negócio vender mais
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="gradient"
              size="xl"
              asChild
              className="group shadow-glow-lg"
            >
              <Link href="https://wa.me/5541999999999?text=Quero%20automatizar%20meu%20processo">
                Falar no WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="xl"
              asChild
              className="group border-white/20 hover:border-brand-primary hover:bg-brand-primary/10"
            >
              <Link href="/contato">
                Pedir Proposta
                <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand/20 group-hover:bg-gradient-brand/40 transition-all duration-300 mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Veja nossos serviços</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-brand rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}