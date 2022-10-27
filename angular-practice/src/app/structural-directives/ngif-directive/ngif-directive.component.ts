import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  template: `
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>we are using ngif-directive</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>hidden</h2>
    </ng-template>
  `,
  styles: [],
})
export class NgifDirectiveComponent implements OnInit {
  displayName = true;

  constructor() {}

  ngOnInit(): void {}
}
