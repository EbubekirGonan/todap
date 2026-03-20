// TODAP Shared Data & Utilities
// All data is stored in localStorage under TODAP_DATA key

const TODAP = {
  version: '1.0',

  // ── Default seed data ──────────────────────────────────────────────
  defaultData: {
    haberler: [
      {
        id: 'h1',
        baslik: '11. Yargı Paketi Taslağı, Biz Psikologlar İçin Hangi Anlamlara Geliyor?',
        ozet: 'Bu taslak, psikologların insan haklarına saygı, ayrımcılıktan kaçınma ve zarar vermeme ilkeleriyle doğrudan çelişmektedir.',
        icerik: `<p>11. Yargı Paketi taslağı kamuoyuna sızdı. Bu taslak, psikologların temel mesleki yükümlülükleriyle doğrudan çelişen maddeler içermektedir.</p>
<p>Söz konusu düzenleme; "insan haklarına saygı ve savunuculuk", "ayrımcılıktan kaçınma", "eşitlik temelinde duyarlılık ve kültürel farkların gözetilmesi", "zarar vermeme ve özerkliği koruma" ile "bilimsel ve güncel bilgi doğrultusunda çalışma" gibi temel mesleki yükümlülükleri ve etik çerçevenin ihlali anlamına gelmektedir.</p>
<p>TODAP olarak bu taslağı reddediyor, psikologların toplumsal sorumluluklarını yerine getirebilmesi için bağımsız çalışma koşullarının korunmasını talep ediyoruz.</p>`,
        tarih: '2025-12-23',
        kategori: 'Bildiri',
        aktif: true
      },
      {
        id: 'h2',
        baslik: 'Son Dönemlerde Artan LGBTİ+ ve Toplumsal Cinsiyet Eşitliğine Karşı Politikalar',
        ozet: '11. Yargı Paketi taslağına göre "doğuşta atanan cinsiyete aykırı" davranışlara üç yıla kadar hapis öngörülüyor.',
        icerik: `<p>Son günlerde kamuoyuna sızan 11. Yargı Paketi taslağına göre, "doğuşta atanan cinsiyete" veya "genel ahlaka aykırı" davranışlarda bulunanlara üç yıla kadar hapis cezası öngörülüyor.</p>
<p>Bu tutumları öven, teşvik eden veya özendiren kişiler de aynı şekilde cezalandırılacak. Düzenleme ile başta LGBTİ+'lar olmak üzere "makbul" kalıplara sığmayan, patriyarkal normlara uymayan herkesin cezalandırılması amaçlanıyor.</p>
<p>TODAP bu düzenlemeyi şiddetle kınamaktadır.</p>`,
        tarih: '2025-10-29',
        kategori: 'Bildiri',
        aktif: true
      },
      {
        id: 'h3',
        baslik: 'Kuyu Tipi Hapishaneler: Tecrit İnsan Haklarını ve Ruh Sağlığını Tehdit Ediyor',
        ozet: 'Hapishanelerde yaşanan hak ihlallerini görünür kılmak, bizim için mesleki ve toplumsal bir sorumluluktur.',
        icerik: `<p>Uzun süredir Türkiye'de baskıcı uygulamaların gündelik yaşamı kuşattığına, muhalif düşüncelerin ve toplumsal savunuların tehdit olarak görüldüğüne tanıklık ediyoruz.</p>
<p>Bu baskı ortamında hapishanelerde yaşanan hak ihlallerini görünür kılmak, bizim için mesleki ve toplumsal bir sorumluluktur. Kuyu tipi hapishanelerde uygulanan tecrit, insan hakları ihlali olduğu kadar ciddi bir ruh sağlığı sorunudur.</p>`,
        tarih: '2025-09-07',
        kategori: 'Rapor',
        aktif: true
      },
      {
        id: 'h4',
        baslik: 'Üyemiz, Dostumuz #AslıAydemireÖzgürlük!',
        ozet: 'LeMan\'a saldıranlar değil, toplumsal dayanışmadan yana bir psikolog, bir feminist, bir Barış Akademisyeni tutuklandı.',
        icerik: `<p>Aslı Aydemir, hiciv dergisi LeMan'a saldırı düzenleyenler değil, toplumsal dayanışmadan yana duran bir psikolog, feminist ve Barış Akademisyeni olarak tutuklandı.</p>
<p>TODAP olarak Aslı Aydemir'in bir an önce serbest bırakılmasını talep ediyor, hukuki süreçte yanında olduğumuzu ilan ediyoruz.</p>`,
        tarih: '2025-07-09',
        kategori: 'Dayanışma',
        aktif: true
      },
      {
        id: 'h5',
        baslik: 'Yönetmeliğe Karşı Emeğimizi Savunduk, Yürütme Kısmen Durduruldu!',
        ozet: 'Ruh sağlığı emekçileri olarak serbest meslek hakkımızı savunuyoruz!',
        icerik: `<p>Ruh sağlığı alanında çalışan psikologların serbest meslek hakkını kısıtlayan yönetmelik düzenlemesine karşı açtığımız davada önemli bir adım atıldı.</p>
<p>Mahkeme yürütmeyi kısmen durdurdu. Bu karar, emekçi psikologların mücadelesinin bir kazanımıdır. Mücadelemiz tam zafer kazanana dek sürecek.</p>`,
        tarih: '2025-07-03',
        kategori: 'Savunuculuk',
        aktif: true
      }
    ],
    etkinlikler: [
      {
        id: 'e1',
        baslik: 'Eleştirel Psikoloji Dersliği #3',
        ozet: '10 haftalık kolektif öğrenme programı. Okumalar, tartışmalar ve atölye çalışmaları.',
        icerik: `<p>Farklı temalarda oturumlar kapsamında 10 haftalık faaliyetimizde, kolektif bir öğrenme deneyimini hedefleyerek okumalar, tartışmalar ve atölye uygulamaları aracılığıyla psikoloji eleştirisinden hareketle eleştirel psikolojiye uzanan bir yol haritası çıkaracağız.</p>
<p>Kayıt için iletişim formunu kullanınız.</p>`,
        tarih: '2025-12-12',
        gun: '12',
        ay: 'Ara',
        kategori: 'Eğitim Programı',
        aktif: true
      },
      {
        id: 'e2',
        baslik: '1 Mayıs\'ta Alanlardayız!',
        ozet: 'Emekçi psikologlar olarak iş güvencesi ve özgür çalışma hakkı için.',
        icerik: `<p>İfade özgürlüğüne, eşit yurttaşlığa, adalete, doğaya ve onurlu yaşama yönelmiş çok yönlü saldırılara karşı birlikte ses çıkarıp, birlikte direnmeye devam edelim.</p>`,
        tarih: '2026-05-01',
        gun: '01',
        ay: 'May',
        kategori: 'Eylem',
        aktif: true
      },
      {
        id: 'e3',
        baslik: 'Eleştirel Psikoloji Sempozyumu',
        ozet: 'Yıllık sempozyum. Bildiri çağrısı ve tarih bilgisi yakında açıklanacak.',
        icerik: `<p>Eleştirel Psikoloji Sempozyumu'nun bu yılki programı hazırlanmaktadır. Bildiri çağrısı ve tarih bilgisi yakında duyurulacaktır.</p>`,
        tarih: '2026-01-01',
        gun: '—',
        ay: '2026',
        kategori: 'Sempozyum',
        aktif: true
      }
    ],
    birimler: [
      {
        id: 'b1',
        no: '01',
        baslik: 'Psikolog Hakları Danışma Birimi',
        ozet: 'Psikologların mesleki ve hukuki haklarını korumak için danışmanlık ve aktif savunuculuk yürütür.',
        icerik: `<p>Psikolog Hakları Danışma Birimi, mesleki alanda karşılaşılan hak ihlallerine yönelik danışmanlık hizmeti sunar ve psikologların yasal haklarını savunur.</p>
<p>Birimle iletişim için dernek e-posta adresini kullanabilirsiniz.</p>`,
        aktif: true
      },
      {
        id: 'b2',
        no: '02',
        baslik: 'Kadın Komisyonu',
        ozet: 'Feminist psikoloji perspektifinden toplumsal cinsiyet eşitliği için araştırma ve eylem üretir.',
        icerik: `<p>Kadın Komisyonu, feminist psikoloji perspektifinden toplumsal cinsiyet eşitliğine yönelik araştırmalar yapar, etkinlikler düzenler ve politika önerileri geliştirir.</p>`,
        aktif: true
      },
      {
        id: 'b3',
        no: '03',
        baslik: 'Meslek Yasası Komisyonu',
        ozet: 'Psikologlar için yasal güvence sağlayacak bağımsız meslek yasası çıkarılması için çalışır.',
        icerik: `<p>Meslek Yasası Komisyonu, Türkiye'de psikologların bağımsız bir meslek yasasına kavuşması için hukuki ve siyasi savunuculuk yürütmektedir.</p>
<p>Bu konudaki TODAP önerisi için Yayınlar bölümündeki Meslek Yasası Dosyası'nı inceleyebilirsiniz.</p>`,
        aktif: true
      },
      {
        id: 'b4',
        no: '04',
        baslik: 'Öğrenci Komisyonu',
        ozet: 'Psikoloji öğrencilerini kolektif öğrenme, dayanışma ve mesleki bilinç etrafında buluşturur.',
        icerik: `<p>Öğrenci Komisyonu, psikoloji lisans ve lisansüstü öğrencilerini toplumcu psikoloji perspektifiyle buluşturmak için etkinlikler, okuma grupları ve tartışma platformları oluşturmaktadır.</p>`,
        aktif: true
      }
    ],
    yayinlar: [
      {
        id: 'y1',
        baslik: 'Eleştirel Psikoloji Bülteni',
        ozet: 'Psikoloji pratiğine eleştirel bakış. Düzenli olarak yayınlanan bültenimiz.',
        tur: 'Süreli Yayın',
        url: 'http://elestirelpsikolojibulteni.todap.org/',
        aktif: true
      },
      {
        id: 'y2',
        baslik: 'Psikoloji ve Toplum Bülteni',
        ozet: 'Psikoloji ile toplumsal meseleler arasındaki ilişkiyi araştıran yayınımız.',
        tur: 'Süreli Yayın',
        url: 'http://psikolojivetoplum.todap.org/',
        aktif: true
      },
      {
        id: 'y3',
        baslik: 'LGBTİ\'larla Çalışma Kılavuzu',
        ozet: 'Psikologlar için kapsamlı uygulama rehberi. Ücretsiz indir.',
        tur: 'Kılavuz · PDF',
        url: 'https://todap.org/images/raporlar_brosurler/psikologlar_icin_lgbtilerle_calisma_kilavuzu_TODAP.pdf',
        aktif: true
      },
      {
        id: 'y4',
        baslik: 'Meslek Yasası Önerisi Dosyası',
        ozet: 'TODAP\'ın bağımsız meslek yasası önerisi ve detaylı gerekçe raporu.',
        tur: 'Rapor · PDF',
        url: 'https://todap.org/images/raporlar_brosurler/MeslekYasasiDosyasi.pdf',
        aktif: true
      }
    ],
    iletisim: {
      email: 'iletisim@todap.org',
      twitter: 'https://twitter.com/todapder',
      facebook: 'https://facebook.com/todapder',
      adres: 'İstanbul, Türkiye'
    },
    uyelikFormu: {
      aktif: true,
      aciklama: 'TODAP\'a üye olmak için aşağıdaki formu doldurunuz. Başvurunuz değerlendirilerek tarafınıza dönüş yapılacaktır.'
    }
  },

  // ── Storage helpers ────────────────────────────────────────────────
  getData() {
    try {
      const raw = localStorage.getItem('TODAP_DATA');
      if (!raw) return this.initData();
      return JSON.parse(raw);
    } catch(e) { return this.initData(); }
  },

  initData() {
    const d = JSON.parse(JSON.stringify(this.defaultData));
    localStorage.setItem('TODAP_DATA', JSON.stringify(d));
    return d;
  },

  saveData(data) {
    localStorage.setItem('TODAP_DATA', JSON.stringify(data));
  },

  // ── URL helpers ────────────────────────────────────────────────────
  getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  },

  formatDate(isoStr) {
    if (!isoStr) return '';
    try {
      return new Date(isoStr).toLocaleDateString('tr-TR', {day:'numeric', month:'long', year:'numeric'});
    } catch(e) { return isoStr; }
  }
};
