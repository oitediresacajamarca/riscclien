import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/servicios/auth.service";
import { UserI } from "src/app/interfaces/user";
import { Router } from "@angular/router";
import { DescAmbitoI } from 'src/app/interfaces/DescAmbito';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }
  public user: UserI = {
    dni: "",
    password: "",
    email: "",
    apellido_paterno: "",
    apellido_materno: "",
    nombres: "",
    tipo_ambito: "",
    descripcion_ambito: "",
    estado: "",
    isLogged: "",
  };
  aux = this.authService.getCurrentUser();
  t_ambito: string = this.aux.tipo_ambito;
  public tipos_ambito: any;
  public descripcionAmbito: any;
  public datosPersonales: any;
  public isError = false;
  public isSuccess = false;
  public msgError = "";
  public msgSuccess = "";

  ngOnInit() {
    this.authService.getTipoAmbito(this.t_ambito).subscribe((tipo_ambito) => {
      this.tipos_ambito = tipo_ambito
    });
  }

  devuelveDescripcionAmbito(): void {
    const dato: DescAmbitoI = {
      tipo_ambito_usuario: this.aux.tipo_ambito,
      descripcion_ambito_usuario: this.aux.descripcion_ambito,
      tipo_ambito_crear: this.user.tipo_ambito
    }
    console.log(dato);
    this.authService.getDescripcionAmbito(dato).subscribe((datos) => {
      console.log(datos);
      this.descripcionAmbito = datos;
    });
  }

  validaDni(): void {
    const dato: UserI = {
      dni: this.user.dni,
    }
    this.authService.validarDni(dato).subscribe((datos) => {
      this.datosPersonales = datos;
      this.user.apellido_paterno = this.datosPersonales[0].APELLIDO_PATERNO;
      this.user.apellido_materno = this.datosPersonales[0].APELLIDO_MATERNO;
      this.user.nombres = this.datosPersonales[0].NOMBRES;
    },
      res => {
        this.user.dni = '';
        this.user.apellido_paterno = '';
        this.user.apellido_materno = '';
        this.user.nombres = '';
        this.msgError = res.error.message;
        this.onIsError();
      }
    );
  }

  onRegister(form: NgForm): void {
    if (form.valid) {
      this.user.password = this.user.dni;
      this.user.estado = "ACTIVO";
      this.user.isLogged = "0";
      this.authService.registerUser(this.user).subscribe((user) => {
        this.msgSuccess = "EL USUARIO HA SIDO CREADO";
        this.onMsgSuccess();
        this.user.dni = '';
        this.user.password = '';
        this.user.email = '';
        this.user.apellido_paterno = '';
        this.user.apellido_materno = '';
        this.user.nombres = '';
        this.user.tipo_ambito = '';
        this.user.descripcion_ambito = '';
        this.user.estado = '';
        this.user.isLogged = '';
      },
        res => {
          this.msgError = res.error.message;
          this.onIsError();
        }
      );
    } else {
      this.onIsError();
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 3000);
  }

  onMsgSuccess(): void {
    this.isSuccess = true;
    setTimeout(() => {
      this.isSuccess = false;
    }, 3000);
  }
}
