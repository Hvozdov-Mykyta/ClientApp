import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _isAuthorized: boolean = false;
  private _isAdmin: boolean = false;
  private _userId: number | null = null;

  constructor() {
    this.loadLoginInfo();
  }

  get isAuthorized(): boolean {
    return this._isAuthorized;
  }

  get isAdmin(): boolean {
    return this._isAdmin;
  }

  get userId(): number | null {
    return this._userId;
  }

  login(isAdmin: boolean, userId: number): void {
    this._isAuthorized = true;
    this._isAdmin = isAdmin;
    this._userId = userId;

    localStorage.setItem('isAuthorized', 'true');
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
    localStorage.setItem('userId', userId.toString());
  }

  logout(): void {
    this._isAuthorized = false;
    this._isAdmin = false;
    this._userId = null;

    localStorage.removeItem('isAuthorized');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('userId');
  }

  private loadLoginInfo(): void {
    const isAuthorized = localStorage.getItem('isAuthorized');
    const isAdmin = localStorage.getItem('isAdmin');
    const userId = localStorage.getItem('userId');

    if (isAuthorized === 'true' && isAdmin !== null && userId !== null) {
      this._isAuthorized = true;
      this._isAdmin = JSON.parse(isAdmin);
      this._userId = Number(userId);
    }
  }
}

