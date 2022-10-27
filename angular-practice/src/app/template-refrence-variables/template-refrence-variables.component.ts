import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-refrence-variables',
  template: `
    <h2>welcome to app-template-reference-variables</h2>
    <input #myInput type="text" />
    <button (click)="logMessage(myInput.value)">Log</button>
  `,
  styles: [],
})
export class TemplateRefrenceVariablesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  logMessage(value: any) {
    console.log(value);
  }
}
