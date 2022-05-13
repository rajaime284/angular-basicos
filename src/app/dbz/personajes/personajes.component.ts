import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

 // @Input('data') personajes_hijo: Personaje [] = [];

  constructor(private dbzService: DbzService) { }

  get personajes(){
    return this.dbzService.personajes;
  }

}
