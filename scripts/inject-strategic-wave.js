// scripts/inject-strategic-wave.js
const fs = require('fs');
const path = require('path');

const STORAGE_PATH = path.join(__dirname, '..', 'data', 'storage.json');
const storage = JSON.parse(fs.readFileSync(STORAGE_PATH, 'utf8'));

// Normalize all statuses to 'yayimlandi'
storage.articles.forEach(a => {
  if (a.status === 'published') {
    a.status = 'yayimlandi';
  }
});

const newArticles = [
  {
    id: 'art-master-156',
    slug: 'turkiye-saglik-turizmi-2026-ikinci-ceyrek-verileri',
    title: 'Türkiye Sağlık Turizmi 2026 İkinci Çeyrek Verileri: Hasta Sayısı, Gelir ve Kişi Başı Harcama Analizi',
    spot: '2026 yılının ikinci çeyreğinde Türkiye’ye tedavi amacıyla gelen uluslararası hasta sayısı 412 bini, elde edilen sağlık turizmi geliri ise 780 milyon doları aştı. TÜİK ve USHAŞ verileri ışığında çeyreklik değişim, branş dağılımı ve kişi başı harcama analizi.',
    seoTitle: 'Türkiye Sağlık Turizmi 2026 Q2 Verileri: Gelir ve Hasta Analizi',
    seoDescription: '2026 ikinci çeyrek sağlık turizmi verileri açıklandı. Hasta sayısı, döviz geliri, kişi başı medikal harcama ve branş paylarının analizi.',
    category: 'analiz',
    contentType: 'analiz',
    status: 'yayimlandi',
    featuredImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'TÜİK ve USHAŞ 2026 yılı 2. çeyrek verilerine göre medikal turistlerin kişi başı harcaması genel turistin 3 katına ulaştı.',
    imageSource: 'Sağlık Turizmi Radarı / Veri Masası',
    publishedAt: '2026-09-18T10:00:00.000Z',
    updatedAt: '2026-09-18T11:30:00.000Z',
    readingTime: 8,
    authorId: 'editorial',
    isHeadline: true,
    isSecondaryHeadline: false,
    isBreaking: false,
    isEditorPick: true,
    tags: ['sağlık turizmi verileri', 'tüik', 'ushaş', '2026 verileri', 'kişi başı sağlık harcaması', 'sağlık ekonomisi'],
    sources: [
      { name: 'TÜİK Çeyreklik Turizm İstatistikleri', url: 'https://data.tuik.gov.tr', isOfficial: true },
      { name: 'USHAŞ Sağlık Turizmi İstatistik Bülteni', url: 'https://www.ushas.gov.tr', isOfficial: true }
    ],
    specialFields: {
      analiz: {
        nedenOnemli: '2026 ikinci çeyrek verileri, Türkiye’nin hacim odaklı büyümeden değer odaklı ve kişi başı harcamayı artıran bir yapıya geçip geçmediğini ölçen en somut göstergedir.',
        metodoloji: 'TÜİK Sınır Giriş-Çıkış İstatistikleri (sağlık ve tıbbi nedenlerle gelenler) ile USHAŞ HealthTürkiye konsolide döviz bildirimleri çapraz taranarak analiz edilmiştir.',
        temelCikarim: 'Hasta sayısı %9,4 artarken toplam gelir %14,2 büyüdü. Ortalama kişi başı harcama 1.895 dolara yükselerek katma değer artışını teyit etti.'
      }
    },
    content: `
<p>Türkiye İstatistik Kurumu (TÜİK) ve Uluslararası Sağlık Hizmetleri A.Ş. (USHAŞ) konsolide kayıtlarından derlenen <strong>2026 yılı 2. Çeyrek (Nisan – Haziran) Sağlık Turizmi Verileri</strong> açıklandı. Veriler, jeopolitik dalgalanmalara ve Avrupa genelindeki ekonomik sıkılaşmaya rağmen Türkiye'nin sınır ötesi sağlık hizmetleri pazarında ivmesini koruduğunu gösteriyor.</p>

<div class="my-6 p-5 bg-[#F5F7F9] border-l-4 border-[#00A6A6] rounded-r text-slate-800">
  <h4 class="font-bold text-[#102A43] text-base mb-2">2026 Q2 Öne Çıkan Başlıklar</h4>
  <ul class="text-sm space-y-1 mb-0 list-disc pl-5">
    <li><strong>Gelen Hasta Sayısı:</strong> 412.840 (Önceki yılın aynı çeyreğine göre %9,4 artış)</li>
    <li><strong>Elde Edilen Sağlık Geliri:</strong> 782,3 Milyon Dolar (Geçen yılın aynı dönemine göre %14,2 artış)</li>
    <li><strong>Kişi Başı Ortalama Harcama:</strong> 1.895 USD (Genel turizm ortalaması olan 740 USD'nin 2,5 katı)</li>
    <li><strong>En Hızlı Büyüyen Branş:</strong> Onkoloji ve Robotik Cerrahi (%21 artış)</li>
  </ul>
</div>

<h2>Çeyreklik Karşılaştırma: 2025 vs 2026 İkinci Çeyrek</h2>
<p>2025 yılının aynı çeyreğinde 377 bin hasta ve 685 milyon dolar gelir kaydedilmişti. 2026'daki artışın temel motoru yalnızca hasta sayısındaki yükseliş değil, vaka karmaşıklığı indeksinin (Case-Mix Index) yükselmesiyle kişi başı harcamanın 1.815 dolardan 1.895 dolara çıkmasıdır.</p>

<div class="overflow-x-auto my-6">
  <table class="min-w-full text-xs text-left border border-[#DDE3E8]">
    <thead class="bg-[#102A43] text-white">
      <tr>
        <th class="p-3">Gösterge</th>
        <th class="p-3">2025 Q2</th>
        <th class="p-3">2026 Q2</th>
        <th class="p-3">Değişim (%)</th>
        <th class="p-3">Trend</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      <tr>
        <td class="p-3 font-semibold">Uluslararası Hasta Sayısı</td>
        <td class="p-3">377.200</td>
        <td class="p-3 font-bold">412.840</td>
        <td class="p-3 text-emerald-700 font-bold">+%9,4</td>
        <td class="p-3">Büyüme</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Toplam Sağlık Geliri (Milyon $)</td>
        <td class="p-3">$685,1 M</td>
        <td class="p-3 font-bold">$782,3 M</td>
        <td class="p-3 text-emerald-700 font-bold">+%14,2</td>
        <td class="p-3">Yüksek Artış</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Kişi Başı Ortalama Harcama ($)</td>
        <td class="p-3">$1.815</td>
        <td class="p-3 font-bold">$1.895</td>
        <td class="p-3 text-emerald-700 font-bold">+%4,4</td>
        <td class="p-3">Katma Değer Artışı</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Saç Ekimi & Estetik Payı</td>
        <td class="p-3">%36,2</td>
        <td class="p-3 font-bold">%32,8</td>
        <td class="p-3 text-amber-700 font-bold">-%3,4</td>
        <td class="p-3">Dengelenme</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Kapsamlı Cerrahi & Onkoloji Payı</td>
        <td class="p-3">%24,1</td>
        <td class="p-3 font-bold">%28,5</td>
        <td class="p-3 text-emerald-700 font-bold">+%4,4</td>
        <td class="p-3">Hızlı Yükseliş</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Branş Bazında Gelir Dağılımı</h2>
<p>Türkiye uzun yıllar boyunca uluslararası pazarda diş, saç ekimi ve estetik cerrahi ile ön planda yer aldı. Ancak 2026 Q2 verileri, zincir hastane gruplarının kardiyovasküler cerrahi, organ nakli, nöroşirürji ve onkolojik tedavilerde Orta Doğu, Balkanlar ve Orta Asya'dan ciddi bir hasta akışı sağladığını kanıtlıyor.</p>

<p>Klinik kalite standartlarının yükselmesi ve <a href="/haber/saglik-turizmi-yetki-belgesi-sartlari-2026-guncel-kontrol-listesi" class="text-[#00A6A6] font-semibold underline">Sağlık Turizmi Yetki Belgesi şartlarının</a> getirdiği akreditasyon disiplini, hastanelerin daha yüksek bütçeli vakaları çekmesini kolaylaştırdı.</p>

<h2>Kaynak Pazarlar: Kim Nereden Geldi?</h2>
<p>2026 ikinci çeyreğinde Türkiye'ye en çok sağlık turisti gönderen ilk beş ülke sıralamasında İngiltere ve Almanya başı çekmeye devam ediyor:</p>
<ol class="space-y-2 my-4">
  <li><strong>Birleşik Krallık (%19):</strong> Dental tedaviler, bariatrik cerrahi ve ortopedi talebi baskın.</li>
  <li><strong>Almanya (%15):</strong> Türk diasporası ve Alman vatandaşlarının göz, diş ve estetik tercihleri.</li>
  <li><strong>Azerbaycan ve Gürcistan (%12):</strong> Kapsamlı check-up, onkoloji ve kardiyoloji sevkleri.</li>
  <li><strong>Irak ve Körfez Bölgesi (%11):</strong> Pediatrik cerrahi, organ nakli ve rehabilitasyon.</li>
  <li><strong>Rusya ve BDT Ülkeleri (%9):</strong> Medikal estetik ve termal sağlık turizmi.</li>
</ol>

<h2>Sektörel Değerlendirme: 2026 Yıl Sonu Hedefi Yakalanabilir mi?</h2>
<p>Ticaret Bakanlığı'nın <a href="/haber/saglik-turizmi-tesvikleri-nelerdir-2026-guncel-rehber" class="text-[#00A6A6] font-semibold underline">sağlık turizmi devlet teşvikleri</a> kapsamında sunduğu reklam, fuar ve yurt dışı birim destekleri, Türk markalarının hedef pazarlarda kalıcı olmasını sağladı. Yılın ilk yarısında kümülatif olarak 1,48 milyar dolar seviyesine ulaşıldı. Geleneksel olarak üçüncü çeyreğin turizm sezonuyla birleşen tepe noktası göz önüne alındığında, Türkiye'nin 2026 yıl sonu 3,2 milyar dolarlık sağlık turizmi gelir hedefine ulaşması kuvvetle muhtemel görülüyor.</p>
`
  },
  {
    id: 'art-master-157',
    slug: '2026-saglik-turizmi-yetki-belgeli-kurum-listesi-sehir-analizi',
    title: '2026 Sağlık Turizmi Yetki Belgeli Kurum Listesi Nasıl Değişti? Şehir Şehir Kapsamlı Analiz',
    spot: 'Sağlık Bakanlığı’nın güncellenen resmi kayıtlarına göre Türkiye genelinde yetki belgeli sağlık tesisi sayısı 4.100’ü, yetkili aracı kuruluş sayısı ise 1.050’yi aştı. 81 ilin yetki belgesi haritası, muayenehane artış hızı ve bölgesel yoğunlaşma trendleri.',
    seoTitle: '2026 Yetki Belgeli Kurum Listesi Değişimi: 81 İl Analizi',
    seoDescription: '2026 güncel sağlık turizmi yetki belgeli hastane, klinik ve aracı kuruluşların il bazında dağılımı, büyüme oranları ve bölgesel analiz.',
    category: 'arastirma',
    contentType: 'arastirma',
    status: 'yayimlandi',
    featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'İstanbul, Antalya ve İzmir Türkiye genelindeki yetki belgeli sağlık tesislerinin yüzde 72’sine ev sahipliği yapıyor.',
    imageSource: 'Sağlık Turizmi Radarı / Araştırma Masası',
    publishedAt: '2026-09-18T09:15:00.000Z',
    updatedAt: '2026-09-18T10:00:00.000Z',
    readingTime: 7,
    authorId: 'editorial',
    isHeadline: false,
    isSecondaryHeadline: true,
    isBreaking: false,
    isEditorPick: true,
    tags: ['yetki belgesi', 'sağlık tesisleri', 'aracı kuruluşlar', 'istanbul sağlık turizmi', 'antalya sağlık turizmi', 'sağlık bakanlığı'],
    sources: [
      { name: 'Sağlık Turizmi Daire Başkanlığı Resmî Veritabanı', url: 'https://shgmturizmdb.saglik.gov.tr', isOfficial: true }
    ],
    specialFields: {
      arastirma: {
        executiveSummary: '2026 yılı itibarıyla yetki belgeli sağlık tesisi sayısı 4.142’ye, aracı kuruluş sayısı 1.074’e yükseldi. Muayenehane ve poliklinik yetkilendirmelerinde yıllık %28 artış görüldü.',
        methodology: 'Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü Yetkili Sağlık Tesisleri ve Aracı Kuruluşlar Listesi il il tasnif edilerek büyüme oranları hesaplanmıştır.',
        sampleInfo: '81 ildeki tüm yetkili hastane, tıp merkezi, poliklinik, muayenehane ve A grubu seyahat acentaları.',
        dateRange: 'Ocak 2025 - Eylül 2026',
        findings: [
          'İstanbul 2.140 tesisle (%51,6) liderliğini koruyor.',
          'Antalya dental ve estetik klinik artışında %34 büyüme ile en hızlı yükselen il oldu.',
          'Muayenehanelerin yetki belgesi alma oranı hastanelerin büyüme hızını 3’e katladı.',
          'Yetkisiz aracılık denetimleri sonucu 68 kuruluşun belgesi askıya alındı veya iptal edildi.'
        ],
        dataSources: ['Sağlık Bakanlığı SHGM Kayıtları', 'TÜRSAB Acente Sicili']
      }
    },
    content: `
<p>Sağlık Bakanlığı Sağlık Turizmi Daire Başkanlığı tarafından periyodik olarak yayımlanan <strong>Uluslararası Sağlık Turizmi Yetki Belgeli Sağlık Tesisleri ve Aracı Kuruluşlar Listesi</strong>, 2026 yılı üçüncü çeyreği itibarıyla taranarak sektörün coğrafi ve kurumsal dönüşümü haritalandırıldı.</p>

<p>Elde edilen bulgular, sağlık turizminin belirli metropollerde yoğunlaşmayı sürdürdüğünü ancak Anadolu kentlerinde üniversite ve şehir hastanelerinin devreye girmesiyle yeni aksların oluştuğunu belgeliyor.</p>

<h2>Kurum Türlerine Göre Dağılım</h2>
<p>Toplam 4.142 yetki belgeli sağlık tesisinin kurumsal yapısı incelendiğinde, en büyük sıçramanın serbest hekim muayenehaneleri ve ağız-diş sağlığı polikliniklerinde gerçekleştiği görülüyor.</p>

<div class="overflow-x-auto my-6">
  <table class="min-w-full text-xs text-left border border-[#DDE3E8]">
    <thead class="bg-[#102A43] text-white">
      <tr>
        <th class="p-3">Kurum Türü</th>
        <th class="p-3">2025 Başı</th>
        <th class="p-3">2026 Güncel</th>
        <th class="p-3">Net Artış</th>
        <th class="p-3">Toplam Payı (%)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      <tr>
        <td class="p-3 font-semibold">Özel Hastaneler & Üniversite Hastaneleri</td>
        <td class="p-3">542</td>
        <td class="p-3 font-bold">598</td>
        <td class="p-3 text-emerald-700 font-bold">+56</td>
        <td class="p-3">%14,4</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Tıp Merkezleri & Poliklinikler</td>
        <td class="p-3">1.120</td>
        <td class="p-3 font-bold">1.345</td>
        <td class="p-3 text-emerald-700 font-bold">+225</td>
        <td class="p-3">%32,5</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Ağız ve Diş Sağlığı Merkezleri (ADSM/ADSP)</td>
        <td class="p-3">780</td>
        <td class="p-3 font-bold">982</td>
        <td class="p-3 text-emerald-700 font-bold">+202</td>
        <td class="p-3">%23,7</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Hekim Muayenehaneleri</td>
        <td class="p-3">890</td>
        <td class="p-3 font-bold">1.217</td>
        <td class="p-3 text-emerald-700 font-bold">+327</td>
        <td class="p-3">%29,4</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Yetkili Aracı Kuruluşlar (Acentalar)</td>
        <td class="p-3">865</td>
        <td class="p-3 font-bold">1.074</td>
        <td class="p-3 text-emerald-700 font-bold">+209</td>
        <td class="p-3">-</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>İl Bazında Yoğunlaşma: İlk 5 Şehir</h2>
<ol class="space-y-2 my-4">
  <li><strong>İstanbul (2.140 Tesis - %51,6):</strong> Türkiye'nin tartışmasız sağlık turizmi başkenti. Özellikle saç ekimi, plastik cerrahi ve onkoloji alanlarında açık ara lider.</li>
  <li><strong>Antalya (585 Tesis - %14,1):</strong> Dental turizm ve medikal estetik alanında Avrupa'nın en yoğun destinasyonlarından biri haline geldi. Yabancı dilli personel istihdam oranı en yüksek il.</li>
  <li><strong>Ankara (390 Tesis - %9,4):</strong> İleri cerrahi, organ nakli ve kamu-üniversite hastanesi sevklerinde merkez konumunda.</li>
  <li><strong>İzmir (310 Tesis - %7,5):</strong> Termal sağlık turizmi, geriatri ve diş kliniklerinde Ege bölgesinin üssü.</li>
  <li><strong>Bursa (128 Tesis - %3,1):</strong> Termal tesisler ve genel cerrahi branşlarında Orta Doğu hastalarının öncelikli tercihi.</li>
</ol>

<h2>Aracı Kuruluş Pazarında Eleme Süreci</h2>
<p><a href="/haber/saglik-turizmi-acentesi-nasil-kurulur" class="text-[#00A6A6] font-semibold underline">Sağlık turizmi acentesi kurmak</a> isteyen girişimcilerin sayısındaki artışa karşın, Bakanlığın denetimleri sertleşti. 2026 yılı denetimlerinde çağrı merkezi altyapısını kurmayan, sözleşmeli 2 yetkili tesis şartını kaybeden veya yabancı dil yeterlilik şartını sağlayamayan 68 aracı kuruluşun yetki belgesi askıya alındı veya tamamen iptal edildi.</p>
`
  },
  {
    id: 'art-master-158',
    slug: 'saglik-turizmi-sertifikasyon-kriter-seti-yeni-standartlar',
    title: 'Sağlık Turizmi Sertifikasyon Kriter Seti: Kuruluşları Bekleyen Yeni Standartlar ve Denetim Rehberi',
    spot: 'Sağlık Bakanlığı ve TÜSKA iş birliğiyle hazırlanan Uluslararası Sağlık Turizmi Sertifikasyon Kriter Seti yürürlüğe giriyor. Sağlık tesisleri ve aracı kuruluşlar için zorunlu kılınan klinik kalite, hasta güvenliği ve dijital altyapı standartlarının analizi.',
    seoTitle: 'Sağlık Turizmi Sertifikasyon Kriter Seti: Yeni Standartlar',
    seoDescription: 'Sağlık turizminde yeni sertifikasyon kriter seti neleri kapsıyor? Tesisler ve acentalar için denetim başlıkları, puanlama baremleri ve uyum rehberi.',
    category: 'mevzuat',
    contentType: 'mevzuat',
    status: 'yayimlandi',
    featuredImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'TÜSKA onaylı yeni sertifikasyon seti, uluslararası akreditasyon standartlarını Türkiye mevzuatına entegre ediyor.',
    imageSource: 'Sağlık Turizmi Radarı / Mevzuat Masası',
    publishedAt: '2026-09-18T08:30:00.000Z',
    updatedAt: '2026-09-18T09:00:00.000Z',
    readingTime: 9,
    authorId: 'av-elif-demir',
    isHeadline: false,
    isSecondaryHeadline: true,
    isBreaking: true,
    breakingBadge: 'MEVZUAT DEĞİŞİKLİĞİ',
    isEditorPick: true,
    tags: ['sertifikasyon kriter seti', 'tüska', 'sağlık bakanlığı mevzuat', 'akreditasyon', 'klinik kalite', 'denetim'],
    sources: [
      { name: 'T.C. Resmî Gazete', url: 'https://www.resmigazete.gov.tr', isOfficial: true },
      { name: 'TÜSKA Türkiye Sağlık Hizmetleri Kalite ve Akreditasyon Enstitüsü', url: 'https://tuska.saglik.gov.tr', isOfficial: true }
    ],
    specialFields: {
      mevzuat: {
        neDegisti: [
          'Uluslararası hasta birimlerinde ISO 22525 ve TÜSKA standartlarını temel alan 6 ana başlık zorunlu kılındı.',
          'Çok dilli aydınlatılmış onam formlarının dijital ve zaman damgalı arşivlenmesi zorunluluğu getirildi.',
          'Taburculuk sonrası ilk 90 gün boyunca hastaya ulaşılabilirlik ve komplikasyon kayıt sistemi mecbur kılındı.'
        ],
        kimleriIlgilendiriyor: [
          'Yetki belgesine sahip tüm özel hastane, tıp merkezi ve poliklinikler',
          'Uluslararası sağlık turizmi aracı kuruluşları (A Grubu Seyahat Acentaları)',
          'Yurt dışı hasta kabul eden serbest hekim muayenehaneleri'
        ],
        yururlukTarihi: '1 Ocak 2027 (12 aylık geçiş süreci tanındı)',
        resmiKaynakUrl: 'https://shgmturizmdb.saglik.gov.tr',
        resmiGazeteNo: '2026/33120 Sayılı Tebliğ',
        sektoreEtkisi: 'Yetki belgesini pasif biçimde elinde tutan kurumlar elenecek; gerçek operasyonel kapasitesi, dijital altyapısı ve tıbbi tercüman kadrosu olan kurumlar öne çıkacak.'
      }
    },
    content: `
<p>Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü ile Türkiye Sağlık Hizmetleri Kalite ve Akreditasyon Enstitüsü (TÜSKA) tarafından uzun süredir hazırlığı yürütülen <strong>Uluslararası Sağlık Turizmi Sertifikasyon Kriter Seti</strong> resmen yayımlandı. Yeni düzenleme, yetki belgesi sahibi kurumların yalnızca kağıt üzerinde değil, fiili operasyonel süreçlerde de küresel hasta güvenliği normlarına uymasını şart koşuyor.</p>

<div class="my-6 p-5 bg-[#F5F7F9] border-l-4 border-[#00A6A6] rounded-r text-slate-800">
  <h4 class="font-bold text-[#102A43] text-base mb-2">Kuruluşlar İçin Kritik Uyum Takvimi</h4>
  <p class="text-sm leading-relaxed mb-0">Tebliğ uyarınca mevcut yetki belgeli kuruluşlara <strong>12 aylık intibak süresi</strong> tanınmıştır. Bu sürenin sonunda denetimden 100 üzerinden en az 80 puan alamayan tesislerin yetki belgeleri askıya alınacaktır.</p>
</div>

<h2>Sertifikasyon Kriter Setinin 6 Temel Boyutu</h2>
<p>Yeni kriter seti, uluslararası hastanın ilk temasa geçtiği andan ülkesine dönüp iyileşme sürecini tamamlayana kadar geçen tüm basamakları denetim kapsamına almaktadır:</p>

<ol class="space-y-3 my-4">
  <li><strong>1. Dijital İletişim ve Şeffaf Fiyatlandırma:</strong> Web sitelerinde ve teklif dokümanlarında tedavi maliyeti, doktor özgeçmişi, olası komplikasyon oranları ve ek masraflar gizli maliyet bırakılmaksızın yazılı olarak sunulmalıdır.</li>
  <li><strong>2. Çok Dilli Aydınlatılmış Onam Standardı:</strong> Onam formları Google Translate gibi kontrolsüz araçlarla değil; tıbbi terminolojiye hakim yeminli tercümanlarca çevrilmiş, hastanın ana dilinde veya tam hakim olduğu dilde hazırlanmalıdır.</li>
  <li><strong>3. Sınır Ötesi Hasta Güvenliği ve Enfeksiyon Kontrolü:</strong> Cerrahi operasyon geçirecek hastaların uçuş uygunluk raporları (Fit to Fly) ve derin ven trombozu (DVT) profilaksisi zorunlu protokole bağlanmıştır.</li>
  <li><strong>4. 7/24 Kesintisiz İletişim Altyapısı:</strong> Ameliyat sonrası dönemde hastanın Türkiye'deyken veya ülkesine döndükten sonra acil durumlarda ulaşabileceği nöbetçi tıbbi koordinatör hattı kurulmalıdır.</li>
  <li><strong>5. Aftercare ve Komplikasyon Takip Protokolü:</strong> Taburculuk sonrası 7, 30 ve 90. günlerde hastanın iyileşme durumu dijital ortamda kayıt altına alınmalı; komplikasyon bildirimleri Sağlık Bakanlığı sistemine raporlanmalıdır.</li>
  <li><strong>6. KVKK ve Sınır Ötesi Veri Güvenliği:</strong> Hastanın pasaport, epikriz ve medikal tahlil verileri WhatsApp gibi kontrolsüz kanallar yerine şifreli hasta portalları üzerinden iletilmelidir.</li>
</ol>

<h2>Tesisler Denetime Nasıl Hazırlanmalı?</h2>
<p>Klinik ve acentalar denetim sürecine hazırlanırken öncelikle kurum içi prosedürlerini revize etmelidir. Daha önce hazırladığımız <a href="/haber/saglik-turizmi-yetki-belgesi-sartlari-2026-guncel-kontrol-listesi" class="text-[#00A6A6] font-semibold underline">2026 Yetki Belgesi Kontrol Listesi</a> ile yeni TÜSKA setini eşleştirmek zaman kazandıracaktır.</p>
`
  },
  {
    id: 'art-master-159',
    slug: 'saglik-turizmi-dil-yeterlilik-sinavi-nedir-kimler-girmeli',
    title: 'Sağlık Turizmi Dil Yeterlilik Sınavı Nedir? Kimler Girmeli ve Hangi Seviye İsteniyor?',
    spot: 'Sağlık Bakanlığı yetki belgesi süreçlerinde uluslararası hasta birim personeli ve tercümanlar için aranan yabancı dil yeterliliğinde denetimler sıkılaştırıldı. Ankara Üniversitesi TÖMER ve ÖSYM eşdeğerlikleri, zorunlu B2/C1 şartları ve muafiyet kriterleri.',
    seoTitle: 'Sağlık Turizmi Dil Yeterlilik Sınavı: Şartlar ve Rehber',
    seoDescription: 'Sağlık turizmi birim personeli ve tercümanlar için dil yeterlilik sınavı nedir? Kimler zorunlu, hangi diller geçerli ve muafiyet yolları nelerdir?',
    category: 'gundem',
    contentType: 'haber',
    status: 'yayimlandi',
    featuredImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Uluslararası hasta birimlerinde görev yapan personelin dil belgeleri il sağlık müdürlüğü denetimlerinde titizlikle inceleniyor.',
    imageSource: 'Sağlık Turizmi Radarı / Eğitim & Kariyer',
    publishedAt: '2026-09-18T07:45:00.000Z',
    updatedAt: '2026-09-18T08:00:00.000Z',
    readingTime: 6,
    authorId: 'av-elif-demir',
    isHeadline: false,
    isSecondaryHeadline: false,
    isBreaking: false,
    isEditorPick: false,
    tags: ['dil yeterlilik sınavı', 'tömer', 'uluslararası hasta birimi', 'tıbbi tercüman', 'yetki belgesi şartı'],
    sources: [
      { name: 'Sağlık Turizmi Daire Başkanlığı Personel Yönergesi', url: 'https://shgmturizmdb.saglik.gov.tr', isOfficial: true },
      { name: 'Ankara Üniversitesi TÖMER Sınav Merkezi', url: 'https://tomer.ankara.edu.tr', isOfficial: false }
    ],
    content: `
<p>Sağlık turizmi yetki belgesi almak veya mevcut yetki belgesini yenilemek isteyen sağlık tesisleri ve aracı kuruluşların en çok takıldığı konuların başında <strong>Yabancı Dil Yeterlilik Şartı</strong> gelmektedir. Son dönemde İl Sağlık Müdürlükleri tarafından yapılan rutin denetimlerde, dil belgesi bulunmayan veya mevzuata uygun olmayan sertifikalarla istihdam edilen personeller nedeniyle birçok kliniğe uyarı ve idari yaptırım uygulanmıştır.</p>

<h2>Kimler Dil Yeterlilik Belgesi Sunmak Zorunda?</h2>
<p>Uluslararası Sağlık Turizmi ve Turistin Sağlığı Hakkında Yönetmelik gereğince aşağıdaki pozisyonlarda çalışan personelin dil yeterliliğini belgelemesi yasal zorunluluktur:</p>
<ul class="space-y-2 my-4 list-disc pl-5">
  <li><strong>Uluslararası Hasta Birimi Sorumlusu:</strong> Sağlık tesislerinde yabancı hastaların kabul, kayıt ve koordinasyonunu yürüten birim yöneticisi.</li>
  <li><strong>Tıbbi Tercümanlar:</strong> Hekim ile hasta arasındaki klinik görüşmelerde, ameliyat öncesi ve sonrası bilgilendirmede çeviri yapan personel.</li>
  <li><strong>Aracı Kuruluş Sağlık Turizmi Müdürü:</strong> Yetkili acentalarda operasyonun başında bulunan sorumlu müdür.</li>
</ul>

<h2>Hangi Sınavlar ve Seviyeler Kabul Ediliyor?</h2>
<div class="overflow-x-auto my-6">
  <table class="min-w-full text-xs text-left border border-[#DDE3E8]">
    <thead class="bg-[#102A43] text-white">
      <tr>
        <th class="p-3">Sınav / Kurum Türü</th>
        <th class="p-3">Asgari Puan / Seviye</th>
        <th class="p-3">Geçerlilik Notu</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      <tr>
        <td class="p-3 font-semibold">ÖSYM YDS / e-YDS / YÖKDİL</td>
        <td class="p-3 font-bold">En az 65 Puan (İngilizce/Almanca/Fransızca/Arapça/Rusça)</td>
        <td class="p-3">5 yıl geçerlidir.</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">Ankara Üniversitesi TÖMER</td>
        <td class="p-3 font-bold">En az B2 (Tıbbi Tercümanlar için C1 tavsiye edilir)</td>
        <td class="p-3">Sağlık Bakanlığı protokolü kapsamında resmi geçerli.</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">TOEFL IBT</td>
        <td class="p-3 font-bold">En az 79 Puan</td>
        <td class="p-3">ÖSYM eşdeğerlik tablosuna tabidir (2 yıl).</td>
      </tr>
      <tr>
        <td class="p-3 font-semibold">IELTS Academic</td>
        <td class="p-3 font-bold">Kabul edilmiyor (ÖSYM eşdeğerliği kalktı)</td>
        <td class="p-3 text-rose-700 font-bold">Dikkat: Kamu denetimlerinde kabul edilmez.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Kimler Dil Sınavından Muaftır?</h2>
<p>Aşağıdaki şartları sağlayan personelden ayrıca bir dil sınavı sonucu istenmez:</p>
<ol class="space-y-2 my-4">
  <li>Öğretim dili ilgili yabancı dil olan bir üniversitenin lisans programından (Tıp, Mütercim-Tercümanlık, Dil ve Edebiyat vb.) mezun olanlar (Diploma ibrazı yeterlidir).</li>
  <li>İlgili dilin anadil olarak konuşulduğu bir ülkede en az 3 yıl ortaöğrenim veya yükseköğrenim gördüğünü resmi denklik belgesiyle kanıtlayanlar.</li>
  <li>Yabancı uyruklu olup Türk soylular kanunu kapsamında çalışan veya çalışma izni bulunan ana dil konuşucuları (diploma ve pasaport kayıtları ile teyit edilir).</li>
</ol>

<p>Yetki belgesi sürecindeki diğer adımları incelemek için <a href="/haber/saglik-turizmi-yetki-belgesi-nasil-alinir-adim-adim-basvuru" class="text-[#00A6A6] font-semibold underline">Adım Adım Yetki Belgesi Başvuru Kılavuzumuzu</a> ziyaret edebilirsiniz.</p>
`
  },
  {
    id: 'art-master-160',
    slug: 'kamu-saglik-hizmetleri-fiyat-tarifesi-degisikligi-analizi',
    title: 'Kamu Sağlık Hizmetleri Fiyat Tarifesindeki Değişiklik Sağlık Turizmini Nasıl Etkiler?',
    spot: 'Sağlık Bakanlığı Kamu Sağlık Hizmetleri Fiyat Tarifesi (KSHFT) Uluslararası Hasta Katsayılarında yapılan son güncelleme, şehir hastaneleri ile özel sektör klinikleri arasındaki fiyat dengesini yeniden tanımlıyor. Değişikliğin sektöre 5 temel yansıması.',
    seoTitle: 'Kamu Sağlık Hizmetleri Fiyat Tarifesi Değişikliği ve Sağlık Turizmi',
    seoDescription: 'Kamu sağlık hizmetleri fiyat tarifesi katsayı artışı sağlık turizmini nasıl etkileyecek? Özel hastaneler, yabancı hasta faturalandırması ve rekabet analizi.',
    category: 'analiz',
    contentType: 'analiz',
    status: 'yayimlandi',
    featuredImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'KSHFT katsayılarındaki artış kamu hastanelerinin yabancı hastaya sunduğu cerrahi fiyatlarını özel sektör seviyesine yaklaştırdı.',
    imageSource: 'Sağlık Turizmi Radarı / Finans Masası',
    publishedAt: '2026-09-18T07:00:00.000Z',
    updatedAt: '2026-09-18T07:30:00.000Z',
    readingTime: 7,
    authorId: 'dr-selim-yilmaz',
    isHeadline: false,
    isSecondaryHeadline: false,
    isBreaking: false,
    isEditorPick: false,
    tags: ['fiyat tarifesi', 'kamu hastaneleri', 'kshft', 'uluslararası hasta katsayısı', 'sağlık ekonomisi', 'sağlık bakanlığı'],
    sources: [
      { name: 'Sağlık Bakanlığı Kamu Sağlık Hizmetleri Fiyat Tarifesi Ekleri', url: 'https://shgm.saglik.gov.tr', isOfficial: true }
    ],
    specialFields: {
      analiz: {
        nedenOnemli: 'Kamu hastaneleri ve şehir hastanelerinin uluslararası hasta operasyonlarında uyguladığı taban fiyatların güncellenmesi, özel sektörün fiyatlandırma esnekliğini doğrudan etkilemektedir.',
        metodoloji: 'Resmî Gazete ve SHGM duyurularındaki işlem katsayıları geçmiş dönem fiyat listeleriyle karşılaştırılmıştır.',
        temelCikarim: 'Kamu hastanelerinde yabancı hasta işlem fiyatlarının ortalama %25 artması, özel hastanelerin rekabet gücünü artırırken ucuz fiyatla hasta çeken komisyoncu modelleri daraltacaktır.'
      }
    },
    content: `
<p>Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü tarafından yayımlanan <strong>Kamu Sağlık Hizmetleri Fiyat Tarifesi (KSHFT)</strong> güncellemesi, Türkiye'de tedavi gören yabancı hastaların kamu sağlık tesislerindeki faturalandırma kurallarını yeniden düzenledi. Yapılan düzenleme ile özellikle "Uluslararası Sağlık Turizmi ve Turistin Sağlığı" kapsamında sunulan A1, A2 ve B grubu özellikli cerrahi işlemlerin katsayılarında belirgin bir artışa gidildi.</p>

<h2>Tarife Değişikliğinin 5 Stratejik Sonucu</h2>

<h3>1. Kamu ve Özel Sektör Arasındaki Fiyat Makası Daraldı</h3>
<p>Geçmiş yıllarda şehir hastaneleri ve üniversite hastaneleri, özel hastanelere kıyasla %40-50 daha düşük paket fiyatlar sunabiliyordu. Yeni katsayı artışıyla birlikte bu fark %15-20 bandına indi. Bu durum, yabancı hastaların otelcilik konforu ve birebir koordinatör hizmeti sunan özel hastane gruplarını tercih etme eğilimini artıracaktır.</p>

<h3>2. USHAŞ Yetkili Acentalarına Yeni Fiyatlandırma Disiplini</h3>
<p>Kamu hastaneleri üzerinden yabancı hasta getiren sağlık turizmi aracı kuruluşları için işlem bedelleri yükseldiği için, acentaların kâr marjları ve paket tur maliyetleri yeniden hesaplanmak zorundadır.</p>

<h3>3. Turistin Sağlığı Kapsamındaki Acil Vakalar</h3>
<p>Tatil beldelerinde (Antalya, Muğla, Aydın) acil servislere başvuran turistlerin faturalandırılmasında KSHFT ekindeki yabancı hasta çarpanı devreye girmektedir. Seyahat sigortası şirketleri ile kamu hastaneleri arasındaki provizyon süreçlerinde yeni tarife esas alınacaktır.</p>

<h3>4. Nitelikli Ameliyatlarda Kamu Kapasitesinin Verimli Kullanımı</h3>
<p>Fiyatların güncellenmesi, kamu hekimlerinin sağlık turizmi döner sermaye gelir payını artırarak nitelikli cerrahların kamu hastanelerinde sağlık turisti kabul etme motivasyonunu yükseltmektedir.</p>

<h3>5. Sağlık Turizminde 'Ucuz Ülke' İmajından 'Kalite Odaklı Değer' Aşamasına Geçiş</h3>
<p>Türkiye'nin uluslararası pazarda kontrolsüz fiyat kırma (dumping) rekabetinden uzaklaşması, ülkenin genel tıbbi marka değerini güçlendirecektir.</p>
`
  },
  {
    id: 'art-master-161',
    slug: 'ushas-2025-faaliyet-raporu-saglik-turizmi-15-bulgu',
    title: 'USHAŞ 2025 Faaliyet Raporu: Türkiye Sağlık Turizmi İçin Öne Çıkan 15 Stratejik Bulgu',
    spot: 'Uluslararası Sağlık Hizmetleri A.Ş. (USHAŞ) tarafından yayımlanan 2025 Faaliyet Raporu, Türkiye’nin sınır ötesi sağlık operasyonlarının röntgenini çekiyor. HealthTürkiye platformu istatistikleri, küresel tanıtım harcamaları ve hedef pazarlar mercek altında.',
    seoTitle: 'USHAŞ 2025 Faaliyet Raporu: Sağlık Turizminde 15 Stratejik Bulgu',
    seoDescription: 'USHAŞ 2025 Faaliyet Raporu’ndan sağlık turizmi sektörü için çıkarılan 15 kritik veri. HealthTürkiye büyümesi, tanıtım destekleri ve hedef pazarlar.',
    category: 'arastirma',
    contentType: 'arastirma',
    status: 'yayimlandi',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'USHAŞ Faaliyet Raporu, kamu ve özel sektörün sağlık turizmindeki küresel büyümesini verilerle ortaya koyuyor.',
    imageSource: 'Sağlık Turizmi Radarı / Rapor Analizi',
    publishedAt: '2026-09-18T06:30:00.000Z',
    updatedAt: '2026-09-18T07:00:00.000Z',
    readingTime: 8,
    authorId: 'editorial',
    isHeadline: false,
    isSecondaryHeadline: false,
    isBreaking: false,
    isEditorPick: true,
    tags: ['ushaş', 'faaliyet raporu', 'healthtürkiye', 'sağlık turizmi tanıtımı', 'hedef pazarlar', 'sektörel rapor'],
    sources: [
      { name: 'USHAŞ Yıllık Faaliyet Raporları Portalı', url: 'https://www.ushas.gov.tr', isOfficial: true }
    ],
    specialFields: {
      arastirma: {
        executiveSummary: 'USHAŞ 2025 Faaliyet Raporu, HealthTürkiye platformunun yıllık 3,8 milyon tekil yabancı ziyaretçiye ulaştığını ve küresel tanıtım kampanyalarının 14 hedef ülkede yoğunlaştığını gösteriyor.',
        methodology: 'USHAŞ 2025 Yıllık Kurumsal Faaliyet Raporu finansal tabloları, dijital metrikleri ve pazar geliştirme faaliyetleri incelenerek 15 ana başlıkta özetlenmiştir.',
        sampleInfo: 'USHAŞ yurt dışı temsilcilikleri, HealthTürkiye web ve çağrı merkezi verileri, kamu tanıtım harcamaları.',
        dateRange: '1 Ocak 2025 - 31 Aralık 2025',
        findings: [
          'HealthTürkiye platformu üzerinden 182 bin doğrudan hasta bilgi talebi alındı.',
          'En çok tanıtım harcaması yapılan ülkeler İngiltere, Almanya, Kazakistan ve Irak oldu.',
          'Yurt dışı sağlık turizmi fuarlarına katılım sağlayan 420 Türk sağlık kuruluşuna destek verildi.',
          'Kamu hastanelerinde tedavi gören yabancı hasta sayısı %18 artış gösterdi.'
        ],
        dataSources: ['USHAŞ 2025 Faaliyet Raporu', 'Ticaret Bakanlığı Destek Yönetim Sistemi']
      }
    },
    content: `
<p>Sağlık Bakanlığı'nın ilgili kuruluşu olan <strong>Uluslararası Sağlık Hizmetleri A.Ş. (USHAŞ)</strong>, 2025 yılına ait kapsamlı faaliyet raporunu kamuoyuyla paylaştı. Türkiye'nin küresel çatı sağlık markası olan <em>HealthTürkiye</em> projesinin yöneticisi olan USHAŞ'ın verileri, hem kamu hem de özel sektör sağlık kuruluşları için kritik öngörüler sunuyor.</p>

<h2>Rapordan Öne Çıkan 15 Stratejik Bulgu</h2>

<div class="space-y-4 my-6">
  <div class="p-4 bg-slate-50 border border-slate-200 rounded">
    <h4 class="font-bold text-[#102A43] text-sm">1. HealthTürkiye Ziyaretçi Rekoru</h4>
    <p class="text-xs text-slate-700 mt-1 mb-0">HealthTürkiye portalı 2025 yılında 6 farklı dilde 3,8 milyon tekil yabancı ziyaretçiye ulaştı. Ziyaretçilerin %41'i doğrudan yetkili hastane ve klinik listelerine tıkladı.</p>
  </div>

  <div class="p-4 bg-slate-50 border border-slate-200 rounded">
    <h4 class="font-bold text-[#102A43] text-sm">2. En Yüksek Hasta Talebi Alan Branşlar</h4>
    <p class="text-xs text-slate-700 mt-1 mb-0">Platforma gelen 182 bin randevu talebinde ilk üç sırayı Ağız ve Diş Sağlığı (%26), Ortopedi ve Travmatoloji (%19) ve Göz Hastalıkları (%16) aldı.</p>
  </div>

  <div class="p-4 bg-slate-50 border border-slate-200 rounded">
    <h4 class="font-bold text-[#102A43] text-sm">3. Yurt Dışı Tanıtım ve Fuar Desteği</h4>
    <p class="text-xs text-slate-700 mt-1 mb-0">USHAŞ koordinasyonunda Londra, Berlin, Dubai, Taşkent ve Bakü dahil olmak üzere 18 uluslararası sağlık fuarında Türkiye milli katılım pavyonu açıldı.</p>
  </div>

  <div class="p-4 bg-slate-50 border border-slate-200 rounded">
    <h4 class="font-bold text-[#102A43] text-sm">4. İlaç ve Tıbbi Cihaz İhracatı Entegrasyonu</h4>
    <p class="text-xs text-slate-700 mt-1 mb-0">Sağlık turizminin yanı sıra Türk ilaç ve medikal cihaz üreticilerinin hedef pazarlara açılması için 24 ikili iş forumu (B2B) organize edildi.</p>
  </div>

  <div class="p-4 bg-slate-50 border border-slate-200 rounded">
    <h4 class="font-bold text-[#102A43] text-sm">5. Çağrı Merkezi Çözüm Hızı</h4>
    <p class="text-xs text-slate-700 mt-1 mb-0">HealthTürkiye 7/24 çok dilli çağrı merkezine gelen acil çağrılara yanıt verme süresi ortalama 18 saniyeye indirildi.</p>
  </div>
</div>

<p>USHAŞ ve Bakanlıkların ortak projeleri hakkında detaylı bilgiye <a href="/haber/ushas-kultur-turizm-bakanligi-saglik-turizmi-tanitimi" class="text-[#00A6A6] font-semibold underline">USHAŞ ile Kültür ve Turizm Bakanlığı Ortak Tanıtım Projesi</a> yazımızdan ulaşabilirsiniz.</p>
`
  },
  {
    id: 'art-master-162',
    slug: 'uluslararasi-hasta-direktoru-ile-roportaj-yabanci-hasta-yonetimi',
    title: 'Uluslararası Hasta Direktörü ile Röportaj: Bir Hastane Yabancı Hastayı Uçaktan Taburculuğa Nasıl Yönetiyor?',
    spot: '40’ı aşkın ülkeden yılda 12 binden fazla hasta kabul eden özel bir hastane grubunun Uluslararası Hasta Hizmetleri Direktörü Burak Tunçer ile sınır ötesi hasta koordinasyonu, kültürel triyaj, aftercare ve kriz yönetimini konuştuk.',
    seoTitle: 'Uluslararası Hasta Direktörü ile Röportaj: Yabancı Hasta Yönetimi',
    seoDescription: 'Uluslararası hasta direktörü Burak Tunçer ile sınır ötesi hasta yönetimi, kültürel beklentiler, aftercare protokolleri ve kriz süreçleri üzerine özel röportaj.',
    category: 'roportaj',
    contentType: 'roportaj',
    status: 'yayimlandi',
    featuredImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Burak Tunçer: "Sağlık turizmi havalimanında başlamaz; hastanın kendi evinde web sitenize girdiği saniyede başlar."',
    imageSource: 'Sağlık Turizmi Radarı / Özel Röportaj',
    publishedAt: '2026-09-18T06:00:00.000Z',
    updatedAt: '2026-09-18T06:30:00.000Z',
    readingTime: 10,
    authorId: 'dr-zeynep-kaya',
    isHeadline: false,
    isSecondaryHeadline: true,
    isBreaking: false,
    isEditorPick: true,
    tags: ['röportaj', 'uluslararası hasta yönetimi', 'hasta koordinatörü', 'aftercare', 'kültürel triyaj', 'hastane operasyonu'],
    sources: [
      { name: 'Sağlık Turizmi Radarı Özel Röportaj Masası', isOfficial: false }
    ],
    specialFields: {
      roportaj: {
        guestName: 'Burak Tunçer',
        guestTitle: 'Uluslararası Hasta Hizmetleri Direktörü',
        guestOrganization: 'MedStar International Healthcare Group',
        guestBio: 'Sağlık yönetimi ve uluslararası ilişkiler alanında 16 yıllık kariyere sahip olan Burak Tunçer, JCI akreditasyonlu hastane gruplarında 40\'tan fazla ülkeden gelen yabancı hastaların operasyonel yönetimini ve çok dilli hasta ilişkilerini yönetmektedir.',
        isSponsored: false,
        qaItems: [
          {
            question: 'Sayın Tunçer, bir yabancı hastanın Türkiye’ye geliş kararı ile hastaneye adım atışı arasındaki en hassas operasyonel halka nedir?',
            answer: 'Kesinlikle medikal triyaj ve beklenti yönetimidir. Hastalar bize genellikle WhatsApp veya form üzerinden eksik tetkiklerle gelir. Satış ekibinin "hemen gelirseniz yarın ameliyat ederiz" yaklaşımı ölümcül bir hatadır. Bizim modelimizde uluslararası hasta koordinatörü mutlaka sorumlu cerrahla ön konsey yapar. Tetkik yetersizse hastanın ülkesinde yaptırması istenir. Uçak biletinden önce kesin tıbbi fizibilite ve çok dilli tedavi planı hastaya yazılı verilir.'
          },
          {
            question: 'Kültürel farklılıklar klinik süreçleri ve hasta memnuniyetini nasıl etkiliyor?',
            answer: 'Çok dramatik bir etkisi var. Örneğin bir İngiliz hasta ameliyat öncesi ve sonrası her detayın dakikası dakikasına açıklanmasını, sessizliği ve bireysel mahremiyeti bekler. Körfez bölgesinden gelen bir hasta ise kalabalık ailesiyle (refakatçi ordusuyla) seyahat eder; ona sadece tıbbi değil geniş sosyal ve refakatçi alanları sağlamanız gerekir. Rusça konuşan hastalarda ise somut tıbbi unvanlar, doktorun kıdemi ve laboratuvar parametrelerinin detaylı izahı güvenin anahtarıdır.'
          },
          {
            question: 'Ameliyat sonrası bakımda (Aftercare) Türk kliniklerinin en çok eleştirildiği nokta nedir?',
            answer: 'En zayıf karnımız "hasta uçağa bindi, işlem bitti" algısıydı. Artık bu modelle ayakta kalmak imkansız. Biz hastalarımız ülkelerine döndükten sonra 1. hafta, 1. ay, 3. ay ve 6. ayda otomatik uzaktan video vizitler yapıyoruz. Londra ve Berlin’de partner kliniklerimiz var; küçük bir dikiş alma veya pansuman ihtiyacında hastayı orada karşılıyoruz. Aftercare kurmayan bir hastanenin Trustpilot veya Google yorumlarında hayatta kalma şansı sıfırdır.'
          },
          {
            question: 'Genç hasta koordinatörlerine ve sektöre yeni giren yöneticilere en önemli tavsiyeniz nedir?',
            answer: 'Kendilerini bir "satış temsilcisi" olarak değil, iki farklı sağlık sistemi arasında köprü kuran bir "hasta avukatı" olarak görsünler. Empati yapamayan, tıp terminolojisine hakim olmayan ve kriz anında soğukkanlı kalamayan bir ekiple uluslararası sağlık turizmi yapılamaz.'
          }
        ]
      }
    },
    content: `
<p>Sağlık Turizmi Radarı Editoryal Masası olarak bu ay, Türkiye'nin en büyük özel hastane zincirlerinden birinde 40'ı aşkın ülkeden yılda binlerce hastanın sınır ötesi seyahatini koordine eden <strong>Burak Tunçer</strong> ile bir araya geldik.</p>

<p>Sınır ötesi sağlık hizmetlerinde reklam bütçeleri kadar, operasyonun hastane kapısından içeri girdikten sonraki kalitesi de konuşulmalıdır. Tunçer ile havalimanı transferinden cerrahi planlamaya, aydınlatılmış onamdan komplikasyon anında atılan adımlara kadar yabancı hasta operasyonunun mutfağını konuştuk.</p>

<h2>Röportajdan Çıkarılacak 3 Temel Ders</h2>
<ol class="space-y-2 my-4">
  <li><strong>Hızlı Dönüş Değil, Nitelikli Tıbbi Bilgi Kazandırır:</strong> Hastanın ilk temasında satış baskısı kurmak yerine hekim onaylı tedavi planı sunan klinikler dönüşüm oranında %40 daha başarılı.</li>
  <li><strong>Refakatçi Deneyimi Kararı Belirler:</strong> Özellikle Orta Doğu ve Balkan pazarlarında hastanın yanında gelen refakatçinin memnuniyeti, taburculuk sonrası yeni hasta referanslarının temel kaynağıdır.</li>
  <li><strong>Aftercare Ağı Olmadan Büyünemez:</strong> Hastanın ülkesindeki yerel pratisyen hekim veya klinikle temas kurabilen kurumlar uluslararası itibar sıralamasında zirveye çıkıyor.</li>
</ol>
`
  },
  {
    id: 'art-master-163',
    slug: 'saglik-turizminde-uzaktan-hasta-takibi-aftercare-rehberi',
    title: 'Sağlık Turizminde Uzaktan Hasta Takibi: Ameliyat Sonrası Bakım (Aftercare) Ağı Nasıl Kurulur?',
    spot: 'Ülkesine dönen yabancı hastaların ameliyat sonrası takibi, Türk sağlık turizminin uluslararası güven endeksini belirleyen en kritik aşamadır. Tele-sağlık platformları, uzaktan yara izleme cihazları ve hukuki sorumluluk sınırlarıyla modern aftercare rehberi.',
    seoTitle: 'Sağlık Turizminde Uzaktan Hasta Takibi ve Aftercare Kurulumu',
    seoDescription: 'Yabancı hastaların ameliyat sonrası ülkesinde takibi nasıl yapılır? Tele-tıp altyapısı, komplikasyon uyarı sistemleri ve dijital aftercare rehberi.',
    category: 'teknoloji',
    contentType: 'analiz',
    status: 'yayimlandi',
    featuredImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Yapay zekâ destekli uzaktan yara izleme ve tele-vizit uygulamaları sınır ötesi komplikasyon riskini yüzde 60 azaltıyor.',
    imageSource: 'Sağlık Turizmi Radarı / HealthTech Masası',
    publishedAt: '2026-09-18T05:30:00.000Z',
    updatedAt: '2026-09-18T06:00:00.000Z',
    readingTime: 8,
    authorId: 'murat-aksoy',
    isHeadline: false,
    isSecondaryHeadline: false,
    isBreaking: false,
    isEditorPick: true,
    tags: ['aftercare', 'uzaktan hasta takibi', 'tele-tıp', 'komplikasyon yönetimi', 'sağlık teknolojisi', 'post-op takip'],
    sources: [
      { name: 'WHO Global Patient Safety Action Plan', url: 'https://www.who.int', isOfficial: true },
      { name: 'ISO 22525 Medical Tourism Standard', url: 'https://www.iso.org', isOfficial: true }
    ],
    content: `
<p>Sağlık turizminde hastanın ameliyat masasında başarılı bir operasyon geçirmesi sürecin sadece yarısıdır. Gerçek sınav, hasta valizini toplayıp ülkesine döndükten sonraki ilk 30 günde başlar. Yurt dışı basında Türk sağlık turizmi aleyhine çıkan haberlerin %80'den fazlası ameliyat sırasındaki hatalardan değil; <strong>ülkesine dönen hastanın yalnız bırakılması ve komplikasyonların zamanında yönetilememesinden</strong> kaynaklanmaktadır.</p>

<h2>Modern Aftercare Mimarisinin 4 Teknolojik Katmanı</h2>

<h3>1. Dijital Yara Takibi ve Görsel Analiz Botları</h3>
<p>Plastik cerrahi, saç ekimi veya bariatrik cerrahi geçiren hastaların dikiş ve iyileşme fotoğraflarını düzenli yükleyebileceği güvenli hasta portalları kurulmalıdır. Yapay zekâ destekli görüntü işleme yazılımları, kızarıklık, ödem veya nekroz başlangıcını erken aşamada tespit ederek hekime otomatik uyarı (flag) göndermektedir.</p>

<h3>2. Tele-Vizit (Uzaktan Görüntülü Muayene) Altyapısı</h3>
<p>Taburculuktan sonraki 7. ve 21. günlerde hastayla hekimi buluşturan planlı video vizitler organize edilmelidir. Bu görüşmeler rastgele WhatsApp aramalarıyla değil, hasta kayıt sistemine entegre ve tıbbi gizliliği koruyan tele-tıp platformları üzerinden yürütülmelidir.</p>

<h3>3. Hasta Tarafından Bildirilen Çıktılar (PROM & PREM)</h3>
<p>OECD ve uluslararası sağlık kalite örgütlerinin zorunlu tuttuğu <em>Patient-Reported Outcome Measures (PROM)</em> anketleri dijitalleştirilmelidir. Hastanın ağrı skoru, hareket kabiliyeti ve günlük yaşama dönüş hızı haftalık ölçülmelidir.</p>

<h3>4. Kaynak Ülkede Fiziksel Partner Ağları</h3>
<p>Özellikle İngiltere ve Almanya gibi ana kaynak pazarlarda yerel hemşirelik veya tıp merkezleriyle anlaşma sağlanmalıdır. Olası pansuman değişimi, dren çekimi veya kan tahlili ihtiyaçlarında hastaya kendi şehrinde güvenilir bir adres gösterilmelidir.</p>

<p>Konuyla ilgili teknolojik yatırımlar hakkında <a href="/haber/ushas-innova-saglik-dijital-donusum" class="text-[#00A6A6] font-semibold underline">USHAŞ ve İnnova Sağlık Dijital Dönüşüm Zirvesi</a> detaylarını da okuyabilirsiniz.</p>
`
  },
  {
    id: 'art-master-164',
    slug: 'yapay-zeka-cok-dilli-hasta-iletisimi-firsatlar-ve-hukuki-riskler',
    title: 'Yapay Zekâ Destekli Çok Dilli Hasta İletişimi: Fırsatlar, Tıbbi Hatalar ve Hukuki Sorumluluklar',
    spot: 'Çok dilli LLM triyaj botları ve yapay zekâ çağrı asistanları sağlık turizminde lead yanıt sürelerini saniyelere indirdi. Ancak tıbbi yanlış çeviriler, aydınlatılmış onam ihlalleri ve KVKK cezaları kapıda. Kliniğinizi koruyacak teknolojik ve hukuki yol haritası.',
    seoTitle: 'Sağlık Turizminde Yapay Zekâ ile Çok Dilli İletişim ve Riskler',
    seoDescription: 'Sağlık turizmi kliniklerinde yapay zekâ ve chatbot kullanımı: Çok dilli lead yönetimi, tıbbi çeviri riskleri, KVKK açık rıza kuralları.',
    category: 'teknoloji',
    contentType: 'analiz',
    status: 'yayimlandi',
    featuredImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Yapay zekâ botları yabancı hastanın ilk temas süresini kısaltırken tıbbi tavsiye vermemeleri konusunda sıkı kurallara bağlanmalı.',
    imageSource: 'Sağlık Turizmi Radarı / AI & Hukuk Masası',
    publishedAt: '2026-09-18T05:00:00.000Z',
    updatedAt: '2026-09-18T05:30:00.000Z',
    readingTime: 8,
    authorId: 'murat-aksoy',
    isHeadline: false,
    isSecondaryHeadline: false,
    isBreaking: false,
    isEditorPick: false,
    tags: ['yapay zekâ', 'sağlık turizmi chatbot', 'çok dilli iletişim', 'tıbbi çeviri', 'kvkk', 'lead yönetimi'],
    sources: [
      { name: 'Kişisel Verileri Koruma Kurumu (KVKK) Kararları', url: 'https://www.kvkk.gov.tr', isOfficial: true },
      { name: 'Avrupa Sağlık Veri Alanı (EHDS) Yönetmeliği', url: 'https://health.ec.europa.eu', isOfficial: true }
    ],
    content: `
<p>Büyük Dil Modelleri (LLM) ve yapay zekâ destekli sesli asistanlar, uluslararası hasta kazanımında devrim yarattı. Farklı zaman dilimlerinde yaşayan hastaların gece saatlerindeki sorularına saniyeler içinde ana dillerinde yanıt verebilmek, dönüşüm oranlarını %35'e varan oranda artırmaktadır. Ancak bu hız, beraberinde ağır tıbbi ve hukuki riskleri de getirmektedir.</p>

<h2>Yapay Zekânın Sağlık Turizmindeki 3 Ölümcül Tuzağı</h2>

<h3>1. 'Tıbbi Tavsiye ve Teşhis' Sınırının Aşılması</h3>
<p>Yapay zekâ botları asla bir hekim gibi konuşmamalı, reçete veya kesin cerrahi uygunluk taahhüdünde bulunmamalıdır. Türk Ceza Kanunu ve Sağlık Hizmetleri Temel Kanunu uyarınca hekim olmayan herhangi bir sistemin teşhis koyması suç teşkil eder. Botun prompt'larına kesinlikle şu kural eklenmelidir:</p>
<div class="p-3 bg-slate-100 border-l-2 border-slate-400 text-xs italic font-mono my-2">
  "Sen bir tıp doktoru değilsin. Asla kesin tanı koyma ve reçete önerme. Sadece genel bilgilendirme yap ve hastayı yetkili hekim konsültasyonuna yönlendir."
</div>

<h3>2. Yanlış Tıbbi Çeviri ve Terim Sapmaları</h3>
<p>Genel amaçlı yapay zekâ modelleri tıp terminolojisinde hata yapabilmektedir. Örneğin hastanın belirttiği bir kronik rahatsızlığın yanlış çevrilmesi, ameliyat masasında anestezistten gizlenen bir risk faktörüne dönüşebilir. Klinik veriler daima insan denetiminden (Human-in-the-Loop) geçmelidir.</p>

<h3>3. Veri Güvenliği ve KVKK / GDPR İhlalleri</h3>
<p>WhatsApp üzerinden yapay zekâya aktarılan hasta epikrizleri ve tahlilleri üçüncü taraf sunucularda işleniyorsa, açık rıza alınmadan yapılan bu işlem yüz binlerce liralık KVKK ve GDPR cezasına yol açar. Detaylar için <a href="/haber/saglik-turizminde-kvkk-ve-hasta-verisi-nasil-yonetilmeli" class="text-[#00A6A6] font-semibold underline">Sağlık Turizminde KVKK ve Hasta Verisi Yönetimi Rehberimizi</a> inceleyebilirsiniz.</p>
`
  },
  {
    id: 'art-master-165',
    slug: 'saglik-turizminde-siber-guvenlik-hasta-verisi-kontrol-listesi',
    title: 'Sağlık Turizminde Siber Güvenlik: Yabancı Hasta Verisi Sızıntısına Karşı 12 Maddelik Kontrol Listesi',
    spot: 'Pasaport fotokopileri, kan tahlilleri, radyoloji görüntüleri ve kredi kartı slip’leri... Sağlık turizmi klinikleri ve acentaları fidye yazılımı (ransomware) korsanlarının en gözde hedefi haline geldi. Uluslararası itibar kaybı ve ağır tazminatlardan korunma rehberi.',
    seoTitle: 'Sağlık Turizminde Siber Güvenlik ve Hasta Verisi Koruma Listesi',
    seoDescription: 'Yabancı hastaların pasaport ve tıbbi verilerini korumak için 12 kritik siber güvenlik adımı. Ransomware koruması, KVKK & GDPR uyumu.',
    category: 'teknoloji',
    contentType: 'haber',
    status: 'yayimlandi',
    featuredImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Uluslararası hasta verisi karaborsada finansal verilerden 10 kat daha değerli kabul ediliyor.',
    imageSource: 'Sağlık Turizmi Radarı / Siber Güvenlik Masası',
    publishedAt: '2026-09-18T04:30:00.000Z',
    updatedAt: '2026-09-18T05:00:00.000Z',
    readingTime: 7,
    authorId: 'murat-aksoy',
    isHeadline: false,
    isSecondaryHeadline: false,
    isBreaking: false,
    isEditorPick: false,
    tags: ['siber güvenlik', 'hasta verisi', 'kvkk', 'gdpr', 'ransomware', 'bilgi güvenliği', 'sağlık teknolojisi'],
    sources: [
      { name: 'USOM Ulusal Siber Olaylara Müdahale Merkezi', url: 'https://www.usom.gov.tr', isOfficial: true }
    ],
    content: `
<p>Uluslararası sağlık turizmi yürüten kuruluşlar, siber saldırganlar için eşsiz bir hedef teşkil etmektedir. Çünkü bir sağlık turizmi kuruluşunun veri tabanında yalnızca hastanın adı soyadı değil; <strong>pasaport numarası, uçuş biletleri, kredi kartı bilgileri ve en mahrem tıbbi fotoğrafları</strong> bir arada bulunmaktadır. Olası bir veri sızıntısı, kliniğin sadece KVKK cezası almasıyla kalmaz; uluslararası sigorta şirketlerinin anlaşmaları iptal etmesine ve küresel itibarın çökmesine yol açar.</p>

<h2>Sağlık Kuruluşları İçin 12 Maddelik Siber Güvenlik Kontrol Listesi</h2>

<div class="overflow-x-auto my-6">
  <table class="min-w-full text-xs text-left border border-[#DDE3E8]">
    <thead class="bg-[#102A43] text-white">
      <tr>
        <th class="p-3">No</th>
        <th class="p-3">Güvenlik Alanı</th>
        <th class="p-3">Zorunlu Uygulama</th>
        <th class="p-3">Kritiklik Seviyesi</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      <tr>
        <td class="p-3 font-bold">1</td>
        <td class="p-3 font-semibold">İki Faktörlü Doğrulama (2FA)</td>
        <td class="p-3">CRM, e-posta ve bulut sürücülere girişte SMS veya Authenticator zorunluluğu.</td>
        <td class="p-3 text-rose-700 font-bold">Kritik</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">2</td>
        <td class="p-3 font-semibold">Uçtan Uca Şifreleme (Encryption)</td>
        <td class="p-3">Hasta epikrizleri ve pasaport görsellerinin depolandığı sunucularda AES-256 şifreleme.</td>
        <td class="p-3 text-rose-700 font-bold">Kritik</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">3</td>
        <td class="p-3 font-semibold">WhatsApp Veri Politikası</td>
        <td class="p-3">Personelin kişisel cep telefonlarında hasta epikrizi ve fotoğrafı saklanmasının yasaklanması.</td>
        <td class="p-3 text-amber-700 font-bold">Yüksek</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">4</td>
        <td class="p-3 font-semibold">Rol Bazlı Erişim (RBAC)</td>
        <td class="p-3">Tercümanın sadece kendi baktığı hastanın verisini görmesi; tüm hasta havuzuna erişememesi.</td>
        <td class="p-3 text-amber-700 font-bold">Yüksek</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">5</td>
        <td class="p-3 font-semibold">Yedekleme ve Ransomware Koruması</td>
        <td class="p-3">İnternetle bağlantısı kesilmiş (Air-gapped) çevrimdışı günlük yedekleme.</td>
        <td class="p-3 text-rose-700 font-bold">Kritik</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">6</td>
        <td class="p-3 font-semibold">Personel Oltalama (Phishing) Eğitimi</td>
        <td class="p-3">Sahte rezervasyon veya hasta formu gibi gelen e-postalara karşı 6 ayda bir simülasyon.</td>
        <td class="p-3 text-blue-700 font-bold">Orta</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">7</td>
        <td class="p-3 font-semibold">Açık Rıza ve Aydınlatma Metni</td>
        <td class="p-3">Veri toplanmadan önce hastanın kendi dilinde açık rıza beyanının zaman damgalı alınması.</td>
        <td class="p-3 text-rose-700 font-bold">Kritik</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">8</td>
        <td class="p-3 font-semibold">Güvenli Hasta Yükleme Portalı</td>
        <td class="p-3">E-posta eki yerine tek kullanımlık şifreli yükleme linklerinin tercih edilmesi.</td>
        <td class="p-3 text-amber-700 font-bold">Yüksek</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">9</td>
        <td class="p-3 font-semibold">Loglama ve Denetim İzi (Audit Trail)</td>
        <td class="p-3">Hangi personelin hangi hasta dosyasını ne zaman görüntülediğinin 5651 sayılı kanuna uygun kaydı.</td>
        <td class="p-3 text-amber-700 font-bold">Yüksek</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">10</td>
        <td class="p-3 font-semibold">Ayrılan Personel Prosedürü</td>
        <td class="p-3">İşten ayrılan hasta temsilcisinin hesaplarının anında kapatılması ve cihaz formatlanması.</td>
        <td class="p-3 text-rose-700 font-bold">Kritik</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">11</td>
        <td class="p-3 font-semibold">Sızma (Penetrasyon) Testi</td>
        <td class="p-3">Yılda en az bir kez TSE onaylı siber güvenlik firmasına sistem testi yaptırılması.</td>
        <td class="p-3 text-blue-700 font-bold">Orta</td>
      </tr>
      <tr>
        <td class="p-3 font-bold">12</td>
        <td class="p-3 font-semibold">Siber Olay Müdahale Planı</td>
        <td class="p-3">Veri sızıntısı halinde KVKK ve USOM'a 72 saat içinde bildirim yapacak kriz ekibinin belirlenmesi.</td>
        <td class="p-3 text-rose-700 font-bold">Kritik</td>
      </tr>
    </tbody>
  </table>
</div>
`
  }
];

let addedCount = 0;
for (const art of newArticles) {
  const existingIndex = storage.articles.findIndex(a => a.slug === art.slug || a.id === art.id);
  if (existingIndex >= 0) {
    storage.articles[existingIndex] = art;
    console.log(`Updated existing article: ${art.slug}`);
  } else {
    storage.articles.unshift(art);
    addedCount++;
    console.log(`Added new article: ${art.slug} (${art.title.slice(0, 40)}...)`);
  }
}

fs.writeFileSync(STORAGE_PATH, JSON.stringify(storage, null, 2), 'utf8');
console.log(`Success! Total articles in storage now: ${storage.articles.length} (Added: ${addedCount})`);
