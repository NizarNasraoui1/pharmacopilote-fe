import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PageResponse } from 'src/app/shared/models/page-response';

const DATA_ENTRY_API_URL = '/api/vigihelp/data-entry/';
@Injectable({
  providedIn: 'root'
})
export class DataEntryService {

  constructor(private http: HttpClient) { }

  getDataEntryFile(formValue): Observable<Blob> {
    return this.http.post(`${DATA_ENTRY_API_URL}/file`, formValue.verbatim, { responseType: 'blob' });
  }

  searchDataEntryFile(page:number,pageSize:number,searchQuestionnaireRequest:any):Observable<PageResponse<any>>{
    // return this.httpUtil.post(`${BATCH_ASSESSMENT_API_URL}/search`,searchQuestionnaireRequest,{page:page,pageSize:pageSize});
    return of(null);

}
}

