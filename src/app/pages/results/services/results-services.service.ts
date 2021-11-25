import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsServicesService {

  public RESULTSURL: string = "http://localhost:3000/results";

  constructor(private httpClient: HttpClient) { }

  public getAllResults(){
    return this.httpClient.get(this.RESULTSURL)
  };
}
