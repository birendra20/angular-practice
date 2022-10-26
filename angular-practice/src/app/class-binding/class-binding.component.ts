import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <h2 class="text-success">class-binding</h2>
    <h2 [class]="successClass">class-binding</h2>
    <p>
      what happen if we use both class attribute and the class binding in the
      same html element
    </p>
    <h4>
      a regular class attribute becomes the dummy attribute in the presence of
      class binding
    </h4>
    <p>you have to use one or the other but not both</p>
    <h2 [class.text-danger]="hasError">class-binding</h2>
    <h2 [ngClass]="messageClass">multiple class-binding</h2>
  `,
  styles: [
    `
      .text-success {
        color: blue;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class ClassBindingComponent implements OnInit {
  public successClass = 'text-success';
  public hasError = true;
  public isSpecial = true;
  public messageClass = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  constructor() {}

  ngOnInit(): void {}
}
