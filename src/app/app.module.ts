import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SortableModule } from 'ngx-bootstrap/sortable';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoRatingSelectOnEnterComponent } from './rating/rating.component';
import { ComplexDatamodelDemoComponent } from './sortable/sortable.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RatingModule.forRoot(),
    SortableModule.forRoot() 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    DemoRatingSelectOnEnterComponent, ComplexDatamodelDemoComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
