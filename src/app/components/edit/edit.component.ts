import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from '../../services/tareas.service';
import { NotificationsService } from '../../services/notifications.service';
import { Tarea } from '../../Interfaces/tarea.interface';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [
  ]
})
export class EditComponent implements OnInit {

  forma: FormGroup;
  id: number;
  tarea: Tarea;
  estado: string [] = [ 'Pendiente', 'En proceso', 'Terminada' ];

constructor( private route: ActivatedRoute, private tareasService: TareasService, private notificationsService: NotificationsService ) {
this.forma = new FormGroup({
  id : new FormControl (''),
  titulo : new FormControl( '', Validators.required ),
  descripcion: new FormControl('', Validators.required),
  estado : new FormControl('', [Validators.required])
}); }

  ngOnInit(): void {
  this.route.params.subscribe(params => {
  this.id = params.id; });

  this.tareasService.getTareaById(this.id).subscribe(data => {
  this.tarea = data;
  // estableciendo valores del formulario por defecto
  this.forma.setValue({
    id : this.tarea.id,
    titulo : this.tarea.titulo,
    descripcion  : this.tarea.descripcion,
    estado : this.tarea.estado
  });
  });
  }

  guardarCambios( ): void{
 this.tareasService.putTarea(this.id, this.forma).subscribe(data => {
  if (!data) {
    this.notificationsService.showSuccess('Tarea editada correctamente. ', 'OK');
  }
 });
   }
  }


