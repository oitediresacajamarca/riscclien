import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-change-password',
  templateUrl: './modal-change-password.component.html',
  styleUrls: ['./modal-change-password.component.css']
})
export class ModalChangePasswordComponent implements OnInit {

  @ViewChild('btnCerrar', { static: false }) btnCerrar: ElementRef;

  constructor(private authService: AuthService, private router: Router, private location: Location) { }
  public isError = false;
  public isSuccess = false;
  public msgError = "";
  public msgSuccess = "";
  aux = this.authService.getCurrentUser();
  datos: any = {
    dni: this.aux.dni,
    passwordAntiguo: '',
    passwordNuevo: '',
    replyPassword: '',
  }

  ngOnInit() { }

  validarPassword() {
    if (this.datos.passwordNuevo == this.datos.replyPassword) {
      this.authService.updatePassword(this.datos).subscribe(usuario => {
        this.msgSuccess = "CONTRASEÑA ACTUALIZADA";
        this.onMsgSuccess();
      },
        res => {
          this.msgError = res.error.message;
          this.onIsError();
        }
      );
    } else {
      this.msgError = "LOS DATOS INGRESADOS NO COINCIDEN";
      this.onIsError();
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
      this.datos.passwordAntiguo = '';
      this.datos.passwordNuevo = '';
      this.datos.replyPassword = '';
    }, 3000);
  }

  onMsgSuccess(): void {
    this.isSuccess = true;
    setTimeout(() => {
      this.isSuccess = false;
      this.btnCerrar.nativeElement.click();
      this.datos.passwordAntiguo = '';
      this.datos.passwordNuevo = '';
      this.datos.replyPassword = '';
    }, 2000);
  }

  limpiarModal(): void {
    this.datos.passwordAntiguo = '';
    this.datos.passwordNuevo = '';
    this.datos.replyPassword = '';
  }

}
