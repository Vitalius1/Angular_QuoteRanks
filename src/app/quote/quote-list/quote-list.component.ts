import { Component, OnInit, Input } from '@angular/core';
import { Quote } from './../models/quote';


@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() quotes: Quote[];
  constructor() { }

  ngOnInit() {
  }
}
