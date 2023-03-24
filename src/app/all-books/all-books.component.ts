import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.str);
    
  }
  searchtext:any;
  bookList = [
    {
      bookID:'BK001',
      bookName:'Computer Science',
      authorName:'CS Author',
      publisher:'Goyal Brothers',
    },
    {
      bookID:'BK002',
      bookName:'Physics',
      authorName:'Phy Author',
      publisher:'HarperCollins',
    },
    {
      bookID:'BK003',
      bookName:'Economics',
      authorName:'Ec Author',
      publisher:'Penguin House',
    }
  ];

  str=JSON.stringify(this.bookList);
}
