import { Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/util/service/http-util.service';

const MODELS_API_URL = "/api/vigihelp/models";

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private httpUtil: HttpUtilService) { }

  getModels(){
    return this.httpUtil.get(`${MODELS_API_URL}/all`);
  }

  saveModel(model){
    return this.httpUtil.post(MODELS_API_URL,model);
  }

  updateModel(model){
    return this.httpUtil.put(MODELS_API_URL,model);
  }
}
