import { Component } from "@angular/core";



@Component({
  selector:'app-heroe',
  templateUrl:'heroe.component.html',
})
export class HeroeComponent{
  nombre: string = 'Ironman';
  edad  : number = 45;

  obtenerNombre(): string{
   // return this.nombre + this.edad; // es lo mismo
    return ` ${this.nombre} - ${this.edad}`;
  }

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  cambiarNombre(): void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void{
    this.edad = 30;
  }
}