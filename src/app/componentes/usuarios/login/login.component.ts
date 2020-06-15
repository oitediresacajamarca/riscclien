import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/servicios/auth.service";
import { UserI } from "src/app/interfaces/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  user: UserI = {
    dni: "",
    password: "",
  };

  ngOnInit() {}

  onLogin() {
    return this.authService.login(this.user).subscribe(
      (data) => {
        this.authService.setDni(data.dataUser);
        this.authService.setEmail(data.dataUser);
        this.authService.setTipo_ambito(data.dataUser);
        this.authService.setDescripcion_Ambito(data.dataUser);
        let token = data.dataUser.accessToken;
        let expiresIn = data.dataUser.expiresIn;
        this.authService.saveToken({
          accessToken: token,
          expiresIn: expiresIn,
        });
        this.router.navigate(["user/inicio"]);
      },
      (error) => console.log(error)
    );
  }
}
