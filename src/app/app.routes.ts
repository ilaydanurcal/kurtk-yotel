import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  { 
    path: 'hakkimizda', 
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  { 
    path: 'odalar', 
    loadComponent: () => import('./pages/rooms/rooms.component').then(m => m.RoomsComponent)
  },
  { path: 'konum', redirectTo: '/iletisim', pathMatch: 'full' },
  { 
    path: 'sss', 
    loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent)
  },
  { 
    path: 'iletisim', 
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  { 
    path: 'blog', 
    loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent)
  },
  { 
    path: 'blog/:slug', 
    loadComponent: () => import('./pages/blog-detail/blog-detail.component').then(m => m.BlogDetailComponent)
  },
  { 
    path: 'kvkk', 
    loadComponent: () => import('./pages/kvkk/kvkk.component').then(m => m.KvkkComponent)
  },
  { 
    path: 'sartlar-ve-kosullar', 
    loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent)
  },
  { path: '**', redirectTo: '' }
];
