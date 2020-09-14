import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { AppConst } from './../../app.constants';
import { ProjectList } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProjects(): Observable<ProjectList> {
		const request = {
			'url': AppConst.API_BASE_URL + 'launches?limit=100'
    };
		return this.httpClient.get<ProjectList>(request.url);
  }

  getProjectsWithFilters(param): Observable<ProjectList> {
		const request = {
			'url': AppConst.API_BASE_URL + 'launches?limit=100' + param
    };
		return this.httpClient.get<ProjectList>(request.url);
  }
}
