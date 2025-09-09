import Link from 'next/link'
import { Zap, Mail, MapPin, Phone, Linkedin, Instagram } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'Sobre', href: '/sobre' },
    { name: 'Cases', href: '/cases' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ],
  services: [
    { name: 'RPA & Automação', href: '/solucoes#rpa' },
    { name: 'Chatbots & IA', href: '/solucoes#chatbots' },
    { name: 'Integrações', href: '/solucoes#integracoes' },
    { name: 'Dashboards', href: '/solucoes#dashboards' },
  ],
  support: [
    { name: 'Central de Ajuda', href: '/ajuda' },
    { name: 'Documentação', href: '/docs' },
    { name: 'Status', href: '/status' },
    { name: 'Privacidade', href: '/privacidade' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-bg-secondary border-t border-white/10">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="p-2 rounded-xl bg-gradient-brand">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">
                  AutomatizeAI
                </span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-sm">
                Automação, IA e integrações para o seu negócio vender mais. 
                Transformamos processos manuais em soluções inteligentes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">Curitiba, PR - Brasil</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm">+55 (41) 99999-9999</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-sm">contato@automatizeai.com.br</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-white/10">
            <div className="flex items-center space-x-4">
              <Link
                href="https://linkedin.com/company/automatizeai"
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/automatizeai"
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AutomatizeAI. Todos os direitos reservados.
            </p>
          </div>

          {/* CNPJ */}
          <div className="text-center pt-4">
            <p className="text-gray-500 text-xs">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}