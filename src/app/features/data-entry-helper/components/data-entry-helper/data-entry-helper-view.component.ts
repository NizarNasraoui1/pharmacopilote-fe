import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DataEntryHelperService } from '../../services/data-entry-helper.service';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'vigihelp-view-data-entry-helper',
  standalone: true,
  imports: [CommonModule, TableModule,DialogModule,ButtonModule,FormsModule],
  templateUrl: './data-entry-helper-view.component.html',
  styleUrl: './data-entry-helper-view.component.scss'
})
export class DataEntryHelperViewComponent implements OnInit{
    data;
    visible: boolean = false;
    name: string;
    saved = false;
    saveErrorMsg = "";

    constructor(private dataEntryHelperService:DataEntryHelperService,private messageService:MessageService){}

    ngOnInit(): void {
        this.data = history.state.data;
        if(history.state.saved){
            this.saved = true;
        }
      }

      onSave(){
        if(!this.name || this.name===''){
            this.saveErrorMsg = "Please fill in the name";
            return;
        }
        this.data.name = this.name;
        this.showDialog();
        this.dataEntryHelperService.saveDataEntryHelperData(this.data).subscribe((res)=>{
            this.visible = false;
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Medical Assessment saved'});
        })
      }

      showDialog() {
        this.visible = true;
      }
}
