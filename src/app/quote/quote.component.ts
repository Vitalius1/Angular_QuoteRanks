import { Component, OnInit } from '@angular/core';
import { Quote } from './models/quote';
import { dynamicSort } from './models/sortBy';

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
    this.quotes.sort((a, b) => b.author.localeCompare(a.author)) // sorting by a key when the value is a string.
    this.quotes.sort(dynamicSort("-rating")); // sorting by a key when the value is a number needs an import of a function.
    this.quote = new Quote();
    form.resetForm();
  }
  upVote(idx){
    this.quotes[idx].rating += 1;
    this.quotes.sort(dynamicSort("-rating"));
  }
  downVote(idx){
    this.quotes[idx].rating -= 1;
    this.quotes.sort(dynamicSort("-rating"));
  }
  deleteQuote(idx){
    var temp = this.quotes[idx];
    this.quotes[idx] = this.quotes[this.quotes.length - 1];
    this.quotes[this.quotes.length - 1] = temp;
    this.quotes.pop();
    this.quotes.sort(dynamicSort("-rating"));
  }
  ngOnInit() {
  }
}
