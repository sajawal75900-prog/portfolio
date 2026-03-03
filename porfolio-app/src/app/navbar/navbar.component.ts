import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar?.classList.add('glass-nav', 'py-4');
      navbar?.classList.remove('py-8');
    } else {
      navbar?.classList.remove('glass-nav', 'py-4');
      navbar?.classList.add('py-8');
    }
  }
}
