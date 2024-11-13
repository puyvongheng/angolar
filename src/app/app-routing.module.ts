import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { NewsComponent } from './pages/news/news.component';
import { DonateComponent } from './pages/donate/donate.component';



const routes: Routes = [
  { path: '', component: IndexComponent },       // Default route (Home page)
  { path: 'news', component: NewsComponent },    // News page
  { path: 'donate', component: DonateComponent },// Donate page  ng generate component pages/news-detail
  { path: 'news-detail', component: NewsDetailComponent }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
