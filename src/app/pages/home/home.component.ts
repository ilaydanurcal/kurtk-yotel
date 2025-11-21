import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  phoneNumber = '02163071217';
  whatsappNumber = '905400385000';

  constructor(
    private seo: SeoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.seo.updatePageForRoute('/');
  }

  rooms = [
    {
      name: 'Aile Odası',
      image: 'assets/images/aile-odasi-room.jpg',
      capacity: '5 Kişi',
      area: '50 m²',
      description: '5 Kişi Max (Ekstra Yatak Var) - Kurtköy\'de aile konaklaması için geniş ve konforlu oda',
      tags: ['Klima', 'WiFi', 'Çalışma Masası', 'Balkon']
    },
    {
      name: 'Standart Room',
      image: 'assets/images/standart-room.JPG',
      capacity: '2 Kişi',
      area: '25 m²',
      description: '2 Kişi Max (+1 Çocuk) - Kurtköy\'de standart günlük konaklama için modern ve konforlu oda',
      tags: ['Klima', 'WiFi', 'Çalışma Masası']
    },
    {
      name: 'Superior Room',
      image: 'assets/images/superior-room.JPG',
      capacity: '2 Kişi',
      area: '35 m²',
      description: '2 Kişi Max (Ekstra Yatak Var) - Kurtköy\'de superior günlük konaklama için geniş alan',
      tags: ['Klima', 'WiFi', 'Çalışma Masası', 'Balkon']
    },
    {
      name: 'Triple Room',
      image: 'assets/images/triple-room.JPG',
      capacity: '3 Kişi',
      area: '40 m²',
      description: '3 Kişi Max (Ekstra Yatak Var) - Kurtköy\'de üç kişilik günlük konaklama için ideal oda',
      tags: ['Klima', 'Balkon', 'Çalışma Masası']
    },
    {
      name: 'Quad Room',
      image: 'assets/images/quard-room-1.jpg',
      capacity: '4 Kişi',
      area: '50 m²',
      description: '4 Kişi Max (Ekstra Yatak Var) - Kurtköy\'de dört kişilik günlük konaklama için geniş alan',
      tags: ['Klima', 'WiFi', 'Çalışma Masası', 'Balkon']
    },
    {
      name: 'Aile Odası',
      image: 'assets/images/aile-odasi-room.jpg',
      capacity: '6 Kişi',
      area: '60 m²',
      description: '4-6 Kişi Max (Ekstra Yatak Var) - Kurtköy\'de büyük aileler için özel tasarlanmış geniş oda',
      tags: ['Klima', 'WiFi', 'Çalışma Masası', 'Balkon']
    },
    {
      name: 'Jakuzi Odası',
      image: 'assets/images/jakuzi-room.jpg',
      capacity: '2 Kişi',
      area: '45 m²',
      description: '2 Kişi Max (Özel Jakuzi) - Kurtköy\'de romantik günlük konaklama için premium jakuzi oda',
      tags: ['Klima', 'WiFi', 'Çalışma Masası', 'Jakuzi', 'Balkon']
    }
  ];

  roomFacilities = [
    { icon: '❄️', title: 'Klima', description: 'Tüm odalarda merkezi klima sistemi' },
    { icon: '📶', title: 'Ücretsiz WiFi', description: 'Yüksek hızlı, ücretsiz internet bağlantısı' },
    { icon: '📺', title: 'Akıllı TV', description: 'Yüksek çözünürlüklü akıllı televizyon' },
    { icon: '🛁', title: 'Özel Banyo', description: 'Modern donanımlı özel banyo' },
    { icon: '💼', title: 'Çalışma Masası', description: 'İş seyahatleri için uygun çalışma alanı' },
    { icon: '🧊', title: 'Mini Buzdolabı', description: 'İhtiyaçlarınız için mini buzdolabı' }
  ];

  hotelFacilities = [
    { icon: '🕐', title: '7/24 Resepsiyon Hizmeti', description: 'Günün her saati hizmetinizdeyiz. Rezervasyon, check-in/check-out işlemleriniz için 7/24 resepsiyon hizmetimiz mevcuttur.' },
    { icon: '📶', title: 'Ücretsiz WiFi', description: 'Tüm odalarımızda ve ortak alanlarımızda yüksek hızlı, ücretsiz internet bağlantısı sunuyoruz.' },
    { icon: '⏰', title: 'Esnek Check-in/Check-out', description: 'İhtiyaçlarınıza göre esnek check-in ve check-out saatleri sunuyoruz.' },
    { icon: '📅', title: 'Hızlı Rezervasyon', description: 'Online rezervasyon sistemimizle kolay ve hızlı rezervasyon yapabilirsiniz.' },
    { icon: '👤', title: 'Müşteri Desteği', description: 'Her türlü sorunuz ve ihtiyacınız için profesyonel müşteri hizmetleri ekibimiz yanınızda.' },
    { icon: '🚗', title: 'Ücretsiz Otopark', description: 'Güvenli ve ücretsiz otopark hizmeti' },
    { icon: '👶', title: 'Çocuk Dostu', description: 'Çocuk dostu konaklama ortamı' }
  ];

  securityFacilities = [
    { icon: '🧹', title: 'Günlük Temizlik', description: 'Odalarınız her gün profesyonel ekibimiz tarafından temizlenir ve düzenlenir.' },
    { icon: '🛡️', title: 'Güvenlik', description: '24 saat güvenlik kameraları ve güvenlik personeli ile güvenliğiniz bizim önceliğimizdir.' }
  ];

  locationFacilities = [
    { icon: '📍', title: 'Merkezi Konum', description: 'Kurtköy\'ün merkezi noktasında konumlanmış otelimizle ulaşım kolaylığı sağlıyoruz.' }
  ];

  scrollToRooms() {
    const element = document.querySelector('.rooms-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  goToRooms() {
    this.router.navigate(['/odalar']);
  }

  call() {
    window.location.href = `tel:${this.phoneNumber}`;
  }

  openWhatsApp() {
    const message = encodeURIComponent('Merhaba, Kurtköy Otel hakkında bilgi almak istiyorum.');
    window.open(`https://wa.me/${this.whatsappNumber}?text=${message}`, '_blank');
  }

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = '/assets/images/standart-room.JPG';
    }
  }
}
