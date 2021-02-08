import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VariableManualService {

  constructor(private http: HttpClient) { }

  GuardarVariable(datos) {
   return this.http.post(environment.ip_backend_b+'/risc_b/variables-manuales/guardar', datos)
  }
  DevolverVariable(datos) {
    return this.http.put<any>(environment.ip_backend_b+'/risc_b/variables-manuales/devolver', datos)
   }
}
