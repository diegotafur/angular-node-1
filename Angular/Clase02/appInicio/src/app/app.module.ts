import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PrimeroComponent } from './primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { ListadousuariosComponent } from './listadousuarios/listadousuarios.component';
import { EdicionUsuarioComponent } from './edicion-usuario/edicion-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    SegundoComponent,
    ListadousuariosComponent,
    EdicionUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
