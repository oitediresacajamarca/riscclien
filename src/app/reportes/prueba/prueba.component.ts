import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor() { }
  celda:any[]=[]

  ngOnInit() {
    this.celda[33]="hablar"
    this.celda[109]="PROMOCION DE LA SALUD VIDA SANA 2020"
    this.celda[27]="1. FAMILIAS CON NIÑOS(AS) MENORES DE 36 MESES Y GESTANTES RECIBEN SESIONES DEMOSTRATIVAS EN PREPARACION DE ALIMENTOS"

  }

}
