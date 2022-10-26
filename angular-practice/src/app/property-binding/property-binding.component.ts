import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <h2>{{ name }}</h2>
    <input [id]="myId" type="text" value="Vishwas" />
    <br />
    <input id="{{ myId }}" type="text" value="Vishwas" />
    <h2>
      interpolation only works for string value ,it will not work for boolean
      value
    </h2>
    <input
      [disabled]="isDisabled"
      id="{{ myId }}"
      type="text"
      value="Vishwas"
    />
    <input
      bind-disabled="isDisabled"
      id="{{ myId }}"
      type="text"
      value="Vishwas"
    />
  `,
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent implements OnInit {
  public name = 'Welcome to property binding';
  public myId = 'testId';
  public isDisabled = 'true';
  constructor() {}

  ngOnInit(): void {}
}
