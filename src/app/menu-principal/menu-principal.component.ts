import { Component, OnInit, Input } from "@angular/core";
import { MegaMenuItem } from 'primeng/api/megamenuitem';
import { CargasHisComponent } from "../componentes/cargas-his/cargas-his.component";
import { UserI } from "../interfaces/user";
import { AuthService } from "../servicios/auth.service";
import { style } from '@angular/animations';

@Component({
  selector: "app-menu-principal",
  templateUrl: "./menu-principal.component.html",
  styleUrls: ["./menu-principal.component.css"],
})
export class MenuPrincipalComponent implements OnInit {
  items: MegaMenuItem[];
  @Input()
  punto_digitacion: string;
  @Input()
  ano: string;
  @Input()
  mes: string;
  nivel: string;
  currentUser: UserI;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.nivel = this.currentUser.tipo_ambito;


    this.items = [
      {
        label: "Maestros",
        icon: "pi pi-fw pi-cog",
        items: [
          [
            {
              label: "Personal",
              items: [{ label: "TV 1.1" }, { label: "TV 1.2" }]
            },
            {
              label: "TV 2",
              items: [{ label: "TV 2.1" }, { label: "TV 2.2" }]
            }
          ],
          [
            {
              label: "Puntos de digitacion",
              items: [{ label: "Establecimientos por Puntos", routerLink: "adminpue" }, { label: "TV 3.2" }]
            }
          ]
        ],
        visible: this.nivel == "DEPARTAMENTO",
      },
      {
        label: "Reportes",
        icon: "pi pi-fw pi-chart-bar",
        items: [
          [
            {
              label: "Estrategias",
              items: [{ label: "Niño" }, { label: "Adolecente" }, { label: "Adulto" }, { label: "Adulto Mayor" }, { label: "Joven" }, { label: "Materno" }]
            }
          ],
          [
            {
              label: "Digitador",
              items: [{ label: "Sports 5.1" }, { label: "Sports 5.2" }]
            },
            {
              label: "Atenciones",
              items: [{ label: "Sports 6.1" }, { label: "Sports 6.2" }]
            }
          ]
        ]
      },
      {
        label: "Cargas",
        icon: "pi pi-fw pi-upload",
        items: [
          [
            {
              label: "HIS",
              items: [{ label: "Periodo Actual", routerLink: "/user/cargasHis/" + this.nivel }, { label: "Actualizacion" }, { label: "Reporte de Cargas" }]
            }
          ],
          [
            {
              label: "SIS",
              items: [{ label: "Periodo Actual", routerLink: "cargasSis/" + localStorage.getItem("pun") }, { label: "Actualizacion" }, { label: "Reporte de Cargas" }]
            }
          ]
        ],
        visible: this.nivel == "PUNTO",
      },
      {
        label: "Seguimiento",
        icon: "pi pi-fw pi-download",
        items: [
          [
            {
              label: "Control de Calidad",
              items: [{ label: "Reporte de Control de calidad", routerLink: "descargaCC" }]
            }
          ]
        ],
        visible: this.nivel == "DEPARTAMENTO" || this.nivel == "SUBREGION" || this.nivel == "RED" || this.nivel == "MICRORED",
      }
    ];
  }
}
