import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TareasService } from 'src/app/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit{
  tareaForm: FormGroup; 
  tarea: any;
  constructor(private formBuilder: FormBuilder, private tareasService: TareasService, private routes:Router, private active:ActivatedRoute) {
    this.tareaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit() {
    
  }

  agregarTarea() {
    const tarea = this.tareaForm.value;
    this.tareasService.agregarTarea(tarea).subscribe(
      res=>{console.log(res)}
    );
    this.tareaForm.reset();
    this.routes.navigate(['lista'])
  }
}
