import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import InboxScreenComponent from './components/inbox-screen/inbox-screen.component';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        InboxScreenComponent,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
