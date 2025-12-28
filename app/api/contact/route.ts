import { NextRequest, NextResponse } from "next/server";
import { sendSMS } from "@/lib/sms";

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

    // FormSubmit ile mail gönder
    let mailSuccess = false;
    try {
      console.log("📧 Mail gönderme başlatılıyor...");
      const mailResponse = await fetch("https://formsubmit.co/ajax/info@muharremsen.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `İletişim Formu: ${name}`,
          _template: "box",
          _captcha: false,
        }),
      });

      const mailData = await mailResponse.json();
      console.log("📧 Mail API Response:", {
        status: mailResponse.status,
        ok: mailResponse.ok,
        data: mailData,
      });

      if (!mailResponse.ok || !mailData.success) {
        console.error("❌ Mail gönderme hatası:", mailData);
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

