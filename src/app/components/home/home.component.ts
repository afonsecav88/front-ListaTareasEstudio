import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../Interfaces/tarea.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tareasService: TareasService, private router: Router) { }

  tareas: Tarea [] ;

contador: number ;


eliminarTarea(id: number): any{
  console.log(id);
  return this.tareasService.deleteTarea(id).subscribe(data => {
  this.router.navigate(['/home']);
  }, error => console.error());

}

  ngOnInit(): void {
   this.tareasService.getTareas().subscribe(data => {
   this.tareas = data;
   console.log(this.tareas);
    });
     }
}
