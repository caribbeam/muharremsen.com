"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy submit handler - backend bağlantısı yok
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
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
      <form onSubmit={handleSubmit} className="space-y-6">
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
        <button
          type="submit"
          className="w-full bg-accent-green text-dark-primary font-semibold px-8 py-3 rounded-lg hover:bg-accent-turquoise hover:scale-105 transition-all duration-300"
        >
          {isSubmitted ? "Mesaj Gönderildi ✓" : "Gönder"}
        </button>
      </form>
    </div>
  );
}

