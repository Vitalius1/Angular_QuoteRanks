import { Component, OnInit } from '@angular/core';
import { Quote } from './models/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quote: Quote = new Quote();
  quotes: Quote[] = [];
  constructor() { }
  onSubmit(form){
    console.log("Form Submited");
    this.quotes.push(this.quote);
    this.quote = new Quote();
    form.resetForm();
  }
  upVote(idx){
    this.quotes[idx].rating += 1;
  }
  downVote(idx){
    this.quotes[idx].rating -= 1;
  }
  deleteQuote(idx){
    var temp = this.quotes[idx];
    this.quotes[idx] = this.quotes[this.quotes.length - 1];
    this.quotes[this.quotes.length - 1] = temp;
    this.quotes.pop();
  }
  ngOnInit() {
  }
}
