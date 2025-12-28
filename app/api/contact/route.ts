import { NextRequest, NextResponse } from "next/server";
import { sendSMS } from "@/lib/sms";
import { sendEmail } from "@/lib/email";

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

    // SMTP ile mail gönder
    let mailSuccess = false;
    try {
      console.log("📧 Mail gönderme başlatılıyor (SMTP)...");
      
      const mailTo = process.env.CONTACT_EMAIL || "info@muharremsen.com";
      const mailSubject = `İletişim Formu: ${name}`;
      const mailHtml = `
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
      `;

      const mailResult = await sendEmail({
        to: mailTo,
        subject: mailSubject,
        html: mailHtml,
      });

      if (!mailResult.success) {
        console.error("❌ Mail gönderme hatası:", mailResult.error);
        // Mail hatası olsa bile devam et, SMS gönder
      } else {
        console.log("✅ Mail başarıyla gönderildi");
        mailSuccess = true;
      }
    } catch (mailError: any) {
      console.error("❌ Mail gönderme exception:", mailError.message);
      // Mail hatası olsa bile devam et
    }

    // SMS gönder (mail başarılı olsun olmasın)
    const smsPhoneNumber = process.env.SMS_NOTIFICATION_PHONE;
    const smsUsername = process.env.SMS_USERNAME;
    const smsPassword = process.env.SMS_PASSWORD;
    
    console.log("📱 SMS Environment Variables:", {
      phone: smsPhoneNumber ? "✅ Var" : "❌ Yok",
      username: smsUsername ? "✅ Var" : "❌ Yok",
      password: smsPassword ? "✅ Var" : "❌ Yok",
    });

    if (smsPhoneNumber) {
      const smsMessage = `Yeni iletişim formu mesajı:\nİsim: ${name}\nE-posta: ${email}\nMesaj: ${message.substring(0, 100)}${message.length > 100 ? "..." : ""}`;
      
      console.log("📱 SMS gönderme başlatılıyor...", {
        phone: smsPhoneNumber,
        messageLength: smsMessage.length,
      });
      
      const smsResult = await sendSMS(smsPhoneNumber, smsMessage);
      
      console.log("📱 SMS Sonuç:", smsResult);
      
      if (!smsResult.success) {
        console.error("❌ SMS gönderme hatası:", smsResult.error);
        // SMS hatası olsa bile form başarılı sayılır
      } else {
        console.log("✅ SMS başarıyla gönderildi");
      }
    } else {
      console.warn("⚠️ SMS bildirim telefon numarası ayarlanmamış (SMS_NOTIFICATION_PHONE)");
    }

    // Başarılı yanıt (log ile birlikte)
    console.log("✅ İletişim formu işlemi tamamlandı", {
      mailSuccess,
      smsSent: !!smsPhoneNumber,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
        debug: {
          mailSuccess,
          smsSent: !!smsPhoneNumber,
        },
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

