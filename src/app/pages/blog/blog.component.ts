import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updatePageForRoute('/blog');
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img) {
      // Fallback resim
      img.src = '/assets/images/istanbul-gezilecek-yerler.jpg';
      img.onerror = null; // Sonsuz döngüyü önle
    }
  }
  blogPosts = [
    {
      id: 1,
      slug: 'atasehirde-konforlu-konaklama-rehberi',
      title: 'Ataşehir\'de Konforlu Konaklama Rehberi',
      date: '15 Ocak 2024',
      excerpt: 'Ataşehir bölgesinde konforlu ve modern konaklama seçenekleri hakkında detaylı bilgiler ve ipuçları. Kurtköy Otel\'in merkezi konumundan Ataşehir\'e kolay ulaşım imkanları.',
      image: '/assets/images/blog/atasehir-konaklama.jpg',
      category: 'Konaklama'
    },
    {
      id: 2,
      slug: 'istanbulda-mutlaka-gorulmesi-gereken-yerler',
      title: 'İstanbul\'da Mutlaka Görülmesi Gereken Yerler',
      date: '10 Ocak 2024',
      excerpt: 'İstanbul\'un tarihi ve kültürel zenginliklerini keşfetmek için kapsamlı rehberimiz. Ayasofya, Topkapı Sarayı, Sultanahmet ve daha fazlası hakkında bilgiler.',
      image: '/assets/images/istanbul-gezilecek-yerler.jpg',
      category: 'Gezi'
    },
    {
      id: 3,
      slug: 'istanbulun-lezzet-duraklari-nerede-ne-yenir',
      title: 'İstanbul\'un Lezzet Durakları: Nerede Ne Yenir?',
      date: '5 Ocak 2024',
      excerpt: 'İstanbul\'da mutlaka denemeniz gereken yöresel lezzetler ve en iyi restoranlar. Otelimiz çevresindeki özel mekanlar ve geleneksel Türk mutfağı hakkında bilgiler.',
      image: '/assets/images/istanbulda-ne-yenir.webp',
      category: 'Yemek'
    },
    {
      id: 4,
      slug: 'istanbulda-romantik-bir-kacamak-icin-ipuclari',
      title: 'İstanbul\'da Romantik Bir Kaçamak İçin İpuçları',
      date: '28 Aralık 2023',
      excerpt: 'Sevgilinizle unutulmaz anlar yaşayabileceğiniz romantik mekanlar ve aktiviteler. Boğaz manzaralı restoranlar, özel turlar ve romantik konaklama önerileri.',
      image: '/assets/images/istanbul-romantik.jpg',
      category: 'Romantik'
    },
    {
      id: 5,
      slug: 'aileler-icin-istanbul-cocuklarla-eglenceli-aktiviteler',
      title: 'Aileler İçin İstanbul: Çocuklarla Eğlenceli Aktiviteler',
      date: '20 Aralık 2023',
      excerpt: 'Çocuklarınızla birlikte İstanbul\'da keyifli vakit geçirebileceğiniz yerler ve etkinlikler. Müzeler, parklar, eğlence merkezleri ve aile dostu mekanlar.',
      image: '/assets/images/istanbulda-aileler.jpg',
      category: 'Aile'
    },
    {
      id: 6,
      slug: 'istanbulda-ulasim-rehberi-sehri-kesfetmenin-yollari',
      title: 'İstanbul\'da Ulaşım Rehberi: Şehri Keşfetmenin Yolları',
      date: '12 Aralık 2023',
      excerpt: 'İstanbul\'da toplu taşıma, taksi ve diğer ulaşım seçenekleri hakkında bilmeniz gerekenler. Metro, otobüs, feribot ve havalimanı ulaşım bilgileri.',
      image: '/assets/images/istanbulda-ulasım.jpg',
      category: 'Ulaşım'
    },
    {
      id: 7,
      slug: 'kurtkoy-bolgesi-istanbulun-yukselen-semti',
      title: 'Kurtköy Bölgesi: İstanbul\'un Yükselen Semti',
      date: '5 Aralık 2023',
      excerpt: 'Kurtköy\'ün tarihi, gelişimi ve sunduğu olanaklar hakkında detaylı bilgiler. Bölgenin avantajları, alışveriş merkezleri ve yaşam kalitesi.',
      image: '/assets/images/pendikdis2.jpg',
      category: 'Bölge'
    },
    {
      id: 8,
      slug: 'is-seyahati-icin-istanbul-toplanti-ve-konaklama-ipuclari',
      title: 'İş Seyahati İçin İstanbul: Toplantı ve Konaklama İpuçları',
      date: '28 Kasım 2023',
      excerpt: 'İş seyahati yapanlar için İstanbul\'da konaklama ve toplantı mekanları rehberi. İş merkezlerine yakınlık, toplantı salonları ve iş seyahati avantajları.',
      image: '/assets/images/istanbulda-ulasım.jpg',
      category: 'İş'
    },
    {
      id: 9,
      slug: 'istanbulda-alisveris-cenneti-en-iyi-alisveris-merkezleri',
      title: 'İstanbul\'da Alışveriş Cenneti: En İyi Alışveriş Merkezleri',
      date: '20 Kasım 2023',
      excerpt: 'İstanbul\'un en popüler alışveriş merkezleri ve butik mağazaları. Bağdat Caddesi, Nişantaşı ve diğer alışveriş bölgeleri hakkında bilgiler.',
      image: '/assets/images/istanbul-alisveris.jpeg',
      category: 'Alışveriş'
    },
    {
      id: 10,
      slug: 'istanbulun-gece-hayati-en-iyi-barlar-ve-kulupler',
      title: 'İstanbul\'un Gece Hayatı: En İyi Barlar ve Kulüpler',
      date: '15 Kasım 2023',
      excerpt: 'İstanbul\'un canlı gece hayatını keşfedin. En popüler barlar, gece kulüpleri ve eğlence mekanları. Güvenli ve eğlenceli bir gece için öneriler.',
      image: '/assets/images/istanbul-gece-hayati.webp',
      category: 'Gece Hayatı'
    },
    {
      id: 11,
      slug: 'istanbul-havalimani-sehir-merkezine-ulasim',
      title: 'İstanbul Havalimanı\'ndan Şehir Merkezine Ulaşım',
      date: '10 Kasım 2023',
      excerpt: 'İstanbul Havalimanı ve Sabiha Gökçen Havalimanı\'ndan şehir merkezine ulaşım seçenekleri. Otobüs, metro, taksi ve özel transfer hizmetleri.',
      image: '/assets/images/istanbulda-ulasım.jpg',
      category: 'Ulaşım'
    },
    {
      id: 12,
      slug: 'istanbulda-kis-tatili-kis-aylarinda-yapilacaklar',
      title: 'İstanbul\'da Kış Tatili: Kış Aylarında Yapılacaklar',
      date: '5 Kasım 2023',
      excerpt: 'İstanbul\'da kış aylarında yapılabilecek aktiviteler ve ziyaret edilebilecek yerler. Kapalı mekanlar, müzeler ve kış etkinlikleri hakkında bilgiler.',
      image: '/assets/images/istanbul-gezilecek-yerler.jpg',
      category: 'Tatil'
    },
    {
      id: 13,
      slug: 'istanbulun-tarihi-camileri-mimari-harikalar',
      title: 'İstanbul\'un Tarihi Camileri: Mimari Harikalar',
      date: '28 Ekim 2023',
      excerpt: 'İstanbul\'un en önemli tarihi camileri ve mimari özellikleri. Ayasofya, Sultanahmet, Süleymaniye ve diğer önemli camiler hakkında bilgiler.',
      image: '/assets/images/istanbul-gezilecek-yerler.jpg',
      category: 'Tarih'
    },
    {
      id: 14,
      slug: 'bogaz-turu-istanbulun-en-guzel-manzaralari',
      title: 'Boğaz Turu: İstanbul\'un En Güzel Manzaraları',
      date: '20 Ekim 2023',
      excerpt: 'Boğaz turu yaparak İstanbul\'un en güzel manzaralarını keşfedin. Tur seçenekleri, güzergahlar ve görülmesi gereken yerler hakkında bilgiler.',
      image: '/assets/images/istanbul-romantik.jpg',
      category: 'Turizm'
    },
    {
      id: 15,
      slug: 'istanbulda-saglik-ve-wellness-spa-ve-masaj-merkezleri',
      title: 'İstanbul\'da Sağlık ve Wellness: Spa ve Masaj Merkezleri',
      date: '15 Ekim 2023',
      excerpt: 'İstanbul\'da rahatlama ve yenilenme için en iyi spa ve wellness merkezleri. Masaj, hamam ve sağlık hizmetleri hakkında bilgiler.',
      image: '/assets/images/istanbul-romantik.jpg',
      category: 'Wellness'
    },
    {
      id: 16,
      slug: 'istanbulun-muzeleri-kultur-ve-sanat-rehberi',
      title: 'İstanbul\'un Müzeleri: Kültür ve Sanat Rehberi',
      date: '10 Ekim 2023',
      excerpt: 'İstanbul\'un en önemli müzeleri ve sanat galerileri. Topkapı Sarayı, İstanbul Arkeoloji Müzesi ve çağdaş sanat müzeleri hakkında bilgiler.',
      image: '/assets/images/istanbul-gezilecek-yerler.jpg',
      category: 'Kültür'
    },
    {
      id: 17,
      slug: 'istanbulda-toplu-tasima-istanbulkart-kullanimi',
      title: 'İstanbul\'da Toplu Taşıma: İstanbulkart Kullanımı',
      date: '5 Ekim 2023',
      excerpt: 'İstanbul\'da toplu taşıma kullanımı ve İstanbulkart hakkında bilmeniz gerekenler. Metro, otobüs, tramvay ve feribot hatları hakkında bilgiler.',
      image: '/assets/images/istanbulda-ulasım.jpg',
      category: 'Ulaşım'
    },
    {
      id: 18,
      slug: 'istanbulun-parklari-doga-ve-huzur',
      title: 'İstanbul\'un Parkları: Doğa ve Huzur',
      date: '28 Eylül 2023',
      excerpt: 'İstanbul\'un en güzel parkları ve yeşil alanları. Yürüyüş, piknik ve dinlenme için ideal mekanlar. Şehir hayatından kaçış için öneriler.',
      image: '/assets/images/istanbulda-aileler.jpg',
      category: 'Doğa'
    }
  ];
}
