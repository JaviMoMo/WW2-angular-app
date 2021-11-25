import { Component } from '@angular/core';
import { NavElement, FooterElement } from './core/models/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public nav: NavElement[] = [
   {
     name: "Home",
     link: "/"
   },
   {
    name: "Countries",
    link: "/countries"
  },
  {
    name: "War",
    link: "/war"
  },
  {
    name: "Results",
    link: "/results"
  },
  {
    name: "Contact",
    link: "/contact"
  }
 ]
 public footer: FooterElement = {
   name: "Created by Javier Moreno Montejo",
   text: "Upgrade Hub ©2021"
 }
 
}
