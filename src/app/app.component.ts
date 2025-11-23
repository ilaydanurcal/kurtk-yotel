import { Component, OnInit } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnalyticsService } from './services/analytics.service';
import { SeoService } from './services/seo.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Kurtköy Otel';
  whatsappNumber = '905451705050';

  constructor(
    private router: Router,
    private analytics: AnalyticsService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    // SEO servisini başlat
    this.seo.init();
    
    // İlk sayfa için SEO ayarla
    this.seo.updatePageForRoute(this.router.url);
    
    // Sayfa değişikliklerini takip et
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const pageName = this.getPageName(event.urlAfterRedirects);
        this.analytics.trackPageView(pageName, event.urlAfterRedirects);
        this.seo.updatePageForRoute(event.urlAfterRedirects);
      });
  }

  openWhatsApp() {
    const message = encodeURIComponent('Merhaba, Kurtköy Otel hakkında bilgi almak istiyorum.');
    window.open(`https://wa.me/${this.whatsappNumber}?text=${message}`, '_blank');
  }

  private getPageName(url: string): string {
    const routes: { [key: string]: string } = {
      '/': 'Ana Sayfa',
      '/odalar': 'Odalar',
      '/hakkimizda': 'Hakkımızda',
      '/iletisim': 'İletişim',
      '/sss': 'SSS',
      '/blog': 'Blog'
    };
    return routes[url] || 'Bilinmeyen Sayfa';
  }
}
