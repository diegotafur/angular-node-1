import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto: {}
  @Input() indice: number
  @Output() onEliminar = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  eliminar() {
    this.onEliminar.emit(this.indice)
  }

}
