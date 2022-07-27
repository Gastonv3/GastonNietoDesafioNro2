import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContenidoComponent } from './components/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    ToolbarComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
