
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';





@NgModule({
  declarations: [
    HomeComponentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
   
  ]
})
export class HomeModule { }
