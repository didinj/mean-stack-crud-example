import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  constructor(private http: Http) { }

  getAllBooks() {
    return new Promise((resolve, reject) => {
      this.http.get('/book')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showBook(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/book/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveBook(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/book', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateBook(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/book/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteBook(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/book/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}
