'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/utils'

export default function CTAWhatsApp() {
  const [isExpanded, setIsExpanded] = useState(false)

  const whatsappNumber = '5541999999999'
  const defaultMessage = 'Olá! Gostaria de automatizar processos na minha empresa. Podem me ajudar?'

  const handleWhatsAppClick = () => {
    const url = getWhatsAppUrl(whatsappNumber, defaultMessage)
    window.open(url, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 max-w-sm"
          >
            <div className="bg-white rounded-2xl shadow-xl p-4 relative">
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-brand rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Fale com nossos especialistas
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Vamos te ajudar a automatizar seus processos e aumentar a eficiência do seu negócio!
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-xl transition-colors"
                  >
                    Iniciar conversa
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </div>
  )
}