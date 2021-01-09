import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from '../../services/tareas.service';
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

constructor( private route: ActivatedRoute, private tareasService: TareasService ) {
this.forma = new FormGroup({
  titulo : new FormControl( '', Validators.required ),
  descripcion: new FormControl('', Validators.required),
  estado : new FormControl('', [Validators.required])
}); }

  ngOnInit(): void {
  this.route.params.subscribe(params => {
  this.id = params.id; });
  // console.log(this.id);

  this.tareasService.getTareaById(this.id).subscribe(data => {
  this.tarea = data;
  this.tarea.id = data.id;
  // estableciendo valores del formulario por defecto
  this.forma.setValue({
    titulo : this.tarea.titulo,
    descripcion  : this.tarea.descripcion,
    estado : this.tarea.estado
  });
  // console.log(this.tarea);
  });
  }

  // El problema es que no estoy pasandole el id y que this.tarea esta vacio
  // tslint:disable-next-line: typedef
  guardarCambios( ){
  this.tareasService.putTarea(this.id, this.tarea).subscribe(data => {
   console.log(this.tarea); });
  }

  // Obteniendo los datos de la tarea con el id del url
//     getObjectByDefault(): any {
//       // this.route.snapshot.paramMap.get('id'); ---->  Otra via de obtener el id a traves del ActivatedRoute
//  this.route.params.subscribe( params => {
//   // const id = params[ 'id']; ---->  Otra via capturando el parametro como elementos de un arreglo
//   const Id = params[ `id`]; // ----> una via con string literales capturando el parametro id definido en el app-routing
//   console.log( 'Mostrando el id ' + Id);
//   return this.tareasService.getTareaById(Id).subscribe();
// }); }
}
