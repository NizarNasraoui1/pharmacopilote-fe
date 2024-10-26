import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageResponse } from 'src/app/shared/models/page-response';
import { HttpUtilService } from 'src/app/util/service/http-util.service';

const BATCH_ASSESSMENT_API_URL = '/api/pharmacopilote/batch-assessment';

@Injectable({
    providedIn: 'root'
})
export class BatchAssessmentService {

    constructor(private http: HttpClient,private httpUtil: HttpUtilService) { }

    getBatchAssessment(files,productForm): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('product-form',productForm);
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }
        return this.http.post(`${BATCH_ASSESSMENT_API_URL}/upload`, formData);
    }

    getReport(batchId,caseId): Observable<any> {
        return this.http.get(`${BATCH_ASSESSMENT_API_URL}/report/${batchId}/${caseId}`, { responseType: 'text' });
    }

    saveBatchAssessment(batchId,name): Observable<any> {
        let saveRequest = {
            name: name,
            id: batchId
        }
        return this.http.post(`${BATCH_ASSESSMENT_API_URL}`,saveRequest);
    }

    searchMedicalAssessmentBatch(page:number,pageSize:number,searchQuestionnaireRequest:any):Observable<PageResponse<any>>{
        return this.httpUtil.post(`${BATCH_ASSESSMENT_API_URL}/search`,searchQuestionnaireRequest,{page:page,pageSize:pageSize});
      }

      getAssessmentBatchById(id): Observable<any> {
        return this.http.get(`${BATCH_ASSESSMENT_API_URL}/${id}`);
      }
}
