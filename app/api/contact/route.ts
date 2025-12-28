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
    try {
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

      if (!mailResponse.ok || !mailData.success) {
        console.error("Mail gönderme hatası:", mailData);
        // Mail hatası olsa bile devam et, SMS gönder
      } else {
        console.log("✅ Mail başarıyla gönderildi");
      }
    } catch (mailError: any) {
      console.error("Mail gönderme hatası:", mailError);
      // Mail hatası olsa bile devam et
    }

    // SMS gönder (mail başarılı olsun olmasın)
    const smsPhoneNumber = process.env.SMS_NOTIFICATION_PHONE;
    if (smsPhoneNumber) {
      const smsMessage = `Yeni iletişim formu mesajı:\nİsim: ${name}\nE-posta: ${email}\nMesaj: ${message.substring(0, 100)}${message.length > 100 ? "..." : ""}`;
      
      const smsResult = await sendSMS(smsPhoneNumber, smsMessage);
      
      if (!smsResult.success) {
        console.error("SMS gönderme hatası:", smsResult.error);
        // SMS hatası olsa bile form başarılı sayılır
      }
    } else {
      console.warn("SMS bildirim telefon numarası ayarlanmamış (SMS_NOTIFICATION_PHONE)");
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

