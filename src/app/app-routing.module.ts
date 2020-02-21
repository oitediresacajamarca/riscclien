import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargasHisComponent } from './componentes/cargas-his/cargas-his.component';


const routes: Routes = [{path:"cargasHis",component:CargasHisComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
