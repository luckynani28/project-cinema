import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gallerythumb',
  templateUrl: './gallerythumb.component.html',
  styleUrls: ['./gallerythumb.component.css']
})
export class GallerythumbComponent implements OnInit {
kvl: any;
  p =   1;
  imagecollection = [];

imgcontent: Array<any>;
counter: number;

  constructor(private serviceService: ServiceService,  private router: Router) { }

  ngOnInit() {
  this.serviceService.getGallery(1).subscribe(
  data => {

    this.imagecollection = data.pageContent;
    console.log(this.imagecollection);
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
            // this.router.navigate(['/light' , this.kvl.images]);
            this.router.navigate(['/light', 'images'], { queryParams: { title: (title) }});
          },
        error => console.log(error)

      );
    }

}
