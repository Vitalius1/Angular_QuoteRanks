import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from './../models/quote';


@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() quotes: Quote[];
  @Output() upEventEmitter = new EventEmitter();
  @Output() downEventEmitter = new EventEmitter();
  @Output() deleteEventEmitter = new EventEmitter();

  triggerUp(idx){
    this.upEventEmitter.emit(idx);
  }
  triggerDown(idx){
    this.downEventEmitter.emit(idx);
  }
  triggerDelete(idx){
    this.deleteEventEmitter.emit(idx);
  }
  constructor() { }

  ngOnInit() {
  }
}
