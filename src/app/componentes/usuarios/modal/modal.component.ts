import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { NgForm } from '@angular/forms'
import { DescAmbitoI } from 'src/app/interfaces/DescAmbito';
import { MessageService } from 'primeng/api';
import { ListUsuariosComponent } from '../list-usuarios/list-usuarios.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('btnCerrar', { static: false }) btnCerrar: ElementRef;

  constructor(public authService: AuthService, private messageService: MessageService, private ListaUsuarios: ListUsuariosComponent) { }
  aux = this.authService.getCurrentUser();
  public tipos_ambito: any;
  public descripcion_ambito: any;

  ngOnInit() {
    this.authService.getTipoAmbito(this.aux.tipo_ambito).subscribe((tipo_ambito) => {
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
    this.authService.updateUser(datoActualizado).subscribe(usuario => this.ListaUsuarios.getListUsuarios());
    this.btnCerrar.nativeElement.click();
    setTimeout(() => {
      this.mensaje();
    }, 1000);
  }

  mensaje(): void {
    this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Acción completada' });
  }

}
