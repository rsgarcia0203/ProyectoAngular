import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardsComponent } from './cards/cards.component';
import { BarColorsComponent } from './bar-colors/bar-colors.component';
import { InformationComponent } from './information/information.component';
import { BarnavComponent } from './barnav/barnav.component';
import { LoginComponent } from './login/login.component';
import { GraphicComponent } from './graphic/graphic.component';

@NgModule({
  declarations: [
    AppComponent,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
