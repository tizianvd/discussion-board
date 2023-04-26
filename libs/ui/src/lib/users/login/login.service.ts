import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map, tap } from 'rxjs';
import { environment } from 'environment';
import { SessionService } from '../../session.service';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {}

  async login(login: string, password: string) {
    const accessToken = await firstValueFrom(
      this.http.post(`${environment.apiUrl}auth/login`, {
        username: login,
        password: password,
      }).pipe(map((data: any) => data.accessToken))
    );

    this.sessionService.saveSession(accessToken);
  }

  logout() {
    this.sessionService.clearSession()
  }
}
