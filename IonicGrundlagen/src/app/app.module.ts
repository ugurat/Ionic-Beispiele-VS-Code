import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


// EINTRAGEN - Importiere Components
import { MsgComponent } from './msg/msg.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    AppComponent,

    MsgComponent,  // EINTRAGEN - Deklariere MsgComponent hier
    InfoComponent,  // EINTRAGEN - Deklariere InfoComponent hier
        
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
