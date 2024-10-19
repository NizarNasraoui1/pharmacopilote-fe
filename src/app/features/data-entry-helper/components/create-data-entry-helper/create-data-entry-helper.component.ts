import { Component } from '@angular/core';
import { DataEntryHelperViewComponent } from '../data-entry-helper/data-entry-helper-view.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import {  Router } from '@angular/router';
import { DataEntryServiceService } from '../../services/data-entry-service.service';
import { FormsModule } from '@angular/forms';
import { SpinnerService } from 'src/app/shared/services/spinner-service';

@Component({
  selector: 'pharmacopilote-create-data-entry-helper',
  standalone: true,
  imports: [DataEntryHelperViewComponent,InputTextareaModule,ButtonModule,FormsModule],
  templateUrl: './create-data-entry-helper.component.html',
  styleUrl: './create-data-entry-helper.component.scss'
})
export class CreateDataEntryHelperComponent {
    entryContent;

        constructor(private router:Router,private dataEntryHelperService:DataEntryServiceService,private spinnerService: SpinnerService){}

        submit() {
            this.spinnerService.show();
            this.dataEntryHelperService.getDataEntryFile(this.entryContent).subscribe(
                (res) => {
                    this.router.navigate(['/data-entry-helper/view'], { state: { data: res } });
                    this.spinnerService.hide();
                }
            );

        }
}
