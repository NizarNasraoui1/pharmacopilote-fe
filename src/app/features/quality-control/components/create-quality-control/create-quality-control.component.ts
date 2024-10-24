import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QualityControlServiceService } from '../../services/quality-control-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'pharmacopilote-create-quality-control',
  templateUrl: './create-quality-control.component.html',
  styleUrl: './create-quality-control.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CreateQualityControlComponent implements OnInit {
    medicalAssessmentForm: FormGroup;
    models = [];
    displayReport = false;
    showReportClicked = false;
    report;
    visible: boolean = false;
    name: string;
    saved = false;
    saveErrorMsg = "";

    constructor(private formBuilder: FormBuilder,private qualityControlService:QualityControlServiceService,private messageService:MessageService) {
    }
    ngOnInit(): void {
        this.initForm();
    }

    initForm(){
        this.medicalAssessmentForm = this.formBuilder.group({
            businessId: ['', Validators.required],
            verbatim: ['', Validators.required],
            rcpUrl: ['', Validators.required],
            report : ['', Validators.required],
            caseExportFile: ['', Validators.required]
          });
    }

    getErrorMsg(){
        if(this.medicalAssessmentForm.value.report==''){
            return 'Please fill in the medical review to evaluate';
        }
        return null;
    }

    submit(){
        if(this.getErrorMsg()){
            this.messageService.add({severity:'warn', summary: 'Warn', detail: this.getErrorMsg()});
            return;
        }
        this.showReportClicked = true;
        this.qualityControlService.getQualityControlReport(this.medicalAssessmentForm.value).subscribe((res)=>{
            this.report = res;
            this.displayReport = true;
        });
    }

    onSave(){
        if(!this.name || this.name===''){
            this.saveErrorMsg = "Please fill in the name";
            return;
        }
        this.showDialog();
        this.qualityControlService.saveMedicalAssessmentReport(this.name,this.report).subscribe((res)=>{
            this.visible = false;
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Medical Assessment saved'});
        })
      }

      showDialog() {
        this.visible = true;
      }
}
