import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from "src/app/servicios/auth.service";
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms'
import { DescAmbitoI } from 'src/app/interfaces/DescAmbito';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { isNullOrUndefined } from 'util';
import { UserI } from "src/app/interfaces/user";
import { RolesI } from 'src/app/interfaces/roles';
import { Table } from 'primeng/table';

@Component({
  selector: "app-list-usuarios",
  templateUrl: "./list-usuarios.component.html",
  styleUrls: ["./list-usuarios.component.css"],
  providers: [MessageService],
})

export class ListUsuariosComponent implements OnInit {

  constructor(public authService: AuthService, private messageService: MessageService, private modalService: NgbModal) { }

  public usuarios: any;
  first = 0;
  rows = 10;
  
  loading: boolean = true;

  @ViewChild('dt', {static: false}) table: Table;

  //VARIABLE AUXILIAR QUE TIENE LOS DATOS DEL USUARIO LOGEADO
  aux = this.authService.getCurrentUser();

  //OBJETO QUE ALMACENA TIPOS DE AMBITO PERMITIDOS PARA EL USUARIO
  public tipos_ambito: any;

  //OBJETO QUE ALMACENA DESCRIPCION SEGÚN EL TIPO DE AMBITO SELECCIONADO
  public descripcionAmbito: any;

  //VARIABLES PARA MENSAJES
  public isError = false;
  public isSuccess = false;
  public msgError = "";
  public msgSuccess = "";

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
  public roles_selectedUsuario: string = '';
  public rolesAsignados: string = '';
  public rolesRemovidos: string = '';
  public roles_backEnd: Array<any> = [];
  public roles_asignados: Array<any> = [];
  public roles_toRemove: Array<any> = [];

  ngOnInit() {
    const enviar: UserI = {
      tipo_ambito: this.aux.tipo_ambito,
      descripcion_ambito: this.aux.descripcion_ambito,
      dni: this.aux.dni,
    }
    this.authService.getlistaUsuarios(enviar).subscribe(usuarios => {
      this.usuarios = usuarios;
      this.loading = false;
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
    });
  }

  getListUsuarios() {
    const enviar: UserI = {
      tipo_ambito: this.aux.tipo_ambito,
      descripcion_ambito: this.aux.descripcion_ambito,
      dni: this.aux.dni,
    }
    this.authService.getlistaUsuarios(enviar).subscribe(usuarios => {
      this.usuarios = usuarios;
      this.loading = false;
    });
  }

  onPreUpdate(usuario: UserI): void {
    this.authService.selectedUsuario = Object.assign({}, usuario);
    const datos: DescAmbitoI = {
      tipo_ambito_usuario: this.aux.tipo_ambito,
      descripcion_ambito_usuario: this.aux.descripcion_ambito,
      tipo_ambito_crear: this.authService.selectedUsuario.tipo_ambito,
    }
    this.authService.getDescripcionAmbito(datos).subscribe((datos) => {
      this.descripcionAmbito = datos;
      this.authService.getRoles_SelectedUsuario(this.authService.selectedUsuario.dni).subscribe(res => {
        this.roles_seleccionados = [];
        this.roles_selectedUsuario = '';
        this.roles_backEnd = [];
        for (var i = 0; i < Object.keys(res).length; i++) {
          this.roles_seleccionados.push(res[i]);
        };
        for (var i = 0; i < this.roles_seleccionados.length; i++) {
          if (this.roles_selectedUsuario == '') {
            this.roles_backEnd.push(this.roles_seleccionados[i].id_rol_risc);
            this.roles_selectedUsuario = this.roles_selectedUsuario + this.roles_seleccionados[i].id_rol_risc;
          } else {
            this.roles_backEnd.push(this.roles_seleccionados[i].id_rol_risc);
            this.roles_selectedUsuario = this.roles_selectedUsuario + ',' + this.roles_seleccionados[i].id_rol_risc;
          }
        };
        this.roles_asignados = [];
        this.roles_toRemove = [];
        this.datos.tipo_ambito_crear = this.authService.selectedUsuario.tipo_ambito;
        this.datos.roles_asignados = this.roles_selectedUsuario;
        this.obtenerRoles();
      });
    });
  }

  onUpdateUsuario(usuarioForm: NgForm): void {
    if (this.roles_asignados.length == 0) {
      this.rolesAsignados = '';
    } else {
      this.rolesAsignados = '';
      for (var i = 0; i < this.roles_asignados.length; i++) {
        var coincidencia = 0;
        for (var j = 0; j < this.roles_backEnd.length; j++) {
          if (this.roles_asignados[i] == this.roles_backEnd[j]) {
            coincidencia++;
          };
        };
        if (coincidencia == 0) {
          if (this.rolesAsignados == '') {
            this.rolesAsignados = this.rolesAsignados + this.roles_asignados[i];
          } else {
            this.rolesAsignados = this.rolesAsignados + ',' + this.roles_asignados[i];
          };
        };
      };
    };
    if (this.roles_toRemove.length == 0) {
      this.rolesRemovidos = '';
    } else {
      this.rolesRemovidos = '';
      for (var i = 0; i < this.roles_toRemove.length; i++) {
        var coincidencia = 0;
        for (var j = 0; j < this.roles_backEnd.length; j++) {
          if (this.roles_toRemove[i] == this.roles_backEnd[j]) {
            coincidencia++;
          };
        };
        if (coincidencia == 1) {
          if (this.rolesRemovidos == '') {
            this.rolesRemovidos = this.rolesRemovidos + this.roles_toRemove[i];
          } else {
            this.rolesRemovidos = this.rolesRemovidos + ',' + this.roles_toRemove[i];
          };
        };
      };
    };
    const datoActualizado = {
      dni: this.authService.selectedUsuario.dni,
      email: usuarioForm.value.email,
      tipo_ambito: usuarioForm.value.tipo_ambito,
      descripcion_ambito: usuarioForm.value.descripcion_ambito,
      roles_asignados: this.rolesAsignados,
      roles_removidos: this.rolesRemovidos,
    };
    this.authService.updateUser(datoActualizado).subscribe(usuario => this.getListUsuarios());
    document.getElementById("nav-home-tab").click();
    document.getElementById("btnCerrar").click();
    setTimeout(() => {
      this.mensaje();
    }, 1000);
  }

