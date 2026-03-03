import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet, Event } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      this.router.events
        .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
        .subscribe(event => {
          const id = event.urlAfterRedirects.replace(/^\/+/, '');
          if (!id) return;

          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        });
    }
  }
}
