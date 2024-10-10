import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUtilService } from 'src/app/util/service/http-util.service';

const QUALITY_CONTROL_REPORT_API_URL = '/api/pharmacopilote/quality-control-report';

@Injectable({
  providedIn: 'root'
})
export class QualityControlServiceService {
    constructor(private httpUtil: HttpUtilService, private http: HttpClient) { }

  getQualityControlReport(medicalAssessment): Observable<any> {
    return this.uploadData(medicalAssessment , medicalAssessment.caseExportFile);
  }

  uploadData(jsonData: any,file: any): Observable<any> {
    delete jsonData.caseExportFile;
    const formData: FormData = new FormData();
    
    if(file){
        formData.append('case-export-file', file);
    }
    else{
        formData.append('case-export-file',null);
    }
    formData.append('medical-assessment-data', JSON.stringify(jsonData));

    return this.http.post(QUALITY_CONTROL_REPORT_API_URL, formData, { responseType: 'text' });
  }
}
