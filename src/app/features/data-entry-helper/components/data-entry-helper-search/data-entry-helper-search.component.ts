import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SubSink } from 'subsink';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { DataEntryHelperService } from '../../services/data-entry-helper.service';

@Component({
    selector: 'vigihelp-data-entry-helper-search',
  standalone: true,
  imports: [CommonModule,TableModule,PaginatorModule,ReactiveFormsModule,DialogModule,ButtonModule,InputMaskModule],
  templateUrl: './data-entry-helper-search.component.html',
  styleUrl: './data-entry-helper-search.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DataEntryHelperSearchComponent implements OnInit {
    data!: any[];

    representatives!: any[];

    statuses!: any[];

    loading: boolean = false;

    activityValues: number[] = [0, 100];

    form;

    currentPage = 0;

    pageSize = 5;

    totalRecords = 0;

    subs = new SubSink();

    constructor(private formBuilder: FormBuilder,private dataEntryHelperService:DataEntryHelperService ,private router:Router) {}

    ngOnInit() {
        this.initForm();
        this.subscribeToFormValueChanges();
        this.searchMedicalAssessments();
    }

    initForm(){
        this.form = this.formBuilder.group({
            name: '',
            date: ''
        });
    }


    isFormDatesValid():boolean{
        return this.isValidDate(this.form.value.date);
    }

    isValidDate(dateString: string): boolean {
        if(dateString=='' || dateString == 'JJ/MM/AAAA') return true;
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
        return regex.test(dateString);
    }

    subscribeToFormValueChanges(){
        this.form.valueChanges.pipe(debounceTime(1000)).subscribe(()=>{
            if(this.isFormDatesValid()){
                this.currentPage = 0;
                this.searchMedicalAssessments();
            }
        })
    }

    searchMedicalAssessments(){
        const formValue= this.form.value;
        const searchMedicalAssessmentsRequest: any = {
            name: formValue.name,
            date: formValue.birthdate=='JJ/MM/AAAA'?null:formValue.date
        }
        this.subs.sink = this.dataEntryHelperService.search(this.currentPage,this.pageSize,searchMedicalAssessmentsRequest).subscribe((res)=>{
            this.data = res.content;
            this.totalRecords = res.totalElements;
        });
    }

    onPageChange(event: any) {
        this.currentPage = event.page;
        this.pageSize = event.rows;
        this.searchMedicalAssessments();
    }

    viewDataEntryHelper(id) {
        this.dataEntryHelperService.getDataEntryHelperById(id).subscribe((res) => {
            this.router.navigate(['/data-entry-helper/view'], { state: { data: res,saved:true } });
        })
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
