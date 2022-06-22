import { Component } from '@angular/core';
import { from } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // used to load or not load certain elements
  form = false;
  sortMenu = false;

  // default data for start
  data = [
    { date: '2022-01-22', time: '5:00pm', temp: 90, wind: 5 },
    { date: '2022-01-21', time: '3:00pm', temp: 80, wind: 10 },
    { date: '2022-01-20', time: '1:00pm', temp: 95, wind: 3 },
    { date: '2022-01-19', time: '10:00am', temp: 70, wind: 13 },
    { date: '2022-01-24', time: '9:00pm', temp: 80, wind: 20 },
  ];

  // variables for user input for new data
  time='';
  date='';
  temp = 0;
  wind = 0;
  // order is for ascending or descending
  sortBy = ['Date', 'Temperature', 'Wind Speed']
  sort = '';
  selectSort = true;
  order = true;
  // if data is bad change value to false
  checkDate = true;
  checkTime = true;

  // --------------User entry function-------------- //

  submit () {
    // check data using regex
    let goodData = true;

    // checking time
    this.time = this.time.replace(/ /g, '');
    this.time = this.time.replace(/ A/g, 'a');
    this.time = this.time.replace(/ P/g, 'p');
    this.time = this.time.replace(/ M/g, 'm');
    // edge case that I sometimes mess up
    if ((/^\d:\d\d[ap]m/.test(this.time))) {
      this.time = '0' + this.time;
    }
    if(!(/^\d\d:\d\d[ap]m/.test(this.time))) {
      this.checkTime = false
      goodData = false;
    }

    // checking date
    this.date = this.date.replace(/\//g, '-');
    if(!(/^\d\d\d\d-\d\d-\d\d/.test(this.date))) {
      this.checkDate = false;
      goodData = false;
    }

    if (goodData) {
 // data is good. Push it to array;
    this.data.push({
      date: this.date,
      time: this.time,
      temp: this.temp,
      wind: this.wind,
    });
    console.log("Data after submit: ", this.data);
    this.form = false;
    } else {
      console.log ('Data did not submit');
    }

  };

  // --------------SORT functions-------------- //
  submitSort () {
    this.selectSort = true;
    if(this.sort === 'Date'){
      this.sortArrDate();
    } else if(this.sort === 'Temperature'){
      this.sortArrTemp();
    } else if(this.sort === 'Wind Speed'){
      this.sortArrWind();
    } else {
      this.selectSort = false;
    }
  }
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
