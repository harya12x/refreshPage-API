import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  kd_bimbingan: any;
  npm: any;
  nama: any;
  public arrayData: any;
  constructor(
    private http: HttpClient
  ) {
    this.getinfo();
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
      this.getinfo();
    }, 2000);
  };

  getinfo() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/konseling/api/getlogin/');
    data.subscribe(result => {
      this.arrayData = result;
      for(let a of this.arrayData){
        console.log(a);
      }
      this.kd_bimbingan = result[0].kd_bimbingan;
      this.npm = result[0].npm;
      this.nama = result[0].nama;
    });
}
}
