import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "countries", loadChildren: () => import("./pages/countries/countries.module").then(m => m.CountriesModule)
  },
  {
    path: "countries/:idCountrie", loadChildren: () => import('./pages/countries-details/countries-details.module').then(m => m.CountriesDetailsModule)
  },
  {
    path: "war", loadChildren: () => import("./pages/war/war.module").then(m => m.WarModule)
  },
  {
    path: "war/:idBattle", loadChildren: () => import('./pages//war-details/war-details.module').then(m => m.WarDetailsModule)
  },
  {
    path: "results", loadChildren: () => import("./pages/results/results.module").then(m => m.ResultsModule)
  },
  {
    path: "contact", loadChildren: () => import("./pages/contact/contact.module").then(m => m.ContactModule)
  },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
