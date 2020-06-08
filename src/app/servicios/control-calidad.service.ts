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

    return this.http.get(this.conf.urlsimple+'controlcalidadhis/punto/'+localStorage.getItem('pun')+'/ano/'+ano+'/mes/'+mes+'/nivel/4');
    //this.http.get(this.conf.urlgenerarexcelcc+'punto/'+localStorage.getItem('pun')+'/ano/'+ano+'/mes/'+mes);

   };
   leercontrol(ano:string,mes:string){

    return this.http.get<any>(this.conf.urlsimple+'leercontrol/'+'punto/'+localStorage.getItem('pun')+'/ano/'+ano+'/mes/'+mes)
   }
   ejecutarcontrol2(){
    return this.http.get<any>(this.conf.urlsimple+'controlcalidadhis/leercontrol2/'+localStorage.getItem('pun'));
   }
   descargarReporteCon2(){
     return this.http.get(this.conf.urlsimple+'download/file/'+localStorage.getItem('pun')+'/reporte2cc.xlsx',{responseType: 'arraybuffer'})
;
   }
   descargarReporteCC(cod_ambito:string){

   }


}
