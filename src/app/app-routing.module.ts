import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargasHisComponent } from './componentes/cargas-his/cargas-his.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CargasSisComponent } from './componentes/cargas-sis/cargas-sis.component';
import { DescargasHisCCComponent } from './componentes/descargas/descargas-his-cc/descargas-his-cc.component';
import { ReportePreliminarComponent } from './reportes/reporte-preliminar/reporte-preliminar.component';
import { PruebaComponent } from './reportes/prueba/prueba.component';



const routes: Routes = 
  [
    {path:"cargasHis/:punto",component:CargasHisComponent},
    {path:"cargasSis/:punto",component:CargasSisComponent},
    {path:"carga_his_1.jsp",component:InicioComponent},
    {path:"principal_digitadores.jsp",component:InicioComponent},
    {path:"descargaCC",component:DescargasHisCCComponent},
    {path:'reporte-preliminar',component:ReportePreliminarComponent},
    {path:'reporte',component:PruebaComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
