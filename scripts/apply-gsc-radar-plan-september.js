const fs = require('fs');
const path = require('path');

const STORAGE_PATH = path.join(__dirname, '..', 'data', 'storage.json');
const rawData = fs.readFileSync(STORAGE_PATH, 'utf8');
const data = JSON.parse(rawData);

console.log('Mevcut makale sayısı:', data.articles.length);

// 1. Yeni Makaleler
const newArticles = [
  {
    id: 'art-radar-2026-turizm-sirketi-farklar',
    slug: 'turizm-sirketi-kurmak-ile-saglik-turizmi-acentesi-kurmak-arasindaki-farklar',
    title: 'Turizm Şirketi Kurmak ile Sağlık Turizmi Acentesi Kurmak Arasındaki Farklar',
    spot: 'Genel seyahat acentası açmak ile uluslararası sağlık turizmi aracı kuruluşu olmak arasındaki yasal, mali ve operasyonel farklar: TÜRSAB A grubu belgesinden USHAŞ yetkilendirmesine 3 sütunlu rehber.',
    category: 'mevzuat',
    contentType: 'mevzuat',
    status: 'yayimlandi',
    authorId: 'av-elif-demir',
    country: 'Türkiye',
    region: 'Türkiye',
    branch: 'Sağlık Turizmi Mevzuatı',
    publishedAt: '2026-09-29T18:00:00.000Z',
    updatedAt: '2026-09-29T18:00:00.000Z',
    readingTime: 6,
    isHeadline: false,
    isSecondaryHeadline: true,
    isEditorPick: true,
    featuredImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Genel turizm şirketi, seyahat acentası ve sağlık turizmi aracı kuruluşu arasındaki yetki ve yükümlülük ayrımı.',
    imageSource: 'Sağlık Turizmi Radarı Araştırma Masası',
    tags: [
      'Turizm Şirketi Nasıl Kurulur',
      'Sağlık Turizmi Acentesi',
      'TÜRSAB',
      'USHAŞ',
      'Yetki Belgesi',
      'Seyahat Acentası',
      'Mevzuat 2026'
    ],
    sources: [
      {
        name: 'TÜRSAB Yeni İşletme Belgesi Başvurusu ve 2026 Bedelleri',
        url: 'https://www.tursab.org.tr/yeni-isletme-belgesi-basvurusu',
        isOfficial: true
      },
      {
        name: 'USHAŞ Aracı Kuruluş Yetkilendirme Esasları',
        url: 'https://www.ushas.gov.tr/araci-kurulus-yetkilendirme/',
        isOfficial: true
      },
      {
        name: '26 Nisan 2025 Tarihli ve 32882 Sayılı Resmî Gazete Yönetmeliği',
        url: 'https://resmigazete.gov.tr/26.04.2025',
        isOfficial: true
      }
    ],
    seoTitle: 'Turizm Şirketi ile Sağlık Turizmi Acentesi Farkları: 2026 Rehberi',
    seoDescription: 'Turizm şirketi nasıl kurulur arayanlar için klasik seyahat acentası ile sağlık turizmi aracı kuruluşu arasındaki ruhsat, TÜRSAB ve USHAŞ yetki farkları.',
    specialFields: {
      mevzuat: {
        neDegisti: [
          'Genel seyahat acentalığı yetkisi ile sağlık turizmi aracılık yetkisi kesin çizgilerle birbirinden ayrılmıştır.',
          'Sağlık turizmi faaliyeti yürütecek acentalar için USHAŞ aracı kuruluş yetki belgesi ve HealthTürkiye entegrasyonu zorunlu kılınmıştır.',
          'TÜRSAB A grubu işletme belgesi tek başına yabancı hasta transfer ve tedavi aracılığı hakkı sağlamaz.'
        ],
        kimleriIlgilendiriyor: [
          'Turizm şirketi ve seyahat acentası kurmak isteyen girişimciler',
          'Mevcut A grubu seyahat acentaları',
          'Sağlık turizmi alanına girmek isteyen turizm profesyonelleri'
        ],
        yururlukTarihi: '26 Nisan 2025',
        resmiKaynakUrl: 'https://www.ushas.gov.tr/araci-kurulus-yetkilendirme/',
        resmiGazeteNo: '32882',
        sektoreEtkisi: 'Yetkisiz sağlık turizmi aracılığı yapan genel turizm şirketlerine yönelik ağır idari yaptırımlar ve denetimler devreye girmiştir.'
      }
    },
    content: `
<div class="p-4 bg-slate-50 border-l-4 border-[#00A6A6] text-sm text-slate-700 mb-6 rounded-r">
  <strong>İlk Ekran Özeti:</strong> "Turizm şirketi nasıl kurulur?" sorusu ile "sağlık turizmi acentesi nasıl kurulur?" sorusu aynı yasal süreci ifade etmez. Sıradan bir turizm şirketi Türk Ticaret Kanunu'na göre kurulurken; bilet, tur ve otel rezervasyonu yapabilmek için Kültür ve Turizm Bakanlığı'ndan <strong>TÜRSAB A Grubu Seyahat Acentası İşletme Belgesi</strong> alınmalıdır. Uluslararası hasta organizasyonu yapabilmek içinse bu belgenin üzerine <strong>USHAŞ Uluslararası Sağlık Turizmi Aracı Kuruluşu Yetki Belgesi</strong> ve HealthTürkiye entegrasyonu eklenmesi şarttır.
</div>

<h2>1. Üç Farklı Statü: Ticari Şirket, Seyahat Acentası ve Sağlık Turizmi Aracı Kuruluşu</h2>
<p>Sektöre adım atmak isteyen girişimcilerin yaptığı en yaygın hata, ticaret sicilinde faaliyet konusuna "sağlık turizmi" veya "turizm" yazdırmanın faaliyete başlamak için yeterli olduğunu varsaymaktır. Türkiye mevzuatında bu ayrım üç kademeli bir yetkilendirme piramidiyle yönetilir:</p>

<div class="overflow-x-auto my-6">
  <table class="min-w-full border border-slate-200 text-sm">
    <thead class="bg-slate-100 text-slate-800 font-semibold">
      <tr>
        <th class="p-3 text-left border">Kriter / Nitelik</th>
        <th class="p-3 text-left border">Genel Ticari Şirket (Ltd. / A.Ş.)</th>
        <th class="p-3 text-left border">A Grubu Seyahat Acentası (TÜRSAB)</th>
        <th class="p-3 text-left border">Sağlık Turizmi Aracı Kuruluşu (USHAŞ)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-slate-700">
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Yetkili Makam</td>
        <td class="p-3 border">Ticaret Sicil Müdürlüğü</td>
        <td class="p-3 border">Kültür ve Turizm Bakanlığı & TÜRSAB</td>
        <td class="p-3 border">USHAŞ & T.C. Sağlık Bakanlığı</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Zorunlu Belge</td>
        <td class="p-3 border">Ticaret Sicil Gazetesi & Vergi Levhası</td>
        <td class="p-3 border">A Grubu Seyahat Acentası İşletme Belgesi</td>
        <td class="p-3 border">Uluslararası Sağlık Turizmi Aracı Kuruluşu Yetki Belgesi</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Yetki Kapsamı</td>
        <td class="p-3 border">Genel ticari mal/hizmet alım-satımı, danışmanlık</td>
        <td class="p-3 border">Uçak bileti, otel rezervasyonu, tur ve transfer</td>
        <td class="p-3 border">Yabancı hastayı yetkili sağlık tesisine yönlendirme, medikal paket, transfer ve konaklama</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Tıbbi Organizasyon Yetkisi</td>
        <td class="p-3 border text-rose-600 font-medium">YASAK (Yetkisiz aracılık cezası)</td>
        <td class="p-3 border text-rose-600 font-medium">YASAK (USHAŞ yetkisi olmadan hasta yönlendirilemez)</td>
        <td class="p-3 border text-emerald-600 font-medium">YETKİLİ (Protokollü sağlık tesisleriyle)</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Sağlık Tesisi Protokolü</td>
        <td class="p-3 border">Gerekmez / Geçersiz</td>
        <td class="p-3 border">Gerekmez</td>
        <td class="p-3 border font-semibold">En az 2 Yetkili Sağlık Tesisi ile Zorunlu</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">2026 Resmî Maliyet Kalemleri</td>
        <td class="p-3 border">Şirket kuruluş harçları (15.000–25.000 TL)</td>
        <td class="p-3 border">TÜRSAB Giriş Aidatı (649.278,99 TL) + Teminat (7.000 TL) + Yıllık Aidat (32.463,96 TL)</td>
        <td class="p-3 border">TÜRSAB maliyetleri + USHAŞ başvuru ve belge bedelleri</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>2. İzin ve Başvuru Sırası Nasıl İlerler?</h2>
<p>Doğrudan sağlık turizmi acentesi kurulamaz; süreç hiyerarşik olarak birbirini takip eden izinlerle tamamlanır:</p>
<ol class="space-y-3">
  <li><strong>1. Adım — Şirket Ana Sözleşmesi:</strong> Limited veya Anonim şirket kurulurken ana sözleşmenin faaliyet amaçları arasına hem seyahat acentalığı faaliyetleri hem de uluslararası sağlık turizmi aracılık hizmetleri açıkça yazılmalıdır.</li>
  <li><strong>2. Adım — TÜRSAB A Grubu İşletme Belgesi:</strong> 1618 sayılı Kanun gereğince Kültür ve Turizm Bakanlığı onaylı A Grubu Seyahat Acentası İşletme Belgesi alınır. 2026 yılı itibarıyla TÜRSAB yeni üye giriş aidatı <strong>649.278,99 TL</strong>, A grubu teminat bedeli ise <strong>7.000 TL</strong>'dir.</li>
  <li><strong>3. Adım — Sağlık Tesisleri ile Protokol:</strong> Sağlık Bakanlığı'ndan uluslararası sağlık turizmi yetki belgesi almış en az iki ayrı sağlık tesisi (hastane, tıp merkezi veya poliklinik) ile karşılıklı protokol imzalanır.</li>
  <li><strong>4. Adım — USHAŞ Dijital Başvurusu:</strong> 26 Nisan 2025 tarihli ve 32882 sayılı Resmî Gazete yönetmeliğinin 5. maddesi uyarınca aracı kuruluş başvurusu USHAŞ'a dijital ortamda yapılır. HealthTürkiye portal entegrasyonu sağlanır.</li>
</ol>

<h2>3. Sık Yapılan Hatalar ve Hukuki Riskler</h2>
<ul>
  <li><strong>"Sadece danışmanlık şirketi kurup hasta getirebiliriz" Yanılgısı:</strong> Yabancı hastaya Türkiye'de sağlık tesisi ayarlamak, randevu organize etmek veya komisyon almak yetki belgesi gerektirir. Belgesiz aracılık faaliyetleri Sağlık Bakanlığı ve Ticaret Bakanlığı denetimlerinde ağır para cezaları ve faaliyet durdurma yaptırımıyla karşılaşır.</li>
  <li><strong>"TÜRSAB belgemiz var, hemen hasta getirebiliriz" Yanılgısı:</strong> A grubu seyahat acentası olmak yalnızca turizm hizmetleri (otel, bilet, rehberlik) yapmaya hak verir; sağlık turizmi aracı kuruluşu yetki belgesi olmadan sağlık tesisleriyle medikal aracılık sözleşmesi yapılamaz.</li>
</ul>

<p>Konuyla ilgili ayrıntılı yol haritası ve başvuru evrakı listesi için <a href="/haber/saglik-turizmi-acentesi-nasil-kurulur" class="text-[#00A6A6] font-semibold hover:underline">Sağlık Turizmi Şirketi / Acentesi Nasıl Kurulur?</a> rehberimizi inceleyebilirsiniz.</p>
`
  },
  {
    id: 'art-radar-2026-bursa-saglik-turizmi-egitimi',
    slug: 'bursa-saglik-turizmi-egitimi-kurslar-sertifika-ve-basvuru',
    title: 'Bursa Sağlık Turizmi Eğitimi: Programlar, Sertifika Türleri ve Başvuru Doğrulama Rehberi',
    spot: 'Bursa\'da sağlık turizmi eğitimi ve sertifika programı arayanlar için rehber: Üniversite SEM programları, resmî duyuru kanalları ve eğitim sertifikasıyla ilgili bilinmesi gereken kritik sınırlar.',
    category: 'mevzuat',
    contentType: 'mevzuat',
    status: 'yayimlandi',
    authorId: 'dr-selim-yilmaz',
    country: 'Türkiye',
    region: 'Marmara',
    branch: 'Eğitim & İnsan Kaynakları',
    publishedAt: '2026-09-29T18:05:00.000Z',
    updatedAt: '2026-09-29T18:05:00.000Z',
    readingTime: 5,
    isHeadline: false,
    isSecondaryHeadline: false,
    isEditorPick: false,
    featuredImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Bursa\'da sağlık turizmi eğitimi, üniversite sürekli eğitim merkezleri ve resmî program doğrulama süreci.',
    imageSource: 'Sağlık Turizmi Radarı Araştırma Masası',
    tags: [
      'Bursa Sağlık Turizmi Eğitimi',
      'Sağlık Turizmi Sertifikası',
      'Uludağ Üniversitesi SEM',
      'BUSAT',
      'Personel Eğitimi',
      'Rehber 2026'
    ],
    sources: [
      {
        name: 'Bursa Uludağ Üniversitesi Sürekli Eğitim Merkezi (ULUSEM)',
        url: 'https://ulusem.uludag.edu.tr/',
        isOfficial: true
      },
      {
        name: 'T.C. Sağlık Bakanlığı Yeni Sağlık Turizmi Yönetmeliği',
        url: 'https://shgmturizmdb.saglik.gov.tr/TR-108367/yeni-saglik-turizmi-yonetmeligi.html',
        isOfficial: true
      }
    ],
    seoTitle: 'Bursa Sağlık Turizmi Eğitimi: Kurs ve Sertifika Doğrulama 2026',
    seoDescription: 'Bursa sağlık turizmi eğitimi ve sertifika programı arayanlar için Uludağ Üniversitesi ULUSEM, BUSAT ve resmî kurs duyurularını doğrulama adımları.',
    specialFields: {
      mevzuat: {
        neDegisti: [
          '2025 Yönetmeliği ile birlikte sağlık turizmi biriminde çalışacak personelin yetkinlik kriterleri ve sertifikalı eğitim standartları güncellendi.',
          'Bursa yerelindeki eğitim iddialarında "Sağlık Bakanlığı onaylı acenta açma yetkisi verir" gibi yanıltıcı ifadelerin geçersiz olduğu teyit edildi.'
        ],
        kimleriIlgilendiriyor: [
          'Bursa ve Güney Marmara\'da sağlık turizmi kariyeri hedefleyen profesyoneller',
          'Bursa\'daki hastane, klinik ve termal tesislerin hasta ilişkileri personeli',
          'Sağlık turizmi acentası kurmayı planlayan girişimciler'
        ],
        yururlukTarihi: '29 Eylül 2026',
        resmiKaynakUrl: 'https://ulusem.uludag.edu.tr/',
        sektoreEtkisi: 'Kişisel eğitim sertifikaları ile kurumsal yetki belgelerinin ayrımı netleşmiş; nitelikli istihdam için üniversite onaylı eğitimlerin önemi artmıştır.'
      }
    },
    content: `
<div class="p-4 bg-amber-50 border-l-4 border-amber-500 text-sm text-amber-900 mb-6 rounded-r">
  <strong>Editoryal ve Resmî Doğrulama Notu (Eylül 2026):</strong> Bursa Uludağ Üniversitesi müfredatında sağlık turizmi dersleri ve geçmiş dönemlerde farklı sertifika modülleri yer almaktadır. Ancak Bursa yerelinde şu anda doğrudan kayıt alan ve "Sağlık Bakanlığı Onaylı Yetki Verir" iddiası taşıyan resmî bir halka açık program bulunmamaktadır. Kişisel eğitim sertifikaları yalnızca mesleki bilgi ve özgeçmiş kazandırır; klinik veya acenta açma yetkisi sağlamaz.
</div>

<h2>1. Bursa'da Sağlık Turizmi Ekosistemi ve Eğitim İhtiyacı</h2>
<p>Bursa; tarihi termal kaynakları, gelişmiş kamu ve özel hastane altyapısı, Bursa Sağlık Turizmi Derneği (BUSAT) gibi sivil toplum örgütlenmeleriyle Türkiye'nin en köklü sağlık turizmi destinasyonlarından biridir. Şehirde medikal ve termal turizmin büyümesiyle birlikte çok dilli hasta koordinatörü, operasyon sorumlusu ve medikal pazarlama uzmanı ihtiyacı belirgin biçimde artmıştır.</p>

<p>Bu ihtiyaç, internet üzerinde "Bursa sağlık turizmi eğitimi" ve "sağlık turizmi sertifikası Bursa" aramalarını tetiklemektedir. Ancak kurs seçimi yaparken aşağıdaki resmî gerçeklerin bilinmesi gerekir:</p>

<h2>2. Kurs Arayanlar İçin Doğrulama Tablosu</h2>
<div class="overflow-x-auto my-6">
  <table class="min-w-full border border-slate-200 text-sm">
    <thead class="bg-slate-100 text-slate-800 font-semibold">
      <tr>
        <th class="p-3 text-left border">Kurum / Sağlayıcı Türü</th>
        <th class="p-3 text-left border">Resmî Doğrulama Kanalı</th>
        <th class="p-3 text-left border">Verilen Belge Türü</th>
        <th class="p-3 text-left border">Yasal Geçerlilik Sınırı</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-slate-700">
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Bursa Uludağ Üniversitesi (ULUSEM)</td>
        <td class="p-3 border"><a href="https://ulusem.uludag.edu.tr/" target="_blank" rel="noopener noreferrer" class="text-[#00A6A6] underline">ulusem.uludag.edu.tr</a></td>
        <td class="p-3 border">Üniversite Onaylı Katılım / Başarı Sertifikası</td>
        <td class="p-3 border">Özgeçmiş ve istihdamda yetkinlik belgesi; kurumsal yetki belgesi yerine geçmez.</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">BUSAT ve Sektörel Dernekler</td>
        <td class="p-3 border">Dernek resmî duyuru kanalları</td>
        <td class="p-3 border">Seminer ve Çalıştay Katılım Belgesi</td>
        <td class="p-3 border">Sektörel ağ ve bilgi edinimi sağlar; yasal ruhsat niteliği yoktur.</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Özel Eğitim Danışmanlık Firmaları</td>
        <td class="p-3 border">MEB veya Üniversite İş Birliği Protokolü</td>
        <td class="p-3 border">Özel Kurs Sertifikası</td>
        <td class="p-3 border text-rose-600 font-medium">"Bu belgeyle acenta açabilirsiniz" vaadi tamamen gerçek dışıdır.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>3. Kurs Seçerken Dikkat Edilmesi Gereken 5 Kural</h2>
<ol class="space-y-3">
  <li><strong>E-Devlet Doğrulaması:</strong> Alacağınız eğitim sertifikasının e-Devlet kapısı üzerinden sorgulanabilir üniversite onaylı belge olup olmadığını kayıt öncesinde teyit edin.</li>
  <li><strong>Eğitmen Yetkinliği:</strong> Eğitimi veren kadronun fiilen sağlık turizmi mevzuatı, uluslararası hasta operasyonu ve sağlık hukuku tecrübesi olup olmadığını kontrol edin.</li>
  <li><strong>Müfredat İçeriği:</strong> Kurs içeriğinde 26 Nisan 2025 tarih ve 32882 sayılı güncel yönetmelik, USHAŞ yetkilendirmesi, TÜSKA akreditasyonu ve KVKK/GDPR uyum modüllerinin yer aldığından emin olun.</li>
  <li><strong>Yanıltıcı Vaatlere Kanmayın:</strong> Hiçbir eğitim kurumu Sağlık Bakanlığı yetki belgesi düzenleyemez. Yetki belgesi yalnızca şartları sağlayan tüzel kuruluşlara resmî makamlarca verilir.</li>
  <li><strong>Yabancı Dil Önceliği:</strong> Bursa'daki sağlık tesislerinde veya acentalarda istihdam edilmek için sertifikadan önce İngilizce, Arapça veya Rusça dillerinde belgelenebilir konuşma yetkinliği aranmaktadır.</li>
</ol>

<p>Sertifika türleri arasındaki farkları öğrenmek için <a href="/haber/saglik-turizmi-sertifikasi-nasil-alinir-sertifika-ve-yetki-belgesi-farki" class="text-[#00A6A6] font-semibold hover:underline">Sağlık Turizmi Sertifikası Nasıl Alınır?</a> rehberimize göz atabilirsiniz.</p>
`
  }
];

