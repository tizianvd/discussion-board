import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { UiModule } from '@discussion-board/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ClarityModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
