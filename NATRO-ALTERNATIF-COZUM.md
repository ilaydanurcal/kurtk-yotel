# Natro Hosting için Alternatif Çözümler

Natro'da .htaccess dosyası kullanamıyorsanız, aşağıdaki çözümlerden birini kullanabilirsiniz:

## Çözüm 1: HashLocationStrategy (Önerilen)

Bu çözüm .htaccess gerektirmez. URL'lerde `#` işareti olur ama çalışır.

### Adımlar:

1. `src/app/app.config.ts` dosyasını açın
2. Aşağıdaki kodu ekleyin:

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()) // HashLocationStrategy ekle
  ]
};
```

3. Tekrar build alın: `ng build --configuration production`
4. Build dosyalarını Natro'ya yükleyin

**Avantajları:**
- .htaccess gerektirmez
- Tüm hostinglerde çalışır
- Kolay kurulum

**Dezavantajları:**
- URL'lerde `#` işareti olur (örn: `https://site.com/#/odalar`)
- SEO için biraz daha az ideal

## Çözüm 2: Natro Panel'den Rewrite Rules

Natro panel'de URL Rewrite ayarları varsa:

1. Natro panel'e giriş yapın
2. Domain ayarlarına gidin
3. URL Rewrite veya Apache Configuration bölümünü bulun
4. Şu kodu ekleyin:

```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Çözüm 3: index.php ile Fallback

Natro PHP destekliyorsa, `index.php` dosyası oluşturun:

```php
<?php
header('Content-Type: text/html; charset=utf-8');
readfile('index.html');
?>
```

Sonra `.htaccess` yerine bu dosyayı kullanın.

## Önerilen Çözüm

**HashLocationStrategy** kullanmanızı öneriyoruz çünkü:
- En kolay kurulum
- Tüm hostinglerde çalışır
- .htaccess gerektirmez
- Hemen çalışır

HashLocationStrategy'yi aktif etmek için `src/app/app.config.ts` dosyasını güncelleyin ve tekrar build alın.

