import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { KvkkComponent } from './pages/kvkk/kvkk.component';
import { TermsComponent } from './pages/terms/terms.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hakkimizda', component: AboutComponent },
  { path: 'odalar', component: RoomsComponent },
  { path: 'konum', redirectTo: '/iletisim', pathMatch: 'full' },
  { path: 'sss', component: FaqComponent },
  { path: 'iletisim', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:slug', component: BlogDetailComponent },
  { path: 'kvkk', component: KvkkComponent },
  { path: 'sartlar-ve-kosullar', component: TermsComponent },
  { path: '**', redirectTo: '' }
];
