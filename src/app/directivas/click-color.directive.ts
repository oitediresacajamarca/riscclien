import { Directive, HostListener, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appClickColor]'
})
export class ClickColorDirective {
  @Input('appClickColor') fila: any = {}
  constructor(private elementref: ElementRef) { }
  @HostListener('click') cambiarColor() {
    /* reseteo el estilo letra negra y fondo blanco */
    for (let index = 0; index < this.elementref.nativeElement.parentElement.children.length; index++) {
      this.elementref.nativeElement.parentElement.children[index].style.backgroundColor = '#FFFFFF'
      this.elementref.nativeElement.parentElement.children[index].style.color = '#000000'
    }
    /* establesco los estilos a la fila */
    this.elementref.nativeElement.style.backgroundColor = '#007bff'
    this.elementref.nativeElement.style.color = '#FFFFFF'
    this.click.emit(this.fila)
  }
  @Output('selecciono') click = new EventEmitter<any>()

}
