import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { Url } from '../../models/url.model';

import { LoginService } from '../../services/login.service';
import { RequestsService } from '../../services/requests.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {
  originalUrl: string = "";
  urls: Url[] = [];
  
  constructor(private requestsService: RequestsService, private navigationService: NavigationService, public loginService: LoginService) {}

  addUrl(): void {
    if (this.loginService.userId) {
      this.requestsService.addUrl(this.loginService.userId, this.originalUrl).subscribe({
        next: (data) => {
            this.urls.push(data.body!);
            alert("Your shortened URL is: https://localhost:7192/short/" + data.body!.shortenedUrl);
        },
        error: (error) => {
          if (error.status === 409) {
            alert('Conflict: URL already exists.');
          }
        }
      });
    }
  }

  deleteUrl(shortenedById: number, linkId: string): void {
    if (shortenedById == this.loginService.userId || this.loginService.isAdmin) {
      this.requestsService.deleteUrl(Number(linkId)).subscribe({
        next: (data) => {
          if (data.status === 200) {
            const deletedLinkId = data.body?.id;
            if (deletedLinkId) {
              this.urls = this.urls.filter(item => item.id !== deletedLinkId);
            }
          }
        },
        error: (error) => {
          if (error.status === 404) {
            alert('Error: Link Not Found');
          }
        }
      });
    }
  }

  openInfoView(urlId: string): void {
    if(this.loginService.isAuthorized)
      this.navigationService.goToDetailedPage(Number(urlId));
  }

  ngOnInit(): void {
    this.requestsService.getUrls().subscribe((data) => {
      this.urls = data;
    });
  }
}
