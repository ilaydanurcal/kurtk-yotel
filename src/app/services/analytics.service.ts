import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor() {}

  // Sayfa görüntüleme takibi
  trackPageView(pageName: string, pagePath: string) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
        page_path: pagePath
      });
    }
  }

  // Olay takibi
  trackEvent(eventName: string, eventCategory: string, eventLabel?: string, value?: number) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: eventCategory,
        event_label: eventLabel,
        value: value
      });
    }
  }

  // Google Ads conversion tracking
  trackConversion(conversionId: string, conversionLabel: string, value?: number, currency?: string) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': `${conversionId}/${conversionLabel}`,
        'value': value,
        'currency': currency || 'TRY'
      });
    }
  }

  // Rezervasyon butonu tıklama
  trackReservationClick(roomType: string) {
    this.trackEvent('reservation_click', 'engagement', roomType);
  }

  // İletişim formu gönderimi
  trackContactFormSubmit() {
    this.trackEvent('contact_form_submit', 'engagement', 'contact');
  }
}

