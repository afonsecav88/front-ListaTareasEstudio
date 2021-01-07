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

  getTareas(): Observable<any> {
    return this.http.get(this.apiURL);
  }

// tslint:disable-next-line: typedef
postTarea(tarea: Tarea){
  const fromBody = JSON.stringify(tarea) ;
  const headers = new HttpHeaders({
  'Content-Type': 'application/json'
  });
  return this.http.post(this.apiURL, fromBody, { headers});

}


}


