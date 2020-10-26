import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomComponent } from './random/random.component';
import {FormsModule} from '@angular/forms';
import { NgxCopyToClipboardModule } from 'ngx-copy-to-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxCopyToClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
