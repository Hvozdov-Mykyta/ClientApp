import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Url } from '../models/url.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class RequestsService {
  baseApiUrl = "https://localhost:7192/";

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('observe', 'response');

    return this.http.post<User>(this.baseApiUrl + "login", { }, { params });
  }

  getUrls(): Observable<Url[]> {
    return this.http.get<Url[]>(this.baseApiUrl + "get_urls");
  }

  getUrl(urlId: number): Observable<Url> {
    const params = new HttpParams()
      .set('urlId', urlId);

    return this.http.get<Url>(this.baseApiUrl + "get_url", { params });
  }

  addUrl(userId: number, originalUrl: string): Observable<HttpResponse<Url>> {
    const params = new HttpParams()
      .set('originalUrl', originalUrl)
      .set('userId', userId);

    return this.http.post<Url>(this.baseApiUrl + "add_url", { }, { params, observe: 'response' });
  }

  deleteUrl(linkId: number): Observable<HttpResponse<Url>> {
    const params = new HttpParams()
      .set('linkId', String(linkId));

    return this.http.delete<Url>(this.baseApiUrl + "delete_url", { params, observe: 'response' });
  }
}
