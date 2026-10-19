import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const recipient = 'info@localvillageminers.com';
    const secondaryRecipient = 'hotmail.villagelocalminers@gmail.com';

    // Create Hostinger authenticated SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@localvillageminers.com',
        pass: '@London2026',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailSubject = subject || 'New Website Product Inquiry';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body style="font-family: Arial, sans-serif; color: #222; line-height: 1.6; background-color: #f7f7f7; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="border-bottom: 2px solid #d97706; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #d97706; margin: 0; font-size: 22px;">New Website Trade Inquiry</h2>
            <p style="color: #6b7280; font-size: 13px; margin: 4px 0 0;">Direct from localvillageminers.com contact form</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; width: 140px; color: #6b7280; font-weight: bold;">Sender Name:</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Sender Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #d97706; text-decoration: none; font-weight: 600;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0; color: #111827;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Subject / Interest:</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${mailSubject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Date & Time:</td>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">${new Date().toISOString()}</td>
            </tr>
          </table>
          
          <div style="margin-top: 15px; margin-bottom: 25px;">
            <h3 style="color: #374151; font-size: 15px; margin-bottom: 8px;">Message Content:</h3>
            <div style="background: #fffbeb; padding: 16px; border-left: 4px solid #d97706; border-radius: 4px; color: #1f2937; white-space: pre-line; font-size: 14px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 25px 0 15px;">
          <p style="font-size: 12px; color: #9ca3af; text-align: center; margin: 0;">
            Village Local Miners - Export & Supply of Fine Minerals (Gold & Diamonds)<br>
            <a href="https://localvillageminers.com" style="color: #d97706;">www.localvillageminers.com</a>
          </p>
        </div>
      </body>
      </html>
    `;

    // Send email via Hostinger SMTP
    const info = await transporter.sendMail({
      from: '"Village Local Miners" <info@localvillageminers.com>',
      to: recipient,
      cc: secondaryRecipient,
      replyTo: `"${name}" <${email}>`,
      subject: `Website Inquiry: ${mailSubject}`,
      html: htmlContent,
    });

    console.log('[Hostinger SMTP Success]', info.messageId);

    return NextResponse.json({
      success: true,
      message: `Your inquiry has been successfully sent to ${recipient}. Our team will reply shortly.`,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('Contact Form SMTP Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send inquiry via SMTP.' },
      { status: 500 }
    );
  }
}
