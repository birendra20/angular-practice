import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h2>welcome to event-binding</h2>
    <h2>{{ greeting }}</h2>
    <button (click)="onClick()">Greet</button>
    <button (click)="greeting = 'welcome '">Greet</button>
  `,
  styles: [],
})
export class EventBindingComponent implements OnInit {
  public greeting = '';

  constructor() {}

  ngOnInit(): void {}
  onClick() {
    alert('welcome to event-binding');
    this.greeting = 'welcome to event-binding ';
  }
}
