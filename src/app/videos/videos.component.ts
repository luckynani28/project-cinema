import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

P =   1;
totalcount: any;
videocollection = [];
hotpost: any;
imgcontent: Array<any>;
counter: number;

viedourl: any;

dangerousUrl: string;


  constructor(private serviceService: ServiceService, public sanitizer: DomSanitizer) {


  }

  ngOnInit() {
    this.pagiantinvideo(this.P);
    this.serviceService.gethotposts().subscribe(
      data => {

        this.hotpost = data ;
        console.log(this.hotpost);
      },
      error => console.log(error)
    );
  }

 public pagiantinvideo(page) {
  console.log('movievideos', page);
  this.serviceService.getVideos ('movievideos', page).subscribe(
    data => {
      this.totalcount = data.totalPages;
      this.videocollection = data.pageContent;
    },
    error => console.log(error)
  );
}
}
