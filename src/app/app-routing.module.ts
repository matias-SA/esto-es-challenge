import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProyectListComponent } from './components/proyect-list/proyect-list.component';

const routes: Routes = [
  { path: '', component: ProyectListComponent },
  { path: 'add-project', component: ProjectFormComponent },
  { path: 'edit-project/:projectId', component: ProjectFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
