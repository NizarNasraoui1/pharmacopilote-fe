import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageResponse } from 'src/app/shared/models/page-response';
import { HttpUtilService } from 'src/app/util/service/http-util.service';

const DATA_ENTRY_HELPER_API_URL = '/api/vigihelp/data-entry-helper';

@Injectable({
  providedIn: 'root'
})
export class DataEntryHelperService {

  constructor(private httpUtil: HttpUtilService) { }

  getDataEntryFile(entryContent): Observable<any> {
    return this.httpUtil.post(`${DATA_ENTRY_HELPER_API_URL}/report`,entryContent);
  }

  saveDataEntryHelperData(data):Observable<any>{
    return this.httpUtil.post(`${DATA_ENTRY_HELPER_API_URL}`,data);
  }

  search(page:number,pageSize:number,searchQuestionnaireRequest:any):Observable<PageResponse<any>>{
    return this.httpUtil.post(`${DATA_ENTRY_HELPER_API_URL}/search`,searchQuestionnaireRequest,{page:page,pageSize:pageSize});
  }

  getDataEntryHelperById(id):Observable<any>{
    return this.httpUtil.get(`${DATA_ENTRY_HELPER_API_URL}/${id}`);
  }


}
