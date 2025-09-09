'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { 
  Mail, Phone, MapPin, Clock, Send, 
  MessageCircle, ArrowRight, CheckCircle,
  Building2, User, Smartphone
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import MotionSection from '@/components/MotionSection'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { getWhatsAppUrl } from '@/lib/utils'

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    value: '+55 (41) 99999-9999',
    link: 'tel:+5541999999999',
    color: 'text-green-400'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Chat direto conosco',
    link: getWhatsAppUrl('5541999999999', 'Olá! Gostaria de saber mais sobre as soluções de automação.'),
    color: 'text-green-400'
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: 'contato@automatizeai.com.br',
    link: 'mailto:contato@automatizeai.com.br',
    color: 'text-blue-400'
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: 'Curitiba, PR - Brasil',
    link: null,
    color: 'text-orange-400'
  }
]

const services = [
  { value: 'rpa', label: 'RPA & Automação' },
  { value: 'chatbot', label: 'Chatbots & IA' },
  { value: 'integracao', label: 'Integrações & APIs' },
  { value: 'dashboard', label: 'Dashboards & Analytics' },
  { value: 'webapp', label: 'Web Apps Customizados' },
  { value: 'consultoria', label: 'Consultoria em Automação' }
]

const budgetRanges = [
  { value: 'até-5k', label: 'Até R$ 5.000' },
  { value: '5k-15k', label: 'R$ 5.000 - R$ 15.000' },
  { value: '15k-30k', label: 'R$ 15.000 - R$ 30.000' },
  { value: '30k+', label: 'Acima de R$ 30.000' },
  { value: 'a-combinar', label: 'A combinar' }
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        toast.success('Mensagem enviada com sucesso! Em breve entraremos em contato.', {
          position: "bottom-right",
          autoClose: 5000,
        })
        reset()
      } else {
        throw new Error(result.message || 'Erro ao enviar mensagem')
      }
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.', {
        position: "bottom-right",
        autoClose: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
              Entre em <span className="text-gradient">Contato</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
            >
              Pronto para transformar seu negócio? Agende um diagnóstico gratuito 
              e descubra como nossa tecnologia pode multiplicar seus resultados.
            </motion.p>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button variant="gradient" size="xl" asChild className="shadow-glow-lg">
                <a href={getWhatsAppUrl('5541999999999', 'Olá! Gostaria de agendar um diagnóstico gratuito.')}>
                  💬 WhatsApp Direto
                </a>
              </Button>
              
              <Button variant="outline" size="xl" asChild className="border-white/20 hover:border-brand-primary">
                <a href="tel:+5541999999999">
                  📞 Ligar Agora
                </a>
              </Button>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-brand/20 border border-brand-primary/30 backdrop-blur-sm"
            >
              <Clock className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-semibold">
                ⚡ Resposta em até 2 horas em horário comercial
              </span>
            </motion.div>
          </div>
        </div>
      </MotionSection>

      {/* Contact Form & Info */}
      <MotionSection className="section-padding bg-brand-bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-3xl text-white mb-4">
                      📋 Solicitar Proposta
                    </CardTitle>
                    <p className="text-gray-300">
                      Preencha o formulário abaixo e nossa equipe entrará em contato 
                      para apresentar a melhor solução para seu negócio.
                    </p>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            <User className="h-4 w-4 inline mr-2" />
                            Nome completo *
                          </label>
                          <Input
                            {...register('name')}
                            placeholder="Seu nome completo"
                            className={errors.name ? 'border-red-500' : ''}
                          />
                          {errors.name && (
                            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            <Mail className="h-4 w-4 inline mr-2" />
                            E-mail *
                          </label>
                          <Input
                            {...register('email')}
                            type="email"
                            placeholder="seu@email.com"
                            className={errors.email ? 'border-red-500' : ''}
                          />
                          {errors.email && (
                            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            <Smartphone className="h-4 w-4 inline mr-2" />
                            Telefone/WhatsApp *
                          </label>
                          <Input
                            {...register('phone')}
                            placeholder="(11) 99999-9999"
                            className={errors.phone ? 'border-red-500' : ''}
                          />
                          {errors.phone && (
                            <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                          )}
                        </div>

                        {/* Company */}
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            <Building2 className="h-4 w-4 inline mr-2" />
                            Empresa *
                          </label>
                          <Input
                            {...register('company')}
                            placeholder="Nome da sua empresa"
                            className={errors.company ? 'border-red-500' : ''}
                          />
                          {errors.company && (
                            <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
                          )}
                        </div>

                        {/* Service */}
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Serviço de interesse *
                          </label>
                          <select
                            {...register('service')}
                            className="flex h-10 w-full rounded-xl border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 transition-all duration-300 hover:border-white/20"
                          >
                            <option value="">Selecione um serviço</option>
                            {services.map((service) => (
                              <option key={service.value} value={service.value} className="bg-brand-bg text-white">
                                {service.label}
                              </option>
                            ))}
                          </select>
                          {errors.service && (
                            <p className="text-red-400 text-sm mt-1">{errors.service.message}</p>
                          )}
                        </div>

                        {/* Budget */}
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Orçamento estimado *
                          </label>
                          <select
                            {...register('budget')}
                            className="flex h-10 w-full rounded-xl border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 transition-all duration-300 hover:border-white/20"
                          >
                            <option value="">Selecione uma faixa</option>
                            {budgetRanges.map((range) => (
                              <option key={range.value} value={range.value} className="bg-brand-bg text-white">
                                {range.label}
                              </option>
                            ))}
                          </select>
                          {errors.budget && (
                            <p className="text-red-400 text-sm mt-1">{errors.budget.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Descreva seu projeto *
                        </label>
                        <Textarea
                          {...register('message')}
                          placeholder="Conte-nos mais sobre seus processos atuais e o que gostaria de automatizar..."
                          className={`min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                        />
                        {errors.message && (
                          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="gradient"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full shadow-glow-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Enviar Solicitação
                            <ArrowRight className="h-5 w-5 ml-2" />
                          </>
                        )}
                      </Button>

                      <p className="text-gray-400 text-sm text-center">
                        Ao enviar, você concorda que podemos entrar em contato via WhatsApp, e-mail ou telefone.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-white/10 ${contact.color}`}>
                          <contact.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white">{contact.title}</h3>
                          {contact.link ? (
                            <a
                              href={contact.link}
                              target={contact.link.startsWith('http') ? '_blank' : '_self'}
                              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                              className="text-gray-300 hover:text-white transition-colors"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-gray-300">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Horário de Atendimento
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Segunda - Sexta</span>
                      <span className="text-white">8h - 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sábado</span>
                      <span className="text-white">8h - 12h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Domingo</span>
                      <span className="text-gray-400">Fechado</span>
                    </div>
                    <div className="pt-3 border-t border-white/10">
                      <Badge variant="glow" className="w-full justify-center">
                        Suporte 24/7 via WhatsApp
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Guarantees */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-white">
                      ✅ Nossas Garantias
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      'Resposta em até 2h',
                      'Diagnóstico 100% gratuito',
                      'Proposta sem compromisso',
                      'Implementação garantida',
                      'Suporte pós-venda'
                    ].map((guarantee, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{guarantee}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* FAQ Section */}
      <MotionSection className="section-padding bg-brand-bg">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ainda tem <span className="text-gradient">dúvidas?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Nossa equipe está pronta para esclarecer qualquer questão sobre nossas soluções.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" size="xl" asChild className="shadow-glow-lg">
                <a href={getWhatsAppUrl('5541999999999', 'Tenho algumas dúvidas sobre as soluções. Podem me ajudar?')}>
                  💬 Tirar dúvidas no WhatsApp
                </a>
              </Button>
              
              <Button variant="outline" size="xl" asChild className="border-white/20 hover:border-brand-primary">
                <a href="mailto:contato@automatizeai.com.br">
                  ✉️ Enviar E-mail
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </MotionSection>
    </div>
  )
}