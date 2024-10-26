import { Component, OnInit } from '@angular/core';
import { ButtonStatusEnum } from '../../models/button-status.enum';
import { BatchAssessmentService } from '../../services/batch-assessment.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'pharmacopilote-create-batch-assessment',
  templateUrl: './create-batch-assessment.component.html',
  styleUrl: './create-batch-assessment.component.scss'
})
export class CreateBatchAssessmentComponent implements OnInit {
    buttonStatusEnum = ButtonStatusEnum;
    reportVisible: boolean = false;
    report = "";
    assessmentBatch;
    batchUploaded = false;
    productForm;
    reports = [];
    files;
    batchId;
    visible: boolean = false;
    name: string;
    saved = false;
    saveErrorMsg = "";

    constructor(private batchAssessmentService:BatchAssessmentService,private messageService:MessageService){}

    ngOnInit(): void {
    }

    onFileUploaded(event){
        this.files = event;
    }

    submitFilesAndProductForm(){
        console.log(this.getFormErrorMsg());
        if(this.getFormErrorMsg()!=null){
            this.messageService.add({severity:'warn', summary: 'Warn', detail: this.getFormErrorMsg()});
            return;
        }
        this.batchAssessmentService.getBatchAssessment(this.files,this.productForm).subscribe((res)=>{
            this.assessmentBatch = res.medicalEvents;
            this.generateReportList();
            this.batchId = res.id;
            this.batchUploaded = true;
        });
    }

    getFormErrorMsg(){
        if(!this.productForm){
            return "Please fill in the product form";
        }
        if(!this.files){
            return "Please upload files";
        }
        return null;
    }

    getReport(caseId){
        this.updateReportStatusAndContent(caseId,ButtonStatusEnum.LOADING);
        this.batchAssessmentService.getReport(this.batchId,caseId).subscribe((res)=>{
            this.updateReportStatusAndContent(caseId,ButtonStatusEnum.LOADED,res);
        });
    }

    showReport(i) {
        this.report = this.reports[i].content;
        this.reportVisible = true;
    }

    generateReportList(){
        this.assessmentBatch.forEach((batch)=>{
            this.reports = [...this.reports,{
                "id":batch.id,
                "status":ButtonStatusEnum.NOT_CLICKED,
                "content":""
            }];
        });
    }

    updateReportStatusAndContent(caseId, status, content?) {
        this.reports = this.reports.map((e) => {
          if (e.id === caseId) {
            e.status = status;
            e.content = content;
          }
          return e;
        });
      }

      onSave(){
        if(!this.name || this.name===''){
            this.saveErrorMsg = "Please fill in the name";
            return;
        }
        this.showDialog();
        this.batchAssessmentService.saveBatchAssessment(this.batchId,this.name).subscribe((res)=>{
            this.visible = false;
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Medical Batch Assessment saved'});
        })
      }

      showDialog() {
        this.visible = true;
      }


}
