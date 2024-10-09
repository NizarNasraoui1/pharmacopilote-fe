import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

    constructor(private formBuilder: FormBuilder,private medicalAssessmentService:MedicalAssessmentService,private modelService:ModelService) {
    }
    ngOnInit(): void {
        this.initForm();
        this.getModels();
    }

    initForm(){
        this.medicalAssessmentForm = this.formBuilder.group({
            businessId: ['', Validators.required],
            model: ['', Validators.required],
            verbatim: ['', Validators.required],
            caseExportFile: ['', Validators.required],
            rcpUrl: ['', Validators.required]
          });
    }

    submit(){
        console.log(this.medicalAssessmentForm.value);
        this.showReportClicked = true;
        this.medicalAssessmentService.getMedicalAssessmentReport(this.medicalAssessmentForm.value).subscribe();
    }

    getModels(){
        this.modelService.getModels().subscribe((res)=>{
            this.models = res;
        });
    }
}
