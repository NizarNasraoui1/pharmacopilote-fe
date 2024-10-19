import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataEntryHelperViewComponent } from './components/data-entry-helper/data-entry-helper-view.component';
import { CreateDataEntryHelperComponent } from './components/create-data-entry-helper/create-data-entry-helper.component';

const routes: Routes = [
    {path:'create',component:CreateDataEntryHelperComponent},
    {path:'view',component:DataEntryHelperViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEntryHelperRoutingModule { }
