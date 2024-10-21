import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { SubSink } from 'subsink';
import { MedicalAssessmentService } from '../../services/medical-assessment.service';

@Component({
  selector: 'pharmacopilote-search-medical-assessment',
  templateUrl: './search-medical-assessment.component.html',
  styleUrls: ['./search-medical-assessment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchMedicalAssessmentComponent implements OnInit,OnDestroy {

    questionnaires!: any[];

    representatives!: any[];

    statuses!: any[];

    loading: boolean = false;

    activityValues: number[] = [0, 100];

    form;

    currentPage = 0;

    pageSize = 5;

    totalRecords = 0;

    subs = new SubSink();

    constructor(private formBuilder: FormBuilder,private medicalAssessmentService:MedicalAssessmentService ,private router:Router) {}

    ngOnInit() {
        this.initForm();
        this.subscribeToFormValueChanges();
        this.searchQuestionnaires();
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
                this.searchQuestionnaires();
            }
        })
    }

    searchQuestionnaires(){
        const formValue= this.form.value;
        const searchQuestionnaireRequest: any = {
            name: formValue.name,
            date: formValue.birthdate=='JJ/MM/AAAA'?null:formValue.date
        }
        this.subs.sink = this.medicalAssessmentService.searchQuestionnaires(this.currentPage,this.pageSize,searchQuestionnaireRequest).subscribe((res)=>{
            this.questionnaires = res.content;
            this.totalRecords = res.totalElements;
        });
    }

    onPageChange(event: any) {
        this.currentPage = event.page;
        this.pageSize = event.rows;
        this.searchQuestionnaires();
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
