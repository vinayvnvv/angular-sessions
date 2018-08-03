import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { routes }  from './app.router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentItemsComponent } from './sent-items/sent-items.component';

import { CommonService } from './services/common.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InboxComponent,
    SentItemsComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
