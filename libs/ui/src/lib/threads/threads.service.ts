import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thread, ThreadReply } from '@prisma/client';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { SessionService } from '../session.service';

@Injectable({
  providedIn: 'root',
})
export class ThreadsService {
  private API_URL = 'http://localhost:3333/api';
  private _threads: BehaviorSubject<Thread[]>;
  private _threadReplys: BehaviorSubject<ThreadReply[]>
  constructor(private readonly http: HttpClient, private readonly sessionService: SessionService) {
    this._threads = new BehaviorSubject<Thread[]>([]);
    this._threadReplys = new BehaviorSubject<ThreadReply[]>([]);
  }

  public getAllThreads(): Observable<Thread[]> {
    this._getAllThreads();
    return this._threads.asObservable();
  }

  public getThread(id: string): Observable<Thread> {
    return this.http.get<Thread>(`${this.API_URL}/thread/${id}`);
  }

  public createThread(title: string, content: string) {
    const session = this.sessionService.getSession();
    return this.http
      .post(`${this.API_URL}/thread`, {
        title: title,
        content: content,
        userid: session?.sub,
      })
      .pipe(tap(() => this._getAllThreads()));
  }

  private _getAllThreads(): void {
    this.http
      .get<Thread[]>(`${this.API_URL}/threads`)
      .subscribe((threads) => this._threads.next(threads));
  }

  public getAllThreadReplys(id: string): Observable<ThreadReply[]> {
    this._getAllThreadReplys(id);
    return this._threadReplys.asObservable();
  }

  public createThreadReply(threadId: string, content: string) {
    return this.http
      .post(`${this.API_URL}/reply`, {
        threadId: threadId,
        content: content,
      })
      .pipe(tap(() => this._getAllThreadReplys(threadId)));
  }

  private _getAllThreadReplys(id: string): void {
    this.http
      .get<ThreadReply[]>(`${this.API_URL}/replys/${id}`)
      .subscribe((replys) => this._threadReplys.next(replys));
  }
}
