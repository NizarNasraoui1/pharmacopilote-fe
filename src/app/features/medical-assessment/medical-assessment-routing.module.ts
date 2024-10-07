import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMedicalAssessmentComponent } from './components/create-medical-assessment/create-medical-assessment.component';
import { SearchMedicalAssessmentComponent } from './components/search-medical-assessment/search-medical-assessment.component';

const routes: Routes = [
    {path:'create',component:CreateMedicalAssessmentComponent},
    {path:'search',component:SearchMedicalAssessmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalAssessmentRoutingModule { }
