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
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CargasSisComponent } from './componentes/cargas-sis/cargas-sis.component';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './componentes/usuarios/register/register.component';
import { ProfileComponent } from './componentes/usuarios/profile/profile.component';
import { LoginComponent} from './componentes/usuarios/login/login.component';

import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';

import {ScrollPanelModule} from 'primeng/scrollpanel';
import { DescargasHisCCComponent } from './componentes/descargas/descargas-his-cc/descargas-his-cc.component';
import { ReportePreliminarComponent } from './reportes/reporte-preliminar/reporte-preliminar.component';
import { PruebaComponent } from './reportes/prueba/prueba.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    CargasHisComponent,
    InicioComponent,
    CargasSisComponent,
<<<<<<< HEAD
    LoginComponent,
    RegisterComponent,
    ProfileComponent
=======
    DescargasHisCCComponent,
    ReportePreliminarComponent,
    PruebaComponent
    
>>>>>>> f4ed00a5cbe24bf5dcc7f6a8bb2595f3cf24c584
  ],
  imports: [
    TableModule,
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    PanelModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule,
    MessageModule,
    ToastModule,
    MessagesModule,
    ProgressSpinnerModule,
    ButtonModule,
    CalendarModule,FormsModule,
    DialogModule,
    ScrollPanelModule,
    DropdownModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
