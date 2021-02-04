import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng';
import { EstadosService } from 'src/app/servicios/estados.service';
import { PuntoDigitacionService } from 'src/app/servicios/punto-digitacion.service';
import { VariableManualService } from 'src/app/servicios/variable-manual.service';

@Component({
  selector: 'app-registro-variables-manuales',
  templateUrl: './registro-variables-manuales.component.html',
  styleUrls: ['./registro-variables-manuales.component.css']
})
export class RegistroVariablesManualesComponent implements OnInit {

  establecimientos: SelectItem[] = [{ label: 'seleccionar', value: 'Seleccione Ipress' }]
  establecimiento: SelectItem
  constructor(private form: FormBuilder, private variabless: VariableManualService, private estados: EstadosService
    , private puntoDigitacions: PuntoDigitacionService) { }
  variables = {
    var1: '',
    var2: '',
    var3: '',
    var4: '',
    var5: '',
    var6: '',
    var7: '',
    var8: '',
    var9: '',
    var10: '',
    var11: '',
    var12: '',


  }
  periodoselec
  FormularioVariables: FormGroup
  ngOnInit() {
    this.FormularioVariables = this.form.group(this.variables)
    this.CargarIpressSegunPunto()
    this.establecimientos = [{ label: 'seleccionar', value: 'Seleccione Ipress' }]
  }
  GuardarDatos() {
    console.log('enviando datos')
    this.estados.eventoGuardarVariables.emit()
    /* this.variabless.GuardarVariable(this.FormularioVariables.value).subscribe((respuesta)=>{console.log(respuesta)})*/
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
