import { CountriesDetailsComponentComponent } from './countries-details-component/countries-details-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: CountriesDetailsComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesDetailsRoutingModule { }
