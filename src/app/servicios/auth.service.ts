import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserI } from "../interfaces/user";
import { JwtResponseI } from "../interfaces/jwt-response";
import { Observable, BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { isNullOrUndefined } from "util";

@Injectable()
export class AuthService {
  AUTH_SERVER: string = "http://localhost:3000";
  authSubject = new BehaviorSubject(false);
  private token: string;
  headers: HttpHeaders = new HttpHeaders ({
    "Content-Type": "application/json"
  });
  constructor(private httpClient: HttpClient) {}

  registerUser(user: UserI): Observable<any> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/register`, user)
      .pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            //GUARDAR TOKEN
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        })
      );
  }

  login(user: UserI): Observable<any> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`, user)
      .pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            //GUARDAR TOKEN
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        })
      );
  }

  logoutUser(){
    let accessToken = localStorage.getItem("ACCESS_TOKEN");
    const url_api = `http://localhost:3000/user/logout?access_token=${accessToken}`;
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    return this.httpClient.post<UserI>(url_api, { headers: this.headers})
  }

  setUser(user: UserI): void{
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  getCurrentUser(){
    let user_string = localStorage.getItem("currentUser");
    if(!isNullOrUndefined(user_string)){
      let user: UserI = JSON.parse(user_string);
      return user;
    }else {
      return null;
    }
  }

  saveToken(accessToken: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", accessToken);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = accessToken;
  }

  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}
