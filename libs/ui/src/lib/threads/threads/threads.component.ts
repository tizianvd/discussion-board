import { Component ,OnInit } from '@angular/core';
import { ThreadsService } from '../threads.service';
import { Observable, map } from 'rxjs';
import { Thread } from '@prisma/client';

@Component({
  selector: 'discussion-board-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss'],
})
export class ThreadsComponent implements OnInit {
  public $threads?: Observable<Thread[]>;
  constructor(public threadService: ThreadsService) {}

  ngOnInit(): void {
    this.$threads = this.threadService.getAllThreads().pipe(
      map((data) => data = data.reverse())
    )
  }
}
