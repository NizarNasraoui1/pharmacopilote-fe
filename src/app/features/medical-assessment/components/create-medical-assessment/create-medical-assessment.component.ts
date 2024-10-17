import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicalAssessmentService } from '../../services/medical-assessment.service';
import { ModelService } from 'src/app/features/models/services/model.service';

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

    constructor(private formBuilder: FormBuilder,private medicalAssessmentService:MedicalAssessmentService,private modelService:ModelService) {
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
        this.showReportClicked = true;
        this.medicalAssessmentService.getMedicalAssessmentReport(this.medicalAssessmentForm.value).subscribe((res)=>{
            this.report = res;
            console.log(this.report);
            this.displayReport = true;
            console.log(this.displayReport);
        });
    }

    getModels(){
        this.modelService.getModels().subscribe((res)=>{
            this.models = res;
        });
    }
}