  devuelveDescripcionAmbito(): void {
    const datos: DescAmbitoI = {
      tipo_ambito_usuario: this.aux.tipo_ambito,
      descripcion_ambito_usuario: this.aux.descripcion_ambito,
      tipo_ambito_crear: this.authService.selectedUsuario.tipo_ambito
    }
    this.authService.getDescripcionAmbito(datos).subscribe((datos) => {
      this.descripcionAmbito = datos;
      this.datos.tipo_ambito_crear = this.authService.selectedUsuario.tipo_ambito;
      this.rolesAsignados = '';
      this.rolesRemovidos = '';
      this.datos.roles_asignados = '';
      this.roles_seleccionados = [];
      const enviar: UserI = {
        dni: this.authService.selectedUsuario.dni,
      }
      this.authService.limpiarRoles(enviar).subscribe((datos) => {
        this.obtenerRoles();
      });
    });
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
      this.roles_asignados = [];
      for (var i = 0; i < this.roles_seleccionados.length; i++) {
        if (this.rolesAsignados == '') {
          this.roles_asignados.push(this.roles_seleccionados[i].id_rol_risc);
          this.rolesAsignados = this.rolesAsignados + this.roles_seleccionados[i].id_rol_risc;
        } else {
          this.roles_asignados.push(this.roles_seleccionados[i].id_rol_risc);
          this.rolesAsignados = this.rolesAsignados + ',' + this.roles_seleccionados[i].id_rol_risc;
        }
      };
      for (var i = 0; i < this.roles_toRemove.length; i++) {
        var coincidencia = 0;
        for (var j = 0; j < this.roles_asignados.length; j++) {
          if (this.roles_toRemove[i] == this.roles_asignados[j]) {
            coincidencia++;
          };
        };
        if (coincidencia == 1) {
          this.roles_toRemove.splice(i, 1);
        };
      };
      this.datos.roles_asignados = this.rolesAsignados;
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
      this.roles_toRemove.push(this.roles_seleccionados[i].id_rol_risc);
      i !== -1 && roles_seleccionados.splice(i, 1);
      this.rolesAsignados = '';
      this.roles_asignados = [];
      if (this.roles_seleccionados.length == 0) {
        this.roles_asignados = [];
        this.datos.roles_asignados = '';
        this.obtenerRoles();
      } else {
        for (var i = 0; i < this.roles_seleccionados.length; i++) {
          if (this.rolesAsignados == '') {
            this.roles_asignados.push(this.roles_seleccionados[i].id_rol_risc);
            this.rolesAsignados = this.rolesAsignados + this.roles_seleccionados[i].id_rol_risc;
          } else {
            this.roles_asignados.push(this.roles_seleccionados[i].id_rol_risc);
            this.rolesAsignados = this.rolesAsignados + ',' + this.roles_seleccionados[i].id_rol_risc;
          }
        };
        this.datos.roles_asignados = this.rolesAsignados;
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
    if (isNullOrUndefined(this.roles)) {
      return true;
    } if (Object.keys(this.roles).length == 0) {
      return true;
    } else {
      return false;
    }
  }

  cambiarEstado(usuario: UserI): void {
    if (usuario.estado == "ACTIVO") {
      if (confirm("¿ DESEA INACTIVAR AL USUARIO ?")) {
        const enviar = {
          dni: usuario.dni,
          estado: "INACTIVO",
        };
        this.authService.updateEstado(enviar).subscribe(usuario => this.getListUsuarios());
        setTimeout(() => {
          this.mensaje();
        }, 1000);
      }
    } else {
      if (confirm("¿ DESEA ACTIVAR AL USUARIO ?")) {
        const enviar = {
          dni: usuario.dni,
          estado: "ACTIVO",
        };
        this.authService.updateEstado(enviar).subscribe(usuario => {
          this.getListUsuarios();
        });
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
      this.authService.restorePassword(enviar).subscribe(usuario => this.getListUsuarios());
      setTimeout(() => {
        this.mensaje();
      }, 1000);
    }
  }

  cerrarSesion(usuario: UserI): void {
    if (confirm("¿ DESEA CERRAR LA SESIÓN DEL USUARIO ?")) {
      const dato: UserI = {
        dni: usuario.dni,
        isLogged: "0",
      };
      this.authService.updateUserLogged(dato).subscribe(usuario => this.getListUsuarios());
      setTimeout(() => {
        this.mensaje();
      }, 1000);
    }
  }

  mensaje(): void {
    this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Acción completada' });
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

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.usuarios ? this.first === (this.usuarios.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.usuarios ? this.first === 0 : true;
  }

}