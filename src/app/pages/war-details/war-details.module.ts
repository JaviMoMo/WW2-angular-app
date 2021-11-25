import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarDetailsRoutingModule } from './war-details-routing.module';
import { WarDetailsComponentsComponent } from './war-details-components/war-details-components.component';


@NgModule({
  declarations: [
    WarDetailsComponentsComponent
  ],
  imports: [
    CommonModule,
    WarDetailsRoutingModule
  ]
})
export class WarDetailsModule { }
