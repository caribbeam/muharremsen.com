import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validasyon
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tüm alanlar doldurulmalıdır." },
        { status: 400 }
      );
    }

    // Email validasyonu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Geçerli bir e-posta adresi giriniz." },
        { status: 400 }
      );
    }

    // Resend API key kontrolü
    if (!process.env.RESEND_API_KEY) {
      // API key yoksa sadece log yap (development için)
      console.log("📧 İletişim Formu (RESEND_API_KEY yok, mail gönderilmedi):", {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      });
      
      return NextResponse.json(
        {
          success: true,
          message: "Mesajınız alındı. En kısa sürede size dönüş yapacağız.",
        },
        { status: 200 }
      );
    }

    // Mail gönderme
    try {
      await resend.emails.send({
        from: "İletişim Formu <noreply@muharremsen.com>", // Resend'de doğrulanmış domain gerekli
        to: "info@muharremsen.com",
        replyTo: email,
        subject: `İletişim Formu: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00ff88; margin-bottom: 20px;">Yeni İletişim Formu Mesajı</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
              <p><strong>İsim:</strong> ${name}</p>
              <p><strong>E-posta:</strong> ${email}</p>
              <p><strong>Mesaj:</strong></p>
              <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message}</p>
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
              Bu mesaj muharremsen.com web sitesindeki iletişim formundan gönderilmiştir.
            </p>
          </div>
        `,
        text: `
Yeni İletişim Formu Mesajı

İsim: ${name}
E-posta: ${email}

Mesaj:
${message}

---
Bu mesaj muharremsen.com web sitesindeki iletişim formundan gönderilmiştir.
        `,
      });

      console.log("✅ Mail başarıyla gönderildi:", { name, email });
    } catch (emailError: any) {
      console.error("❌ Mail gönderme hatası:", emailError);
      // Mail gönderme hatası olsa bile form gönderilmiş sayılır
    }

    // Başarılı yanıt
    return NextResponse.json(
      {
        success: true,
        message: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("İletişim formu hatası:", error);
    return NextResponse.json(
      { error: "Bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}

