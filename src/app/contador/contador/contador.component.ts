import {Component} from '@angular/core';


@Component({
  selector: 'app-',
  template: `

  <h1>{{title}}</h1>
<h3>La base es: <strong>{{base}}</strong></h3>

<button (click)="acumular(+base)">+{{base}}</button>
<span> {{numero}} </span>
<button (click)="acumular(-base);">-{{base}}</button>
  `,

})

export class ContadorComponent{
  public title: string = 'Contador App';
  public numero: number = 10;
  public base: number = 5;


  sumar(){
    this.numero +=1;
  }

  restar(){
    this.numero -=1;
  }

  acumular(valor: number){
    this.numero += valor;
  }
}
