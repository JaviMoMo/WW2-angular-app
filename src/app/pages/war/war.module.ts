import { WarServicesService } from './services/war-services.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarRoutingModule } from './war-routing.module';
import { WarComponentsComponent } from './war-components/war-components.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    WarComponentsComponent
  ],
  imports: [
    CommonModule,
    WarRoutingModule,
    HttpClientModule,
    RouterModule,
    YouTubePlayerModule
  ],
  providers: [
    WarServicesService
  ]
})
export class WarModule { }
