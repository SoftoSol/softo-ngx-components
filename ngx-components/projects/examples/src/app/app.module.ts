import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SoftoNgxComponentsModule } from 'projects/softo-ngx-components/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SoftoNgxComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
