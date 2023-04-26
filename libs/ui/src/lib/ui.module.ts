import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ThreadsComponent } from './threads/threads/threads.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateThreadComponent } from './threads/create-thread/create-thread.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';

import { ClarityModule } from '@clr/angular';
import { ThreadComponent } from './threads/thread/thread.component';
import { CreateReplyComponent } from './threads/thread/create-reply/create-reply.component';
import { LoginComponent } from './users/login/login.component';
import { HeaderComponent } from './main/header/header.component';
import { CoreComponent } from './main/core/core.component';
import { LoginWidgetComponent } from './users/login/login-widget/login-widget.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    CardModule,
    MessageModule,
    ClarityModule,
  ],
  declarations: [
    ThreadsComponent,
    CreateThreadComponent,
    ThreadComponent,
    CreateReplyComponent,
    LoginComponent,
    HeaderComponent,
    CoreComponent,
    LoginWidgetComponent,
  ],
  exports: [
    ThreadsComponent,
    CreateThreadComponent,
    ThreadComponent,
    CreateReplyComponent,
    CoreComponent,
  ],
})
export class UiModule {}
