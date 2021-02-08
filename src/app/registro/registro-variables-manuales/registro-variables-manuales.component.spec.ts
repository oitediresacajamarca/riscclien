import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVariablesManualesComponent } from './registro-variables-manuales.component';

describe('RegistroVariablesManualesComponent', () => {
  let component: RegistroVariablesManualesComponent;
  let fixture: ComponentFixture<RegistroVariablesManualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroVariablesManualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVariablesManualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
