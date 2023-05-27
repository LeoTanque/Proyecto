import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './componentes/lista/lista.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: 'tareas', component: TareasComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'editar/:id', component: EditarComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
