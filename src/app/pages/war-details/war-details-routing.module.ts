import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarDetailsComponentsComponent } from './war-details-components/war-details-components.component';

const routes: Routes = [
  {path: "", component: WarDetailsComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarDetailsRoutingModule { }
