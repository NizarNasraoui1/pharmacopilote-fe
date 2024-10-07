import { Component } from '@angular/core';
import { ModelService } from '../../services/model.service';

@Component({
  selector: 'pharmacopilote-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent {
    models: any[];

    constructor(private modelService:ModelService){}

    ngOnInit(): void {
        this.getModels();
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
}
