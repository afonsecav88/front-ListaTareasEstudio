import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tareasService: TareasService) { }

  tareas: string [] = [];

  ngOnInit(): void {
   this.tareasService.getTareas().subscribe(data => {
   this.tareas = data;
    });
     }
}
