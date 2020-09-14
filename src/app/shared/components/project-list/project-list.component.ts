import { Component, Input, OnInit } from '@angular/core';
import { ProjectList } from 'src/app/models/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input() projectData: ProjectList;

  constructor() { }

  ngOnInit(): void {
    console.log('Project Data =>', this.projectData);
  }

}
