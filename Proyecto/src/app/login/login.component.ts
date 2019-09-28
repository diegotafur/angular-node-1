import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onCambioEstado = new EventEmitter()

  /*   @ViewChild("correo", { static: false }) correo: ElementRef
    @ViewChild("contrasena", { static: false }) contrasena: ElementRef
   */

  correo: string = ""
  contrasena: string = ""

  constructor() { }

  ngOnInit() {
  }

  login() {
    /*     const correo = this.correo.nativeElement.value
        const contrasena = this.contrasena.nativeElement.value */

    if (this.correo.trim() != "" && this.contrasena.trim() != "") {
      const usuario: Usuario = { correo: this.correo, contrasena: this.contrasena }
      this.onCambioEstado.emit(true)
    } else {
      alert("Ingrese el correo y/o la contraseña")
    }
  }
}
