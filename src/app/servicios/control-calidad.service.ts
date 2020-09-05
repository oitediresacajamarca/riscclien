import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuracion } from '../configuracion/configuracion';

@Injectable({
  providedIn: 'root'
})
export class ControlCalidadService {

  conf: Configuracion;
  punto: string = '';

  constructor(private http: HttpClient) {

    this.conf = new Configuracion();

  }

  ejecutarcontrol(ano: string, mes: string) {
    this.punto = localStorage.getItem("ID_PUNTO");
    return this.http.get(this.conf.urlsimple + 'controlcalidadhis/punto/' + this.punto + '/ano/' + ano + '/mes/' + mes + '/nivel/4');
    //this.http.get(this.conf.urlgenerarexcelcc+'punto/'+localStorage.getItem('pun')+'/ano/'+ano+'/mes/'+mes);

  };
  leercontrol(ano: string, mes: string) {
    this.punto = localStorage.getItem("ID_PUNTO");
    return this.http.get<any>(this.conf.urlsimple + 'leercontrol/' + 'punto/' + this.punto + '/ano/' + ano + '/mes/' + mes)
  }
  ejecutarcontrol2() {
    this.punto = localStorage.getItem("ID_PUNTO");
    return this.http.get<any>(this.conf.urlsimple + 'controlcalidadhis/leercontrol2/' + this.punto);
  }
  descargarReporteCon2() {
    this.punto = localStorage.getItem("ID_PUNTO");
    return this.http.get(this.conf.urlsimple + 'download/file/' + this.punto + '/reporte2cc.xlsx', { responseType: 'arraybuffer' })
      ;
  }
  descargarReporteCC(cod_ambito: string) {

  }


}
