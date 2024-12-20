import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBatchAssessmentComponent } from './components/create-batch-assessment/create-batch-assessment.component';
import { SearchBatchAssessmentComponent } from './components/search-batch-assessment/search-batch-assessment.component';
import { ViewBatchAssessmentComponent } from './components/view-batch-assessment/view-batch-assessment.component';

const routes: Routes = [
    {path:'create',component:CreateBatchAssessmentComponent},
    {path:'search',component:SearchBatchAssessmentComponent},
    {path:'view/:id',component:ViewBatchAssessmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchAssessmentRoutingModule { }
