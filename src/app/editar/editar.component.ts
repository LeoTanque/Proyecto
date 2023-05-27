import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent {
  tareaForm: FormGroup; 
  tarea: any={
    titulo:'',
    descripcion:''
  }
  constructor(private formBuilder: FormBuilder, private tareasService: TareasService, private routes:Router, private active:ActivatedRoute) {
    this.tareaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit() {
   const params = this.active.snapshot.params;
   if(params){
    this.tareasService.getTarea(params['id']).subscribe(
      res=>{
        console.log(res);
        this.tarea=res;

      }
    )
   }

  }

  editarTarea() {
    this.tareasService.editarTarea(this.tarea).subscribe(
      res => {
        console.log(res);
       this.routes.navigate(['lista'])
      },
      error => {
        console.error(error);
        
      }
    );
  }
  }

  

