import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { AppConst } from './../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllStates(): Observable<any> {
		const request = {
			'url': AppConst.API_BASE_URL + ''
    };
    
		return this.httpClient.get<any>(request.url);
  }
}
