import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updatePageForRoute('/hakkimizda');
  }

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = 'assets/images/pendik-dıs.jpeg';
      img.onerror = null; // Sonsuz döngüyü önle
    }
  }
}
