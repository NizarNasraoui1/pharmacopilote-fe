import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalAssessmentRoutingModule } from './medical-assessment-routing.module';
import { CreateMedicalAssessmentComponent } from './components/create-medical-assessment/create-medical-assessment.component';
import { SearchMedicalAssessmentComponent } from './components/search-medical-assessment/search-medical-assessment.component';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadComponent } from 'src/app/shared/components/file-upload/file-upload.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    CreateMedicalAssessmentComponent,
    SearchMedicalAssessmentComponent
  ],
  imports: [
    CommonModule,
    MedicalAssessmentRoutingModule,
    InputTextModule,
    FileUploadComponent,
    InputTextareaModule,
    DropdownModule,
    FieldsetModule,
    ProgressSpinnerModule,
    ButtonModule
  ]
})
export class MedicalAssessmentModule { }
