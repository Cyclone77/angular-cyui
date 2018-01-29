import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cy-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  @Input() title: string;
  @ContentChild('container') containerTemp: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
