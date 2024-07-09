import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/components/news/news.component';
import { NewsDetailsComponent } from './news/components/news-details/news-details.component';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'newsdetails/:index/:categoryName',component:NewsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
