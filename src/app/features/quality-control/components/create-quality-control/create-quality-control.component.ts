import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelService } from 'src/app/features/models/services/model.service';
import { QualityControlServiceService } from '../../services/quality-control-service.service';

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

    constructor(private formBuilder: FormBuilder,private qualityControlService:QualityControlServiceService) {
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

    submit(){
        this.showReportClicked = true;
        this.qualityControlService.getQualityControlReport(this.medicalAssessmentForm.value).subscribe((res)=>{
            this.report = res;
            this.displayReport = true;
        });
    }
}
