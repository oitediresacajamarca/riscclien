import { Component, Input, OnInit, AfterContentInit, AfterViewInit, ElementRef } from '@angular/core';
import { Ambito} from '../../interfaces/ambito';

@Component({
  selector: 'app-plantilla-inicio',
  templateUrl: './plantilla-inicio.component.html',
  styleUrls: ['./plantilla-inicio.component.css'],
  
})


export class PlantillaInicioComponent implements OnInit,AfterViewInit ,Ambito{
  
    title = 'RISC';
    public punto_digita: string;
    
    public ano:string;

    public mes:string;

    public punto:string;

  constructor(private el:ElementRef){    

  }
  nombreambito: string;
  codambito: string;
  tipoaambito: string;
  nombretipoambito: string;
  
  ngOnInit() {

    this.punto=localStorage.getItem("punt_nombre");
    this.codambito=localStorage.getItem("cod_ambito");
    this.nombreambito=localStorage.getItem("nombre_ambito");
    this.nombretipoambito=localStorage.getItem("nombre_tipo_ambito");
    this.tipoaambito=localStorage.getItem("tipo_ambito");
  }

  ngAfterViewInit()
  {
    
  }
}