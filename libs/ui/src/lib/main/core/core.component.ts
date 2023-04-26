import { Component, OnInit } from '@angular/core';
import { SessionService, UserSession } from '../../session.service';

@Component({
  selector: 'discussion-board-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {

  session!: UserSession | null;
  constructor(private readonly sessionService: SessionService) {

  }

  ngOnInit(): void {
      this.session = this.sessionService.getSession();
  }
}
