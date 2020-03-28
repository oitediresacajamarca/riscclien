import { Component, OnInit } from '@angular/core';
import { Configuracion } from 'src/app/configuracion/configuracion';
import { ActivatedRoute } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-cargas-sis',
  templateUrl: './cargas-sis.component.html',
  styleUrls: ['./cargas-sis.component.css'], 
   providers:[MessageService]
})
export class CargasSisComponent implements OnInit {
  urlSis:string;
  punto:string;
  config:Configuracion= new Configuracion();
  headers: Headers;
  periodoselec:Date;
  ano:number;
  mes:number;

  constructor(private mensajes:MessageService,private rout:ActivatedRoute) { }

  ngOnInit() {
    this.urlSis=this.config.urlsis;
  }

  public seleccionarArchivo() {
    this.punto=this.rout.snapshot.paramMap.get('punto');
   this.urlSis= this.config.urlsis+'/punto/'+this.punto+'/ano/'+this.ano+'/mes/'+(this.mes+1).toString();
  
   this.headers= new Headers();
   this.headers.append('Accept', '*/*');
   this.headers.append('Content-Type', 'application/json');     
   this.headers.append('Access-Control-Allow-Origin', '*');
    
  }

  public mesCambia(event){

  this.ano=event.getFullYear();
  this.mes=event.getMonth();
    

  }


}
