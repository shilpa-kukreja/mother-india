// app/api/send-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Mother India Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0d6cc; background: #faf8f6;">
          <div style="text-align: center; border-bottom: 2px solid #b8860b; padding-bottom: 15px; margin-bottom: 20px;">
            <h1 style="color: #1a1a1a; font-weight: 300; letter-spacing: 2px;">
              Mother India <span style="color: #b8860b; font-weight: 700;">✦</span>
            </h1>
            <p style="color: #6b5a4a; font-size: 14px;">New Contact Form Submission</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong style="color: #b8860b;">Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong style="color: #b8860b;">Email:</strong> <a href="mailto:${email}" style="color: #1a1a1a;">${email}</a></p>
            ${phone ? `<p style="margin: 8px 0;"><strong style="color: #b8860b;">Phone:</strong> ${phone}</p>` : ''}
          </div>
          
          <div style="background: white; padding: 15px; border-left: 3px solid #b8860b; margin: 15px 0;">
            <p style="margin: 0; color: #1a1a1a; font-weight: 300; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding-top: 15px; border-top: 1px solid #e0d6cc; font-size: 12px; color: #8a7a6a;">
            <p>This message was sent from the Mother India website contact form.</p>
            <p style="margin-top: 5px;">📍 Karl Johans gate 1, 0154 Oslo, Norway</p>
          </div>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ''}\n\nMessage:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}