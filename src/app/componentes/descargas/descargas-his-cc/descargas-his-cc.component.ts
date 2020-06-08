import { Component, OnInit } from '@angular/core';
import { ControlCalidadService } from 'src/app/servicios/control-calidad.service';

@Component({
  selector: 'app-descargas-his-cc',
  templateUrl: './descargas-his-cc.component.html',
  styleUrls: ['./descargas-his-cc.component.css']
})
export class DescargasHisCCComponent implements OnInit {
  periodo:Date=new Date()

  constructor(private cc:ControlCalidadService) { }

  ngOnInit() {

  }
  descargar(){
    this.cc.descargarReporteCC(localStorage.getItem('cod_ambito'));

  }

}
