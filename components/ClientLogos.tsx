'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import MotionSection from './MotionSection'

const clients = [
  {
    name: 'TechCorp',
    logo: 'https://via.placeholder.com/120x60/6D28D9/FFFFFF?text=TechCorp',
    industry: 'Tecnologia'
  },
  {
    name: 'SuperMercado Plus',
    logo: 'https://via.placeholder.com/120x60/EC4899/FFFFFF?text=Super+Plus',
    industry: 'Varejo'
  },
  {
    name: 'Clínica Saúde',
    logo: 'https://via.placeholder.com/120x60/F97316/FFFFFF?text=Clinica',
    industry: 'Saúde'
  },
  {
    name: 'AutoPeças Pro',
    logo: 'https://via.placeholder.com/120x60/1E3A8A/FFFFFF?text=AutoPecas',
    industry: 'Automotivo'
  },
  {
    name: 'EcommerceMax',
    logo: 'https://via.placeholder.com/120x60/6D28D9/FFFFFF?text=EcomMax',
    industry: 'E-commerce'
  },
  {
    name: 'Restaurante Gourmet',
    logo: 'https://via.placeholder.com/120x60/EC4899/FFFFFF?text=Gourmet',
    industry: 'Alimentação'
  }
]

export default function ClientLogos() {
  return (
    <MotionSection className="py-16 bg-brand-bg/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Empresas que confiam em nossas soluções
          </h2>
          <p className="text-gray-400">
            Mais de 500 clientes já automatizaram seus processos conosco
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group"
            >
              <div className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all duration-300 group-hover:scale-105 border border-white/5 hover:border-white/20">
                <div className="relative h-12 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="max-h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="text-center mt-3">
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                    {client.industry}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12 border-t border-white/10"
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-green-500" />
            </div>
            <span className="text-gray-300 font-medium">ISO 27001 Certified</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-blue-500" />
            </div>
            <span className="text-gray-300 font-medium">LGPD Compliance</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-purple-500" />
            </div>
            <span className="text-gray-300 font-medium">Google Partner</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-orange-500" />
            </div>
            <span className="text-gray-300 font-medium">AWS Certified</span>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}