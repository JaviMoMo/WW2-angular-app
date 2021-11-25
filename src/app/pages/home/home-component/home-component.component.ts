import { Component, Input, OnInit } from '@angular/core';
import { NavElement } from 'src/app/core/models/core';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  @Input() public nav!: NavElement[];

  constructor() { }

  ngOnInit(): void {
  }

}
