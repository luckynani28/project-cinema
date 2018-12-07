import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  p =   1;
  totalcount: any;
  articlecollection = [];
hotpost: any;
 kvl: any;
imgcontent: Array<any>;
counter: number;

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.pagiantinArticles(this.p);
  }

 public pagiantinArticles(page) {
  console.log('articles', page);
  this.serviceService.getArticles(page).subscribe(
    data => {
      this.totalcount = data.totalPages;
      this.articlecollection = data.pageContent;
    },
    error => console.log(error)
  );
}
getimage(heading) {
  this.serviceService.getArticlesData (heading).subscribe(
    data => {

      this.kvl = data;
      console.log('articles', data);
    },
    error => console.log(error)
  );
}
}
