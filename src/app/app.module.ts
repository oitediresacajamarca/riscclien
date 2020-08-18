import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MegaMenuModule } from "primeng/megamenu";
import { MenuPrincipalComponent } from "./menu-principal/menu-principal.component";
import { CargasHisComponent } from "./componentes/cargas-his/cargas-his.component";
import { PanelModule } from "primeng/panel";
import { FileUploadModule } from "primeng/fileupload";
import { HttpClientModule } from "@angular/common/http";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { CargasSisComponent } from "./componentes/cargas-sis/cargas-sis.component";
import { CalendarModule } from "primeng/calendar";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DialogModule } from "primeng/dialog";
import { TableModule } from "primeng/table";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from 'primeng/inputtext';
import { ScrollPanelModule } from "primeng/scrollpanel";
import { DescargasHisCCComponent } from "./componentes/descargas/descargas-his-cc/descargas-his-cc.component";
import { ReportePreliminarComponent } from "./reportes/reporte-preliminar/reporte-preliminar.component";
import { PruebaComponent } from "./reportes/prueba/prueba.component";
import { PlantillaInicioComponent } from "./componentes/plantilla-inicio/plantilla-inicio.component";
import { Page404Component } from "./componentes/Page404/page404.component";
import { LoginComponent } from "./componentes/usuarios/login/login.component";
import { RegisterComponent } from "./componentes/usuarios/register/register.component";
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { HeroComponent } from "./componentes/hero/hero.component";
import { ProfileComponent } from "./componentes/usuarios/profile/profile.component";
import { ListUsuariosComponent } from "./componentes/usuarios/list-usuarios/list-usuarios.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './componentes/footer/footer.component';
import { ChangePasswordComponent } from './componentes/usuarios/change-password/change-password.component';

// Servicios
import { AuthService } from "./servicios/auth.service";

// Externals
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickColorDirective } from './directivas/click-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    CargasHisComponent,
    InicioComponent,
    CargasSisComponent,
    DescargasHisCCComponent,
    ReportePreliminarComponent,
    PruebaComponent,
    PlantillaInicioComponent,
    Page404Component,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HeroComponent,
    ProfileComponent,
    ListUsuariosComponent,
    FooterComponent,
    ChangePasswordComponent,
    ClickColorDirective,
  ],
  imports: [
    TableModule,
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    ScrollPanelModule,
    PanelModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule,
    MessageModule,
    ToastModule,
    MessagesModule,
    ProgressSpinnerModule,
    ButtonModule,
    CalendarModule,
    FormsModule,
    CommonModule,
    DialogModule,
    DropdownModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    InputTextModule,
    MegaMenuModule,
    NgbModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
