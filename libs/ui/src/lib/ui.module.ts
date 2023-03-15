import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ThreadsComponent } from './threads/threads/threads.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateThreadComponent } from './threads/create-thread/create-thread.component';

import { ClarityModule } from '@clr/angular';
import { ThreadComponent } from './threads/thread/thread.component';
import { CreateReplyComponent } from './threads/thread/create-reply/create-reply.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ClarityModule,
  ],
  declarations: [
    ThreadsComponent,
    CreateThreadComponent,
    ThreadComponent,
    CreateReplyComponent,
  ],
  exports: [
    ThreadsComponent,
    CreateThreadComponent,
    ThreadComponent,
    CreateReplyComponent,
  ],
})
export class UiModule {}
