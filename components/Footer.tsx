import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-primary border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-accent-green mb-4">
              muharremsen
            </h3>
            <p className="text-gray-400 text-sm">
              Yapay zeka destekli yazılımlar, proforma uygulamalar, helpdesk sistemleri, 
              LMS, envanter yönetimi, QDMS, domain server, Active Directory, imaj yönetimi, 
              FreePBX/Asterisk kurulumları ve ISO 27001 BGYS desteği konularında uzman.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hizmetler"
                  className="text-gray-400 hover:text-accent-green transition-colors text-sm"
                >
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-gray-400 hover:text-accent-green transition-colors text-sm"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-accent-green transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-gray-400 hover:text-accent-green transition-colors text-sm"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <span className="text-accent-green">Email:</span>{" "}
                info@muharremsen.com
              </li>
              <li>
                <span className="text-accent-green">Telefon:</span>{" "}
                <a
                  href="tel:+905304989553"
                  className="hover:text-accent-green transition-colors"
                >
                  0 530 498 95 53
                </a>
              </li>
              <li>
                <span className="text-accent-green">WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/905304989553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-green transition-colors"
                >
                  Mesaj Gönder
                </a>
              </li>
              <li>
                <span className="text-accent-green">Adres:</span> İstanbul,
                Türkiye
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} muharremsen. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

