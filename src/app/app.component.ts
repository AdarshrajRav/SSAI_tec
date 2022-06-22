import { Component } from '@angular/core';
import { from } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName="";
  form = false;
  sortMenu = false;
  data = [
    { day: 'Wednesday', date: '2022-01-22', time: '5:00pm', temp: 90, wind: 5 },
    { day: 'Tusday',  date: '2022-01-21', time: '3:00pm', temp: 80, wind: 10 },
    { day: 'Monday',  date: '2022-01-20', time: '1:00pm', temp: 95, wind: 3 },
    { day: 'Sunday',  date: '2022-01-19', time: '10:00am', temp: 70, wind: 13 },
    { day: 'Friday',  date: '2022-01-24', time: '9:00pm', temp: 80, wind: 20 },
  ];
  selectedDay = '';
  days = [
    { id: 1, day: "Monday" },
    { id: 2, day: "Tuesday" },
    { id: 3, day: "Wednesday" },
    { id: 4, day: "Thursday" },
    { id: 5, day: "Friday" },
    { id: 6, day: "Saturday" },
    { id: 7, day: "Sunday" }
  ];
  time='';
  date='';
  temp = 0;
  wind = 0;
  order = true;
  submit () {
    let obj = {
      day : this.selectedDay,
      date: this.date,
      time: this.time,
      temp: this.temp,
      wind: this.wind,
    }
    console.log("My input: ", obj);
    this.data.push({
      day : this.selectedDay,
      date: this.date,
      time: this.time,
      temp: this.temp,
      wind: this.wind,
    });
    console.log("Data after submit: ", this.data);
    this.form = false;
  };

  sortArrDate () {
    for (let i = 0; i < this.data.length - 1; i++) {
      let obj = this.data[i];
      for (let j = i + 1; j < this.data.length; j++) {
        // looking for min
        if(this.order && this.data[i].date > this.data[j].date ) {
          obj = this.data[j]
          this.data[j] = this.data[i];
          this.data[i] = obj;
        } else if(!this.order && this.data[i].date < this.data[j].date ) {
          // looking for max
          obj = this.data[j]
          this.data[j] = this.data[i];
          this.data[i] = obj;
        }
      }
    }
  };
  sortArrTemp () {
    for (let i = 0; i < this.data.length - 1; i++) {
      let obj = this.data[i];
      for (let j = i + 1; j < this.data.length; j++) {
        // looking for min
        if(this.order && this.data[i].temp > this.data[j].temp ) {
          obj = this.data[j]
          this.data[j] = this.data[i];
          this.data[i] = obj;
        } else if(!this.order && this.data[i].temp < this.data[j].temp ) {
          // looking for max
          obj = this.data[j]
          this.data[j] = this.data[i];
          this.data[i] = obj;
        }
      }
    }
  };
  sortArrWind () {
    for (let i = 0; i < this.data.length - 1; i++) {
      let obj = this.data[i];
      for (let j = i + 1; j < this.data.length; j++) {
        // looking for min
        if(this.order && this.data[i].wind > this.data[j].wind) {
          obj = this.data[j]
          this.data[j] = this.data[i];
          this.data[i] = obj;
        } else if(!this.order && this.data[i].wind < this.data[j].wind) {
          // looking for max
          obj = this.data[j]
          this.data[j] = this.data[i];
          this.data[i] = obj;
        }
      }
    }
  };

}
