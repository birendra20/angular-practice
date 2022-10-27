import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-directive',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">you picked red color</div>
      <div *ngSwitchCase="'blue'">you picked blue color</div>
      <div *ngSwitchCase="'green'">you picked green color</div>
      <div *ngSwitchDefault>pick again</div>
    </div>
  `,
  styles: [],
})
export class NgswitchDirectiveComponent implements OnInit {
  public color = 'blue';
  constructor() {}

  ngOnInit(): void {}
}
