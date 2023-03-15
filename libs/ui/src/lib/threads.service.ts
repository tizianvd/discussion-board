import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thread } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {
  private API_URL = 'http://localhost:3333/api';
  constructor(private readonly http: HttpClient) { }

  public getThreads(): Observable<Thread[]> {
    return this.http.get<Thread[]>(`${this.API_URL}/threads`);
  }

  public createThread(thread: Thread): void {
    console.log(thread)
    this.http.post(`${this.API_URL}/threads`, {thread: thread}).subscribe();
  }
}
