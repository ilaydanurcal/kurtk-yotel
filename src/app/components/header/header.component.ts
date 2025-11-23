import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  phoneNumber = '02163071217'; // Telefon numarası
  whatsappNumber = '905451705050'; // WhatsApp numarası

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  call() {
    window.location.href = `tel:${this.phoneNumber}`;
  }

  openWhatsApp() {
    const message = encodeURIComponent('Merhaba, otel hakkında bilgi almak istiyorum.');
    window.open(`https://wa.me/${this.whatsappNumber}?text=${message}`, '_blank');
  }

  onLogoError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img) {
      // Önce alternatif logo dosyasını dene
      const currentSrc = img.src || img.getAttribute('src') || '';
      if (currentSrc.includes('kurtkoy-logo.png')) {
        // kurtkoy-logo.png yüklenemediyse kurtköy-logo.png'i dene
        img.src = 'assets/images/kurtköy-logo.png';
        img.onerror = () => {
          // İkinci deneme de başarısız olursa sadece gizle, text gösterme
          img.style.display = 'none';
        };
      } else if (currentSrc.includes('kurtköy-logo.png')) {
        // kurtköy-logo.png yüklenemediyse kurtkoy-logo.png'i dene
        img.src = 'assets/images/kurtkoy-logo.png';
        img.onerror = () => {
          // İkinci deneme de başarısız olursa sadece gizle, text gösterme
          img.style.display = 'none';
        };
      } else {
        // Logo yüklenemezse sadece gizle
        img.style.display = 'none';
      }
    }
  }
}
