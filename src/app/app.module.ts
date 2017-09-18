import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteListComponent } from './quote/quote-list/quote-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    OrderModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
