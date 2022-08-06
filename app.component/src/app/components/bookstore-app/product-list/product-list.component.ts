import { Component, OnInit } from '@angular/core';
import { BooksServices } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  livros: any;
  bookService : BooksServices

  constructor(bookservice : BooksServices) {

    this.bookService = bookservice;

   }

  ngOnInit(): void {

    this.livros = this.bookService.getBook().subscribe((data => {

      this.livros = data;
      console.log (this.livros);
    }))

  }

}
