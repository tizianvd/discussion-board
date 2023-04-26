import { Component } from '@angular/core';
import { ThreadsService } from '../threads.service';
import { Thread } from '@prisma/client';
import { Location } from '@angular/common';

@Component({
  selector: 'discussion-board-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.scss'],
})
export class CreateThreadComponent {

  title = "";
  content = "";
  constructor(private threadService: ThreadsService,
              private _location: Location) {

  }

  createPost(){
    this.threadService.createThread(this.title, this.content).subscribe();
    this._location.back();
  }

  cancel() {
    this._location.back();
  }
}
