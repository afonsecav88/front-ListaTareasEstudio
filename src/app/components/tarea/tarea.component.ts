import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {


  constructor() {


   }


  ngOnInit(): void {
  }
guardar(forma: NgForm): void {
console.log('Funcion guardar ejecutada');
console.log( 'ngForm' , forma);
console.log( 'valor' , forma.value);
  }



}
