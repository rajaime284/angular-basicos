import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  @Input('nuevo_hijo') nuevo: Personaje= {
    nombre: '',
    poder: 0
  }

 // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

constructor( private dbzService: DbzService){}

  Agregar(){

    if(this.nuevo.nombre.trim().length ===0) return;

    console.log(this.nuevo)
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPerdonaje(this.nuevo);
    this.nuevo= {
      nombre: '',
      poder: 0
    }

  }

}
