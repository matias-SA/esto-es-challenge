import { Injectable } from '@angular/core';
import { Project } from '../interface/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  projects: Project[] = [
    {
      projectName: 'Landing page',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      projectManager: 'Nicolas Beltran',
      assignedTo: 'Ignacio Truffa',
      status: 'Enabled',
      creationDate: new Date(2020, 9, 9, 10, 30, 0),
      id: Math.floor(Math.random() * 1000),
    },
    {
      projectName: 'E-Commerce Shop',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      projectManager: 'Nicolas Beltran',
      assignedTo: 'Ignacio Truffa',
      status: 'Enabled',
      creationDate: new Date(2020, 9, 9, 10, 30, 0),
      id: Math.floor(Math.random() * 1000),
    },
    {
      projectName: 'CRM Linkroom',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      projectManager: 'Nicolas Beltran',
      assignedTo: 'Ignacio Truffa',
      status: 'Enabled',
      creationDate: new Date(2020, 9, 9, 10, 30, 0),
      id: Math.floor(Math.random() * 1000),
    },
  ];
  projectManager: any[] = [
    'Nicolas Beltran',
    'Stephen Hawking',
    'Lionel Messi',
  ];
  peopleAssignedTo: any[] = [
    'Ignacio Truffa',
    'Matias Soto',
    'Javier Mascherano',
  ];
  constructor() {}

  getProjects() {
    return this.projects;
  }
  getProjectManager() {
    return this.projectManager;
  }
  getPeopleAssignedTo() {
    return this.peopleAssignedTo;
  }
  getProjectById(id) {
    return this.projects.find((project) => project.id == id);
  }
  deleteProject(id) {
    var removeIndex = this.projects
      .map((item) => {
        return item.id;
      })
      .indexOf(id);
    this.projects.splice(removeIndex, 1);
  }
  saveProyect(proyectData) {
    this.projects.unshift(proyectData);
  }
  updateProyect(projectEdit) {
    const proyectEditIndex = this.projects.findIndex(
      (project) => project.id == projectEdit.id
    );
    this.projects[proyectEditIndex] = projectEdit;
  }
}
