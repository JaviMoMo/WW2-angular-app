import { FooterComponent } from './core/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/components/nav/nav.component';
import { CoreModule } from './core/core.module';
import { YouTubePlayerModule } from '@angular/youtube-player';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CoreModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
