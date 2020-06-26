import { Component, OnInit } from "@angular/core";
import { UserI } from "src/app/interfaces/user";
import { AuthService } from "src/app/servicios/auth.service";

@Component({
  selector: "app-list-usuarios",
  templateUrl: "./list-usuarios.component.html",
  styleUrls: ["./list-usuarios.component.css"],
})
export class ListUsuariosComponent implements OnInit {
  constructor(private authService: AuthService) { }
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
    this.authService.getlistaUsuarios(enviar).subscribe((usuarios: UserI) => {
      this.usuarios = usuarios;
      console.log(this.usuarios);
    });
  }

  /* getListUsuarios() {
    this.authService.getAllUsers().subscribe((usuarios: UserI) => {
      this.usuarios = usuarios;
      console.log(this.usuarios);
    });
  } */

  onPreUpdate(usuario: UserI): void {
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
    const passwordDni = usuario.dni;
    const enviar = {
      dni: usuario.dni,
      password: passwordDni,
    };
    this.authService.updatePassword(enviar).subscribe(usuario => location.reload());
  }

}