// 2. Beş Ana Makalenin ve İki Destekleyici Makalenin Güncellenmesi
const articleUpdates = {
  // A. Yetki Belgesi Şartları (P1)
  'art-master-13': {
    title: 'Sağlık Turizmi Yetki Belgesi Şartları (2026): Sağlık Tesisi ve Aracı Kuruluş Kontrol Listesi',
    authorId: 'av-elif-demir',
    category: 'mevzuat',
    contentType: 'mevzuat',
    seoTitle: 'Sağlık Turizmi Yetki Belgesi Şartları: 2026 Güncel Kontrol Listesi',
    seoDescription: '2026 sağlık turizmi yetki belgesi şartları: Sağlık tesisleri için Bakanlık, aracı kuruluşlar için USHAŞ başvuru kriterleri, evrak listesi ve resmî ücretler.',
    updatedAt: '2026-09-29T18:10:00.000Z',
    sources: [
      {
        name: 'Resmî Gazete 26 Nisan 2025 / 32882 Sayılı Yönetmelik',
        url: 'https://resmigazete.gov.tr/26.04.2025',
        isOfficial: true
      },
      {
        name: 'Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü Yeni Yönetmelik Duyurusu',
        url: 'https://shgmturizmdb.saglik.gov.tr/TR-108367/yeni-saglik-turizmi-yonetmeligi.html',
        isOfficial: true
      },
      {
        name: 'USHAŞ Aracı Kuruluş Yetkilendirme Başvuru Kılavuzu',
        url: 'https://www.ushas.gov.tr/araci-kurulus-yetkilendirme/',
        isOfficial: true
      },
      {
        name: 'Sağlık Bakanlığı 2026 Sağlık Tesisi Yetki Belgesi Bedeli Duyurusu (18.604 TL)',
        url: 'https://shgmturizmdb.saglik.gov.tr/TR-115047/saglik-turizmi-saglik-tesisi-yetki-belgesi-bedeli-ile-ilgili-duyuru.html',
        isOfficial: true
      }
    ],
    content: `
<div class="p-4 bg-slate-50 border-l-4 border-[#00A6A6] text-sm text-slate-700 mb-6 rounded-r">
  <strong>İlk Ekran Doğrudan Yanıtı:</strong> Sağlık turizmi yetki belgesi şartları, başvuran kuruluşun <strong>sağlık tesisi</strong> veya <strong>aracı kuruluş</strong> olmasına göre tamamen iki ayrı yasal kanaldan yürütülür. 26 Nisan 2025 tarihli ve 32882 sayılı Resmî Gazete'de yayımlanan güncel yönetmelik uyarınca:
  <ul class="list-disc pl-5 mt-2 space-y-1">
    <li><strong>Sağlık Tesisi Yetki Belgesi:</strong> T.C. Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü (SHGM) tarafından incelenir ve onaylanır.</li>
    <li><strong>Aracı Kuruluş Yetki Belgesi:</strong> Yönetmeliğin 5. maddesi gereğince doğrudan <strong>USHAŞ (Uluslararası Sağlık Hizmetleri A.Ş.)</strong> tarafından dijital ortamda yürütülür.</li>
  </ul>
  Aşağıdaki kontrol tablosunda güncel mevzuatın hangi kriteri kime yüklediğini satır satır inceleyebilirsiniz.
</div>

<h2>1. Kurum Türüne Göre 2026 Resmî Kriter ve Kontrol Listesi</h2>
<p>Eski 2017 yönetmeliği (30123 sayılı metin) bütünüyle yürürlükten kaldırılmıştır. 2026 yılı itibarıyla yürürlükte olan 32882 sayılı yönetmelik ve USHAŞ esaslarına göre aranan zorunlu koşullar şunlardır:</p>

<div class="overflow-x-auto my-6">
  <table class="min-w-full border border-slate-200 text-sm">
    <thead class="bg-slate-100 text-slate-800 font-semibold">
      <tr>
        <th class="p-3 text-left border">Başvuran Türü</th>
        <th class="p-3 text-left border">Şart / Kriter</th>
        <th class="p-3 text-left border">İspat Belgesi</th>
        <th class="p-3 text-left border">Resmî Dayanak</th>
        <th class="p-3 text-left border">Son Kontrol</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-slate-700">
      <tr>
        <td class="p-3 font-semibold border bg-slate-50" rowspan="5">Sağlık Tesisi<br><span class="text-xs font-normal text-slate-500">(Hastane, Tıp Merkezi, Poliklinik, Muayenehane)</span></td>
        <td class="p-3 border">Faaliyet İzin Belgesi / Ruhsat</td>
        <td class="p-3 border">Geçerli İl Sağlık Müdürlüğü ruhsat sureti</td>
        <td class="p-3 border">Yönetmelik Ek-1</td>
        <td class="p-3 border text-xs">Eylül 2026</td>
      </tr>
      <tr>
        <td class="p-3 border">Uluslararası Sağlık Turizmi Birimi</td>
        <td class="p-3 border">Birim onay yazısı ve sorumlu hekim görevlendirmesi</td>
        <td class="p-3 border">Yönetmelik Madde 6</td>
        <td class="p-3 border text-xs">Eylül 2026</td>
      </tr>
      <tr>
        <td class="p-3 border">Yabancı Dil Yeterliliği</td>
        <td class="p-3 border">Birimde görevli en az 1 personelin onaylı yabancı dil belgesi</td>
        <td class="p-3 border">Yönetmelik Ek-1</td>
        <td class="p-3 border text-xs">Eylül 2026</td>
      </tr>
      <tr>
        <td class="p-3 border">TÜSKA Akreditasyonu veya Kriter Seti</td>
        <td class="p-3 border">Hastaneler/tıp merkezleri için TÜSKA akreditasyon belgesi; poliklinik/muayenehaneler için Bakanlık sertifikasyon uygunluğu</td>
        <td class="p-3 border">Yönetmelik Madde 8</td>
        <td class="p-3 border text-xs">Eylül 2026</td>
      </tr>
      <tr>
        <td class="p-3 border">Bilgi Sistemi & Web Sitesi</td>
        <td class="p-3 border">Bakanlık kayıt sistemine entegre altyapı ve çok dilli bilgilendirici web sitesi</td>
        <td class="p-3 border">Yönetmelik Ek-1</td>
        <td class="p-3 border text-xs">Eylül 2026</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50" rowspan="5">Aracı Kuruluş<br><span class="text-xs font-normal text-slate-500">(Seyahat Acentası)</span></td>
        <td class="p-3 border">A Grubu Seyahat Acentası Belgesi</td>
        <td class="p-3 border">Kültür ve Turizm Bakanlığı işletme belgesi & TÜRSAB sicil kaydı</td>
        <td class="p-3 border">Yönetmelik Madde 5</td>
        <td class="p-3 border text-xs">Eylül 2026</td>
      </tr>
      <tr>
        <td class="p-3 border">Yetkili Sağlık Tesisi Protokolleri</td>
        <td class="p-3 border">Yetkili en az 2 sağlık tesisiyle imzalanmış geçerli protokol</td>
        <td class="p-3 border">USHAŞ Yetkilendirme Esasları</td>
        <td class="p-3 border text-xs">Eylül 2026</td>
      </tr>
      <tr>
        <td class="p-3 border">Yabancı Dil Bilen Personel</td>
        <td class="p-3 border">Yabancı dil yeterliliğini belgeleyen en az 2 tam zamanlı personel</td>
        <td class="p-3 border">Yönetmelik Ek-2 & USHAŞ</td>
        <td class="p-3 border text-xs">Eylül 2026</td>
      </tr>
      <tr>
        <td class="p-3 border">7/24 Kesintisiz Çağrı Altyapısı</td>
        <td class="p-3 border">Çok dilli hasta iletişim, şikayet ve takip sistemi</td>
        <td class="p-3 border">Yönetmelik Ek-2</td>
        <td class="p-3 border text-xs">Eylül 2026</td>
      </tr>
      <tr>
        <td class="p-3 border">HealthTürkiye Portal Entegrasyonu</td>
        <td class="p-3 border">HealthTürkiye aracı kuruluş üyelik onayı</td>
        <td class="p-3 border">USHAŞ Yönergesi</td>
        <td class="p-3 border text-xs">Eylül 2026</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>2. Sektörde Yanlış Bilinen Spekülatif Kriterlerin Düzeltilmesi</h2>
<div class="p-4 bg-rose-50 border border-rose-200 rounded my-4 text-sm text-rose-900">
  <strong>Dikkat:</strong> İnternetteki eski kaynaklarda yer alan bazı kriterler güncel mevzuatla uyumlu değildir:
  <ul class="list-disc pl-5 mt-2 space-y-1">
    <li><strong>"SKS'den kesin 85 alma şartı":</strong> 2025 Yönetmeliği kalite güvencesini yeniden tanımlamıştır. Hastane ve tıp merkezleri için doğrudan TÜSKA akreditasyonu; diğer tesisler için ise Bakanlıkça belirlenen sertifikasyon kriter seti esas alınmaktadır. Katı bir 85 puan barajı tek başına genel kural değildir.</li>
    <li><strong>"YDS B düzeyi / 80 puan mecburiyeti":</strong> Mevzuat belgelenebilir yabancı dil yeterliliği arar (ÖSYM sınavları, uluslararası eşdeğerliği kabul edilen sınavlar veya mütercim-tercümanlık/filoloji diplomaları). Tek bir sınav veya katı 80 puan dayatması yasal metinde yer almaz.</li>
    <li><strong>"7/24 ses kaydı saklama mecburiyeti" ve "WhatsApp API zorunluluğu":</strong> Bunlar operasyonel iyi uygulama tavsiyeleridir; yönetmelikte kesin bir teknik yazılım zorunluluğu olarak yer almaz.</li>
    <li><strong>Acenta Protokolü Dengesi:</strong> Aracı kuruluşun yetki alabilmesi için en az 2 yetkili sağlık tesisiyle protokol yapması ZORUNLUDUR. Ancak bir sağlık tesisinin yetki belgesi alabilmesi için bir acenta ile protokol yapma zorunluluğu YOKTUR; sağlık tesisleri doğrudan kendi yetki belgeleriyle hasta kabul edebilir.</li>
  </ul>
</div>

<h2>3. 2026 Resmî Başvuru Bedelleri</h2>
<ul>
  <li><strong>Sağlık Tesisi Yetki Belgesi Bedeli:</strong> Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü resmî duyurusuna göre 2026 yılı için <strong>18.604 TL</strong> olarak belirlenmiştir.</li>
  <li><strong>Aracı Kuruluş Bedelleri:</strong> USHAŞ başvuru ve belge bedelleri ile Kültür ve Turizm Bakanlığı / TÜRSAB A grubu işletme belgesi üye giriş aidatı (2026 yılı için <strong>649.278,99 TL</strong>) ve teminatı (<strong>7.000 TL</strong>) ayrı kalemlerdir.</li>
</ul>

<h2>4. Ret ve Eksiklik Durumunda Ne Olur?</h2>
<p>Başvuru dosyasında eksik belge bulunması halinde ilgili makam (Bakanlık veya USHAŞ) eksikliklerin giderilmesi için süre tanır. Tanınan sürede giderilmeyen eksikliklerde başvuru işlemden kaldırılır. Yanıltıcı beyan veya sahte evrak sunulması durumunda ise başvuru reddedilerek yasal işlem başlatılır.</p>

<div class="mt-6 pt-4 border-t border-slate-200">
  <p class="text-sm text-slate-600">İlgili Bağlantılar: 
    <a href="/haber/saglik-turizmi-sertifikasi-nasil-alinir-sertifika-ve-yetki-belgesi-farki" class="text-[#00A6A6] font-semibold hover:underline">Sağlık Turizmi Sertifikası ve Yetki Belgesi Farkı</a> | 
    <a href="/haber/saglik-turizmi-acentesi-nasil-kurulur" class="text-[#00A6A6] font-semibold hover:underline">Sağlık Turizmi Şirketi Nasıl Kurulur?</a> | 
    <a href="/haber/saglik-turizmi-yetki-belgesi-olan-kurumlar-nasil-kontrol-edilir" class="text-[#00A6A6] font-semibold hover:underline">Yetki Belgeli Kurumlar Nasıl Sorgulanır?</a>
  </p>
</div>
`
  },

  // B. Sertifika Nasıl Alınır? (P1)
  'art-master-19': {
    title: 'Sağlık Turizmi Sertifikası Nasıl Alınır? Eğitim, Tesis Sertifikası ve Yetki Belgesi Farkı',
    authorId: 'dr-selim-yilmaz',
    category: 'mevzuat',
    contentType: 'mevzuat',
    seoTitle: 'Sağlık Turizmi Sertifikası Nasıl Alınır? 2026 Yetki Belgesi Farkı',
    seoDescription: 'Sağlık turizmi sertifikası nedir, nasıl alınır? Kişisel eğitim sertifikası, sağlık tesisi sertifikasyonu ve resmî yetki belgesi arasındaki temel farklar.',
    updatedAt: '2026-09-29T18:12:00.000Z',
    sources: [
      {
        name: 'T.C. Sağlık Bakanlığı Yeni Sağlık Turizmi Yönetmeliği (26 Nisan 2025 / 32882)',
        url: 'https://shgmturizmdb.saglik.gov.tr/TR-108367/yeni-saglik-turizmi-yonetmeligi.html',
        isOfficial: true
      },
      {
        name: 'USHAŞ Aracı Kuruluş Yetkilendirme Esasları',
        url: 'https://www.ushas.gov.tr/araci-kurulus-yetkilendirme/',
        isOfficial: true
      }
    ],
    content: `
<div class="p-4 bg-slate-50 border-l-4 border-[#00A6A6] text-sm text-slate-700 mb-6 rounded-r">
  <strong>İlk Ekran Net Ayrımı:</strong> "Sağlık turizmi sertifikası nasıl alınır?" sorusu sektörde en çok kavram kargaşası yaşanan alandır. Kullanıcıların aradığı "sertifika" aslında üç tamamen farklı belgeye işaret eder:
  <ol class="list-decimal pl-5 mt-2 space-y-1">
    <li><strong>Uluslararası Sağlık Turizmi Yetki Belgesi:</strong> Kurumlara (hastane, klinik, seyahat acentası) verilen ve sağlık turizmi yapmayı yasal kılan resmî izin belgesidir. Kişilere değil tüzel kurumlara verilir.</li>
    <li><strong>Sağlık Tesisi Kalite Sertifikası / Akreditasyon:</strong> 2025 Yönetmeliği gereğince hastanelerin TÜSKA akreditasyonu; klinik ve muayenehanelerin ise Bakanlık sertifikasyon kriter setine uyumuyla aldığı kurumsal kalite belgesidir.</li>
    <li><strong>Kişisel Eğitim / Katılım Sertifikası:</strong> Üniversitelerin Sürekli Eğitim Merkezleri (SEM) veya akademiler tarafından bireylere verilen mesleki eğitim belgesidir.</li>
  </ol>
  <strong>Kritik Hukuki Kural:</strong> Üniversite veya özel kurum onaylı hiçbir kişisel eğitim sertifikası tek başına klinik açma, acenta kurma veya hasta kabul etme yetkisi VERMEZ.
</div>

<h2>1. "Bu Belgeyle Ne Yapılabilir / Ne Yapılamaz?" Matrisi</h2>
<div class="overflow-x-auto my-6">
  <table class="min-w-full border border-slate-200 text-sm">
    <thead class="bg-slate-100 text-slate-800 font-semibold">
      <tr>
        <th class="p-3 text-left border">Belge Türü</th>
        <th class="p-3 text-left border">Kim Verir?</th>
        <th class="p-3 text-left border">Kime Verilir?</th>
        <th class="p-3 text-left border">Ne Sağlar?</th>
        <th class="p-3 text-left border">Ne Sağlamaz? (Yasal Sınır)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-slate-700">
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Uluslararası Sağlık Turizmi Yetki Belgesi</td>
        <td class="p-3 border">Sağlık Bakanlığı (Tesisler) & USHAŞ (Acentalar)</td>
        <td class="p-3 border">Sağlık Tesisleri ve Seyahat Acentaları</td>
        <td class="p-3 border text-emerald-700 font-medium">Yasal olarak yabancı hasta kabul etme, tedavi etme ve aracılık hakkı</td>
        <td class="p-3 border">Kişilere şahsi ruhsat sağlamaz, yalnızca tüzel kuruluşa bağlıdır.</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Tesis Akreditasyonu / Sertifikasyonu</td>
        <td class="p-3 border">TÜSKA & Sağlık Bakanlığı</td>
        <td class="p-3 border">Ruhsatlı Sağlık Tesisleri</td>
        <td class="p-3 border">Uluslararası kalite güvencesi ve teşvik başvurularında puan üstünlüğü</td>
        <td class="p-3 border">TÜRSAB seyahat acentalığı yetkisi yerine geçmez.</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Kişisel Eğitim Sertifikası</td>
        <td class="p-3 border">Üniversite SEM, TÜRSAB Akademi vb.</td>
        <td class="p-3 border">Bireyler (Doktor, Koordinatör, Personel)</td>
        <td class="p-3 border">Mesleki bilgi, özgeçmiş zenginliği, istihdam önceliği</td>
        <td class="p-3 border text-rose-600 font-semibold">Tek başına acenta kurma, fatura kesme veya klinik açma yetkisi VERMEZ.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>2. "Sertifikayla Acenta veya Şirket Açılır mı?"</h2>
<p>Sektörde en çok istismar edilen iddia budur. Bazı özel eğitim merkezleri "Sağlık Bakanlığı onaylı sağlık turizmi sertifikası ile acenta açabilirsiniz" şeklinde reklam yapmaktadır. <strong>Bu iddia bütünüyle asılsızdır.</strong></p>
<p>Türkiye'de sağlık turizmi acentesi açabilmek için 1618 sayılı Seyahat Acentaları Kanunu uyarınca Kültür ve Turizm Bakanlığı'ndan A Grubu Seyahat Acentası İşletme Belgesi (TÜRSAB üyeliği) ve ardından USHAŞ'tan aracı kuruluş yetki belgesi alınması şarttır. Hiçbir kurs katılım belgesi bu zorunlu yasal izinlerin yerine geçemez.</p>

<h2>3. Personel Eğitimi Nereden Alınır ve Nasıl Doğrulanır?</h2>
<ul>
  <li><strong>Üniversite Sürekli Eğitim Merkezleri (SEM):</strong> Devlet veya vakıf üniversitelerinin SEM müdürlüklerince düzenlenen programlar e-Devlet üzerinden doğrulanabilir sertifika verir.</li>
  <li><strong>Meslek Kuruluşları:</strong> TÜRSAB Akademi ve sağlık derneklerinin sektörel eğitim programları operasyonel bilgi için en güvenilir kanallardır.</li>
  <li><strong>Eğitim Alırken Kontrol Edilecekler:</strong> Eğitmenlerin saha tecrübesi, 2025 Yönetmeliği (32882 sayılı metin) odaklı güncel müfredat ve e-Devlet barkodlu sertifika verilip verilmediği sorgulanmalıdır.</li>
</ul>

<div class="mt-6 pt-4 border-t border-slate-200">
  <p class="text-sm text-slate-600">İlgili Bağlantılar: 
    <a href="/haber/saglik-turizmi-yetki-belgesi-sartlari-2026-guncel-kontrol-listesi" class="text-[#00A6A6] font-semibold hover:underline">2026 Yetki Belgesi Şartları Kontrol Listesi</a> | 
    <a href="/haber/saglik-turizmi-acentesi-nasil-kurulur" class="text-[#00A6A6] font-semibold hover:underline">Sağlık Turizmi Acentesi Nasıl Kurulur?</a>
  </p>
</div>
`
  },

  // C. Acenta / Şirket Kurma (P1)
  'art-master-46': {
    title: 'Sağlık Turizmi Şirketi Nasıl Kurulur? Seyahat Acentası ve Aracı Kuruluş Adımları',
    authorId: 'av-elif-demir',
    category: 'mevzuat',
    contentType: 'mevzuat',
    seoTitle: 'Sağlık Turizmi Şirketi Nasıl Kurulur? 2026 TÜRSAB ve USHAŞ Süreci',
    seoDescription: 'Sağlık turizmi acentesi ve şirketi nasıl kurulur? 2026 TÜRSAB A grubu işletme belgesi bedelleri, USHAŞ aracı kuruluş yetkilendirmesi ve gider tablosu.',
    updatedAt: '2026-09-29T18:14:00.000Z',
    sources: [
      {
        name: 'TÜRSAB Yeni İşletme Belgesi Başvuru ve 2026 Bedelleri',
        url: 'https://www.tursab.org.tr/yeni-isletme-belgesi-basvurusu',
        isOfficial: true
      },
      {
        name: 'USHAŞ Aracı Kuruluş Yetkilendirme Esasları',
        url: 'https://www.ushas.gov.tr/araci-kurulus-yetkilendirme/',
        isOfficial: true
      },
      {
        name: 'Resmî Gazete: 26 Nisan 2025 Tarihli ve 32882 Sayılı Yönetmelik',
        url: 'https://resmigazete.gov.tr/26.04.2025',
        isOfficial: true
      }
    ],
    content: `
<div class="p-4 bg-slate-50 border-l-4 border-[#00A6A6] text-sm text-slate-700 mb-6 rounded-r">
  <strong>İlk Ekran Doğrudan Yanıtı:</strong> Türkiye'de "sağlık turizmi şirketi kurmak" isteyen bir girişimcinin izlemesi gereken yasal unvan <strong>Uluslararası Sağlık Turizmi Aracı Kuruluşu</strong>dur. Süreç iki ana aşamadan oluşur:
  <ol class="list-decimal pl-5 mt-2 space-y-1">
    <li>Kültür ve Turizm Bakanlığı onaylı <strong>A Grubu Seyahat Acentası İşletme Belgesi</strong> almak (TÜRSAB).</li>
    <li>Yetkili en az 2 sağlık tesisiyle protokol imzalayarak <strong>USHAŞ</strong> üzerinden Uluslararası Sağlık Turizmi Aracı Kuruluşu Yetki Belgesi almak.</li>
  </ol>
  <strong>Önemli Düzeltme:</strong> Aracı kuruluş yetki belgesi başvurusu İl Sağlık Müdürlüğü'ne yapılmaz. 26 Nisan 2025 tarihli ve 32882 sayılı Yönetmeliğin 5. maddesi uyarınca aracı kuruluş yetkilendirmesi münhasıran <strong>USHAŞ</strong> tarafından yürütülmektedir.
</div>

<h2>1. Üç Farklı İş Modeli Arasındaki Hukuki Fark</h2>
<ul>
  <li><strong>Sağlık Tesisi:</strong> Muayenehane, poliklinik veya hastane. Tıbbi tedaviyi doğrudan uygular. Yetki belgesi Sağlık Bakanlığı SHGM'den alınır.</li>
  <li><strong>Aracı Kuruluş (Acenta):</strong> Yabancı hastanın Türkiye'ye gelişini, yetkili sağlık tesisine yönlendirilmesini, konaklama, transfer ve tercümanlık hizmetlerini koordine eder. Asla hekimlik veya tanı-tedavi uygulayamaz.</li>
  <li><strong>Sağlık Turizmi Danışmanlık Firması:</strong> Yalnızca dijital pazarlama veya çağrı merkezi desteği veren şirketlerdir. Yetkili aracı kuruluş belgesi olmadan hastaya medikal paket satamaz ve aracılık komisyonu alamaz.</li>
</ul>

<h2>2. Adım Adım Aracı Kuruluş Kuruluş Akışı</h2>
<ol class="space-y-4 my-6">
  <li class="p-3 bg-slate-50 border rounded">
    <strong class="text-slate-900">1. Adım: Ticaret Şirketinin Kurulması</strong><br>
    <span class="text-sm text-slate-600">Limited veya Anonim şirket statüsünde şirket kuruluşu yapılır. Şirket ana sözleşmesinde hem seyahat acentalığı hem de uluslararası sağlık turizmi faaliyet konuları eksiksiz yer almalıdır.</span>
  </li>
  <li class="p-3 bg-slate-50 border rounded">
    <strong class="text-slate-900">2. Adım: TÜRSAB A Grubu Seyahat Acentası Belgesi</strong><br>
    <span class="text-sm text-slate-600">Kültür ve Turizm Bakanlığı unvan uygunluk yazısı alınır. TÜRSAB'a yeni üye müracaatı yapılır ve teminat yatırılır.</span>
  </li>
  <li class="p-3 bg-slate-50 border rounded">
    <strong class="text-slate-900">3. Adım: Yetkili Sağlık Tesisleri ile Protokol</strong><br>
    <span class="text-sm text-slate-600">Sağlık Bakanlığı'ndan uluslararası sağlık turizmi yetki belgesi almış en az iki farklı sağlık tesisi ile karşılıklı sorumluluk ve hasta haklarını belirleyen resmi protokol imzalanır.</span>
  </li>
  <li class="p-3 bg-slate-50 border rounded">
    <strong class="text-slate-900">4. Adım: Nitelikli Personel ve İletişim Altyapısı</strong><br>
    <span class="text-sm text-slate-600">Yabancı dil yeterliliğini belgeleyen en az 2 tam zamanlı personel istihdam edilir. 7/24 kesintisiz çok dilli çağrı ve iletişim altyapısı kurulur.</span>
  </li>
  <li class="p-3 bg-slate-50 border rounded">
    <strong class="text-slate-900">5. Adım: USHAŞ Başvurusu ve HealthTürkiye Portal Üyeliği</strong><br>
    <span class="text-sm text-slate-600">Evraklar USHAŞ dijital başvuru sistemine yüklenir. İnceleme tamamlandıktan sonra Aracı Kuruluş Yetki Belgesi düzenlenir ve HealthTürkiye kayıtları onaylanır.</span>
  </li>
</ol>

<h2>3. 2026 Güncel Resmî ve Operasyonel Gider Tablosu</h2>
<div class="overflow-x-auto my-6">
  <table class="min-w-full border border-slate-200 text-sm">
    <thead class="bg-slate-100 text-slate-800 font-semibold">
      <tr>
        <th class="p-3 text-left border">Gider Kalemi</th>
        <th class="p-3 text-left border">2026 Resmî Tutar / Tahmini Maliyet</th>
        <th class="p-3 text-left border">Ödeme Mercii / Kaynak</th>
        <th class="p-3 text-left border">Zorunluluk Durumu</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-slate-700">
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">TÜRSAB A Grubu Giriş Aidatı</td>
        <td class="p-3 border font-semibold text-slate-900">649.278,99 TL</td>
        <td class="p-3 border">TÜRSAB Resmî Tarife</td>
        <td class="p-3 border text-emerald-700 font-medium">Yasal Zorunlu</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">TÜRSAB Yıllık Aidat</td>
        <td class="p-3 border font-semibold text-slate-900">32.463,96 TL</td>
        <td class="p-3 border">TÜRSAB Resmî Tarife</td>
        <td class="p-3 border text-emerald-700 font-medium">Yasal Zorunlu</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">A Grubu Seyahat Acentası Teminatı</td>
        <td class="p-3 border font-semibold text-slate-900">7.000 TL</td>
        <td class="p-3 border">Kültür ve Turizm Bakanlığı</td>
        <td class="p-3 border text-emerald-700 font-medium">Yasal Zorunlu</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">USHAŞ Başvuru ve Yetki Harçları</td>
        <td class="p-3 border font-semibold text-slate-900">USHAŞ Güncel Tarifesi</td>
        <td class="p-3 border">USHAŞ</td>
        <td class="p-3 border text-emerald-700 font-medium">Yasal Zorunlu</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Şirket Kuruluş ve Noter Harçları</td>
        <td class="p-3 border">~15.000 – 25.000 TL</td>
        <td class="p-3 border">Ticaret Sicili / Noter</td>
        <td class="p-3 border text-emerald-700 font-medium">Yasal Zorunlu</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Ofis, Çok Dilli Çağrı Altyapısı ve CRM</td>
        <td class="p-3 border">50.000 – 150.000 TL (Değişken)</td>
        <td class="p-3 border">Özel Tedarikçiler</td>
        <td class="p-3 border">Operasyonel Şart</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Acenta kurmak ile genel turizm şirketi kurmak arasındaki farkları detaylı incelemek için <a href="/haber/turizm-sirketi-kurmak-ile-saglik-turizmi-acentesi-kurmak-arasindaki-farklar" class="text-[#00A6A6] font-semibold hover:underline">Turizm Şirketi Kurmak ile Sağlık Turizmi Acentesi Kurmak Arasındaki Farklar</a> yazımızı okuyabilirsiniz.</p>
`
  },

  // D. Yetki Belgesi Alan Kurumlar (P1)
  'art-master-20': {
    title: 'Sağlık Turizmi Yetki Belgesi Alan Kurumlar Nasıl Sorgulanır? Resmî Listeler',
    authorId: 'editorial',
    category: 'mevzuat',
    contentType: 'mevzuat',
    seoTitle: 'Sağlık Turizmi Yetki Belgesi Alan Kurumlar Nasıl Sorgulanır? Resmî Listeler',
    seoDescription: 'Sağlık turizmi yetki belgesi olan kurumlar nasıl kontrol edilir? Sağlık Bakanlığı SHGM ve USHAŞ HealthTürkiye resmî sorgulama ekranları.',
    updatedAt: '2026-09-29T18:15:00.000Z',
    sources: [
      {
        name: 'Sağlık Bakanlığı SHGM: Yetkili Sağlık Tesisleri ve Aracı Kuruluşlar Listesi',
        url: 'https://shgmturizmdb.saglik.gov.tr/TR-25360/yetkili-saglik-tesisleri-ve-araci-kuruluslar.html',
        isOfficial: true
      },
      {
        name: 'HealthTürkiye Resmî Uluslararası Portal',
        url: 'https://www.healthturkiye.com/',
        isOfficial: true
      },
      {
        name: 'USHAŞ Aracı Kuruluş Sorgulama Rehberi',
        url: 'https://www.ushas.gov.tr/araci-kurulus-yetkilendirme/',
        isOfficial: true
      }
    ],
    content: `
<div class="p-4 bg-slate-50 border-l-4 border-[#00A6A6] text-sm text-slate-700 mb-6 rounded-r">
  <strong>İlk Ekran Doğrudan Yanıtı:</strong> Türkiye'de uluslararası sağlık turizmi yapmaya yetkili bir hastane, tıp merkezi, muayenehane veya acentayı kontrol etmek için iki resmî devlet kaynağı kullanılır:
  <ol class="list-decimal pl-5 mt-2 space-y-1">
    <li><strong>Yetkili Sağlık Tesisleri:</strong> T.C. Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü (SHGM) Sağlık Turizmi Dairesi Başkanlığı resmî listesi.</li>
    <li><strong>Yetkili Aracı Kuruluşlar (Acentalar):</strong> USHAŞ ve Türkiye'nin resmî sağlık portalı <strong>HealthTürkiye</strong> veri tabanı.</li>
  </ol>
  Aşağıdaki bağlantılardan güncel listelere doğrudan ulaşabilir ve kurumun yetkisini adım adım doğrulayabilirsiniz.
</div>

<h2>1. Resmî Sorgulama Kanalları</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div class="p-4 bg-slate-50 border border-slate-200 rounded">
    <h3 class="font-bold text-slate-900 mb-2">1. Sağlık Tesisleri Listesi (Bakanlık)</h3>
    <p class="text-sm text-slate-600 mb-3">Sağlık Bakanlığı tarafından yetkilendirilen kamu, üniversite ve özel hastaneler ile tıp merkezleri ve poliklinikler bu veri tabanında yayımlanır.</p>
    <a href="https://shgmturizmdb.saglik.gov.tr/TR-25360/yetkili-saglik-tesisleri-ve-araci-kuruluslar.html" target="_blank" rel="noopener noreferrer" class="inline-block px-3 py-2 bg-[#00A6A6] text-white text-xs font-semibold rounded hover:bg-[#008f8f]">Bakanlık Tesis Listesine Git →</a>
  </div>
  <div class="p-4 bg-slate-50 border border-slate-200 rounded">
    <h3 class="font-bold text-slate-900 mb-2">2. Aracı Kuruluşlar Listesi (HealthTürkiye / USHAŞ)</h3>
    <p class="text-sm text-slate-600 mb-3">TÜRSAB A grubu işletme belgesine sahip olup USHAŞ tarafından yetkilendirilen seyahat acentalarının güncel listesi.</p>
    <a href="https://www.healthturkiye.com/" target="_blank" rel="noopener noreferrer" class="inline-block px-3 py-2 bg-[#102A43] text-white text-xs font-semibold rounded hover:bg-[#0b1d2e]">HealthTürkiye Portalında Doğrula →</a>
  </div>
</div>

<h2>2. Tabela Adı ile Ticari Unvan Farkına Dikkat Edin</h2>
<p>Kullanıcıların ve denetçilerin en çok karşılaştığı sorun, kurumun tabeladaki ticari markası ile resmî ruhsattaki şirket unvanının farklı olmasıdır:</p>
<ul>
  <li>Bir klinik internette veya tabelasında "X Dental Clinic" adını kullanıyor olabilir; ancak resmî ruhsatı ve yetki belgesi "Y Sağlık Hizmetleri Ltd. Şti." adına düzenlenmiştir.</li>
  <li>Doğrulama yaparken kurumun web sitesinin alt bilgisinde (footer), sözleşmesinde veya faturasında yer alan <strong>Mersis No, Vergi Kimlik No veya Ticaret Sicil Unvanı</strong> üzerinden arama yapılmalıdır.</li>
</ul>

<h2>3. Kurum Listede Görünmüyorsa Ne Anlama Gelir?</h2>
<ol class="space-y-2">
  <li><strong>Yeni Alınmış Belge:</strong> Belge yeni tescil edilmiş ve Bakanlık/USHAŞ listelerinin periyodik güncelleme takvimine henüz yansımamış olabilir. Bu durumda kurumdan onaylı resmî yetki belgesi sureti istenmelidir.</li>
  <li><strong>Unvan veya Adres Değişikliği:</strong> Kurum unvanını veya adresini değiştirmiş, sistem güncellemesi askıda kalmış olabilir.</li>
  <li><strong>Yetki Belgesinin Askıya Alınması / İptali:</strong> Denetimlerde standartları kaybeden veya mevzuata aykırı hareket eden kurumların yetki belgeleri geçici veya kalıcı olarak iptal edilir.</li>
  <li><strong>Yetkisiz Faaliyet:</strong> Kurum hiçbir zaman belge almamış ve yetkisiz biçimde yabancı hasta operasyonu yürütüyor olabilir. Yetkisiz kurumlarla çalışmak ağır yasal ve idari müeyyidelere yol açar.</li>
</ol>
`
  },

  // E. Küba Sağlık Turizmi Ana Dosyası (P2)
  'art-master-88': {
    title: 'Küba Sağlık Turizmi: Uluslararası Hasta Modeli, Hizmetler ve Kanıt Düzeyi',
    authorId: 'dr-selim-yilmaz',
    category: 'dunya',
    contentType: 'pazar-dosyasi',
    seoTitle: 'Küba Sağlık Turizmi: Uluslararası Hasta Modeli, Hizmetler ve Kanıt Düzeyi',
    seoDescription: 'Küba sağlık turizmi nasıl işliyor? CSMC devlet yapısı, CimaVax-EGF kanser aşısı, Heberprot-P diyabetik ayak tedavisi, kanıt düzeyleri ve vize/ödeme kuralları.',
    updatedAt: '2026-09-29T18:16:00.000Z',
    sources: [
      {
        name: 'Comercializadora de Servicios Médicos Cubanos (CSMC)',
        url: 'https://www.smcsalud.cu/en/somos-smc',
        isOfficial: true
      },
      {
        name: 'Centro de Inmunología Molecular (CIM) - CimaVax Klinik Verileri',
        url: 'https://www.cim.cu/',
        isOfficial: true
      },
      {
        name: 'Centro Internacional de Restauración Neurológica (CIREN)',
        url: 'https://www.ciren.cu/',
        isOfficial: true
      }
    ],
    content: `
<div class="p-4 bg-slate-50 border-l-4 border-[#00A6A6] text-sm text-slate-700 mb-6 rounded-r">
  <strong>Yönetici Özeti:</strong> Küba sağlık turizmi, küresel pazardaki serbest piyasa modellerinden farklı olarak tamamen devlet kontrolünde ve merkezileştirilmiş bir kamu-biyoteknoloji ekosistemi üzerinden işler. Ülkeye gelen yabancı hastaların tüm koordinasyonu, tıbbi değerlendirmesi ve kabulü münhasıran <strong>CSMC (Comercializadora de Servicios Médicos Cubanos, S.A.)</strong> tarafından yürütülür. Küba'yı dünya sahnesinde ayrıştıran temel unsurlar; ileri biyoteknoloji ürünleri (CimaVax-EGF, Heberprot-P) ve nörolojik rehabilitasyon programlarıdır.
</div>

<h2>1. CSMC'nin Resmî Rolü: Tek Elden Devlet Koordinasyonu</h2>
<p>Küba'da özel hastane, bağımsız özel klinik veya serbest çalışan acenta yapısı bulunmaz. Tüm sağlık tesisleri ve medikal araştırma enstitüleri Küba Halk Sağlığı Bakanlığı'na (MINSAP) bağlıdır. Yabancı hastaların Küba'ya kabul süreci şu resmî adımlarla yürütülür:</p>
<ul>
  <li><strong>Merkezi Triyaj:</strong> Hasta tıbbi epikrizlerini, patoloji ve radyoloji raporlarını CSMC'nin resmî kanallarına (<a href="https://www.smcsalud.cu" target="_blank" rel="noopener noreferrer" class="text-[#00A6A6] underline">smcsalud.cu</a>) iletir.</li>
  <li><strong>Multidisipliner Kurul İncelemesi:</strong> Havana'daki ilgili enstitü hekim heyeti (CIM, CIREN vb.) hastanın Küba protokollerine uygunluğunu inceler.</li>
  <li><strong>Resmî Fatura ve Medikal Program:</strong> Uygun görülen hastalara tedavi süresi, hastanede kalış ve resmî maliyeti içeren proforma fatura düzenlenir. Hasta bu faturayı onayladıktan sonra medikal vize ve kabul işlemleri başlatılır.</li>
</ul>

<h2>2. Öne Çıkan Tedaviler ve Bilimsel Kanıt Düzeyi</h2>
<p>Küba tıbbı hakkında internette dolaşan sansasyonel iddiaları bilimsel gerçeklerden ayırmak gerekir:</p>

<div class="overflow-x-auto my-6">
  <table class="min-w-full border border-slate-200 text-sm">
    <thead class="bg-slate-100 text-slate-800 font-semibold">
      <tr>
        <th class="p-3 text-left border">Tedavi Alanı / Ürün</th>
        <th class="p-3 text-left border">Geliştiren Kurum</th>
        <th class="p-3 text-left border">Etki Mekanizması & Endikasyon</th>
        <th class="p-3 text-left border">Bilimsel Kanıt & Onay Durumu</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-slate-700">
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">CimaVax-EGF & Racotumomab (Vaxira)</td>
        <td class="p-3 border">Centro de Inmunología Molecular (CIM)</td>
        <td class="p-3 border">Küçük hücreli dışı ileri evre akciğer kanserinde kemoterapi sonrası idame immünoterapisi</td>
        <td class="p-3 border">Hastalığı tamamen yok eden bir "mucize" değil; sağkalım süresini uzatan bir idame aşısıdır. ABD'de Roswell Park Kanser Enstitüsü ile ortak klinik denemeler yürütülmektedir.</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Heberprot-P</td>
        <td class="p-3 border">CIGB</td>
        <td class="p-3 border">İleri evre diyabetik ayak ülseri tedavisi</td>
        <td class="p-3 border">Epidermal büyüme faktörünün lezyon içine enjeksiyonu. Klinik çalışmalarda ampütasyon riskini önemli ölçüde azalttığı kanıtlanmış, birçok ülkede ruhsatlandırılmıştır.</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Nörolojik Rehabilitasyon</td>
        <td class="p-3 border">CIREN</td>
        <td class="p-3 border">İnme (felç), omurilik yaralanmaları, Parkinson ve serebral palsi</td>
        <td class="p-3 border">Günde 6-7 saatlik yoğun, kişiselleştirilmiş fizyoterapi ve nöroplastisite egzersizleri. Uluslararası hasta memnuniyeti yüksektir.</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Melagenina Plus & Coriodermina</td>
        <td class="p-3 border">Centro de Histoterapia Placentária</td>
        <td class="p-3 border">Vitiligo ve sedef hastalığı (insan plasentası ekstresi)</td>
        <td class="p-3 border">Kısmi pigmentasyon başarısı bildirilmekle birlikte, küresel dermatoloji kılavuzlarında standart birinci basamak tedavi olarak kabul edilmemektedir.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>3. Finansal, Vize ve Lojistik Kurallar</h2>
<ul>
  <li><strong>Ambargo ve Bankacılık Kısıtları:</strong> ABD ambargosu nedeniyle ABD menşeili bankalara ait kredi kartları veya banka kartları Küba'da kesinlikle ÇALIŞMAZ. Ödemeler çoğunlukla Euro veya Kanada Doları cinsinden, CSMC'nin onayladığı Avrupa muhabir banka hesaplarına transferle veya nakit olarak yapılır.</li>
  <li><strong>Vize ve Giriş:</strong> Küba'ya seyahat edecek hastalar için Küba Konsolosluğu veya yetkili aracı kurumlar üzerinden Turist Kartı (Tarjeta del Turista) veya CSMC onaylı Medikal Vize temin edilir.</li>
  <li><strong>Zorunlu Seyahat Sağlık Sigortası:</strong> Küba sınır kontrolünde ülkeye girişte Küba hükümetince tanınan geçerli seyahat sağlık sigortası poliçesi ibraz edilmesi zorunludur.</li>
</ul>

<h2>4. Türkiye Modeli ile Karşılaştırma</h2>
<p>Küba modeli; biyoteknolojik özgün moleküller ve uzun süreli yoğun rehabilitasyon alanlarında rekabetçi bir niş pazar sunar. Türkiye ise modern JCI akreditasyonlu özel hastaneleri, robotik cerrahi teknolojileri (da Vinci), bekleme süresiz organ nakli ve diş/estetik operasyonlarındaki yüksek lojistik erişilebilirliği ile çok daha geniş bir spektrumda küresel lider destinasyon konumundadır.</p>

<p>Küba'da hasta kabul adımları ve başvuru sürecinin detayları için <a href="/haber/kuba-da-saglik-turizmi-nasil-calisiyor" class="text-[#00A6A6] font-semibold hover:underline">Küba’da Sağlık Turizmi Nasıl Çalışıyor?</a> rehberimizi inceleyebilirsiniz.</p>
`
  },

  // E2. Küba Hasta Süreci (P2)
  'art-master-89': {
    title: 'Küba’da Sağlık Turizmi Süreci: Başvuru, Tıbbi Dosya İncelemesi ve Seyahat Rehberi',
    authorId: 'dr-selim-yilmaz',
    category: 'dunya',
    contentType: 'analiz',
    seoTitle: 'Küba Sağlık Turizmi Başvuru Süreci: Tıbbi Dosya ve Seyahat',
    seoDescription: 'Küba’da sağlık turizmi tedavisi görmek isteyen yabancı hastalar için başvuru, epikriz inceleme süresi, CSMC teklifi, vize ve kabul adımları rehberi.',
    updatedAt: '2026-09-29T18:18:00.000Z',
    sources: [
      {
        name: 'Servicios Médicos Cubanos (CSMC) Hasta Başvuru Portalı',
        url: 'https://www.smcsalud.cu/en/servicios-academicos-y-medicos',
        isOfficial: true
      }
    ],
    content: `
<div class="p-4 bg-slate-50 border-l-4 border-[#00A6A6] text-sm text-slate-700 mb-6 rounded-r">
  <strong>Bu Rehberin Amacı:</strong> Bu sayfa, Küba'da tedavi olmak isteyen uluslararası hastaların ve refakatçilerinin başvuru, tıbbi dosya incelemesi, maliyet teklifi, medikal vize ve Havana'ya varış sürecini adım adım açıklamaktadır. Küba sağlık sisteminin genel yapısı ve biyoteknoloji araştırmaları için ana dosyamız olan <a href="/haber/kuba-saglik-turizmi-tedaviler-model-ve-devlet-yapisi" class="text-[#00A6A6] font-semibold hover:underline">Küba Sağlık Turizmi: Tedaviler, Model ve Devlet Yapısı</a> sayfasını inceleyebilirsiniz.
</div>

<h2>1. Adım: Tıbbi Dosyanın Hazırlanması</h2>
<p>Küba hekim kurulları hastayı görmeden önce detaylı tıbbi belgeleri inceler. Başvuruda şu evrakların eksiksiz olması şarttır:</p>
<ul>
  <li>Son 3 ay içinde düzenlenmiş kapsamlı epikriz (tercihen İspanyolca veya İngilizce tercümesiyle),</li>
  <li>Uygulanmış tüm kemoterapi, radyoterapi veya cerrahi protokollerin özet tablosu,</li>
  <li>Güncel patoloji, biyopsi ve laboratuvar sonuçları,</li>
  <li>BT (Tomografi), MR ve PET-CT radyoloji raporları ile DICOM formatında CD görüntüleri.</li>
</ul>

<h2>2. Adım: CSMC'ye İletim ve Hekim Kurulu Değerlendirmesi</h2>
<p>Hazırlanan dosya Küba devletinin tek yetkili medikal ticaret kurumu olan <strong>CSMC</strong>'ye iletilir. İlgili tıp enstitüsündeki uzman hekim heyeti dosyayı ortalama <strong>5 ila 10 iş günü</strong> içinde değerlendirir.</p>
<p>Heyet hastayı uygun bulursa; uygulanacak protokolü, tahmini hastanede kalış gün sayısını ve tüm tıbbi hizmetleri kapsayan resmî bir medikal program hazırlar.</p>

<h2>3. Adım: Proforma Fatura ve Ödeme Onayı</h2>
<p>CSMC tarafından hastaya resmi fiyat teklifi (Proforma Fatura) iletilir. Küba'da hastanede sürpriz ek masraflarla karşılaşılmaması için tedavi paketleri genellikle şu kalemleri kapsar:</p>
<ul>
  <li>Hastanede yatış, hekim viziteleri ve hemşirelik hizmetleri,</li>
  <li>Planlanan tahlil ve tetkikler,</li>
  <li>Spesifik ilaçlar (örneğin CimaVax aşı dozları veya Heberprot-P uygulamaları),</li>
  <li>Hastane içi yemek ve refakatçi konaklaması.</li>
</ul>

<h2>4. Adım: Seyahat, Vize ve Havana Karşılama</h2>
<p>Teklif onaylandıktan sonra Küba makamları resmi kabul yazısını düzenler. Bu yazı ile medikal vize veya turist kartı alınır. Havana José Martí Uluslararası Havalimanı'na varışta hasta CSMC sağlık personeli tarafından karşılanarak doğrudan ilgili hastaneye (CIMEQ, Cira García veya CIREN) transfer edilir.</p>
`
  },

  // F. Yol Haritası (P1)
  'art-master-6': {
    title: 'Sağlık Turizmi Nasıl Yapılır? Hastane, Klinik ve Acentalar İçin Yol Haritası',
    authorId: 'kaan-karakas',
    category: 'mevzuat',
    contentType: 'mevzuat',
    seoTitle: 'Sağlık Turizmi Nasıl Yapılır? Hastane, Klinik ve Acenta Rehberi 2026',
    seoDescription: 'Sağlık turizmi nasıl yapılır? Sağlık tesisi, aracı kuruluş ve danışmanlık modellerine göre 2026 yasal şartları, karar tablosu ve operasyonel yol haritası.',
    updatedAt: '2026-09-29T18:20:00.000Z',
    sources: [
      {
        name: '26 Nisan 2025 Tarihli ve 32882 Sayılı Resmî Gazete Yönetmeliği',
        url: 'https://resmigazete.gov.tr/26.04.2025',
        isOfficial: true
      },
      {
        name: 'Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü',
        url: 'https://shgmturizmdb.saglik.gov.tr/',
        isOfficial: true
      },
      {
        name: 'USHAŞ Aracı Kuruluş Portalı',
        url: 'https://www.ushas.gov.tr/',
        isOfficial: true
      }
    ],
    content: `
<div class="p-4 bg-slate-50 border-l-4 border-[#00A6A6] text-sm text-slate-700 mb-6 rounded-r">
  <strong>Giriş ve Karar Matrisi:</strong> "Sağlık turizmi nasıl yapılır?" sorusuna tek bir şablonla yanıt verilemez. Türkiye'de sağlık turizmi faaliyeti yürütecek kurumun niteliğine göre mevzuat, yetkili makam ve operasyonel gereksinimler tamamen ayrışır. 26 Nisan 2025 tarih ve 32882 sayılı güncel yönetmelik çerçevesinde doğru yol haritasını seçebilmeniz için aşağıdaki karar tablosunu hazırladık:
</div>

<h2>Hangi Kuruluş Türüsünüz? Karar ve Yol Haritası Tablosu</h2>
<div class="overflow-x-auto my-6">
  <table class="min-w-full border border-slate-200 text-sm">
    <thead class="bg-slate-100 text-slate-800 font-semibold">
      <tr>
        <th class="p-3 text-left border">Kuruluş Türü</th>
        <th class="p-3 text-left border">Yasal Statü</th>
        <th class="p-3 text-left border">Yetki Makamı</th>
        <th class="p-3 text-left border">İlk Adım ve Ön Koşul</th>
        <th class="p-3 text-left border">İlgili Detaylı Rehber</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-slate-700">
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Sağlık Tesisi<br><span class="text-xs font-normal text-slate-500">(Hastane, Tıp Merkezi, Poliklinik, Muayenehane)</span></td>
        <td class="p-3 border">Tıbbi Hizmet Sağlayıcı</td>
        <td class="p-3 border">T.C. Sağlık Bakanlığı SHGM</td>
        <td class="p-3 border">Sağlık Bakanlığı ruhsatı + Uluslararası Sağlık Turizmi Birimi + TÜSKA Akreditasyonu / Kriter Seti</td>
        <td class="p-3 border"><a href="/haber/saglik-turizmi-yetki-belgesi-sartlari-2026-guncel-kontrol-listesi" class="text-[#00A6A6] font-semibold underline">Yetki Belgesi Şartları →</a></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Aracı Kuruluş<br><span class="text-xs font-normal text-slate-500">(Seyahat Acentası)</span></td>
        <td class="p-3 border">Medikal Turizm Acentesi</td>
        <td class="p-3 border">USHAŞ & Kültür ve Turizm Bakanlığı</td>
        <td class="p-3 border">TÜRSAB A Grubu İşletme Belgesi + En az 2 Sağlık Tesisi Protokolü + USHAŞ Yetki Belgesi</td>
        <td class="p-3 border"><a href="/haber/saglik-turizmi-acentesi-nasil-kurulur" class="text-[#00A6A6] font-semibold underline">Acenta Kuruluş Rehberi →</a></td>
      </tr>
      <tr>
        <td class="p-3 font-semibold border bg-slate-50">Danışmanlık / Pazarlama Firması</td>
        <td class="p-3 border">Destek Hizmet Sağlayıcısı</td>
        <td class="p-3 border">Ticaret Sicili</td>
        <td class="p-3 border">Yalnızca reklam, tercüme ve yazılım desteği sunabilir; yetkisiz tıbbi aracılık ve komisyon alamaz.</td>
        <td class="p-3 border"><a href="/haber/turizm-sirketi-kurmak-ile-saglik-turizmi-acentesi-kurmak-arasindaki-farklar" class="text-[#00A6A6] font-semibold underline">Farklar Rehberi →</a></td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Sağlık Turizminde 5 Aşamalı Başarı Yol Haritası</h2>
<ol class="space-y-4 my-6">
  <li><strong>1. Aşama — Mevzuata Tam Uyum:</strong> Kuruluş türünüze uygun yetki belgesini almadan uluslararası pazarlama faaliyetine başlamayın. Belgesiz tanıtımlar Ticaret Bakanlığı ve Sağlık Bakanlığı tarafından ağır idari para cezalarıyla yaptırıma bağlanır.</li>
  <li><strong>2. Aşama — Hedef Pazar ve Branş Odaklanması:</strong> Her ülkeye her tedaviyi satmaya çalışmak bütçe israfıdır. Kaynak ülke dinamiklerini (İngiltere'de diş/obezite, Almanya'da cerrahi/diaspora, Körfez'de onkoloji/ortopedi) analiz edin.</li>
  <li><strong>3. Aşama — Çok Dilli Hasta İletişim Altyapısı:</strong> Yalnızca Google Translate ile hasta kazanılamaz. Ana dili hedef pazarla uyumlu veya C1 düzeyinde dil yeterliliği olan medikal danışmanlar istihdam edin.</li>
  <li><strong>4. Aşama — Uçtan Uca Hasta Yolculuğu:</strong> Karşılama, VIP transfer, konaklama, hastane refakati ve taburculuk sonrası takip (aftercare) süreçlerini eksiksiz tasarlayın.</li>
  <li><strong>5. Aşama — Şeffaflık ve Güven İnşası:</strong> Hastaya gitmeden önce hekim özgeçmişi, onay formları, net tedavi planı ve olası komplikasyon güvencelerini yazılı olarak sunun.</li>
</ol>
`
  },

  // G. Sağlık Acentaları Ne Yapar (P2)
  'art-master-45': {
    title: 'Sağlık Turizmi Acentaları Ne Yapar? Görevler, Yasal Sınırlar ve Hizmet Kapsamı',
    authorId: 'av-elif-demir',
    category: 'mevzuat',
    contentType: 'mevzuat',
    seoTitle: 'Sağlık Turizmi Acentaları Ne Yapar? Yasal Görev ve Sınırlar 2026',
    seoDescription: 'Sağlık turizmi acentaları ne iş yapar? Aracı kuruluşun yasal görevleri, yapamayacağı işlemler ve sağlık sigortası acentası ile arasındaki farklar.',
    updatedAt: '2026-09-29T18:22:00.000Z',
    sources: [
      {
        name: 'Resmî Gazete 26 Nisan 2025 / 32882 Sayılı Yönetmelik',
        url: 'https://resmigazete.gov.tr/26.04.2025',
        isOfficial: true
      },
      {
        name: 'USHAŞ Aracı Kuruluş Yetkilendirme Esasları',
        url: 'https://www.ushas.gov.tr/araci-kurulus-yetkilendirme/',
        isOfficial: true
      }
    ],
    content: `
<div class="p-4 bg-slate-50 border-l-4 border-[#00A6A6] text-sm text-slate-700 mb-6 rounded-r">
  <strong>Tanım ve Görev Özeti:</strong> Uluslararası sağlık turizmi aracı kuruluşu (sağlık turizmi acentesi); Kültür ve Turizm Bakanlığı'ndan A grubu seyahat acentası işletme belgesine ve USHAŞ'tan yetki belgesine sahip olan, yabancı hastanın Türkiye'deki yetkili sağlık tesislerine ulaştırılması, transferi, konaklaması ve iletişimini organize eden tüzel kuruluştur.
</div>

<h2>1. Sağlık Turizmi Acentesinin Yasal Görevleri Nelerdir?</h2>
<ul>
  <li><strong>Bilgilendirme ve Koordinasyon:</strong> Hastanın şikayet ve taleplerini yetkili sağlık tesisine iletmek; hekim tarafından hazırlanan tedavi planını hastaya kendi dilinde aktarmak.</li>
  <li><strong>Ulaşım ve Lojistik:</strong> Uçak bileti, havalimanı VIP transferi ve şehir içi ulaşımı organize etmek.</li>
  <li><strong>Konaklama Hizmetleri:</strong> Hastanın ve refakatçisinin hastane sürecine uygun otel rezervasyonlarını yapmak.</li>
  <li><strong>Tercümanlık ve 7/24 Refakat:</strong> Hastanede yatış, muayene ve taburculuk anlarında hastaya çok dilli iletişim desteği sağlamak.</li>
  <li><strong>Turizm ve Sosyal Programlar:</strong> Hekim onayı olmak kaydıyla tedavi öncesi veya sonrası şehir turları ve kültürel aktiviteler düzenlemek.</li>
</ul>

<h2>2. Aracı Kuruluşun Asla Yapamayacağı İşlemler (Yasal Sınırlar)</h2>
<div class="p-4 bg-rose-50 border border-rose-200 rounded my-4 text-sm text-rose-900">
  <ul class="list-disc pl-5 space-y-1">
    <li><strong>Tıbbi Teşhis ve Tedavi Vaadinde Bulunamaz:</strong> Acenta personeli doktor değildir; tıbbi tavsiye veremez veya tedavi garanti edemez.</li>
    <li><strong>Hekimlik ve Klinik Faaliyeti Yürütemez:</strong> Acenta ofisinde pansuman, muayene, enjeksiyon veya cerrahi operasyon yapılamaz.</li>
    <li><strong>Yetkisiz Sağlık Tesisine Hasta Gönderemez:</strong> Acentalar yalnızca Sağlık Bakanlığı'ndan yetki belgesi almış tescilli hastane ve kliniklerle çalışmak zorundadır.</li>
  </ul>
</div>

<h2>3. Sık Karıştırılan Terim: Sağlık Turizmi Acentesi vs Sağlık Sigortası Acentesi</h2>
<p>Halk arasında "sağlık acentası" ifadesi zaman zaman özel sağlık sigortası poliçesi kesen sigorta acenteleriyle karıştırılmaktadır. Sağlık sigortası acenteleri Hazine ve Maliye Bakanlığı / SEDDK mevzuatına tabi olup sigorta poliçesi satar; uluslararası sağlık turizmi yapamaz. Sağlık turizmi acentesi ise TÜRSAB ve USHAŞ mevzuatına tabi bir seyahat ve hasta organizasyon şirketidir.</p>

<p>Kendi acentenizi kurmak için gerekli resmî adımları öğrenmek istiyorsanız <a href="/haber/saglik-turizmi-acentesi-nasil-kurulur" class="text-[#00A6A6] font-semibold hover:underline">Sağlık Turizmi Şirketi / Acentesi Nasıl Kurulur?</a> rehberimizi inceleyebilirsiniz.</p>
`
  }
};

