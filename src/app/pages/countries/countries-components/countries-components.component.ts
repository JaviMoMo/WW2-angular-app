import { Countrie } from './../../../shared/models/shared.models';
import { CountriesServicesService } from './../services/countries-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries-components',
  templateUrl: './countries-components.component.html',
  styleUrls: ['./countries-components.component.scss']
})
export class CountriesComponentsComponent implements OnInit {
  public countries: Countrie[] = [];

  constructor(private countriesServicesService: CountriesServicesService) { }

  ngOnInit(): void {
    this.countriesServicesService.getAllCountries().subscribe(
      (data: any) =>{
      const apiResults: Countrie[] = data;

      const formattedCountries = apiResults.map(({id, name, flag, politic, stability, warSupport, army, alliance }) => ({
        id,
        name,
        flag,
        politic,
        stability,
        warSupport,
        army,
        alliance
      }));
      this.countries = formattedCountries;
    })
  }

  

}
