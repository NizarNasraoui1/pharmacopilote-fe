import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const QUALITY_CONTROL_REPORT_API_URL = '/api/pharmacopilote/data-entry-quality-report';
const QUALITY_CONTROL_API_URL = '/api/pharmacopilote/data-entry-quality';

@Injectable({
  providedIn: 'root'
})
export class DataEntryQualityService {

  constructor(private http: HttpClient) { }

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
}
