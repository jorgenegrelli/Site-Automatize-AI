'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Soluções', href: '/solucoes' },
  { name: 'Cases', href: '/cases' },
  { name: 'Planos', href: '/planos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-brand-bg/80 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-xl bg-gradient-brand group-hover:shadow-glow transition-all duration-300">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              AutomatizeAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-all duration-300 relative',
                    isActive
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-brand"
                      initial={false}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="gradient"
              size="sm"
              asChild
              className="animate-glow"
            >
              <Link href="/contato">
                Pedir Proposta
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block py-2 text-base font-medium transition-colors',
                      isActive
                        ? 'text-white border-l-2 border-brand-primary pl-4'
                        : 'text-gray-300 hover:text-white pl-4'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="pt-4">
                <Button
                  variant="gradient"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <Link href="/contato" onClick={() => setIsMobileMenuOpen(false)}>
                    Pedir Proposta
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}