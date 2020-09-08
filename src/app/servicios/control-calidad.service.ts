import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuracion } from '../configuracion/configuracion';

@Injectable({
  providedIn: 'root'
})
export class ControlCalidadService {

  conf: Configuracion;
<<<<<<< HEAD
=======
  punto: string = '';
>>>>>>> 1cb1d585180fec274aa1e6fc88e5540717c6b763

  constructor(private http: HttpClient) {

    this.conf = new Configuracion();

  }

  ejecutarcontrol(ano: string, mes: string) {
<<<<<<< HEAD

    return this.http.get(this.conf.urlsimple + 'controlcalidadhis/punto/' + localStorage.getItem("ID_PUNTO") + '/ano/' + ano + '/mes/' + mes + '/nivel/4');
=======
    this.punto = localStorage.getItem("ID_PUNTO");
    return this.http.get(this.conf.urlsimple + 'controlcalidadhis/punto/' + this.punto + '/ano/' + ano + '/mes/' + mes + '/nivel/4');
>>>>>>> 1cb1d585180fec274aa1e6fc88e5540717c6b763
    //this.http.get(this.conf.urlgenerarexcelcc+'punto/'+localStorage.getItem('pun')+'/ano/'+ano+'/mes/'+mes);

  };
  leercontrol(ano: string, mes: string) {
<<<<<<< HEAD

    return this.http.get<any>(this.conf.urlsimple + 'leercontrol/' + 'punto/' + localStorage.getItem("ID_PUNTO") + '/ano/' + ano + '/mes/' + mes)
  }
  ejecutarcontrol2() {
    return this.http.get<any>(this.conf.urlsimple + 'controlcalidadhis/leercontrol2/' + localStorage.getItem("ID_PUNTO"));
  }
  descargarReporteCon2() {
    return this.http.get(this.conf.urlsimple + 'download/file/' + localStorage.getItem("ID_PUNTO") + '/reporte2cc.xlsx', { responseType: 'arraybuffer' })
=======
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
>>>>>>> 1cb1d585180fec274aa1e6fc88e5540717c6b763
      ;
  }
  descargarReporteCC(cod_ambito: string) {

  }


}
