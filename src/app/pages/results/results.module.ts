import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponentsComponent } from './results-components/results-components.component';
import { ResultsServicesService } from './services/results-services.service';


@NgModule({
  declarations: [
    ResultsComponentsComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ResultsServicesService
  ]
})
export class ResultsModule { }
