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

  constructor() { }

  ngOnInit() {
  }

}
