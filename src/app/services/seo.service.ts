import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {}

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateMetaTags(tags: { name?: string; property?: string; content: string }[]) {
    tags.forEach(tag => {
      if (tag.name) {
        this.meta.updateTag({ name: tag.name, content: tag.content });
      }
      if (tag.property) {
        this.meta.updateTag({ property: tag.property, content: tag.content });
      }
    });
  }

  updatePageSEO(pageData: {
    title: string;
    description: string;
    keywords?: string;
    url?: string;
    image?: string;
  }) {
    // Update title
    this.updateTitle(pageData.title);

    // Update meta tags
    this.updateMetaTags([
      { name: 'description', content: pageData.description },
      { name: 'keywords', content: pageData.keywords || 'kurtköy otel, pendik otel, istanbul otel, konaklama' },
      { property: 'og:title', content: pageData.title },
      { property: 'og:description', content: pageData.description },
      { property: 'og:url', content: pageData.url || 'https://www.kurtkoyotel.com' },
      { property: 'og:image', content: pageData.image || 'https://www.kurtkoyotel.com/assets/images/kurtköy-logo.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'tr_TR' },
      { property: 'og:site_name', content: 'Kurtköy Otel' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageData.title },
      { name: 'twitter:description', content: pageData.description },
      { name: 'twitter:image', content: pageData.image || 'https://www.kurtkoyotel.com/assets/images/kurtköy-logo.png' }
    ]);

    // Update canonical URL
    const canonicalUrl = pageData.url || `https://www.kurtkoyotel.com${this.router.url}`;
    let link: HTMLLinkElement = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalUrl);
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(link);
    }
  }

  init() {
    // Route değişikliklerinde SEO güncelle
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updatePageForRoute(event.urlAfterRedirects);
      });
  }

  updatePageForRoute(url: string) {
    const seoData = this.getSeoDataForRoute(url);
    if (seoData) {
      this.updatePageSEO(seoData);
    }
  }

  private getSeoDataForRoute(url: string) {
    const baseUrl = 'https://www.kurtkoyotel.com';
    
    const routes: { [key: string]: any } = {
      '/': {
        title: 'Kurtköy Otel Pendik - İstanbul\'da Konforlu Konaklama | Rezervasyon',
        description: 'Kurtköy Otel Pendik - İstanbul Pendik\'te konforlu ve modern konaklama. Merkezi konum, ücretsiz otopark, 7 farklı oda seçeneği, 24/7 resepsiyon hizmeti. Kurtköy otel, Pendik otel rezervasyon için hemen iletişime geçin.',
        keywords: 'kurtköy otel, pendik otel, istanbul otel, kurtköy konaklama, pendik konaklama, kurtköy hotel, pendik hotel, kurtköy otel rezervasyon, pendik otel rezervasyon',
        url: baseUrl
      },
      '/odalar': {
        title: 'Kurtköy Otel Odalar - Pendik\'te 7 Farklı Oda Seçeneği | Rezervasyon',
        description: 'Kurtköy Otel Pendik - 7 farklı oda seçeneği ile her ihtiyaca uygun konaklama. Standart, Superior, Jakuzili, Aile Odası ve daha fazlası. En uygun fiyat garantisi ile rezervasyon yapın.',
        keywords: 'kurtköy otel odalar, pendik otel odalar, kurtköy otel fiyat, pendik otel fiyat, kurtköy otel rezervasyon, pendik otel rezervasyon, standart oda kurtköy, jakuzili oda pendik',
        url: `${baseUrl}/odalar`
      },
      '/hakkimizda': {
        title: 'Hakkımızda - Kurtköy Otel Pendik | Misyon, Vizyon ve Değerlerimiz',
        description: 'Kurtköy Otel Pendik hakkında bilgiler. Misyonumuz, vizyonumuz, değerlerimiz ve hikayemiz. İstanbul Pendik\'te konforlu konaklama deneyimi sunan otelimiz hakkında detaylı bilgi.',
        keywords: 'kurtköy otel hakkında, pendik otel hakkında, kurtköy otel misyon, pendik otel vizyon, kurtköy otel değerler',
        url: `${baseUrl}/hakkimizda`
      },
      '/iletisim': {
        title: 'İletişim - Kurtköy Otel Pendik | Rezervasyon ve Konum Bilgileri',
        description: 'Kurtköy Otel Pendik iletişim bilgileri. Adres, telefon, e-posta ve konum haritası. Rezervasyon için hemen iletişime geçin. Esenler, Rifat Ilgaz Cd No:120, Pendik/İstanbul.',
        keywords: 'kurtköy otel iletişim, pendik otel iletişim, kurtköy otel telefon, pendik otel telefon, kurtköy otel adres, pendik otel adres, kurtköy otel konum',
        url: `${baseUrl}/iletisim`
      },
      '/sss': {
        title: 'Sık Sorulan Sorular - Kurtköy Otel Pendik | SSS',
        description: 'Kurtköy Otel Pendik hakkında sık sorulan sorular ve cevapları. Check-in, check-out, rezervasyon, iptal politikası ve daha fazlası hakkında bilgi alın.',
        keywords: 'kurtköy otel sss, pendik otel sss, kurtköy otel sorular, pendik otel sorular',
        url: `${baseUrl}/sss`
      },
      '/blog': {
        title: 'Blog - Kurtköy Otel Pendik | İstanbul Rehberi ve Otel Haberleri',
        description: 'Kurtköy Otel Pendik blog sayfası. İstanbul rehberi, konaklama ipuçları, seyahat önerileri ve otelimiz hakkında güncel haberler.',
        keywords: 'kurtköy otel blog, pendik otel blog, istanbul rehberi, konaklama ipuçları',
        url: `${baseUrl}/blog`
      }
    };

    return routes[url] || null;
  }
}
