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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { InputMaskModule } from 'primeng/inputmask';

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
    ButtonModule,
    ReactiveFormsModule,
    DialogModule,
    FormsModule,
    PaginatorModule,
    TableModule,
    InputMaskModule


  ]
})
export class MedicalAssessmentModule { }
