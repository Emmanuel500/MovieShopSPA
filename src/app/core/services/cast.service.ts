import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Cast } from '../../shared/models/cast'

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http: HttpClient) { }

  //Cast Details
  getCastDetails(id:number): Observable<Cast> {
    return this.http.get<Cast>(`${environment.apiBaseUrl}cast/${id}`)
  }
}
