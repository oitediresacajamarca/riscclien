import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Varman } from '../interfaces/varman';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private http: HttpClient) {

  }

  devolverActividad(id: string) {
    return this.http.get<any>(environment.ip_backend_b + '/risc_b/actividades/' + id)
  }
  guardarActivid( data:Varman){
    return this.http.post(environment.ip_backend_b + '/risc_b/variables-manuales/guardar/' ,data)
  }

}
