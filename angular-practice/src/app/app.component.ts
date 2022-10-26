import { Component } from '@angular/core';

//component decorator  : a function that attaches to the class(in our case it attached to the AppComponent)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-practices';
}
