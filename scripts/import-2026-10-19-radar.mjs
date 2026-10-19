import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const storagePath = path.join(root, 'data/storage.json');
const data = JSON.parse(fs.readFileSync(storagePath, 'utf8'));

// Helper to escape and render
const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function inline(value) {
  return escape(value)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

const articlesToInsert = [
  {
    slug: 'turkiye-termal-saglik-turizminde-kuzey-avrupaya-aciliyor-pamukkale-tanitim-modeli',
    title: 'Türkiye Termal Sağlık Turizminde Kuzey Avrupa\'ya Açılıyor: Pamukkale\'nin Yeni Tanıtım Modeli',
    spot: 'TGA koordinasyonunda İsveç, Norveç, Danimarka ve Finlandiya\'dan gelen sekiz kişilik İskandinav basın heyeti, Pamukkale Üniversitesi Termal Rehabilitasyon Merkezi\'ni (PAÜTERM) ziyaret etti.',
    category: 'pazarlar',
    contentType: 'haber',
    country: 'Türkiye',
    region: 'Orta Doğu',
    authorId: 'kaan-karakas',
    publishedAt: '2026-10-19T09:00:00.000Z',
    readingTime: 4,
    isHeadline: true,
    isSecondaryHeadline: false,
    isEditorPick: true,
    featuredImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Pamukkale termal kaynakları ve modern hidroterapi/rehabilitasyon altyapısı.',
    imageSource: 'Pamukkale Üniversitesi / TGA',
    tags: ['Pamukkale', 'Termal Sağlık Turizmi', 'PAÜTERM', 'İskandinav Pazarı', 'Rehabilitasyon', 'TGA'],
    sources: [
      {
        name: 'Pamukkale Üniversitesi Resmî Açıklaması',
        url: 'https://haber.pau.edu.tr/Haber/pamukkale-termal-rehabilitasyon-merkezi-pautermnin-saglik-turizmi-potansiyeli-iskandinav-basin-heyetine-tanitildi',
        isOfficial: true
      }
    ],
    seoTitle: 'Pamukkale Termal Sağlık Turizminde İskandinav Pazarına Açılıyor',
    seoDescription: 'TGA koordinasyonunda İskandinav basın heyeti PAÜTERM\'i ziyaret etti. Türkiye\'nin termal rehabilitasyon ve kuzey pazarı stratejisi.',
    content: `
<div class="p-4 bg-teal-50 border-l-4 border-[#00A6A6] text-xs text-slate-700 mb-6 rounded-r">
  <strong>Gündem Özeti:</strong> Türkiye Turizm Tanıtım ve Geliştirme Ajansı (TGA) koordinasyonunda 15–17 Ekim Denizli programı kapsamında Kuzey Avrupa basını PAÜTERM tesislerinde ağırlandı.
</div>

<p>Türkiye'nin sağlık turizminde klasik cerrahi ve estetik odaklı pazarlamanın ötesine geçerek medikal rehabilitasyon ve termal sağlık alanında Kuzey Avrupa pazarına odaklanan yeni tanıtım hamlesi Pamukkale'de somutlaştı. Türkiye Turizm Tanıtım ve Geliştirme Ajansı (TGA) koordinasyonunda Denizli'de düzenlenen 15–17 Ekim tanıtım programı kapsamında İsveç, Norveç, Danimarka ve Finlandiya'dan sekiz basın mensubu, 16 Ekim'de Pamukkale Üniversitesi Termal Rehabilitasyon Merkezi'ni (PAÜTERM) yerinde inceledi.</p>

<h2>Robotik rehabilitasyon, hidroterapi ve üç dilde hasta koordinasyonu</h2>
<p>Ziyaret sırasında Pamukkale Üniversitesi yönetimi ve PAÜTERM uzmanları; Karahayıt bölgesinin zengin kırmızı su termal kaynaklarını, ileri teknoloji robotik yürüme ve uzuv rehabilitasyon sistemlerini, hidroterapi havuzlarını ve yabancı hastalar için sunulan İngilizce, Almanca ve Rusça dillerindeki uluslararası hasta koordinasyon süreçlerini heyete tanıttı.</p>

<p>Kuzey Avrupa ülkelerinde özellikle romatizmal hastalıklar, nörolojik rehabilitasyon, ortopedik cerrahi sonrası toparlanma ve ileri yaş sağlıklı yaşam (wellness) hizmetlerine yönelik kamu ve özel sigorta destekli seyahat talebi yüksek seviyede bulunuyor. PAÜTERM heyeti, merkezin yalnızca bir kaplıca tesisi değil, üniversite hastanesi güvencesinde multidisipliner bir tıp ve rehabilitasyon üssü olduğunu vurguladı.</p>

<h2>Neden önemli? Destinasyon diplomasisi ve hasta kazanım zinciri</h2>
<p>Bu ziyaret, kamu kurumları (TGA), üniversite tıp fakültesi hastanesi altyapısı, yerel destinasyon yönetimi ve uluslararası basın mensuplarının aynı hasta kazanım zincirinde bir araya gelmesi açısından stratejik bir örnek teşkil ediyor.</p>

<blockquote>
  <strong>Editoryal Not ve Doğrulama Ayrımı:</strong> İskandinav basın heyetinin Pamukkale ziyareti, o ülkelerin resmî yayın organlarında şimdiden olumlu haberler yayımlandığı veya hasta sevkiyatının garanti edildiği anlamına gelmez. Ziyaret sonrasında Kuzey Avrupa medyasında yayımlanacak içerikler, sigorta geri ödeme sistemlerinin Türkiye protokollerine bakışı ve hasta hareketliliği somut verilerle takip edilmelidir.
</blockquote>
`
  },
  {
    slug: 'turkiyede-telepatoloji-icin-yeni-yonerge-uluslararasi-ikinci-gorus-hizmetleri',
    title: 'Türkiye\'de Telepatoloji İçin Yeni Yönerge: Uluslararası İkinci Görüş Hizmetleri Açısından Ne Değişebilir?',
    spot: 'Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü, 14 Ekim tarihli Bakanlık oluru ile hazırlanan Dijital Patoloji ve Telepatoloji Uygulamaları Hakkında Yönerge\'yi 16 Ekim\'de resmen yayımladı.',
    category: 'mevzuat',
    contentType: 'mevzuat',
    country: 'Türkiye',
    region: 'Orta Doğu',
    authorId: 'av-elif-demir',
    publishedAt: '2026-10-19T08:55:00.000Z',
    readingTime: 5,
    isHeadline: false,
    isSecondaryHeadline: true,
    isEditorPick: true,
    featuredImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Dijital patoloji tarama sistemleri ve uzaktan konsültasyon altyapısı.',
    imageSource: 'T.C. Sağlık Bakanlığı SHGM',
    tags: ['Telepatoloji', 'Dijital Patoloji', 'Sağlık Bakanlığı', 'Mevzuat', 'İkinci Görüş', 'Konsültasyon', 'Sağlık Bilişimi'],
    sources: [
      {
        name: 'SHGM Resmî Duyuru ve Yönerge Ekleri',
        url: 'https://shgm.saglik.gov.tr/TR-121585/dijital-patoloji-ve-telepatoloji-uygulamalari-hakkinda-yonerge.html',
        isOfficial: true
      }
    ],
    seoTitle: 'Dijital Patoloji ve Telepatoloji Yönergesi Yayımlandı: Sağlık Turizmine Etkisi',
    seoDescription: 'Sağlık Bakanlığı telepatoloji yönergesini 16 Ekim\'de yayımladı. Uluslararası ikinci görüş ve sınır ötesi konsültasyon açısından getirdikleri.',
    content: `
<div class="p-4 bg-blue-50 border-l-4 border-[#102A43] text-xs text-slate-700 mb-6 rounded-r">
  <strong>Resmî Düzenleme:</strong> T.C. Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü (SHGM), 14 Ekim 2026 tarihli Makam Oluru ile yürürlüğe giren yönergeyi 16 Ekim 2026 tarihinde ilan etti.
</div>

<p>Sağlık Hizmetleri Genel Müdürlüğü, patoloji laboratuvarlarında dijital görüntüleme, dijital arşivleme ve uzaktan konsültasyon standartlarını belirleyen <strong>Dijital Patoloji ve Telepatoloji Uygulamaları Hakkında Yönerge</strong>yi 16 Ekim 2026 tarihi itibarıyla yayımladı ve yönerge eklerini sağlık tesislerinin erişimine açtı.</p>

<h2>Yönergenin getirdiği temel teknik standartlar</h2>
<p>Yeni yönerge ile birlikte sağlık tesislerinde preparatların taranması, dijital ortama aktarılması, güvenli veri depolama standartları, hekim yetkilendirmesi ve patoloji uzmanları arasında uzaktan konsültasyon (telepatoloji) süreçlerinin yasal çerçevesi netleştirildi. Düzenleme, patoloji preparatlarının yüksek çözünürlüklü dijital sistemlerle taranarak fiziki sevk zorunluluğu olmaksızın uzman incelemesine sunulmasını hedefliyor.</p>

<h2>Uluslararası ikinci görüş ve sağlık turizmi açısından ne anlama geliyor?</h2>
<p>Dijital patoloji ve telepatoloji altyapısı, uluslararası sağlık hizmetlerinde kritik bir dönüm noktası olarak değerlendiriliyor. Yurt dışındaki hastaların doku örneklerinin fiziki olarak gümrük ve kargo süreçleriyle Türkiye'ye getirilmesi yerine dijital slaytlar üzerinden hızlı ikinci görüş (second opinion) ve onkolojik tanı konsültasyonu verilmesi teorik olarak mümkün hale geliyor.</p>

<blockquote>
  <strong>Hukuki ve Editoryal Ayrım:</strong> <em>Bu düzenleme, doğrudan yeni bir sağlık turizmi yönetmeliği değildir.</em> Yönergenin kişisel sağlık verilerinin sınır ötesi aktarımı (KVKK), sınır ötesi hekim sorumluluğu ve uluslararası akreditasyon izinleri ayrıntılı olarak incelenmeden, yurt dışından doğrudan tanı koyulabileceği veya otomatik yabancı hasta kabul edilebileceği varsayılmamalıdır.
</blockquote>
`
  },
  {
    slug: '34-yeni-ozel-hastane-lisansinda-sonuc-bekleniyor-yatirim-haritasi',
    title: '34 Yeni Özel Hastane Lisansında Sonuç Bekleniyor: Yatırım Haritası Nasıl Şekillenecek?',
    spot: 'Sağlık Bakanlığı\'nın 11 ilde 34 yeni özel hastane açılmasına imkan veren IV. kısım açık artırma takviminde 13 Ekim aşaması geride kaldı; sektör resmî sonuç listesini bekliyor.',
    category: 'gundem',
    contentType: 'haber',
    country: 'Türkiye',
    region: 'Orta Doğu',
    authorId: 'editorial',
    publishedAt: '2026-10-19T08:50:00.000Z',
    readingTime: 4,
    isHeadline: false,
    isSecondaryHeadline: true,
    isEditorPick: true,
    featuredImage: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Türkiye genelinde özel sağlık yatırımları ve hastane kapasite planlaması.',
    imageSource: 'Sağlık Bakanlığı / SHGM',
    tags: ['Özel Hastane Lisansları', 'Sağlık Yatırımları', 'SHGM', 'Açık Artırma', 'Sağlık Turizmi Kapasitesi'],
    sources: [
      {
        name: 'Sağlık Bakanlığı Duyurular Arşivi',
        url: 'https://www.saglik.gov.tr/TR,11693/duyurular.html',
        isOfficial: true
      },
      {
        name: 'SHGM Özel Hastaneler Planlama Duyurusu',
        url: 'https://shgm.saglik.gov.tr/TR-120914/2026-yili-ozel-hastaneler-planlama-artirma-isi-iv-kisim-illerde-acilmasi-planlanan-ozel-hastane-lisanslari.html',
        isOfficial: true
      }
    ],
    seoTitle: '34 Yeni Özel Hastane Lisansı Sonuçları Bekleniyor',
    seoDescription: '11 ilde 34 yeni özel hastane lisansı için 13 Ekim takvimi geride kaldı. Yatırımcıların ve tahsislerin durumu.',
    content: `
<div class="p-4 bg-amber-50 border-l-4 border-amber-600 text-xs text-slate-700 mb-6 rounded-r">
  <strong>Süreç Takibi:</strong> 11 ilde 34 yeni özel hastane lisansına ilişkin IV. kısım açık artırma takvimi 13 Ekim 2026 olarak ilan edilmişti.
</div>

<p>Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü tarafından yürütülen 2026 yılı özel hastaneler planlama artırma sürecinde en kritik aşamalardan biri olan IV. kısım lisans artırma tarihi olan 13 Ekim geride kaldı. 11 ilde planlanan toplam 34 yeni özel hastane lisansı için başvuruların ardından gözler Bakanlığın açıklayacağı resmî sonuç listesine çevrildi.</p>

<h2>Yatırımcı ilgisi hangi şehirlere yöneldi?</h2>
<p>Söz konusu planlama; başta İstanbul, Ankara, İzmir, Antalya, Bursa ve Muğla olmak üzere sağlık turizmi potansiyeli yüksek büyükşehirleri ve kıyı destinasyonlarını yakından ilgilendiriyor. Sağlık yatırımcıları, özellikle yabancı hasta hareketliliğinin yoğun olduğu bölgelerdeki ruhsat ve yatak kapasitelerini genişletmeyi hedefliyor.</p>

<blockquote>
  <strong>Editoryal Güvenlik ve Doğrulama Notu:</strong> 19 Ekim sabahı itibarıyla yapılan resmî taramalarda, kazanan yatırımcıları, kesin tahsisleri ve oluşan nihai lisans bedellerini içeren teyitli bir sonuç ilanı henüz yayımlanmamıştır. Bu aşamada "34 yeni özel hastane kesin olarak açıldı" ya da "lisansların tümü satıldı" yönündeki haberler doğrulanmamış kabul edilmelidir. Kesin tahsisler resmî tutanaklarla ilan edildiğinde şehir bazlı analiz güncellenecektir.
</blockquote>
`
  },
  {
    slug: 'curemeabroad-40-fiziksel-danisma-merkezi-hedefi',
    title: 'Sağlık Turizmi Acentaları Dijital Reklamdan Fiziksel Danışma Merkezlerine mi Geçiyor?',
    spot: 'Hindistan merkezli medikal seyahat platformu CureMeAbroad, Avustralya, ABD ve İngiltere\'de 40\'tan fazla deneyim ve danışma merkezi açma hedefini duyurdu.',
    category: 'dunya',
    contentType: 'haber',
    country: 'Hindistan',
    region: 'Asya',
    authorId: 'dr-selim-yilmaz',
    publishedAt: '2026-10-19T08:45:00.000Z',
    readingTime: 4,
    isHeadline: false,
    isSecondaryHeadline: false,
    isEditorPick: false,
    featuredImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Uluslararası hasta danışma ve konsültasyon merkezi modeli.',
    imageSource: 'CureMeAbroad Media / PR',
    tags: ['CureMeAbroad', 'Hasta Kazanımı', 'Medikal Seyahat', 'Avustralya', 'Fiziksel Merkezler', 'Dijital Sağlık'],
    sources: [
      {
        name: 'Passionate in Marketing — Brisbane MOU Duyurusu',
        url: 'https://www.passionateinmarketing.com/curemeabroad-signs-mou-to-launch-first-australian-experience-centre-in-brisbane-eyes-40-centres-globally/',
        isOfficial: false
      },
      {
        name: 'MedSpark AI Sektörel Analizi',
        url: 'https://medspark.ai/2026/10/16/curemeabroad-plans-40-clinics-to-sell-patients-on-treatment-abroad/',
        isOfficial: false
      }
    ],
    seoTitle: 'CureMeAbroad 40 Fiziksel Deneyim Merkezi Planlıyor',
    seoDescription: 'Sağlık turizminde hibrit model: CureMeAbroad Avustralya ve ABD\'de fiziksel hasta danışma merkezleri açıyor.',
    content: `
<p>Küresel sağlık turizmi pazarında dijital reklam maliyetlerinin artması ve hasta güveninin yüz yüze temasla pekiştirilmesi ihtiyacı, sektörde yeni iş modellerini öne çıkarıyor. Hindistan merkezli yapay zekâ destekli medikal seyahat platformu <strong>CureMeAbroad</strong>, Avustralya, Amerika Birleşik Devletleri ve Birleşik Krallık gibi kilit kaynak pazarlarda 40'tan fazla fiziksel "deneyim ve danışma merkezi" açmayı hedefleyen bir dizi mutabakat zaptı (MoU) imzaladığını duyurdu.</p>

<h2>İlk merkez Brisbane'de: Hibrit hasta kazanım modeli</h2>
<p>Şirketin açıklamasına göre ilk deneyim merkezi 15 Ekim tarihinde Avustralya'nın Brisbane kentinde faaliyete geçirildi. Merkezlerde hastalara sanal hekim görüşmeleri, tedavi planlaması, ikinci uzman görüşü ve tedavi sonrası takip organizasyonu yüz yüze danışmanlar eşliğinde sunulacak.</p>

<p>CureMeAbroad yetkilileri, platform bünyesinde Türkiye, Hindistan, Tayland ve Birleşik Arap Emirlikleri gibi popüler medikal destinasyonlarda 400'den fazla akredite hastane ortağının bulunduğunu ifade etti.</p>

<blockquote>
  <strong>Doğrulama ve Sektörel Çerçeve:</strong> Söz konusu açıklama bir şirket hedefi ve niyet beyanıdır. 40 merkezin tamamı fiilen açılmış değildir; Brisbane dışındaki merkezler planlama aşamasındadır. Ayrıca Türkiye'deki anlaşmalı hastanelerin tam listesi ve akreditasyon kapsamı henüz bağımsız kaynaklarca doğrulanmamıştır.
</blockquote>
`
  },
  {
    slug: 'samsunun-ikili-hedefi-medikal-cihaz-uretimi-ve-uluslararasi-saglik-merkezi',
    title: 'Samsun\'un İkili Hedefi: Medikal Cihaz Üretimi ve Uluslararası Sağlık Merkezi Olmak',
    spot: 'Samsun\'da düzenlenen III. Uluslararası İkiztepe Sağlık Zirvesi ve Kuzey Anadolu Sağlık ve Medikal Fuarı, tıbbi cihaz sanayisi ile sağlık turizmini aynı masada topladı.',
    category: 'etkinlikler',
    contentType: 'haber',
    country: 'Türkiye',
    region: 'Orta Doğu',
    authorId: 'kaan-karakas',
    publishedAt: '2026-10-19T08:40:00.000Z',
    readingTime: 4,
    isHeadline: false,
    isSecondaryHeadline: false,
    isEditorPick: false,
    featuredImage: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'III. Uluslararası İkiztepe Sağlık Zirvesi ve Medikal Fuarı açılışı.',
    imageSource: 'Ondokuz Mayıs Üniversitesi',
    tags: ['Samsun', 'İkiztepe Sağlık Zirvesi', 'Medikal Cihaz', 'OMÜ', 'Sağlık Turizmi', 'AR-GE'],
    sources: [
      {
        name: 'Ondokuz Mayıs Üniversitesi Rektörlük Haberi',
        url: 'https://www.omu.edu.tr/tr/icerik/rektorluk/rektor-aydin-uluslararasi-3-samsun-ikiztepe-saglik-zirvesi-ve-medikal-fuarinin',
        isOfficial: true
      }
    ],
    seoTitle: 'Samsun İkiztepe Sağlık Zirvesi: Medikal Üretim ve Sağlık Turizmi',
    seoDescription: 'Samsun\'da III. Uluslararası İkiztepe Sağlık Zirvesi ve Medikal Fuarı açıldı. Tıbbi cihaz ve sağlık turizmi ihracatı.',
    content: `
<p>Karadeniz'in medikal sanayi üssü konumundaki Samsun, 15–18 Ekim 2026 tarihlerinde <strong>III. Uluslararası İkiztepe Sağlık Zirvesi ve Kuzey Anadolu Sağlık ve Medikal Fuarı</strong>na ev sahipliği yaptı. Ondokuz Mayıs Üniversitesi (OMÜ), kamu kurumları ve medikal sanayi kümelenmelerinin katılımıyla gerçekleşen etkinlikte tıbbi cihaz üretimi, cerrahi alet sanayisi, sağlık teknolojilerinde AR-GE ve sağlık turizmi ekseninde uluslararası iş birlikleri masaya yatırıldı.</p>

<h2>Cerrahi el aletlerinden hasta kabulüne entegre ekosistem</h2>
<p>Zirvenin açılışında konuşan OMÜ Rektörü Prof. Dr. Fatih Aydın, Samsun'un cerrahi el aletleri üretimindeki küresel deneyimini üniversite hastanesinin klinik gücüyle birleştirdiklerini ve Karadeniz havzasında önemli bir uluslararası sağlık merkezi olma yolunda ilerlediklerini kaydetti.</p>

<p>Fuar alanında yerli medikal cihaz üreticileriyle yabancı heyetler arasında ikili iş görüşmeleri (B2B) gerçekleştirildi.</p>

<blockquote>
  <strong>Editoryal Not:</strong> Sağlık turizmi sadece ameliyat ve otelcilik hizmetlerinden ibaret değildir; ileri teknoloji ve medikal cihaz üretimi destinasyonun güvenilirliğini pekiştirir. Ancak bir zirvenin düzenlenmiş olması doğrudan yeni yatırım anlaşmalarının imzalandığı anlamına gelmez; zirve sonrası oluşacak somut ihracat ve hasta rakamları izlenmelidir.
</blockquote>
`
  },
  {
    slug: 'azerbaycan-termal-saglik-turizminde-yatirimci-ariyor-turkiye-icin-rakip-mi-is-ortagi-mi',
    title: 'Azerbaycan Termal Sağlık Turizminde Yatırımcı Arıyor: Türkiye İçin Rakip mi, İş Ortağı mı?',
    spot: 'Azerbaycan Devlet Turizm Ajansı, Samsun Sağlık Zirvesi\'nde Naftalan, Kelbecer İstisu ve termal kaynaklarının sağlık turizmi potansiyelini uluslararası yatırımcılara anlattı.',
    category: 'pazarlar',
    contentType: 'haber',
    country: 'Azerbaycan',
    region: 'Asya',
    authorId: 'dr-selim-yilmaz',
    publishedAt: '2026-10-19T08:35:00.000Z',
    readingTime: 4,
    isHeadline: false,
    isSecondaryHeadline: false,
    isEditorPick: false,
    featuredImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Termal ve doğal sağlık kaynakları rehabilitasyon merkezi.',
    imageSource: 'Azerbaycan Devlet Turizm Ajansı',
    tags: ['Azerbaycan', 'Naftalan', 'İstisu', 'Termal Turizm', 'Samsun', 'Bölgesel İş Birliği'],
    sources: [
      {
        name: 'Azerbaycan Devlet Turizm Ajansı Resmî Duyurusu',
        url: 'https://www.tourism.gov.az/az/news/azerbaycanin-saglamliq-turizmi-potensiali-samsunda-teqdim-olunub',
        isOfficial: true
      },
      {
        name: 'DailyBaku Haberi',
        url: 'https://dailybaku.az/en/article/azerbaijan-presents-kalbajar-health-tourism-potential-at-samsun-summit',
        isOfficial: false
      }
    ],
    seoTitle: 'Azerbaycan Termal Sağlık Turizmi Potansiyelini Samsun\'da Tanıttı',
    seoDescription: 'Azerbaycan Naftalan ve Kelbecer İstisu termal sağlık turizmi bölgeleri için Türk yatırımcılara çağrıda bulundu.',
    content: `
<p>Azerbaycan Devlet Turizm Ajansı heyeti, Samsun'da düzenlenen uluslararası sağlık zirvesinde ülkenin zengin termal ve medikal turizm potansiyelini kapsayan geniş bir sunum gerçekleştirdi. Sunumda özellikle dünyaca ünlü şifalı petrolüyle bilinen <strong>Naftalan</strong> bölgesi ile Karabağ'ın yeniden imar süreci kapsamında ihya edilen <strong>Kelbecer İstisu</strong> termal kaynakları öne çıkarıldı.</p>

<h2>Bölgesel rekabet ve ortak paket imkanları</h2>
<p>Azerbaycanlı yetkililer, termal rehabilitasyon, spa ve sağlıklı yaşam tesisleri için uluslararası ve Türk yatırımcılara vergi kolaylıkları ve altyapı teşvikleri sunulduğunu belirtti. Kafkasya ve Hazar havzasında gelişen bu yeni destinasyonların Türkiye'deki termal merkezlerle hem rekabet edebileceği hem de ortak bölgesel tur rotaları ve kombine sağlık paketleri geliştirebileceği değerlendiriliyor.</p>

<blockquote>
  <strong>Analiz:</strong> Yakın coğrafyadaki sağlık yatırımları, Türkiye'nin özellikle Rusya ve Orta Asya kaynaklı termal hasta akışını uzun vadede etkileyebilir. Bu nedenle kurumsal ortaklıklar ve deneyim paylaşımı stratejik önem taşımaktadır.
</blockquote>
`
  },
  {
    slug: 'filipinler-saglik-turizmini-bolgesel-yatirim-merkezlerine-tasiyor',
    title: 'Filipinler Sağlık Turizmini Bölgesel Yatırım Merkezlerine Taşıyor: Türkiye\'nin Şehir Stratejisi Nasıl Olmalı?',
    spot: 'Filipinler Turizm Bakanlığı (DOT), Cebu, Davao ve Iloilo gibi bölgesel merkezlerde sağlık, rehabilitasyon ve sağlıklı yaşlanma yatırımları için uluslararası sermayeye çağrı yaptı.',
    category: 'dunya',
    contentType: 'haber',
    country: 'Filipinler',
    region: 'Asya',
    authorId: 'dr-selim-yilmaz',
    publishedAt: '2026-10-19T08:30:00.000Z',
    readingTime: 4,
    isHeadline: false,
    isSecondaryHeadline: false,
    isEditorPick: false,
    featuredImage: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Güneydoğu Asya bölgesinde sağlık ve wellness destinasyonları.',
    imageSource: 'BusinessMirror / DOT',
    tags: ['Filipinler', 'Bölgesel Sağlık', 'Yatırım Çağrısı', 'Wellness', 'Şehir Stratejisi'],
    sources: [
      {
        name: 'BusinessMirror — 14 Ekim',
        url: 'https://businessmirror.com.ph/2026/10/14/dot-seeks-more-foreign-investments-in-health-tourism/',
        isOfficial: false
      }
    ],
    seoTitle: 'Filipinler Sağlık Turizmi İçin Yabancı Yatırım Çağrısı Yaptı',
    seoDescription: 'Filipinler Turizm Bakanlığı, sağlık turizmini başkent Manila dışındaki bölgesel merkezlere yaymak için yatırımcı arıyor.',
    content: `
<p>Filipinler Turizm Bakanlığı (DOT), medikal seyahat ve sağlıklı yaşam (wellness) sektörünü başkent Manila'nın ötesine taşımak amacıyla kapsamlı bir uluslararası yatırım davetinde bulundu. 14 Ekim'de yapılan açıklamada Cebu, Davao ve Iloilo gibi bölgesel merkezlerin sağlık turizmi ekosistemi için öncelikli geliştirme bölgeleri olarak belirlendiği kaydedildi.</p>

<h2>Tekil hastaneden bölgesel sağlık ekosistemine</h2>
<p>Bakanlık yetkilileri; klinik hizmetlerin konaklama, dijital tele-sağlık altyapısı ve geriatrik bakım köyleriyle entegre edildiği bölgesel sağlık ekosistemleri kurulması çağrısında bulundu. Bu model, yabancı hastanın yalnızca ameliyat olmasını değil, operasyon sonrası toparlanma ve sağlıklı yaşlanma sürecini o bölgede geçirmesini amaçlıyor.</p>

<blockquote>
  <strong>Türkiye İçin Çıkarım:</strong> Sağlık turizmini İstanbul ve Antalya dışındaki Anadolu şehirlerine (Bursa, Denizli, Samsun, Kayseri) yaymak isteyen Türkiye için Filipinler'in bölgesel teşvik ve ekosistem modeli dikkatle izlenmelidir. Ancak unutulmamalıdır ki Filipinler'in duyurusu bir yatırım çağrısıdır, henüz gerçekleşmiş sermaye girişi değildir.
</blockquote>
`
  },
  {
    slug: 'saglik-turizminde-tek-ulkeye-bagimlilik-riski-sarawakin-yuzde-70-endonezya-dersi',
    title: 'Sağlık Turizminde Tek Ülkeye Bağımlılık Riski: Sarawak\'ın %70 Endonezya Dersi',
    spot: 'Borneo Global Meditourism Congress sırasında Malezya Sarawak eyaletinde sağlık turistlerinin %70\'inin Endonezya\'dan geldiği açıklandı; tek merkezli yönetim önerildi.',
    category: 'dunya',
    contentType: 'haber',
    country: 'Malezya',
    region: 'Asya',
    authorId: 'kaan-karakas',
    publishedAt: '2026-10-19T08:25:00.000Z',
    readingTime: 4,
    isHeadline: false,
    isSecondaryHeadline: false,
    isEditorPick: false,
    featuredImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Malezya sağlık tesisleri ve medikal turizm koordinasyon süreçleri.',
    imageSource: 'The Borneo Post',
    tags: ['Sarawak', 'Malezya', 'Endonezya', 'Pazar Bağımlılığı', 'Veri Yönetimi', 'Koordinasyon'],
    sources: [
      {
        name: 'The Borneo Post — 14 Ekim',
        url: 'https://www.theborneopost.com/2026/10/14/central-body-needed-to-coordinate-long-term-healthcare-tourism/',
        isOfficial: false
      }
    ],
    seoTitle: 'Sarawak Sağlık Turizminde Tek Ülkeye Bağımlılık Riski',
    seoDescription: 'Sarawak\'ta sağlık turistlerinin %70\'i Endonezya\'dan. Kaynak pazar bağımlılığı ve merkezî yönetim ihtiyacı.',
    content: `
<p>Malezya'nın Sarawak eyaletinde düzenlenen <strong>Borneo Global Meditourism Congress</strong> kapsamında yapılan sunumlarda, bölgenin medikal turizm yapısına ilişkin dikkat çekici veriler paylaşıldı. Resmî ve sektörel yetkililer, eyalete gelen yabancı hastaların yaklaşık <strong>%70'inin tek bir ülkeden (Endonezya)</strong> kaynaklandığını belirtti.</p>

<h2>Veri dağınıklığı ve tek koordinasyon merkezi ihtiyacı</h2>
<p>Kongrede söz alan uzmanlar, özel hastanelerin birbirinden bağımsız yürüttüğü hasta kayıt sistemlerinin veri takibini zorlaştırdığını belirterek eyalet çapında tüm hastaneleri, sigorta şirketlerini ve acenteleri birbirine bağlayan merkezî bir koordinasyon organının kurulması gerektiğini savundu.</p>

<blockquote>
  <strong>Stratejik Uyarı:</strong> Bir destinasyonun hasta hacminin ezici çoğunlukla tek bir ülkeye bağımlı olması; ekonomik krizler, kur dalgalanmaları veya sınır politikası değişikliklerinde ani çöküş riskini beraberinde getirir. Türkiye'nin de belirli branşlarda (saç ekiminde Körfez ülkeleri, diş hekimliğinde İngiltere) yaşadığı yoğunlaşma riskine karşı pazar çeşitlendirmesi şarttır.
</blockquote>
`
  },
  {
    slug: 'ozel-hastaneler-2027ye-hangi-sorularla-giriyor-ruhsat-kadro-ve-kapasite-gundemi',
    title: 'Özel Hastaneler 2027\'ye Hangi Sorularla Giriyor? Ruhsat, Kadro ve Kapasite Gündemi',
    spot: 'Özel Hastaneler Platformu Derneği\'nin 13. Sağlık Zirvesi Ankara\'da toplandı. Sağlık Bakanı ve sektör temsilcileri mevzuat, planlama ve kadro sorunlarını tartıştı.',
    category: 'gundem',
    contentType: 'haber',
    country: 'Türkiye',
    region: 'Orta Doğu',
    authorId: 'av-elif-demir',
    publishedAt: '2026-10-19T08:20:00.000Z',
    readingTime: 4,
    isHeadline: false,
    isSecondaryHeadline: false,
    isEditorPick: false,
    featuredImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80',
    imageCaption: '13. Sağlık Zirvesi Ankara oturumu.',
    imageSource: 'Özel Hastaneler Platformu Derneği',
    tags: ['Özel Hastaneler Platformu', 'Sağlık Zirvesi', 'Mevzuat', 'Sağlık Bakanlığı', 'Kapasite', 'Kadro'],
    sources: [
      {
        name: 'Sağlık Zirvesi Resmî Sayfası',
        url: 'https://www.saglikzirvesi.net/',
        isOfficial: false
      },
      {
        name: 'Sağlık Aktüel 16 Ekim Haberi',
        url: 'https://www.saglikaktuel.com/saglik-sektoru-haberleri.htm',
        isOfficial: false
      }
    ],
    seoTitle: 'Özel Hastaneler 13. Sağlık Zirvesi Ankara\'da Gerçekleşti',
    seoDescription: 'Özel hastaneler 2027 yılına ruhsat, hekim kadrosu ve kapasite planlama başlıklarıyla hazırlanıyor.',
    content: `
<p>Özel Hastaneler Platformu Derneği tarafından her yıl düzenlenen ve sağlık sektörünün en geniş katılımlı buluşmalarından biri olan <strong>13. Sağlık Zirvesi</strong>, 15–16 Ekim 2026 tarihlerinde Ankara'da gerçekleştirildi. Zirveye Sağlık Bakanı, Sosyal Güvenlik Kurumu (SGK) yöneticileri, kamu bürokratları ve Türkiye'nin dört bir yanından özel hastane yöneticileri katıldı.</p>

<h2>2027 planlamasında öne çıkan başlıklar</h2>
<p>Zirvede özel sağlık kuruluşlarının hekim kadrosu devirleri, branş bazlı planlama kısıtlamaları, özel hastane ruhsatlandırma süreçleri ve uluslararası sağlık turizmi yetki belgelerine ilişkin güncel uygulama sorunları ele alındı. Özel sektör temsilcileri, planlama kurallarının yabancı hasta çeken merkezlerin dinamik ihtiyaçlarına uyarlanması gerektiğini dile getirdi.</p>

<blockquote>
  <strong>Mevzuat Notu:</strong> Zirvede yapılan görüşmeler sektörün talep ve değerlendirmelerini yansıtmaktadır. Toplantı yapılmış olması kendiliğinden yürürlükteki özel hastaneler yönetmeliğinin değiştiği anlamına gelmez. Olası mevzuat değişiklikleri Resmî Gazete üzerinden takip edilmelidir.
</blockquote>
`
  },
  {
    slug: 'mardin-saglik-turizmine-yoneliyor-destinasyonun-once-hangi-altyapiya-ihtiyaci-var',
    title: 'Mardin Sağlık Turizmine Yöneliyor: Destinasyonun Önce Hangi Altyapıya İhtiyacı Var?',
    spot: 'Mardin turizmini 12 aya yaymak amacıyla sağlık ve kongre turizmi projeleri gündeme taşındı; Dicle Kalkınma Ajansı iş birliğiyle yeni modeller araştırılıyor.',
    category: 'pazarlar',
    contentType: 'haber',
    country: 'Türkiye',
    region: 'Orta Doğu',
    authorId: 'kaan-karakas',
    publishedAt: '2026-10-19T08:15:00.000Z',
    readingTime: 3,
    isHeadline: false,
    isSecondaryHeadline: false,
    isEditorPick: false,
    featuredImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Tarihi Mardin silueti ve turizm hareketliliği.',
    imageSource: 'TurizmLOG',
    tags: ['Mardin', 'Kış Turizmi', 'Kongre Turizmi', 'DİKA', 'Güneydoğu', 'Sağlık Turizmi'],
    sources: [
      {
        name: 'TurizmLOG — 18 Ekim',
        url: 'https://www.turizmlog.com/haber/mardin-kis-turizmi-saglik-kongre-projeleri',
        isOfficial: false
      }
    ],
    seoTitle: 'Mardin Sağlık ve Kongre Turizmiyle Sezonu 12 Aya Yaymak İstiyor',
    seoDescription: 'Mardin turizm sektörü kış aylarında sağlık turizmi ve kongre projeleriyle yabancı ziyaretçi hedefliyor.',
    content: `
<p>Kültür, inanç ve tarih turizminin önemli merkezlerinden Mardin'de sektör temsilcileri, turizm sezonunu ilkbahar ve sonbahar ayları dışındaki kış dönemine de yayabilmek adına sağlık turizmi ve kongre organizasyonlarına yöneliyor. Dicle Kalkınma Ajansı (DİKA) iş birliğiyle hazırlanan eylem planları yerel basına yansıdı.</p>

<h2>Komşu ülkeler ve sınır ötesi hasta potansiyeli</h2>
<p>Mardin'in Suriye ve Irak sınırına yakın konumu, bölgedeki hastaneler ve tıp merkezleri için özellikle göz, diş, fizik tedavi ve estetik cerrahi branşlarında önemli bir potansiyel sunuyor. Ancak sektör uzmanları, sağlık turizminin gelişmesi için öncelikle yetkili aracı kuruluş sayısının artırılması, çok dilli sağlık personeli istihdamı ve sınır kapılarında medikal geçiş kolaylıklarının sağlanması gerektiğine işaret ediyor.</p>

<blockquote>
  <strong>Doğrulama Notu:</strong> Açıklanan hedefler şu an için bir niyet ve proje taslağı niteliğindedir. Somut tesis yatırımı, onaylanmış bütçe veya açılış takvimi henüz doğrulanmamıştır.
</blockquote>
`
  },
  {
    slug: 'bankalar-saglik-hizmetinin-dagitim-kanalina-donusuyor-concierge-modeli',
    title: 'Bankalar Sağlık Hizmetinin Dağıtım Kanalına Dönüşüyor: Concierge Modeli Sağlık Turizmine Uyarlanabilir mi?',
    spot: 'Filipinler\'de Security Bank ve St. Luke\'s Medical Center, varlık yönetimi müşterilerine özel kişiselleştirilmiş sağlık concierge hizmeti başlattı.',
    category: 'dunya',
    contentType: 'analiz',
    country: 'Filipinler',
    region: 'Asya',
    authorId: 'dr-selim-yilmaz',
    publishedAt: '2026-10-19T08:10:00.000Z',
    readingTime: 4,
    isHeadline: false,
    isSecondaryHeadline: false,
    isEditorPick: false,
    featuredImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Finans ve sağlık hizmetleri entegrasyonu.',
    imageSource: 'BusinessMirror',
    tags: ['Concierge Sağlık', 'Özel Bankacılık', 'St Lukes', 'Filipinler', 'Finans ve Sağlık', 'İş Modeli'],
    sources: [
      {
        name: 'BusinessMirror — 19 Ekim',
        url: 'https://businessmirror.com.ph/2026/10/19/lender-backs-concierge-services-for-saint-lukes-patients/',
        isOfficial: false
      }
    ],
    seoTitle: 'Bankalar Sağlık Concierge Hizmetlerine Giriyor: Sağlık Turizmine Etkisi',
    seoDescription: 'Security Bank ve St. Luke\'s ortaklığı gösteriyor ki finans kurumları sağlık hizmetlerinin yeni dağıtım kanalı oluyor.',
    content: `
<p>Özel bankacılık ve varlık yönetimi alanındaki finans devleri, üst segment müşterilerine sundukları ayrıcalıklar arasına üst düzey sağlık hizmetlerini ekliyor. Filipinler'in önde gelen finans kuruluşlarından Security Bank ile ülkenin tanınmış sağlık grubu St. Luke's Medical Center arasında 19 Ekim'de duyurulan ortaklık, bunun somut bir örneğini oluşturdu.</p>

<h2>Varlık yönetiminden hastane kapısına: Kişiselleştirilmiş medikal asistanlık</h2>
<p>Anlaşma kapsamında bankanın özel bankacılık müşterilerine St. Luke's hastanelerinde öncelikli randevu, özel uzman hekim yönlendirmesi, hızlı tetkik planlaması ve seçkin check-up paketleri sunulacak. Hasta için tüm bürokrasiyi tek bir "sağlık concierge" görevlisi yönetecek.</p>

<blockquote>
  <strong>Sağlık Turizmi İçin Ders:</strong> Bu iş birliği doğrudan bir uluslararası hasta yönlendirme protokolü olmasa da sağlık turizminin geleceğine ışık tutmaktadır. Yabancı yüksek gelirli hastaların kazanımında lüks turizm acentaları yerine yabancı özel bankalar, varlık yöneticileri ve aile ofisleri (family offices) ile kurulacak concierge modelleri Türkiye için yüksek katma değerli bir fırsat alanıdır.
</blockquote>
`
  },
  {
    slug: 'saglik-turizmi-yatirim-bulusmalari-somut-projeye-nasil-donusur-ankara',
    title: 'Sağlık Turizmi Yatırım Buluşmaları Somut Projeye Nasıl Dönüşür?',
    spot: 'Ankara\'da SATKOF ve USTKON öncülüğünde uluslararası sağlık turizmi, sağlık teknolojileri ve yatırım fırsatlarını değerlendiren geniş katılımlı bir toplantı gerçekleştirildi.',
    category: 'etkinlikler',
    contentType: 'haber',
    country: 'Türkiye',
    region: 'Orta Doğu',
    authorId: 'kaan-karakas',
    publishedAt: '2026-10-19T08:05:00.000Z',
    readingTime: 3,
    isHeadline: false,
    isSecondaryHeadline: false,
    isEditorPick: false,
    featuredImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Ankara\'da sağlık turizmi yatırım ve teknoloji buluşması.',
    imageSource: 'Ege360 / SATKOF',
    tags: ['Ankara', 'SATKOF', 'USTKON', 'Sağlık Yatırımı', 'Sağlık Teknolojileri', 'B2B'],
    sources: [
      {
        name: 'Ege360 — 18 Ekim Haber Metni',
        url: 'https://www.ege360.com.tr/bilim-teknoloji/ankarada-uluslararasi-saglik-turizmi-ve-yatirim-bulusmasi-gerceklestirildi/74143',
        isOfficial: false
      }
    ],
    seoTitle: 'Ankara\'da Uluslararası Sağlık Turizmi ve Yatırım Buluşması Yapıldı',
    seoDescription: 'SATKOF ve USTKON öncülüğünde sağlık turizmi ve sağlık teknolojileri yatırım toplantısı Ankara\'da gerçekleşti.',
    content: `
<p>Sağlık Turizmi Konfederasyonu (SATKOF) ile Uluslararası Sağlık Turizmi ve Ticaret Konfederasyonu (USTKON) iş birliğinde 17 Ekim'de Ankara'da düzenlenen toplantıda sağlık turizmi sektör temsilcileri, yabancı yatırım danışmanları ve sağlık bilişimi girişimcileri bir araya geldi. 18 Ekim'de kamuoyuna duyurulan toplantıda Türkiye'nin sağlık yatırımı çekme kapasitesi tartışıldı.</p>

<h2>Proje ortaklıkları ve yatırım ilgisi</h2>
<p>Toplantıda dijital sağlık çözümleri, sınır ötesi hasta koordinasyonu, wellness köyleri ve sağlık teknolojisi ihracatı gibi başlıklar ele alındı. Temsilciler, Türkiye'nin coğrafi avantajını nitelikli teknoloji yatırımlarıyla birleştirmesi gerektiğini ifade etti.</p>

<blockquote>
  <strong>Editoryal Not:</strong> Uluslararası yatırım buluşmaları sektör diplomasisi açısından değerlidir. Ancak toplantılarda dile getirilen yatırım niyetleri ya da proje hedefleri, bağlayıcı sözleşme veya kesinleşmiş sermaye girişi olarak değerlendirilmemelidir.
</blockquote>
`
  },
  {
    slug: 'tip-dunyasi-kurultayi-oncesi-turkiyenin-saglik-teknolojisi-ihracati',
    title: 'Tıp Dünyası Kurultayı Öncesi: Türkiye\'nin Sağlık Teknolojisi İhracatında Hangi Alanlar Öne Çıkıyor?',
    spot: 'TÜSEB, 12. Türk Tıp Dünyası Kurultayı\'nın 29–31 Ekim 2026 tarihlerinde İstanbul\'da gerçekleştirileceğini duyurdu.',
    category: 'etkinlikler',
    contentType: 'haber',
    country: 'Türkiye',
    region: 'Orta Doğu',
    authorId: 'dr-selim-yilmaz',
    publishedAt: '2026-10-19T08:00:00.000Z',
    readingTime: 3,
    isHeadline: false,
    isSecondaryHeadline: false,
    isEditorPick: false,
    featuredImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'TÜSEB Türk Tıp Dünyası Kurultayı hazırlıkları.',
    imageSource: 'TÜSEB',
    tags: ['TÜSEB', 'Türk Tıp Dünyası Kurultayı', 'İstanbul', 'Sağlık Teknolojisi', 'İhracat', 'Biyoteknoloji'],
    sources: [
      {
        name: 'TÜSEB Resmî Duyurusu',
        url: 'https://tuseb.gov.tr/public/index.php/news/the-12th-turkish-medical-world-congress-to-be-held-in-istanbul-on-october-29-31-2026-20261014',
        isOfficial: true
      }
    ],
    seoTitle: '12. Türk Tıp Dünyası Kurultayı İstanbul\'da Yapılacak: TÜSEB Duyurusu',
    seoDescription: 'TÜSEB, 12. Türk Tıp Dünyası Kurultayı\'nın 29–31 Ekim tarihlerinde İstanbul\'da toplanacağını açıkladı.',
    content: `
<p>Türkiye Sağlık Enstitüleri Başkanlığı (TÜSEB), tıp dünyasının küresel Türk hekim ve bilim insanlarını bir araya getiren en köklü organizasyonlarından <strong>12. Türk Tıp Dünyası Kurultayı</strong>nın 29–31 Ekim 2026 tarihlerinde İstanbul'da yapılacağını 14 Ekim'de duyurdu.</p>

<h2>Bilimsel araştırma, biyoteknoloji ve uluslararası iş birlikleri</h2>
<p>Kurultayda genom projeleri, biyoteknoloji, aşı ve ilaç AR-GE çalışmaları, yapay zekâ tabanlı klinik tanı sistemleri ve Türk diasporasındaki hekimlerin Türkiye ile bilimsel köprüleri ele alınacak. Kurultay, sağlık teknolojisi ihracatı ve yüksek nitelikli uluslararası tedavi protokollerinin geliştirilmesi açısından sektörün ileriye dönük en önemli bilimsel takvim maddesi konumunda.</p>

<blockquote>
  <strong>Takvim Notu:</strong> Bu duyuru ileriye dönük bir bilimsel kongre takvimidir; bu haftanın gerçekleşmiş bir ticari yatırım veya hasta sonucu haberi değildir.
</blockquote>
`
  },
  {
    slug: 'saglik-turizmi-radari-12-19-ekim-2026',
    title: 'Sağlık Turizmi Radarı | 12–19 Ekim 2026',
    spot: 'Pamukkale\'nin İskandinav tanıtımı, telepatoloji yönergesi, özel hastane lisansları, CureMeAbroad ve dünyadan tüm gelişmeler: haftanın kaynaklı editoryal özeti.',
    category: 'analiz',
    contentType: 'analiz',
    country: 'Türkiye',
    region: 'Orta Doğu',
    authorId: 'editorial',
    publishedAt: '2026-10-19T07:55:00.000Z',
    readingTime: 9,
    isHeadline: false,
    isSecondaryHeadline: false,
    isEditorPick: true,
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Sağlık Turizmi Radarı haftalık editoryal değerlendirme masası.',
    imageSource: 'Sağlık Turizmi Radarı',
    tags: ['Sağlık Turizmi', 'Haftalık Radar', '12–19 Ekim 2026', 'Editoryal Radar', 'Türkiye'],
    sources: [
      {
        name: 'Pamukkale Üniversitesi resmî açıklaması',
        url: 'https://haber.pau.edu.tr/Haber/pamukkale-termal-rehabilitasyon-merkezi-pautermnin-saglik-turizmi-potansiyeli-iskandinav-basin-heyetine-tanitildi',
        isOfficial: true
      },
      {
        name: 'SHGM resmî duyuru ve yönerge bağlantıları',
        url: 'https://shgm.saglik.gov.tr/TR-121585/dijital-patoloji-ve-telepatoloji-uygulamalari-hakkinda-yonerge.html',
        isOfficial: true
      },
      {
        name: 'Sağlık Bakanlığı duyurular arşivi',
        url: 'https://www.saglik.gov.tr/TR,11693/duyurular.html',
        isOfficial: true
      },
      {
        name: 'Ondokuz Mayıs Üniversitesi resmî haberi',
        url: 'https://www.omu.edu.tr/tr/icerik/rektorluk/rektor-aydin-uluslararasi-3-samsun-ikiztepe-saglik-zirvesi-ve-medikal-fuarinin',
        isOfficial: true
      },
      {
        name: 'Azerbaycan Devlet Turizm Ajansı resmî duyurusu',
        url: 'https://www.tourism.gov.az/az/news/azerbaycanin-saglamliq-turizmi-potensiali-samsunda-teqdim-olunub',
        isOfficial: true
      },
      {
        name: 'Zirve resmî sayfası',
        url: 'https://www.saglikzirvesi.net/',
        isOfficial: false
      },
      {
        name: 'TurizmLOG, 18 Ekim',
        url: 'https://www.turizmlog.com/haber/mardin-kis-turizmi-saglik-kongre-projeleri',
        isOfficial: false
      },
      {
        name: 'TÜSEB duyurusu, 14 Ekim',
        url: 'https://tuseb.gov.tr/public/index.php/news/the-12th-turkish-medical-world-congress-to-be-held-in-istanbul-on-october-29-31-2026-20261014',
        isOfficial: true
      },
      {
        name: 'The Borneo Post, 14 Ekim',
        url: 'https://www.theborneopost.com/2026/10/14/central-body-needed-to-coordinate-long-term-healthcare-tourism/',
        isOfficial: false
      },
      {
        name: 'BusinessMirror, 14 Ekim',
        url: 'https://businessmirror.com.ph/2026/10/14/dot-seeks-more-foreign-investments-in-health-tourism/',
        isOfficial: false
      },
      {
        name: 'BusinessMirror, 19 Ekim',
        url: 'https://businessmirror.com.ph/2026/10/19/lender-backs-concierge-services-for-saint-lukes-patients/',
        isOfficial: false
      }
    ],
    seoTitle: 'Sağlık Turizmi Radarı | 12–19 Ekim 2026 Haftalık Bülten',
    seoDescription: 'Haftalık editoryal radar: Pamukkale İskandinav atağı, telepatoloji yönergesi, lisanslar ve küresel sağlık turizmi.',
    content: `
<h2>Sağlık Turizmi Radarı — 12–19 Ekim 2026</h2>
<p><strong>Tarama kesiti:</strong> 19 Ekim 2026 sabahı, Türkiye saati. <strong>Editoryal yaklaşım:</strong> Haber, proje, açıklama, düzenleme ve henüz gerçekleşmemiş hedef birbirinden ayrılmıştır. Her haber için özgün yayın açısı ve kaynak verilmiştir. Bu dosya haber metinlerinin kopyası değildir.</p>

<h2>Haftanın genel görünümü</h2>
<p>Bu haftanın Türkiye gündeminde üç gelişme öne çıktı: Pamukkale'nin İskandinav basınına termal rehabilitasyon üzerinden tanıtılması, Sağlık Bakanlığının dijital patoloji/telepatoloji yönergesi ve Samsun'da sağlık teknolojileriyle sağlık turizmini birleştiren uluslararası zirve. Küresel gündemde ise Hindistan merkezli bir sağlık turizmi girişiminin kaynak ülkelerde fiziksel danışma noktaları kurma planı, Filipinler'in sağlık ve wellness yatırımı çağrısı ve Malezya Sarawak'ta merkezî koordinasyon ihtiyacı öne çıktı.</p>

<h2>Haftanın öncelikli 9 gelişmesi</h2>
<div class="overflow-x-auto my-6">
  <table class="w-full text-left border-collapse border border-slate-200 text-sm">
    <thead>
      <tr class="bg-slate-100 text-slate-800">
        <th class="p-3 border border-slate-200">Sıra</th>
        <th class="p-3 border border-slate-200">Gelişme</th>
        <th class="p-3 border border-slate-200">Editoryal Değer</th>
        <th class="p-3 border border-slate-200">Durum</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="p-2 border border-slate-200">1</td><td class="p-2 border border-slate-200">Pamukkale'nin İskandinav basınına tanıtımı</td><td class="p-2 border border-slate-200">Doğrudan kaynak pazar stratejisi</td><td class="p-2 border border-slate-200"><span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-semibold">Gerçekleşti</span></td></tr>
      <tr><td class="p-2 border border-slate-200">2</td><td class="p-2 border border-slate-200">Dijital patoloji/telepatoloji yönergesi</td><td class="p-2 border border-slate-200">Somut resmî düzenleme</td><td class="p-2 border border-slate-200"><span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-semibold">Yayımlandı</span></td></tr>
      <tr><td class="p-2 border border-slate-200">3</td><td class="p-2 border border-slate-200">CureMeAbroad 40+ merkez planı</td><td class="p-2 border border-slate-200">Yeni uluslararası hasta kazanım kanalı</td><td class="p-2 border border-slate-200"><span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-xs font-semibold">Mutabakat / Hedef</span></td></tr>
      <tr><td class="p-2 border border-slate-200">4</td><td class="p-2 border border-slate-200">34 özel hastane lisansı</td><td class="p-2 border border-slate-200">Türkiye özel sağlık yatırımları</td><td class="p-2 border border-slate-200"><span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-semibold">Sonuç doğrulanamadı</span></td></tr>
      <tr><td class="p-2 border border-slate-200">5</td><td class="p-2 border border-slate-200">Filipinler sağlık turizmi yatırım çağrısı</td><td class="p-2 border border-slate-200">Bölgesel sağlık ekonomisi</td><td class="p-2 border border-slate-200"><span class="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 text-xs font-semibold">Politika çağrısı</span></td></tr>
      <tr><td class="p-2 border border-slate-200">6</td><td class="p-2 border border-slate-200">Sarawak tek merkez önerisi</td><td class="p-2 border border-slate-200">Veri ve yönetişim modeli</td><td class="p-2 border border-slate-200"><span class="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-xs font-semibold">Öneri</span></td></tr>
      <tr><td class="p-2 border border-slate-200">7</td><td class="p-2 border border-slate-200">Samsun sağlık zirvesi</td><td class="p-2 border border-slate-200">Medikal cihaz + sağlık hizmetleri</td><td class="p-2 border border-slate-200"><span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-semibold">Gerçekleşti</span></td></tr>
      <tr><td class="p-2 border border-slate-200">8</td><td class="p-2 border border-slate-200">Azerbaycan termal turizm sunumu</td><td class="p-2 border border-slate-200">Yakın pazar ve rekabet</td><td class="p-2 border border-slate-200"><span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-semibold">Gerçekleşti</span></td></tr>
      <tr><td class="p-2 border border-slate-200">9</td><td class="p-2 border border-slate-200">Banka–hastane concierge iş birliği</td><td class="p-2 border border-slate-200">Finans + sağlık dağıtımı</td><td class="p-2 border border-slate-200"><span class="px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-xs font-semibold">Ortaklık açıklandı</span></td></tr>
    </tbody>
  </table>
</div>

<h2>Türkiye: haberler, yatırımlar, ortaklıklar ve kamu gündemi</h2>
<ul>
  <li><strong>Pamukkale'den İskandinav pazarına termal rehabilitasyon tanıtımı (16 Ekim):</strong> TGA koordinasyonunda İsveç, Norveç, Danimarka ve Finlandiya'dan sekiz basın mensubu PAÜTERM'i ziyaret etti. Robotik rehabilitasyon ve hidroterapi tanıtıldı.</li>
  <li><strong>Dijital Patoloji ve Telepatoloji Yönergesi yayımlandı (16 Ekim):</strong> Sağlık Bakanlığı telepatoloji standartlarını belirledi; uluslararası ikinci görüş altyapısı için izlenecek somut düzenleme.</li>
  <li><strong>34 özel hastane lisansının artırma tarihi geldi (13 Ekim):</strong> 11 ilde 34 lisansa ilişkin takvim geride kaldı; resmî sonuç listesi bekleniyor.</li>
  <li><strong>Samsun İkiztepe Sağlık Zirvesi ve Medikal Fuarı (15–18 Ekim):</strong> Medikal cihaz üretimi ile sağlık turizmini buluşturan bölgesel inovasyon zirvesi gerçekleşti.</li>
  <li><strong>Azerbaycan Samsun'da termal potansiyelini tanıttı (16 Ekim):</strong> Naftalan ve İstisu bölgeleri için Türk yatırımcılara çağrı yapıldı.</li>
  <li><strong>Özel sağlık sektörü Ankara'da buluştu (15–16 Ekim):</strong> 13. Sağlık Zirvesi'nde Sağlık Bakanı ve sektör temsilcileri 2027 planlama gündemini değerlendirdi.</li>
  <li><strong>Mardin sağlık ve kongre projelerini değerlendiriyor (18 Ekim):</strong> Kış aylarında turizmi 12 aya yaymak için DİKA iş birliğiyle sağlık turizmi odağa alındı.</li>
  <li><strong>Ankara'da uluslararası sağlık ve yatırım buluşması (17 Ekim):</strong> SATKOF ve USTKON öncülüğünde yeni proje modelleri tartışıldı.</li>
  <li><strong>TÜSEB 12. Türk Tıp Dünyası Kurultayı'nı duyurdu (14 Ekim):</strong> 29–31 Ekim tarihlerinde İstanbul'da biyoteknoloji ve tıp kongresi düzenlenecek.</li>
</ul>

<h2>Dünya gündemi</h2>
<ul>
  <li><strong>CureMeAbroad 40+ fiziksel merkez planlıyor:</strong> Hindistan merkezli medikal seyahat şirketi Avustralya, ABD ve İngiltere'de fiziksel danışma noktaları kurma hedefi açıkladı.</li>
  <li><strong>Filipinler bölgesel yatırım çağrısı:</strong> Cebu, Davao ve Iloilo'da sağlık ve wellness yatırımı için yabancı sermaye davet edildi.</li>
  <li><strong>Sarawak'ta tek koordinasyon merkezi ihtiyacı:</strong> Sağlık turistlerinin %70'inin Endonezya'dan geldiği eyalette dağınık veriye karşı tek merkez önerildi.</li>
  <li><strong>Banka-hastane concierge ortaklığı:</strong> Filipinler'de Security Bank ile St. Luke's lüks sağlık concierge hizmetinde anlaştı.</li>
</ul>

<h2>Mevzuat ve kamu kurumu izleme sonucu</h2>
<ul>
  <li><strong>SHGM:</strong> 16 Ekim'de Dijital Patoloji ve Telepatoloji Uygulamaları Hakkında Yönerge yayımlandı.</li>
  <li><strong>Sağlık Turizmi Daire Başkanlığı:</strong> Görüntülenen en güncel yetki listesi ilanı 5 Ekim tarihlidir; bu hafta yeni liste yayımlanmadı.</li>
  <li><strong>Resmî Gazete:</strong> 17 Ekim'de 2027 sözleşmeli sağlık personeli kararı yer aldı; sağlık turizmi yetki düzenlemesi değildir.</li>
  <li><strong>USHAŞ / HealthTürkiye / Ticaret Bakanlığı:</strong> 12–19 Ekim aralığında sağlık turizmi teşvik/yetki rejimini doğrudan değiştiren yeni duyuru saptanmadı.</li>
</ul>

<h2>Editoryal güvenlik notları</h2>
<ul>
  <li><strong>Haber ile niyet ayrımı:</strong> Mutabakat, yatırım hedefi ve tanıtım toplantısı gerçekleşmiş yatırım olarak sunulmamalıdır.</li>
  <li><strong>Klinik iddia ayrımı:</strong> Termal ve geleneksel uygulamalarda klinik kanıt olmaksızın kesin tedavi vaatleri kurulmamalıdır.</li>
  <li><strong>Mevzuat ayrımı:</strong> Telepatoloji yönergesi yeni bir sağlık turizmi yönetmeliği değildir.</li>
  <li><strong>Veri ayrımı:</strong> Kaynak ülke ve hasta sayıları farklı tanımlarla üretilmiş olabilir.</li>
</ul>
`
  }
];

let added = 0;
for (const art of articlesToInsert) {
  const index = data.articles.findIndex(existing => existing.slug === art.slug);
  if (index >= 0) {
    // Update existing
    data.articles[index] = {
      ...data.articles[index],
      ...art,
      id: data.articles[index].id || `art-radar-2026-10-19-${art.slug}`,
    };
  } else {
    // Insert new
    data.articles.push({
      id: `art-radar-2026-10-19-${art.slug}`,
      status: 'yayimlandi',
      updatedAt: art.publishedAt,
      ...art,
    });
    added++;
  }
}

// Adjust previous headline flags and ensure all have status yayimlandi
data.articles.forEach(article => {
  if (article.id && article.id.includes('2026-10-19')) {
    article.status = 'yayimlandi';
    article.updatedAt = article.publishedAt;
  }
  if (article.slug === 'turkiye-termal-saglik-turizminde-kuzey-avrupaya-aciliyor-pamukkale-tanitim-modeli') {
    article.isHeadline = true;
    article.isSecondaryHeadline = false;
  } else if (
    article.slug === 'turkiyede-telepatoloji-icin-yeni-yonerge-uluslararasi-ikinci-gorus-hizmetleri' ||
    article.slug === '34-yeni-ozel-hastane-lisansinda-sonuc-bekleniyor-yatirim-haritasi'
  ) {
    article.isHeadline = false;
    article.isSecondaryHeadline = true;
  } else if (articlesToInsert.some(item => item.slug === article.slug)) {
    article.isHeadline = false;
    article.isSecondaryHeadline = false;
  } else {
    article.isHeadline = false;
    article.isSecondaryHeadline = false;
  }
});

fs.writeFileSync(storagePath, JSON.stringify(data, null, 2), 'utf8');
console.log(JSON.stringify({ added, updated: articlesToInsert.length - added, total: data.articles.length }));
