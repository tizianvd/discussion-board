import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Thread, ThreadReply } from '@prisma/client';
import { firstValueFrom, Observable } from 'rxjs';
import { ThreadsService } from '../threads.service';

@Component({
  selector: 'discussion-board-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
})
export class ThreadComponent implements OnInit {
  $thread?: Thread;
  $replys?: Observable<ThreadReply[]>;
  constructor(
    private route: ActivatedRoute,
    private threadService: ThreadsService
  ) {}

  protected async getThread() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.$thread = await firstValueFrom(this.threadService.getThread(id));
      this.$replys = this.threadService.getAllThreadReplys(this.$thread.id);
    }
  }

  ngOnInit(): void {
    this.getThread();
  }
}
