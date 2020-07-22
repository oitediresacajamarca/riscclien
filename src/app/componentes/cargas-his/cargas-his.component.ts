import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Configuracion } from 'src/app/configuracion/configuracion';



import { MessageService } from 'primeng/api';
import { __importDefault } from 'tslib';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';
import { ControlCalidadService } from 'src/app/servicios/control-calidad.service';
import { FileUpload } from 'primeng/fileupload/fileupload';
import { Button } from 'primeng/button/button';
import { ColumnasccService } from 'src/app/servicios/columnascc.service';
import { error } from 'util';

@Component({
  selector: 'app-cargas-his',
  templateUrl: './cargas-his.component.html',
  styleUrls: ['./cargas-his.component.css'],
  providers: [MessageService]
})
export class CargasHisComponent implements OnInit {

  urlPac: string;
  urlReg: string;
  urlPer: string;
  urlRep: string;
  @Input()
  punto: string = '192';
  @Input()
  ano: string = '2020';
  @Input()
  mes: string = '02';

  carmpa: boolean = false;
  carmpe: boolean = false;
  carmre: boolean = false;
  carmrp: boolean = false;
  muestraControl: boolean = false;
  periodoselec: Date = new Date();

  @ViewChild('mpa') mpa: FileUpload;
  @ViewChild('mpe') mpe: FileUpload;
  @ViewChild('mre') mre: FileUpload;
  @ViewChild('mrp') mrp: FileUpload;
  @ViewChild('bc') bc: Button;
  @ViewChild('br') br: Button;
  @ViewChild('bicc') bicc: Button;
  @ViewChild('bee') bee: Button;


  cols: any[];
  registroscc: any[];
  verespinner: boolean = false;
  biccdisabled: boolean = false;
  muestraconfirmacion: boolean = false;



  headers: Headers;
  registrosPc: string = '0';
  registrosRc: string = '0';
  registrosRep: string = '0';
  registrosPerc: string = '0';

  config: Configuracion = new Configuracion();

  constructor(private mensajes: MessageService, private rout: ActivatedRoute, private controlhis: ControlCalidadService, private colmnas: ColumnasccService) { }

  ngOnInit() { }
  /**
   * selecionarArchivo
   */
  public seleccionarArchivo() {
    this.punto = localStorage.getItem("ID_PUNTO");
    this.urlPac = this.config.url + 'paciente/punto/' + this.punto + '/ano/' + this.ano + '/mes/' + this.mes;
    this.urlPer = this.config.url + 'personal/punto/' + this.punto + '/ano/' + this.ano + '/mes/' + this.mes;
    this.urlReg = this.config.url + 'registrador/punto/' + this.punto + '/ano/' + this.ano + '/mes/' + this.mes;
    this.urlRep = this.config.url + 'reporteplano/punto/' + this.punto + '/ano/' + this.ano + '/mes/' + this.mes;
    this.headers = new Headers();
    this.headers.append('Accept', '*/*');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');



  }

  cargoPaciente(event) {

    this.registrosPc = event.originalEvent.body.root.respuesta.cantidad_registros;
    this.mensajes.add({ severity: 'success', summary: 'Carga Exitosa', detail: 'Se cargaron exitosamente ' + this.registrosPc + ' registros' })
    this.mensajes.add({ key: 'mensajeMaestroPaciente', severity: 'success', summary: 'Carga Exitosa', detail: 'Se cargaron exitosamente ' + this.registrosPc + ' registros' })
    this.mpa.disabled = true;
    this.carmpa = true;
    if (this.carmpa && this.carmre && this.carmrp && this.carmpe) {

      this.bc.disabled = false;
    }

  }

