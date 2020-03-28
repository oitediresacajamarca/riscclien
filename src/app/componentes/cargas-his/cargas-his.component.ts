import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Configuracion } from 'src/app/configuracion/configuracion';



import {MessageService} from 'primeng/api';
import { __importDefault } from 'tslib';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';
import { ControlCalidadService } from 'src/app/servicios/control-calidad.service';
import { FileUpload } from 'primeng/fileupload/fileupload';
import { Button } from 'primeng/button/button';

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
  @Input()
  punto:string='1820';
  @Input()
  ano:string='2020';
  @Input()
  mes:string='01';

  carmpa:boolean=false;
  carmpe:boolean=false;
  carmre:boolean=false;
  carmrp:boolean=false;

  @ViewChild('mpa',{static: false}) mpa: FileUpload;
  @ViewChild('mpe',{static: false}) mpe: FileUpload;
  @ViewChild('mre',{static: false}) mre: FileUpload;
  @ViewChild('mrp',{static: false}) mrp: FileUpload;
  @ViewChild('bc',{static: false}) bc: Button;
  @ViewChild('br',{static: false}) br: Button;

 
  

  headers:Headers;
  registrosPc:string='0';
  registrosRc:string='0';
  registrosRep:string='0';
  registrosPerc:string='0';

  config:Configuracion= new Configuracion();

  constructor( private mensajes:MessageService,private rout:ActivatedRoute, private controlhis:ControlCalidadService) { }

  ngOnInit() {
  
  }
  /**
   * selecionarArchivo
   */
  public seleccionarArchivo() {
    this.punto=this.rout.snapshot.paramMap.get('punto');
   this.urlPac= this.config.url+'paciente/punto/'+this.punto+'/ano/'+this.ano+'/mes/'+this.mes;
   this.urlPer= this.config.url+'personal/punto/'+this.punto+'/ano/'+this.ano+'/mes/'+this.mes;
   this.urlReg= this.config.url+'registrador/punto/'+this.punto+'/ano/'+this.ano+'/mes/'+this.mes;
   this.urlRep= this.config.url+'reporteplano/punto/'+this.punto+'/ano/'+this.ano+'/mes/'+this.mes;
   this.headers= new Headers();
   this.headers.append('Accept', '*/*');
   this.headers.append('Content-Type', 'application/json');     
   this.headers.append('Access-Control-Allow-Origin', '*');

   
  
  }

  cargoPaciente(	event){

    this.registrosPc=event.originalEvent.body.root.respuesta.cantidad_registros;
    this.mensajes.add({severity:'success', summary:'Carga Exitosa', detail:'Se cargaron exitosamente '+this.registrosPc+' registros'})
    this.mensajes.add({key:'mensajeMaestroPaciente',severity:'success', summary:'Carga Exitosa', detail:'Se cargaron exitosamente '+this.registrosPc+' registros'})
    this.mpa.disabled=true;
    this.carmpa=true;
    if(this.carmpa && this.carmre && this.carmrp && this.carmpe){
      
      this.bc.disabled=false;
    }
    
  }

  cargoRegistrador(	event){

    this.registrosRc=event.originalEvent.body.root.respuesta.cantidad_registros;
  
    this.mensajes.add({severity:'success', summary:'Carga Exitosa', detail:'Se cargaron exitosamente '+this.registrosRc+' registros'});
    this.mensajes.add({key:'mensajeMaestroRegistrador',severity:'success', summary:'Carga Exitosa', detail:'Se cargaron exitosamente '+this.registrosRc+' registros'})
    this.mre.disabled=true;
    this.carmre=true;
    if(this.carmpa && this.carmre && this.carmrp && this.carmpe){
        this.bc.disabled=false;
    }
  }
  cargoReporte(	event){

    this.registrosRep=event.originalEvent.body.root.respuesta.cantidad_registros;
    
    this.mensajes.add({severity:'success', summary:'Carga Exitosa', detail:'Se cargaron exitosamente '+ this.registrosRep+' registros'});
    this.mensajes.add({key:'mensajeMaestroRpt',severity:'success', summary:'Carga Exitosa', detail:'Se cargaron exitosamente '+ this.registrosRep+' registros'})
    this.mrp.disabled=true;
    this.carmrp=true;
    if(this.carmpa && this.carmre && this.carmrp && this.carmpe){
   
      this.bc.disabled=false;
    }
  }

  cargoPersonal(	event){

    this.registrosPerc=event.originalEvent.body.root.respuesta.cantidad_registros;
    
    this.mensajes.add({severity:'success', summary:'Carga Exitosa', detail:'Se cargaron exitosamente '+ this.registrosPerc+' registros'});
    this.mensajes.add({key:'mensajeMaestroPersonal',severity:'success', summary:'Carga Exitosa', detail:'Se cargaron exitosamente '+this.registrosPerc+' registros'})
    this.mpe.disabled=true;
    this.carmpe=true;
    if(this.carmpa && this.carmre && this.carmrp && this.carmpe){
    
      this.bc.disabled=false;
    }
  }

  llamar_control_his(){


    this.controlhis.ejecutarcontrol(this.ano,this.mes).subscribe((datos)=>{console.log(datos)});

   
    

  }

  envioPaciente(){
    
  }





}
