import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PuntoDigitacionService {

  constructor(private http: HttpClient) {

  }
  devolverIppressPorPunto(idpunto: string) {
    
   return this.http.get<any[]>(environment.ip_backend_b + '/risc_b/distribucion-ipress/' + idpunto)
  }
}
