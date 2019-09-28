export class ProductoModel {

    constructor(public nombre: string, public descripcion: string) { }

    nombreEnMayusculas(): string {
        return this.nombre.toUpperCase()
    }

    /*     public nombre: string
        public descripcion: string
    
        constructor(nombre: string, descripcion: string) {
            this.nombre = nombre
            this.descripcion = descripcion
        } */

}
