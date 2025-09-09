'use client'

import { motion } from 'framer-motion'
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import MotionSection from './MotionSection'

const faqs = [
  {
    question: 'Quanto tempo leva para implementar uma automação?',
    answer: 'O tempo varia conforme a complexidade, mas a maioria dos projetos fica pronto entre 7-15 dias úteis. Começamos com um diagnóstico gratuito para definir o cronograma exato do seu projeto.'
  },
  {
    question: 'Qual é o investimento necessário para automatizar meus processos?',
    answer: 'Os valores variam conforme o escopo, mas nossos projetos começam a partir de R$ 2.000. Oferecemos planos mensais sem compromisso e parcelamento em até 12x. O ROI médio é atingido em 3-6 meses.'
  },
  {
    question: 'Vocês oferecem suporte após a implementação?',
    answer: 'Sim! Oferecemos suporte técnico 24/7, atualizações regulares e monitoramento contínuo. Todos os planos incluem pelo menos 6 meses de suporte integral sem custo adicional.'
  },
  {
    question: 'Minha empresa precisa ter conhecimento técnico para usar as soluções?',
    answer: 'Não! Nossas soluções são projetadas para ser simples de usar. Oferecemos treinamento completo para sua equipe e interfaces intuitivas que qualquer pessoa pode operar.'
  },
  {
    question: 'Como funciona a integração com meus sistemas atuais?',
    answer: 'Fazemos integração com ERPs, PDVs, planilhas, WhatsApp Business, redes sociais e praticamente qualquer sistema. Nossa equipe cuida de toda a configuração técnica.'
  },
  {
    question: 'Vocês trabalham com empresas de qualquer tamanho?',
    answer: 'Sim! Atendemos desde pequenos negócios até grandes empresas. Temos soluções escaláveis que crescem junto com seu negócio, sempre respeitando seu orçamento.'
  },
  {
    question: 'Os dados da minha empresa ficam seguros?',
    answer: 'Absolutamente! Seguimos rigorosamente a LGPD, temos certificação ISO 27001 e usamos criptografia de ponta. Seus dados nunca são compartilhados e ficam sempre sob seu controle.'
  },
  {
    question: 'Posso cancelar o serviço a qualquer momento?',
    answer: 'Sim, não temos fidelidade. Você pode cancelar quando quiser. Mas nossa taxa de retenção de 98% mostra que nossos clientes ficam muito satisfeitos com os resultados.'
  },
  {
    question: 'Qual é a diferença entre RPA e chatbot?',
    answer: 'RPA automatiza tarefas internas (processar dados, gerar relatórios), enquanto chatbots automatizam o atendimento ao cliente. Ambos podem trabalhar juntos para máxima eficiência.'
  },
  {
    question: 'Como posso medir o retorno do investimento?',
    answer: 'Fornecemos dashboards com métricas claras: tempo economizado, aumento nas vendas, redução de erros, etc. A maioria dos clientes vê ROI positivo já no primeiro mês.'
  }
]

export default function FAQ() {
  return (
    <MotionSection className="section-padding bg-gradient-to-b from-brand-bg-secondary to-brand-bg">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4">
            Dúvidas Frequentes
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ainda tem <span className="text-gradient">dúvidas?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Esclarecemos as principais questões sobre nossas soluções de automação. 
            Não encontrou sua pergunta? Entre em contato conosco!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-white font-semibold text-lg pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 pt-12 border-t border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Não encontrou sua resposta?
          </h3>
          <p className="text-gray-300 mb-8">
            Nossa equipe está pronta para esclarecer todas as suas dúvidas e apresentar a melhor solução para seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5541999999999?text=Tenho%20dúvidas%20sobre%20as%20soluções%20de%20automação"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              💬 Falar no WhatsApp
            </a>
            <a
              href="mailto:contato@automatizeai.com.br"
              className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white font-semibold transition-all duration-300 hover:bg-white/5"
            >
              ✉️ Enviar E-mail
            </a>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}