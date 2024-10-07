import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  openUrlInNewTab(url: string): void {
    window.open(url, '_blank');
  }
}
