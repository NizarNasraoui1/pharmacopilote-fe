import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUtilService } from 'src/app/util/service/http-util.service';

const DATA_ENTRY_HELPER_API_URL = '/api/pharmacopilote/data-entry-helper';

@Injectable({
  providedIn: 'root'
})
export class DataEntryServiceService {

  constructor(private httpUtil: HttpUtilService) { }

  getDataEntryFile(entryContent): Observable<any> {
    return this.httpUtil.post(`${DATA_ENTRY_HELPER_API_URL}/helper`,entryContent);
  }
}
