import { Component, OnInit } from '@angular/core';
import { Quote } from './models/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: Quote = new Quote();
  quotes: Quote[] = [];
  constructor() { }
  onSubmit(){
    console.log("Form Submited");
  }
  ngOnInit() {
  }
}
