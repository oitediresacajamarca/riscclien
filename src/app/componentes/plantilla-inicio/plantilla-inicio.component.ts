import {
  Component,
  Input,
  OnInit,
  AfterContentInit,
  AfterViewInit,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-plantilla-inicio",
  templateUrl: "./plantilla-inicio.component.html",
  styleUrls: ["./plantilla-inicio.component.css"],
})
export class PlantillaInicioComponent implements OnInit, AfterViewInit {
  title = "RISC";

  public ano: string;
  public mes: string;

  /* public punto_digita: string;
  public punto: string; */

  constructor(private el: ElementRef) {}
  dni: string;
  email: string;
  tipo_ambito: string;
  descripcion_ambito: string;

  ngOnInit() {
    this.dni = localStorage.getItem("DNI");
    this.email = localStorage.getItem("EMAIL");
    this.tipo_ambito = localStorage.getItem("TIPO_AMBITO");
    this.descripcion_ambito = localStorage.getItem("DESCRIPCION_AMBITO");
  }

  ngAfterViewInit() {}
}
