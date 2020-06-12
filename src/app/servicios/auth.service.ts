import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserI } from "../interfaces/user";
import { JwtResponseI } from "../interfaces/jwt-response";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { tap } from "rxjs/operators";
import { isNullOrUndefined } from "util";

@Injectable()
export class AuthService {
  AUTH_SERVER: string = "http://localhost:3000";
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient: HttpClient) {}

  register(user: UserI): Observable<JwtResponseI> {
    return this.httpClient
      .post<JwtResponseI>(`${this.AUTH_SERVER}/register`, user)
      .pipe(
        tap((res: JwtResponseI) => {
          if (res) {
            //GUARDAR TOKEN
            this.saveToken(res.dataUser.accesToken, res.dataUser.expiresIn);
          }
        })
      );
  }

  login(user: UserI): Observable<JwtResponseI> {
    return this.httpClient
      .post<JwtResponseI>(`${this.AUTH_SERVER}/login`, user)
      .pipe(
        tap((res: JwtResponseI) => {
          if (res) {
            //GUARDAR TOKEN
            this.saveToken(res.dataUser.accesToken, res.dataUser.expiresIn);
          }
        })
      );
  }

  logout(): void {
    this.token = "";
    localStorage.removeItem("ACCES_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCES_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCES_TOKEN");
    }
    return this.token;
  }
}
