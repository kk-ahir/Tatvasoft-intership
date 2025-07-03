import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-greeting',
  standalone: true,
  imports: [],
  templateUrl: './time-greeting.component.html',
  styleUrls: ['./time-greeting.component.css']
})
export class TimeGreetingComponent implements OnInit {
  currentTime: string = '';
  greeting: string = '';

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();

    const hour = now.getHours();
    if (hour < 12) {
      this.greeting = 'Good Morning';
    } else if (hour < 18) {
      this.greeting = 'Good Afternoon';
    } else {
      this.greeting = 'Good Evening';
    }
  }
}
