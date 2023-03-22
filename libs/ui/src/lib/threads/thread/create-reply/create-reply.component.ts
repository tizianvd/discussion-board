import { Component, Input } from '@angular/core';
import { ThreadsService } from '../../threads.service';


@Component({
  selector: 'discussion-board-create-reply',
  templateUrl: './create-reply.component.html',
  styleUrls: ['./create-reply.component.scss'],
})
export class CreateReplyComponent {
  @Input() threadId = "";
  content = "";
  constructor(private threadService: ThreadsService) {}
  public createReply(){
    this.threadService.createThreadReply(this.threadId, this.content).subscribe();

  }
}
