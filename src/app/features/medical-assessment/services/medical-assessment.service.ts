import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageResponse } from 'src/app/shared/models/page-response';
import { HttpUtilService } from 'src/app/util/service/http-util.service';

const MEDICAL_ASSESSMENT_REPORT_API_URL = '/api/pharmacopilote/medical-assessments-report';
const MEDICAL_ASSESSMENT_API_URL = '/api/pharmacopilote/medical-assessments';

@Injectable({
  providedIn: 'root'
})
export class MedicalAssessmentService {

  constructor(private httpUtil: HttpUtilService, private http: HttpClient) { }

  getMedicalAssessmentReport(medicalAssessment): Observable<any> {
    return this.uploadData(medicalAssessment.caseExportFile, medicalAssessment);
  }

  saveMedicalAssessmentReport(name,report): Observable<any> {
    let medicalAssessment = {
        name: name,
        report : report
    };
    return this.httpUtil.post(MEDICAL_ASSESSMENT_API_URL, medicalAssessment);
  }

  uploadData(file: any, jsonData: any): Observable<any> {
    delete jsonData.caseExportFile;
    const formData: FormData = new FormData();

    // Append the file
    if(file){
        formData.append('case-export-file', file);
    }
    else{
        formData.append('case-export-file',null);
    }
    formData.append('medical-assessment-data', JSON.stringify(jsonData));

    return this.http.post(MEDICAL_ASSESSMENT_REPORT_API_URL, formData, { responseType: 'text' });
  }

  searchMedicalAssessments(page:number,pageSize:number,searchQuestionnaireRequest:any):Observable<PageResponse<any>>{
    return this.httpUtil.post(`${MEDICAL_ASSESSMENT_API_URL}/search`,searchQuestionnaireRequest,{page:page,pageSize:pageSize});
  }
}
