import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-reporte-preliminar',
  templateUrl: './reporte-preliminar.component.html',
  styleUrls: ['./reporte-preliminar.component.css']
})
export class ReportePreliminarComponent implements OnInit {
  subregion=[{label:"CAJAMARCA",value:1},{label:"CHOTA",value:2},{label:"CUTERVO",value:3},{label:"JAEN",value:4}]
  subregionselect:SelectItem;

  redes=[
  {label:"CONTUMAZA",value:1,subregion:1},{label:"CAJAMARCA",value:2,subregion:1},{label:"CELENDIN",value:3,subregion:1},  {label:"SAN MARCOS",value:4,subregion:1},
  {label:"CAJABAMBA",value:5,subregion:1},{label:"SAN MIGUEL",value:6,subregion:1} ,{label:"SAN PABLO",value:7,subregion:1},
  {label:"CHOTA",value:8,subregion:2},{label:"BAMBAMARCA",value:9,subregion:2},{label:"SANTA CRUZ",value:10,subregion:2},
  {label:"CUTERVO",value:11,subregion:3}  ,{label:"SOCOTA",value:12,subregion:3},
  {label:"JAEN",value:13,subregion:4},  {label:"SAN IGNACIO",value:14,subregion:4}]
  redselect:SelectItem;
  redesfiltradas=[]


  constructor() { }

  ngOnInit() {
  }

  seleccionarRed(event){
    
    this.redesfiltradas=this.redes.filter(data=>     
      data.subregion==event.value
    )

 
  

  }

}
