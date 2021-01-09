import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgForm} from '@angular/forms';
import { Tarea } from '../../Interfaces/tarea.interface';
import { TareasService } from '../../services/tareas.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {


  constructor(private tareasService: TareasService) {
   }

  tarea: Tarea ;
   estado: string [] = [ 'Pendiente', 'En proceso', 'Terminada' ];

  ngOnInit(): void {
  }


 guardar(): void{
  this.tareasService.postTarea(this.tarea).subscribe();
  this.tarea.descripcion = '';
  this.tarea.estado = '';
  this.tarea.titulo = '';
}



// guardar(): void {
// console.log( this.tarea);
}
