import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDataEntryQualityComponent } from './components/create-data-entry-quality/create-data-entry-quality.component';
import { SearchDataEntryQualityComponent } from './components/search-data-entry-quality/search-data-entry-quality.component';

const routes: Routes = [
    {path:'create',component:CreateDataEntryQualityComponent},
    {path:'search',component:SearchDataEntryQualityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEntryQualityRoutingModule { }
