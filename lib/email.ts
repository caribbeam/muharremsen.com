// Email Helper - SMTP ile mail gönderme

import nodemailer from "nodemailer";

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail(options: EmailOptions): Promise<{ success: boolean; error?: string }> {
  const smtpHost = process.env.SMTP_HOST || "mail.muharremsen.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "465");
  const smtpUser = process.env.SMTP_USER || "info@muharremsen.com";
  const smtpPassword = process.env.SMTP_PASSWORD;
  const smtpFrom = process.env.SMTP_FROM || "info@muharremsen.com";

  if (!smtpPassword) {
    console.error("SMTP şifresi bulunamadı (SMTP_PASSWORD)");
    return {
      success: false,
      error: "SMTP servisi yapılandırılmamış",
    };
  }

  try {
    // SMTP transporter oluştur
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: true, // 465 port için SSL/TLS
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      tls: {
        // SSL/TLS ayarları
        rejectUnauthorized: false, // Self-signed sertifika için
      },
    });

    // Mail gönder
    const info = await transporter.sendMail({
      from: `"İletişim Formu" <${smtpFrom}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text || options.html.replace(/<[^>]*>/g, ""), // HTML'den text çıkar
    });

    console.log("✅ Mail başarıyla gönderildi:", info.messageId);
    return {
      success: true,
    };
  } catch (error: any) {
    console.error("❌ Mail gönderme hatası:", error);
    return {
      success: false,
      error: error.message || "Mail gönderilemedi",
    };
  }
}


