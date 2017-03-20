import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book = {};

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.bookService.showBook(id).then((res) => {
      this.book = res;
      console.log(this.book);
    }, (err) => {
      console.log(err);
    });
  }

  deleteBook(id) {
    this.bookService.deleteBook(id).then((result) => {
      this.router.navigate(['/books']);
    }, (err) => {
      console.log(err);
    });
  }

}
