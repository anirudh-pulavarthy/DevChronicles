import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  timeGreeting: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setGreeting();
    this.observeCard();
  }

  setGreeting(): void {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.timeGreeting = 'Good morning!';
    } else if (hour < 18) {
      this.timeGreeting = 'Good afternoon!';
    } else {
      this.timeGreeting = 'Good evening!';
    }
  }

  observeCard(): void {
    const card = this.el.nativeElement.querySelector('.content-card');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(card, 'animate-in');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(card);
  }
}
