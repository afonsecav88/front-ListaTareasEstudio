import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Tarea } from '../Interfaces/tarea.interface';


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  apiURL = 'https://localhost:44308/Tareas';

  constructor(private http: HttpClient) { }

// Metodo para obtener todas las tareas de la BD
  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiURL);
  }

// Metodo para Insertar una tarea en la BD
  postTarea(tarea: Tarea): Observable<Tarea>{
  const fromBody = JSON.stringify(tarea) ;
  const headers = new HttpHeaders({
  'Content-Type': 'application/json'
  });
  return this.http.post<Tarea>(this.apiURL, fromBody, { headers});
}

// Metodo para Actualizar una tarea en la BD
// tslint:disable-next-line: typedef
putTarea(id: number, tarea: Tarea){
}

// Metodo para Borrar una tarea en la BD
// tslint:disable-next-line: typedef
deleteTarea(id: number){
 const url = `${this.apiURL}/${id}`;
 return this.http.delete(url);
}


}


