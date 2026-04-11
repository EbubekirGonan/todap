# TODAP Site — Mimari Dokümantasyon

## Genel Bakış

TODAP web sitesi, herhangi bir JavaScript framework'ü veya build aracı kullanmayan, **saf HTML + CSS + JS** ile yazılmış statik bir sitedir. Netlify üzerinde barındırılmaktadır.

---

## Teknoloji Yığını

| Katman | Teknoloji |
|---|---|
| Markup | HTML5 |
| Stil | CSS3 (değişkenler, grid, flexbox) |
| Mantık | Vanilla JavaScript (ES6+) |
| Tipografi | Google Fonts — Syne + Lora |
| Hosting | Netlify |
| Auth | Netlify Identity Widget |
| CMS (eski) | Netlify CMS |
| CMS (yeni) | Özel HTML admin paneli |

---

## Dosya Yapısı

```
todap-site/
├── index.html          # Ana sayfa (SPA tarzı, tüm sayfalar burada render edilir)
├── shared.css          # Global stil sistemi — tüm pages/ sayfaları bu dosyayı kullanır
├── shared.js           # Global veri deposu, yardımcı fonksiyonlar, localStorage yönetimi
├── netlify.toml        # Netlify build & güvenlik başlığı yapılandırması
├── _redirects          # Netlify URL yönlendirmeleri
│
├── pages/              # Alt sayfalar (kendi <head> ve <nav> içerir, shared.css kullanır)
│   ├── hakkimizda.html
│   ├── birimler.html
│   ├── haberler.html
│   ├── haber.html      # Dinamik haber detay sayfası (URL param ile)
│   ├── etkinlikler.html
│   ├── etkinlik.html   # Dinamik etkinlik detay sayfası
│   ├── yayinlar.html
│   ├── faaliyetler.html
│   ├── etik-kurullar.html
│   ├── tuzuk.html
│   ├── uyelik.html
│   └── iletisim.html
│
├── admin/
│   ├── index.html      # Özel HTML admin paneli (içerik yönetimi)
│   └── config.yml      # Netlify CMS yapılandırması (devre dışı)
│
├── content/            # Markdown & YAML içerik dosyaları
│   ├── ayarlar.yml     # Site geneli ayarlar (başlık, e-posta, sosyal medya, ticker)
│   ├── haberler/       # Haber markdown dosyaları
│   └── etkinlikler/    # Etkinlik markdown dosyaları
│
└── images/             # Statik görseller
```

---

## Veri Mimarisi

### localStorage Tabanlı Veri Deposu (`shared.js`)

Tüm dinamik içerik `localStorage`'da `TODAP_DATA` anahtarı altında tutulur. Uygulama ilk açıldığında, `localStorage`'da veri yoksa `defaultData` seed verisi yüklenir.

```
localStorage["TODAP_DATA"] = {
  haberler:    [ { id, baslik, ozet, icerik, tarih, kategori, aktif } ],
  etkinlikler: [ { id, baslik, ozet, icerik, tarih, gun, ay, kategori, aktif } ],
  birimler:    [ { id, no, baslik, ozet, icerik, aktif } ],
  yayinlar:    [ { id, baslik, ozet, url, tarih, aktif } ]
}
```

**Önemli:** Bu yaklaşım sunucu tarafı kalıcılığı sağlamaz. Veri yalnızca kullanıcının tarayıcısında saklanır; farklı cihazlarda veya tarayıcılarda görünmez.

### İçerik Dosyaları (`content/`)

`content/` altındaki markdown ve YAML dosyaları şu an seed data ile tam senkronize değildir. Bu dosyalar önceki Netlify CMS döneminden kalmaktadır.

---

## Sayfa Navigasyon Modeli

`index.html` SPA (Single Page Application) tarzında çalışır:
- `.pv` (page-view) class'ına sahip `<div>`'ler JavaScript ile gösterilip gizlenir
- `go('sayfa-adi')` fonksiyonu sayfa geçişlerini yönetir
- `scrollTo('section-id')` fonksiyonu aynı sayfa içi kaydırma yapar
- Alt sayfalar (`pages/*.html`) ise gerçek ayrı HTML dosyalarıdır ve `shared.css` ile `../index.html`'e referans verir

---

## Tasarım Sistemi

### CSS Değişkenleri

```css
--burgundy: #7a1f2e       /* Ana marka rengi */
--burgundy-deep: #4e1220  /* Koyu varyant — nav arka planı */
--burgundy-light: #f5e8eb /* Açık varyant — hover arka planları */
--mustard: #c9872b        /* Vurgu rengi */
--mustard-light: #fdf3e3  /* Açık vurgu */
--cream: #faf7f2          /* Sayfa arka planı */
--warm-white: #fffdf9     /* Kart arka planları */
--ink: #181210            /* Ana metin */
--ink-muted: #6b5248      /* İkincil metin */
--ink-faint: #a8918a      /* Üçüncül metin / etiketler */
```

### Tipografi

| Kullanım | Font | Değişken |
|---|---|---|
| Başlıklar, navigasyon, etiketler | Syne (wght: 400, 700, 800) | `--fd` / `--font-display` |
| Gövde metni, alıntılar | Lora (normal + italic, 400, 600) | `--fs` / `--font-serif` |

> `index.html` kısa değişkenler (`--fd`, `--fs`) kullanırken `shared.css` uzun isimler (`--font-display`, `--font-serif`) kullanır. İkisi aynı fontlara işaret eder.

---

## Deployment — Netlify

```toml
# netlify.toml
[build]
  publish = "."   # Kök dizin yayınlanır, build adımı yok

[dev]
  port = 8888

[[headers]]       # Tüm sayfalara güvenlik başlıkları eklenir
  X-Frame-Options = "DENY"
  X-XSS-Protection = "1; mode=block"
  Content-Security-Policy = "frame-ancestors 'none'"
```

GitHub reposu: `EbubekirGonan/todap`

---

## Admin Paneli

`admin/index.html` — Netlify CMS'in yerini alan özel HTML tabanlı admin arayüzü.  
Netlify Identity Widget ile kimlik doğrulama yapılmaktadır (`index.html`'de yüklüdür).

`admin/config.yml` — Aktif olarak kullanılmamaktadır; dosya kalmaktadır ancak backend bağlantısı eski CMS için tanımlanmıştır.

---

## Güvenlik Notları

- Netlify güvenlik başlıkları `netlify.toml`'da tanımlıdır (Clickjacking koruması, XSS koruması)
- `.env` ve `.env.local` dosyaları `.gitignore`'a eklenmiştir
- Admin erişimi Netlify Identity üzerinden kontrol edilmelidir
- `localStorage` tabanlı veri yapısı güvenlik açısından düşük risklidir (sunucu tarafı kalıcılığı yoktur); ancak admin paneli erişimi Netlify Identity ile korunmalıdır