// 3. Mevzuat ve İlgili Makalelerdeki 30123 / 2017 Eski Yönetmelik Temizliği
const outdatedCleaningList = [
  'art-master-11',
  'art-master-12',
  'art-master-14',
  'art-master-15',
  'art-master-16',
  'art-master-17',
  'art-master-18',
  'art-master-21',
  'art-master-22',
  'art-master-23'
];

// Uygula: Yeni Makaleleri Ekle (varsa güncelle, yoksa push et)
newArticles.forEach(newArt => {
  const existingIndex = data.articles.findIndex(a => a.id === newArt.id || a.slug === newArt.slug);
  if (existingIndex !== -1) {
    data.articles[existingIndex] = { ...data.articles[existingIndex], ...newArt };
    console.log('Güncellendi (Yeni Makale):', newArt.slug);
  } else {
    data.articles.unshift(newArt);
    console.log('Eklendi (Yeni Makale):', newArt.slug);
  }
});

// Uygula: 7 Ana ve Destekleyici Makaleyi Güncelle
for (const [id, updateData] of Object.entries(articleUpdates)) {
  const article = data.articles.find(a => a.id === id);
  if (article) {
    Object.assign(article, updateData);
    console.log('Detaylı Güncellendi:', id, '|', article.slug);
  } else {
    console.warn('Bulunamadı:', id);
  }
}

