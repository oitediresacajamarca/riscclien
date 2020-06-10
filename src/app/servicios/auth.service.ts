import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs/internal/observable'
import { map } from 'rxjs/operators'
import { isNullOrUndefined} from 'util'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json"
  })

  registrarUsuario(dni: string, password: string, email: string, apellido_paterno: string, apellido_materno: string, 
                   nombres: string, tipo_ambito: string, descripcion_ambito: string){
    const url_api = "http://localhost:3000/usuarios";
    return this.http.post(
      url_api,
      {
        dni: name,
        password: password,
        email: email,
        apellido_paterno: apellido_paterno,
        apellido_materno: apellido_materno,
        nombres: nombres,
        tipo_ambto: tipo_ambito,
        descripcion_ambito: descripcion_ambito
      },
      { headers: this.headers}
    ).pipe(map(data => data));
  }

  setToken(){

  }

  getToken(){

  }
}
