import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuracion } from '../configuracion/configuracion';

@Injectable({
  providedIn: 'root'
})
export class ColumnasccService {
  conf:Configuracion=new Configuracion();
  constructor(private http:HttpClient) { }
  headers:HttpHeaders;
  devolvercolumnas(){

    this.headers= new HttpHeaders();
    this.headers.append('Accept', '*/*');
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');     
    this.headers.append('Access-Control-Allow-Origin', '*');

 
    return this.http.get<any>(this.conf.urlsimple+'columnascc/',{headers:this.headers});

  }
}
