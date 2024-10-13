import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDataEntryComponent } from './components/create-data-entry/create-data-entry.component';
import { SearchDataEntryComponent } from './components/search-data-entry/search-data-entry.component';

const routes: Routes = [
    {path:'create',component:CreateDataEntryComponent},
    {path:'search',component:SearchDataEntryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEntryRoutingModule { }
