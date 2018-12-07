import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ServiceService } from '../../services/service.service';
@Component({
  selector: 'app-cinema143video',
  templateUrl: './cinema143video.component.html',
  styleUrls: ['./cinema143video.component.css']
})
export class Cinema143videoComponent implements OnInit {

  imagecollection = [];

  constructor(private serviceService: ServiceService, private sanitizer: DomSanitizer) { }

    slideConfig = {
     'slidesToShow': 4,
     'slidesToScroll': 1 ,
     enabled: false,
     autoplay: false,
     draggable: false,
     dots: false,
     arrows: true
    };
  ngOnInit() {
    this.serviceService.getVideos('cinema143videos', 1).subscribe(
      data => {
        this.imagecollection = data.pageContent;
      },
      error => console.log(error)
    );
  }

}
