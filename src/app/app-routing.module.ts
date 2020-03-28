import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargasHisComponent } from './componentes/cargas-his/cargas-his.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CargasSisComponent } from './componentes/cargas-sis/cargas-sis.component';


const routes: Routes = 
[
{path:"cargasHis/:punto",component:CargasHisComponent},
{path:"cargasSis/:punto",component:CargasSisComponent},
{path:"carga_his_1.jsp",component:InicioComponent},
{path:"principal_digitadores.jsp",component:InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
