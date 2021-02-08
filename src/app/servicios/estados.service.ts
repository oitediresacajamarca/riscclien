import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  eventoGuardarVariables = new EventEmitter();
  periodo_select=new EventEmitter<Date>();
  ipress_select=new EventEmitter();
  

  constructor() { }
}
