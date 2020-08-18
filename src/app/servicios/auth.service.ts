import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserI } from "../interfaces/user";
import { RolesI } from '../interfaces/roles';
import { JwtResponseI } from "../interfaces/jwt-response";
import { Observable, BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import { DescAmbitoI } from '../interfaces/DescAmbito';

@Injectable()
export class AuthService {

  AUTH_SERVER: string = "http://localhost:3000";

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
  });

  authSubject = new BehaviorSubject(false);

  private token: string;

  public selectedUsuario: UserI = {
    dni: null,
    apellido_paterno: '',
    apellido_materno: '',
    nombres: '',
    email: '',
    tipo_ambito: '',
    descripcion_ambito: '',
    estado: ''
  }

  constructor(private httpClient: HttpClient) { }

  getRoles_SelectedUsuario(dni: string) {
    return this.httpClient.get(`${this.AUTH_SERVER}/roles_selectedUsuario/${dni}`);
  }

  getRoles(datos: any) {
    return this.httpClient.put(`${this.AUTH_SERVER}/roles`, datos);
  }

  getlistaUsuarios(usuario: UserI) {
    return this.httpClient.put(`${this.AUTH_SERVER}/lista_usuarios`, usuario);
  }

  getDescripcionAmbito(datos: DescAmbitoI) {
    return this.httpClient.put(`${this.AUTH_SERVER}/descripcion_ambito`, datos);
  }

  getTipoAmbito(tipo_ambito: string) {
    return this.httpClient.get(`${this.AUTH_SERVER}/tipo_ambito/${tipo_ambito}`);
  }

  getIdPunto(description_ambito: string) {
    return this.httpClient.get(`${this.AUTH_SERVER}/id_punto/${description_ambito}`);
  }

  getAllUsers() {
    return this.httpClient.get(`${this.AUTH_SERVER}/usuarios`);
  }

  validarDni(user: UserI): Observable<Response> {
    return this.httpClient.post<Response>(`${this.AUTH_SERVER}/validarDni`, user);
  }

  validarPassword(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/validarPassword`, user);
  }

  updatePassword(user: any): Observable<JwtResponseI> {
    return this.httpClient.put<JwtResponseI>(`${this.AUTH_SERVER}/changedPassword/${user.dni}`, user);
  }

  restorePassword(user: any): Observable<JwtResponseI> {
    return this.httpClient.put<JwtResponseI>(`${this.AUTH_SERVER}/restorePassword/${user.dni}`, user);
  }

  registerUser(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/register`, user);
  }

  updateUser(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.put<JwtResponseI>(`${this.AUTH_SERVER}/usuarios/${user.dni}`, user);
  }

  updateUserLogged(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.put<JwtResponseI>(`${this.AUTH_SERVER}/usuario_logged/${user.dni}`, user);
  }

  login(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`, user, { headers: this.headers })
      .pipe(
        tap((res: JwtResponseI) => {
          if (res) {
            //GUARDAR CURRENT_USER
            const currentuser = {
              dni: res.dataUser.dni,
              apellido_paterno: res.dataUser.apellido_paterno,
              apellido_materno: res.dataUser.apellido_materno,
              nombres: res.dataUser.nombres,
              email: res.dataUser.email,
              tipo_ambito: res.dataUser.tipo_ambito,
              descripcion_ambito: res.dataUser.descripcion_ambito,
              estado: res.dataUser.estado,
            };
            this.setCurrentUser(currentuser);
            this.saveRoles(res.roles);
            //GUARDAR TOKEN
            this.saveToken({
              accessToken: res.dataUser.accessToken,
              expiresIn: res.dataUser.expiresIn,
            });
            if (res.dataUser.tipo_ambito == 'PUNTO') {
              this.getIdPunto(res.dataUser.descripcion_ambito).subscribe(datos => {
                const idPunto = JSON.parse(datos[0].ID_PUNTO_DIG_HIS);
                this.saveIdPunto(idPunto);
              });
            }
          }
        })
      );
  }

  logoutUser() {
    let accessToken = localStorage.getItem("ACCESS_TOKEN");
    const url_api = `http://localhost:3000/logout/${accessToken}`;
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    localStorage.removeItem("CURRENT_USER");
    localStorage.removeItem("ID_PUNTO");
    localStorage.removeItem("ROLES");
    return this.httpClient.post<UserI>(url_api, { headers: this.headers });
  }

  setCurrentUser(user: UserI): void {
    const user_string = JSON.stringify(user);
    localStorage.setItem("CURRENT_USER", user_string);
  }

  getCurrentUser() {
    let user_string = localStorage.getItem("CURRENT_USER");
    if (!isNullOrUndefined(user_string)) {
      let user: UserI = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  getRoles_CurrentUser() {
    let roles_string = localStorage.getItem("ROLES");
    if (!isNullOrUndefined(roles_string)) {
      let roles: Array<any> = JSON.parse(roles_string);
      return roles;
    } else {
      return null;
    }
  }

  saveRoles(roles: RolesI): void {
    const roles_string = JSON.stringify(roles);
    localStorage.setItem("ROLES", roles_string);
  }

  saveToken({ accessToken, expiresIn, }: { accessToken: string; expiresIn: string; }): void {
    localStorage.setItem("ACCESS_TOKEN", accessToken);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = accessToken;
  }

  saveIdPunto(idPunto: string): void {
    localStorage.setItem("ID_PUNTO", idPunto);
  }

  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}
