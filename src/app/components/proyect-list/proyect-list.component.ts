import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectServiceService } from 'src/app/services/project-service.service';
import { Project } from '../../interface/project';

@Component({
  selector: 'app-proyect-list',
  templateUrl: './proyect-list.component.html',
  styleUrls: ['./proyect-list.component.sass'],
})
export class ProyectListComponent implements OnInit {
  p: number = 1;
  nameProjectFilted: string;
  public projects: Project[] = [];

  constructor(
    private projectSvc: ProjectServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projects = this.projectSvc.getProjects();
  }
  delete(id) {
    if (!confirm('¿Esta Seguro de eliminar este producto?')) return;
    this.projectSvc.deleteProject(id);
  }
  editProject(id) {
    this.router.navigate(['/edit-project', id]);
  }

  search() {
    if (this.nameProjectFilted != '') {
      this.projects = this.projects.filter((project) => {
        return project.projectName
          .toLocaleLowerCase()
          .match(this.nameProjectFilted.toLocaleLowerCase());
      });
    } else if (this.nameProjectFilted == '') {
      this.ngOnInit();
    }
  }
}
