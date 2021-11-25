import { WarServicesService } from './../../war/services/war-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-war-details-components',
  templateUrl: './war-details-components.component.html',
  styleUrls: ['./war-details-components.component.scss']
})
export class WarDetailsComponentsComponent implements OnInit {
  public battle: any;
  constructor(private route: ActivatedRoute, public warServicesService: WarServicesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idBattle = params.get('idBattle');

      this.warServicesService.getBattle(idBattle).subscribe((battleData) => {
        this.battle = battleData;
        console.log("BATTLE", this.battle)
      })
    })
  }

}
