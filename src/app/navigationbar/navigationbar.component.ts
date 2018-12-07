import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  constructor(private serviceService: ServiceService ) { }
str: any;

navstring: any;
navmovies = [];
navshortfilms = [];
isActive: true;
navoldmovies = [];

navfilmschool = [];
  ngOnInit() {
    this.serviceService.getnavbarmovies().subscribe(
      data => {
        this.navmovies = data.testdata;
      },
      error => console.log(error)
    );

    this.serviceService.getnavbarshortfilms().subscribe(
      data => {
        this.navshortfilms = data.testdata;
      },
      error => console.log(error)
    );
    this.serviceService.getoldmovienavbar().subscribe(
      data => {
        this.navoldmovies = data.testdata;
      },
      error => console.log(error)
    );
    this.serviceService.getfilmschoolnavbar().subscribe(
      data => {
        this.navfilmschool = data.testdata;
      },
      error => console.log(error)
    );
  }

  setLanguage(lang) {
    localStorage.setItem('language', lang);
    window.location.reload();
  }

  getnav(s1) {
    this.navstring = s1;
console.log('data from navbar', s1);
  }
  }

