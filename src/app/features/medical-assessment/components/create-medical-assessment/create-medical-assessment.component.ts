import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pharmacopilote-create-medical-assessment',
  templateUrl: './create-medical-assessment.component.html',
  styleUrls: ['./create-medical-assessment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateMedicalAssessmentComponent {
    cities = [
        { name: 'SEFORA', code: '1' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    displayReport = false;
    showReportClicked = false;

    submit(){
        this.showReportClicked = true;
    }
}
