import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataEntryHelperViewComponent } from './components/data-entry-helper/data-entry-helper-view.component';
import { CreateDataEntryHelperComponent } from './components/create-data-entry-helper/create-data-entry-helper.component';
import { DataEntryHelperSearchComponent } from './components/data-entry-helper-search/data-entry-helper-search.component';

const routes: Routes = [
    {path:'create',component:CreateDataEntryHelperComponent},
    {path:'view',component:DataEntryHelperViewComponent},
    {path:'search',component:DataEntryHelperSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEntryHelperRoutingModule { }
