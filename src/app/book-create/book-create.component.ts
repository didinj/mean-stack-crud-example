import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book = {};

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }

  saveBook() {
    this.bookService.saveBook(this.book).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/book-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
