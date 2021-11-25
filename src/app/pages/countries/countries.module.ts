import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponentsComponent } from './countries-components/countries-components.component';
import { CountriesServicesService } from './services/countries-services.service';


@NgModule({
  declarations: [
    CountriesComponentsComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    CountriesServicesService
  ]
})
export class CountriesModule { }
