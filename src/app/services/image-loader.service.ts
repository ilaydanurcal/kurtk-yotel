import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageLoaderService {
  private observer?: IntersectionObserver;
  private imageCache = new Set<string>();

  constructor() {
    this.initObserver();
  }

  private initObserver() {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const dataSrc = img.getAttribute('data-src');
            if (dataSrc && !this.imageCache.has(dataSrc)) {
              this.loadImage(img, dataSrc);
            }
            this.observer?.unobserve(img);
          }
        });
      },
      {
        rootMargin: '50px', // 50px önceden yükle
        threshold: 0.01
      }
    );
  }

  observeImage(img: HTMLImageElement) {
    if (this.observer && img.hasAttribute('data-src')) {
      this.observer.observe(img);
    }
  }

  private loadImage(img: HTMLImageElement, src: string) {
    if (this.imageCache.has(src)) {
      img.src = src;
      img.removeAttribute('data-src');
      return;
    }

    const imageLoader = new Image();
    imageLoader.onload = () => {
      img.src = src;
      img.removeAttribute('data-src');
      img.classList.add('loaded');
      this.imageCache.add(src);
    };
    imageLoader.onerror = () => {
      img.classList.add('error');
    };
    imageLoader.src = src;
  }

  preloadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.imageCache.has(src)) {
        resolve();
        return;
      }

      const img = new Image();
      img.onload = () => {
        this.imageCache.add(src);
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  }
}




