import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
str: any;
// str1 = 'Telugu';
headers: any;
constructor(private http: HttpClient) {}
private baseUrl = 'http://192.168.1.14:8080/';
getLanguage()  {
this.str = localStorage.getItem('language');
if (!this.str) {
    this.str = 'English';
}
   this.headers = new HttpHeaders().set('language', this.str);
}
  getAdImg(Advertisments): Observable<any> {
    this.getLanguage();
    return this.http.get(this.baseUrl + 'getpromoadvdata/' + Advertisments, {headers: this.headers});
  }
  getUpcomingImg(Promotion): Observable<any> {
    this.getLanguage();
    return this.http.get(this.baseUrl + 'getpromoadvdata/' + Promotion, {headers: this.headers});
  }
  getGallery(p): Observable<any> {
    this.getLanguage();
    return this.http.get(this.baseUrl + 'getgallarydata/' + p, {headers: this.headers});
  }
  getFilterImg(title): Observable<any> {
    this.getLanguage();
    return this.http.get(this.baseUrl +  'getfilterimg/' + title, {headers: this.headers});
  }
  getVideos(videos, P): Observable<any> {
    this.getLanguage();
    return this.http.get(this.baseUrl + 'getvideos/' + videos + '/' + P, {headers: this.headers});
  }
  getUpdates( p, News): Observable<any> {
    this.getLanguage();
    return this.http.get(this.baseUrl +  'getcontentdata/' + p + '/' + News , {headers: this.headers});
  }
  getUpdateData(title): Observable<any> {
    this.getLanguage();
    return this.http.get(this.baseUrl +  'getUpdatefilter/' + title , {headers: this.headers});
  }
  // getUpdatesthumb(): Observable<any> {
  //   return this.http.get(this.baseUrl + 'getupdates', {headers: this.headers});
  // }
  getArticles(p): Observable<any> {
    this.getLanguage();
    return this.http.get(this.baseUrl + 'getarticledata/' + p, {headers: this.headers});
  }
  getArticlesData(heading): Observable<any> {
    this.getLanguage();
    return this.http.get(this.baseUrl + 'getarticlefilter/' + heading, {headers: this.headers});
  }
  gethotposts(): Observable<any> {
    this.getLanguage();
    return this.http.get(this.baseUrl + 'gethotposts', {headers: this.headers});
  }
  getcinema143(P): Observable<any> {
    this.getLanguage();
    return this.http.get(this.baseUrl + 'getcinema143videos/' + P, {headers: this.headers});
  }


getnavbarmovies(): Observable<any> {
  this.getLanguage();
  return this.http.get(this.baseUrl + 'getmovienavbar' , {headers: this.headers} );
}
getnavbarshortfilms(): Observable<any> {
  this.getLanguage();
  return this.http.get(this.baseUrl + 'getshortfilmnavbar' , {headers: this.headers});
}

getoldmovienavbar(): Observable<any> {
  this.getLanguage();
  return this.http.get(this.baseUrl + 'getoldmovienavbar' , {headers: this.headers});
}

getfilmschoolnavbar(): Observable<any> {
  this.getLanguage();
  return this.http.get(this.baseUrl + 'getfilmschoolnavbar' , {headers: this.headers});
}

 // getthumbGallery(): Observable<any> {
  //   return this.http.get(this.baseUrl + ' getthumbimgs', {headers: this.headers});
  // }
}
