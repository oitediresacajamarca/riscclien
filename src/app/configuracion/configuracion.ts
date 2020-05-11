import { environment } from '../../environments/environment';

export class Configuracion {
 //  url:string="http://172.18.20.26:8088/";
//url:string="http://172.18.21.63:8088/";
//ip:string="localhost";
ip:string="dwh.diresacajamarca.gob.pe";
//ip:string=environment.ip;

urlsimple:string="http://"+this.ip+":8089/"
url:string="http://"+this.ip+":8089/cargashis/"
urlsis:string="http://"+this.ip+":8089/cargassis/"
urlcontrolhis:string="http://"+this.ip+":8089/controlcalidadhis/"
urlgenerarexcelcc:string="http://"+this.ip+":8089/controlhis/"
//url:string="http://dwh.diresacajamarca.gob.pe:8089/";
}
