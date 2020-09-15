import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectList } from './../../models/project';
import { ApiService } from './../../shared/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  projectList: ProjectList;
  stateDataReady: boolean;
  filterParams = {
    launch: '',
    land: '',
    year: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {
    this.stateDataReady = false;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('Params =>', params);
      this.generateFilterParams(params);
    });
  }

  generateFilterParams(params): void {
    if (params.launch_success) {
      this.filterParams.launch = params.launch_success;
    }
    if (params.land_success) {
      this.filterParams.land = params.land_success;
    }
    if (params.launch_year) {
      this.filterParams.year = params.launch_year;
    }
    this.populateWithFilters(this.filterParams);
  }

  populateWithFilters(filters): void {
    let filterOptions = '';
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

  filtersChanged(filters): void {
    console.log('filters Changed =>', filters);
    const queryParams = {};
    if (filters.year !== '') {
      queryParams['launch_year'] = filters.year;
    }
    if (filters.land !== '') {
      queryParams['land_success'] = filters.land;
    }
    if (filters.launch !== '') {
      queryParams['launch_success'] = filters.launch;
    }
    console.log('queryParams =>', queryParams);
    this.router.navigate([], { queryParams });
  }


}
