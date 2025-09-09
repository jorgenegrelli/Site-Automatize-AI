import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100, 'Nome muito longo'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos').max(15, 'Telefone muito longo'),
  company: z.string().min(2, 'Nome da empresa deve ter pelo menos 2 caracteres').max(100, 'Nome muito longo'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(1000, 'Mensagem muito longa'),
  budget: z.enum(['até-5k', '5k-15k', '15k-30k', '30k+', 'a-combinar'], {
    required_error: 'Selecione uma faixa de orçamento'
  }),
  service: z.enum(['rpa', 'chatbot', 'integracao', 'dashboard', 'webapp', 'consultoria'], {
    required_error: 'Selecione um serviço'
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const newsletterSchema = z.object({
  email: z.string().email('E-mail inválido'),
})

export type NewsletterData = z.infer<typeof newsletterSchema>