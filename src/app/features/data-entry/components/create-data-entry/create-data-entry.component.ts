import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataEntryService } from '../../services/data-entry.service';

@Component({
  selector: 'vigihelp-create-data-entry',
  templateUrl: './create-data-entry.component.html',
  styleUrl: './create-data-entry.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CreateDataEntryComponent implements OnInit{
    createDataEntryForm: FormGroup;
    models = [];
    displayReport = false;
    showReportClicked = false;
    file: Blob;

    constructor(private formBuilder: FormBuilder,private dataEntryService:DataEntryService) {
    }
    ngOnInit(): void {
        this.initForm();
    }

    initForm(){
        this.createDataEntryForm = this.formBuilder.group({
            verbatim: ['', Validators.required]
          });
    }

    submit(){
        this.showReportClicked = true;
        this.dataEntryService.getDataEntryFile(this.createDataEntryForm.value).subscribe((res)=>{
            this.file = res;
            console.log(res);
            this.displayReport = true;
        });
    }

}
