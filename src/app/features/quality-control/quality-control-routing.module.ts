import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQualityControlComponent } from './components/create-quality-control/create-quality-control.component';

const routes: Routes = [
    { path: 'create',component:CreateQualityControlComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualityControlRoutingModule { }
