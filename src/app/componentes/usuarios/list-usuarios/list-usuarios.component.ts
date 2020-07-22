import { Component, OnInit } from "@angular/core";
import { UserI } from "src/app/interfaces/user";
import { AuthService } from "src/app/servicios/auth.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-list-usuarios",
  templateUrl: "./list-usuarios.component.html",
  styleUrls: ["./list-usuarios.component.css"],
})
export class ListUsuariosComponent implements OnInit {
  constructor(private authService: AuthService, private toastr: ToastrService) { }
  public usuarios: UserI;
  aux: UserI;
  tipo_ambito: string;
  pageActual: number = 1;

  ngOnInit() {
    this.getListUsuarios();
  }

  getListUsuarios() {
    this.aux = this.authService.getCurrentUser();
    const enviar: UserI = {
      tipo_ambito: this.aux.tipo_ambito,
      descripcion_ambito: this.aux.descripcion_ambito,
    }
    this.authService.getlistaUsuarios(enviar).subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  onPreUpdate(usuario: UserI): void {
    this.toastr.success("TITULO", "CONTENIDO")
    this.authService.selectedUsuario = Object.assign({}, usuario);
  }

  cambiarEstado(usuario: UserI): void {
    const estadoActual = usuario.estado;
    if (estadoActual == "ACTIVO") {
      const estado = {
        dni: usuario.dni,
        estado: "INACTIVO"
      };
      this.authService.updateUser(estado).subscribe(usuario => location.reload());
    } else {
      const estado = {
        dni: usuario.dni,
        estado: "ACTIVO"
      };
      this.authService.updateUser(estado).subscribe(usuario => location.reload());
    }
  }

  restablecerPassword(usuario: UserI): void {
    const enviar = {
      dni: usuario.dni,
      passwordNuevo: usuario.dni,
    };
    this.authService.restorePassword(enviar).subscribe(usuario => location.reload());
  }

}
