import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../modelos/producto.model';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  productos: ProductoModel[] = []

  constructor() { }

  ngOnInit() {
  }

  agregar() {
    /*     const producto: {} = {
          nombre: `Producto ${this.productos.length + 1}`,
          descripcion: `Descripción ${this.productos.length + 1}`
        } */
    const producto: ProductoModel = new ProductoModel(`Producto ${this.productos.length + 1}`, `Descripción ${this.productos.length + 1}`)

    this.productos.unshift(producto)
  }

  eliminar(indice: number) {
    this.productos.splice(indice, 1)
  }

}
