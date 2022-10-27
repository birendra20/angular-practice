import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
    <h2>
      {{ 'hello ' + parentData }}
    </h2>
  `,
  styles: [],
})
export class ComponentInteractionComponent implements OnInit {
  @Input() public parentData: any;

  constructor() {}

  ngOnInit(): void {}
}
