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
  red=[{label:"CONTUMAZA",value:1},{label:"CAJAMARCA",value:2},{label:"CELENDIN",value:3},
  {label:"SAN MARCOS",value:4},{label:"CAJABAMBA",value:5},{label:"SAN MIGUEL",value:6},{label:"SAN PABLO",value:7},
  {label:"CHOTA",value:8},{label:"BAMBAMARCA",value:9},{label:"SANTA CRUZ",value:10},{label:"CUTERVO",value:11}
  ,{label:"SOCOTA",value:12},{label:"JAEN",value:13},{label:"SAN IGNACIO",value:14}]
  redselect:SelectItem;


  constructor() { }

  ngOnInit() {
  }

}
