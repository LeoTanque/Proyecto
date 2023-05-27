import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TareasService } from 'src/app/tareas.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  formulario!: FormGroup;
  tareas: any[]=[];
  constructor(private tareasService: TareasService, private http: HttpClient, private routes:Router,) {}

  ngOnInit() {
    this.tareasService.getTareas().subscribe(tareas => {
      this.tareas = tareas;
      console.log(tareas)
    });

  }

  /*eliminarTarea(id: string) {
    this.tareasService.eliminarTarea(id).subscribe(res=>{
      (console.log(res))
      this.tareas=this.tareas.filter(tarea=>tarea.id!==id);
    });
  }*/
  eliminarTarea(id: string) {
    const confirmarEliminacion = confirm('¿Desea eliminar esta tarea?');
    if (confirmarEliminacion) {
      this.tareasService.eliminarTarea(id).subscribe(res => {
        console.log(res);
        this.tareas = this.tareas.filter(tarea => tarea.id !== id);
      });
    }
  }
  

}
