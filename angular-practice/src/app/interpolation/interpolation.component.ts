import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    <h2>{{ name }}</h2>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ 'Hello ' + name }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <h2>{{ greetUser() }}</h2>
    <h2>{{ siteUrl }}</h2>
  `,
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent implements OnInit {
  public name = 'Welcome to Angular.js Tutorial';
  public siteUrl = window.location.href; // you cannot directly use {{window.location.href}} above
  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return 'we are using methods ' + this.name;
  }
}

//with interpolation you can bind data from the class to the template
//and the syntax is {{}}

//with interpolation you can bind data from the
// class to the template and the syntax is
// double curly braces and within the
// double curly braces you have a property
// or an expression so you can evaluate any
// JavaScript expression and the result
// will be displayed in the browser you can
// also perform string concatenation you
// can use JavaScript properties and
// methods as well you can even call
// methods that you have defined in the
// components class within interpolation
// however you cannot perform assignments
// or access global JavaScript variables
// with interpolation all right that's
