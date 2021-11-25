import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesServicesService } from '../../countries/services/countries-services.service';

@Component({
  selector: 'app-countries-details-component',
  templateUrl: './countries-details-component.component.html',
  styleUrls: ['./countries-details-component.component.scss']
})
export class CountriesDetailsComponentComponent implements OnInit {
  public countrie: any;
  constructor(private route: ActivatedRoute, public countrieServicesService: CountriesServicesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idCountrie = params.get('idCountrie');

      this.countrieServicesService.getCountrie(idCountrie).subscribe((countrieData) => {
        this.countrie = countrieData;
        console.log("COUNTRIE:", this.countrie)
      });
    });
  }

}
