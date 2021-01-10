import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../Interfaces/tarea.interface';
import { Router, ActivatedRoute} from '@angular/router';
import { NotificationsService } from '../../services/notifications.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tareasService: TareasService, private router: Router, private route: ActivatedRoute,
              private notificationsService: NotificationsService  ) { }

  tareas: Tarea [] ;

  // Metodo para ir a la ruta de Editar una tarea en la BD
  obtenerId(id: number): any{
  this.router.navigate(['/edit', `${id}`]);
  }

  // Metodo para eliminar una tarea en la BD
  eliminarTarea(id: number): any{
  this.router.navigate(['home']).then(() =>  {window.location.reload(); });
  return this.tareasService.deleteTarea(id).subscribe();
}

  // metodo para prevvenir el borrado de una tarea
  alertaBorrado(): void {
    this.notificationsService.confirmBoxDeleted();  }


  ngOnInit(): void {
   this.tareasService.getTareas().subscribe(data => {
   this.tareas = data;
    });
     }
}
