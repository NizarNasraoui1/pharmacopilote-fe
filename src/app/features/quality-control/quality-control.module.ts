import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadComponent } from 'src/app/shared/components/file-upload/file-upload.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QualityControlRoutingModule } from './quality-control-routing.module';
import { CreateQualityControlComponent } from './components/create-quality-control/create-quality-control.component';
import { DialogModule } from 'primeng/dialog';
import { SafeHtmlPipe } from 'src/app/shared/pipes/safe-html.pipe';


@NgModule({
  declarations: [
    CreateQualityControlComponent
  ],
  imports: [
    CommonModule,
    QualityControlRoutingModule,
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
    SafeHtmlPipe
  ]
})
export class QualityControlModule { }
