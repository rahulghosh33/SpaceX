import { Component, OnInit } from '@angular/core';
import { ProjectList } from 'src/app/models/project';
import { ApiService } from './../../shared/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  projectList: ProjectList;
  stateDataReady: boolean;

  constructor(
    private apiService: ApiService
  ) { 
    this.stateDataReady = false;
  }

  ngOnInit(): void {
    this.populateProjects();
  }

  populateProjects() {
    this.apiService.getAllProjects().subscribe(
      response => {
        console.log('Response =>', response);
        this.projectList = response;
        this.stateDataReady = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  populateWithFilters(filters) {
    let filterOptions = ''
    let year = '';
    let land = '';
    let launch = '';
    if (filters.year !== '') {
      year = '&launch_year=' + filters.year;
    }
    if (filters.land !== '') {
      land = '&land_success=' + filters.land;
    }
    if (filters.launch !== '') {
      launch = '&launch_success=' + filters.launch;
    }
    filterOptions = launch + land + year;
    this.apiService.getProjectsWithFilters(filterOptions).subscribe(
      response => {
        console.log('Response =>', response);
        this.projectList = response;
        this.stateDataReady = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  filtersChanged(value) {
    console.log('filters =>', value);
    this.populateWithFilters(value);
  }


}
