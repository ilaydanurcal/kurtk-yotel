import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ImageLoaderService } from '../../services/image-loader.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, AfterViewInit {
  phoneNumber = '02163071217';
  whatsappNumber = '905451705050';

  constructor(
    private seo: SeoService,
    private imageLoader: ImageLoaderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.seo.updatePageForRoute('/odalar');
    // İlk görünen resmi önceden yükle
    if (this.rooms.length > 0) {
      this.imageLoader.preloadImage(this.rooms[0].image).catch(() => {});
    }
  }

  ngAfterViewInit() {
    // Lazy load resimleri gözlemle
    setTimeout(() => {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach((img) => {
        this.imageLoader.observeImage(img as HTMLImageElement);
      });
    }, 100);
  }

  rooms = [
    {
      id: 1,
      name: 'Standart Oda',
      slug: 'standart-oda',
      image: 'assets/images/standart-room.JPG',
      gallery: [
        'assets/images/standart-room.JPG',
        'assets/images/standart-room-1.JPG',
        'assets/images/standart-room-2.JPG',
        'assets/images/standart-room-3.JPG'
      ],
      area: '20 m²',
      capacity: '2 Kişi',
      bedType: 'Çift Kişilik Yatak',
      description: 'Ekonomik ve konforlu standart odalarımız, tüm temel ihtiyaçlarınızı karşılayacak şekilde modern donanımla tasarlanmıştır. İş seyahatleri ve kısa süreli konaklamalar için idealdir.',
      features: [
        { icon: '❄️', name: 'Klima', description: 'Merkezi klima sistemi' },
        { icon: '📶', name: 'Ücretsiz WiFi', description: 'Yüksek hızlı internet' },
        { icon: '📺', name: 'Akıllı TV', description: 'Uydu yayını' },
        { icon: '🛁', name: 'Özel Banyo', description: 'Modern donanımlı' },
        { icon: '💼', name: 'Çalışma Masası', description: 'İş seyahatleri için' },
        { icon: '🧊', name: 'Mini Buzdolabı', description: 'İhtiyaçlarınız için' }
      ],
      amenities: ['Klima', 'WiFi', 'TV', 'Banyo', 'Çalışma Masası', 'Mini Buzdolabı']
    },
    {
      id: 2,
      name: 'Superior Oda',
      slug: 'superior-oda',
      image: 'assets/images/superior-room.JPG',
      gallery: [
        'assets/images/superior-room.JPG',
        'assets/images/superior-1.JPG',
        'assets/images/superior-2.JPG',
        'assets/images/superior-3.JPG'
      ],
      area: '30 m²',
      capacity: '2 Kişi',
      bedType: 'Çift Kişilik Yatak',
      description: 'Geniş ve lüks superior odalarımız, daha fazla konfor ve alan arayan misafirlerimiz için idealdir. Modern dekorasyon ve premium olanaklarla unutulmaz bir konaklama deneyimi sunar.',
      features: [
        { icon: '❄️', name: 'Klima', description: 'Merkezi klima sistemi' },
        { icon: '📶', name: 'Ücretsiz WiFi', description: 'Yüksek hızlı internet' },
        { icon: '📺', name: 'Akıllı TV', description: 'Uydu yayını' },
        { icon: '🛁', name: 'Lüks Banyo', description: 'Premium donanım' },
        { icon: '🌳', name: 'Balkon', description: 'Şehir manzarası' },
        { icon: '🧊', name: 'Mini Buzdolabı', description: 'İhtiyaçlarınız için' }
      ],
      amenities: ['Klima', 'WiFi', 'TV', 'Lüks Banyo', 'Balkon', 'Mini Buzdolabı']
    },
    {
      id: 3,
      name: 'Jakuzili Oda',
      slug: 'jakuzili-oda',
      image: 'assets/images/jakuzi-room.jpg',
      gallery: [
        'assets/images/jakuzi-room.jpg',
        'assets/images/jakuzi-room-1.jpg',
        'assets/images/jakuzi-room-2.jpg',
        'assets/images/jakuzi-room-3.jpg'
      ],
      area: '35 m²',
      capacity: '2 Kişi',
      bedType: 'Çift Kişilik Yatak',
      description: 'Özel jakuzi ile lüks bir konaklama deneyimi sunan odalarımız, romantik kaçamaklar ve özel anlar için mükemmeldir. Premium olanaklar ve özel tasarım ile unutulmaz bir deneyim.',
      features: [
        { icon: '🛁', name: 'Özel Jakuzi', description: 'Rahatlatıcı jakuzi keyfi' },
        { icon: '❄️', name: 'Klima', description: 'Merkezi klima sistemi' },
        { icon: '📶', name: 'Ücretsiz WiFi', description: 'Yüksek hızlı internet' },
        { icon: '📺', name: 'Akıllı TV', description: 'Uydu yayını' },
        { icon: '🛁', name: 'Lüks Banyo', description: 'Premium donanım' },
        { icon: '🕯️', name: 'Romantik Dekorasyon', description: 'Özel tasarım' }
      ],
      amenities: ['Jakuzi', 'Klima', 'WiFi', 'TV', 'Lüks Banyo', 'Romantik Dekorasyon']
    },
    {
      id: 4,
      name: 'Aile Odası',
      slug: 'aile-odasi',
      image: 'assets/images/aile-odasi-room.jpg',
      gallery: [
        'assets/images/aile-odasi-room.jpg',
        'assets/images/aile-odasi-room-1.jpg',
        'assets/images/aile-odasi-room-2.jpg',
        'assets/images/aile-odasi-room-3.jpg'
      ],
      area: '40 m²',
      capacity: '4-5 Kişi',
      bedType: 'Çift Kişilik + Tek Kişilik Yatak',
      description: 'Aileler için geniş ve konforlu odalarımız, çocuklu misafirlerimiz için özel olarak tasarlanmıştır. Geniş alan, güvenli ortam ve aile dostu olanaklarla rahat bir konaklama sunar.',
      features: [
        { icon: '👨‍👩‍👧‍👦', name: 'Aile Dostu', description: 'Çocuklar için güvenli' },
        { icon: '❄️', name: 'Klima', description: 'Merkezi klima sistemi' },
        { icon: '📶', name: 'Ücretsiz WiFi', description: 'Yüksek hızlı internet' },
        { icon: '📺', name: 'Akıllı TV', description: 'Uydu yayını' },
        { icon: '🛁', name: 'Banyo', description: 'Modern donanımlı' },
        { icon: '🌳', name: 'Balkon', description: 'Geniş balkon alanı' }
      ],
      amenities: ['Aile Dostu', 'Klima', 'WiFi', 'TV', 'Banyo', 'Balkon']
    },
    {
      id: 5,
      name: 'Üç Kişilik Oda',
      slug: 'uc-kisilik-oda',
      image: 'assets/images/triple-room.JPG',
      gallery: [
        'assets/images/triple-room.JPG',
        'assets/images/triple-room-1.JPG',
        'assets/images/triple-room-2.JPG',
        'assets/images/triple-room-3.JPG'
      ],
      area: '28 m²',
      capacity: '3 Kişi',
      bedType: 'Üç Tek Kişilik Yatak',
      description: 'Üç kişilik konaklama için uygun, geniş ve konforlu odalarımız. Arkadaş grupları ve küçük aileler için ideal bir seçenek. Tüm temel olanaklar ve rahat bir ortam sunar.',
      features: [
        { icon: '👥', name: 'Üç Kişilik', description: 'Rahat konaklama' },
        { icon: '❄️', name: 'Klima', description: 'Merkezi klima sistemi' },
        { icon: '📶', name: 'Ücretsiz WiFi', description: 'Yüksek hızlı internet' },
        { icon: '📺', name: 'Akıllı TV', description: 'Uydu yayını' },
        { icon: '🛁', name: 'Banyo', description: 'Modern donanımlı' },
        { icon: '💼', name: 'Çalışma Masası', description: 'İş seyahatleri için' }
      ],
      amenities: ['Üç Kişilik', 'Klima', 'WiFi', 'TV', 'Banyo', 'Çalışma Masası']
    },
    {
      id: 6,
      name: 'Dört Kişilik Oda',
      slug: 'dort-kisilik-oda',
      image: 'assets/images/quard-room-1.jpg',
      gallery: [
        'assets/images/quard-room-1.jpg',
        'assets/images/quard-room.jpg',
        'assets/images/quard-room-2.jpg',
        'assets/images/quard-room-3.jpg'
      ],
      area: '35 m²',
      capacity: '4 Kişi',
      bedType: 'Dört Tek Kişilik Yatak',
      description: 'Grup konaklamaları için ideal, geniş dört kişilik odalarımız. Arkadaş grupları ve aileler için mükemmel bir seçenek. Geniş alan ve tüm konfor olanakları ile rahat bir konaklama.',
      features: [
        { icon: '👥', name: 'Dört Kişilik', description: 'Grup konaklaması' },
        { icon: '❄️', name: 'Klima', description: 'Merkezi klima sistemi' },
        { icon: '📶', name: 'Ücretsiz WiFi', description: 'Yüksek hızlı internet' },
        { icon: '📺', name: 'Akıllı TV', description: 'Uydu yayını' },
        { icon: '🛁', name: 'Banyo', description: 'Modern donanımlı' },
        { icon: '🌳', name: 'Balkon', description: 'Şehir manzarası' }
      ],
      amenities: ['Dört Kişilik', 'Klima', 'WiFi', 'TV', 'Banyo', 'Balkon']
    },
    {
      id: 7,
      name: 'Ekonomik Oda',
      slug: 'ekonomik-oda',
      image: 'assets/images/ekonomik-room-1.jpg',
      gallery: [
        'assets/images/ekonomik-room-1.jpg',
        'assets/images/ekonomik-room.jpg',
        'assets/images/ekonomik-room-2.jpg',
        'assets/images/ekonomik-room-3.JPG'
      ],
      area: '18 m²',
      capacity: '1 Kişi',
      bedType: 'Tek Kişilik Yatak',
      description: 'Bütçe dostu ekonomik odalarımız, temel ihtiyaçlarınızı karşılayacak şekilde tasarlanmıştır. Tek başına seyahat edenler ve bütçe odaklı misafirlerimiz için ideal bir seçenek.',
      features: [
        { icon: '💰', name: 'Ekonomik', description: 'Bütçe dostu fiyat' },
        { icon: '❄️', name: 'Klima', description: 'Merkezi klima sistemi' },
        { icon: '📶', name: 'Ücretsiz WiFi', description: 'Yüksek hızlı internet' },
        { icon: '📺', name: 'TV', description: 'Uydu yayını' },
        { icon: '🛁', name: 'Banyo', description: 'Modern donanımlı' },
        { icon: '🧊', name: 'Mini Buzdolabı', description: 'İhtiyaçlarınız için' }
      ],
      amenities: ['Ekonomik', 'Klima', 'WiFi', 'TV', 'Banyo', 'Mini Buzdolabı']
    }
  ];

  call() {
    window.location.href = `tel:${this.phoneNumber}`;
  }

  openWhatsApp() {
    const message = encodeURIComponent('Merhaba, oda rezervasyonu hakkında bilgi almak istiyorum.');
    window.open(`https://wa.me/${this.whatsappNumber}?text=${message}`, '_blank');
  }

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = 'assets/images/standart-room.JPG';
    }
  }

  loadGalleryImages(event: Event, room: any) {
    const gallery = (event.target as HTMLElement).closest('.room-gallery');
    if (gallery) {
      const images = gallery.querySelectorAll('img[data-src]');
      images.forEach((element) => {
        const img = element as HTMLImageElement;
        if (img.dataset['src']) {
          img.src = img.dataset['src'];
          img.removeAttribute('data-src');
        }
      });
    }
  }

  trackByRoom(index: number, room: any): number {
    return room.id || index;
  }

  trackByFeature(index: number, feature: any): string {
    return feature.name || index;
  }

  trackByGallery(index: number, img: string): string {
    return img || `img-${index}`;
  }
}
