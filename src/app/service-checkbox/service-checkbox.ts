import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ServiceCheckbox {

  constructor(private http: HttpClient) {

  }

  getName(name: string) {
    return this.http.get(`http://localhost:3000/isActive?name=${name}`);
  }

  dataCheck(data) {
    this.getName(data.name).subscribe((post) => {
      if (post.length === 0) {
        this.http.post('http://localhost:3000/isActive', data).subscribe((post2) => {

        });
      } else {
        this.http.put(`http://localhost:3000/isActive/${post[0].id}`, data).subscribe((post2) => {

        });
      }
    });
  }
}
