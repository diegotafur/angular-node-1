import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onCambioEstado = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  login() {
    const usuario: Usuario = {
      correo: "sergiohidalgocaceres@gmail.com",
      contrasena: "1234"
    }

    this.onCambioEstado.emit(true)
  }

}
