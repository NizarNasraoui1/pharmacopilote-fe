import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchAssessmentRoutingModule } from './batch-assessment-routing.module';
import { CreateBatchAssessmentComponent } from './components/create-batch-assessment/create-batch-assessment.component';
import { SearchBatchAssessmentComponent } from './components/search-batch-assessment/search-batch-assessment.component';
import { TableModule } from 'primeng/table';
import { FileUploadComponent } from 'src/app/shared/components/file-upload/file-upload.component';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchBatchAssessmentComponent,
    CreateBatchAssessmentComponent,
  ],
  imports: [
    CommonModule,
    BatchAssessmentRoutingModule,
    TableModule,
    FileUploadComponent,
    DialogModule,
    ProgressSpinnerModule,
    ButtonModule,
    MatProgressSpinnerModule,
    InputTextareaModule,
    FormsModule
  ]
})
export class BatchAssessmentModule { }
