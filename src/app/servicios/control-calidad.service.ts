import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuracion } from '../configuracion/configuracion';
import { AuthService } from "src/app/servicios/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ControlCalidadService {

  conf: Configuracion;
  punto: string = '';
  aux = this.authService.getCurrentUser();

  constructor(private http: HttpClient, public authService: AuthService) {

    this.conf = new Configuracion();
    this.authService.getIdPunto(this.aux.descripcion_ambito).subscribe(datos => {
      this.punto = JSON.parse(datos[0].ID_PUNTO_DIG_HIS);
    });

  }

  ejecutarcontrol(ano: string, mes: string) {

    return this.http.get(this.conf.urlsimple + 'controlcalidadhis/punto/' + this.punto + '/ano/' + ano + '/mes/' + mes + '/nivel/4');
    //this.http.get(this.conf.urlgenerarexcelcc+'punto/'+localStorage.getItem('pun')+'/ano/'+ano+'/mes/'+mes);

  };
  leercontrol(ano: string, mes: string) {

    return this.http.get<any>(this.conf.urlsimple + 'leercontrol/' + 'punto/' + this.punto + '/ano/' + ano + '/mes/' + mes)
  }
  ejecutarcontrol2() {
    return this.http.get<any>(this.conf.urlsimple + 'controlcalidadhis/leercontrol2/' + this.punto);
  }
  descargarReporteCon2() {
    return this.http.get(this.conf.urlsimple + 'download/file/' + this.punto + '/reporte2cc.xlsx', { responseType: 'arraybuffer' })
      ;
  }
  descargarReporteCC(cod_ambito: string) {

  }


}
