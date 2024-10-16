import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BATCH_ASSESSMENT_REPORT_API_URL = '/api/pharmacopilote/batch-assessment';

@Injectable({
    providedIn: 'root'
})
export class BatchAssessmentService {

    constructor(private http: HttpClient) { }

    getBatchAssessment(files): Observable<any> {
        const formData: FormData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }
        return this.http.post(`${BATCH_ASSESSMENT_REPORT_API_URL}/upload`, formData);
    }
}
