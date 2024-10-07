import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpUtilService } from 'src/app/util/service/http-util.service';

const MODELS_API_URL = "/api/pharmacopilote/models/all";

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private httpUtil: HttpUtilService) { }

  getModels(){
    // return this.httpUtil.get(MODELS_API_URL);
    return of(null);
  }
}
