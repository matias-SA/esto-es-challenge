import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../interface/project';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Project[], arg: string): any {
    if (!arg) return value;
    const resultProjects = [];
    for (const project of value) {
      if (project.projectName.toLowerCase().indexOf(arg.toLowerCase()) != -1) {
        resultProjects.push(project);
      }
    }
    return resultProjects;
    // console.log(value.projectName);

    // return 0;
  }
}
