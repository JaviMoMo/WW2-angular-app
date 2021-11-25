import { ResultsServicesService } from './../services/results-services.service';
import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/shared/models/shared.models';

@Component({
  selector: 'app-results-components',
  templateUrl: './results-components.component.html',
  styleUrls: ['./results-components.component.scss']
})
export class ResultsComponentsComponent implements OnInit {
  public results: Result[] = [];

  constructor(private resultsServicesService: ResultsServicesService) { }

  ngOnInit(): void {
    this.resultsServicesService.getAllResults().subscribe(
      (data:any) => {
        const apiResults: Result[] = data;

        const formattedResults = apiResults.map(({id, title, img}) => ({
          id, title, img
        }));
        this.results = formattedResults;
      }
    )
  }

}
