import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../Interfaces/tarea.interface';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tareasService: TareasService, private router: Router, private route: ActivatedRoute) { }

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

//  // Metodo para capturar objeto de la fila de la tabla y pasarlo al formulario editar
//   public capturarObjeto(tarea: Tarea []): any{
//   console.log(tarea);
//   return tarea;
//   }

  ngOnInit(): void {
   this.tareasService.getTareas().subscribe(data => {
   this.tareas = data;
    });
     }
}
