import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PageResponse } from 'src/app/shared/models/page-response';
import { HttpUtilService } from 'src/app/util/service/http-util.service';

const QUALITY_CONTROL_REPORT_API_URL = '/api/pharmacopilote/data-entry-quality-report';
const QUALITY_CONTROL_API_URL = '/api/pharmacopilote/data-entry-quality';

@Injectable({
  providedIn: 'root'
})
export class DataEntryQualityService {

  constructor(private http: HttpClient,private httpUtil: HttpUtilService) { }

  getQualityControlReport(medicalAssessment): Observable<any> {
    return this.uploadData(medicalAssessment.verbatim , medicalAssessment.caseExportFile);
  }

  uploadData(verbatim: any,file: any): Observable<any> {
    const formData: FormData = new FormData();

    if(file){
        formData.append('case-export-file', file);
    }
    else{
        formData.append('case-export-file',null);
    }
    formData.append('verbatim', verbatim);

    return this.http.post(QUALITY_CONTROL_REPORT_API_URL, formData, { responseType: 'text' });
  }

  saveQualityControlReport(name,report): Observable<any> {
    let saveRequest = {
        name: name,
        report: report
    };
    return this.http.post(QUALITY_CONTROL_API_URL,saveRequest);
  }

  searchDataEntryQualityReport(page:number,pageSize:number,searchQuestionnaireRequest:any):Observable<PageResponse<any>>{
    return this.httpUtil.post(`${QUALITY_CONTROL_API_URL}/search`,searchQuestionnaireRequest,{page:page,pageSize:pageSize});
  }
}
