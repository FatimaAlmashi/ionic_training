import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from '../providers/Appservices';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { HTTP } from '@ionic-native/http/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    AppService,
    HttpClient, 
    HttpParams,
    // HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
