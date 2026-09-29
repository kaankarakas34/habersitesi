const fs = require('fs');
const path = require('path');

const STORAGE_PATH = path.join(__dirname, '..', 'data', 'storage.json');

const newArticles = [
  {
    id: 'art-radar-2026-09-01',
    slug: 'ushas-kultur-ve-turizm-bakanligi-saglik-turizmi-tanitim-gorusmesi',
    title: 'USHAŞ ve Kültür ve Turizm Bakanlığı Sağlık Turizminin Uluslararası Tanıtımını Görüştü',
    spot: 'USHAŞ, Sağlık Bakanlığı ve Kültür ve Turizm Bakanlığı temsilcileri Türkiye sağlık turizminin uluslararası tanıtımında ortak çalışmaları ve kurumlar arası eşgüdümü görüştü.',
    category: 'gundem',
    contentType: 'haber',
    status: 'yayimlandi',
    authorId: 'kaan-karakas',
    country: 'Türkiye',
    publishedAt: '2026-09-29T17:00:00.000Z',
    updatedAt: '2026-09-29T17:00:00.000Z',
    readingTime: 3,
    isHeadline: false,
    isSecondaryHeadline: true,
    isBreaking: true,
    breakingBadge: 'SON GELİŞME',
    isEditorPick: true,
    featuredImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'USHAŞ ve Kültür ve Turizm Bakanlığı üst düzey heyetlerinin uluslararası sağlık turizmi tanıtımı konulu koordinasyon toplantısı.',
    imageSource: 'USHAŞ Kurumsal İletişim',
    tags: [
      'USHAŞ',
      'Kültür ve Turizm Bakanlığı',
      'Sağlık Turizmi Tanıtımı',
      'Uluslararası Tanıtım',
      'Sağlık Bakanlığı',
      'Gündem',
      'Türkiye'
    ],
    sources: [
      {
        name: 'USHAŞ Resmî Duyurusu (14 Eylül 2026)',
        url: 'https://www.ushas.gov.tr/en/saglik-turizmi-icin-ushas-ve-kultur-ve-turizm-bakanligi-bir-araya-geldi/',
        isOfficial: true
      }
    ],
    seoTitle: 'USHAŞ ve Kültür ve Turizm Bakanlığı Sağlık Turizmi Tanıtım Görüşmesi',
    seoDescription: 'USHAŞ, Sağlık Bakanlığı ve Kültür ve Turizm Bakanlığı temsilcileri Türkiye sağlık turizminin uluslararası tanıtımında ortak çalışmaları görüştü.',
    content: `
<div class="p-3 bg-slate-50 border-l-4 border-[#102A43] text-xs text-slate-600 mb-6 rounded-r">
  <strong>Kaynak Duyuru Tarihi:</strong> 14 Eylül 2026 | <strong>Kurum:</strong> Uluslararası Sağlık Hizmetleri A.Ş. (USHAŞ) | <strong>Kapsam:</strong> Türkiye Sağlık Turizmi Tanıtım Stratejisi
</div>

<p>Türkiye'nin sağlık turizmi alanındaki yurt dışı tanıtımı, sağlık ve turizm kurumlarının üst düzey katılımıyla gerçekleştirilen kapsamlı bir görüşmenin gündemindeydi. USHAŞ'ın 14 Eylül 2026 tarihli resmî açıklamasına göre Kültür ve Turizm Bakan Yardımcısı Nadir Alpaslan, Sağlık Bakan Yardımcısı ve USHAŞ Yönetim Kurulu Başkanı Şuayıp Birinci, USHAŞ Genel Müdürü Serdar Şenol ve Tanıtma Genel Müdürü Timuçin Güler bir araya geldi.</p>

<p>Görüşmede sağlık turizmi kapasitesinin uluslararası alanda daha etkili tanıtılması, genel ülke tanıtımı ile sağlık turizmi çalışmalarının birlikte ele alınması ve kurumlar arasında eşgüdüm kurulması masaya yatırıldı. USHAŞ duyurusunda ortak tanıtım girişimlerinin geliştirilmesi de ana gündem maddeleri arasında sayıldı. Yapılan açıklama; yeni bir kampanyanın resmen başladığına, bütçe tahsis edildiğine veya yeni bir teşvik mevzuatının yürürlüğe girdiğine ilişkin bir bilgi içermiyor.</p>

<h2>Tanıtım ile Hasta Yolculuğunun Bütünlüğü</h2>
<p>Sağlık turizmi açısından bu üst düzey koordinasyon toplantısının stratejik önemi, tedavi hizmetinin destinasyon tanıtımıyla aynı hasta yolculuğu zincirinde yer almasından kaynaklanıyor. Yabancı bir hasta tedavi kararını verirken sağlık kuruluşunun klinik niteliğinin ve hekim uzmanlığının yanında; ulaşım kolaylığı, konaklama imkânları, dil desteği, iletişim kanalları ve tedavi sonrası izleme (aftercare) süreçlerini de bir bütün olarak değerlendiriyor.</p>

<p>Bu nedenle Türkiye markası altında uluslararası alana verilecek mesajların kurumlar arasında tutarlı ve organize kurulması sektörün kurumsallaşması için kritik bir çalışma alanı. Ancak hangi hedef pazarların veya tedavi branşlarının önceliklendirileceği, tanıtım takviminin nasıl şekilleneceği henüz resmî olarak açıklanmış değil.</p>

<blockquote>
  <strong>Editöryal Değerlendirme:</strong> Sağlık ve turizm otoritelerinin aynı masada koordinasyon sağlaması, Türkiye'nin uluslararası arenada dağınık tanıtım yerine tek sesli ve güven odaklı bir kurumsal marka inşa etmesi adına önemli bir adımdır. Kararların sahaya yansıması bütçe ve eylem planı açıklandığında netleşecektir.
</blockquote>
`
  },
  {
    id: 'art-radar-2026-09-02',
    slug: 'tursab-saglik-turizmi-komitesi-2027-fuar-takvimi-uluslararasi-algi',
    title: 'TÜRSAB Sağlık Turizmi İhtisas Komitesi 2027 Fuar Takvimini ve Uluslararası Algıyı Ele Aldı',
    spot: 'TÜRSAB Sağlık Turizmi İhtisas Komitesi, 2027 fuarları ile yurt dışı basınındaki sağlık turizmi algısını ve çözüm önerilerini aylık toplantısında gündeme aldı.',
    category: 'gundem',
    contentType: 'haber',
    status: 'yayimlandi',
    authorId: 'kaan-karakas',
    country: 'Türkiye',
    publishedAt: '2026-09-29T16:30:00.000Z',
    updatedAt: '2026-09-29T16:30:00.000Z',
    readingTime: 3,
    isHeadline: false,
    isSecondaryHeadline: true,
    isEditorPick: true,
    featuredImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'TÜRSAB Sağlık Turizmi İhtisas Komitesi Genel Merkez toplantısında 2027 fuar vizyonu ve itibar yönetimi ele alındı.',
    imageSource: 'TÜRSAB Basın Bülteni',
    tags: [
      'TÜRSAB',
      'Sağlık Turizmi İhtisas Komitesi',
      '2027 Fuar Takvimi',
      'Uluslararası Algı',
      'Hasta Güvenliği',
      'Gündem'
    ],
    sources: [
      {
        name: 'TÜRSAB Resmî Toplantı Haberi (4 Eylül 2026)',
        url: 'https://www.tursab.org.tr/news/the-monthly-meeting-of-the-health-tourism-expert-committee-was-held-1',
        isOfficial: true
      }
    ],
    seoTitle: 'TÜRSAB Sağlık Turizmi Komitesi: 2027 Fuar Takvimi ve Uluslararası Algı',
    seoDescription: 'TÜRSAB Sağlık Turizmi İhtisas Komitesi, 2027 fuarları ile yurt dışı basınındaki sağlık turizmi algısını gündemine aldı.',
    content: `
<div class="p-3 bg-slate-50 border-l-4 border-[#102A43] text-xs text-slate-600 mb-6 rounded-r">
  <strong>Kaynak Toplantı Tarihi:</strong> 4 Eylül 2026 | <strong>Kurum:</strong> Türkiye Seyahat Acentaları Birliği (TÜRSAB) | <strong>Gündem:</strong> 2027 Fuar Takvimi ve İtibar Yönetimi
</div>

<p>TÜRSAB Sağlık Turizmi İhtisas Komitesi'nin aylık olağan toplantısı 4 Eylül 2026 tarihinde TÜRSAB Genel Merkezi'nde gerçekleştirildi. Kurumun resmî duyurusuna göre toplantıya komite başkanı Şehnaz Atak Askeroğlu'nun koordinasyonunda yönetim kurulu üyeleri ve ihtisas komitesi temsilcileri katıldı.</p>

<p>Toplantı gündeminin iki başlığı sektör açısından özellikle dikkat çekiyor: <strong>2027 yılı fuar takviminin gözden geçirilmesi</strong> ve <strong>sağlık turizmi hakkında uluslararası basında oluşan olumsuz algı ile hatalı yayınların nasıl ele alınacağı</strong>. Komite ayrıca sektörün güncel operasyonel sorunlarını, aracı kuruluşların çözüm önerilerini, gelecek dönem önceliklerini ve ilgili diğer kamu/özel kurumlarla iş birliği imkânlarını değerlendirdi. TÜRSAB, toplantı sonucunda henüz kesinleşmiş bir fuar katılım listesi, yeni bir standart ya da uygulanacak bağlayıcı resmî bir yaptırım kararı açıklamadı.</p>

<h2>Tanıtımdan Güven İnşasına Geçiş</h2>
<p>Sektör temsilcileri için bu gündem, uluslararası sağlık turizminde dijital tanıtım kadar kurumsal güven inşasının da belirleyici hale geldiğini gösteriyor. Yabancı hastalar sınır ötesi tedavi kararı alırken yalnızca fiyat avantajına bakmıyor; sağlık tesisinin yetki belgesi, aracı acentenin akreditasyonu, hekimin uzmanlık sertifikaları, olası komplikasyon durumunda ulaşılabilecek sorumlu ekip ve ülkesine döndükten sonraki takip garantisi de karar sürecinin ayrılmaz bir parçası.</p>

<p>Uluslararası basında yer alan olumsuz vaka haberlerine karşı yürütülecek çalışmalarda, doğrulanabilir klinik kalite verileri, şeffaf bilgilendirme ve komplikasyon sigortası gibi somut göstergeler, genel tanıtım sloganlarından çok daha güçlü bir itibar zemini sunmaktadır.</p>

<blockquote>
  <strong>Editöryal Not:</strong> TÜRSAB komitesinin 2027 planlamasını erkenden gündeme alması ve yurt dışı algı yönetimini önceliklendirmesi stratejiktir. Güven zedelenmelerinin önüne geçmek için yetkisiz aracıların denetimi ve açık hasta bilgilendirme standartları belirleyici olacaktır.
</blockquote>
`
  },
  {
    id: 'art-radar-2026-09-03',
    slug: 'dso-tibbi-cihaz-on-yeterlilik-tuberkuloz-yapay-zeka',
    title: 'DSÖ Tıbbi Cihaz Ön Yeterlilik Programını Yapay Zekâ Destekli Tüberküloz Taramasına Genişletiyor',
    spot: 'DSÖ, tıbbi cihaz ön yeterlilik programının kapsamına doğum kontrol araçlarını ve dijital röntgen analiz eden yapay zekâ destekli tüberküloz tarama yazılımlarını ekliyor.',
    category: 'dunya',
    contentType: 'haber',
    status: 'yayimlandi',
    authorId: 'editorial',
    branch: 'Tıbbi Cihaz & Yapay Zekâ',
    publishedAt: '2026-09-29T16:00:00.000Z',
    updatedAt: '2026-09-29T16:00:00.000Z',
    readingTime: 4,
    isHeadline: false,
    isSecondaryHeadline: true,
    isEditorPick: true,
    featuredImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'DSÖ\'nün tıbbi cihaz ön yeterlilik programı yapay zekâ tabanlı tüberküloz tarama algoritmalarını kapsayacak şekilde genişletildi.',
    imageSource: 'Dünya Sağlık Örgütü (WHO)',
    tags: [
      'DSÖ',
      'WHO',
      'Tıbbi Cihaz',
      'Ön Yeterlilik',
      'Yapay Zekâ',
      'Tüberküloz Taraması',
      'Dünya Radarı'
    ],
    sources: [
      {
        name: 'Dünya Sağlık Örgütü (WHO) Resmî Duyurusu (25 Eylül 2026)',
        url: 'https://www.who.int/news/item/25-09-2026-who-announces-expansion-of-prequalification-programme-for-medical-devices',
        isOfficial: true
      }
    ],
    seoTitle: 'DSÖ Tıbbi Cihaz Ön Yeterlilik Programı: Yapay Zekâ ve Tüberküloz',
    seoDescription: 'DSÖ, tıbbi cihaz ön yeterlilik programının kapsamına doğum kontrol araçlarını ve yapay zekâ destekli tüberküloz tarama yazılımlarını ekliyor.',
    content: `
<div class="p-3 bg-slate-50 border-l-4 border-[#00A6A6] text-xs text-slate-600 mb-6 rounded-r">
  <strong>Kaynak Duyuru Tarihi:</strong> 25 Eylül 2026 | <strong>Kurum:</strong> Dünya Sağlık Örgütü (WHO) | <strong>Alan:</strong> Tıbbi Cihaz Ön Yeterlilik & CAD Yazılımları
</div>

<p>Dünya Sağlık Örgütü (DSÖ), temel tıbbi cihazların küresel ölçekteki satın alma süreçlerinde uluslararası altın standart kabul edilen ön yeterlilik (prequalification) programını genişlettiğini duyurdu. DSÖ'nün 25 Eylül 2026 tarihli açıklamasına göre genişletilen kapsam; prezervatif ve rahim içi araçlar gibi üreme sağlığı ürünlerinin yanı sıra tüberküloz taramasında kullanılan bilgisayar destekli tespit (CAD) yazılımlarını da içerecek.</p>

<p>Bu program kapsamında tıbbi cihazlar ve sağlık teknolojileri; kalite, güvenlik ve klinik performans açısından bağımsız ve standart bir değerlendirmeden geçiriliyor. Ön yeterlilik onayını başarıyla alan ürünler; Birleşmiş Milletler kuruluşları, uluslararası tedarikçiler ve ulusal satın alma makamları için referans niteliği taşıyan küresel listelere dahil ediliyor. DSÖ, belirli doğum kontrol araçlarının ön yeterlilik değerlendirme yetkisini UNFPA'dan devralırken; tüberküloz alanında ise dijital akciğer röntgenlerini analiz ederek ileri tanı testine ihtiyaç duyabilecek bireyleri işaretleyen yapay zekâ destekli CAD yazılımlarını değerlendirme kapsamına aldı.</p>

<h2>Yapay Zekâ ve Tanı Sürecindeki Kritik Ayrım</h2>
<p>Bu gelişmede dikkat edilmesi gereken en kritik ayrım şudur: Yapay zekâ destekli tarama araçları, kesin tüberküloz tanısı koymakla eşdeğer değildir. Bu yazılımlar yüksek riskli vakaları filtreleyen bir triyaj aracı olarak işlev görmekte olup, doğrulayıcı klinik muayene, mikrobiyolojik ve moleküler test süreci zorunludur.</p>

<p>Öte yandan kapsam genişlemesi, piyasadaki herhangi bir yazılımın otomatik olarak DSÖ onayı aldığı anlamına gelmez; her ürün için bağımsız başvuru ve dosya değerlendirmesi yapılacaktır. Sağlık kuruluşları ve teknoloji geliştiricileri açısından bu adım, sınır ötesi tıbbi cihaz ve yazılım tedarikinde küresel kalite standartlarının netleşmesine katkı sağlayacaktır. Söz konusu teknolojilerin Türkiye'deki ruhsatlandırma, geri ödeme ve kullanım kuralları ise T.C. Sağlık Bakanlığı ve TİTCK mevzuatına tabidir.</p>

<blockquote>
  <strong>Özet:</strong> DSÖ'nün CAD yazılımlarını ön yeterlilik programına alması, yapay zekâ tabanlı tarama teknolojilerinin küresel sağlık sistemlerindeki yerini güçlendiriyor. Ancak nihai teşhis her zaman uzman hekim değerlendirmesi ve laboratuvar doğrulaması gerektirir.
</blockquote>
`
  },
  {
    id: 'art-radar-2026-09-04',
    slug: 'fda-camizestrant-esr1-mutasyonlu-meme-kanseri-hizlandirilmis-onay',
    title: 'ABD\'de ESR1 Mutasyonlu Meme Kanseri İçin Camizestrant Kombinasyonuna Hızlandırılmış Onay',
    spot: 'FDA, belirli ESR1 mutasyonlu ileri evre meme kanserinde camizestrant ve CDK4/6 inhibitörü kombinasyonuna hızlandırılmış onay verdi. Karar ABD bağlamında olup Türkiye\'de doğrudan ruhsat veya geri ödeme anlamına gelmiyor.',
    category: 'dunya',
    contentType: 'haber',
    status: 'yayimlandi',
    authorId: 'dr-selim-yilmaz',
    region: 'Amerika',
    country: 'ABD',
    branch: 'Onkoloji',
    publishedAt: '2026-09-29T15:30:00.000Z',
    updatedAt: '2026-09-29T15:30:00.000Z',
    readingTime: 4,
    isHeadline: false,
    isSecondaryHeadline: true,
    isEditorPick: true,
    featuredImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'FDA onayı, belirli ESR1 mutasyonuna sahip metastatik meme kanseri hastalarında hedefe yönelik kombinasyon tedavisini kapsıyor.',
    imageSource: 'ABD FDA Onkoloji Masası',
    tags: [
      'FDA',
      'Onkoloji',
      'Meme Kanseri',
      'Camizestrant',
      'ESR1 Mutasyonu',
      'ABD',
      'İlaç Onayı'
    ],
    sources: [
      {
        name: 'FDA Onay Özeti (4 Eylül 2026)',
        url: 'https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-camizestrant-cdk46-inhibitor-esr1-mutated-hr-positive-her2-negative',
        isOfficial: true
      }
    ],
    seoTitle: 'FDA Camizestrant Onayı: ESR1 Mutasyonlu Meme Kanseri (ABD)',
    seoDescription: 'FDA, belirli ESR1 mutasyonlu ileri evre meme kanserinde camizestrant ve CDK4/6 inhibitörü kombinasyonuna hızlandırılmış onay verdi.',
    content: `
<div class="p-3 bg-slate-50 border-l-4 border-[#C62828] text-xs text-slate-600 mb-6 rounded-r">
  <strong>Kaynak Onay Tarihi:</strong> 4 Eylül 2026 | <strong>Kurum:</strong> ABD FDA (Gıda ve İlaç Dairesi) | <strong>Ruhsat Bölgesi:</strong> Amerika Birleşik Devletleri | <strong>Branş:</strong> Onkoloji
</div>

<p>ABD Gıda ve İlaç Dairesi (FDA), 4 Eylül 2026 tarihinde camizestrant etken maddeli ilacın bir CDK4/6 inhibitörüyle birlikte kombinasyon halinde kullanımına hızlandırılmış onay (accelerated approval) verdi. Söz konusu onay kararı; hormon reseptörü pozitif (HR+), HER2 negatif, lokal ileri veya metastatik meme kanseri tanısı bulunan ve daha önce aromataz inhibitörü ile CDK4/6 inhibitörü tedavisi alırken <strong>ESR1 mutasyonu</strong> tespit edilen yetişkin hastaları kapsıyor.</p>

<p>İlacın kullanımı için tümörde veya likit biyopside ESR1 mutasyonunun FDA tarafından yetkilendirilmiş bir testle saptanması şart koşuldu. Kurum, aynı tarihte Guardant360 CDx testini bu hasta grubunun seçimi için eşlik eden tanı testi (companion diagnostic) olarak yetkilendirdi.</p>

<h2>SERENA-6 Klinik Çalışması Bulguları</h2>
<p>FDA'nın hızlandırılmış onay kararı, 315 hastanın yer aldığı Faz III SERENA-6 klinik çalışmasının ara analiz verilerine dayanıyor. FDA tarafından yayımlanan verilere göre:</p>
<ul>
  <li>Hastalığın ilerlemeden sürdüğü ortanca süre (Progresyonsuz Sağkalım - PFS), camizestrant kombinasyon kolunda <strong>16,0 ay</strong> olarak gerçekleşti.</li>
  <li>Mevcut aromataz inhibitörü kombinasyonu kolunda ise bu süre <strong>9,2 ay</strong> düzeyinde kaldı.</li>
  <li>Genel sağkalım (OS) verileri ise analiz tarihi itibarıyla henüz istatistiksel olgunluğa ulaşmamıştı.</li>
</ul>

<p>Bu klinik sonucun yalnızca belirli moleküler profile sahip hasta grubuna ait olduğu ve tüm meme kanseri hastaları için genel bir üstünlük iddiası taşımadığı vurgulanmalıdır. Ayrıca hızlandırılmış onay statüsü, ilacın net klinik yararının devam eden çalışmalarda doğrulanması şartına bağlıdır. İlacın resmî ürün etiketinde bazı ilaçlarla eşzamanlı kullanımda kalp ritmi bozuklukları (QT uzaması) ve diğer güvenlik uyarıları yer almaktadır.</p>

<h2>Uluslararası Hastalar ve Türkiye Bağlamı</h2>
<p>Sınır ötesi onkoloji tedavisi seçeneklerini araştıran hastalar açısından bu gelişmenin pratik karşılığı; moleküler genetik test sonucu, önceki tedavi basamakları, ülke bazlı erişim olanakları ve sorumlu tıbbi onkoloğun değerlendirmesinin birlikte ele alınmasıdır. <strong>ABD FDA tarafından verilen bu onay, ilacın Türkiye'de ruhsatlandırıldığı, eczanelerden temin edilebildiği veya SGK geri ödeme listesinde yer aldığı anlamına kesinlikle gelmemektedir.</strong> İlgili tedavilere erişim kuralları her ülkenin kendi ulusal sağlık otoritesi tarafından belirlenir.</p>

<blockquote>
  <strong>Hasta Güvenliği Uyarısı:</strong> Bu haber genel bilgilendirme amacıyla hazırlanmıştır ve kişisel tedavi önerisi yerine geçmez. Kanser tedavisinde herhangi bir ilaç veya yöntem değişikliği mutlaka hastayı takip eden uzman tıbbi onkolog ile değerlendirilmelidir.
</blockquote>
`
  },
  {
    id: 'art-radar-2026-09-05',
    slug: 'fda-lirafugratinib-fgfr2-safra-yolu-kanseri-onayi',
    title: 'ABD FDA, FGFR2 Değişimi Taşıyan İleri Evre Safra Yolu Kanserinde Lirafugratinibi Onayladı',
    spot: 'FDA, önceki tedavileri almış ve FGFR2 gen değişimi bulunan ileri evre safra yolu kanseri hastaları için lirafugratinibi onayladı. ABD onayı Türkiye\'de doğrudan ruhsat veya erişim anlamına gelmez.',
    category: 'dunya',
    contentType: 'haber',
    status: 'yayimlandi',
    authorId: 'dr-selim-yilmaz',
    region: 'Amerika',
    country: 'ABD',
    branch: 'Onkoloji',
    publishedAt: '2026-09-29T15:00:00.000Z',
    updatedAt: '2026-09-29T15:00:00.000Z',
    readingTime: 4,
    featuredImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'İleri evre kolanjiyokarsinom tedavisinde FGFR2 gen değişimini hedefleyen yeni onkolojik tedavi onaylandı.',
    imageSource: 'ABD FDA Onkoloji Masası',
    tags: [
      'FDA',
      'Onkoloji',
      'Safra Yolu Kanseri',
      'Lirafugratinib',
      'FGFR2',
      'Kolanjiyokarsinom',
      'ABD'
    ],
    sources: [
      {
        name: 'FDA Onay Özeti (23 Eylül 2026)',
        url: 'https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-lirafugratinib-previously-treated-unresectable-locally-advanced-or-metastatic',
        isOfficial: true
      }
    ],
    seoTitle: 'FDA Lirafugratinib Onayı: FGFR2 Safra Yolu Kanseri (ABD)',
    seoDescription: 'FDA, önceki tedavileri almış ve FGFR2 gen değişimi bulunan ileri evre safra yolu kanseri hastaları için lirafugratinibi onayladı.',
    content: `
<div class="p-3 bg-slate-50 border-l-4 border-[#C62828] text-xs text-slate-600 mb-6 rounded-r">
  <strong>Kaynak Onay Tarihi:</strong> 23 Eylül 2026 | <strong>Kurum:</strong> ABD FDA | <strong>Ruhsat Bölgesi:</strong> Amerika Birleşik Devletleri | <strong>Branş:</strong> Tıbbi Onkoloji
</div>

<p>ABD Gıda ve İlaç Dairesi (FDA), daha önce sistemik tedavi görmüş, cerrahi olarak çıkarılamayan lokal ileri veya metastatik kolanjiyokarsinom (safra yolu kanseri) tanılı yetişkin hastalar için <strong>lirafugratinib</strong> etken maddeli ilacı 23 Eylül 2026 tarihinde onayladı. Onay kararı tüm safra yolu kanseri olgularını kapsamamaktadır; tedaviden yararlanabilmek için tümör dokusunda doğrulanmış bir <em>FGFR2 gen füzyonu</em> veya diğer <em>FGFR2 yeniden düzenlenmesi (rearrangement)</em> bulunması şarttır.</p>

<h2>REFOCUS Çalışması Sonuçları ve Güvenlik Profili</h2>
<p>FDA kararında değerlendirilen tek kollu REFOCUS klinik çalışmasında, daha önce başka bir FGFR inhibitörü almamış 116 hasta yer aldı. Bağımsız merkezi inceleme komitesinin değerlendirmelerine göre:</p>
<ul>
  <li>Nesnel yanıt oranı (ORR) <strong>%46</strong> olarak bildirildi.</li>
  <li>Ortanca yanıt süresi (DoR) ise <strong>11,8 ay</strong> olarak tespit edildi.</li>
</ul>

<p>Çalışma tek kollu tasarlandığı için bu yüzdeler doğrudan diğer tedavilere kıyasla bir üstünlük kanıtı olarak sunulamaz. FDA ayrıca ilacın güvenlik profilinde; gözle ilgili toksisiteler (retina dekolmanı, kuru göz), kan fosfat düzeyinde yükselme (hiperfosfatemi) ve yumuşak dokularda kalsiyum/mineral birikimi gibi ciddi risklere dikkat çekmekte ve düzenli oftalmolojik izlem önermektedir.</p>

<h2>Kişiselleştirilmiş Onkoloji ve Hasta Hakları</h2>
<p>Sağlık turizmi ve sınır ötesi onkoloji hizmetleri açısından bu onay, ileri evre gastrointestinal kanserlerde moleküler profillemenin vazgeçilmez önemini ortaya koymaktadır. Yalnızca bir ilacın adını duyarak tedavi planı oluşturulamaz; genetik testin kalitesi, daha önce uygulanan protokoller ve hastanın ülkesine döndükten sonraki takip altyapısı kritik öneme sahiptir.</p>

<p><strong>Önemli Not:</strong> Bu onay yalnızca Amerika Birleşik Devletleri yetki alanındadır. İlacın Türkiye'deki ruhsat durumu, tedarik yolları ve SGK kapsamı FDA duyurusundan tamamen bağımsız olup ulusal mevzuat çerçevesinde değerlendirilmelidir. Bu metin kişisel tıbbi tavsiye içermez.</p>
`
  },
  {
    id: 'art-radar-2026-09-06',
    slug: 'ingiltere-saglikta-yapay-zeka-duzenleme-komisyonu-2026',
    title: 'İngiltere\'de Sağlıkta Yapay Zekâ Kullanımı İçin Bağımsız Komisyon Önerilerini Yayımladı',
    spot: 'İngiltere\'deki bağımsız komisyon, sağlık hizmetlerinde yapay zekâ için güvenlik, insan denetimi ve şeffaflık eksenli düzenleme önerilerini açıkladı.',
    category: 'dunya',
    contentType: 'haber',
    status: 'yayimlandi',
    authorId: 'editorial',
    region: 'Avrupa',
    country: 'İngiltere',
    branch: 'Yapay Zekâ & Regülasyon',
    publishedAt: '2026-09-29T14:30:00.000Z',
    updatedAt: '2026-09-29T14:30:00.000Z',
    readingTime: 4,
    featuredImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'İngiltere MHRA liderliğindeki bağımsız komisyon, klinik yapay zekâ uygulamaları için güven ve denetim çerçevesini belirledi.',
    imageSource: 'MHRA / GOV.UK',
    tags: [
      'İngiltere',
      'MHRA',
      'Sağlıkta Yapay Zekâ',
      'NHS',
      'Hasta Güvenliği',
      'Regülasyon',
      'Dünya Radarı'
    ],
    sources: [
      {
        name: 'MHRA / GOV.UK Resmî Basın Duyurusu (10 Eylül 2026)',
        url: 'https://www.gov.uk/government/news/independent-commission-led-by-nhs-doctors-sets-out-blueprint-to-accelerate-safe-ai-adoption-in-healthcare',
        isOfficial: true
      }
    ],
    seoTitle: 'İngiltere Sağlıkta Yapay Zekâ Düzenleme Komisyonu Raporu 2026',
    seoDescription: 'İngiltere\'deki bağımsız komisyon, sağlık hizmetlerinde yapay zekâ için güvenlik, insan denetimi ve şeffaflık eksenli düzenleme önerilerini açıkladı.',
    content: `
<div class="p-3 bg-slate-50 border-l-4 border-[#00A6A6] text-xs text-slate-600 mb-6 rounded-r">
  <strong>Kaynak Duyuru Tarihi:</strong> 10 Eylül 2026 | <strong>Kurum:</strong> İngiltere MHRA / Bağımsız Hekim Komisyonu | <strong>Ülke:</strong> Birleşik Krallık | <strong>Alan:</strong> Yapay Zekâ ve Sağlık Regülasyonu
</div>

<p>İngiltere İlaç ve Sağlık Ürünleri Düzenleme Kurumu (MHRA) koordinasyonunda ve NHS hekimlerinin liderliğinde kurulan bağımsız yapay zekâ komisyonu, sağlık hizmetlerinde yapay zekânın güvenli entegrasyonuna ilişkin kapsamlı düzenleme çerçevesi önerilerini 10 Eylül 2026'da kamuoyuyla paylaştı. Hazırlanan yol haritası, inovatif yapay zekâ çözümlerine erişimi hızlandırırken hasta güvenliğini ve hekimin nihai klinik denetimini güvence altına almayı hedefliyor.</p>

<p>MHRA açıklamasına göre komisyon, bir yıllık çalışma boyunca hastalar, hekimler, sağlık kurumu yöneticileri, yazılım geliştiricileri ve sivil toplum temsilcileri dahil 12 binden fazla paydaşın görüşünü topladı. Raporun ana bulgusu, kamuoyunun sağlıkta yapay zekâya desteğinin ancak <strong>katı güvenlik standartları</strong>, <strong>anlamlı insan gözetimi (human-in-the-loop)</strong> ve <strong>hastaya karşı tam şeffaflık</strong> sağlandığı takdirde sürdürülebileceğini gösteriyor.</p>

<h2>NHS İçindeki Uygulamalar ve Tavsiyeler</h2>
<p>Kurum, Birleşik Krallık Ulusal Sağlık Sistemi (NHS) bünyesinde yapay zekânın hâlihazırda inme tespiti, cilt kanseri taraması ve hekimlerin idari iş yükünü hafifleten sesli not alma/transkripsiyon araçlarında kullanıldığını belirtti. Komisyonun düzenleyici otoriteye sunduğu başlıca tavsiyeler şunlardır:</p>
<ul>
  <li>Yapay zekâ algoritmalarının klinik karar destek düzeyleri açıkça derecelendirilmeli ve hasta dosyalarında kayıt altına alınmalıdır.</li>
  <li>Son klinik teşhis ve tedavi kararı her zaman yetkili bir sağlık uzmanının onayına bağlı kalmalıdır.</li>
  <li>Hatalı sonuç veya algoritma sapması (bias) durumlarında sorumluluk zinciri ve tazmin yolları şeffaf biçimde tanımlanmalıdır.</li>
</ul>

<p><strong>Yasal Çerçeve Notu:</strong> Yayımlanan bu metin yürürlüğe girmiş bağlayıcı bir Birleşik Krallık kanunu değil, düzenleyici kurumlara iletilen komisyon tavsiyeleridir. Uluslararası hastalara uzaktan konsültasyon, tele-tıp veya otomatik hasta iletişimi sunan Türk sağlık turizmi kuruluşları açısından çıkarım açıktır: Algoritmanın nerede tavsiye verdiği, nihai hekim onayı ve veri güvenliği hasta haklarına uygun şekilde belgelenmelidir.</p>
`
  },
  {
    id: 'art-radar-2026-09-07',
    slug: 'ushas-kktc-hastane-projeleri-degerlendirme-toplantisi',
    title: 'USHAŞ, KKTC\'deki Hastane Projelerinin Durumunu Değerlendirdi',
    spot: 'USHAŞ, Kuzey Kıbrıs Türk Cumhuriyeti\'ndeki sözleşmeli hastane yapım projelerinin mevcut durumunu, sahadaki ilerlemeyi ve sonraki adımları görüştü.',
    category: 'gundem',
    contentType: 'haber',
    status: 'yayimlandi',
    authorId: 'kaan-karakas',
    country: 'KKTC',
    publishedAt: '2026-09-29T14:00:00.000Z',
    updatedAt: '2026-09-29T14:00:00.000Z',
    readingTime: 3,
    featuredImage: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'USHAŞ TOBB Ofisi\'nde gerçekleştirilen toplantıda KKTC hastane yapım sözleşmelerinin saha ilerlemesi gözden geçirildi.',
    imageSource: 'USHAŞ Kurumsal İletişim',
    tags: [
      'USHAŞ',
      'KKTC',
      'Kıbrıs Hastane Projeleri',
      'Sağlık Yatırımları',
      'Gündem',
      'Sağlık Turizmi'
    ],
    sources: [
      {
        name: 'USHAŞ Resmî Duyurusu (14 Eylül 2026)',
        url: 'https://www.ushas.gov.tr/en/kktcdeki-hastane-projelerine-iliskin-degerlendirme-toplantisi/',
        isOfficial: true
      }
    ],
    seoTitle: 'USHAŞ KKTC Hastane Projeleri Değerlendirme Toplantısı 2026',
    seoDescription: 'USHAŞ, Kuzey Kıbrıs Türk Cumhuriyeti\'ndeki sözleşmeli hastane yapım projelerinin mevcut durumunu ve sonraki adımları görüştü.',
    content: `
<div class="p-3 bg-slate-50 border-l-4 border-[#102A43] text-xs text-slate-600 mb-6 rounded-r">
  <strong>Kaynak Toplantı Tarihi:</strong> 14 Eylül 2026 | <strong>Kurum:</strong> USHAŞ | <strong>Bölge:</strong> KKTC & Doğu Akdeniz | <strong>Konu:</strong> Sağlık Altyapısı ve Hastane Yatırımları
</div>

<p>Uluslararası Sağlık Hizmetleri A.Ş. (USHAŞ), Kuzey Kıbrıs Türk Cumhuriyeti'ndeki hastane yapım projelerine ilişkin kapsamlı bir değerlendirme toplantısı gerçekleştirildiğini 14 Eylül 2026 tarihinde duyurdu. USHAŞ'ın TOBB Ofisi'nde yapılan toplantıya Genel Müdür Serdar Şenol başkanlık etti.</p>

<p>Kurum tarafından yapılan bilgilendirmede; sözleşmeleri USHAŞ tarafından üstlenilen sağlık tesisleri yapım projelerinin sahadaki ilerleme düzeyleri, inşaat süreçlerinin güncel durumu ve önümüzdeki dönemde atılacak stratejik adımların masaya yatırıldığı bildirildi. USHAŞ açıklaması, projeler tamamlandığında bu tesislerin KKTC tarihindeki en büyük sağlık yatırımları arasında yer alacağını ifade ediyor.</p>

<h2>Hastanelerin Hizmete Giriş Takvimi ve Sektörel Yansımalar</h2>
<p>Resmî duyuruda hangi hastanelerin tam olarak hangi tarihte hasta kabulüne başlayacağı, kesinleşmiş yatak ve yoğun bakım kapasiteleri ya da bu toplantı vesilesiyle yeni bir ihale sürecinin başlatılıp başlatılmadığına dair ayrıntılı teknik bilgiler yer almamaktadır. Dolayısıyla bu gelişme bir açılış ya da kesin tamamlanma ilanı olarak değil, kurumsal proje takip toplantısı olarak okunmalıdır.</p>

<p>Doğu Akdeniz bölgesinde sağlık altyapısının modernleşmesi; hem KKTC vatandaşlarının ileri tetkik ve tedaviye erişimini güçlendirmesi hem de Türkiye ile kurulacak hasta sevk ve ortak uzmanlık zinciri açısından dikkatle izlenmektedir. Söz konusu yatırımların bölgesel sağlık turizmi hareketliliğine etkisi ise hastanelerin klinik branşları, uluslararası hasta kabul modelleri ve akreditasyon standartları ilan edildiğinde somutluk kazanacaktır.</p>
`
  },
  {
    id: 'art-radar-2026-09-08',
    slug: 'ushas-kamu-hastaneleri-innova-saglikta-dijital-donusum',
    title: 'USHAŞ, Kamu Hastaneleri ve İnnova Sağlık Hizmetlerinde Dijital Dönüşümü Görüştü',
    spot: 'USHAŞ ve Kamu Hastaneleri Genel Müdürlüğü temsilcileri, İnnova ile hastane teknolojileri ve sağlık verisi yönetimini görüştü.',
    category: 'gundem',
    contentType: 'haber',
    status: 'yayimlandi',
    authorId: 'kaan-karakas',
    country: 'Türkiye',
    branch: 'Sağlık Bilişimi',
    publishedAt: '2026-09-29T13:30:00.000Z',
    updatedAt: '2026-09-29T13:30:00.000Z',
    readingTime: 3,
    featuredImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Kamu ve özel sektör liderleri sağlık verisi altyapısı ve akıllı hastane teknolojilerinin entegrasyonu için toplandı.',
    imageSource: 'USHAŞ Kurumsal İletişim',
    tags: [
      'USHAŞ',
      'Kamu Hastaneleri',
      'İnnova',
      'Dijital Dönüşüm',
      'Sağlık Bilişimi',
      'Sağlık Verisi',
      'Gündem'
    ],
    sources: [
      {
        name: 'USHAŞ Resmî Duyurusu (15 Eylül 2026)',
        url: 'https://www.ushas.gov.tr/en/saglik-hizmetlerinde-dijital-donusum-icin-is-birligi-gorusmesi/',
        isOfficial: true
      }
    ],
    seoTitle: 'USHAŞ, Kamu Hastaneleri ve İnnova Dijital Dönüşüm Görüşmesi',
    seoDescription: 'USHAŞ ve Kamu Hastaneleri Genel Müdürlüğü temsilcileri, İnnova ile hastane teknolojileri ve sağlık verisi yönetimini görüştü.',
    content: `
<div class="p-3 bg-slate-50 border-l-4 border-[#102A43] text-xs text-slate-600 mb-6 rounded-r">
  <strong>Kaynak Görüşme Tarihi:</strong> 15 Eylül 2026 | <strong>Kurumlar:</strong> USHAŞ & Kamu Hastaneleri GM & İnnova | <strong>Konu:</strong> Sağlıkta Bilişim ve Dijital Dönüşüm
</div>

<p>USHAŞ Genel Müdürü Serdar Şenol ile Sağlık Bakanlığı Kamu Hastaneleri Genel Müdürü Muhammed Emin Demirkol, Türk Telekom iştiraki İnnova'nın Genel Müdürü Huzeyfe Yılmaz'a kurumsal bir çalışma ziyareti gerçekleştirdi. USHAŞ'ın 15 Eylül 2026 tarihli resmî açıklamasına göre görüşmede; sağlık hizmetlerinin dijital dönüşümü, hastane bilişim teknolojisi altyapılarının modernizasyonu ve sağlık verilerinin güvenli yönetimi kapsamlı olarak değerlendirildi.</p>

<p>Toplantıda ayrıca İnnova'nın akıllı kurum teknolojileri ve dijital entegrasyon alanında yürüttüğü ACEP projesinin sağlık sektöründeki kullanım potansiyeli ve kamu sağlık tesislerine uyarlanabilirliği ele alındı. Kurumsal duyuruda yeni bir yazılımın devreye alındığına, resmî bir ihale sözleşmesi imzalandığına ya da belirli bir pilot hastanede zorunlu uygulamanın başladığına ilişkin bir hüküm yer almamaktadır.</p>

<h2>Uluslararası Hasta Süreçlerinde Dijital Altyapının Önemi</h2>
<p>Sağlık turizmi ve sınır ötesi hasta koordinasyonu açısından dijital dönüşüm, yalnızca online randevu altyapısından ibaret değildir. Yabancı hastaların tıbbi kayıtlarının (epikriz, radyoloji ve patoloji raporları) sınır ötesinde KVKK ve GDPR uyumlu güvenli transferi, çok dilli konsültasyon arayüzleri, yapay zekâ tabanlı ön değerlendirme ve ülkesine dönen hastaların uzaktan izlenmesi kritik basamaklardır.</p>

<p>Kamu ve teknoloji paydaşları arasındaki bu istişareler, kurumlar arası veri koordinasyonuna ivme kazandırabilir; fakat somut sektörel etki için uygulama pilotları, siber güvenlik protokolleri ve mevzuat uyum ayrıntıları beklenmelidir.</p>
`
  },
  {
    id: 'art-radar-2026-09-09',
    slug: 'dso-dogum-kontrol-secenekleri-yeni-rehber-2026',
    title: 'DSÖ Doğum Kontrol Seçeneklerine İlişkin Yeni Rehber Yayımladı',
    spot: 'DSÖ, doğum kontrol yöntemlerine erişim ve kullanım seçenekleri hakkında yeni rehberini duyurdu; rehberdeki öneriler kişiye özel hekim değerlendirmesi gerektiriyor.',
    category: 'dunya',
    contentType: 'haber',
    status: 'yayimlandi',
    authorId: 'editorial',
    branch: 'Üreme Sağlığı',
    publishedAt: '2026-09-29T13:00:00.000Z',
    updatedAt: '2026-09-29T13:00:00.000Z',
    readingTime: 3,
    featuredImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'DSÖ\'nün 2026 rehberi, modern kontrasepsiyon yöntemlerine ilişkin güncel klinik bulguları ve gelecek hedef ürün profillerini bir araya getiriyor.',
    imageSource: 'Dünya Sağlık Örgütü (WHO)',
    tags: [
      'DSÖ',
      'WHO',
      'Doğum Kontrolü',
      'Üreme Sağlığı',
      'Sağlık Politikası',
      'Dünya Radarı'
    ],
    sources: [
      {
        name: 'Dünya Sağlık Örgütü (WHO) Resmî Bülteni (23 Eylül 2026)',
        url: 'https://www.who.int/news/item/23-09-2026-who-expands-safe-options-for-contraception',
        isOfficial: true
      }
    ],
    seoTitle: 'DSÖ Doğum Kontrol Seçenekleri Yeni Rehberi 2026',
    seoDescription: 'DSÖ, doğum kontrol yöntemlerine erişim ve kullanım seçenekleri hakkında yeni rehberini duyurdu; öneriler kişiye özel değerlendirme gerektiriyor.',
    content: `
<div class="p-3 bg-slate-50 border-l-4 border-[#00A6A6] text-xs text-slate-600 mb-6 rounded-r">
  <strong>Kaynak Duyuru Tarihi:</strong> 23 Eylül 2026 | <strong>Kurum:</strong> Dünya Sağlık Örgütü (WHO) | <strong>Alan:</strong> Üreme Sağlığı ve Kontrasepsiyon Kılavuzu
</div>

<p>Dünya Sağlık Örgütü (DSÖ), modern doğum kontrol yöntemlerine erişim, kullanım güvenliği ve yeni bilimsel kanıtlar hakkında hazırladığı kapsamlı küresel rehberi 23 Eylül 2026 tarihinde kamuoyuna açıkladı. DSÖ raporuna göre dünya genelinde gebeliği ertelemek veya önlemek istediği halde güvenli ve etkili bir kontraseptif yönteme erişemeyen kadın sayısı yaklaşık <strong>164 milyon</strong> düzeyindedir.</p>

<p>Yeni rehber, mevcut yöntemlerin kullanım protokollerine dair güncellenmiş kanıtları ve gelecekte klinik kullanıma girmesi hedeflenen seçenekleri bir araya getiriyor. Örgütün öne çıkardığı başlıca bilimsel değerlendirmeler şunlardır:</p>
<ul>
  <li>Kombine oral kontraseptiflerin (doğum kontrol hapları) uygun hekim kontrolü altında geleneksel döngüsel kullanım yerine daha uzun süreli veya kesintisiz rejime tabi tutulabileceğine dair klinik kanıtlar sunuldu.</li>
  <li>Bazı progestin salgılayan implantların etkin kullanım süresinin beş yıla kadar güvenle uzatılabileceğine ilişkin veriler değerlendirildi.</li>
  <li>Korunmasız ilişkiden sonraki belirli zaman pencerelerinde ek acil kontrasepsiyon alternatifi olarak mifepriston seçeneğine yer verildi.</li>
  <li>Erkeklere yönelik geliştirilmekte olan kontraseptif yöntemler için uluslararası standartları belirleyen Hedef Ürün Profili (TPP) yayımlandı.</li>
</ul>

<h2>Uluslararası Rehber ve Türkiye Klinik Uygulaması</h2>
<p>Bu rehber DSÖ'nün küresel bilimsel tavsiye çerçevesidir; herhangi bir ilacın veya tıbbi yöntemin Türkiye'deki ruhsatını, reçetelendirme şartlarını veya geri ödeme durumunu doğrudan değiştirmez. Yaş, kardiyovasküler risk faktörleri, sigara kullanımı, eşlik eden kronik hastalıklar ve ilaç etkileşimleri nedeniyle her birey için en uygun yöntem ancak kadın hastalıkları ve doğum uzmanı ile birlikte kararlaştırılmalıdır. Kadın sağlığı ve üreme tıbbı alanında faaliyet gösteren sağlık turizmi merkezleri açısından rehber, uluslararası hasta bilgilendirme dokümanlarını güncel tıp literatürüyle uyumlaştırma fırsatı sunmaktadır.</p>
`
  },
  {
    id: 'art-radar-2026-09-10',
    slug: 'ema-damar-ici-demir-ilaclari-dusuk-fosfat-kemik-guvenligi',
    title: 'Avrupa İlaç Ajansı (EMA) Damar İçi Demir İlaçlarında Düşük Fosfat ve Kemik Güvenliğini İnceliyor',
    spot: 'EMA, damar içi demir tedavilerinde düşük fosfat ve buna bağlı kemik sorunları hakkındaki güvenlik incelemesini başlattı. Süreç Avrupa bağlamında olup tüm damar içi demirlerin yasaklandığı anlamına gelmez.',
    category: 'dunya',
    contentType: 'haber',
    status: 'yayimlandi',
    authorId: 'dr-selim-yilmaz',
    region: 'Avrupa',
    branch: 'Hasta Güvenliği',
    publishedAt: '2026-09-29T12:30:00.000Z',
    updatedAt: '2026-09-29T12:30:00.000Z',
    readingTime: 4,
    featuredImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'EMA PRAC komitesi, intravenöz demir infüzyonlarının hipofosfatemi ve kemik sağlığı üzerindeki etkilerini mercek altına aldı.',
    imageSource: 'Avrupa İlaç Ajansı (EMA)',
    tags: [
      'EMA',
      'PRAC',
      'Hasta Güvenliği',
      'Demir İlaçları',
      'Hipofosfatemi',
      'İlaç Güvenliği',
      'Avrupa'
    ],
    sources: [
      {
        name: 'EMA PRAC Toplantı Özeti (4 Eylül 2026)',
        url: 'https://www.ema.europa.eu/en/news/meeting-highlights-pharmacovigilance-risk-assessment-committee-prac-31-august-3-september-2026',
        isOfficial: true
      }
    ],
    seoTitle: 'EMA Damar İçi Demir İlaçları Düşük Fosfat ve Kemik Güvenliği İncelemesi',
    seoDescription: 'EMA, damar içi demir tedavilerinde düşük fosfat ve buna bağlı kemik sorunları hakkındaki güvenlik incelemesini başlattı.',
    content: `
<div class="p-3 bg-slate-50 border-l-4 border-[#C62828] text-xs text-slate-600 mb-6 rounded-r">
  <strong>Kaynak İnceleme Tarihi:</strong> 4 Eylül 2026 | <strong>Kurum:</strong> Avrupa İlaç Ajansı (EMA) PRAC | <strong>Bölge:</strong> Avrupa Birliği | <strong>Konu:</strong> İlaç Güvenliği ve Farmakovijilans
</div>

<p>Avrupa İlaç Ajansı'nın (EMA) farmakovijilans ve ilaç güvenliği komitesi PRAC, damar yoluyla (enjeksiyon veya infüzyon) uygulanan demir preparatlarının kanda fosfat düşüklüğü (hipofosfatemi) ve buna bağlı kemik problemleri (osteomalazi, kemik ağrıları) riski açısından kapsamlı bir güvenlik incelemesine alındığını duyurdu. EMA'nın 4 Eylül 2026 tarihli toplantı özetine göre inceleme, yalnızca tek bir markayla sınırlı olmayıp Avrupa pazarındaki tüm intravenöz demir ürünlerini kapsamaktadır. Ağızdan (oral) alınan demir takviyeleri bu incelemenin dışındadır.</p>

<h2>Hipofosfatemi Riski ve İncelemenin Gerekçesi</h2>
<p>Kandaki fosfat düzeyinin uzun süreli veya şiddetli düşüşü, kemik dokusunun mineralizasyonunu bozarak kemik yumuşaması, kırık riskinde artış ve kas güçsüzlüğüne yol açabilmektedir. EMA, ferrik karboksimaltoz gibi moleküllerde hipofosfateminin bilinen bir yan etki olduğunu, ancak mevcut ürün bilgilerindeki risk azaltma uyarılarının klinik pratikteki yeterliliğini değerlendirmek üzere yeni farmakovijilans verileri ışığında bu geniş kapsamlı incelemenin başlatıldığını açıkladı.</p>

<p>Klinik pratikteki en önemli zorluk, hipofosfateminin neden olduğu halsizlik, kemik ve kas ağrısı gibi belirtilerin altta yatan demir eksikliği anemisi şikâyetleriyle kolayca karışabilmesi ve bu nedenle teşhisin gecikebilmesidir.</p>

<h2>Hastalar ve Klinisyenler İçin Ne Anlama Geliyor?</h2>
<p>Bu resmi incelemenin başlatılmış olması, EMA'nın damar içi demir ilaçlarını yasakladığı veya tedavinin kesin olarak tehlikeli olduğu anlamına gelmemektedir. PRAC inceleme süresince yarar-risk dengesini, risk altındaki hasta gruplarını ve prospektüslerde yapılması muhtemel ek uyarıları belirleyecektir. Özellikle tekrarlayan yüksek doz damar içi demir tedavisi alan hastaların tedaviyi kendi başlarına bırakmamaları, ancak yeni gelişen kas ve kemik ağrısı gibi şikâyetlerini mutlaka hekimleriyle paylaşarak fosfat düzeylerini takip ettirmeleri tavsiye edilmektedir.</p>
`
  },
  {
    id: 'art-radar-2026-09-11',
    slug: 'fda-sevabertinib-her2-mutasyonlu-akciger-kanseri-2026',
    title: 'ABD FDA, HER2 Mutasyonlu Akciğer Kanserinde Sevabertinibin Kullanım Alanını Genişletti',
    spot: 'FDA, belirli HER2 mutasyonları taşıyan ileri evre küçük hücreli dışı akciğer kanserinde sevabertinib için hızlandırılmış onayın kapsamını genişletti. ABD kararı ilacın Türkiye\'de doğrudan onaylandığı anlamına gelmez.',
    category: 'dunya',
    contentType: 'haber',
    status: 'yayimlandi',
    authorId: 'dr-selim-yilmaz',
    region: 'Amerika',
    country: 'ABD',
    branch: 'Onkoloji',
    publishedAt: '2026-09-29T12:00:00.000Z',
    updatedAt: '2026-09-29T12:00:00.000Z',
    readingTime: 4,
    featuredImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'HER2 mutasyonu taşıyan küçük hücreli dışı akciğer kanseri hastalarında hedefe yönelik sevabertinib tedavisinin endikasyonu genişletildi.',
    imageSource: 'ABD FDA Onkoloji Masası',
    tags: [
      'FDA',
      'Onkoloji',
      'Akciğer Kanseri',
      'Sevabertinib',
      'HER2 Mutasyonu',
      'Küçük Hücreli Dışı Akciğer Kanseri',
      'ABD'
    ],
    sources: [
      {
        name: 'FDA Onay Özeti (9 Eylül 2026)',
        url: 'https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-sevabertinib-locally-advanced-or-metastatic-non-squamous-non-small',
        isOfficial: true
      }
    ],
    seoTitle: 'FDA Sevabertinib Onayı: HER2 Mutasyonlu Akciğer Kanseri (ABD)',
    seoDescription: 'FDA, belirli HER2 mutasyonları taşıyan ileri evre küçük hücreli dışı akciğer kanserinde sevabertinib için hızlandırılmış onayın kapsamını genişletti.',
    content: `
<div class="p-3 bg-slate-50 border-l-4 border-[#C62828] text-xs text-slate-600 mb-6 rounded-r">
  <strong>Kaynak Onay Tarihi:</strong> 9 Eylül 2026 | <strong>Kurum:</strong> ABD FDA | <strong>Ruhsat Bölgesi:</strong> Amerika Birleşik Devletleri | <strong>Branş:</strong> Göğüs Onkolojisi
</div>

<p>ABD Gıda ve İlaç Dairesi (FDA), 9 Eylül 2026 tarihinde sevabertinib etken maddeli hedefe yönelik ilaç için daha önce verdiği hızlandırılmış onayın endikasyon kapsamını genişletti. Yeni karar; tümöründe HER2 (ERBB2) tirozin kinaz alanını aktive eden mutasyon saptanan, lokal ileri veya metastatik, skuamöz dışı küçük hücreli dışı akciğer kanseri (KHDAK) tanılı yetişkin hastaları kapsıyor.</p>

<p>Önceki FDA kararında hastaların daha önce en az bir basamak sistemik tedavi görmüş olması şartı bulunuyordu. Genişletilen bu yeni kararla birlikte sevabertinib, <strong>daha önce sistemik tedavi almamış (birinci basamak)</strong> uygun hastaların kullanımına da açılmış oldu.</p>

<h2>SOHO-01 Çalışması ve Güvenlik Uyarıları</h2>
<p>FDA incelemesine temel oluşturan çok merkezli SOHO-01 klinik çalışmasının daha önce tedavi görmemiş 69 hastayı içeren kohortunda:</p>
<ul>
  <li>Nesnel yanıt oranı (ORR) <strong>%75</strong> olarak rapor edildi.</li>
  <li>Yanıtların çoğunda tümör boyutlarında klinik olarak anlamlı küçülme izlendi.</li>
</ul>

<p>Çalışma tek kollu olarak yürütüldüğü için elde edilen bu oran, standart kemo-immünoterapiye karşı doğrudan bir üstünlük kanıtı olarak yorumlanmamalıdır. Ayrıca ilacın resmî ürün bilgisi; şiddetli diyare (ishal), hepatotoksisite (karaciğer enzim yüksekliği), interstisyel akciğer hastalığı (akciğer iltihabı) ve sol ventrikül ejeksiyon fraksiyonunda düşüş gibi kalp ve solunum risklerine dair önemli uyarılar içermektedir.</p>

<h2>Moleküler Testlerin Önemi ve Türkiye Erişimi</h2>
<p>Karar, akciğer kanserinde yeni nesil dizileme (NGS) gibi kapsamlı moleküler testlerin önemini bir kez daha ortaya koymaktadır. Akciğer kanserinde yalnızca genel "HER2 pozitifliği" değil, mutasyonun spesifik ekzon ve amino asit yapısı tedavi yanıtını belirler. FDA, değerlendirme sürecinde İngiltere düzenleyicisi MHRA ile Project Orbis kapsamında iş birliği yaptığını, diğer uluslararası otoritelerin incelemelerinin sürdüğünü kaydetti.</p>

<p><strong>Ruhsat Hatırlatması:</strong> Bu genişletilmiş onay kararı ABD bağlamındadır. İlacın Türkiye'de birinci basamakta ruhsatlandığı veya geri ödemede olduğu anlamına gelmez. Onkolojik tedavi protokolleri yalnızca sorumlu medikal onkoloğun değerlendirmesiyle yürütülmelidir.</p>
`
  },
  {
    id: 'art-radar-2026-09-12',
    slug: 'bm-pandemi-hazirligi-patojen-paylasimi-eylul-2026',
    title: 'BM Toplantısında Pandemiye Hazırlık Yeniden Gündemde: Patojen Paylaşım Sistemi Hâlâ Müzakere Ediliyor',
    spot: 'BM\'de düzenlenen üst düzey toplantıda pandemiye hazırlık, sağlık sistemleri ve patojen paylaşımı görüşüldü; ilgili PABS ekinin müzakeresi sürüyor.',
    category: 'dunya',
    contentType: 'haber',
    status: 'yayimlandi',
    authorId: 'editorial',
    branch: 'Küresel Sağlık Politikası',
    publishedAt: '2026-09-29T11:30:00.000Z',
    updatedAt: '2026-09-29T11:30:00.000Z',
    readingTime: 4,
    featuredImage: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Birleşmiş Milletler Genel Kurulu\'nda liderler pandemiye hazırlık ve küresel patojen paylaşım sistemini müzakere etti.',
    imageSource: 'BM / Dünya Sağlık Örgütü',
    tags: [
      'BM',
      'Birleşmiş Milletler',
      'DSÖ',
      'Pandemi Hazırlığı',
      'PABS',
      'Patojen Paylaşımı',
      'Dünya Radarı'
    ],
    sources: [
      {
        name: 'Dünya Sağlık Örgütü (WHO) Resmî Toplantı Açıklaması (25 Eylül 2026)',
        url: 'https://www.who.int/news/item/25-09-2026-world-leaders-renew-commitment-to-protect-the-world-from-future-pandemics',
        isOfficial: true
      }
    ],
    seoTitle: 'BM Pandemi Hazırlığı ve Patojen Paylaşımı Toplantısı 2026',
    seoDescription: 'BM\'de düzenlenen üst düzey toplantıda pandemiye hazırlık, sağlık sistemleri ve patojen paylaşımı görüşüldü; ilgili ekin müzakeresi sürüyor.',
    content: `
<div class="p-3 bg-slate-50 border-l-4 border-[#00A6A6] text-xs text-slate-600 mb-6 rounded-r">
  <strong>Kaynak Toplantı Tarihi:</strong> 25 Eylül 2026 | <strong>Kurum:</strong> Birleşmiş Milletler Genel Kurulu & DSÖ | <strong>Konu:</strong> Küresel Pandemi Anlaşması & PABS
</div>

<p>Birleşmiş Milletler Genel Kurulu marjında 25 Eylül 2026 tarihinde pandemilerin önlenmesi, hazırlık ve müdahale konulu ikinci üst düzey liderler toplantısı düzenlendi. Dünya Sağlık Örgütü'nün (DSÖ) toplantı sonrası açıklamasına göre küresel liderler; salgın krizleri kapıyı çalmadan önce de epidemiyolojik gözetim, sağlık sistemlerinin dayanıklılığı ve tıbbi karşı önlemlere adil erişim için sürekli yatırım yapılması gerektiğini vurguladı.</p>

<p>Zirvede, DSÖ Pandemi Anlaşması'nın en tartışmalı başlıklarından biri olan <strong>PABS (Patojen Erişimi ve Yararların Paylaşımı) Sistemi</strong> ek protokolünün müzakere süreci öne çıktı. Sistemin temel amacı; pandemi potansiyeli taşıyan yeni patojenlerin araştırma ve aşı geliştirme amacıyla ülkeler arasında zamanında paylaşılması ile bu araştırmalar sonucunda ortaya çıkacak aşı, ilaç ve tanı kitlerine gelişmekte olan ülkelerin eşit ve adil şartlarda erişebilmesi arasında bağlayıcı bir mekanizma kurmaktır.</p>

<h2>Mayıs 2027 Hedefi ve Sınır Ötesi Sağlık Hareketliliği</h2>
<p>DSÖ yönetimine göre PABS ek protokolünün Mayıs 2027 Dünya Sağlık Asamblesi'nde nihai olarak kabul edilmesi, üye ülkelerin Pandemi Anlaşması'nı kendi ulusal parlamentolarında onaylama sürecine geçebilmesi için vazgeçilmez bir ön koşuldur. Dolayısıyla bu üst düzey toplantı, anlaşmanın veya patojen paylaşım protokolünün tamamlandığı ya da küresel olarak yürürlüğe girdiği anlamına gelmemektedir; müzakere süreci devam etmektedir.</p>

<p>Uluslararası hasta hareketliliği ve sağlık turizmi sektörü açısından güçlü küresel salgın gözetimi, sınır ötesi seyahat güvenliği ve sağlık hizmetlerinin kesintisiz sürdürülebilirliği ile doğrudan ilişkilidir. Ancak mevcut aşamada uluslararası seyahat veya sınır geçişlerine dair yeni bir kısıtlama veya zorunlu kural getirilmiş değildir; duyurunun özü siyasi taahhütlerin yenilenmesi ve diplomatik müzakerelerin devam etmesidir.</p>
`
  }
];

function inject() {
  const raw = fs.readFileSync(STORAGE_PATH, 'utf-8');
  const data = JSON.parse(raw);

  let addedCount = 0;
  let updatedCount = 0;

  for (const article of newArticles) {
    const existingIndex = data.articles.findIndex(a => a.slug === article.slug || a.id === article.id);
    if (existingIndex >= 0) {
      data.articles[existingIndex] = { ...data.articles[existingIndex], ...article };
      updatedCount++;
      console.log(`Updated: ${article.slug}`);
    } else {
      // Prepend so latest items are at the beginning
      data.articles.unshift(article);
      addedCount++;
      console.log(`Added: ${article.slug}`);
    }
  }

  fs.writeFileSync(STORAGE_PATH, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`\nSuccessfully injected! Added: ${addedCount}, Updated: ${updatedCount}, Total Articles now: ${data.articles.length}`);
}

inject();
