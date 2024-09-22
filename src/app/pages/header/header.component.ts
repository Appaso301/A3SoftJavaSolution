import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  badgevisible = false;
  showButton = false;
  notificationIcon: string | null = '';

  isDrawerOpen = false;

  constructor(private router: Router) {
    // Initialize notificationIcon from localStorage
    this.notificationIcon = localStorage.getItem('email');

    // Check if notificationIcon exists, and set showButton accordingly
    if (this.notificationIcon) {
      this.showButton = true;
    }
  }
  ngOnInit() {
    localStorage.removeItem('email');
  }
  isActive(route: string): boolean {
    return this.router.url === route;
  }

  badgevisibility() {
    this.badgevisible = true;
  }
}
