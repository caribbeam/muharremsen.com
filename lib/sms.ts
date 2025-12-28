// SMS API Helper - Site Telekom SMS Servisi

interface SMSRequest {
  type: number;
  sendingType: number;
  title: string;
  content: string;
  number: string;
  encoding: number;
  commercial: boolean;
  sender: string;
}

interface SMSResponse {
  success: boolean;
  message?: string;
  pkgID?: number;
  error?: string;
}

export async function sendSMS(
  phoneNumber: string,
  message: string
): Promise<SMSResponse> {
  const username = process.env.SMS_USERNAME;
  const password = process.env.SMS_PASSWORD;
  const sender = process.env.SMS_SENDER || "SITETELEKOM";

  if (!username || !password) {
    console.error("SMS API: Username veya password bulunamadı");
    return {
      success: false,
      error: "SMS servisi yapılandırılmamış",
    };
  }

  // Telefon numarasını formatla (90 ile başlamalı, başında + varsa kaldır)
  let formattedNumber = phoneNumber.replace(/\s+/g, "").replace(/^\+/, "");
  if (!formattedNumber.startsWith("90")) {
    formattedNumber = "90" + formattedNumber;
  }

  const smsData: SMSRequest = {
    type: 1,
    sendingType: 0,
    title: "smsapi",
    content: message,
    number: formattedNumber,
    encoding: 0,
    commercial: false,
    sender: sender,
  };

  try {
    const response = await fetch("https://smslogin.nac.com.tr:9588/sms/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`,
      },
      body: JSON.stringify(smsData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("SMS API Error:", data);
      return {
        success: false,
        error: data.message || "SMS gönderilemedi",
      };
    }

    console.log("✅ SMS başarıyla gönderildi:", data);
    return {
      success: true,
      message: "SMS gönderildi",
      pkgID: data.pkgID,
    };
  } catch (error: any) {
    console.error("❌ SMS gönderme hatası:", error);
    return {
      success: false,
      error: error.message || "SMS gönderilemedi",
    };
  }
}

