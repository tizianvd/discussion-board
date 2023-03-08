import { Component } from '@angular/core';
import { ThreadsService } from '../threads.service';
import { Thread } from '@prisma/client';

@Component({
  selector: 'discussion-board-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.scss'],
})
export class CreateThreadComponent {

  tmp: Thread = {id: "0", title: "Test", content: "bla"};
  constructor(private threadService: ThreadsService) {

  }

  createPost(){
    this.threadService.createThread(this.tmp);
  }
}
