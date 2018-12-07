import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PromoAdvertComponent } from './PromoAdvert/PromoAdvert.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { VideosComponent } from './videos/videos.component';
import { UpdatesComponent } from './updates/updates.component';
import { GallerythumbComponent } from './gallerythumb/gallerythumb.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { routing } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { VideosthumbComponent } from './videosthumb/videosthumb.component';
import { UpdatesthumbComponent } from './updatesthumb/updatesthumb.component';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
/* ======= third party modules =========*/
import {SlickModule} from 'ngx-slick';
import { Cinema143videoComponent } from './videos/cinema143video/cinema143video.component';
import { LightGalleryComponent } from './gallery/light-gallery/light-gallery.component';



@NgModule({
  declarations: [
    AppComponent,
    PromoAdvertComponent,
    GalleryComponent,
    VideosComponent,
    UpdatesComponent,
    GallerythumbComponent,
    NavigationbarComponent,
    HomeComponent,
    ArticlesComponent,
    VideosthumbComponent,
    UpdatesthumbComponent,
    Cinema143videoComponent,
    LightGalleryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    NgxPaginationModule,
    routing,
    SlickModule.forRoot(),
    GalleryModule,
    LightboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
