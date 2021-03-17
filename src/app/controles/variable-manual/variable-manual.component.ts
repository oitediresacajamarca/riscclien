import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Varman } from 'src/app/interfaces/varman';
import { ActividadService } from 'src/app/servicios/actividad.service';
import { EstadosService } from 'src/app/servicios/estados.service';
import { VariableManualService } from 'src/app/servicios/variable-manual.service';

@Component({
  selector: 'app-variable-manual',
  templateUrl: './variable-manual.component.html',
  styleUrls: ['./variable-manual.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VariableManualComponent),
      multi: true
    }
  ]
})
export class VariableManualComponent implements OnInit, Varman, ControlValueAccessor {


  onChange = (dato) => {
    console.log('cambio el modelo')
  }
  cambiar() { }
  onTouched = () => { }
  state: boolean = true;
  constructor(private actividads: ActividadService, private estados: EstadosService, private variableman: VariableManualService) { }
  writeValue(obj: any): void {

    this.valor = obj.value
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.state = isDisabled

  }
  label: string



  @Input() idvartemp: string
  @Input() idactividad: string;

  idestrategia: string;

  idestablecimiento: string;
  mes: string;
  anio: string;
  valor: string = '10';
  actividad: any = { descripcion: 'cargando' }
  cod_2000

  ngOnInit() {
    this.devolverActividad()
    this.estados.eventoGuardarVariables.subscribe(() => { this.guardarActividad() })
    this.estados.ipress_select.subscribe((establec) => {
      console.log(establec)
      this.cod_2000 = establec
      this.cargarVariable()
    })


    this.estados.periodo_select.subscribe((period) => {
      let dat = new Date(period)
      this.mes = (dat.getMonth() + 1).toString()
      this.anio = (dat.getFullYear()).toString()
      this.cargarVariable()

    })
  }
  devolverActividad() {
    this.actividads.devolverActividad(this.idactividad).subscribe((datos) => {
      this.actividad = datos
      this.idactividad = datos.idactividad
      this.idestrategia=datos.idestrategia
    })
  }
  guardarActividad() {
    this.actividads.guardarActivid({
      anio: this.anio, idactividad: this.idactividad, idestablecimiento: '',
      idestrategia: this.idestrategia, idvartemp: this.idvartemp, mes: this.mes, valor: this.valor, cod_2000: this.cod_2000
    }).subscribe()
  }
  cargarVariable() {
    this.valor=''
    console.log({ anio: this.anio, mes: this.mes, idactividad: this.idactividad })
    this.variableman.DevolverVariable({ anio: this.anio, mes: this.mes, idactividad: this.idactividad ,cod_2000:this.cod_2000}).subscribe(
      (data) => {
        console.log(data)
        if(data != null && data != undefined){

          this.idactividad = data.idactividad
          this.valor = data.valor
        }
       
      }

    )
  }


}
