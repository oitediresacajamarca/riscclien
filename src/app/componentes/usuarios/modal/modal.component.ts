import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { UserI } from 'src/app/interfaces/user';
import { NgForm } from '@angular/forms'
import { Location } from '@angular/common'
import { DescAmbitoI } from 'src/app/interfaces/DescAmbito';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public authService: AuthService, private location: Location) { }
  aux = this.authService.getCurrentUser();
  t_ambito: string = this.aux.tipo_ambito;
  public tipos_ambito: any;
  public descripcion_ambito: any;

  ngOnInit() {
    this.authService.getTipoAmbito(this.t_ambito).subscribe((tipo_ambito) => {
      this.tipos_ambito = tipo_ambito
    });
  }

  devuelveDescripcionAmbito(): void {
    const datos: DescAmbitoI = {
      tipo_ambito_usuario: this.aux.tipo_ambito,
      descripcion_ambito_usuario: this.aux.descripcion_ambito,
      tipo_ambito_crear: this.authService.selectedUsuario.tipo_ambito
    }
    this.authService.getDescripcionAmbito(datos).subscribe((datos) => {
      this.descripcion_ambito = datos
    });
  }

  onSaveUsuario(usuarioForm: NgForm): void {
    const datoActualizado = {
      dni: this.authService.selectedUsuario.dni,
      email: usuarioForm.value.email,
      tipo_ambito: usuarioForm.value.tipo_ambito,
      descripcion_ambito: usuarioForm.value.descripcion_ambito,
    }
    this.authService.updateUser(datoActualizado).subscribe(usuario => location.reload());
  }

}
