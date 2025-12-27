import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-28 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="hero-animated-bg"></div>
      
      {/* Floating Particles */}
      <div className="hero-particle hero-particle-1"></div>
      <div className="hero-particle hero-particle-2"></div>
      <div className="hero-particle hero-particle-3"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/60 via-transparent to-dark-primary/60"></div>
      
      <div className="relative z-10 container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight">
          <span className="text-accent-green">Teknoloji</span> Çözümlerinde
          <br />
          Güvenilir Ortağınız
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-2">
          Yapay zeka destekli yazılımlar, proforma uygulamalar, helpdesk sistemleri, LMS, 
          envanter yönetimi, QDMS, domain server, Active Directory, imaj yönetimi, 
          FreePBX/Asterisk kurulumları ve ISO 27001 BGYS desteği sunuyoruz.
        </p>
        <Link
          href="/iletisim"
          className="inline-block bg-accent-green text-dark-primary font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-accent-turquoise hover:scale-105 transition-all duration-300 shadow-lg shadow-accent-green/30 text-sm md:text-base touch-manipulation min-h-[44px] flex items-center justify-center"
        >
          Bizimle İletişime Geçin
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-accent-green"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

