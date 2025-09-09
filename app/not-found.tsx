'use client'

import { motion } from 'framer-motion'
import { Home, ArrowLeft, MessageCircle, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-bg via-brand-bg-secondary to-brand-bg flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent-2/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="flex justify-center mb-8">
            <div className="p-6 rounded-2xl bg-gradient-brand/20 border border-brand-primary/30 backdrop-blur-sm">
              <Zap className="h-16 w-16 text-white animate-bounce" />
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-8xl md:text-9xl font-bold mb-4"
          >
            <span className="text-gradient animate-gradient-x">404</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ops! Página não encontrada
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-300 mb-12 leading-relaxed"
          >
            Parece que a página que você está procurando foi movida, removida ou nunca existiu. 
            Mas não se preocupe, temos muitas outras páginas incríveis para você explorar!
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              variant="gradient"
              size="xl"
              asChild
              className="shadow-glow-lg group"
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Voltar ao início
              </Link>
            </Button>

            <Button
              variant="outline"
              size="xl"
              asChild
              className="border-white/20 hover:border-brand-primary hover:bg-brand-primary/10 group"
            >
              <Link href="javascript:history.back()">
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                Página anterior
              </Link>
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {[
              { name: 'Soluções', href: '/solucoes' },
              { name: 'Cases', href: '/cases' },
              { name: 'Planos', href: '/planos' },
              { name: 'Contato', href: '/contato' }
            ].map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 text-white hover:text-brand-accent-2 group"
              >
                <span className="group-hover:translate-x-1 transition-transform inline-block">
                  {link.name}
                </span>
              </Link>
            ))}
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Precisa de ajuda?
            </h3>
            <p className="text-gray-300 mb-6">
              Nossa equipe está sempre pronta para ajudar você a encontrar o que precisa.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="gradient"
                asChild
                className="group"
              >
                <a href="https://wa.me/5541999999999?text=Olá!%20Não%20consegui%20encontrar%20uma%20página%20no%20site%20e%20preciso%20de%20ajuda">
                  <MessageCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Falar no WhatsApp
                </a>
              </Button>
              
              <Button
                variant="ghost"
                asChild
                className="text-gray-300 hover:text-white"
              >
                <a href="mailto:contato@automatizeai.com.br">
                  Enviar e-mail
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Floating Animation */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-20 h-20 opacity-20"
          >
            <div className="w-full h-full bg-gradient-brand rounded-full blur-xl" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-0 w-16 h-16 opacity-20"
          >
            <div className="w-full h-full bg-gradient-brand rounded-full blur-xl" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}