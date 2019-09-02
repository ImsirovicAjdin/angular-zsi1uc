import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoRatingSelectOnEnterComponent } from './rating/rating.component';
import { ComplexDatamodelDemoComponent } from './sortable/sortable.component';
import { DemoTimepickerFormComponent } from './timepicker/timepicker.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, ReactiveFormsModule,
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    DemoRatingSelectOnEnterComponent, 
    ComplexDatamodelDemoComponent,
    DemoTimepickerFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
