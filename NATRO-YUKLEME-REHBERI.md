# NATRO'YA YÜKLEME REHBERİ - ADIM ADIM

## 📍 ÖNEMLİ: Dosyaları Nereye Yüklemelisiniz?

### ✅ DOĞRU YOL:
```
dist/kurtkoy-otel/browser/ klasöründeki TÜM DOSYALAR
↓
Natro FTP → public_html klasörüne
```

### ❌ YANLIŞ YOL:
- `dist/kurtkoy-otel/` klasörünü yüklemek (YANLIŞ!)
- `browser` klasörünü yüklemek (YANLIŞ!)
- Dosyaları alt klasöre yüklemek (YANLIŞ!)

---

## 🚀 ADIM ADIM YÜKLEME TALİMATLARI

### ADIM 1: Build Edilmiş Dosyaları Bulun
1. Bilgisayarınızda şu klasöre gidin:
   ```
   C:\Users\ilayd\Desktop\kurtk-yotel\dist\kurtkoy-otel\browser
   ```

2. Bu klasörde şunlar olmalı:
   - ✅ index.html
   - ✅ main-*.js (JavaScript dosyaları)
   - ✅ styles-*.css (CSS dosyası)
   - ✅ assets/ klasörü (resimler)
   - ✅ images/ klasörü
   - ✅ robots.txt
   - ✅ sitemap.xml
   - ✅ htaccess.txt
   - ✅ favicon.ico
   - ✅ Diğer tüm dosyalar

### ADIM 2: FTP ile Natro'ya Bağlanın
1. FileZilla veya başka bir FTP programı açın
2. Natro panel'den FTP bilgilerinizi alın:
   - **Host:** ftp.kurtkoyotel.com (veya Natro'nun verdiği host)
   - **Kullanıcı Adı:** (Natro'dan aldığınız)
   - **Şifre:** (Natro'dan aldığınız)
   - **Port:** 21 (genellikle)

3. FTP ile bağlanın

### ADIM 3: Dosyaları Yükleyin
1. FTP'de **public_html** klasörüne gidin
   - Bazı Natro hesaplarında **www** klasörü olabilir
   - Eğer ikisi de yoksa, ana klasöre yükleyin

2. **public_html** klasörünün içinde:
   - Eski dosyaları silin (önceden yedek alın!)
   - VEYA tüm dosyaları seçip silin

3. Bilgisayarınızdan **dist/kurtkoy-otel/browser** klasöründeki:
   - **TÜM DOSYALARI** seçin (Ctrl+A)
   - **TÜM KLASÖRLERİ** seçin (assets, images dahil)
   - FTP'ye sürükleyip bırakın veya "Upload" butonuna tıklayın

4. Yükleme tamamlanana kadar bekleyin (5-10 dakika sürebilir)

### ADIM 4: .htaccess Dosyasını Oluşturun
1. FTP'de **public_html** klasöründe **htaccess.txt** dosyasını bulun
2. Sağ tıklayın → **"Rename"** (Yeniden Adlandır)
3. Adını şu şekilde değiştirin: **`.htaccess`** (nokta ile başlamalı!)
4. Enter'a basın
5. Dosya adı `.htaccess` olarak görünmeli (gizli dosya olduğu için görünmeyebilir, normal)

### ADIM 5: Kontrol Edin
1. Tarayıcıda sitenizi açın: **https://kurtkoyotel.com**
2. Ana sayfa açılmalı
3. Menüden bir sayfaya tıklayın (örn: /odalar)
4. URL'de **# işareti OLMAMALI**
5. Sayfa düzgün yüklenmeli

---

## ⚠️ SIK YAPILAN HATALAR

### HATA 1: Yanlış Klasöre Yükleme
❌ **YANLIŞ:** `dist/kurtkoy-otel/` klasörünü yüklemek
✅ **DOĞRU:** `dist/kurtkoy-otel/browser/` içindeki dosyaları yüklemek

### HATA 2: .htaccess Dosyası Eksik
❌ **YANLIŞ:** htaccess.txt dosyasını olduğu gibi bırakmak
✅ **DOĞRU:** `.htaccess` olarak yeniden adlandırmak

### HATA 3: Alt Klasöre Yükleme
❌ **YANLIŞ:** Dosyaları `public_html/site/` gibi alt klasöre yüklemek
✅ **DOĞRU:** Dosyaları doğrudan `public_html/` klasörüne yüklemek

### HATA 4: Eski Dosyaları Silmemek
❌ **YANLIŞ:** Eski dosyaların üzerine yazmak
✅ **DOĞRU:** Önce eski dosyaları silip sonra yeni dosyaları yüklemek

---

## 🔍 SORUN GİDERME

### Sorun: Sayfalar 404 hatası veriyor
**Çözüm:**
- `.htaccess` dosyasının doğru yerde olduğunu kontrol edin (public_html klasöründe)
- `.htaccess` dosyasının adının doğru olduğunu kontrol edin (nokta ile başlamalı)
- FTP'de dosya adını tekrar kontrol edin

### Sorun: URL'lerde # işareti var
**Çözüm:**
- `.htaccess` dosyası çalışmıyor demektir
- Natro panel'den Apache Configuration'ı kontrol edin
- `.htaccess` dosyasını tekrar oluşturun

### Sorun: Resimler görünmüyor
**Çözüm:**
- `assets/` ve `images/` klasörlerinin yüklendiğini kontrol edin
- Klasör yapısının doğru olduğunu kontrol edin

### Sorun: Site hiç açılmıyor
**Çözüm:**
- `index.html` dosyasının `public_html` klasöründe olduğunu kontrol edin
- Dosya izinlerini kontrol edin (755 klasörler, 644 dosyalar)

---

## 📞 NATRO DESTEK

Eğer hala sorun yaşıyorsanız:
1. Natro destek ekibine ulaşın
2. Şunu söyleyin: "Angular SPA uygulamam için .htaccess dosyası çalışmıyor"
3. Apache mod_rewrite modülünün aktif olduğunu kontrol etmelerini isteyin

---

## ✅ BAŞARI KONTROL LİSTESİ

Yükleme sonrası kontrol edin:
- [ ] `index.html` dosyası `public_html` klasöründe
- [ ] `.htaccess` dosyası `public_html` klasöründe (nokta ile başlıyor)
- [ ] `assets/` klasörü yüklendi
- [ ] `images/` klasörü yüklendi
- [ ] Ana sayfa açılıyor
- [ ] Menü linkleri çalışıyor (URL'de # yok)
- [ ] Resimler görünüyor
- [ ] CSS stilleri yükleniyor

---

**Son Güncelleme:** Bu rehber, Angular SPA uygulamaları için Natro hosting'e yükleme sürecini açıklar.


