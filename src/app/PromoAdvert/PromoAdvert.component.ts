import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-PromoAdvert',
  templateUrl: './PromoAdvert.component.html',
  styleUrls: ['./PromoAdvert.component.css']
})
export class PromoAdvertComponent implements OnInit {
  advert: any;
  upcoming: any;
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.serviceService.getAdImg('Advertisments').subscribe(
      data => {
        this.advert = data;
      },
      error => console.log(error)
    );
    this.serviceService.getUpcomingImg('Promotion').subscribe(
      data => {
        this.upcoming = data;
      },
      error => console.log(error)
    );
  }

}
