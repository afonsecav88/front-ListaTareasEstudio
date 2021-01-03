import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgForm} from '@angular/forms';
import { Tarea } from '../../Interfaces/tarea.interface';
import { TareasService } from '../../services/tareas.service';


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {


  constructor(private srv:TareasService) {
  
   
   }



  tarea: Tarea = {
  titulo: '',
  descripcion: '',
  estado: ''
   };


   estado:string [] = ["Pendiente" , "En proceso", "Terminada" ]
   

  ngOnInit(): void {
    
  }
 
  guardar(){
 this.srv.nuevaTarea(this.tarea).subscribe(data =>{
  console.log(data);
 }) 

  }

// guardar(): void {
// console.log( this.tarea);

    
}
