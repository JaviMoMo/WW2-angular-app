import { WarServicesService } from './../services/war-services.service';
import { Battle } from './../../../shared/models/shared.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-war-components',
  templateUrl: './war-components.component.html',
  styleUrls: ['./war-components.component.scss']
})
export class WarComponentsComponent implements OnInit {
  public battles: Battle[] = [];

  constructor(private warServicesService: WarServicesService) { }

  ngOnInit(): void {
    this.warServicesService.getAllBattles().subscribe(
      (data: any) =>{
        const apiResults: Battle[] = data;

        const formattedBattles = apiResults.map(({id, title, img, text, victory}) => ({
          id, title, img, text, victory
        }));
        this.battles = formattedBattles;
      }
    )
  }

}
