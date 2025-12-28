"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    try {
      // FormSubmit kullanarak direkt mail gönder
      const response = await fetch("https://formsubmit.co/ajax/info@muharremsen.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `İletişim Formu: ${formData.name}`,
          _template: "box",
          _captcha: false,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Bir hata oluştu");
      }

      // Başarılı
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Formu resetle
      form.reset();
      
      // 5 saniye sonra mesajı kaldır
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err: any) {
      setError(err.message || "Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="glass rounded-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Bize Ulaşın</h2>
      <p className="text-gray-400 text-sm mb-6">
        Teklif, soru veya önerileriniz için formu doldurun. En kısa sürede size dönüş yapacağız.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6" action="https://formsubmit.co/info@muharremsen.com" method="POST">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-300 mb-2 font-medium"
          >
            Ad Soyad
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-dark-tertiary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent-green transition-colors"
            placeholder="Adınız ve soyadınız"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-300 mb-2 font-medium"
          >
            E-posta
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-dark-tertiary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent-green transition-colors"
            placeholder="email@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-gray-300 mb-2 font-medium"
          >
            Mesajınız
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-dark-tertiary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent-green transition-colors resize-none"
            placeholder="Mesajınızı buraya yazabilirsiniz..."
          />
        </div>
        {error && (
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-red-400 text-sm">
            {error}
          </div>
        )}

        {isSubmitted && (
          <div className="bg-accent-green/20 border border-accent-green/50 rounded-lg p-4 text-accent-green text-sm">
            Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading || isSubmitted}
          className="w-full bg-accent-green text-dark-primary font-semibold px-8 py-3 rounded-lg hover:bg-accent-turquoise hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isLoading ? "Gönderiliyor..." : isSubmitted ? "Mesaj Gönderildi ✓" : "Gönder"}
        </button>
      </form>
    </div>
  );
}

