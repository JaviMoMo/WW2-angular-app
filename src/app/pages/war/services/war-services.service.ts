import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarServicesService {

  public BATTLESURL: string = "http://localhost:3000/war";

  constructor(private httpClient: HttpClient) { }

  public getAllBattles() {
    return this.httpClient.get(this.BATTLESURL)
  };

  getBattle = (idBattle: any) => {
    return this.httpClient.get(
      `http://localhost:3000/war/${idBattle}`
    );
  };
}
