import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  productos: Array<{}> = []

  constructor() { }

  ngOnInit() {
  }

  agregar(){
    const producto: {} = {
      nombre: `Producto ${this.productos.length+1}`,
      descripcion: `Descripción ${this.productos.length+1}`
    }

    this.productos.unshift(producto)
  }

  eliminar(indice: number) {
    this.productos.splice(indice, 1)
  }

}
