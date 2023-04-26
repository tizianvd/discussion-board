import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

export interface UserSession {
  login: string;
  sub: number;
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  saveSession(token: string) {
    localStorage.setItem("accessToken", token);
  }

  clearSession() {
    localStorage.removeItem("accessToken")
  }

  getSession(): UserSession | null {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const session = jwt_decode<UserSession>(accessToken);
      return session.exp * 1000 > Date.now() ? session : null;
    } else {
      return null;
    }
  }
}
