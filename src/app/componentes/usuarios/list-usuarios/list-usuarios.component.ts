import { Component, OnInit } from "@angular/core";
import { UserI } from "src/app/interfaces/user";
import { AuthService } from "src/app/servicios/auth.service";
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-list-usuarios",
  templateUrl: "./list-usuarios.component.html",
  styleUrls: ["./list-usuarios.component.css"],
  providers: [MessageService],
})
export class ListUsuariosComponent implements OnInit {

  constructor(private authService: AuthService, private messageService: MessageService) { }

  public usuarios: UserI;
  aux: UserI;
  pageActual: number = 1;

  ngOnInit() {
    this.getListUsuarios();
  }

  getListUsuarios() {
    this.aux = this.authService.getCurrentUser();
    const enviar: UserI = {
      tipo_ambito: this.aux.tipo_ambito,
      descripcion_ambito: this.aux.descripcion_ambito,
      dni: this.aux.dni,
    }
    this.authService.getlistaUsuarios(enviar).subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  onPreUpdate(usuario: UserI): void {
    this.authService.selectedUsuario = Object.assign({}, usuario);
  }

  cambiarEstado(usuario: UserI): void {
    if (usuario.estado == "ACTIVO") {
      if (confirm("¿ DESEA INACTIVAR AL USUARIO ?")) {
        const estado = {
          dni: usuario.dni,
          estado: "INACTIVO"
        };
        this.authService.updateUser(estado).subscribe(usuario => this.ngOnInit());
        setTimeout(() => {
          this.mensaje();
        }, 1000);
      }
    } else {
      if (confirm("¿ DESEA ACTIVAR AL USUARIO ?")) {
        const estado = {
          dni: usuario.dni,
          estado: "ACTIVO"
        };
        this.authService.updateUser(estado).subscribe(usuario => this.ngOnInit());
        setTimeout(() => {
          this.mensaje();
        }, 1000);
      }
    }
  }

  restablecerPassword(usuario: UserI): void {
    if (confirm("¿ DESEA RESTABLECER LA CONTRASEÑA DEL USUARIO ?")) {
      const enviar = {
        dni: usuario.dni,
        passwordNuevo: usuario.dni,
      };
      this.authService.restorePassword(enviar).subscribe(usuario => this.ngOnInit());
      setTimeout(() => {
        this.mensaje();
      }, 1000);
    }
  }

  mensaje(): void {
    this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Acción completada' });
  }

}
