import { Component } from '@angular/core';
import { from } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = false;
  data = [
    { day: 'Wednesday', time: '5:00pm', temp: '90', wind: '5' },
    { day: 'Tusday', time: '3:00pm', temp: '80', wind: '10' },
    { day: 'Monday', time: '1:00pm', temp: '95', wind: '3' },
    { day: 'Sunday', time: '10:00am', temp: '70', wind: '13' },
    { day: 'Friday', time: '9:00pm', temp: '80', wind: '20' },
];

}
