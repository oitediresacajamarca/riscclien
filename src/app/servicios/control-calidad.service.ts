import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuracion } from '../configuracion/configuracion';

@Injectable({
  providedIn: 'root'
})
export class ControlCalidadService {

  conf:Configuracion;
  constructor(private http:HttpClient) {

this.conf=new Configuracion();

   }

   ejecutarcontrol(ano:string,mes:string){

    return this.http.get(this.conf.urlcontrolhis+'punto/'+localStorage.getItem('pun')+'/ano/'+ano+'/mes/'+mes)

   };
}
