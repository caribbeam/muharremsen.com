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

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.CONTACT_EMAIL || user;

    if (!host || !user || !pass) {
      console.error("SMTP ayarları eksik: SMTP_HOST, SMTP_USER, SMTP_PASS/SMTP_PASSWORD");
      return NextResponse.json(
        { error: "E-posta sunucusu yapılandırılmamış. Lütfen site yöneticisi ile iletişime geçin." },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
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

    // Opsiyonel: Site Telekom SMS (0 530 498 95 53)
    const smsNo = (process.env.CONTACT_SMS_NUMBER || process.env.SMS_NOTIFICATION_PHONE)?.replace(/\s/g, "");
    const smsUser = process.env.SITETELEKOM_USERNAME || process.env.SMS_USERNAME;
    const smsPass = process.env.SITETELEKOM_PASSWORD || process.env.SMS_PASSWORD;
    const smsSender = process.env.SITETELEKOM_SENDER || "SITETELEKOM";
    if (smsNo && smsUser && smsPass) {
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
        if (!smsRes.ok) console.error("Site Telekom SMS yanıt hatası:", await smsRes.text());
      } catch (smsErr) {
        console.error("Site Telekom SMS gönderim hatası:", smsErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form send error:", err);
    return NextResponse.json(
      { error: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin veya doğrudan e-posta ile yazın." },
      { status: 500 }
    );
  }
}
