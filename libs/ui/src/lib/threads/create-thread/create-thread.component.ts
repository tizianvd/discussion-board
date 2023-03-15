import { Component } from '@angular/core';
import { ThreadsService } from '../threads.service';
import { Thread } from '@prisma/client';

@Component({
  selector: 'discussion-board-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.scss'],
})
export class CreateThreadComponent {

  thread: Thread = {id: "0", title: "", content: "", createdAt: new Date, updatedAt: new Date};
  constructor(private threadService: ThreadsService) {

  }

  createPost(){
    this.threadService.createThread(this.thread).subscribe();
  }
}
