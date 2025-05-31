import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'nicolaskiy@gmail.com',
      pass: 'htvz jpax rspa uppj',
    },
  });

  async sendEmail(to: string, subject: string, text: string) {
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc;">
        <h2 style="color: #007BFF;">Olá!</h2>
        <p>${text}</p>
        <p style="margin-top: 30px;">Atenciosamente,<br><strong>Sua Equipe</strong></p>
      </div>
    `;

    const mailOptions = {
      from: 'nicolaskiy@gmail.com',
      to,
      subject,
      text,          // texto simples (opcional)
      html: htmlContent, // conteúdo HTML formatado
    };

    return await this.transporter.sendMail(mailOptions);
  }
}