// Uygula: Diğer mevzuat makalelerindeki 30123 / 2017 atıflarını ve jenerik boilerplate kalıplarını düzelt
outdatedCleaningList.forEach(id => {
  const article = data.articles.find(a => a.id === id);
  if (article) {
    // 30123 sayılı yönetmelik atıflarını 32882 ve 26 Nisan 2025 ile güncelle
    article.content = article.content
      .replace(/13 Temmuz 2017 tarihli ve 30123 sayılı/g, '26 Nisan 2025 tarihli ve 32882 sayılı')
      .replace(/30123 sayılı Resmî Gazete/g, '32882 sayılı Resmî Gazete (2017 tarihli 30123 sayılı eski metin yürürlükten kalkmıştır)')
      .replace(/30123 sayılı/g, '32882 sayılı');
    
    // Robotik giriş kalıbını temizle
    const boilerplateMatch = /<h2>.*?Sektörel Analiz ve Uygulama Kılavuzu<\/h2>\s*<p><strong>.*?<\/strong> konusu, Türkiye'nin uluslararası sağlık turizmi vizyonunda hem medikal kaliteyi hem de hasta güvenliğini doğrudan etkileyen kritik bir başlıktır.*?<\/ol>/s;
    if (boilerplateMatch.test(article.content)) {
      article.content = article.content.replace(boilerplateMatch, `
<div class="p-4 bg-slate-50 border-l-4 border-[#00A6A6] text-sm text-slate-700 mb-6 rounded-r">
  <strong>Güncel Mevzuat Notu (2026):</strong> Bu rehberde yer alan yasal dayanaklar, 26 Nisan 2025 tarihli ve 32882 sayılı Resmî Gazete'de yayımlanan güncel <em>Uluslararası Sağlık Turizmi ve Turistin Sağlığı Hakkında Yönetmelik</em> hükümleri esas alınarak güncellenmiştir. 13 Temmuz 2017 tarihli 30123 sayılı eski yönetmelik yürürlükten kaldırılmıştır.
</div>
      `);
      console.log('Boilerplate temizlendi & güncellendi:', id);
    }
  }
});

// Kaydet
fs.writeFileSync(STORAGE_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log('Başarıyla tamamlandı! Toplam güncel makale sayısı:', data.articles.length);
