import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectServiceService } from 'src/app/services/project-service.service';
import { Project } from '../../interface/project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.sass'],
})
export class ProjectFormComponent implements OnInit {
  projectManager: any[] = [];
  assignedTo: any[] = [];
  projectId: number;
  project;

  form: FormGroup = this.fb.group({
    projectName: ['', Validators.required],
    description: ['', Validators.required],
    projectManager: ['', Validators.required],
    assignedTo: ['', Validators.required],
    status: ['Enabled', Validators.required],
  });
  constructor(
    private projectSvc: ProjectServiceService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: Params) => {
      this.projectId = params.projectId;
    });
  }

  ngOnInit(): void {
    this.projectManager = this.projectSvc.projectManager;
    this.assignedTo = this.projectSvc.peopleAssignedTo;
    if (this.projectId) {
      return this.getProject(this.projectId);
    }
  }
  save(projectData) {
    projectData.creationDate = new Date();
    projectData.id = Math.floor(Math.random() * 1000);
    this.projectSvc.saveProyect(projectData);
    this.router.navigate(['/']);
  }

  updateProject(projectData) {
    projectData.id = this.projectId;
    this.projectSvc.updateProyect({ ...this.project, ...projectData });
    this.router.navigate(['/']);
  }

  getProject(id) {
    this.project = this.projectSvc.getProjectById(id);
    this.form.patchValue(this.project);
  }
}
