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
  whatsappNumber = '905400385000'; // WhatsApp numarası

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
    const message = encodeURIComponent('Merhaba, Kurtköy Otel hakkında bilgi almak istiyorum.');
    window.open(`https://wa.me/${this.whatsappNumber}?text=${message}`, '_blank');
  }

  onLogoError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img) {
      // Logo yüklenemezse text göster
      img.style.display = 'none';
      const logoContainer = img.closest('.logo');
      if (logoContainer) {
        const textLogo = document.createElement('span');
        textLogo.className = 'logo-text-fallback';
        textLogo.textContent = 'KURTKÖY OTEL';
        textLogo.style.cssText = 'font-size: 1.5rem; font-weight: 700; color: #2563eb;';
        logoContainer.querySelector('a')?.appendChild(textLogo);
      }
    }
  }
}
