import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet, Event } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { filter } from 'rxjs/operators';
import { ContactsComponent } from "./contacts/contacts.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterOutlet, ContactsComponent, ProjectsComponent, SkillsComponent, AboutComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit() {
  if (isPlatformBrowser(this.platformId)) {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = entry.target.id;
          const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
          if (navLink) {
            if (entry.isIntersecting) {
              navLink.classList.add('active');
            } else {
              navLink.classList.remove('active');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => observer.observe(section));
  }
}
}
