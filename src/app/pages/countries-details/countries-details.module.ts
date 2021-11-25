import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesDetailsRoutingModule } from './countries-details-routing.module';
import { CountriesDetailsComponentComponent } from './countries-details-component/countries-details-component.component';


@NgModule({
  declarations: [
    CountriesDetailsComponentComponent
  ],
  imports: [
    CommonModule,
    CountriesDetailsRoutingModule
  ]
})
export class CountriesDetailsModule { }
