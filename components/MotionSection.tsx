'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function MotionSection({ 
  children, 
  className = '',
  delay = 0 
}: MotionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}