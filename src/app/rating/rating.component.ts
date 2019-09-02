import { Component } from '@angular/core';
 
@Component({
  selector: 'demo-select-on-enter',
  templateUrl: './rating.component.html'
})
export class DemoRatingSelectOnEnterComponent {
  max = 10;
  rate = 7;
  isReadonly = false;
 
  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      this.isReadonly = true;
    }
  }
 
  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
  }
}