import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQualityControlComponent } from './components/create-quality-control/create-quality-control.component';
import { QualityControlSearchComponent } from './components/quality-control-search/quality-control-search.component';

const routes: Routes = [
    { path: 'create',component:CreateQualityControlComponent},
    { path: 'search',component:QualityControlSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualityControlRoutingModule { }
