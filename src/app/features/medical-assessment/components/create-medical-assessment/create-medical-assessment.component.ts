import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicalAssessmentService } from '../../services/medical-assessment.service';
import { ModelService } from 'src/app/features/models/services/model.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'pharmacopilote-create-medical-assessment',
  templateUrl: './create-medical-assessment.component.html',
  styleUrls: ['./create-medical-assessment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateMedicalAssessmentComponent implements OnInit {
    medicalAssessmentForm: FormGroup;
    models = [];
    displayReport = false;
    showReportClicked = false;
    report;
    methods = [{ name: 'FRENSH',value: false},{name:'WHO',value:true}];

    constructor(private formBuilder: FormBuilder,private medicalAssessmentService:MedicalAssessmentService,private modelService:ModelService,private messageService:MessageService) {
    }
    ngOnInit(): void {
        this.initForm();
        this.getModels();
    }

    initForm(){
        this.medicalAssessmentForm = this.formBuilder.group({
            businessId: ['', Validators.required],
            modelId: ['', Validators.required],
            verbatim: ['', Validators.required],
            caseExportFile: ['', Validators.required],
            rcpUrl: ['', Validators.required],
            isWho: ['', Validators.required]
          });
    }

    submit(){
        if(this.getErrorMsg()){
            this.messageService.add({severity:'warn', summary: 'Warn', detail: this.getErrorMsg()});
            return;
        }
        this.showReportClicked = true;
        this.medicalAssessmentService.getMedicalAssessmentReport(this.medicalAssessmentForm.value).subscribe((res)=>{
            this.report = res;
            this.displayReport = true;
        });
    }

    getErrorMsg(){
        if(this.medicalAssessmentForm.value.isWho==null){
            return 'Please fill in the assessment method';
        }
        if(this.medicalAssessmentForm.value.modelId==''){
            return 'Please fill in the model';
        }
        if(!this.medicalAssessmentForm.value.caseExportFile){
            return 'Please upload a case export file';
        }
        return null;
    }

    getModels(){
        this.modelService.getModels().subscribe((res)=>{
            this.models = res;
        });
    }
}
