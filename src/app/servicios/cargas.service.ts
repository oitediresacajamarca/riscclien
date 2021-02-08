import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargasService {

  constructor(private http:HttpClient) { }

  /**
   * cargar reporte plano
   */
  public CargarReportePlano() {
    
  }
}
