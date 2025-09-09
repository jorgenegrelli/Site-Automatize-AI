import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'
import { Resend } from 'resend'
import nodemailer from 'nodemailer'

// Initialize Resend (primary email service)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Nodemailer fallback configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })
}

// Email templates
const generateEmailTemplate = (data: any) => {
  const serviceNames = {
    'rpa': 'RPA & Automação',
    'chatbot': 'Chatbots & IA',
    'integracao': 'Integrações & APIs',
    'dashboard': 'Dashboards & Analytics',
    'webapp': 'Web Apps',
    'consultoria': 'Consultoria'
  }

  const budgetNames = {
    'até-5k': 'Até R$ 5.000',
    '5k-15k': 'R$ 5.000 - R$ 15.000',
    '15k-30k': 'R$ 15.000 - R$ 30.000',
    '30k+': 'Acima de R$ 30.000',
    'a-combinar': 'A combinar'
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Novo Lead - AutomatizeAI</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(90deg, #1E3A8A, #6D28D9, #EC4899, #F97316); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; text-align: center;">🚀 Novo Lead - AutomatizeAI</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #6D28D9; border-bottom: 2px solid #6D28D9; padding-bottom: 10px;">📋 Informações do Cliente</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 30%;">Nome:</td>
              <td style="padding: 8px 0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">E-mail:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #6D28D9;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Telefone:</td>
              <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #6D28D9;">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Empresa:</td>
              <td style="padding: 8px 0;">${data.company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Serviço:</td>
              <td style="padding: 8px 0;"><span style="background: #6D28D9; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">${serviceNames[data.service as keyof typeof serviceNames] || data.service}</span></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Orçamento:</td>
              <td style="padding: 8px 0;"><span style="background: #EC4899; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">${budgetNames[data.budget as keyof typeof budgetNames] || data.budget}</span></td>
            </tr>
          </table>
        </div>

        <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #6D28D9; margin-top: 0;">💬 Mensagem do Cliente:</h3>
          <p style="background: #f8f9fa; padding: 15px; border-left: 4px solid #6D28D9; margin: 0;">${data.message}</p>
        </div>

        <div style="background: #e7f3ff; padding: 15px; border-radius: 8px; text-align: center;">
          <h3 style="color: #1E3A8A; margin: 0 0 10px 0;">📞 Ações Rápidas</h3>
          <a href="tel:${data.phone}" style="display: inline-block; background: #10B981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">📞 Ligar</a>
          <a href="mailto:${data.email}" style="display: inline-block; background: #6D28D9; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">📧 E-mail</a>
          <a href="https://wa.me/55${data.phone.replace(/\D/g, '')}?text=Olá%20${encodeURIComponent(data.name)},%20recebi%20seu%20contato%20pelo%20site%20da%20AutomatizeAI" style="display: inline-block; background: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">💬 WhatsApp</a>
        </div>

        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px;">
          <p>📅 Recebido em: ${new Date().toLocaleString('pt-BR')}</p>
          <p>🤖 Gerado automaticamente pelo sistema AutomatizeAI</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Store lead in database (optional)
async function storeLead(data: any) {
  if (!process.env.DATABASE_URL) {
    console.log('Database not configured, skipping lead storage')
    return null
  }

  try {
    // Here you would use Prisma to store the lead
    // const { PrismaClient } = require('@prisma/client')
    // const prisma = new PrismaClient()
    // return await prisma.lead.create({ data })
    console.log('Lead would be stored:', data)
    return { id: Date.now() } // Mock response
  } catch (error) {
    console.error('Error storing lead:', error)
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body)
    
    // Store lead in database (optional)
    const leadRecord = await storeLead({
      ...validatedData,
      createdAt: new Date(),
      source: 'website'
    })

    // Prepare email content
    const emailTemplate = generateEmailTemplate(validatedData)
    const recipientEmail = process.env.CONTACT_EMAIL || 'contato@automatizeai.com.br'

    // Try sending with Resend first
    let emailSent = false
    let emailError = null

    if (resend) {
      try {
        await resend.emails.send({
          from: process.env.FROM_EMAIL || 'contato@automatizeai.com.br',
          to: [recipientEmail],
          subject: `🚀 Novo Lead: ${validatedData.name} - ${validatedData.company}`,
          html: emailTemplate,
        })
        emailSent = true
        console.log('Email sent successfully via Resend')
      } catch (error) {
        console.error('Resend failed:', error)
        emailError = error
      }
    }

    // Fallback to Nodemailer if Resend fails
    if (!emailSent && process.env.SMTP_HOST) {
      try {
        const transporter = createTransporter()
        await transporter.sendMail({
          from: process.env.FROM_EMAIL || 'contato@automatizeai.com.br',
          to: recipientEmail,
          subject: `🚀 Novo Lead: ${validatedData.name} - ${validatedData.company}`,
          html: emailTemplate,
        })
        emailSent = true
        console.log('Email sent successfully via Nodemailer')
      } catch (error) {
        console.error('Nodemailer failed:', error)
        emailError = error
      }
    }

    // Send auto-reply to user
    if (emailSent) {
      const autoReplyTemplate = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Obrigado pelo contato - AutomatizeAI</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(90deg, #1E3A8A, #6D28D9, #EC4899, #F97316); padding: 20px; border-radius: 10px; margin-bottom: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">⚡ AutomatizeAI</h1>
              <p style="color: white; margin: 10px 0 0 0;">Obrigado pelo seu contato!</p>
            </div>
            
            <div style="padding: 20px;">
              <h2 style="color: #6D28D9;">Olá, ${validatedData.name}! 👋</h2>
              
              <p>Recebemos seu contato e nossa equipe já está analisando sua solicitação. Em breve entraremos em contato para agendar uma conversa sobre como podemos automatizar processos na <strong>${validatedData.company}</strong>.</p>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #6D28D9; margin-top: 0;">📋 Resumo da sua solicitação:</h3>
                <ul style="margin: 10px 0;">
                  <li><strong>Serviço de interesse:</strong> ${serviceNames[validatedData.service as keyof typeof serviceNames] || validatedData.service}</li>
                  <li><strong>Faixa de orçamento:</strong> ${budgetNames[validatedData.budget as keyof typeof budgetNames] || validatedData.budget}</li>
                </ul>
              </div>

              <div style="background: #e7f3ff; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
                <p style="margin: 0 0 15px 0; font-weight: bold; color: #1E3A8A;">🚀 Quer acelerar o processo?</p>
                <a href="https://wa.me/5541999999999?text=Olá!%20Acabei%20de%20preencher%20o%20formulário%20no%20site" style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold;">💬 Falar agora no WhatsApp</a>
              </div>

              <p><strong>⏱️ Tempo de resposta:</strong> Em até 2 horas em horário comercial</p>
              <p><strong>📞 Telefone:</strong> +55 (41) 99999-9999</p>
              <p><strong>📧 E-mail:</strong> contato@automatizeai.com.br</p>
              
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
              
              <p style="color: #666; font-size: 14px; text-align: center;">
                <strong>AutomatizeAI - Automação, IA e integrações para o seu negócio vender mais</strong><br>
                🏢 Curitiba, PR • 🌐 automatizeai.com.br
              </p>
            </div>
          </div>
        </body>
        </html>
      `

      try {
        if (resend) {
          await resend.emails.send({
            from: process.env.FROM_EMAIL || 'contato@automatizeai.com.br',
            to: [validatedData.email],
            subject: '⚡ AutomatizeAI - Recebemos seu contato!',
            html: autoReplyTemplate,
          })
        } else if (process.env.SMTP_HOST) {
          const transporter = createTransporter()
          await transporter.sendMail({
            from: process.env.FROM_EMAIL || 'contato@automatizeai.com.br',
            to: validatedData.email,
            subject: '⚡ AutomatizeAI - Recebemos seu contato!',
            html: autoReplyTemplate,
          })
        }
        console.log('Auto-reply sent successfully')
      } catch (error) {
        console.error('Auto-reply failed:', error)
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Contato enviado com sucesso!',
      leadId: leadRecord?.id,
      emailSent
    })

  } catch (error) {
    console.error('API Error:', error)
    
    if (error instanceof Error) {
      return NextResponse.json({
        success: false,
        message: 'Erro ao processar solicitação',
        error: error.message
      }, { status: 400 })
    }

    return NextResponse.json({
      success: false,
      message: 'Erro interno do servidor'
    }, { status: 500 })
  }
}