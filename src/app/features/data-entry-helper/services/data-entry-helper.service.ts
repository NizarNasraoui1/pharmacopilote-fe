import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageResponse } from 'src/app/shared/models/page-response';
import { HttpUtilService } from 'src/app/util/service/http-util.service';

const DATA_ENTRY_HELPER_API_URL = '/api/pharmacopilote/data-entry-helper';

@Injectable({
  providedIn: 'root'
})
export class DataEntryHelperService {

  constructor(private httpUtil: HttpUtilService) { }

  getDataEntryFile(entryContent): Observable<any> {
    return this.httpUtil.post(`${DATA_ENTRY_HELPER_API_URL}/helper`,entryContent);
  }

  saveDataEntryHelperData(data):Observable<any>{
    return this.httpUtil.post(`${DATA_ENTRY_HELPER_API_URL}`,data);
  }

  search(page:number,pageSize:number,searchQuestionnaireRequest:any):Observable<PageResponse<any>>{
    return this.httpUtil.post(`${DATA_ENTRY_HELPER_API_URL}/search`,searchQuestionnaireRequest,{page:page,pageSize:pageSize});
  }
}
