import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateRefrenceVariablesComponent } from './template-refrence-variables/template-refrence-variables.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgifDirectiveComponent } from './structural-directives/ngif-directive/ngif-directive.component';
import { NgswitchDirectiveComponent } from './structural-directives/ngswitch-directive/ngswitch-directive.component';
import { NgforDirectiveComponent } from './structural-directives/ngfor-directive/ngfor-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateRefrenceVariablesComponent,
    TwoWayBindingComponent,
    NgifDirectiveComponent,
    NgswitchDirectiveComponent,
    NgforDirectiveComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
