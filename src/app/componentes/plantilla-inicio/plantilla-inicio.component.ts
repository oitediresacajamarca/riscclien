import { Component, Input, OnInit, AfterContentInit, AfterViewInit, ElementRef } from "@angular/core";
import { UserI } from "src/app/interfaces/user";
import { AuthService } from "src/app/servicios/auth.service";

@Component({
  selector: "app-plantilla-inicio",
  templateUrl: "./plantilla-inicio.component.html",
  styleUrls: ["./plantilla-inicio.component.css"],
})
export class PlantillaInicioComponent implements OnInit, AfterViewInit {
  title = "RISC";

  public ano: string;
  public mes: string;

  constructor(private el: ElementRef, private authService: AuthService) { }
  currentUser: UserI;
  dni: string;
  email: string;
  tipo_ambito: string;
  descripcion_ambito: string;

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.dni = this.currentUser.dni;
    this.email = this.currentUser.email;
    this.tipo_ambito = this.currentUser.tipo_ambito;
    this.descripcion_ambito = this.currentUser.descripcion_ambito;
  }

  ngAfterViewInit() { }
}
