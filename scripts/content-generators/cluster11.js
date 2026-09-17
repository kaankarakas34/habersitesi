// scripts/content-generators/cluster11.js
// Cluster 11: Operasyon, Fiyatlandırma, CRM ve Kalite Yönetimi (Articles 110-119)

module.exports = {
  110: {
    spot: "Maliyet kalemleri, hekim hak edişi, ameliyathane, otel, transfer, komplikasyon payı ve kar marjı hesaplama yöntemleri.",
    authorId: "dr-selim-yilmaz",
    content: `
<p>Sağlık turizminde fiyat listesi oluşturmak yalnızca piyasa fiyatlarına bakarak rakam belirlemek değildir. Yanlış hesaplanan bir maliyet tablosu kliniği hızla zarara sürükleyebilir.</p>

<h2>Fiyatlandırmanın 6 Temel Bileşeni</h2>
<ol>
  <li><strong>Tıbbi Hizmet Maliyeti:</strong> Ameliyathane kirası, anestezi, cerrah hak edişi, yardımcı sağlık personeli ve medikal sarf malzemeleri.</li>
  <li><strong>Kullanılan Tıbbi Malzeme/İmplant:</strong> FDA/CE onaylı orijinal implantlar, silikon protezler veya safir uçlar.</li>
  <li><strong>Konaklama ve VIP Transfer:</strong> Anlaşmalı 4-5 yıldızlı otellerin oda-kahvaltı ücreti ve havalimanı-klinik transfer maliyeti.</li>
  <li><strong>Tercüman ve Refakat Hizmeti:</strong> Hastanın anadilinde tahsis edilen medikal koordinatör giderleri.</li>
  <li><strong>Komplikasyon ve Sigorta Havuzu:</strong> Olası revizyon vakaları için paket başına %5 ila %8 oranında risk fonu ayrılması.</li>
  <li><strong>Pazarlama ve Satış Maliyeti (CAC):</strong> Hasta başına düşen Google Ads/Meta reklam ve çağrı merkezi maliyeti.</li>
</ol>

<h2>Sıkça Sorulan Sorular</h2>
<h3>Fiyatlar hangi para biriminde sunulmalıdır?</h3>
<p>Hedef pazara göre İngiltere için İngiliz Sterlini (£ GBP), Avrupa Birliği için Euro (€), Körfez ve Amerika için ABD Doları ($ USD) kullanılmalıdır.</p>
`
  },
  111: {
    spot: "'All-Inclusive' tedavi paketleri hazırlarken gizli maliyetleri önleme, refakatçi şartları ve şeffaf sözleşme yönetimi.",
    authorId: "dr-selim-yilmaz",
    content: `
<p>Yabancı hastaların %90'ı her şey dahil (all-inclusive) paketleri tercih eder. Çünkü yabancı bir ülkede sürpriz masraflarla karşılaşmak en büyük korkudur.</p>

<h2>Paket Teklifinde Açıkça Belirtilmesi Gerekenler</h2>
<ul>
  <li>Pakete dahil olan tam gece sayısı (hastane yatışı + otel konaklaması).</li>
  <li>Refakatçi için ek ücret alınıp alınmadığı ve refakatçinin kahvaltı/transfer durumu.</li>
  <li>Ameliyat öncesi yapılması gereken kan tahlilleri, EKG ve göğüs röntgeninin dahil olup olmadığı.</li>
  <li>Taburculuk esnasında verilecek ilaçlar, medikal korseler ve boyun yastıklarının durumu.</li>
  <li>Olası ek tedaviler (Örn: dişte beklenmedik kanal tedavisi veya kemik tozu) için birim fiyatlar.</li>
</ul>

<h2>Sıkça Sorulan Sorular</h2>
<h3>Paket fiyatına uçak bileti dahil edilmeli midir?</h3>
<p>Uçak biletlerinin dinamik fiyatlama ve iptal riskleri nedeniyle hastanın kendisi tarafından alınması; bilet bedelinin paketten düşülmesi operasyonel olarak tavsiye edilir.</p>
`
  },
  112: {
    spot: "Gelen ilk formdan ülkesine dönüşten sonraki 1 yıllık takibe kadar 7 aşamalı uluslararası hasta hunisi.",
    authorId: "dr-selim-yilmaz",
    content: `
<p>Hasta yolculuğu (Patient Journey), temas edilen ilk saniyeden itibaren başlayan ve ömür boyu süren bir sadakat döngüsüdür.</p>

<h2>7 Aşamalı Hasta Yolculuğu</h2>
<ol>
  <li><strong>İlk Temas (0-15 Dakika):</strong> WhatsApp veya web formuna ana dilinde samimi ve profesyonel karşılama.</li>
  <li><strong>Tıbbi Ön Teşhis (12-24 Saat):</strong> Hastanın fotoğraflarının veya röntgeninin uzman hekim tarafından incelenerek kişiye özel tedavi planının hazırlanması.</li>
  <li><strong>Satış ve Güven İnşası:</strong> Görüntülü hekim görüşmesi, video hasta referansları ve resmî yetki belgesi sunumu.</li>
  <li><strong>Karşılama ve Güvenli Varış:</strong> Havalimanında VIP araç ve güler yüzlü koordinatör ile otele yerleşim.</li>
  <li><strong>Klinik Süreç ve Ameliyat:</strong> Titiz cerrahi müdahale, anadilinde aydınlatılmış onam ve konforlu bakım.</li>
  <li><strong>Taburculuk ve Şehir Deneyimi:</strong> Kontrol muayenesi, epikriz raporu teslimi, ilaç eğitimi ve hediye paketi.</li>
  <li><strong>Uluslararası Takip (1-12 Ay):</strong> 1. hafta, 1. ay, 3. ay, 6. ay ve 1. yıl görüntülü kontrol takvimi.</li>
</ol>

<h2>Sıkça Sorulan Sorular</h2>
<h3>En çok hasta kaybı hangi aşamada yaşanır?</h3>
<p>İlk mesajın ardından 1 saatten geç cevap verildiğinde hastaların %60'ı başka bir klinikle anlaşmaktadır; ilk 15 dakika kuralı hayati önemdedir.</p>
`
  },
  113: {
    spot: "HubSpot, Salesforce ve sektörel medikal CRM sistemlerinin kurulumu, WhatsApp Business API entegrasyonu ve lead puanlama.",
    authorId: "murat-aksoy",
    content: `
<p>Hasta sayısını artırmak isteyen bir sağlık kuruluşunun Excel tablolarıyla operasyon yönetmesi imkansızdır. Başarı, profesyonel bir CRM mimarisine bağlıdır.</p>

<h2>CRM Kurulumunun 4 Temel Adımı</h2>
<ul>
  <li><strong>Çok Kanallı Entegrasyon:</strong> Google Ads, Facebook, Instagram ve web sitesi formlarının otomatik olarak tek bir havuza düşmesi.</li>
  <li><strong>Resmî WhatsApp Business API:</strong> Müşteri temsilcilerinin kendi kişisel telefonları yerine kurumsal panel üzerinden hastayla yazışması ve tüm geçmişin kayıt altına alınması.</li>
  <li><strong>Lead Puanlama (Lead Scoring):</strong> Bütçesi hazır, pasaportu olan ve ameliyat tarihi netleşmiş sıcak hastaların önceliklendirilmesi.</li>
  <li><strong>Otomatik Hatırlatıcılar:</strong> Tedavi planı gönderilen ancak karar vermeyen hastalara periyodik bilgilendirici video ve mesaj akışları (Drip Campaign).</li>
</ul>

<h2>Sıkça Sorulan Sorular</h2>
<h3>CRM kullanımı KVKK'ya uygun mudur?</h3>
<p>Sunucuları Türkiye'de bulunan veya uluslararası standartlara uyumlu şifreli medikal CRM yazılımları tercih edilmelidir.</p>
`
  },
  114: {
    spot: "15 dakika yanıt kuralı, empati, medikal terim bilgisi ve yabancı hastanın kültürüne göre iletişim psikolojisi.",
    authorId: "dr-zeynep-kaya",
    content: `
<p>Sağlık turizmi çağrı merkezinde çalışan bir personel sıradan bir çağrı merkezi temsilcisi değildir; o hem bir hasta danışmanı hem de bir kültürlerarası diplomattır.</p>

<h2>Çağrı Merkezinde Altın Kurallar</h2>
<ul>
  <li><strong>Kültürel Uyum:</strong> Bir İngiliz hastaya soğukkanlı, net ve şeffaf bilgi verilirken; bir Körfez hastasına daha sıcak, hürmetli ve detaylı ilgi gösterilmelidir.</li>
  <li><strong>Tıbbi Bilgi Yeterliliği:</strong> Temsilci hekimlik taslamamalı ancak prosedürün ne kadar sürdüğünü, anestezinin türünü ve iyileşme evrelerini eksiksiz bilmelidir.</li>
  <li><strong>İtiraz Karşılama:</strong> 'Türkiye güvenli mi?' sorusuna Türkiye'deki uluslararası akreditasyonlar, JCI belgeleri ve Avrupa standartlarıyla profesyonel yanıt verilmelidir.</li>
</ul>

<h2>Sıkça Sorulan Sorular</h2>
<h3>Çağrı merkezi 7/24 açık olmak zorunda mıdır?</h3>
<p>Farklı saat dilimlerindeki (ABD, İngiltere, Körfez) hastalar için vardiyalı çalışma düzeni veya nöbetçi koordinatör sistemi şarttır.</p>
`
  },
  115: {
    spot: "VIP havalimanı karşılama protokolleri, konforlu transfer araçları, hasta dostu anlaşmalı oteller ve refakatçi yönetimi.",
    authorId: "dr-zeynep-kaya",
    content: `
<p>Tıbbi operasyon ne kadar kusursuz olursa olsun, havalimanında 1 saat bekletilen veya otelinde hijyen sorunu yaşayan bir hasta kliniğe kötü puan verecektir.</p>

<h2>Lojistik Yönetimi Kriterleri</h2>
<ul>
  <li><strong>VIP Transfer Araçları:</strong> D2 yetki belgeli, klimalı, internet bağlantısı bulunan ve geniş bagaj hacmine sahip araç filoları.</li>
  <li><strong>Otel Seçimi:</strong> Kliniğe veya hastaneye maksimum 15-20 dakika mesafede, oda servisi olan ve cerrahi sonrası dinlenmeye uygun sessiz oteller.</li>
  <li><strong>Refakatçi Konforu:</strong> Hastanın yanında gelen refakatçinin yeme-içme, internet ve gerektiğinde şehir içi ulaşım ihtiyaçlarının düşünülmesi.</li>
</ul>

<h2>Sıkça Sorulan Sorular</h2>
<h3>Transfer operasyonu acente tarafından mı yapılmalıdır?</h3>
<p>Taşımacılık mevzuatı gereğince turist transferleri yalnızca TÜRSAB üyesi yetkili seyahat acentaları veya D2 belgeli turizm taşımacıları tarafından yapılabilir.</p>
`
  },
  116: {
    spot: "JCI (Joint Commission International), SAS (Sağlıkta Akreditasyon Standartları) ve TEMOS kalite belgelerinin anlamı ve denetim süreçleri.",
    authorId: "dr-selim-yilmaz",
    content: `
<p>Akreditasyon, bir sağlık kuruluşunun hasta güvenliği, sterilizasyon ve hekim yetkinliğinde uluslararası bağımsız denetçiler tarafından onaylanmasıdır.</p>

<h2>Başlıca Akreditasyon Türleri</h2>
<ul>
  <li><strong>JCI (Joint Commission International):</strong> Dünyanın en prestijli hastane kalite akreditasyonudur. Türkiye, JCI akredite hastane sayısında dünyada ilk sıralardadır.</li>
  <li><strong>SAS (Sağlıkta Akreditasyon Standartları):</strong> T.C. Sağlık Bakanlığı'nın Türkiye'ye özgü ulusal akreditasyon sistemidir.</li>
  <li><strong>TEMOS:</strong> Doğrudan uluslararası hasta yönetimi, medikal turizm süreçleri ve kültürlerarası hasta güvenliğine odaklanan Alman kökenli akreditasyon.</li>
</ul>

<h2>Sıkça Sorulan Sorular</h2>
<h3>Akreditasyon almak zorunlu mudur?</h3>
<p>Yetki belgesi için SKS puanı zorunludur; JCI veya TEMOS ise uluslararası sigortalarla anlaşma yapmak ve küresel güven kazanmak için büyük bir avantajdır.</p>
`
  },
  117: {
    spot: "NPS (Net Tavsiye Skoru), komplikasyon oranları, hasta kabul dönüşüm oranları ve operasyonel verimlilik metrikleri.",
    authorId: "dr-selim-yilmaz",
    content: `
<p>Ölçemediğiniz bir sağlık turizmi operasyonunu yönetemez ve geliştiremezsiniz. Bir kliniğin performansını gösteren temel kalite metrikleri şunlardır:</p>

<h2>Takip Edilmesi Gereken 5 Temel KPI</h2>
<ol>
  <li><strong>NPS (Net Promoter Score):</strong> Tedavi gören hastaların kliniği yakınlarına tavsiye etme oranı (%70 üzeri mükemmel kabul edilir).</li>
  <li><strong>Lead-to-Booking Oranı (Dönüşüm Oranı):</strong> Gelen her 100 hasta formundan kaç tanesinin kliniğe gelip ameliyat olduğu (Sektör ortalaması %3–%7 arasındadır).</li>
  <li><strong>Komplikasyon ve Revizyon Oranı:</strong> Gerçekleşen cerrahilerde gelişen komplikasyonların uluslararası tıp literatürü sınırlarında kalması (tercihen <%2).</li>
  <li><strong>Ortalama Yanıt Süresi (First Response Time):</strong> Gelen bir mesajın kaçıncı dakikada cevaplandığı.</li>
  <li><strong>Hasta Başına Net Kar Marjı:</strong> Reklam, operasyon ve cerrahi maliyetler düşüldükten sonra kalan net getiri.</li>
</ol>

<h2>Sıkça Sorulan Sorular</h2>
<h3>NPS ölçümü ne zaman yapılmalıdır?</h3>
<p>İlk ölçüm taburculuk esnasında, ikinci ve en sağlıklı ölçüm ise tedaviden 3 ay sonra iyileşme tamamlandığında yapılmalıdır.</p>
`
  },
  118: {
    spot: "Trustpilot, Google Haritalar, forumlar ve sosyal medya şikayetlerine profesyonel yanıt verme ve kriz iletişimi stratejileri.",
    authorId: "kaan-karakas",
    content: `
<p>Olumsuz bir hasta yorumu kliniğin itibarını yerle bir edebileceği gibi, doğru yönetildiğinde kliniğin ne kadar kurumsal ve hastasının arkasında duran bir yer olduğunu kanıtlama fırsatına dönüşebilir.</p>

<h2>Yorum Yönetiminde 4 Temel Adım</h2>
<ul>
  <li><strong>Hızlı ve Sakin Yanıt:</strong> Kötü bir yorum görüldüğünde hekim veya klinik sahibi fevri davranmamalı; kurumsal bir dille 2 saat içinde yanıt verilmelidir.</li>
  <li><strong>Kişisel Sağlık Verisini Açıklamamak:</strong> Yorum sahibine cevap verirken hastanın tıbbi detayları KVKK gereği asla herkese açık alanda yazılamaz.</li>
  <li><strong>Özel İletişim Hattı Sunmak:</strong> 'Yaşadığınız durum bizi çok üzdü. Hasta Hakları Direktörümüz Dr. ... bizzat sizinle görüşmek için şu numaradan aramanızı bekliyor' denilmelidir.</li>
  <li><strong>Sorunu Çözüp Yorumu Güncelletmek:</strong> Hastanın mağduriyeti giderildikten sonra hastadan yorumunu revize etmesi rica edilmelidir.</li>
</ul>

<h2>Sıkça Sorulan Sorular</h2>
<h3>Yorum satın almak faydalı mıdır?</h3>
<p>Kesinlikle hayır! Google ve Trustpilot algoritmaları sahte yorumları anında tespit edip hesabı askıya alabilmektedir; sahte yorum güveni tamamen yok eder.</p>
`
  },
  119: {
    spot: "Uluslararası bir hastanın klinikte tedavi kararını kesinleştiren 12 şeffaflık, güvenlik ve itibar unsuru.",
    authorId: "dr-selim-yilmaz",
    content: `
<p>Yabancı bir hasta başka bir ülkeye sağlığını emanet etmeye giderken bilinçaltında büyük bir korku ve şüphe taşır. Bu korkuyu yenen 12 altın unsur şunlardır:</p>

<h2>Hasta Güvenini Zirveye Taşıyan 12 Unsur</h2>
<ol>
  <li>T.C. Sağlık Bakanlığı ve TÜRSAB resmî yetki belgesi logoları ve sorgulanabilir lisans numaraları.</li>
  <li>Ameliyatı yapacak cerrahın tıp diploması, uzmanlık belgeleri ve uluslararası dernek üyelikleri.</li>
  <li>Hastanenin uluslararası akreditasyonları (JCI, ISO, SAS).</li>
  <li>Önceden sunulan, sürpriz kalem içermeyen şeffaf yazılı fiyat dökümü.</li>
  <li>Hastanın anadilinde hazırlanmış detaylı aydınlatılmış onam formu.</li>
  <li>Olası revizyon durumlarını güvence altına alan yazılı komplikasyon garantisi.</li>
  <li>Trustpilot ve Google'daki doğrulanmış, gerçek hasta video röportajları.</li>
  <li>Ameliyat öncesi cerrah ile yapılan birebir görüntülü ön görüşme (Online Konsültasyon).</li>
  <li>Kullanılacak tıbbi implant ve malzemelerin orijinal marka sertifikaları.</li>
  <li>7/24 acil tıbbi destek ve koordinasyon telefon hattı.</li>
  <li>VIP havalimanı karşılama ve lüks otel konaklama güvencesi.</li>
  <li>Ülkesine döndükten sonra da devam eden düzenli hekim takip (Aftercare) programı.</li>
</ol>

<h2>Sıkça Sorulan Sorular</h2>
<h3>Bu 12 unsurdan en kritiği hangisidir?</h3>
<p>Cerrah ile ameliyat öncesi görüntülü ön görüşme yapmak, hastanın kafasındaki tüm şüpheleri yok eden en kritik adımdır.</p>
`
  }
};
