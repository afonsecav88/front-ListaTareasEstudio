import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Tarea } from '../Interfaces/tarea.interface';




@Injectable({
  providedIn: 'root'
})
export class TareasService {

  apiURL:string = "https://localhost:44308/Tareas";

  constructor(private http:HttpClient) { }

nuevaTarea(tarea:Tarea){
  let fromBody = JSON.stringify(tarea) ;
  let headers = new HttpHeaders({
  'Content-Type':'application/json' 
  });
return this.http.post(this.apiURL,fromBody,{ headers}) 
  
}

getConfig() { 
  return this.http.get(this.apiURL); 
}

}


