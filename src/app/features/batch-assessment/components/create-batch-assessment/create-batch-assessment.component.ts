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
    fileUploaded = false;

    reports = [];

    constructor(private batchAssessmentService:BatchAssessmentService){}

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    onFileUploaded(event){
        this.fileUploaded = true;
        this.getAssessmentBatch(event);
    }


    showDialog(i) {
        this.report = this.reports[i].report;
        this.visible = true;
    }

    getAssessmentBatch(file){
        console.log(file);
        this.batchAssessmentService.getBatchAssessment(file).subscribe((res)=>{
            this.assessmentBatch = res.medicalEvents;
            this.generateReportList();
        });
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


}
