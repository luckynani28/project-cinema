import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
import { Router } from '@angular/router';
import { LightGalleryComponent } from './light-gallery/light-gallery.component';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [ LightGalleryComponent ]
})
export class GalleryComponent implements OnInit {
  kvl: any;
  p =   1;
totalcount: any;

imagecollection = [];
hotpost: any;
imgcontent: Array<any>;
counter: number;

title2: any;
 constructor(private serviceService: ServiceService ,
    private router: Router) { }
  ngOnInit() {
    this.pagiantinGallery(this.p);
    this.serviceService.gethotposts().subscribe(
      data => {

        this.hotpost = data ;
        console.log(this.hotpost);
      },
      error => console.log(error)
    );
  }

 public pagiantinGallery(page) {
  console.log('Gallery', page);
  this.serviceService.getGallery (page).subscribe(
    data => {
      this.totalcount = data.totalPages;
      this.imagecollection = data.pageContent;
    },
    error => console.log(error)
  );
}
getImges(title) {
this.serviceService.getFilterImg(title).subscribe(
    data => {
        this.kvl = data;
        console.log('kvl', data);
        const stringifydata = JSON.stringify(this.kvl);
        localStorage.setItem('lightgallery', stringifydata);
        this.router.navigate(['/light', 'images'], { queryParams: { title: (title) }});
      },
    error => console.log(error)

  );
}


}
