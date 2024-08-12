import { Component } from '@angular/core';
import { Url } from '../../models/url.model';
import { ActivatedRoute, Router } from '@angular/router'
import { CommonModule } from '@angular/common';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-detailed-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detailed-page.component.html',
  styleUrl: './detailed-page.component.scss'
})

export class DetailedPageComponent {
  urlId: number | null = null;
  url: Url | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private requestsService: RequestsService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.urlId = params['urlId'];
      this.requestsService.getUrl(Number(this.urlId!)).subscribe(data => {
        this.url = data;
      });
    });
  }
}