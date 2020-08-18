import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/servicios/auth.service";
import { UserI } from "src/app/interfaces/user";
import { DescAmbitoI } from 'src/app/interfaces/DescAmbito';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RolesI } from 'src/app/interfaces/roles';
import { isNullOrUndefined } from 'util';
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private messageService: MessageService, private modalService: NgbModal) { }

  //OBJETO BIDIRECCIONAL QUE ALMACENA DATOS INGRESADOS EN EL FORMULARIO
  public user: UserI = {
    dni: "",
    password: "",
    email: "",
    apellido_paterno: "",
    apellido_materno: "",
    nombres: "",
    tipo_ambito: "",
    descripcion_ambito: "",
    estado: "",
    isLogged: "",
    fecha_creacion: null,
    roles_asignados: "",
    roles_removidos: "",
  };

  //VARIABLE AUXILIAR QUE TIENE LOS DATOS DEL USUARIO LOGEADO
  aux = this.authService.getCurrentUser();

  //OBJETO QUE ALMACENA TIPOS DE AMBITO PERMITIDOS PARA EL USUARIO
  public tipos_ambito: any;

  //OBJETO QUE ALMACENA DESCRIPCION SEGÚN EL TIPO DE AMBITO SELECCIONADO
  public descripcionAmbito: any;

  //OBJETO QUE ALMACENA DATOS DEL DNI VALIDADO
  public datosPersonales: any;

  //VARIABLES PARA MENSAJES
  public isError = false;
  public isSuccess = false;
  public msgError = "";
  public msgSuccess = "";

  //VARIABLE CON LA FECHA ACTUAL
  fechaActual: Date = new Date();

  public datos: any = {
    tipo_ambito_usuario: this.aux.tipo_ambito,
    tipo_ambito_crear: this.aux.tipo_ambito,
    roles_asignados: '',
  };

  modalReference: NgbModalRef;
  public roles: RolesI;
  public fila_modal: RolesI;
  public fila_seleccionada: RolesI;
  public roles_seleccionados: Array<RolesI> = [];
  public rolesAsignados: string = '';
  public rolesRemovidos: string = '';

  ngOnInit() {
    this.authService.getTipoAmbito(this.aux.tipo_ambito).subscribe((tipo_ambito) => {
      this.tipos_ambito = tipo_ambito;
      const datos: DescAmbitoI = {
        tipo_ambito_usuario: this.aux.tipo_ambito,
        descripcion_ambito_usuario: this.aux.descripcion_ambito,
        tipo_ambito_crear: this.aux.tipo_ambito
      }
      this.authService.getDescripcionAmbito(datos).subscribe((datos) => {
        this.descripcionAmbito = datos;
        this.authService.getRoles(this.datos).subscribe(roles => {
          this.roles = roles;
        });
      });
    });
    this.limpiarFormulario();
  }

  obtenerRoles(): void {
    this.authService.getRoles(this.datos).subscribe(roles => {
      this.roles = roles;
    });
  }

  enviarRol(): void {
    if (isNullOrUndefined(this.fila_modal)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ningún rol seleccionado.' });
    } else {
      this.roles_seleccionados.push(this.fila_modal);
      this.rolesAsignados = '';
      for (var i = 0; i < this.roles_seleccionados.length; i++) {
        if (this.rolesAsignados == '') {
          this.rolesAsignados = this.rolesAsignados + this.roles_seleccionados[i].id_rol_risc;
          this.datos.roles_asignados = this.rolesAsignados;
        } else {
          this.rolesAsignados = this.rolesAsignados + ',' + this.roles_seleccionados[i].id_rol_risc;
          this.datos.roles_asignados = this.rolesAsignados;
        }
      };
      this.fila_modal = null;
      this.obtenerRoles();
      document.getElementById("btnModal").click();
    }
  }

  removerRol(roles_seleccionados: Array<RolesI>, fila_seleccionada: RolesI): void {
    if (isNullOrUndefined(this.fila_seleccionada)) {
      this.msgError = "NO HA SELECCIONADO NINGÚN ROL PARA REMOVER";
      this.onIsError();
    } else {
      var i = roles_seleccionados.indexOf(fila_seleccionada);
      i !== -1 && roles_seleccionados.splice(i, 1);
      this.rolesAsignados = '';
      if (this.roles_seleccionados.length == 0) {
        this.datos.roles_asignados = '';
        this.obtenerRoles();
      } else {
        for (var i = 0; i < this.roles_seleccionados.length; i++) {
          if (this.rolesAsignados == '') {
            this.rolesAsignados = this.rolesAsignados + this.roles_seleccionados[i].id_rol_risc;
            this.datos.roles_asignados = this.rolesAsignados;
          } else {
            this.rolesAsignados = this.rolesAsignados + ',' + this.roles_seleccionados[i].id_rol_risc;
            this.datos.roles_asignados = this.rolesAsignados;
          }
        };
        this.obtenerRoles();
      };
      this.fila_seleccionada = null;
    }
  }

  seleccionarFilaModal(fila: RolesI) {
    this.fila_modal = fila;
  }

  seleccionarFila(fila: RolesI) {
    this.fila_seleccionada = fila;
  }

  validarModal(): boolean {
    var numero = 0;
    for (var variable in this.roles) {
      numero++
    };
    if (numero == 0) {
      return true;
    } else {
      return false;
    }
  }

  devuelveDescripcionAmbito(): void {
    const dato: DescAmbitoI = {
      tipo_ambito_usuario: this.aux.tipo_ambito,
      descripcion_ambito_usuario: this.aux.descripcion_ambito,
      tipo_ambito_crear: this.user.tipo_ambito
    }
    this.authService.getDescripcionAmbito(dato).subscribe((datos) => {
      this.descripcionAmbito = datos;
      this.datos.tipo_ambito_crear = this.user.tipo_ambito;
      this.rolesAsignados = '';
      this.rolesRemovidos = '';
      this.datos.roles_asignados = '';
      this.roles_seleccionados = [];
      this.obtenerRoles();
    });
  }

  validaDni(): void {
    const dato: UserI = {
      dni: this.user.dni,
    }
    this.authService.validarDni(dato).subscribe((datos) => {
      this.datosPersonales = datos;
      this.user.apellido_paterno = this.datosPersonales[0].APELLIDO_PATERNO;
      this.user.apellido_materno = this.datosPersonales[0].APELLIDO_MATERNO;
      this.user.nombres = this.datosPersonales[0].NOMBRES;
    },
      res => {
        this.user.dni = '';
        this.user.apellido_paterno = '';
        this.user.apellido_materno = '';
        this.user.nombres = '';
        this.msgError = res.error.message;
        this.onIsError();
      }
    );
  }

  onRegister(form: NgForm): void {
    if (form.valid) {
      this.user.password = this.user.dni;
      this.user.estado = "ACTIVO";
      this.user.isLogged = "0";
      this.user.fecha_creacion = this.fechaActual;
      this.user.roles_asignados = this.rolesAsignados;
      this.user.roles_removidos = this.rolesRemovidos;
      this.authService.registerUser(this.user).subscribe((user) => {
        this.roles_seleccionados = [];
        document.getElementById("nav-home-tab").click();
        this.msgSuccess = "EL USUARIO HA SIDO CREADO";
        this.onMsgSuccess();
        this.ngOnInit();
      },
        res => {
          this.msgError = res.error.message;
          this.onIsError();
        }
      );
    } else {
      this.onIsError();
    }
  }

  limpiarFormulario(): void {
    this.user.dni = '';
    this.user.password = '';
    this.user.email = '';
    this.user.apellido_paterno = '';
    this.user.apellido_materno = '';
    this.user.nombres = '';
    this.user.tipo_ambito = '';
    this.user.descripcion_ambito = '';
    this.user.estado = '';
    this.user.isLogged = '';
    this.user.fecha_creacion = null;
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 3000);
  }

  onMsgSuccess(): void {
    this.isSuccess = true;
    setTimeout(() => {
      this.isSuccess = false;
    }, 3000);
  }

}