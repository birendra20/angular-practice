import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <h2 [style.color]="'orange'">inline Style-binding</h2>
    <h2 [style.color]="hasError ? 'red' : 'blue'">Conditional Style-binding</h2>
    <h2 [style.color]="highlightColor">property-Style-binding</h2>
    <h2 [ngStyle]="titleStyles">multiple-Style-binding</h2>
  `,
  styles: [],
})
export class StyleBindingComponent implements OnInit {
  public highlightColor = 'pink';
  public hasError = true;
  public isSpecial = true;
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };

  constructor() {}

  ngOnInit(): void {}
}
