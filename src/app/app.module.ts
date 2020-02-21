import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { CargasHisComponent } from './componentes/cargas-his/cargas-his.component';
import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    CargasHisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    PanelModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
