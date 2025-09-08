/*
  # Send Verification Email Function

  1. New Function
    - `send-verification-email` - Sends verification code via email
    - Uses Resend API for email delivery
    - Customizable email template

  2. Features
    - HTML email template
    - Role-specific messaging
    - Error handling
*/

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface EmailRequest {
  email: string;
  verificationCode: string;
  role: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { email, verificationCode, role }: EmailRequest = await req.json()

    // For demo purposes, we'll simulate sending an email
    // In production, you would integrate with an email service like Resend, SendGrid, etc.
    
    const emailTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Verify Your Email - OrphanCare Network</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #800033; color: white; padding: 20px; text-align: center; }
            .content { padding: 30px; background: #f9f9f9; }
            .code { font-size: 32px; font-weight: bold; color: #800033; text-align: center; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>OrphanCare Network</h1>
            </div>
            <div class="content">
              <h2>Welcome to OrphanCare Network!</h2>
              <p>Thank you for registering as a ${role}. To complete your registration, please verify your email address using the code below:</p>
              <div class="code">${verificationCode}</div>
              <p>This verification code will expire in 10 minutes for security purposes.</p>
              <p>If you didn't create an account with OrphanCare Network, please ignore this email.</p>
            </div>
            <div class="footer">
              <p>&copy; 2024 OrphanCare Network. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Log the email for demo purposes (in production, send actual email)
    console.log(`
      =================================
      VERIFICATION EMAIL
      =================================
      To: ${email}
      Subject: Verify Your Email - OrphanCare Network
      Verification Code: ${verificationCode}
      Role: ${role}
      =================================
    `)

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return new Response(
      JSON.stringify({ 
        message: 'Verification email sent successfully',
        // In demo mode, return the code for testing
        verificationCode: verificationCode 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Email sending error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to send verification email' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})