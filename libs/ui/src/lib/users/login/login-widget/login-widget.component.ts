import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { SessionService, UserSession } from '../../../session.service';

@Component({
  selector: 'discussion-board-login-widget',
  templateUrl: './login-widget.component.html',
  styleUrls: ['./login-widget.component.scss'],
})
export class LoginWidgetComponent implements OnInit {
  username = "test1";
  password = "test1";

  session!: UserSession | null;
  
  constructor(private readonly loginService: LoginService, private sessionService: SessionService) {

  }

  async login() {
    await this.loginService.login(this.username, this.password);
    window.location.reload();
  }

  logout() {
    this.loginService.logout();
    window.location.reload();
  }

  ngOnInit() {
    this.session = this.sessionService.getSession();
  }
}
