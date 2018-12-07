import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-videosthumb',
  templateUrl: './videosthumb.component.html',
  styleUrls: ['./videosthumb.component.css']
})
export class VideosthumbComponent implements OnInit {

  p: number;
  pageSize: number;
  collection1 = [];
  head: any;
  content: Array<any>;
  counter: number;

    constructor(private serviceService: ServiceService, public sanitizer: DomSanitizer) {

     }

    ngOnInit() {
    this.serviceService.getVideos('movievideos', 1).subscribe(
    data => {
          this.collection1 = data.pageContent;
      console.log('data from video controller', this.content);
    },
    error => console.log(error)
  );
    }



}
