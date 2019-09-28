import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductoModel } from '../modelos/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto: ProductoModel
  @Input() indice: number
  @Output() onEliminar = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  eliminar() {
    this.onEliminar.emit(this.indice)
  }

}
