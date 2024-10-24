import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicalAssessmentService } from '../../services/medical-assessment.service';
import { ModelService } from 'src/app/features/models/services/model.service';
import { MessageService } from 'primeng/api';

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
    report ="a";
    methods = [{ name: 'FRENSH',value: false},{name:'WHO',value:true}];
    visible: boolean = false;
    name: string;
    saved = false;
    saveErrorMsg = "";


    constructor(private formBuilder: FormBuilder,private medicalAssessmentService:MedicalAssessmentService,private modelService:ModelService,private messageService:MessageService) {
    }
    ngOnInit(): void {
        this.initForm();
        this.getModels();
    }

    initForm(){
        this.medicalAssessmentForm = this.formBuilder.group({
            modelId: ['', Validators.required],
            verbatim: ['', Validators.required],
            caseExportFile: ['', Validators.required],
            rcpUrl: ['', Validators.required],
            isWho: [null, Validators.required]
          });
    }

    submit(){
        if(this.getErrorMsg()){
            this.messageService.add({severity:'warn', summary: 'Warn', detail: this.getErrorMsg()});
            return;
        }
        this.showReportClicked = true;
        this.medicalAssessmentService.getMedicalAssessmentReport(this.medicalAssessmentForm.value).subscribe((res)=>{
            this.report = res;
            this.displayReport = true;
        });
    }

    getErrorMsg(){
        if(this.medicalAssessmentForm.value.modelId==''){
            return 'Please fill in the model';
        }
        return null;
    }

    getModels(){
        this.modelService.getModels().subscribe((res)=>{
            this.models = res;
        });
    }

    copyToClipboard(content: string) {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(content).then(() => {
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Report copied to clipboard'});
          });
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = content;
          document.body.appendChild(textArea);
          textArea.select();
            document.execCommand('copy');
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Report copied to clipboard'});
          document.body.removeChild(textArea);
        }
      }

      onSave(){
        if(!this.name || this.name===''){
            this.saveErrorMsg = "Please fill in the name";
            return;
        }
        this.showDialog();
        this.medicalAssessmentService.saveMedicalAssessmentReport(this.name,this.report).subscribe((res)=>{
            this.visible = false;
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Medical Assessment saved'});
        })
      }

      showDialog() {
        this.visible = true;
      }

      refreshPage() {
        location.reload();
    }


}
