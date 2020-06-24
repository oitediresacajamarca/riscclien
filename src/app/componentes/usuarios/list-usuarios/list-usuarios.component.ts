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
    this.tipo_ambito = this.aux.tipo_ambito;
    this.authService
      .getAllUsers()
      .subscribe((usuarios: UserI) => (this.usuarios = usuarios));
  }

  onPreUpdate(usuario: UserI): void {
    this.authService.selectedUsuario = Object.assign({}, usuario);
  }
}
