import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
@Component({
  selector: 'app-updatesthumb',
  templateUrl: './updatesthumb.component.html',
  styleUrls: ['./updatesthumb.component.css']
})
export class UpdatesthumbComponent implements OnInit {

  updatecollection = [];
  kvl: any;
  updatecontent: Array<any>;
  counter: number;

  sandy: any;

    constructor(private serviceService: ServiceService) { }

    ngOnInit() {
    this.serviceService.getUpdates (1 , 'News').subscribe(
    data => {
      this.updatecontent =  data.pageContent;
      this.updatecollection = this.updatecontent ;
      console.log(this.updatecontent);
    },
    error => console.log(error)
  );
    }

    getimage(title, body) {
      this.serviceService.getUpdateData(title).subscribe(
        data => {
          this.sandy = JSON.parse(body);

          this.kvl = data;
          console.log('update', data);
          console.log('connversion data..........', this.sandy);
        },
        error => console.log(error)
      );
    }
    pagination1(p) {
     p = 1;
        }


}
