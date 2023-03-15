import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thread } from '@prisma/client';
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThreadsService {
  private API_URL = 'http://localhost:3333/api';
  private _threads: BehaviorSubject<Thread[]>;
  constructor(private readonly http: HttpClient) {
    this._threads = new BehaviorSubject<Thread[]>([]);
  }

  getAllThreads(): Observable<Thread[]> {
    this._getAllThreads();
    return this._threads.asObservable();
  }

  public createThread(thread: Thread) {
    return this.http
      .post(`${this.API_URL}/thread`, {
        title: thread.title,
        content: thread.content,
      })
      .pipe(tap(() => this._getAllThreads()));
  }

  private _getAllThreads(): void {
    this.http
      .get<Thread[]>(`${this.API_URL}/threads`)
      .subscribe((threads) => this._threads.next(threads));
  }
}
