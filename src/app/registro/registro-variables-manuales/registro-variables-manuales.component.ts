import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng';
import { EstadosService } from 'src/app/servicios/estados.service';
import { PuntoDigitacionService } from 'src/app/servicios/punto-digitacion.service';
import { VariableManualService } from 'src/app/servicios/variable-manual.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-registro-variables-manuales',
  templateUrl: './registro-variables-manuales.component.html',
  styleUrls: ['./registro-variables-manuales.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class RegistroVariablesManualesComponent implements OnInit {

  establecimientos: SelectItem[] = [{ label: 'seleccionar', value: 'Seleccione Ipress' }]
  establecimiento: SelectItem


 

  constructor(private form: FormBuilder, private variabless: VariableManualService, private estados: EstadosService
    , private puntoDigitacions: PuntoDigitacionService,private CONFITRMACION:ConfirmationService,private mensaje:MessageService ) { }
   
    confirm1() {

      console.log('mensaje')
      this.CONFITRMACION.confirm({
          message: 'Regitrar Variables?',
          header: 'Confirmacion',
          acceptLabel:'aceptar',
          rejectLabel:'cancelar',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {

         //   this.variabless.GuardarVariable(this.FormularioVariables.value).subscribe((respuesta)=>{console.log(respuesta)})
              this.mensaje.add({severity:'info', summary:'Confirmed', detail:'VARIABLES GUARDADAS EXITOSAMENTE'});
              
          },
          reject: () => {
              this.mensaje.add({severity:'info', summary:'Rejected', detail:'You have rejected'});
          }
      });}
  

         
    confirm2() {

      console.log('mensaje')
      this.CONFITRMACION.confirm({
          message: 'Guardar?',
          header: 'Confirmacion',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {

          //  this.variabless.GuardarVariable(this.FormularioVariables2.value).subscribe((respuesta)=>{console.log(respuesta)})
              this.mensaje.add({severity:'info', summary:'Confirmed', detail:'VARIABLES GUARDADAS EXITOSAMENTE'});
              
          },
          reject: () => {
              this.mensaje.add({severity:'info', summary:'Rejected', detail:'You have rejected'});
          }
      });}
  
  
  
    variables = {

    var6000: '',
    var6001: '',
    var6002: '',
    var6003: '',
    var6004: '',
    var6005: '',


    var6006: '',
    var6007: '',
    var6008: '',
    var6009: '',
    var6010: '',
    var6011: '',

    var6012: '',
    var6013: '',
    var6014: '',
    var6015: '',

    
    

    var6016: '',
    var6017: '',
    var6018: '',
    var6019: '',
    var6020: '',


    var6021: '',
    var6022: '',


    
  



    var6023: '',
    var6024: '',
    var6025: '',
    var6026: '',
    var6027: '',

    var6028: '',
    var6029: '',
    var6030: '',
    var6031: '',
    var6032: '',

    var6033: '',
    var6034: '',
    var6035: '',
    var6036: '',
    var6037: '',


    var6038: '',
    var6039: '',
    var6040: '',
    var6041: '',
    var6042: '',
    var6043: '',

    var6044: '',
    var6045: '',
    var6046: '',
    var6047: '',
    var6048: '',
    var6049: '',


    var6050: '',
    var6051: '',
    var6052: '',
    var6053: '',
    var6054: '',
    var6055: '',


    var6056: '',
    var6057: '',
    var6058: '',
    var6059: '',
    var6060: '',
    var6061: '',


    var6062: '',
    var6063: '',
    var6064: '',
    var6065: '',
    var6066: '',
    var6067: '',


    var6068: '',
    var6069: '',
    var6070: '',
    var6071: '',
    var6072: '',
    var6073: '',


    var6074: '',
    var6075: ''}

    
     VARIABLES2={


    var5000: '',
    var5004: '',
    var5008: '',
    var5012: '',
    var5016: '',
    var5024: '',
    var5028: '',

    var5001: '',
    var5005: '',
    var5009: '',
    var5013: '',
    var5017: '',
    var5025: '',
    var5029: '',

    var5002: '',
    var5006: '',
    var5010: '',
    var5014: '',
    var5018: '',
    var5026: '',
    var5030: '',

    var5003: '',
    var5007: '',
    var5011: '',
    var5015: '',
    var5019: '',
    var5027: '',
    var5031: '',

    var5032: '',
    var5033: '',
    var5034: '',
    var5035: '',

    var5036: '',
    var5037: '',
    var5038: '',
    var5039: '',


    var5040: '',
    var5041: '',
    var5042: '',
    var5043: '',

    var5044: '',
    var5045: '',
    var5046: '',
    var5047: '',

    var5048: '',
    var5049: '',
    var5050: '',
    var5051: '',

    var5052: '',
    var5053: '',
    var5054: '',
    var5055: '',




    var5056: '',
    var5057: '',
    var5058: '',
    var5059: '',
    var5060: '',
    var5061: '',
    var5062: '',
    var5063: '',
    var5064: '',

    var5065: '',
    var5066: '',
    var5067: '',
    var5068: '',
    var5069: '',
    var5070: '',
    var5071: '',
    var5072: '',
    var5142: '',







    var5088: '',

    var5092: '',

    var5096: '',


    var5089: '',

    var5093: '',

    var5097: '',


    var5090: '',

    var5094: '',

    var5098: '',



    var5091: '',

    var5095: '',

    var5099: '',




    var5100: '',

    var5103: '',

    var5106: '',

    var5109: '',


    
    var5101: '',

    var5104: '',

    var5107: '',

    var5110: '',

    
    var5102: '',

    var5105: '',

    var5108: '',

    var5111: '',





    var5112: '',
    var5113: '',
    var5114: '',
    var5115: '',
    var5116: '',
    var5117: '',
    var5118: '',
    var5119: '',
    var5120: '',
    var5121: '',
    var5122: '',
    var5123: '',
    var5124: '',
    var5125: '',
    var5126: '',
    var5127: '',
    var5128: '',
    var5129: '',
    var5130: '',
    var5131: '',
    var5132: '',


  

    





    var5133: '',

    var5136: '',

    var5139: '',


    var5134: '',

    var5137: '',

    var5140: '',
    

    
    var5135: '',

    var5138: '',

    var5141: '',






    var5073: '',

    var5083: '',

    var5074: '',

    var5084: '',


    var5075: '',

    var5085: '',

    
    var5076: '',

    var5086: '',



    var5077: '',

    var5087: '',




    

    var5079: '',
    var5080: '',

    var5081: '',

    var5082: '',


  }
  periodoselec
  FormularioVariables: FormGroup
  FormularioVariables2: FormGroup
  ngOnInit() {
    this.FormularioVariables = this.form.group(this.variables)
    this.FormularioVariables2 = this.form.group(this.VARIABLES2)
    this.CargarIpressSegunPunto()
    this.establecimientos = [{ label: 'seleccionar', value: 'Seleccione Ipress' }]
  }
  GuardarDatos1() {
    console.log('enviando datos')
    this.estados.eventoGuardarVariables.emit()
    this.confirm1()
    
  }
  GuardarDatos2() {
    console.log('enviando datos')
    this.estados.eventoGuardarVariables.emit()
    this.confirm2()
     
  }
  mesCambia(dat) {
  this.estados.periodo_select.emit(this.periodoselec)
  }

  CargarIpressSegunPunto() {
    let punto = localStorage.getItem('ID_PUNTO')

    this.puntoDigitacions.devolverIppressPorPunto(punto).subscribe((datos) => {

      let result = datos.map((estable) => { return { label: estable.IPRESS, value: estable.RENIPRESS } })
      this.establecimientos = result
      

    })

  }
  cambioIpress(){
    this.estados.ipress_select.emit(this.establecimiento)
  }



}
