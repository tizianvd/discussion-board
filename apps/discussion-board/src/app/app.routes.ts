import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThreadComponent, ThreadComponent, ThreadsComponent, LoginComponent } from '@discussion-board/ui';

export const routes: Routes = [
    { path: '', redirectTo: '/threads', pathMatch: 'full' },
    { path: 'threads', component: ThreadsComponent },
    { path: 'thread/:id', component: ThreadComponent },
    { path: 'create-thread', component: CreateThreadComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }