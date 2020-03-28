import { Component, Input, OnInit, AfterContentInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'riscclien';
 public punto_digita: string;
 

  public ano:string;

 public mes:string;

 public punto:string;
  constructor(private el:ElementRef){
  
  
    
  
  }
  
  ngOnInit() {
    this.punto=localStorage.getItem("punt_nombre");
  }

  ngAfterViewInit()
  {
   
    
  }
}
