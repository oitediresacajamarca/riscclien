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
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { PlantillaInicioComponent } from "./componentes/plantilla-inicio/plantilla-inicio.component";
import { ProfileComponent } from "./componentes/usuarios/profile/profile.component";
import { ListUsuariosComponent } from "./componentes/usuarios/list-usuarios/list-usuarios.component";
import { AuthGuard } from './guards/auth.guard';
import { ChangePasswordComponent } from './componentes/usuarios/change-password/change-password.component';
import { CreacionUsuariosGuard } from './guards/creacion-usuarios.guard';
import { CargasHisGuard } from './guards/cargas-his.guard';
import { CargasSisGuard } from './guards/cargas-sis.guard';
import { ReportesAmbitoGuard } from './guards/reportes-ambito.guard';
import { ReportesDiresaGuard } from './guards/reportes-diresa.guard';
import { SeguimientoCargasGuard } from './guards/seguimiento-cargas.guard';
import { ReporteCargasComponent } from './componentes/reporte-cargas/reporte-cargas.component';
import { VariableManualComponent } from "./controles/variable-manual/variable-manual.component";
import { RegistroVariablesManualesComponent } from "./registro/registro-variables-manuales/registro-variables-manuales.component";

const routes: Routes = [
  { path: "home", component: NavbarComponent },
  { path: "user/register", component: RegisterComponent, canActivate: [AuthGuard, CreacionUsuariosGuard] },
  { path: "user/login", component: LoginComponent },
  { path: "user/profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "user/inicio", component: PlantillaInicioComponent, canActivate: [AuthGuard] 
,children:[
  { path: "reporte_cargas", component: ReporteCargasComponent }
]},
  { path: "user/register/list-usuarios", component: ListUsuariosComponent, canActivate: [AuthGuard, CreacionUsuariosGuard] },
  { path: "user/changePassword", component: ChangePasswordComponent, canActivate: [AuthGuard] },
  { path: "user/cargasHis/:punto", component: CargasHisComponent, canActivate: [AuthGuard, CargasHisGuard] },
  { path: "user/cargasManuales", component: RegistroVariablesManualesComponent, canActivate: [AuthGuard, CargasHisGuard] },
  { path: "user/cargasSis/:punto", component: CargasSisComponent, canActivate: [AuthGuard, CargasSisGuard] },
  { path: "user/reportes_ambito", component: CargasSisComponent, canActivate: [AuthGuard, ReportesAmbitoGuard] },
  { path: "user/reportes_diresa", component: CargasSisComponent, canActivate: [AuthGuard, ReportesDiresaGuard] },
  { path: "user/seguimiento_cargas", component: CargasSisComponent, canActivate: [AuthGuard, SeguimientoCargasGuard] },
  { path: "carga_his_1.jsp", component: InicioComponent },
  { path: "principal_digitadores.jsp", component: InicioComponent },
  { path: "descargaCC", component: DescargasHisCCComponent },
  { path: "reporte-preliminar", component: ReportePreliminarComponent },
  { path: "reporte", component: PruebaComponent },
  { path: "reporte_cargas", component: ReporteCargasComponent },
  { path: "variable_manual", component:RegistroVariablesManualesComponent},
  { path: "**", redirectTo: "home" },










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
