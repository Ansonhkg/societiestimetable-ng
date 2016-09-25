import { Component, OnInit } from '@angular/core';

import {Http, Response} from '@angular/http';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

//Mock Data
import { TIMETABLE } from './mockdata/timetable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{

  btnSelectedDay = true;

  title = 'Lancaster University Societies Timetable';
  // timetable = TIMETABLE;
  timetable = [];
  
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  selectedDays = this.days;

  msg = 'No activities today :(';

  constructor(private http: Http) { }

  onSelect(day){
    this.btnSelectedDay = false;
    if(day == 'all'){
      this.btnSelectedDay = true;
      this.selectedDays = this.days;
      return;
    }
    this.selectedDays = [day];
  }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.get('http://v1.api.societies.online/timetable')
    .map((res:Response) => res.json())
      .subscribe(
        data => this.timetable = data,
        err => console.error(err),
        () => console.log('done')
      );
  }

}
