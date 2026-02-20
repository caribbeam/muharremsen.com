import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Network, Firewall, Sanallaştırma ve Sunucu Hizmetleri | muharremsen",
  description:
    "Network ve firewall çözümleri, sanallaştırma, mail server, IP santral, DNS, FortiGate, MikroTik ve domain server kurulumları için uçtan uca altyapı ve güvenlik hizmetleri.",
};

export default function Hizmetler() {
  return (
    <SectionWrapper className="pt-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Network, Güvenlik ve Sunucu Hizmetlerimiz
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Kurumsal network, firewall, sanallaştırma, mail server, IP santral, DNS ve domain server altyapılarınızı tasarlıyor, kuruyor ve yönetiyoruz. Güvenli, ölçeklenebilir ve yüksek erişilebilir IT altyapıları ile işletmenizin sürekliliğini sağlıyoruz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Network ve Firewall */}
          <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
            <div className="text-accent-green text-4xl mb-4">🌐</div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Network ve Firewall
            </h2>
            <p className="text-gray-300 mb-4">
              Kurumsal network tasarımı, switch ve router yapılandırmaları, VLAN
              segmentasyonu, site-to-site ve SSL VPN tünelleri ile güvenli
              iletişim altyapısı kuruyoruz. FortiGate, MikroTik, pfSense gibi
              çözümlerle güçlü firewall politikaları oluşturuyoruz.
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Network keşfi ve dokümantasyonu</li>
              <li>• FortiGate ve MikroTik firewall kurulumları</li>
              <li>• VPN (IPSec, SSL, Remote Access) yapılandırmaları</li>
              <li>• IDS/IPS, web filter ve application control politikaları</li>
            </ul>
          </div>

          {/* Sanallaştırma ve Veri Merkezi */}
          <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
            <div className="text-accent-green text-4xl mb-4">💻</div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Sanallaştırma ve Veri Merkezi
            </h2>
            <p className="text-gray-300 mb-4">
              VMware, Proxmox ve Hyper-V tabanlı sanallaştırma ortamları,
              cluster ve high availability yapıları, storage planlama ve yedekleme
              çözümleri ile veri merkezinizi optimize ediyoruz.
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Hypervisor kurulum ve yapılandırma</li>
              <li>• Cluster ve HA senaryoları</li>
              <li>• Backup ve replikasyon çözümleri</li>
              <li>• Kaynak ve kapasite planlama</li>
            </ul>
          </div>

          {/* Mail Server ve Güvenlik */}
          <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
            <div className="text-accent-green text-4xl mb-4">📧</div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Mail Server ve Güvenlik
            </h2>
            <p className="text-gray-300 mb-4">
              Exchange, Zimbra, Postfix gibi mail server çözümlerinin kurulumu,
              SPAM ve phishing saldırılarına karşı gelişmiş koruma, SPF/DKIM/DMARC
              yapılandırmaları ve mail arşivleme hizmetleri sunuyoruz.
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Mail server kurulum ve migration</li>
              <li>• Antispam ve antivirüs entegrasyonları</li>
              <li>• SPF, DKIM, DMARC ayarları</li>
              <li>• Mail yedekleme ve arşivleme</li>
            </ul>
          </div>

          {/* IP Santral ve Çağrı Merkezi */}
          <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
            <div className="text-accent-green text-4xl mb-4">📞</div>
            <h2 className="text-2xl font-bold text-white mb-3">
              IP Santral ve Çağrı Merkezi
            </h2>
            <p className="text-gray-300 mb-4">
              FreePBX ve IP-PBX santral çözümleri ile dahili hatlar, IVR
              senaryoları, çağrı kayıt ve raporlama, çoklu şube ve remote
              kullanıcı desteği sağlıyoruz.
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• IP santral kurulum ve yapılandırma</li>
              <li>• IVR, queue ve çağrı akışları</li>
              <li>• Softphone ve IP telefon entegrasyonları</li>
              <li>• CRM ve helpdesk entegrasyonları</li>
            </ul>
          </div>

          {/* DNS, Domain ve Directory Services */}
          <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
            <div className="text-accent-green text-4xl mb-4">🧩</div>
            <h2 className="text-2xl font-bold text-white mb-3">
              DNS, Domain ve Directory Services
            </h2>
            <p className="text-gray-300 mb-4">
              Windows Server Active Directory, DNS, DHCP ve Group Policy
              yapılandırmaları ile domain ortamınızı standartlara uygun şekilde
              tasarlıyoruz. Linux tabanlı DNS ve directory çözümleri de
              sunuyoruz.
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Domain controller kurulumları</li>
              <li>• DNS ve DHCP servisleri</li>
              <li>• GPO ile güvenlik politikaları</li>
              <li>• Kimlik ve erişim yönetimi</li>
            </ul>
          </div>

          {/* Yapay Zeka ve Otomasyon */}
          <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
            <div className="text-accent-green text-4xl mb-4">🤖</div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Yapay Zeka ve Otomasyon
            </h2>
            <p className="text-gray-300 mb-4">
              Network ve sunucu altyapılarınız için yapay zeka destekli izleme,
              log analizi ve otomasyon senaryoları ile arıza tespiti, kapasite
              planlama ve raporlama süreçlerini akıllandırıyoruz.
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Otomatik uyarı ve olay yönetimi</li>
              <li>• Log analizi ve korelasyon</li>
              <li>• Script ve playbook tabanlı otomasyon</li>
              <li>• Raporlama ve kapasite analizi</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/iletisim" 
            className="bg-accent-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-green/90 transition-colors inline-block"
          >
            Teklif Alın
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
