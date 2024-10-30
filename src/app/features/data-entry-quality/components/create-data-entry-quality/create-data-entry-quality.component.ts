import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadComponent } from 'src/app/shared/components/file-upload/file-upload.component';
import { DataEntryQualityService } from '../../services/data-entry-quality.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { SafeHtmlPipe } from 'src/app/shared/pipes/safe-html.pipe';

@Component({
  selector: 'vigihelp-create-data-entry-quality',
  standalone: true,
  imports: [CommonModule,ButtonModule,DialogModule,FieldsetModule,FileUploadComponent,ReactiveFormsModule,FormsModule,ProgressSpinnerModule,InputTextareaModule,InputTextModule,SafeHtmlPipe],
  templateUrl: './create-data-entry-quality.component.html',
  styleUrl: './create-data-entry-quality.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CreateDataEntryQualityComponent implements OnInit {

    dataEntryQualityForm: FormGroup;
    models = [];
    displayReport = false;
    showReportClicked = false;
    report;
    visible: boolean = false;
    name: string;
    saved = false;
    saveErrorMsg = "";

    constructor(private formBuilder:FormBuilder,private dataEntryQulityService:DataEntryQualityService,private messageService:MessageService){}

    ngOnInit(): void {
        this.initForm();
    }

    initForm(){
        this.dataEntryQualityForm = this.formBuilder.group({
            verbatim: ['', Validators.required],
            caseExportFile: ['', Validators.required]
          });
    }

    getErrorMsg(){
        if(this.dataEntryQualityForm.value.report==''){
            return 'Please fill in the medical review to evaluate';
        }
        return null;
    }

    submit(){
        if(this.getErrorMsg()){
            this.messageService.add({severity:'warn', summary: 'Warn', detail: this.getErrorMsg()});
            return;
        }
        this.showReportClicked = true;
        this.dataEntryQulityService.getQualityControlReport(this.dataEntryQualityForm.value).subscribe((res)=>{
            this.report = res;
            this.displayReport = true;
        });
    }

    onSave(){
        if(!this.name || this.name===''){
            this.saveErrorMsg = "Please fill in the name";
            return;
        }
        this.showDialog();
        this.dataEntryQulityService.saveQualityControlReport(this.name,this.report).subscribe((res)=>{
            this.visible = false;
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Report saved'});
        })
      }

      showDialog() {
        this.visible = true;
      }

}
