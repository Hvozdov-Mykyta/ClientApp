import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

import { LoginService } from './services/login.service';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'ClientApp';

  constructor(public navigationService: NavigationService, public loginService: LoginService) { }

  goToLogin(): void {
    this.navigationService.goToLoginPage();
  }
}
