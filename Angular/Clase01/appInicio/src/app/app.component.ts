import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appInicio';
  mostrar: boolean = false

  //tableros: Array<{}>
  tableros: {}[] = [
    {
      titulo: "Titulo 01",
      subtitulo: "Subtitulo 01",
      cabecera: "Cabecera 01"
    }, {
      titulo: "Titulo 02",
      subtitulo: "Subtitulo 02",
      cabecera: "Cabecera 02"
    }, {
      titulo: "Titulo 03",
      subtitulo: "Subtitulo 03",
      cabecera: "Cabecera 03"
    }
  ]

  recibiendo(tablero: any) {
    //console.log(new Date())
    this.tableros.push(tablero)
  }

  generarAleatorio(numAleatorio: number) {
    //console.log(Math.floor(Math.random()*10 + 1))
    console.log(numAleatorio)
  }
}
