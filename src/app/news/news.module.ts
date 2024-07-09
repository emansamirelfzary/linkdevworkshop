import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './components/news/news.component';
import { RemoveNullImgPipe } from './pipes/remove-null-img.pipe';
import { SliceTitlePipe } from './pipes/slice-title.pipe';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    NewsComponent,
    RemoveNullImgPipe,
    SliceTitlePipe,
    NewsDetailsComponent
  ],
  imports: [
CommonModule,
RouterModule,
TabViewModule
  ],
  exports:[NewsComponent]
})
export class NewsModule { }