  cargoRegistrador(event) {

    this.registrosRc = event.originalEvent.body.root.respuesta.cantidad_registros;

    this.mensajes.add({ severity: 'success', summary: 'Carga Exitosa', detail: 'Se cargaron exitosamente ' + this.registrosRc + ' registros' });
    this.mensajes.add({ key: 'mensajeMaestroRegistrador', severity: 'success', summary: 'Carga Exitosa', detail: 'Se cargaron exitosamente ' + this.registrosRc + ' registros' })
    this.mre.disabled = true;
    this.carmre = true;
    if (this.carmpa && this.carmre && this.carmrp && this.carmpe) {
      this.bc.disabled = false;

    }
  }
  cargoReporte(event) {

    this.registrosRep = event.originalEvent.body.root.respuesta.cantidad_registros;

    this.mensajes.add({ severity: 'success', summary: 'Carga Exitosa', detail: 'Se cargaron exitosamente ' + this.registrosRep + ' registros' });
    this.mensajes.add({ key: 'mensajeMaestroRpt', severity: 'success', summary: 'Carga Exitosa', detail: 'Se cargaron exitosamente ' + this.registrosRep + ' registros' })
    this.mrp.disabled = true;
    this.carmrp = true;
    if (this.carmpa && this.carmre && this.carmrp && this.carmpe) {

      this.bc.disabled = false;
    }
  }

  cargoPersonal(event) {

    this.registrosPerc = event.originalEvent.body.root.respuesta.cantidad_registros;

    this.mensajes.add({ severity: 'success', summary: 'Carga Exitosa', detail: 'Se cargaron exitosamente ' + this.registrosPerc + ' registros' });
    this.mensajes.add({ key: 'mensajeMaestroPersonal', severity: 'success', summary: 'Carga Exitosa', detail: 'Se cargaron exitosamente ' + this.registrosPerc + ' registros' })
    this.mpe.disabled = true;
    this.carmpe = true;
    if (this.carmpa && this.carmre && this.carmrp && this.carmpe) {

      this.bc.disabled = false;
    }
  }

  llamar_control_his() {

    this.muestraControl = true;
    //this.controlhis.ejecutarcontrol(this.ano,this.mes).subscribe((datos)=>{console.log(datos)});
    this.colmnas.devolvercolumnas().subscribe((datos) => {
      console.log(datos);
      this.cols = datos.cols;
    });

    //  this.controlhis.ejecutarcontrol(this.ano,this.mes);


  }
  llamar_control_his2() {
    this.controlhis.ejecutarcontrol2().subscribe((datos) => {
      console.log(datos.respuesta);
      this.controlhis.descargarReporteCon2().subscribe((datos2) => {


        import("file-saver").then(FileSaver => {
          let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;';
          let EXCEL_EXTENSION = '.xlsx';
          const data: Blob = new Blob([datos2], {
            type: EXCEL_TYPE
          });
          FileSaver.saveAs(data, 'reporte2cc.xlsx');
        });



      });

    });
  }



  envioPaciente() {

  }

  iniciarcontrol() {
    this.registroscc = [];
    this.verespinner = true;
    this.biccdisabled = true;

    this.controlhis.ejecutarcontrol(this.ano, this.mes).subscribe((datos) => {
      console.log(datos);

      this.controlhis.leercontrol(this.ano, this.mes).subscribe((datos) => {
        console.log(datos.respuesta);
        this.registroscc = datos.respuesta;
        this.verespinner = false;
        this.biccdisabled = true;
        this.bee.disabled = false;
        this.muestraconfirmacion = true;

      }, (error) => {


        this.verespinner = false;
        this.biccdisabled = false;
        this.bee.disabled = false;


      }


      );

    }, (error) => {
      this.verespinner = false;
      this.biccdisabled = false;
      this.bee.disabled = false;
    });



  }

  exportExcel() {
    this.bee.disabled = true;
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.registroscc);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "REPORTE_CONTROL_CALIDAD");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });

  }
  mesCambia(event) {
    this.mes = (this.periodoselec.getMonth() + 1).toString();
    this.ano = (this.periodoselec.getFullYear()).toString();
  }


}