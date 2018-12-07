import { Component } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { GallerythumbComponent } from './gallerythumb/gallerythumb.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { UpdatesComponent } from './updates/updates.component';
import { ArticlesComponent } from './articles/articles.component';
import { LightGalleryComponent } from './gallery/light-gallery/light-gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'light/:title', component: LightGalleryComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'content', component: UpdatesComponent },
  { path: 'Articles', component: ArticlesComponent },

  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
