import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpUtilService } from 'src/app/util/service/http-util.service';

const MEDICAL_ASSESSMENT_REPORT_API_URL = '/api/pharmacopilote/medical-assessments-report';

@Injectable({
  providedIn: 'root'
})
export class MedicalAssessmentService {

  constructor(private httpUtil: HttpUtilService,private http: HttpClient) { }

  getMedicalAssessmentReport(medicalAssessment): Observable<any> {
    return this.uploadData(medicalAssessment.caseExportFile, medicalAssessment);
  }

  uploadData(file: File, jsonData: any) {
    delete jsonData.caseExportFile;
    const formData: FormData = new FormData();

    // Append the file
    formData.append('file', file, file.name);

    // Append the JSON as a string
    formData.append('jsonData', new Blob([JSON.stringify(jsonData)], { type: 'application/json' }));

    return this.http.post(MEDICAL_ASSESSMENT_REPORT_API_URL, formData);
  }
}
