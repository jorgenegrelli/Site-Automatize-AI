# 🚀 AutomatizeAI - Website Institucional

Site institucional completo e funcional para a AutomatizeAI — Automação & Soluções Digitais. Desenvolvido com foco em performance, conversão de leads e experiência do usuário.

## 🎯 Características Principais

- ✅ **Next.js 14** com App Router + TypeScript
- ✅ **Design System** com Tailwind CSS e gradientes personalizados
- ✅ **Componentes shadcn/ui** para interface consistente
- ✅ **Animações suaves** com Framer Motion
- ✅ **Formulário de contato** funcional com validação
- ✅ **Sistema de e-mail** (Resend/Nodemailer)
- ✅ **Banco de dados** opcional com Prisma + SQLite
- ✅ **WhatsApp Integration** para conversão de leads
- ✅ **SEO otimizado** com meta tags e schema.org
- ✅ **Responsivo** para todos dispositivos
- ✅ **Performance** otimizada (meta Lighthouse ≥95)

## 🌟 Páginas Implementadas

### 📄 Páginas Principais
- **Home** - Hero, destaques de valor, clientes, como funciona, depoimentos, FAQ
- **Soluções** - Detalhes de serviços (RPA, Chatbots, Integrações, Dashboards)
- **Cases** - Portfolio com filtros por categoria e métricas de resultado
- **Planos** - Tabela comparativa de preços (Starter/Business/Enterprise)
- **Sobre** - Manifesto, equipe, valores, timeline da empresa
- **Contato** - Formulário completo + integração WhatsApp
- **404** - Página de erro estilizada

### ⚙️ Funcionalidades
- Sistema de leads com envio de e-mail automático
- Integração WhatsApp Business
- Formulários com validação (react-hook-form + Zod)
- Toasts para feedback do usuário
- Animações e micro-interações
- CTA flutuante do WhatsApp
- SEO otimizado

## 🛠️ Stack Tecnológica

### Frontend
- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Biblioteca de componentes
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones
- **React Hook Form + Zod** - Formulários e validação

### Backend & Integrações
- **Next.js API Routes** - Backend/API
- **Resend** - Serviço de e-mail (principal)
- **Nodemailer** - Backup para envio de e-mail
- **Prisma** - ORM para banco de dados
- **SQLite** - Banco de dados (desenvolvimento)
- **WhatsApp Business API** - Integração de mensagens

### Ferramentas & Analytics
- **Vercel Analytics** - Analytics de performance
- **Next SEO** - Otimização de SEO
- **React Toastify** - Notificações
- **ESLint** - Linting de código

## 🚀 Como Rodar Localmente

### 1. Pré-requisitos
- Node.js 18+ 
- npm ou yarn ou pnpm

### 2. Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd automatizeai-website

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configuração das Variáveis de Ambiente

Copie o arquivo de exemplo e configure as variáveis:

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local`:

```env
# Database (Opcional - para armazenamento de leads)
DATABASE_URL="file:./dev.db"

# Email (Escolha uma das opções)
# Opção 1: Resend (Recomendado)
RESEND_API_KEY="re_xxxxxxxxxx"

# Opção 2: SMTP (Fallback)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="seu@email.com"
SMTP_PASSWORD="sua_senha_app"

# Configurações de E-mail
FROM_EMAIL="contato@automatizeai.com.br"
CONTACT_EMAIL="contato@automatizeai.com.br"

# WhatsApp
WHATSAPP_NUMBER="5541996534730"

# Site
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 4. Configuração do Banco de Dados (Opcional)

Se quiser armazenar leads no banco:

```bash
# Gerar cliente Prisma
npx prisma generate

# Criar banco de dados
npx prisma db push

# (Opcional) Visualizar dados
npx prisma studio
```

### 5. Executar o Projeto

```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build
npm run start

# Verificar tipos
npm run typecheck

# Lint
npm run lint
```

O site estará disponível em `http://localhost:3000`

## 📧 Configuração de E-mail

### Opção 1: Resend (Recomendado)

