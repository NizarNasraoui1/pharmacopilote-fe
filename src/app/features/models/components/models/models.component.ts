import { Component, OnInit } from '@angular/core';
import { ModelService } from '../../services/model.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pharmacopilote-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {
    models: any[];
    addModelForm :FormGroup<any>;

    constructor(private modelService:ModelService,private formBuilder:FormBuilder){}

    ngOnInit(): void {
        this.getModels();
        this.initForm();
    }

    initForm(){
        this.addModelForm = this.formBuilder.group({
            name: ['', Validators.required],
            verbatim: ['', Validators.required],
            report: ['', Validators.required]
        })
    }

    getModels(){
        this.modelService.getModels().subscribe((res)=>{
            this.models = res;
        });
    }

    visible: boolean = false;

    addModel() {
        this.visible = true;
    }

    isFormValid(){
        return this.addModelForm.valid;
    }

    saveModel(){
        if(this.isFormValid()){
            this.modelService.saveModel(this.addModelForm.value).subscribe((res)=>{
                this.getModels();
                this.visible = false;
                this.addModelForm.reset();
            })
        }
        else{
            this.addModelForm.markAllAsTouched();
        }
    }

    cancel(){
        this.visible = false;
        this.addModelForm.reset();
    }

    showModel(model: any){
        this.addModelForm = this.formBuilder.group({
            name: [model.name, Validators.required],
            verbatim: [model.verbatim, Validators.required],
            report: [model.report, Validators.required]
        });
        this.visible = true;
    }
}
