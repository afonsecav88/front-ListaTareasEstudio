import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgForm} from '@angular/forms';
import { Tarea } from '../../Interfaces/tarea.interface';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {


  constructor() {


   }

   tarea: Tarea = {
    titulo: '',
    descripcion: '',
    estado: 'Pendiente'

   };


  ngOnInit(): void {
  }
guardar(forma: NgForm): void {
console.log('Funcion guardar ejecutada');
console.log( 'ngForm' , forma);
console.log( 'valor' , forma.value);
  }



}
