import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { BatchAssessmentService } from '../../services/batch-assessment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pharmacopilote-view-batch-assessment',
  standalone: true,
  imports: [CommonModule,ButtonModule,TableModule,DialogModule],
  templateUrl: './view-batch-assessment.component.html',
  styleUrl: './view-batch-assessment.component.scss'
})
export class ViewBatchAssessmentComponent implements OnInit {
    assessmentBatch;
    reportVisible;
    report;

    constructor(private route:ActivatedRoute,private assessmentBatchService:BatchAssessmentService){}
    ngOnInit(): void {
        this.getAssessmentBatch();
    }
    getAssessmentBatch() {
        this.route.paramMap.subscribe((params) => {
            const id = params.get('id');
            this.assessmentBatchService.getAssessmentBatchById(id).subscribe((res) => {
                this.assessmentBatch = res.medicalEvents;
            });
        })
    }

    showReport(id){
        console.log(id);
        console.log(this.assessmentBatch);
        this.report = this.assessmentBatch.find(report=>report.id==id).report;
        this.reportVisible = true;
    }
}
