import { Component, OnInit } from '@angular/core';
import { MaestroEstablecimientoService } from 'src/app/servicios/admin/maestro-establecimiento.service';

@Component({
  selector: 'app-maestro-establecimiento',
  templateUrl: './maestro-establecimiento.component.html',
  styleUrls: ['./maestro-establecimiento.component.css']
})
export class MaestroEstablecimientoComponent implements OnInit {

  constructor(private estaservices:MaestroEstablecimientoService) { }

lista_establecimientos:any
  ngOnInit() {
    this.cargarMaestrosEstablecimientos()
  }

  async cargarMaestrosEstablecimientos(){
  this.lista_establecimientos= await this.estaservices.listar_establecimientos()
console.log(this.lista_establecimientos)

  }

}
