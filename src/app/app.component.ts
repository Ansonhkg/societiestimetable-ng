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
  msg   = 'No activities today :(';
  days  = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // timetable = TIMETABLE;
  timetable = [];
  selectedDays = this.days;
  selectedSociety;

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
    this.getTimetable();
  }

  getTimetable(){
    this.http.get('http://v1.api.societies.online/timetable')
    .map((res:Response) => res.json())
      .subscribe(
        data => this.timetable = data,
        err => console.error(err),
        () => console.log('Hey buddy :)')
      );
  }

  getSocietyInfo(id){
    this.http.get('http://v1.api.societies.online/societies/' + id)
    .map((res:Response) => res.json())
      .subscribe(
        data => this.selectedSociety = data[0],
        err => console.error(err),
        () => console.log('done')
      );
  }

  moreinfo(url){
    window.open(url);
  }

}
