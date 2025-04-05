import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  timeGreeting: string = '';

  ngOnInit(): void {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      this.timeGreeting = 'Good morning!';
    } else if (hour >= 12 && hour < 17) {
      this.timeGreeting = 'Good afternoon!';
    } else if (hour >= 17 && hour < 21) {
      this.timeGreeting = 'Good evening!';
    } else {
      this.timeGreeting = 'Burning the midnight oil!';
    }
  }
}
