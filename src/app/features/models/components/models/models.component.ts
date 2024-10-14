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
    update = false;
    visible: boolean = false;

    constructor(private modelService:ModelService,private formBuilder:FormBuilder){}

    ngOnInit(): void {
        this.getModels();
        this.initForm();
    }

    initForm(){
        this.addModelForm = this.formBuilder.group({
            id: [''],
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



    addModel() {
        this.visible = true;
    }

    isFormValid(){
        return this.addModelForm.valid;
    }

    saveModel(){
        if(this.isFormValid()){
            if(!this.update){
                this.modelService.saveModel(this.addModelForm.value).subscribe((res)=>{
                    this.afterSaveOrUpdate();
                })
            }
            else{
                this.modelService.updateModel(this.addModelForm.value).subscribe((res)=>{
                    this.afterSaveOrUpdate();
                })
            }
        }
        else{
            this.addModelForm.markAllAsTouched();
        }
    }


    afterSaveOrUpdate(){
        this.getModels();
        this.visible = false;
        this.addModelForm.reset();
    }

    cancel(){
        this.visible = false;
        this.addModelForm.reset();
    }

    showModel(model: any){
        this.addModelForm = this.formBuilder.group({
            id: [model.id],
            name: [model.name, Validators.required],
            verbatim: [model.verbatim, Validators.required],
            report: [model.report, Validators.required]
        });
        this.visible = true;
        this.update = true;
    }
}
