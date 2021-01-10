import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgForm} from '@angular/forms';
import { Tarea } from '../../Interfaces/tarea.interface';
import { TareasService } from '../../services/tareas.service';
import { Observable } from 'rxjs';
import { NotificationsService } from 'src/app/services/notifications.service';


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {


  constructor(private tareasService: TareasService , private notificationsService: NotificationsService) {
   }

  tarea: Tarea = {
  titulo: '',
  descripcion: '',
  estado: ''
   };

   estado: string [] = [ 'Pendiente', 'En proceso', 'Terminada' ];

  ngOnInit(): void {
  }


 guardar(): void{
  this.tareasService.postTarea(this.tarea).subscribe(data  => {
    if (data) {
      this.notificationsService.showSuccess('Tarea creada correctamente. ', 'OK');
    }
  });
  this.tarea.descripcion = '';
  this.tarea.estado = '';
  this.tarea.titulo = '';
}



// guardar(): void {
// console.log( this.tarea);
}
