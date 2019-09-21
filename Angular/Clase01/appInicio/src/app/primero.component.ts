import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-primero',
    templateUrl:'./primero.component.html',
    styleUrls: ['./primero.component.css']
})
export class PrimeroComponent {
    @Input() titulo: string = 'Sistema de ventas v2.2'
    @Input() subtitulo: string
    @Input() cabecera: string

    @Output() onEnviando = new EventEmitter()
    @Output() onGenerando = new EventEmitter()

    alerta(mensaje: string) {
        const numAleatorio: number = Math.round(Math.random()*10 + 1)
        this.onEnviando.emit({
            titulo: `Título ${numAleatorio}`,
            subtitulo: `Subtítulo ${numAleatorio}`,
            cabecera: `Cabecera ${numAleatorio}`
        })
        this.onGenerando.emit(Math.round(Math.random()*10 + 1))
        //alert(mensaje)
    }
}