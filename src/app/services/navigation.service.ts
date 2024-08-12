import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class NavigationService {
  constructor(private router: Router) {}

  goToHomePage(): void {
    this.router.navigate(['/home-page']);
  }

  goToLoginPage(): void {
    this.router.navigate(['/login-page']);
  }

  goToRazorPage(): void {
    this.router.navigate(['/razor-page']);
  }

  goToDetailedPage(urlId: number): void {
    this.router.navigate(['/detailed-page'], { queryParams: { urlId: urlId } });
  }
}