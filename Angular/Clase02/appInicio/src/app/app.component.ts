import { Component } from '@angular/core';
import { TableroModelo } from './modelos/tablero.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appInicio';
  mostrar: boolean = false

  //tableros: Array<{}>
  tableros: TableroModelo[] = [
    new TableroModelo("Título 1", "Subtitulo 1", "Cabecera 1"),
    new TableroModelo("Título 2", "Subtitulo 2", "Cabecera 2"),
    new TableroModelo("Título 3", "Subtitulo 3", "Cabecera 3"),
    new TableroModelo("Título 4", "Subtitulo 4", "Cabecera 4")
  ]

  recibiendo(tablero: TableroModelo) {
    //console.log(new Date())
    this.tableros.push(tablero)
  }

  generarAleatorio(numAleatorio: number) {
    //console.log(Math.floor(Math.random()*10 + 1))
    console.log(numAleatorio)
  }
}
