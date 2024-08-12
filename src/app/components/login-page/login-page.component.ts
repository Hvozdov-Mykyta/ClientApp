import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { RequestsService } from '../../services/requests.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})

export class LoginPageComponent {
  constructor(private navigationService: NavigationService, private loginService: LoginService, private requestsService: RequestsService) {}

  username: string = "";
  password: string = "";

  onSubmit(): void {
    this.requestsService.login(this.username, this.password).subscribe(data => {
      this.loginService.login(data.isAdmin, Number(data.id));
      this.navigationService.goToHomePage();
    });
  }
}
