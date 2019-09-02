import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
 
@Component({
  selector: 'demo-timepicker-form',
  templateUrl: './timepicker.component.html'
})
export class DemoTimepickerFormComponent {
  form = new FormGroup({
    myControl: new FormControl(new Date())
  });
}
