import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const DATA_ENTRY_API_URL = '/api/pharmacopilote/data-entry/';
@Injectable({
  providedIn: 'root'
})
export class DataEntryService {

  constructor(private http: HttpClient) { }

  getDataEntryFile(formValue): Observable<Blob> {
    return this.http.post(`${DATA_ENTRY_API_URL}/file`, formValue.verbatim, { responseType: 'blob' });
  }
}

