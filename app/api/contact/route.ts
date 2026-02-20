import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Ad, e-posta ve mesaj zorunludur." },
        { status: 400 }
      );
    }

    const smsNo = (process.env.CONTACT_SMS_NUMBER || process.env.SMS_NOTIFICATION_PHONE)?.replace(/\s/g, "");
    const smsUser = process.env.SITETELEKOM_USERNAME || process.env.SMS_USERNAME;
    const smsPass = process.env.SITETELEKOM_PASSWORD || process.env.SMS_PASSWORD;
    const smsSender = process.env.SITETELEKOM_SENDER || "SITETELEKOM";
    const hasSms = !!(smsNo && smsUser && smsPass);

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
    const hasSmtp = !!(host && user && pass);

    if (!hasSms && !hasSmtp) {
      return NextResponse.json(
        { error: "E-posta veya SMS yapılandırılmamış. Lütfen site yöneticisi ile iletişime geçin." },
        { status: 503 }
      );
    }

    // Önce SMS gönder — mail gelmese bile mesaj (0 530 498 95 53) gelsin
    if (hasSms) {
      const smsText = `muharremsen.com iletisim: ${name} - ${email}. ${message.slice(0, 80)}${message.length > 80 ? "..." : ""}`;
      const basicAuth = Buffer.from(`${smsUser}:${smsPass}`).toString("base64");
      try {
        const smsRes = await fetch("https://smslogin.nac.com.tr:9588/sms/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${basicAuth}`,
          },
          body: JSON.stringify({
            type: 1,
            sendingType: 0,
            title: "smsapi",
            content: smsText,
            number: smsNo,
            encoding: 0,
            commercial: false,
            sender: smsSender,
          }),
        });
        const smsBody = await smsRes.text();
        if (!smsRes.ok) console.error("Site Telekom SMS yanıt hatası:", smsRes.status, smsBody);
      } catch (smsErr) {
        console.error("Site Telekom SMS gönderim hatası:", smsErr);
      }
    }

    // Sonra e-posta dene; zaman aşımı olsa bile isteği başarılı say (SMS zaten gitti)
    if (hasSmtp) {
      const port = Number(process.env.SMTP_PORT) || 465;
      const toEmail = process.env.CONTACT_TO_EMAIL || process.env.CONTACT_EMAIL || user;
      try {
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: { user, pass },
          tls: { rejectUnauthorized: false },
          connectionTimeout: 10000,
          greetingTimeout: 5000,
        });
        await transporter.sendMail({
          from: `"muharremsen İletişim" <${user}>`,
          to: toEmail,
          replyTo: email,
          subject: `İletişim formu: ${name}`,
          text: `Gönderen: ${name} (${email})\n\nMesaj:\n${message}`,
          html: `
        <p><strong>Gönderen:</strong> ${name}</p>
        <p><strong>E-posta:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
        });
      } catch (mailErr) {
        console.error("E-posta gönderim hatası (SMS gitti):", mailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Contact form send error:", message, err);
    const isTimeout =
      message.includes("timeout") || message.includes("ETIMEDOUT") || message.includes("ECONNREFUSED");
    return NextResponse.json(
      {
        error: isTimeout
          ? "E-posta sunucusuna bağlanılamadı (zaman aşımı). mail.muharremsen.com için firewall’da 465 portunu dışarı açın veya sunucuyu kontrol edin."
          : "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin veya doğrudan e-posta ile yazın.",
      },
      { status: 500 }
    );
  }
}
