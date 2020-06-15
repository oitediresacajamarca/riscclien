import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CargasHisComponent } from "./componentes/cargas-his/cargas-his.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { CargasSisComponent } from "./componentes/cargas-sis/cargas-sis.component";
import { DescargasHisCCComponent } from "./componentes/descargas/descargas-his-cc/descargas-his-cc.component";
import { ReportePreliminarComponent } from "./reportes/reporte-preliminar/reporte-preliminar.component";
import { PruebaComponent } from "./reportes/prueba/prueba.component";
import { RegisterComponent } from "./componentes/usuarios/register/register.component";
import { LoginComponent } from "./componentes/usuarios/login/login.component";
import { Page404Component } from "./componentes/Page404/page404.component";
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { PlantillaInicioComponent } from "./componentes/plantilla-inicio/plantilla-inicio.component";
import { ProfileComponent } from "./componentes/usuarios/profile/profile.component";

const routes: Routes = [
  { path: "home", component: NavbarComponent },
  { path: "user/register", component: RegisterComponent },
  { path: "user/login", component: LoginComponent },
  { path: "user/profile", component: ProfileComponent },
  { path: "user/inicio", component: PlantillaInicioComponent },
  { path: "cargasHis/:pun", component: CargasHisComponent },
  { path: "cargasSis/:punto", component: CargasSisComponent },
  { path: "carga_his_1.jsp", component: InicioComponent },
  { path: "principal_digitadores.jsp", component: InicioComponent },
  { path: "descargaCC", component: DescargasHisCCComponent },
  { path: "reporte-preliminar", component: ReportePreliminarComponent },
  { path: "reporte", component: PruebaComponent },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
