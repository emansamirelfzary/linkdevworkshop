import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsModule } from '../news/news.module';
import { HomeComponent } from './components/home/home.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThingsWeDoComponent } from './components/things-we-do/things-we-do.component';





@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    ThingsWeDoComponent,
  ],
  imports: [
    CommonModule,
    NewsModule,
    NgbModule,

  ]
})
export class HomeModule { }
