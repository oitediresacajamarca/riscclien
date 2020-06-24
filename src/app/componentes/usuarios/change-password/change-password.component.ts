import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { UserI } from 'src/app/interfaces/user';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location) { }
  public isError = false;
  public msgError = "";
  datos = {
    dni: '',
    password: '',
    replyPassword: '',
  }

  ngOnInit() {
  }

  validarPassword() {
    const pw = this.datos.password;
    const rpw = this.datos.replyPassword;
    const aux: UserI = {
      dni: this.datos.dni,
      password: pw,
    }
    if (pw == rpw) {
      this.authService.updatePassword(aux).subscribe(usuario => { });
      this.router.navigate(["user/login"])
    } else {
      this.msgError = "LOS DATOS INGRESADOS NO COINCIDEN";
      this.onIsError();
    }

  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }


}
