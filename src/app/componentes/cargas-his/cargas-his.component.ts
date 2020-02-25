import { Component, OnInit } from '@angular/core';
import { Configuracion } from 'src/app/configuracion/configuracion';
import { HttpEvent } from '@angular/common/http';

import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-cargas-his',
  templateUrl: './cargas-his.component.html',
  styleUrls: ['./cargas-his.component.css'],
  providers:[MessageService]
})
export class CargasHisComponent implements OnInit {
  urlPac:string;
  urlReg:string;
  urlPer:string;
  urlRep:string;
  punto:string='1820';
  ano:string='2020';
  mes:string='01';
  headers:Headers;
  registrosPc:string='0';
  registrosRc:string='0';
  registrosRep:string='0';
  registrosPerc:string='0';

  config:Configuracion= new Configuracion();

  constructor( private mensajes:MessageService) { }

  ngOnInit() {
  }
  /**
   * selecionarArchivo
   */
  public seleccionarArchivo() {
   this.urlPac= this.config.url+'paciente/punto/'+this.punto+'/ano/'+this.ano+'/mes/'+this.mes;
   this.urlPer= this.config.url+'personal/punto/'+this.punto+'/ano/'+this.ano+'/mes/'+this.mes;
   this.urlReg= this.config.url+'registrador/punto/'+this.punto+'/ano/'+this.ano+'/mes/'+this.mes;
   this.urlRep= this.config.url+'reporteplano/punto/'+this.punto+'/ano/'+this.ano+'/mes/'+this.mes;
   this.headers= new Headers();
   this.headers.append('Accept', '*/*');
  this.headers.append('Content-Type', 'multipart/form-data');     
  this.headers.append('Access-Control-Allow-Origin', '*');

    
  }

  cargoPaciente(	event){

    this.registrosPc=event.originalEvent.body.root.respuesta.cantidad_registros;
    this.mensajes.add({severity:'success', summary:'Caraga Exitosa', detail:'Se cargaron exitosamente '+this.registrosPc})
    
  }

  cargoRegistrador(	event){

    this.registrosRc=event.originalEvent.body.root.respuesta.cantidad_registros;
    console.log(event.originalEvent.body.root.respuesta);
    this.mensajes.add({severity:'success', summary:'Caraga Exitosa', detail:'Se cargaron exitosamente '+this.registrosRc})
    
  }
  cargoReporte(	event){

    this.registrosRep=event.originalEvent.body.root.respuesta.cantidad_registros;
    
    this.mensajes.add({severity:'success', summary:'Caraga Exitosa', detail:'Se cargaron exitosamente '+ this.registrosRep})
    
  }

  cargoPersonal(	event){

    this.registrosPerc=event.originalEvent.body.root.respuesta.cantidad_registros;
    
    this.mensajes.add({severity:'success', summary:'Caraga Exitosa', detail:'Se cargaron exitosamente '+ this.registrosPerc})
    
  }





}
