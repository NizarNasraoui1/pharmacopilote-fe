import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpUtilService {
    constructor(private http: HttpClient) {}

    get(url: string, requestParams?: any): Observable<any> {
        var params = new HttpParams();
        if (requestParams) {
            for (let param of Object.keys(requestParams)) {
                params = params.append(param, requestParams[param]);
            }
        }
        return this.http.get(url, { params });
    }
    post(url: string, body?: any, requestParams?: any): Observable<any> {
        var params = new HttpParams();
        if (requestParams) {
            for (let param of Object.keys(requestParams)) {
                params = params.append(param, requestParams[param]);
            }
        }
        return this.http.post(url, body, { params });
    }

    put(url: string, body: any, id?: number): Observable<any> {
        if (id) {
            return this.http.put(`${url}/${id}`, body);
        }
        return this.http.put(url, body);
    }

    delete(url: string, id?: number): Observable<any> {
        if (id) {
            return this.http.delete(`${url}/${id}`);
        }
        return this.http.delete(url);
    }

    getBlob(url:string){
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/pdf'
          });
        return this.http.get(url,{
            headers: headers,
            responseType: 'blob'
          });
      }

      postBlob(url:string,body:any){
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/pdf'
          });
        return this.http.post(url,body,{
            headers: headers,
            responseType: 'blob'
          });
      }
}
