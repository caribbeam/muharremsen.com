export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
  seoKeywords?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "siber-guvenlik-2024-trendleri",
    title: "2024 Yılında Siber Güvenlik Trendleri ve Önemli Gelişmeler",
    description:
      "2024 yılında siber güvenlik alanında yaşanan önemli gelişmeler, yeni tehditler ve korunma stratejileri hakkında kapsamlı bir inceleme.",
    content: `
      <h2>Siber Güvenlikte 2024 Yılı</h2>
      <p>2024 yılı, siber güvenlik alanında önemli değişimlerin yaşandığı bir dönem oldu. Yapay zeka destekli saldırılar, bulut güvenliği ve sıfır güven mimarisi gibi konular ön plana çıktı.</p>
      
      <h3>Yapay Zeka Destekli Saldırılar</h3>
      <p>Siber suçlular, yapay zeka teknolojilerini kullanarak daha sofistike saldırılar gerçekleştirmeye başladı. Bu saldırılar, geleneksel güvenlik önlemlerini aşma konusunda daha başarılı oluyor.</p>
      
      <h3>Bulut Güvenliği</h3>
      <p>Kurumsal şirketlerin bulut altyapılarına geçişi hızlandıkça, bulut güvenliği kritik bir öncelik haline geldi. Doğru yapılandırma ve sürekli izleme büyük önem taşıyor.</p>
      
      <h3>Sıfır Güven Mimarisi</h3>
      <p>Sıfır güven (Zero Trust) yaklaşımı, artık bir seçenek değil, zorunluluk haline geldi. Her kullanıcı ve cihazın sürekli doğrulanması gerekiyor.</p>
      
      <h3>Sonuç</h3>
      <p>Siber güvenlik, sürekli gelişen bir alan. Kurumsal şirketlerin bu gelişmelere ayak uydurması ve proaktif güvenlik önlemleri alması gerekiyor.</p>
    `,
    author: "Ahmet Yılmaz",
    date: "2024-12-15",
    category: "Siber Güvenlik",
    tags: ["siber güvenlik", "2024", "güvenlik trendleri", "yapay zeka"],
    seoKeywords: "siber güvenlik 2024, güvenlik trendleri, siber tehditler, kurumsal güvenlik",
  },
  {
    slug: "network-altyapi-optimizasyonu",
    title: "Kurumsal Network Altyapısı Optimizasyonu: En İyi Uygulamalar",
    description:
      "Kurumsal network altyapınızı optimize etmek için uygulamanız gereken en iyi yöntemler ve performans artırma teknikleri.",
    content: `
      <h2>Network Altyapısı Optimizasyonu</h2>
      <p>Modern işletmeler için hızlı ve güvenilir bir network altyapısı kritik öneme sahiptir. Bu yazıda, network performansınızı artırmak için uygulayabileceğiniz en iyi yöntemleri ele alıyoruz.</p>
      
      <h3>Bant Genişliği Yönetimi</h3>
      <p>Bant genişliğinizi doğru yönetmek, network performansınızı önemli ölçüde artırabilir. QoS (Quality of Service) ayarları ile kritik uygulamalara öncelik verebilirsiniz.</p>
      
      <h3>Network İzleme</h3>
      <p>Sürekli network izleme, sorunları oluşmadan önce tespit etmenizi sağlar. Modern izleme araçları ile network trafiğinizi analiz edebilirsiniz.</p>
      
      <h3>Yedekleme ve Felaket Kurtarma</h3>
      <p>Network altyapınızda yedekleme stratejileri oluşturmak, olası kesintilerde iş sürekliliğinizi korur.</p>
      
      <h3>Sonuç</h3>
      <p>Network optimizasyonu, sürekli bir süreçtir. Düzenli bakım ve güncellemeler ile network performansınızı en üst seviyede tutabilirsiniz.</p>
    `,
    author: "Zeynep Demir",
    date: "2024-12-10",
    category: "Network",
    tags: ["network", "altyapı", "optimizasyon", "performans"],
    seoKeywords: "network optimizasyonu, kurumsal network, network performansı, altyapı yönetimi",
  },
  {
    slug: "bulut-gecisi-rehberi",
    title: "Kurumsal Bulut Geçişi: Adım Adım Rehber",
    description:
      "İşletmenizi bulut ortamına taşımak için izlemeniz gereken adımlar, dikkat edilmesi gereken noktalar ve en iyi uygulamalar.",
    content: `
      <h2>Bulut Geçişi Rehberi</h2>
      <p>Bulut teknolojilerine geçiş, modern işletmeler için kaçınılmaz bir süreç haline geldi. Bu rehber, başarılı bir bulut geçişi için gerekli tüm adımları kapsar.</p>
      
      <h3>Planlama Aşaması</h3>
      <p>Bulut geçişi, detaylı bir planlama gerektirir. Mevcut altyapınızı analiz edin, hangi uygulamaların buluta taşınacağını belirleyin ve bir geçiş stratejisi oluşturun.</p>
      
      <h3>Güvenlik Değerlendirmesi</h3>
      <p>Bulut ortamında güvenlik, kritik bir konudur. Veri şifreleme, erişim kontrolü ve güvenlik politikalarını gözden geçirin.</p>
      
      <h3>Maliyet Analizi</h3>
      <p>Bulut geçişinin maliyet etkin olması için detaylı bir maliyet analizi yapın. Kullanım bazlı fiyatlandırma modellerini değerlendirin.</p>
      
      <h3>Geçiş Stratejileri</h3>
      <p>Lift-and-shift, refactoring veya rebuild gibi farklı geçiş stratejileri arasından ihtiyacınıza uygun olanı seçin.</p>
      
      <h3>Sonuç</h3>
      <p>Başarılı bir bulut geçişi, doğru planlama ve uzman destek ile mümkündür. Profesyonel bir ekiple çalışmak, süreci hızlandırır ve riskleri azaltır.</p>
    `,
    author: "Ayşe Öztürk",
    date: "2024-12-05",
    category: "Bulut Çözümleri",
    tags: ["bulut", "migration", "aws", "azure", "cloud"],
    seoKeywords: "bulut geçişi, cloud migration, aws geçiş, azure migration, kurumsal bulut",
  },
  {
    slug: "sistem-yonetimi-ipuclari",
    title: "Etkili Sistem Yönetimi İçin 10 Önemli İpucu",
    description:
      "Sistem yöneticileri için günlük işlerini kolaylaştıracak ve sistem performansını artıracak pratik ipuçları.",
    content: `
      <h2>Sistem Yönetimi İpuçları</h2>
      <p>Etkili sistem yönetimi, işletmelerin kesintisiz çalışması için kritik öneme sahiptir. Bu yazıda, sistem yönetimini iyileştirmek için uygulayabileceğiniz pratik ipuçlarını paylaşıyoruz.</p>
      
      <h3>1. Otomasyon Kullanın</h3>
      <p>Tekrarlayan görevleri otomatikleştirmek, zaman tasarrufu sağlar ve insan hatalarını azaltır. Scripting ve otomasyon araçlarını kullanın.</p>
      
      <h3>2. Düzenli Yedekleme</h3>
      <p>Kritik verilerinizi düzenli olarak yedekleyin. 3-2-1 yedekleme kuralını uygulayın: 3 kopya, 2 farklı medya, 1 off-site yedek.</p>
      
      <h3>3. İzleme ve Loglama</h3>
      <p>Sistemlerinizi sürekli izleyin ve logları düzenli olarak analiz edin. Sorunları erken tespit etmek, büyük problemleri önler.</p>
      
      <h3>4. Güvenlik Güncellemeleri</h3>
      <p>Güvenlik yamalarını zamanında uygulayın. Güncellemeleri test ortamında denedikten sonra production'a alın.</p>
      
      <h3>5. Dokümantasyon</h3>
      <p>Tüm sistem yapılandırmalarını ve değişiklikleri dokümante edin. Bu, sorun giderme sürecini hızlandırır.</p>
      
      <h3>Sonuç</h3>
      <p>Etkili sistem yönetimi, sürekli öğrenme ve iyileştirme gerektirir. Bu ipuçlarını uygulayarak sistemlerinizin performansını ve güvenilirliğini artırabilirsiniz.</p>
    `,
    author: "Mehmet Kaya",
    date: "2024-12-01",
    category: "Sistem Yönetimi",
    tags: ["sistem yönetimi", "ipuçları", "best practices", "otomasyon"],
    seoKeywords: "sistem yönetimi, server yönetimi, sistem yöneticisi, IT yönetimi",
  },
  {
    slug: "sosyal-medya-entegrasyonlari-ve-web-entegre-uygulamalar",
    title: "Sosyal Medya Entegrasyonları ve Web Entegre Uygulamalar: Kapsamlı Rehber",
    description:
      "Web sitenize sosyal medya entegrasyonları ekleme, API kullanımı, paylaşım butonları, login entegrasyonları ve web entegre uygulamalar geliştirme rehberi.",
    content: `
      <h2>Sosyal Medya Entegrasyonları Nedir?</h2>
      <p>Sosyal medya entegrasyonları, web sitenizi sosyal medya platformlarıyla bağlayan ve kullanıcı deneyimini geliştiren özelliklerdir. Bu entegrasyonlar, müşteri etkileşimini artırır, marka görünürlüğünü yükseltir ve web trafiğini artırır.</p>
      
      <h3>Sosyal Medya Entegrasyonlarının Faydaları</h3>
      <ul>
        <li><strong>Artırılmış Trafik:</strong> Sosyal medyadan web sitenize yönlendirme</li>
        <li><strong>Marka Farkındalığı:</strong> Sosyal medyada daha fazla görünürlük</li>
        <li><strong>Kullanıcı Etkileşimi:</strong> Paylaşım ve yorum özellikleri</li>
        <li><strong>SEO Avantajı:</strong> Sosyal sinyaller arama motoru sıralamasını etkiler</li>
        <li><strong>Müşteri Kazanımı:</strong> Sosyal login ile kolay kayıt</li>
      </ul>

      <h2>Sosyal Medya Paylaşım Butonları</h2>
      
      <h3>1. Temel Paylaşım Butonları</h3>
      <p>Web sitenizde içerik paylaşımı için sosyal medya butonları ekleyin:</p>
      
      <pre><code>// React/Next.js için Sosyal Paylaşım Bileşeni
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon } from 'react-share';

export function SocialShareButtons({ url, title, description }) {
  return (
    &lt;div className="social-share-buttons"&gt;
      &lt;FacebookShareButton url={url} quote={title}&gt;
        &lt;FacebookIcon size={32} round /&gt;
      &lt;/FacebookShareButton&gt;
      
      &lt;TwitterShareButton url={url} title={title}&gt;
        &lt;TwitterIcon size={32} round /&gt;
      &lt;/TwitterShareButton&gt;
      
      &lt;LinkedinShareButton url={url} title={title} summary={description}&gt;
        &lt;LinkedinIcon size={32} round /&gt;
      &lt;/LinkedinShareButton&gt;
      
      &lt;WhatsappShareButton url={url} title={title}&gt;
        &lt;WhatsappIcon size={32} round /&gt;
      &lt;/WhatsappShareButton&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <h3>2. Native Share API Kullanımı</h3>
      <p>Modern tarayıcılarda native paylaşım API'sini kullanın:</p>
      
      <pre><code>// Native Share API
function shareContent({ title, text, url }) {
  if (navigator.share) {
    navigator.share({
      title: title,
      text: text,
      url: url,
    })
    .then(() => console.log('Başarıyla paylaşıldı'))
    .catch((error) => console.log('Paylaşım hatası:', error));
  } else {
    // Fallback: Manuel paylaşım butonları göster
    showManualShareButtons();
  }
}

// Kullanım
shareContent({
  title: 'Blog Yazısı Başlığı',
  text: 'Bu harika bir blog yazısı!',
  url: 'https://www.muharremsen.com/blog/yazi'
});</code></pre>

      <h2>Sosyal Medya Login Entegrasyonları</h2>
      
      <h3>1. Google Login Entegrasyonu</h3>
      <p>Google OAuth 2.0 ile kullanıcı girişi:</p>
      
      <pre><code>// Google OAuth 2.0 Entegrasyonu
import { GoogleLogin } from '@react-oauth/google';

function GoogleLoginButton() {
  const handleSuccess = (credentialResponse) => {
    // Backend'e credential gönder
    fetch('/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: credentialResponse.credential })
    })
    .then(res => res.json())
    .then(data => {
      // Kullanıcı oturumunu başlat
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard';
    });
  };

  return (
    &lt;GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.log('Login Failed')}
    /&gt;
  );
}</code></pre>

      <h3>2. Facebook Login Entegrasyonu</h3>
      <p>Facebook SDK ile login entegrasyonu:</p>
      
      <pre><code>// Facebook Login Entegrasyonu
import { useFacebookLogin } from 'react-facebook-login';

function FacebookLoginButton() {
  const responseFacebook = (response) => {
    // Backend'e access token gönder
    fetch('/api/auth/facebook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        accessToken: response.accessToken,
        userID: response.userID 
      })
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard';
    });
  };

  return (
    &lt;FacebookLogin
      appId="YOUR_FACEBOOK_APP_ID"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      cssClass="facebook-login-button"
    /&gt;
  );
}</code></pre>

      <h3>3. Twitter/X Login Entegrasyonu</h3>
      <p>Twitter OAuth 1.0a ile login:</p>
      
      <pre><code>// Twitter Login Entegrasyonu
function TwitterLoginButton() {
  const handleTwitterLogin = () => {
    // Twitter OAuth flow başlat
    window.location.href = '/api/auth/twitter';
  };

  return (
    &lt;button onClick={handleTwitterLogin} className="twitter-login-btn"&gt;
      &lt;svg&gt;...&lt;/svg&gt; Twitter ile Giriş Yap
    &lt;/button&gt;
  );
}

// Backend: Twitter OAuth Callback
app.get('/api/auth/twitter/callback', async (req, res) => {
  const { oauth_token, oauth_verifier } = req.query;
  
  // Access token al
  const tokenResponse = await twitterClient.getAccessToken({
    oauth_token,
    oauth_verifier
  });
  
  // Kullanıcı bilgilerini al
  const userInfo = await twitterClient.getUserInfo(tokenResponse);
  
  // Kullanıcıyı kaydet veya giriş yap
  const user = await findOrCreateUser({
    provider: 'twitter',
    providerId: userInfo.id,
    email: userInfo.email,
    name: userInfo.name
  });
  
  // JWT token oluştur
  const token = generateJWT(user);
  res.redirect(\`/dashboard?token=\${token}\`);
});</code></pre>

      <h2>Sosyal Medya API Entegrasyonları</h2>
      
      <h3>1. Instagram API Entegrasyonu</h3>
      <p>Instagram feed'inizi web sitenize entegre edin:</p>
      
      <pre><code>// Instagram Basic Display API
async function getInstagramPosts(accessToken) {
  const response = await fetch(
    \`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=\${accessToken}\`
  );
  const data = await response.json();
  return data.data;
}

// Instagram Feed Bileşeni
function InstagramFeed() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    getInstagramPosts(accessToken)
      .then(setPosts)
      .catch(console.error);
  }, []);
  
  return (
    &lt;div className="instagram-feed"&gt;
      {posts.map(post => (
        &lt;a key={post.id} href={post.permalink} target="_blank"&gt;
          &lt;img src={post.media_url} alt={post.caption} /&gt;
        &lt;/a&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>

      <h3>2. Twitter/X API Entegrasyonu</h3>
      <p>Twitter feed'inizi web sitenize ekleyin:</p>
      
      <pre><code>// Twitter API v2 Entegrasyonu
async function getTwitterTweets(bearerToken, username) {
  // Kullanıcı ID'sini al
  const userResponse = await fetch(
    \`https://api.twitter.com/2/users/by/username/\${username}\`,
    {
      headers: { 'Authorization': \`Bearer \${bearerToken}\` }
    }
  );
  const userData = await userResponse.json();
  const userId = userData.data.id;
  
  // Tweet'leri al
  const tweetsResponse = await fetch(
    \`https://api.twitter.com/2/users/\${userId}/tweets?max_results=10&tweet.fields=created_at,public_metrics\`,
    {
      headers: { 'Authorization': \`Bearer \${bearerToken}\` }
    }
  );
  const tweetsData = await tweetsResponse.json();
  return tweetsData.data;
}

// Twitter Feed Bileşeni
function TwitterFeed({ username }) {
  const [tweets, setTweets] = useState([]);
  
  useEffect(() => {
    getTwitterTweets(bearerToken, username)
      .then(setTweets)
      .catch(console.error);
  }, [username]);
  
  return (
    &lt;div className="twitter-feed"&gt;
      {tweets.map(tweet => (
        &lt;div key={tweet.id} className="tweet"&gt;
          &lt;p&gt;{tweet.text}&lt;/p&gt;
          &lt;span&gt;{new Date(tweet.created_at).toLocaleDateString()}&lt;/span&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>

      <h3>3. LinkedIn API Entegrasyonu</h3>
      <p>LinkedIn şirket sayfası içeriklerini gösterin:</p>
      
      <pre><code>// LinkedIn API Entegrasyonu
async function getLinkedInPosts(accessToken, companyId) {
  const response = await fetch(
    \`https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(\${companyId})&count=10\`,
    {
      headers: {
        'Authorization': \`Bearer \${accessToken}\`,
        'X-Restli-Protocol-Version': '2.0.0'
      }
    }
  );
  const data = await response.json();
  return data.elements;
}

// LinkedIn Feed Bileşeni
function LinkedInFeed({ companyId }) {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    getLinkedInPosts(accessToken, companyId)
      .then(setPosts)
      .catch(console.error);
  }, [companyId]);
  
  return (
    &lt;div className="linkedin-feed"&gt;
      {posts.map(post => (
        &lt;div key={post.id} className="linkedin-post"&gt;
          &lt;p&gt;{post.specificContent['com.linkedin.ugc.ShareContent'].text.text}&lt;/p&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>

      <h2>Web Entegre Uygulamalar</h2>
      
      <h3>1. WhatsApp Business API Entegrasyonu</h3>
      <p>WhatsApp üzerinden müşteri iletişimi:</p>
      
      <pre><code>// WhatsApp Business API Entegrasyonu
async function sendWhatsAppMessage(phoneNumber, message) {
  const response = await fetch('https://graph.facebook.com/v18.0/YOUR_PHONE_NUMBER_ID/messages', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${WHATSAPP_ACCESS_TOKEN}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: phoneNumber,
      type: 'text',
      text: { body: message }
    })
  });
  
  return await response.json();
}

// WhatsApp Butonu Bileşeni
function WhatsAppButton({ phoneNumber, message }) {
  const handleClick = () => {
    const url = \`https://wa.me/\${phoneNumber}?text=\${encodeURIComponent(message)}\`;
    window.open(url, '_blank');
  };
  
  return (
    &lt;button onClick={handleClick} className="whatsapp-button"&gt;
      &lt;svg&gt;...&lt;/svg&gt; WhatsApp ile İletişime Geç
    &lt;/button&gt;
  );
}</code></pre>

      <h3>2. Facebook Messenger Entegrasyonu</h3>
      <p>Facebook Messenger chat widget'ı:</p>
      
      <pre><code>// Facebook Messenger Widget
function FacebookMessenger({ pageId }) {
  useEffect(() => {
    // Facebook SDK'yı yükle
    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    };
    
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/tr_TR/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);
  
  return (
    &lt;&gt;
      &lt;div className="fb-customerchat"
        page_id={pageId}
        theme_color="#0084ff"
        logged_in_greeting="Merhaba! Size nasıl yardımcı olabilirim?"
        logged_out_greeting="Merhaba! Size nasıl yardımcı olabilirim?"&gt;
      &lt;/div&gt;
    &lt;/&gt;
  );
}</code></pre>

      <h3>3. YouTube API Entegrasyonu</h3>
      <p>YouTube videolarını web sitenize entegre edin:</p>
      
      <pre><code>// YouTube Data API v3
async function getYouTubeVideos(apiKey, channelId) {
  const response = await fetch(
    \`https://www.googleapis.com/youtube/v3/search?key=\${apiKey}&channelId=\${channelId}&part=snippet&order=date&maxResults=10\`
  );
  const data = await response.json();
  return data.items;
}

// YouTube Video Listesi Bileşeni
function YouTubeVideoList({ channelId }) {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    getYouTubeVideos(YOUTUBE_API_KEY, channelId)
      .then(setVideos)
      .catch(console.error);
  }, [channelId]);
  
  return (
    &lt;div className="youtube-videos"&gt;
      {videos.map(video => (
        &lt;div key={video.id.videoId} className="video-item"&gt;
          &lt;a href={\`https://www.youtube.com/watch?v=\${video.id.videoId}\`} target="_blank"&gt;
            &lt;img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} /&gt;
            &lt;h3&gt;{video.snippet.title}&lt;/h3&gt;
          &lt;/a&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>

      <h2>Sosyal Medya Widget'ları</h2>
      
      <h3>1. Facebook Like Box</h3>
      <pre><code>&lt;div className="fb-page" 
  data-href="https://www.facebook.com/yourpage"
  data-tabs="timeline"
  data-width="500"
  data-height="600"
  data-small-header="false"
  data-adapt-container-width="true"
  data-hide-cover="false"
  data-show-facepile="true"&gt;
&lt;/div&gt;</code></pre>

      <h3>2. Twitter Timeline Widget</h3>
      <pre><code>&lt;a className="twitter-timeline" 
  href="https://twitter.com/yourusername"
  data-height="600"
  data-theme="light"&gt;
  Tweets by @yourusername
&lt;/a&gt;
&lt;script async src="https://platform.twitter.com/widgets.js"&gt;&lt;/script&gt;</code></pre>

      <h3>3. Instagram Feed Widget</h3>
      <pre><code>// Instagram Embed
function InstagramEmbed({ url }) {
  return (
    &lt;blockquote 
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
    &gt;
      &lt;a href={url}&gt;Instagram Post&lt;/a&gt;
    &lt;/blockquote&gt;
  );
}</code></pre>

      <h2>Güvenlik ve Best Practices</h2>
      
      <h3>1. API Key Güvenliği</h3>
      <ul>
        <li>API key'leri environment variable'larda saklayın</li>
        <li>Backend'de API çağrıları yapın, frontend'de expose etmeyin</li>
        <li>Rate limiting uygulayın</li>
        <li>HTTPS kullanın</li>
      </ul>
      
      <pre><code>// Environment Variables (.env.local)
NEXT_PUBLIC_FACEBOOK_APP_ID=your_app_id
FACEBOOK_APP_SECRET=your_app_secret
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
TWITTER_API_KEY=your_api_key
TWITTER_API_SECRET=your_api_secret

// Backend API Route
export async function POST(request: Request) {
  const { provider, token } = await request.json();
  
  // Backend'de API çağrısı yap
  const apiKey = process.env.FACEBOOK_APP_SECRET; // Güvenli
  // ... doğrulama işlemleri
}</code></pre>

      <h3>2. OAuth Güvenliği</h3>
      <ul>
        <li>State parameter kullanın (CSRF koruması)</li>
        <li>PKCE (Proof Key for Code Exchange) kullanın</li>
        <li>Token'ları güvenli saklayın (httpOnly cookies)</li>
        <li>Token refresh mekanizması ekleyin</li>
      </ul>

      <h3>3. Veri Gizliliği</h3>
      <ul>
        <li>KVKK/GDPR uyumluluğu</li>
        <li>Kullanıcı onayı alın</li>
        <li>Veri şifreleme</li>
        <li>Gizlilik politikası</li>
      </ul>

      <h2>Performans Optimizasyonu</h2>
      
      <h3>1. Lazy Loading</h3>
      <pre><code>// Sosyal medya widget'larını lazy load edin
import { lazy, Suspense } from 'react';

const FacebookWidget = lazy(() => import('./FacebookWidget'));
const TwitterWidget = lazy(() => import('./TwitterWidget'));

function SocialMediaSection() {
  return (
    &lt;Suspense fallback={&lt;div&gt;Yükleniyor...&lt;/div&gt;}&gt;
      &lt;FacebookWidget /&gt;
      &lt;TwitterWidget /&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>

      <h3>2. Caching Stratejisi</h3>
      <pre><code>// API yanıtlarını cache'leyin
const CACHE_DURATION = 5 * 60 * 1000; // 5 dakika

async function getCachedSocialMediaData(key, fetchFunction) {
  const cached = localStorage.getItem(key);
  const cachedData = cached ? JSON.parse(cached) : null;
  
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
    return cachedData.data;
  }
  
  const freshData = await fetchFunction();
  localStorage.setItem(key, JSON.stringify({
    data: freshData,
    timestamp: Date.now()
  }));
  
  return freshData;
}</code></pre>

      <h2>muharremsen'in Sosyal Medya Entegrasyon Hizmetleri</h2>
      
      <p>muharremsen olarak, web sitenize profesyonel sosyal medya entegrasyonları ekliyoruz:</p>
      
      <ul>
        <li><strong>Sosyal Medya Paylaşım Butonları:</strong> Tüm platformlar için paylaşım butonları</li>
        <li><strong>Sosyal Login Entegrasyonları:</strong> Google, Facebook, Twitter, LinkedIn login</li>
        <li><strong>Sosyal Medya Feed'leri:</strong> Instagram, Twitter, LinkedIn feed entegrasyonları</li>
        <li><strong>WhatsApp Business API:</strong> WhatsApp ile müşteri iletişimi</li>
        <li><strong>Facebook Messenger:</strong> Messenger chat widget'ı</li>
        <li><strong>YouTube Entegrasyonu:</strong> Video listesi ve embed</li>
        <li><strong>Sosyal Medya Widget'ları:</strong> Like box, timeline, embed widget'ları</li>
        <li><strong>API Entegrasyonları:</strong> Tüm sosyal medya API'leri</li>
        <li><strong>Güvenlik:</strong> OAuth güvenliği, API key yönetimi</li>
        <li><strong>Performans Optimizasyonu:</strong> Lazy loading, caching</li>
        <li><strong>7/24 Destek:</strong> Teknik destek ve bakım</li>
      </ul>

      <h2>Sonuç</h2>
      
      <p>Sosyal medya entegrasyonları, modern web sitelerinin vazgeçilmez bir parçasıdır. Doğru entegrasyonlar ile:</p>
      
      <ul>
        <li>Web trafiğinizi artırabilirsiniz</li>
        <li>Marka görünürlüğünüzü yükseltebilirsiniz</li>
        <li>Müşteri etkileşimini artırabilirsiniz</li>
        <li>Kullanıcı deneyimini iyileştirebilirsiniz</li>
        <li>SEO performansınızı artırabilirsiniz</li>
      </ul>
      
      <p>Sosyal medya entegrasyonları ve web entegre uygulamalar için muharremsen'in deneyimli ekibi yanınızda. Profesyonel entegrasyon hizmetlerimiz ile web sitenizi sosyal medya ile güçlendirin!</p>
    `,
    author: "muharremsen",
    date: new Date().toISOString().split('T')[0],
    category: "Web Geliştirme",
    tags: ["Sosyal Medya", "API Entegrasyonu", "OAuth", "Facebook", "Twitter", "Instagram", "WhatsApp", "Web Entegrasyonu", "Sosyal Login"],
    seoKeywords: "sosyal medya entegrasyonu, facebook entegrasyonu, twitter entegrasyonu, instagram entegrasyonu, whatsapp entegrasyonu, sosyal login, oauth, api entegrasyonu",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag));
}

