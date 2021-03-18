import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private formbuidlder: FormBuilder) { }

  ngOnInit() {
    this.formbuidlder.group({
      'Id_Establecimiento': '',
      'Nombre_Establecimiento': '',
      'Ubigueo_Establecimiento': '',
      'Codigo_Disa': '',
      'Disa': '',
      'Codigo_Red': '',
      'Red': '',
      'Codigo_MicroRed': '',
      'MicroRed': '',
      'Codigo_Unico': '',
      'Codigo_Sector': '',
      'Descripcion_Sector': '',
      'Departamento': '',
      'Provincia': '',
      'Distrito': ''
    })
  }

}
