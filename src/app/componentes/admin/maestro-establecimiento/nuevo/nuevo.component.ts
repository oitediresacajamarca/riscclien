import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MaestroEstablecimientoService } from 'src/app/servicios/admin/maestro-establecimiento.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private formbuidlder: FormBuilder,private estables:MaestroEstablecimientoService,private route:Router) { }
formularioNuevo:FormGroup
  ngOnInit() {
    this.formularioNuevo=this.formbuidlder.group({
      'Id_Establecimiento': new FormControl(),
      'Nombre_Establecimiento': new FormControl(),
      'Ubigueo_Establecimiento': new FormControl(),
      'Codigo_Disa': new FormControl(),
      'Disa': new FormControl(),
      'Codigo_Red': new FormControl(),
      'Red': new FormControl(),
      'Codigo_MicroRed': new FormControl(),
      'MicroRed': new FormControl(),
      'Codigo_Unico': new FormControl(),
      'Codigo_Sector': new FormControl(),
      'Descripcion_Sector': new FormControl(),
      'Departamento': new FormControl(),
      'Provincia': new FormControl(),
      'Distrito': new FormControl()
    })
  }

  async Guardar(){
  let resp=  await this.estables.nuevo_establecimientos(this.formularioNuevo.value)
  this.route.navigate(['/admin/maestro_establecimiento/'])
    console.log(resp)
  }
}
