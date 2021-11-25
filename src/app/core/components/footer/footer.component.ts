import { Component, Input, OnInit } from '@angular/core';
import { FooterElement } from '../../models/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
@Input() public footer!: FooterElement;
  constructor() { }

  ngOnInit(): void {
  }

}
