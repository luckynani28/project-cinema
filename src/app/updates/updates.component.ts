import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  p =   1;
  totalcount: any;
  imagecollection = [];
hotpost: any;  kvl: any;
imgcontent: Array<any>;
counter: number;

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.pagiantinGallery(this.p);
  }

 public pagiantinGallery(page) {
  console.log('update', page);
  this.serviceService.getUpdates (page , 'News').subscribe(
    data => {
      this.totalcount = data.totalPages;
      this.imagecollection = data.pageContent;
    },
    error => console.log(error)
  );
}
getimage(heading) {
  this.serviceService.getUpdateData (heading).subscribe(
    data => {

      this.kvl = data;
      console.log('update', data);
    },
    error => console.log(error)
  );
}
}
