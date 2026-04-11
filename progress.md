# TODAP Site — İlerleme Durumu

## Genel Durum
Proje aktif geliştirme aşamasındadır. Temel sayfa yapısı ve içerik tamamlanmış, bazı eksiklikler ve yapılacaklar mevcuttur.

---

## Tamamlananlar ✅

### Altyapı
- [x] Netlify deployment yapılandırması (`netlify.toml`)
- [x] Güvenlik başlıkları (X-Frame-Options, X-XSS-Protection, CSP)
- [x] `_redirects` dosyası
- [x] `.gitignore` ve `.env.example`
- [x] GitHub reposu bağlantısı (`EbubekirGonan/todap`)

### Tasarım Sistemi
- [x] Renk paleti: burgundy + mustard + cream (CSS değişkenleri)
- [x] Tipografi: Syne (başlık) + Lora (gövde)
- [x] `shared.css` — Ortak stiller (nav, footer, butonlar, form elemanları)
- [x] `shared.js` — Ortak veri, localStorage yönetimi, yardımcı fonksiyonlar
- [x] Responsive breakpoint (768px)

### Sayfalar
- [x] `index.html` — Ana sayfa (hero, ticker, haberler, birimler, etkinlikler, istatistikler, yayınlar, CTA, footer)
- [x] `pages/hakkimizda.html` — Hakkımızda + ilkeler kartları
- [x] `pages/birimler.html` — Birimler & komisyonlar
- [x] `pages/haberler.html` — Haberler listesi
- [x] `pages/haber.html` — Haber detay
- [x] `pages/etkinlikler.html` — Etkinlikler listesi
- [x] `pages/etkinlik.html` — Etkinlik detay
- [x] `pages/yayinlar.html` — Yayınlar
- [x] `pages/faaliyetler.html` — Faaliyet listeleri
- [x] `pages/etik-kurullar.html` — Etik kurullar
- [x] `pages/tuzuk.html` — Tüzük
- [x] `pages/uyelik.html` — Üyelik formu
- [x] `pages/iletisim.html` — İletişim formu

### İçerik (Seed Data — `shared.js`)
- [x] 5 haber: Yargı Paketi, LGBTİ+, Kuyu Hapishaneleri, Aslı Aydemir Dayanışması, Serbest Meslek Yönetmeliği
- [x] 3 etkinlik: Eleştirel Psikoloji Dersliği #3, 1 Mayıs, Sempozyum
- [x] 4 birim: Psikolog Hakları Danışma, Kadın Komisyonu, Meslek Yasası Komisyonu, Öğrenci Komisyonu
- [x] Yayınlar verisi
- [x] `content/ayarlar.yml` — Site başlığı, iletişim, sosyal medya, ticker içeriği

### Admin
- [x] `admin/index.html` — Özel HTML admin paneli
- [x] `admin/config.yml` — Netlify CMS yapılandırması (aktif değil)

### Markdown İçerik
- [x] `content/etkinlikler/elestirel-psikoloji-derslik-3.md`
- [x] `content/haberler/serbest-meslek-yonetmelik.md`
- [x] `content/haberler/yargı-paketi-psikologlar.md`

---

## Yapılacaklar / Eksikler 🔲

### Kritik
- [ ] İletişim formu backend bağlantısı (şu an sadece frontend görseli)
- [ ] Üyelik formu backend bağlantısı
- [ ] İngilizce (EN) dil desteği (nav'da buton var, içerik yok)
- [ ] `{pages,admin}/` klasörü — ad hatalı görünüyor, bu klasör boş mu kontrol edilmeli

### İçerik / CMS
- [ ] Netlify CMS → Özel admin geçişinin tamamlanması
- [ ] Markdown içerik dosyalarının `shared.js` seed data ile senkronizasyonu
- [ ] `images/` klasörüne gerçek görsel eklenmesi (şu an boş)

### Teknik
- [ ] `localStorage` tabanlı veri yapısının sunucu taraflı CMS/API ile değiştirilmesi (uzun vadeli)
- [ ] SEO meta etiketleri (OG, Twitter Card)
- [ ] Favicon
- [ ] Form doğrulama (client-side validation)
- [ ] Erişilebilirlik (a11y) iyileştirmeleri (ARIA etiketleri)

### Tasarım
- [ ] Mobil menü (hamburger) — 768px altında nav linkleri gizleniyor ama alternatif menü yok

---

## Son Güncellemeler

| Tarih | Değişiklik |
|---|---|
| Aralık 2025 | Eleştirel Psikoloji Dersliği #3 etkinliği eklendi |
| Aralık 2025 | 11. Yargı Paketi haberi eklendi |
| Temmuz 2025 | Serbest Meslek Yönetmeliği davası güncellendi |
| 2025 | Admin paneli Netlify CMS'den özel HTML'ye geçirildi |
