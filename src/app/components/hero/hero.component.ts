import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  roles = ['Developer', 'Speed Cuber', 'Researcher'];
  currentRoleIndex = 0;
  currentRole = this.roles[0];

  constructor() {
    setInterval(() => {
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      this.currentRole = this.roles[this.currentRoleIndex];
    }, 1250); // Change every 1.75 seconds
  }
}
