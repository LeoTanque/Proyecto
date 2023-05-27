import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  apiUrl:string ;
  constructor(private http: HttpClient, private routes:Router ) {
this.apiUrl= 'http://localhost:3000/tasks';
   }
  agregarTarea(tarea: any): Observable<any> {
    console.log(tarea)
    return this.http.post(this.apiUrl, tarea);
  }

  getTareas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  eliminarTarea(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  editarTarea(tarea: any): Observable<any> {
    const url = `${this.apiUrl}/${tarea.id}`;
    return this.http.put(url, tarea);
  }

  getTarea(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }
  
}
