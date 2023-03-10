import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadsComponent } from './threads/threads.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateThreadComponent } from './create-thread/create-thread.component';

import { ClarityModule } from '@clr/angular'


@NgModule({
  imports: [CommonModule, HttpClientModule, ClarityModule],
  declarations: [ThreadsComponent, CreateThreadComponent],
  exports: [ThreadsComponent, CreateThreadComponent],
})
export class UiModule {}
