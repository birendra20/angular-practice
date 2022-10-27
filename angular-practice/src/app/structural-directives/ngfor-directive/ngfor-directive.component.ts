import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-directive',
  template: `
    <div *ngFor="let color of colors; index as i">
      <h2>{{ i }} {{ color }}</h2>
    </div>
  `,
  styles: [],
})
export class NgforDirectiveComponent implements OnInit {
  public colors = ['red', 'blue', 'green', 'yellow'];
  constructor() {}

  ngOnInit(): void {}
}
