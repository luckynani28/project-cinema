import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

@Component({
  selector: 'app-light-gallery',
  templateUrl: './light-gallery.component.html',
  styleUrls: ['./light-gallery.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightGalleryComponent implements OnInit {
  title: any;
  images: any;
  sandy: any;
  i = 0;
  check: any;

  checknext: any;

  countofimages: any;


  items: GalleryItem[];
  objdata: any;

  imageData = this.objdata;
  constructor(private route: ActivatedRoute, public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit() {
    this.title = this.route.snapshot.queryParams['title'];
    this.sandy = localStorage.getItem('lightgallery');
    this.objdata = JSON.parse(this.sandy);
    }

    next() {

this.i++;
this.checking();
this.nextchecking();

}

previous() {
  console.log('before', this.i);
  this.i--;
  this.checking();
  this.nextchecking();
  console.log('after', this.i);

}
refresh() {
  this.i = 0;
  this.checking();
  this.nextchecking();
  console.log('refresh data..............', this.i);
}

checking() {
  if (this.i === 0) {
    this.check = true;
    console.log('if i is 0', this.check);
  } else {
    this.check = false;
    console.log('if i is not 0', this.check);

  }

}
nextchecking() {
  if (this.i === this.countofimages - 1 ) {
    this.checknext = true;
    console.log('if i is 0', this.check);
  } else {
    this.checknext = false;
    console.log('if i is not 0', this.check);

  }
}

getcount(count) {
this.countofimages = count;
console.log('count of images', count);
}
}