1. Crie uma conta em [resend.com](https://resend.com)
2. Gere uma API key
3. Configure `RESEND_API_KEY` no `.env.local`
4. Verifique seu domínio no Resend

### Opção 2: Gmail SMTP (Fallback)

1. Ative a verificação em 2 etapas na sua conta Google
2. Gere uma "Senha de App" específica
3. Configure as variáveis SMTP no `.env.local`

## 📱 WhatsApp Integration

Para configurar a integração com WhatsApp:

1. Configure `WHATSAPP_NUMBER` com seu número no formato: `55DDD9XXXXXXXX`
2. Os links automáticos serão gerados com mensagens pré-definidas
3. Personalize as mensagens nos componentes conforme necessário

## 🌐 Deploy na Vercel

### 1. Deploy Automático

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/automatizeai-website)

### 2. Deploy Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configurar variáveis de ambiente na dashboard da Vercel
# Adicionar domínio personalizado (opcional)
```

### 3. Variáveis de Ambiente na Vercel

Configure as mesmas variáveis do `.env.local` na dashboard da Vercel:
- Settings → Environment Variables
- Adicione todas as variáveis necessárias
- Redeploy após configurar

## 🎨 Personalização

### Cores e Design System

Edite `tailwind.config.ts` para personalizar:
- Cores da marca
- Gradientes
- Espaçamentos
- Breakpoints

### Conteúdo

- **Textos**: Edite diretamente nos componentes
- **Imagens**: Substitua as URLs de placeholder
- **Dados de contato**: Configure em `lib/constants.ts`
- **Serviços**: Modifique arrays de dados nas páginas

### SEO

Configure em `lib/seo.ts`:
- Meta tags padrão
- Open Graph
- Schema.org markup
- Sitemap (gerado automaticamente)

## 📊 Performance & SEO

O site foi otimizado para:
- **Lighthouse Score ≥95** em todas as métricas
- **Core Web Vitals** otimizadas
- **SEO** completo com meta tags e schema
- **Acessibilidade** AA+ compliance
- **Responsividade** total
- **Carregamento rápido** com Next.js optimizations

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # ESLint
npm run typecheck    # Verificação TypeScript
npm run db:generate  # Gerar cliente Prisma
npm run db:push      # Aplicar schema no DB
npm run db:studio    # Interface visual do DB
```

## 📝 Estrutura de Arquivos

```
automatizeai-website/
├── app/                      # Next.js 14 App Router
│   ├── (marketing)/          # Layout para páginas de marketing
│   │   ├── page.tsx         # Home page
│   │   ├── solucoes/        # Página de soluções
│   │   ├── cases/           # Portfolio/cases
│   │   ├── planos/          # Preços e planos
│   │   ├── sobre/           # Sobre a empresa
│   │   └── contato/         # Formulário de contato
│   ├── api/                 # API Routes
│   │   └── lead/            # Endpoint para leads
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout raiz
│   └── not-found.tsx        # Página 404
├── components/              # Componentes React
│   ├── ui/                  # Componentes shadcn/ui
│   ├── Hero.tsx             # Seção hero
│   ├── Navbar.tsx           # Navegação
│   ├── Footer.tsx           # Rodapé
│   └── ...                  # Outros componentes
├── lib/                     # Utilitários e configurações
│   ├── utils.ts             # Funções utilitárias
│   ├── validations.ts       # Esquemas Zod
│   └── seo.ts              # Configurações SEO
├── prisma/                  # Banco de dados
│   └── schema.prisma        # Schema do banco
├── public/                  # Arquivos estáticos
└── ...                     # Arquivos de configuração
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Se precisar de ajuda:

1. **Issues**: Abra uma issue no GitHub
2. **Documentação**: Consulte a documentação do Next.js e Tailwind
3. **Comunidade**: Discord/Slack da comunidade

## 🚀 Próximos Passos

Funcionalidades que podem ser adicionadas:

- [ ] **Blog System** com MDX
- [ ] **Dashboard Admin** para gerenciar leads
- [ ] **A/B Testing** para otimização de conversão
- [ ] **Multi-idioma** (i18n)
- [ ] **PWA** (Progressive Web App)
- [ ] **Chat ao vivo** integrado
- [ ] **Sistema de agendamento** online
- [ ] **Integração com CRM** (HubSpot, Pipedrive)

---

**Desenvolvido com ❤️ para AutomatizeAI**

*Automação, IA e integrações para o seu negócio vender mais.*