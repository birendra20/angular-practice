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
