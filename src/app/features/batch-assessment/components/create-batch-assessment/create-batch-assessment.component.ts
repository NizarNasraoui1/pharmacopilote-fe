import { Component, OnInit } from '@angular/core';
import { ButtonStatusEnum } from '../../models/button-status.enum';
import { BatchAssessmentService } from '../../services/batch-assessment.service';

@Component({
  selector: 'pharmacopilote-create-batch-assessment',
  templateUrl: './create-batch-assessment.component.html',
  styleUrl: './create-batch-assessment.component.scss'
})
export class CreateBatchAssessmentComponent implements OnInit {
    buttonStatusEnum = ButtonStatusEnum;
    visible: boolean = false;
    report = "";
    assessmentBatch;
    batchUploaded = false;
    productForm;
    reports = [];
    files;
    batchId;

    constructor(private batchAssessmentService:BatchAssessmentService){}

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    onFileUploaded(event){
        this.files = event;
    }

    submitFilesAndProductForm(){
        this.batchAssessmentService.getBatchAssessment(this.files,this.productForm).subscribe((res)=>{
            this.assessmentBatch = res.medicalEvents;
            this.generateReportList();
            this.batchId = res.id;
            this.batchUploaded = true;
        });
    }

    getReport(caseId){
        this.updateReportStatus(caseId,ButtonStatusEnum.LOADING);
        this.batchAssessmentService.getReport(this.batchId,caseId).subscribe((res)=>{
            this.report = res;
            console.log(this.report);
            this.updateReportStatus(caseId,ButtonStatusEnum.LOADED);
        });
    }

    showDialog(i) {
        this.report = this.reports[i].report;
        this.visible = true;
    }

    generateReportList(){
        this.reports = [];
        this.assessmentBatch.forEach((batch)=>{
            this.reports.push({
                "id":batch.id,
                "status":ButtonStatusEnum.NOT_CLICKED,
                "report":""
            })
        })
    }

    updateReportStatus(caseId, status) {
        this.reports = this.reports.map((report) => {
          if (report.id === caseId) {
            report.status = status;
          }
          return report;
        });
      }


}
