
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaestroEstablecimientoService {

  constructor(private http: HttpClient) { }


  listar_establecimientos() {
    return this.http.get(environment.ip_backend_b + '/risc_b/maestro-establecimiento/listar').toPromise()
  }
}
