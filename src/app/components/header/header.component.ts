import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  isDark = false;
  isMenuOpen = false; // to track the Hamburger menu state

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isMenuOpen = false;
      document.body.style.overflow = ''; 
    });
  }

  toggleDarkMode(): void {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-mode', this.isDark);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  ngOnInit() {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 10;
      document.body.classList.toggle('scrolled', scrolled);
    });
  }
  

}
