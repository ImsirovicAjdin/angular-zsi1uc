import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoRatingSelectOnEnterComponent } from './rating/rating.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RatingModule.forRoot() 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    DemoRatingSelectOnEnterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
