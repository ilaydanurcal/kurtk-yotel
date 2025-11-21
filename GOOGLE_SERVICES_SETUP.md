# Google Servisleri Kurulum Rehberi

Bu projede Google Analytics, Google Search Console ve Google Ads entegrasyonu mevcuttur. Aşağıdaki adımları takip ederek yapılandırmanız gerekmektedir.

## 1. Google Analytics Kurulumu

### Adımlar:
1. [Google Analytics](https://analytics.google.com/) hesabınıza giriş yapın
2. Yeni bir özellik (Property) oluşturun veya mevcut bir özelliği seçin
3. Ölçüm Kimliğinizi (Measurement ID) alın (G-XXXXXXXXXX formatında)
4. `src/index.html` dosyasını açın
5. Aşağıdaki satırlardaki `G-XXXXXXXXXX` değerini kendi Measurement ID'niz ile değiştirin:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
...
gtag('config', 'G-XXXXXXXXXX', {
```

## 2. Google Search Console Kurulumu

### Adımlar:
1. [Google Search Console](https://search.google.com/search-console) hesabınıza giriş yapın
2. Web sitenizi ekleyin
3. Doğrulama yöntemi olarak "HTML etiketi" seçin
4. Verilen meta etiket kodunu kopyalayın
5. `src/index.html` dosyasını açın
6. Aşağıdaki satırdaki `YOUR_SEARCH_CONSOLE_VERIFICATION_CODE` değerini kendi doğrulama kodunuz ile değiştirin:

```html
<meta name="google-site-verification" content="YOUR_SEARCH_CONSOLE_VERIFICATION_CODE" />
```

## 3. Google Ads Kurulumu

### Adımlar:
1. [Google Ads](https://ads.google.com/) hesabınıza giriş yapın
2. Araçlar ve Ayarlar > Ölçüm > Dönüşümler bölümüne gidin
3. Yeni bir dönüşüm eylemi oluşturun
4. Dönüşüm ID'nizi (AW-XXXXXXXXXX) ve Etiket'i alın
5. `src/index.html` dosyasını açın
6. Aşağıdaki yorum satırını açın ve kendi Conversion ID'nizi ekleyin:

```html
<!-- Google Ads (Conversion ID'nizi buraya ekleyin) -->
gtag('config', 'AW-XXXXXXXXXX');
```

### Dönüşüm Takibi:
Dönüşüm takibi için `AnalyticsService` kullanılabilir. Örnek:

```typescript
// Rezervasyon tamamlandığında
this.analytics.trackConversion('AW-XXXXXXXXXX', 'CONVERSION_LABEL', 500, 'TRY');
```

## 4. Analytics Service Kullanımı

Projede `AnalyticsService` oluşturulmuştur ve otomatik olarak sayfa görüntülemelerini takip eder. Manuel olay takibi için:

```typescript
import { AnalyticsService } from './services/analytics.service';

constructor(private analytics: AnalyticsService) {}

// Özel olay takibi
this.analytics.trackEvent('button_click', 'engagement', 'reservation_button');

// Rezervasyon tıklama
this.analytics.trackReservationClick('Superior Oda');
```

## 5. Test Etme

Kurulumdan sonra:
1. Tarayıcınızda sitenizi açın
2. Google Analytics'te "Gerçek Zamanlı" raporunu kontrol edin
3. Google Tag Assistant eklentisini kullanarak doğrulama yapın
4. Google Search Console'da doğrulama durumunu kontrol edin

## Önemli Notlar

- Tüm ID'ler ve kodlar `src/index.html` dosyasında bulunmaktadır
- Production ortamına geçmeden önce tüm kodları test edin
- GDPR uyumluluğu için cookie onayı eklemeniz önerilir
- Google Analytics'te IP anonimleştirme aktif edilmiştir

## Yardım

Sorun yaşarsanız:
- [Google Analytics Yardım](https://support.google.com/analytics)
- [Google Search Console Yardım](https://support.google.com/webmasters)
- [Google Ads Yardım](https://support.google.com/google-ads)

