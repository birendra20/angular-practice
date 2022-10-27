import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefrenceVariablesComponent } from './template-refrence-variables.component';

describe('TemplateRefrenceVariablesComponent', () => {
  let component: TemplateRefrenceVariablesComponent;
  let fixture: ComponentFixture<TemplateRefrenceVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRefrenceVariablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateRefrenceVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
