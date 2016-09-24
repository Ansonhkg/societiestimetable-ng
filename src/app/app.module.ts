import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';

// Pipes
import { DayPipe } from './pipes/day.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
