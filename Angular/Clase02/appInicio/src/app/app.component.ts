import { Component, ViewChild, ElementRef } from '@angular/core';
import { TableroModelo } from './modelos/tablero.modelo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appInicio';
  mostrar: boolean = false

  /*   @ViewChild("titulo", { static: false }) tituloTablero: ElementRef
    @ViewChild("subtitulo", { static: false }) subTituloTablero: ElementRef
    @ViewChild("cabecera", { static: false }) cabeceraTablero: ElementRef */
  /*   titulo: string = "TITULO NUEVO"
    subtitulo: string
    cabecera: string */

  @ViewChild("formulario", { static: false }) formulario: NgForm




  //tableros: Array<{}>
  /*   tableros: TableroModelo[] = [
      new TableroModelo("Título 1", "Subtitulo 1", "Cabecera 1"),
      new TableroModelo("Título 2", "Subtitulo 2", "Cabecera 2"),
      new TableroModelo("Título 3", "Subtitulo 3", "Cabecera 3"),
      new TableroModelo("Título 4", "Subtitulo 4", "Cabecera 4")
    ] */
  tableros: Array<TableroModelo> = [
    { titulo: "Título 1", subtitulo: "Subtítulo 1", cabecera: "Cabecera 1" },
    { titulo: "Título 2", subtitulo: "Subtítulo 2", cabecera: "Cabecera 2" },
    { titulo: "Título 3", subtitulo: "Subtítulo 3", cabecera: "Cabecera 3" },
    { titulo: "Título 4", subtitulo: "Subtítulo 4", cabecera: "Cabecera 4" }
  ]

  ngOnInit() {

  }

  cargarData() {
    this.formulario.setValue({
      titulo: "titulo nuevo",
      subtitulo: "subtitulo nuevo",
      cabecera: "cabecera nueva",
      cantidad: 10
    })
  }

  cargarDataTitulo() {
    this.formulario.form.patchValue({
      titulo: "Título inicial"
    })
  }

  agregar() {
    if (this.formulario.valid) {
      console.log(this.formulario.value)
      this.formulario.reset({
        titulo: "titulo reseteado"
      })
    }
  }

  recibiendo(tablero: TableroModelo) {
    //console.log(new Date())
    this.tableros.push(tablero)
  }

  generarAleatorio(numAleatorio: number) {
    //console.log(Math.floor(Math.random()*10 + 1))
    console.log(numAleatorio)
  }
}
