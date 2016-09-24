import { Component } from '@angular/core';

import { Slot, Day } from './shared/slot';
import { TIMETABLE } from './mockdata/timetable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  title = 'Lancaster University Societies Timetable';
  timetable = TIMETABLE;
  
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  selectedDays = this.days;

  msg = 'No activities today :(';

  onSelect(day){
    if(day == 'all'){
      this.selectedDays = this.days;
      return;
    }
    this.selectedDays = [day];
  }

}
