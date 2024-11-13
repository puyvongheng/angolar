import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { NewsComponent } from './pages/news/news.component';
import { DonateComponent } from './pages/donate/donate.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NewsComponent,
    DonateComponent,
    NewsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
