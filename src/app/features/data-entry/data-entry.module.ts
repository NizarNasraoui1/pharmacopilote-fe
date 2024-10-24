import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataEntryRoutingModule } from './data-entry-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadComponent } from 'src/app/shared/components/file-upload/file-upload.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { CreateDataEntryComponent } from './components/create-data-entry/create-data-entry.component';


@NgModule({
  declarations: [CreateDataEntryComponent],
  imports: [
    CommonModule,
    DataEntryRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    FileUploadComponent,
    InputTextareaModule,
    DropdownModule,
    FieldsetModule,
    ProgressSpinnerModule,
    ButtonModule
  ]
})
export class DataEntryModule { }
