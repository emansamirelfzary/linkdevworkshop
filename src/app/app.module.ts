import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsModule } from './news/news.module';
import { HomeModule } from './home/home.module';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { loadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    NewsModule,
    HomeModule,
    NgbModule,
    NgxSpinnerModule
  ],
  providers: [  
    { provide: HTTP_INTERCEPTORS, useClass: loadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
