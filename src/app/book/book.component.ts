import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBookList();
  }

  getBookList() {
    this.bookService.getAllBooks().then((res) => {
      this.books = res;
      console.log(this.books);
    }, (err) => {
      console.log(err);
    });
  }

}
