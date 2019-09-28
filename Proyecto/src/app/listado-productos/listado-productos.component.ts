import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductoModel } from '../modelos/producto.model';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  /*   @ViewChild("nombre", { static: false }) nombre: ElementRef
    @ViewChild("descripcion", { static: false }) descripcion: ElementRef */
  nombre: string
  descripcion: string

  productos: ProductoModel[] = []

  constructor() { }

  ngOnInit() {
  }

  agregar() {
    /*     const producto: {} = {
          nombre: `Producto ${this.productos.length + 1}`,
          descripcion: `Descripción ${this.productos.length + 1}`
        } */
    /*     const nombre: string = this.nombre.nativeElement.value.trim()
        const descripcion: string = this.descripcion.nativeElement.value.trim() */

    if (this.nombre.trim() != "" && this.descripcion.trim() != "") {
      const producto: ProductoModel = new ProductoModel(this.nombre, this.descripcion)
      this.productos.unshift(producto)

      this.nombre = ""
      this.descripcion = ""

    } else {
      alert("Ingrese el nombre y/o la descripcion")
    }
    /*     const producto: ProductoModel = new ProductoModel(`Producto ${this.productos.length + 1}`, `Descripción ${this.productos.length + 1}`)
    
        this.productos.unshift(producto) */
  }

  eliminar(indice: number) {
    this.productos.splice(indice, 1)
  }

}
