import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import axios from 'axios';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardsComponent } from './cards/cards.component';
import { BarColorsComponent } from './bar-colors/bar-colors.component';
import { InformationComponent } from './information/information.component';
import { BarnavComponent } from './barnav/barnav.component';
import { GraphicComponent } from './graphic/graphic.component';

import { LoginComponent } from './components/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    SidebarComponent,
    CardsComponent,
    BarColorsComponent,
    InformationComponent,
    BarnavComponent,
    LoginComponent,
    GraphicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
