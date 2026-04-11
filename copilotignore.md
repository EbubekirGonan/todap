# Copilot Ignore Kuralları

Bu dosya, GitHub Copilot'un bu projede **öneri üretirken dikkat etmemesi** gereken dosya ve klasörleri tanımlar.
Ayrıca Copilot'un bu proje için bilmesi gereken kural ve bağlamı içerir.

---

## Yoksayılacak Dosya ve Klasörler

```
# Ortam ve gizli bilgiler
.env
.env.local
.env.*

# Netlify yerel klasörü
.netlify/

# Git meta verisi
.git/

# Hatalı adlandırılmış klasör (içeriğini değiştirme)
{pages,admin}/

# Admin yapılandırması (artık kullanılmıyor)
admin/config.yml

# İçerik markdown dosyaları (otomatik üretme, elle yazılır)
content/haberler/*.md
content/etkinlikler/*.md
content/ayarlar.yml
```

---

## Copilot'a Proje Bağlamı

### Bu Proje Hakkında
- Framework kullanılmaz. Saf HTML, CSS, JS.
- Build adımı yoktur. Tüm dosyalar olduğu gibi Netlify'a sunulur.
- Dil: Türkçe (içerik ve UI)

### Stil Kuralları
- Yeni stil eklerken `shared.css` üzerinde çalış; `index.html` içindeki `<style>` bloğuna dokunma (ana sayfa özeline aittir)
- CSS değişken adları: `--font-display`, `--font-serif` (`shared.css`'te); `--fd`, `--fs` (`index.html`'de)
- Renk eklerken mevcut CSS değişkenlerini (`--burgundy`, `--mustard`, `--cream` vb.) kullan, sabit renk kodu yazma

### JavaScript Kuralları
- Veri okuma/yazma için `TODAP.getData()` ve `TODAP.saveData()` fonksiyonlarını kullan
- `localStorage`'a doğrudan `TODAP_DATA` key'i dışında bir şey yazma
- `shared.js`'deki `defaultData` nesnesini değiştirirken her objenin `id`, `aktif` alanlarına sahip olduğundan emin ol

### HTML Kuralları
- `pages/` altındaki sayfalar `../shared.css`'e link verir, `../shared.js`'i `<script>` ile yükler
- Her sayfada tam `<head>`, `<nav>` ve `<footer>` bulunmalıdır (`shared.css` ortak nav stillerini sağlar)
- Nav linkleri `pages/` içindeki dosyalara `href="sayfaadi.html"` şeklinde referans verir

### İçerik Kuralları
- Haberler `kategori` alanı: `Bildiri`, `Rapor`, `Dayanışma`, `Savunuculuk`
- Etkinlikler `kategori` alanı: `Eğitim Programı`, `Eylem`, `Sempozyum`
- Tarih formatı: `YYYY-MM-DD`
- `gun` ve `ay` alanları etkinlikler için Türkçe kısa ay adı kullanır: `Oca`, `Şub`, `Mar`, `Nis`, `May`, `Haz`, `Tem`, `Ağu`, `Eyl`, `Eki`, `Kas`, `Ara`

---

## Copilot'un Yapmaması Gerekenler

- `localStorage` yapısını başka bir key ile kullanmayı önermemeli
- React, Vue, Svelte gibi framework kurulumu önerme
- Build tool (Vite, Webpack, Parcel) entegrasyonu önerme
- `admin/config.yml` dosyasını Netlify CMS için genişletmeyi önerme (artık kullanılmıyor)
- `{pages,admin}/` klasörüne herhangi bir dosya oluşturmayı önerme
- `.env` dosyasını git'e eklemeyi önerme
