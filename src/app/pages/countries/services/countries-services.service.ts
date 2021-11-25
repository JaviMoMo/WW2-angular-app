import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesServicesService {

  public COUNTRIESURL: string = "http://localhost:3000/countries";
  



    constructor(private httpClient: HttpClient ) { }

  public getAllCountries() {
    return this.httpClient.get(this.COUNTRIESURL)
  };

  getCountrie = (idCountrie: any) => {
    return this.httpClient.get(
      `http://localhost:3000/countries/${idCountrie}`
    );
  };

  

}





